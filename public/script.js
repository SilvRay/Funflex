// ============================================
    // DATA
    // ============================================
    
    const seriesData = [
      {
        id: 0,
        title: "Maât Continuum",
        category: "Science de l'Existence",
        categoryIcon: "🔮",
        description: "Une formation complète et transformatrice explorant les sciences de l'existence, la relation et la nutrition. De l'orientation aux principes fondamentaux, apprenez à vous comprendre et à transformer votre vie.",
        level: "Débutant → Avancé",
        totalDuration: "120h+",
        match: 99,
        year: 2024,
        isNew: true,
        isPopular: true,
        gradient: "from-indigo-600 to-purple-700",
        seasons: [
          {
            title: "01 - Orientation",
            episodes: [
              { title: "Orientation Video", duration: "31:21", progress: 0, resources: "PDF 16 pages" }
            ]
          },
          {
            title: "02 - Apprentissage",
            episodes: [
              { title: "Apprendre à penser", duration: "50:39", progress: 0, resources: "PDF 23 pages" },
              { title: "Apprendre à apprendre", duration: "57:59", progress: 0, resources: "PDF 20 pages" },
              { title: "Monitoring application AMAP", duration: "01:17:57", progress: 0, resources: "PDF 6 pages" },
              { title: "Approfondissement : Thot l'Apprenti-sage", duration: "02:44:17", progress: 0, resources: "PDF 21 pages" }
            ]
          },
          {
            title: "03 - Le Juste Accord",
            episodes: [
              { title: "Accords 1 et 2", duration: "01:24:57", progress: 0, resources: "PDF 17 pages" },
              { title: "Accords 3, 4 et 5", duration: "28:51", progress: 0, resources: "PDF 8 pages" }
            ]
          },
          {
            title: "04 - Science de l'Existence",
            episodes: [
              { title: "Le But de l'Existence - Leçon", duration: "56:18", progress: 0, resources: "PDF 20 pages" },
              { title: "Le But de l'Existence - Q/R", duration: "21:58", progress: 0 },
              { title: "Le But de l'Existence - WebQuest", duration: "01:42:53", progress: 0 },
              { title: "Mentalisme & Correspondance - Leçon", duration: "01:01:29", progress: 0, resources: "PDF 14 pages" },
              { title: "Mentalisme & Correspondance - Q/R", duration: "44:51", progress: 0 },
              { title: "Mentalisme & Correspondance - WebQuest", duration: "01:51:32", progress: 0 },
              { title: "Vibration & Polarité - Leçon", duration: "53:41", progress: 0, resources: "PDF 8 pages" },
              { title: "Vibration & Polarité - Q/R", duration: "30:10", progress: 0 },
              { title: "Vibration & Polarité - WebQuest", duration: "01:59:04", progress: 0 },
              { title: "Rythme & Causalité - Leçon", duration: "49:53", progress: 0, resources: "PDF 9 pages" },
              { title: "Rythme & Causalité - Q/R", duration: "01:04:20", progress: 0 },
              { title: "Rythme & Causalité - WebQuest", duration: "01:52:41", progress: 0 },
              { title: "Genre & Générativité - Leçon", duration: "01:46:19", progress: 0, resources: "PDF 12 pages" },
              { title: "Genre & Générativité - WebQuest", duration: "01:56:09", progress: 0 }
            ]
          },
          {
            title: "05 - Monitoring Intégration Existence",
            episodes: [
              { title: "Activez le mode survie - Leçon", duration: "01:32:08", progress: 0, resources: "PDF 16 pages" },
              { title: "Activez le mode survie - WebQuest", duration: "01:37:48", progress: 0 },
              { title: "Les Emotions - Leçon", duration: "01:19:24", progress: 0, resources: "PDF 7 pages" },
              { title: "En quête de sens - Leçon", duration: "48:49", progress: 0 },
              { title: "Le pouvoir de l'intention - Leçon", duration: "01:24:28", progress: 0 },
              { title: "La magie de l'intention - Leçon", duration: "01:14:04", progress: 0 },
              { title: "La science des perceptions - Leçon", duration: "01:38:48", progress: 0, resources: "PDF 17 pages" }
            ]
          },
          {
            title: "06 - Science de la Relation",
            episodes: [
              { title: "Introduction au Zola", duration: "01:28:16", progress: 0, resources: "PDF 18 pages" },
              { title: "Zola introduction et clarification - Leçon", duration: "01:06:57", progress: 0, resources: "PDF 19 pages" },
              { title: "Zola introduction et clarification - Q/R", duration: "19:26", progress: 0 },
              { title: "Zola introduction et clarification - WebQuest", duration: "01:07:25", progress: 0 },
              { title: "Protocoles de la relation - Leçon", duration: "55:28", progress: 0, resources: "PDF 20 pages" },
              { title: "Protocoles de la relation - Q/R", duration: "23:51", progress: 0 },
              { title: "Protocoles de la relation - WebQuest Triangle d'Or", duration: "01:16:46", progress: 0, resources: "PDF 9 pages" },
              { title: "Konzo - Leçon", duration: "01:52:52", progress: 0, resources: "PDF 10 pages" },
              { title: "Konzo - WebQuest", duration: "01:59:10", progress: 0, resources: "PDF 12 pages" },
              { title: "Mapenzi - Leçon", duration: "01:45:14", progress: 0, resources: "PDF 12 pages" },
              { title: "Mapenzi - WebQuest", duration: "01:49:50", progress: 0, resources: "PDF 10 pages" }
            ]
          },
          {
            title: "07 - Monitoring d'Intégration Relation",
            episodes: [
              { title: "Révision SR", duration: "01:34:14", progress: 0 },
              { title: "Les bases de la SR - Atelier", duration: "02:07:56", progress: 0 },
              { title: "Comprendre la communication", duration: "02:09:06", progress: 0 },
              { title: "Konzo 1", duration: "02:23:20", progress: 0 },
              { title: "Konzo 2", duration: "02:07:17", progress: 0 },
              { title: "Konzo 3", duration: "02:16:43", progress: 0 },
              { title: "Mapenzi 1", duration: "02:40:51", progress: 0 },
              { title: "Mapenzi 2", duration: "01:44:41", progress: 0 },
              { title: "Mapenzi 3 Féminisme", duration: "02:15:45", progress: 0, resources: "PDF 28 pages" },
              { title: "Actes manqués et non-dits - Leçon", duration: "01:58:52", progress: 0, resources: "PDF 9 pages" }
            ]
          },
          {
            title: "08 - Science de la Reproduction",
            episodes: [
              { title: "Introduction reproduction", duration: "02:30:55", progress: 0, resources: "PDF 36 pages" },
              { title: "La malédiction de la dimension - Leçon", duration: "02:30:01", progress: 0, resources: "PDF 32 pages" },
              { title: "La malédiction de la dimension - WebQuest", duration: "02:34:02", progress: 0, resources: "PDF 12 pages" },
              { title: "Les parasites psychiques - Leçon", duration: "02:23:54", progress: 0, resources: "PDF 16 pages" },
              { title: "Les parasites psychiques - WebQuest", duration: "02:16:18", progress: 0 },
              { title: "La stratégie du choc - Leçon", duration: "02:06:00", progress: 0, resources: "PDF 22 pages" },
              { title: "La stratégie du choc - WebQuest", duration: "02:11:04", progress: 0 },
              { title: "Sortir de la malédiction / conditionnement", duration: "02:22:27", progress: 0, resources: "PDF 39 pages" },
              { title: "La guérison spirituelle", duration: "01:26:14", progress: 0, resources: "PDF 24 pages" }
            ]
          },
          {
            title: "09 - Science de la Nutrition",
            episodes: [
              { title: "L'incroyable technologie du corps humain", duration: "01:55:17", progress: 0, resources: "PDF 40 pages" },
              { title: "Vision holistique de l'alimentation", duration: "02:02:51", progress: 0, resources: "PDF 27 pages" },
              { title: "Alimentation sensorielle", duration: "02:03:17", progress: 0, resources: "PDF 36 pages" },
              { title: "Alimaâtation", duration: "02:24:09", progress: 0, resources: "PDF 39 pages" },
              { title: "Alimentation vivante", duration: "02:23:34", progress: 0, resources: "PDF 49 pages" },
              { title: "Les liquides", duration: "02:23:34", progress: 0, resources: "PDF 40 pages" },
              { title: "Naturel vs hybride", duration: "02:23:34", progress: 0, resources: "PDF 34 pages" },
              { title: "La société toxique", duration: "02:01:03", progress: 0, resources: "PDF 24 pages" },
              { title: "Additifs alimentaires, danger !", duration: "02:03:06", progress: 0, resources: "PDF 23 pages" },
              { title: "Système de protection et de défense", duration: "01:48:47", progress: 0 }
            ]
          }
        ]
      },
      {
        id: 1,
        title: "Au Coeur des Mystères",
        category: "Spiritualité & Mystères",
        categoryIcon: "🔮",
        description: "Une émission qui a pour but de répondre aux questionnements de toutes celles et ceux qui font face à des incompréhension sur leur chemin spirituel. Explorez les mystères sacrés, les ordres spirituels et la spiritualité de nos ancêtres.",
        level: "Tous niveaux",
        totalDuration: "100h+",
        match: 95,
        year: 2024,
        isNew: true,
        isPopular: true,
        gradient: "from-amber-600 to-red-700",
        seasons: [
          {
            title: "01 - Enseignements des Mystères",
            episodes: [
              { title: "L'organisation des Ordres Spirituels", duration: "43:28", progress: 0 },
              { title: "L'en Haut d'en Bas, les deux mondes", duration: "46:46", progress: 0 },
              { title: "Spiritualité et Renaissance Africaine", duration: "01:03:54", progress: 0 },
              { title: "La vraie Spiritualité de nos Ancêtres", duration: "49:55", progress: 0 },
              { title: "Enfer et Paradis le choc des Visions", duration: "51:58", progress: 0 },
              { title: "Le Mystère des Égrégores", duration: "01:06:24", progress: 0 },
              { title: "La guerre Des Égrégores", duration: "55:19", progress: 0 }
            ]
          },
          {
            title: "02 - Les Noces Mystiques",
            episodes: [
              { title: "La Dualité Sacrée", duration: "01:05:41", progress: 0 },
              { title: "L'Âme d'Isis", duration: "01:01:42", progress: 0 },
              { title: "La Femme et le Péché Originel", duration: "01:32:51", progress: 0 },
              { title: "Isis Dévoilée", duration: "01:01:01", progress: 0 },
              { title: "L'Esprit d'Osiris", duration: "01:22:36", progress: 0 },
              { title: "La Mort d'Osiris", duration: "01:17:34", progress: 0 },
              { title: "La Résurrection d'Osiris", duration: "01:03:49", progress: 0 },
              { title: "L'Union Sacrée", duration: "01:52:01", progress: 0 }
            ]
          },
          {
            title: "03 - Le Périple des Ancêtres",
            episodes: [
              { title: "A l'Aube des Ancêtre, Zénith et Nadir", duration: "01:20:18", progress: 0 },
              { title: "Le Cycle des Ancêtres", duration: "01:26:42", progress: 0 },
              { title: "Les types d'Ancêtres", duration: "01:30:40", progress: 0 },
              { title: "Qu'est-ce qu'un Culte ?", duration: "01:11:30", progress: 0 },
              { title: "Les Différents Types de Culte", duration: "01:29:00", progress: 0 },
              { title: "Culte des Morts ou Culte de Râ", duration: "01:09:14", progress: 0 },
              { title: "Le Rituel de la Libération", duration: "01:44:27", progress: 0 }
            ]
          },
          {
            title: "04 - Les Mystères du Jugement",
            episodes: [
              { title: "Le tribunal d'Osiris", duration: "01:02:16", progress: 0 },
              { title: "Anubis le passage des Âmes", duration: "01:17:13", progress: 0 },
              { title: "Les Confessions Négatives", duration: "01:21:25", progress: 0 },
              { title: "Maât, la Pesée du Cœur", duration: "59:47", progress: 0 },
              { title: "La Plume de Nephtys", duration: "01:44:25", progress: 0 },
              { title: "Horus l'Intègre", duration: "01:32:04", progress: 0 },
              { title: "Thot le Notaire", duration: "01:04:09", progress: 0 },
              { title: "Le Jugement Dernier", duration: "01:14:49", progress: 0 }
            ]
          },
          {
            title: "05 - Le Livre de Mâat",
            episodes: [
              { title: "L'offrande à Maât - Réflexion", duration: "01:46:56", progress: 0 },
              { title: "Introduction – Partie 1", duration: "01:01:18", progress: 0 },
              { title: "Introduction – Partie 2", duration: "01:07:42", progress: 0 },
              { title: "La plume d'Isis", duration: "01:17:41", progress: 0 },
              { title: "Livre de Maât épisode 5", duration: "01:33:37", progress: 0 },
              { title: "Livre de Maât épisode 6", duration: "01:12:08", progress: 0 },
              { title: "Livre de Maât épisode 7", duration: "01:24:24", progress: 0 },
              { title: "Livre de Maât épisode 8", duration: "01:25:45", progress: 0 },
              { title: "Livre de Maât épisode 9", duration: "01:01:10", progress: 0 },
              { title: "Livre de Maât épisode 10", duration: "01:20:43", progress: 0 }
            ]
          },
          {
            title: "06 - Hors-série",
            episodes: [
              { title: "Le sens caché du Notre Père", duration: "01:30:13", progress: 0 },
              { title: "Sexe, un magia d'incantation", duration: "01:38:17", progress: 0 },
              { title: "Suprématie blanche ou racisme", duration: "01:34:51", progress: 0 },
              { title: "Alimaâtation qu'est-ce que c'est ?", duration: "01:18:47", progress: 0 },
              { title: "La malédiction des non-blancs", duration: "01:19:55", progress: 0 },
              { title: "La fin de l'impunité", duration: "01:33:31", progress: 0 },
              { title: "Films d'horreur & Malédiction", duration: "02:05:49", progress: 0 },
              { title: "Le pouvoir des chants ancestraux", duration: "02:19:41", progress: 0 },
              { title: "L'amour inconditionnel", duration: "01:41:24", progress: 0 },
              { title: "Le mystère des concessions", duration: "01:55:22", progress: 0 },
              { title: "L'enfer du pardon", duration: "01:13:08", progress: 0 },
              { title: "Les mystères de la voie lactée", duration: "01:02:39", progress: 0 },
              { title: "Le mystère des invocations", duration: "01:30:08", progress: 0 },
              { title: "Sortir de la pauvreté", duration: "01:03:36", progress: 0 },
              { title: "L'endogamie, la seule issue", duration: "02:56:38", progress: 0 },
              { title: "Le kidnapping", duration: "01:24:00", progress: 0 },
              { title: "La divinité dévoilée", duration: "01:51:22", progress: 0 },
              { title: "La conquête de la vie", duration: "01:05:32", progress: 0 },
              { title: "Le mystère des intentions justes", duration: "03:47:33", progress: 0 }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Complément de Quête",
        category: "Développement Personnel & Réflexion",
        categoryIcon: "🌟",
        description: "Cette série vous permet d'aborder de nombreuses thématiques sous un angle inédit. Chacune d'entre elle vous invite à réfléchir autrement et vous donne l'opportunité d'élargir votre vision du monde.",
        level: "Tous niveaux",
        totalDuration: "130h+",
        match: 92,
        year: 2024,
        isNew: true,
        isPopular: true,
        gradient: "from-cyan-600 to-blue-700",
        seasons: [
          {
            title: "01 - Questionnements Contemporains",
            episodes: [
              { title: "Actualités, All Lives Matter", duration: "02:41:33", progress: 0 },
              { title: "Amour & Pardon", duration: "02:08:48", progress: 0 },
              { title: "Comprendre le VIH/SIDA", duration: "02:05:07", progress: 0, resources: "PDF 16 pages" },
              { title: "Etat d'urgence compensatoire sanitaire", duration: "49:26", progress: 0 }
            ]
          },
          {
            title: "02 - Crises & Pandémies",
            episodes: [
              { title: "Corona - Preservez votre VIE", duration: "02:31:24", progress: 0 },
              { title: "Corona - Confinement", duration: "01:31:57", progress: 0 },
              { title: "Corona - Etat urgence sanitaire, pour QUI ?", duration: "01:51:33", progress: 0 },
              { title: "La responsabilité en période de pandémie", duration: "01:08:54", progress: 0 }
            ]
          },
          {
            title: "03 - Afrique & Opportunités",
            episodes: [
              { title: "Fenêtre ouverte sur l'Afrique - L'Afrique face à elle-même", duration: "02:25:03", progress: 0 },
              { title: "Les opportunités d'affaire et de réseau en Afrique", duration: "02:09:56", progress: 0 }
            ]
          },
          {
            title: "04 - Existence & Transformation",
            episodes: [
              { title: "Ils ont gagné", duration: "01:41:34", progress: 0 },
              { title: "Intégrité mémorielle et dynamiques de l'existence", duration: "01:22:07", progress: 0 },
              { title: "L'État d'urgence compensatoire", duration: "01:01:22", progress: 0 },
              { title: "L'humain en devenir", duration: "01:41:31", progress: 0, resources: "PDF 12 pages" },
              { title: "La beauté de la douleur et la magnificence du plaisir", duration: "47:54", progress: 0 }
            ]
          },
          {
            title: "05 - Lois Universelles & Pouvoir",
            episodes: [
              { title: "La loi de la traction", duration: "01:21:50", progress: 0 },
              { title: "La magie de la fermentation", duration: "02:33:36", progress: 0 },
              { title: "Tout est Energie - Le Pouvoir du Mental", duration: "02:01:21", progress: 0 },
              { title: "La portée spirituelle des accords 1", duration: "44:50", progress: 0 },
              { title: "La portée spirituelle des accords 2", duration: "30:21", progress: 0 }
            ]
          },
          {
            title: "06 - Nutrition & Santé",
            episodes: [
              { title: "La puissance cachée de l'allaitement - La voie lactée", duration: "01:15:17", progress: 0 },
              { title: "La puissance cachée de l'allaitement - Ressources", duration: "01:02:17", progress: 0, resources: "PDF 36 pages" },
              { title: "Le lait maternel comme liquide amniotique", duration: "01:02:17", progress: 0 },
              { title: "La Société Toxique 1", duration: "01:46:48", progress: 0 },
              { title: "La Société Toxique 2", duration: "02:10:46", progress: 0 },
              { title: "La Société Toxique 3", duration: "01:13:33", progress: 0 }
            ]
          },
          {
            title: "07 - Spiritualité & Valeurs",
            episodes: [
              { title: "La reconnaissance", duration: "01:57:29", progress: 0 },
              { title: "Pourquoi nous ne fêtons pas...", duration: "01:19:07", progress: 0 },
              { title: "L'amour inconditionnel", duration: "01:41:24", progress: 0 },
              { title: "L'enfer du pardon", duration: "01:13:08", progress: 0 },
              { title: "Le mystère des intentions justes", duration: "03:47:33", progress: 0 }
            ]
          },
          {
            title: "08 - Droits & Justice",
            episodes: [
              { title: "Le droit la meilleure arme contre les puissants", duration: "01:49:23", progress: 0 },
              { title: "Port du masque obligatoire, que dit la loi ?", duration: "01:22:39", progress: 0, resources: "PDF 13 pages" },
              { title: "Passeport vaccinal", duration: "01:47:41", progress: 0 },
              { title: "Les 50 vraies questions", duration: "01:56:26", progress: 0 }
            ]
          },
          {
            title: "09 - Textes Sacrés Revisités",
            episodes: [
              { title: "Apocalypse Now - Les messages cachés de la Genèse", duration: "01:57:36", progress: 0 },
              { title: "Apocalypse Now - Le révélation de l'Eden", duration: "01:33:19", progress: 0 },
              { title: "Moïse l'Africain 1", duration: "01:49:12", progress: 0 },
              { title: "Moïse l'Africain 2", duration: "01:25:26", progress: 0 },
              { title: "Le sens caché du Notre Père", duration: "01:30:13", progress: 0 },
              { title: "Le pouvoir du oui, la puissance du non", duration: "30:23", progress: 0 }
            ]
          },
          {
            title: "10 - Réalités Sociales",
            episodes: [
              { title: "Racisme - De l'existence des races", duration: "50:16", progress: 0 },
              { title: "Racisme - TCC", duration: "37:41", progress: 0 },
              { title: "Suprématie blanche ou racisme", duration: "01:34:51", progress: 0 },
              { title: "La malédiction des non-blancs", duration: "01:19:55", progress: 0 },
              { title: "Polygamie : definitions, enjeux et perspectives", duration: "01:38:34", progress: 0 },
              { title: "L'endogamie, la seule issue", duration: "02:56:38", progress: 0 }
            ]
          },
          {
            title: "11 - Thématiques Variées",
            episodes: [
              { title: "Sexe, un magia d'incantation", duration: "01:38:17", progress: 0 },
              { title: "Alimaâtation qu'est-ce que c'est ?", duration: "01:18:47", progress: 0 },
              { title: "La fin de l'impunité", duration: "01:33:31", progress: 0 },
              { title: "Films d'horreur & Malédiction", duration: "02:05:49", progress: 0 },
              { title: "Le pouvoir des chants ancestraux", duration: "02:19:41", progress: 0 },
              { title: "Le mystère des concessions", duration: "01:55:22", progress: 0 },
              { title: "Les mystères de la voie lactée", duration: "01:02:39", progress: 0 },
              { title: "Le mystère des invocations", duration: "01:30:08", progress: 0 },
              { title: "Sortir de la pauvreté", duration: "01:03:36", progress: 0 },
              { title: "Le kidnapping", duration: "01:24:00", progress: 0 },
              { title: "La divinité dévoilée", duration: "01:51:22", progress: 0 },
              { title: "La conquête de la vie", duration: "01:05:32", progress: 0 }
            ]
          }
        ]
      }
    ];
    
    let myList = [];
    let currentView = 'home';
    
    // ============================================
    // CONFIG & SDK
    // ============================================
    
    const defaultConfig = {
      platform_name: "FUNSCHOOLING",
      hero_title: "MAÂT CONTINUUM",
      hero_description: "Une formation complète et transformatrice explorant les sciences de l'existence, la relation et la nutrition. De l'orientation aux principes fondamentaux, apprenez à vous comprendre et à transformer votre vie.",
      background_color: "#000000",
      surface_color: "#181818",
      text_color: "#ffffff",
      primary_action_color: "#e50914",
      secondary_action_color: "#71717a",
      font_family: "Inter",
      font_size: 16
    };
    
    let config = { ...defaultConfig };
    
    async function onConfigChange(cfg) {
      const platformName = cfg.platform_name || defaultConfig.platform_name;
      const heroTitle = cfg.hero_title || defaultConfig.hero_title;
      const heroDescription = cfg.hero_description || defaultConfig.hero_description;
      const bgColor = cfg.background_color || defaultConfig.background_color;
      const surfaceColor = cfg.surface_color || defaultConfig.surface_color;
      const textColor = cfg.text_color || defaultConfig.text_color;
      const primaryColor = cfg.primary_action_color || defaultConfig.primary_action_color;
      const secondaryColor = cfg.secondary_action_color || defaultConfig.secondary_action_color;
      const fontFamily = cfg.font_family || defaultConfig.font_family;
      const fontSize = cfg.font_size || defaultConfig.font_size;
      
      // Apply colors
      document.body.style.backgroundColor = bgColor;
      document.body.style.color = textColor;
      
      // Apply font
      document.body.style.fontFamily = `${fontFamily}, Inter, sans-serif`;
      
      // Update text content
      const logo = document.getElementById('logo');
      if (logo) logo.textContent = platformName;
      
      const heroTitleEl = document.getElementById('heroTitle');
      if (heroTitleEl) heroTitleEl.textContent = heroTitle;
      
      const heroDescEl = document.getElementById('heroDescription');
      if (heroDescEl) heroDescEl.textContent = heroDescription;
      
      const footerText = document.getElementById('footerText');
      if (footerText) footerText.textContent = `© 2024 ${platformName}. Tous droits réservés.`;
      
      // Update primary action buttons
      document.querySelectorAll('.netflix-red').forEach(el => {
        el.style.color = primaryColor;
      });
      document.querySelectorAll('.netflix-red-bg').forEach(el => {
        el.style.backgroundColor = primaryColor;
      });
      
      // Update progress bars
      document.querySelectorAll('.progress-bar').forEach(el => {
        el.style.background = `linear-gradient(90deg, ${primaryColor} 0%, ${primaryColor}aa 100%)`;
      });
      
      // Update cards surface color
      document.querySelectorAll('.series-card-info').forEach(el => {
        el.style.backgroundColor = surfaceColor;
      });
    }
    
    function mapToCapabilities(cfg) {
      return {
        recolorables: [
          {
            get: () => cfg.background_color || defaultConfig.background_color,
            set: (v) => { cfg.background_color = v; if (window.elementSdk) window.elementSdk.setConfig({ background_color: v }); }
          },
          {
            get: () => cfg.surface_color || defaultConfig.surface_color,
            set: (v) => { cfg.surface_color = v; if (window.elementSdk) window.elementSdk.setConfig({ surface_color: v }); }
          },
          {
            get: () => cfg.text_color || defaultConfig.text_color,
            set: (v) => { cfg.text_color = v; if (window.elementSdk) window.elementSdk.setConfig({ text_color: v }); }
          },
          {
            get: () => cfg.primary_action_color || defaultConfig.primary_action_color,
            set: (v) => { cfg.primary_action_color = v; if (window.elementSdk) window.elementSdk.setConfig({ primary_action_color: v }); }
          },
          {
            get: () => cfg.secondary_action_color || defaultConfig.secondary_action_color,
            set: (v) => { cfg.secondary_action_color = v; if (window.elementSdk) window.elementSdk.setConfig({ secondary_action_color: v }); }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => cfg.font_family || defaultConfig.font_family,
          set: (v) => { cfg.font_family = v; if (window.elementSdk) window.elementSdk.setConfig({ font_family: v }); }
        },
        fontSizeable: {
          get: () => cfg.font_size || defaultConfig.font_size,
          set: (v) => { cfg.font_size = v; if (window.elementSdk) window.elementSdk.setConfig({ font_size: v }); }
        }
      };
    }
    
    function mapToEditPanelValues(cfg) {
      return new Map([
        ["platform_name", cfg.platform_name || defaultConfig.platform_name],
        ["hero_title", cfg.hero_title || defaultConfig.hero_title],
        ["hero_description", cfg.hero_description || defaultConfig.hero_description]
      ]);
    }
    
    // Initialize SDK
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
      config = window.elementSdk.config;
    }
    
    // ============================================
    // RENDERING FUNCTIONS
    // ============================================
    
    function createSeriesCard(series, showProgress = false) {
      const totalEpisodes = series.seasons.reduce((acc, s) => acc + s.episodes.length, 0);
      const watchedEpisodes = series.seasons.reduce((acc, s) => 
        acc + s.episodes.filter(e => e.progress === 100).length, 0);
      const currentEpisode = series.seasons.flatMap(s => s.episodes).find(e => e.progress > 0 && e.progress < 100);
      const overallProgress = series.seasons.reduce((acc, s) => 
        acc + s.episodes.reduce((a, e) => a + e.progress, 0), 0) / (totalEpisodes * 100) * 100;
      
      const card = document.createElement('div');
      card.className = 'flex-shrink-0 w-56 md:w-64 card-hover cursor-pointer group';
      card.onclick = () => openSeriesModal(series.id);
      
      card.innerHTML = `
        <div class="relative aspect-video rounded-t-lg overflow-hidden bg-gradient-to-br ${series.gradient}">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-6xl opacity-30">${series.categoryIcon}</span>
          </div>
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div class="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center play-button-pulse">
              <svg class="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          ${series.isNew ? '<span class="absolute top-2 left-2 px-2 py-0.5 bg-red-600 text-xs font-bold rounded">NOUVEAU</span>' : ''}
          ${showProgress && overallProgress > 0 ? `
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
              <div class="progress-bar h-full" style="width: ${overallProgress}%"></div>
            </div>
          ` : ''}
        </div>
        <div class="series-card-info bg-zinc-900 p-3 rounded-b-lg">
          <h4 class="font-semibold text-sm mb-1 truncate">${series.title}</h4>
          <div class="flex items-center gap-2 text-xs text-gray-400">
            <span class="text-green-500">${series.match}%</span>
            <span>${series.totalDuration}</span>
            <span class="px-1.5 py-0.5 bg-zinc-800 rounded text-[10px]">${series.level.split(' ')[0]}</span>
          </div>
          ${showProgress && currentEpisode ? `
            <p class="text-xs text-gray-500 mt-2 truncate">▶ ${currentEpisode.title}</p>
          ` : ''}
        </div>
      `;
      
      return card;
    }
    
    function renderContinueLearning() {
      const container = document.querySelector('#continueSection .flex');
      container.innerHTML = '';
      
      const inProgress = seriesData.filter(s => 
        s.seasons.some(season => season.episodes.some(e => e.progress > 0 && e.progress < 100)) ||
        s.seasons.some(season => season.episodes.some(e => e.progress === 100))
      );
      
      if (inProgress.length === 0) {
        document.getElementById('continueSection').style.display = 'none';
        return;
      }
      
      document.getElementById('continueSection').style.display = 'block';
      inProgress.forEach(series => {
        container.appendChild(createSeriesCard(series, true));
      });
    }
    
    function renderCategories() {
      const container = document.getElementById('categories');
      container.innerHTML = '';
      
      const categories = [...new Set(seriesData.map(s => s.category))];
      
      categories.forEach(category => {
        const categorySeries = seriesData.filter(s => s.category === category);
        const icon = categorySeries[0]?.categoryIcon || '📚';
        
        const section = document.createElement('div');
        section.className = 'mb-8';
        section.innerHTML = `
          <h3 class="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
            ${icon} ${category}
          </h3>
          <div class="flex gap-3 overflow-x-auto hide-scrollbar pb-4 gradient-mask category-row"></div>
        `;
        
        const row = section.querySelector('.category-row');
        categorySeries.forEach(series => {
          row.appendChild(createSeriesCard(series));
        });
        
        container.appendChild(section);
      });
    }
    
    function renderPopular() {
      const container = document.getElementById('popularRow');
      container.innerHTML = '';
      
      const popular = seriesData.filter(s => s.isPopular).sort((a, b) => b.match - a.match);
      popular.forEach((series, index) => {
        const card = document.createElement('div');
        card.className = 'flex-shrink-0 flex items-center gap-4 card-hover cursor-pointer';
        card.onclick = () => openSeriesModal(series.id);
        
        card.innerHTML = `
          <span class="text-6xl md:text-8xl font-bold text-zinc-800" style="font-family: 'Bebas Neue', sans-serif; -webkit-text-stroke: 2px #333;">${index + 1}</span>
          <div class="relative w-32 md:w-40 aspect-[2/3] rounded-lg overflow-hidden bg-gradient-to-br ${series.gradient}">
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-4xl opacity-40">${series.categoryIcon}</span>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80">
              <p class="text-xs font-medium truncate">${series.title}</p>
            </div>
          </div>
        `;
        
        container.appendChild(card);
      });
    }
    
    function renderNew() {
      const container = document.getElementById('newRow');
      container.innerHTML = '';
      
      const newSeries = seriesData.filter(s => s.isNew);
      newSeries.forEach(series => {
        container.appendChild(createSeriesCard(series));
      });
    }
    
    // ============================================
    // MODAL FUNCTIONS
    // ============================================
    
    function openSeriesModal(seriesId) {
      const series = seriesData.find(s => s.id === seriesId);
      if (!series) return;
      
      const modal = document.getElementById('seriesModal');
      const content = document.getElementById('modalContent');
      
      const totalEpisodes = series.seasons.reduce((acc, s) => acc + s.episodes.length, 0);
      
      content.innerHTML = `
        <!-- Close Button -->
        <button onclick="closeSeriesModal()" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        
        <!-- Header Banner -->
        <div class="relative h-80 md:h-96 bg-gradient-to-br ${series.gradient}">
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-[150px] opacity-20">${series.categoryIcon}</span>
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <span class="category-pill px-3 py-1 rounded-full text-xs font-medium text-red-400 mb-3 inline-block">
              ${series.categoryIcon} ${series.category}
            </span>
            <h2 class="text-3xl md:text-5xl font-bold mb-4" style="font-family: 'Bebas Neue', sans-serif;">${series.title}</h2>
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span class="text-green-500 font-semibold">${series.match}% Match</span>
              <span class="text-gray-400">${series.year}</span>
              <span class="px-2 py-0.5 border border-gray-500 text-xs">HD</span>
              <span class="text-gray-400">${series.seasons.length} Saison${series.seasons.length > 1 ? 's' : ''}</span>
              <span class="text-gray-400">${totalEpisodes} épisodes</span>
              <span class="px-2 py-0.5 bg-zinc-700 rounded text-xs">${series.level}</span>
            </div>
            <div class="flex items-center gap-3">
              <button onclick="playEpisode(${series.id}, 0, 0)" class="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Lecture
              </button>
              <button onclick="addToList(${series.id})" id="modalListBtn-${series.id}" class="flex items-center gap-2 px-4 py-3 bg-zinc-700/80 rounded hover:bg-zinc-600 transition">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${myList.includes(series.id) ? 'M5 13l4 4L19 7' : 'M12 4v16m8-8H4'}"/>
                </svg>
                ${myList.includes(series.id) ? 'Dans ma liste' : 'Ma Liste'}
              </button>
              <button class="p-3 bg-zinc-700/50 rounded-full border border-zinc-600 hover:border-white transition">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Content -->
        <div class="p-6 md:p-8">
          <!-- Description -->
          <div class="mb-8">
            <p class="text-gray-300 text-lg leading-relaxed">${series.description}</p>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 mb-8">
            <div class="bg-zinc-800/50 rounded-lg p-4 text-center">
              <p class="text-2xl font-bold text-red-500">${series.totalDuration}</p>
              <p class="text-xs text-gray-400">Durée totale</p>
            </div>
            <div class="bg-zinc-800/50 rounded-lg p-4 text-center">
              <p class="text-2xl font-bold">${totalEpisodes}</p>
              <p class="text-xs text-gray-400">Épisodes</p>
            </div>
            <div class="bg-zinc-800/50 rounded-lg p-4 text-center">
              <p class="text-2xl font-bold">${series.seasons.length}</p>
              <p class="text-xs text-gray-400">Saisons</p>
            </div>
          </div>
          
          <!-- Season Selector -->
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">Épisodes</h3>
            <div class="relative">
              <select id="seasonSelector-${series.id}" onchange="renderEpisodes(${series.id}, this.value)" class="season-selector appearance-none px-4 py-2 pr-10 rounded-lg text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-600">
                ${series.seasons.map((s, i) => `<option value="${i}">${s.title}</option>`).join('')}
              </select>
              <svg class="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>
          
          <!-- Episodes List -->
          <div id="episodesList-${series.id}" class="space-y-2">
            ${renderEpisodesHTML(series, 0)}
          </div>
        </div>
      `;
      
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
    
    function renderEpisodesHTML(series, seasonIndex) {
      const season = series.seasons[seasonIndex];
      if (!season) return '';
      
      return season.episodes.map((ep, i) => `
        <div class="episode-item flex items-center gap-4 p-4 rounded-lg cursor-pointer" onclick="playEpisode(${series.id}, ${seasonIndex}, ${i})">
          <span class="text-2xl font-bold text-zinc-600 w-8">${i + 1}</span>
          <div class="relative w-28 md:w-36 aspect-video rounded-lg overflow-hidden bg-gradient-to-br ${series.gradient} flex-shrink-0">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center">
                <svg class="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            ${ep.progress > 0 ? `
              <div class="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
                <div class="progress-bar h-full" style="width: ${ep.progress}%"></div>
              </div>
            ` : ''}
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="font-medium mb-1">${ep.title}</h4>
            <p class="text-sm text-gray-400 mb-1">${ep.duration}</p>
            ${ep.resources ? `<p class="text-xs text-gray-500 flex items-center gap-1">📄 ${ep.resources}</p>` : ''}
          </div>
          ${ep.progress === 100 ? `
            <span class="text-green-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </span>
          ` : ''}
        </div>
      `).join('');
    }
    
    function renderEpisodes(seriesId, seasonIndex) {
      const series = seriesData.find(s => s.id === seriesId);
      if (!series) return;
      
      const container = document.getElementById(`episodesList-${seriesId}`);
      container.innerHTML = renderEpisodesHTML(series, parseInt(seasonIndex));
    }
    
    function closeSeriesModal() {
      document.getElementById('seriesModal').classList.add('hidden');
      document.body.style.overflow = '';
    }
    
    // ============================================
    // VIDEO PLAYER
    // ============================================
    
    function playEpisode(seriesId, seasonIndex, episodeIndex) {
      const series = seriesData.find(s => s.id === seriesId);
      if (!series) return;
      
      const season = series.seasons[seasonIndex];
      const episode = season.episodes[episodeIndex];
      
      const playerModal = document.getElementById('playerModal');
      const playerContent = document.getElementById('playerContent');
      
      // Find next episode
      let nextEp = null;
      let nextSeason = seasonIndex;
      let nextEpIndex = episodeIndex + 1;
      
      if (nextEpIndex >= season.episodes.length) {
        nextSeason = seasonIndex + 1;
        nextEpIndex = 0;
      }
      
      if (series.seasons[nextSeason] && series.seasons[nextSeason].episodes[nextEpIndex]) {
        nextEp = {
          season: nextSeason,
          episode: nextEpIndex,
          data: series.seasons[nextSeason].episodes[nextEpIndex]
        };
      }
      
      playerContent.innerHTML = `
        <div class="relative h-full flex flex-col">
          <!-- Video Area -->
          <div class="flex-1 bg-gradient-to-br ${series.gradient} relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-[200px] opacity-10">${series.categoryIcon}</span>
            </div>
            
            <!-- Center Play Button -->
            <div class="absolute inset-0 flex items-center justify-center">
              <button id="mainPlayBtn" onclick="togglePlay()" class="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition">
                <svg id="playIcon" class="w-10 h-10 ml-1" fill="white" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
            
            <!-- Top Bar -->
            <div class="absolute top-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
              <button onclick="closePlayer()" class="p-2 hover:bg-white/10 rounded-full transition">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
              </button>
              <div class="text-center">
                <p class="text-sm text-gray-300">${series.title}</p>
                <p class="text-xs text-gray-500">${season.title} • Épisode ${episodeIndex + 1}</p>
              </div>
              <div class="w-10"></div>
            </div>
            
            <!-- Episode Info Overlay -->
            <div class="absolute bottom-28 left-0 right-0 px-6">
              <h2 class="text-2xl md:text-3xl font-bold mb-2">${episode.title}</h2>
              <p class="text-gray-300">${episode.duration}</p>
            </div>
          </div>
          
          <!-- Controls -->
          <div class="bg-black p-4">
            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="flex items-center gap-3">
                <span class="text-xs text-gray-400" id="currentTime">0:00</span>
                <div class="flex-1 h-1 bg-zinc-800 rounded-full cursor-pointer group" onclick="seekVideo(event)">
                  <div id="progressFill" class="progress-bar h-full rounded-full relative" style="width: ${episode.progress}%">
                    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition"></div>
                  </div>
                </div>
                <span class="text-xs text-gray-400">${episode.duration}</span>
              </div>
            </div>
            
            <!-- Control Buttons -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <button onclick="skipBack()" class="p-2 hover:bg-white/10 rounded-full transition">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"/>
                  </svg>
                </button>
                <button onclick="togglePlay()" class="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
                  <svg id="playIconSmall" class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                <button onclick="skipForward()" class="p-2 hover:bg-white/10 rounded-full transition">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"/>
                  </svg>
                </button>
                <button class="p-2 hover:bg-white/10 rounded-full transition">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                  </svg>
                </button>
              </div>
              
              <div class="flex items-center gap-3">
                ${nextEp ? `
                  <button onclick="playEpisode(${seriesId}, ${nextEp.season}, ${nextEp.episode})" class="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition text-sm">
                    <span>Suivant</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                ` : ''}
                <button class="p-2 hover:bg-white/10 rounded-full transition">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
      
      closeSeriesModal();
      playerModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      
      // Store current episode info
      window.currentEpisode = { seriesId, seasonIndex, episodeIndex };
      window.isPlaying = false;
    }
    
    function closePlayer() {
      document.getElementById('playerModal').classList.add('hidden');
      document.body.style.overflow = '';
      window.currentEpisode = null;
    }
    
    let isPlaying = false;
    function togglePlay() {
      isPlaying = !isPlaying;
      const playIcon = document.getElementById('playIcon');
      const playIconSmall = document.getElementById('playIconSmall');
      
      if (isPlaying) {
        playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
        playIconSmall.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
      } else {
        playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
        playIconSmall.innerHTML = '<path d="M8 5v14l11-7z"/>';
      }
    }
    
    function skipBack() {
      // Simulation
    }
    
    function skipForward() {
      // Simulation
    }
    
    function seekVideo(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = ((e.clientX - rect.left) / rect.width) * 100;
      document.getElementById('progressFill').style.width = `${percent}%`;
    }
    
    // ============================================
    // MY LIST
    // ============================================
    
    function addToList(seriesId) {
      const index = myList.indexOf(seriesId);
      if (index > -1) {
        myList.splice(index, 1);
      } else {
        myList.push(seriesId);
      }
      
      updateListButtons(seriesId);
    }
    
    function updateListButtons(seriesId) {
      const inList = myList.includes(seriesId);
      
      // Update hero button if it's the featured series
      const heroBtn = document.getElementById('heroListBtn');
      if (heroBtn && seriesId === 0) {
        heroBtn.innerHTML = `
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${inList ? 'M5 13l4 4L19 7' : 'M12 4v16m8-8H4'}"/>
          </svg>
          ${inList ? 'Dans ma liste' : 'Ma Liste'}
        `;
      }
      
      // Update modal button
      const modalBtn = document.getElementById(`modalListBtn-${seriesId}`);
      if (modalBtn) {
        modalBtn.innerHTML = `
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${inList ? 'M5 13l4 4L19 7' : 'M12 4v16m8-8H4'}"/>
          </svg>
          ${inList ? 'Dans ma liste' : 'Ma Liste'}
        `;
      }
    }
    
    function showMyList() {
      const container = document.getElementById('categories');
      
      if (myList.length === 0) {
        container.innerHTML = `
          <div class="text-center py-20">
            <span class="text-6xl mb-4 block">📚</span>
            <h3 class="text-2xl font-semibold mb-2">Votre liste est vide</h3>
            <p class="text-gray-400 mb-6">Ajoutez des formations pour les retrouver facilement</p>
            <button onclick="showHome()" class="px-6 py-3 bg-red-600 rounded font-semibold hover:bg-red-700 transition">
              Découvrir les formations
            </button>
          </div>
        `;
        return;
      }
      
      container.innerHTML = `
        <h2 class="text-2xl font-bold mb-6">Ma Liste</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" id="myListGrid"></div>
      `;
      
      const grid = document.getElementById('myListGrid');
      myList.forEach(id => {
        const series = seriesData.find(s => s.id === id);
        if (series) {
          const card = createSeriesCard(series);
          card.classList.remove('w-56', 'md:w-64', 'flex-shrink-0');
          card.classList.add('w-full');
          grid.appendChild(card);
        }
      });
      
      currentView = 'myList';
    }
    
    function showHome() {
      renderCategories();
      currentView = 'home';
    }
    
    // ============================================
    // SEARCH
    // ============================================
    
    function toggleSearch() {
      const searchBar = document.getElementById('searchBar');
      searchBar.classList.toggle('hidden');
      if (!searchBar.classList.contains('hidden')) {
        document.getElementById('searchInput').focus();
      }
    }
    
    function handleSearch(query) {
      if (!query.trim()) {
        showHome();
        return;
      }
      
      const results = seriesData.filter(s => 
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.category.toLowerCase().includes(query.toLowerCase()) ||
        s.description.toLowerCase().includes(query.toLowerCase())
      );
      
      const container = document.getElementById('categories');
      
      if (results.length === 0) {
        container.innerHTML = `
          <div class="text-center py-20">
            <span class="text-6xl mb-4 block">🔍</span>
            <h3 class="text-2xl font-semibold mb-2">Aucun résultat</h3>
            <p class="text-gray-400">Essayez avec d'autres mots-clés</p>
          </div>
        `;
        return;
      }
      
      container.innerHTML = `
        <h2 class="text-2xl font-bold mb-6">Résultats pour "${query}"</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" id="searchResults"></div>
      `;
      
      const grid = document.getElementById('searchResults');
      results.forEach(series => {
        const card = createSeriesCard(series);
        card.classList.remove('w-56', 'md:w-64', 'flex-shrink-0');
        card.classList.add('w-full');
        grid.appendChild(card);
      });
    }
    
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    
    const navbar = document.getElementById('navbar');
    const app = document.getElementById('app');
    
    app.addEventListener('scroll', () => {
      if (app.scrollTop > 50) {
        navbar.style.background = 'rgba(0,0,0,0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
      } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
      }
    });
    
    // ============================================
    // INIT
    // ============================================
    
    function init() {
      renderContinueLearning();
      renderCategories();
      renderPopular();
      renderNew();
      onConfigChange(config);
    }
    
    init();
