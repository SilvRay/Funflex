const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Désactive le body parser de Vercel pour lire le raw body (requis par Stripe)
export const config = {
  api: { bodyParser: false },
};

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  const rawBody = await getRawBody(req);
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature error:", err.message);
    return res.status(400).json({ error: `Webhook error: ${err.message}` });
  }

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;
    const { name, email } = paymentIntent.metadata;

    console.log(`Paiement confirmé pour ${email} — inscription LearnWorlds...`);

    try {
      await enrollUserInLearnWorlds(name, email);
      console.log(`Inscription LearnWorlds réussie pour ${email}`);
    } catch (err) {
      console.error("Erreur inscription LearnWorlds:", err.message);
      // On répond 200 quand même pour que Stripe ne renvoie pas le webhook
    }
  }

  res.json({ received: true });
};

// ─── LearnWorlds ────────────────────────────────────────────────────────────

async function getLearnWorldsToken() {
  const domain = process.env.LEARNWORLDS_SCHOOL_DOMAIN;
  const res = await fetch(`https://${domain}/oauth2/access_token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Lw-Client": process.env.LEARNWORLDS_CLIENT_ID,
    },
    body: JSON.stringify({
      client_id: process.env.LEARNWORLDS_CLIENT_ID,
      client_secret: process.env.LEARNWORLDS_CLIENT_SECRET,
      grant_type: "client_credentials",
    }),
  });
  const data = await res.json();
  if (!data.access_token) throw new Error("LearnWorlds token non obtenu : " + JSON.stringify(data));
  return data.access_token;
}

async function enrollUserInLearnWorlds(name, email) {
  const token = await getLearnWorldsToken();
  const domain = process.env.LEARNWORLDS_SCHOOL_DOMAIN;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    "Lw-Client": process.env.LEARNWORLDS_CLIENT_ID,
  };

  // 1. Créer l'utilisateur (ou le récupérer s'il existe déjà)
  const nameParts = (name || "").trim().split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  const userRes = await fetch(`https://${domain}/api/v2/users`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      username: email,
      email,
      password: generateTemporaryPassword(),
      fields: { first_name: firstName, last_name: lastName },
    }),
  });

  const userData = await userRes.json();

  // Si l'utilisateur existe déjà, LearnWorlds retourne une erreur — on cherche son ID
  let userId = userData.id;
  if (!userId) {
    const searchRes = await fetch(
      `https://${domain}/api/v2/users?email=${encodeURIComponent(email)}`,
      { headers }
    );
    const searchData = await searchRes.json();
    userId = searchData.data?.[0]?.id;
    if (!userId) throw new Error("Utilisateur LearnWorlds introuvable après création");
  }

  // 2. Inscrire l'utilisateur au cours
  const enrollRes = await fetch(
    `https://${domain}/api/v2/users/${userId}/course-subscriptions`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({ course_id: process.env.LEARNWORLDS_COURSE_ID }),
    }
  );

  const enrollData = await enrollRes.json();
  if (!enrollRes.ok) throw new Error("Erreur inscription cours : " + JSON.stringify(enrollData));
}

function generateTemporaryPassword() {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const rand = (str) => str[Math.floor(Math.random() * str.length)];
  return (
    rand(upper) +
    Array.from({ length: 8 }, () => rand(chars + digits)).join("") +
    "!"
  );
}
