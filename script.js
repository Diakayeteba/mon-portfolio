/* ============================================================
   Translations — EN / FR
   ============================================================ */
const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      stack: "Stack",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Madou Diakayeteba",
      title: "Full-Stack Developer & AI Master Student",
      location: "Anglet (64), France",
      cta_contact: "Contact Me",
      cta_work: "View My Work",
    },
    about: {
      title: "About Me",
      p1: "As a first-year Master's student at the University of Pau and the Adour Region (UPPA), I am seeking a 24-month work-study placement in software development, data engineering, or DevOps.",
      p2: "An experienced Full-Stack developer (Python/Django, PHP/Laravel, JS/TypeScript, React/Next.js) and co-founder of the startup AnWKa IT Solutions, I design robust, scalable digital solutions tailored to business needs.My approach combines engineering rigor, agility, and a focus on optimization. Schedule: 2-3 weeks at the company / 2-3 weeks at university",
     
    },
    experience: {
      title: "Experience",
      items: [
        {
          title: "FREELANCE FULL-STACK DEVELOPER | ",
          company: "Self-Employed",
          date: "Sept. 2025 - Present",
          desc: "Design & Development: Creation of web platforms, showcase sites, and custom applications (DEBLOQUE-BTP, GELGEC, Diak-Service). Architecture & API: REST API integration, database management (MySQL, PostgreSQL), and payment systems. Deployment & SEO: Hosting and SEO optimization for customer acquisition.",
          icon: "fas fa-laptop-code",
        },
        {
          title: "Mathematics Teacher",
          company: "Lycée Privé Fatoumata Siré, Bamako",
          date: "Jan. 2025",
          desc: "Improved student results by 20% in one year. Implemented practical and engaging mathematics projects. Collaborated with parents to track student progress.",
          icon: "fas fa-chalkboard-teacher",
        },
        {
          title: "IT Maintenance Assistant",
          company: "EGITCOM",
          date: "Jan. 2024 — Jan. 2025",
          desc: "Provided fast technical assistance to maximize client satisfaction. Trained users for effective adoption of IT tools. Implemented security protocols to protect sensitive data.",
          icon: "fas fa-tools",
        },
        {
          title: "IT Assistant",
          company: "EGITCOM, Bamako",
          date: "Jul. 2024 — Oct. 2024",
          desc: "User assistance and first-level support. Installation and configuration of workstations. Awareness of good digital practices.",
          icon: "fas fa-desktop",
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        /* Live projects first — easy access for recruiters */
        {
          title: "GELGEC BTP — Website",
          desc: "Professional showcase website for Christian Njankeu's GELGEC BTP company: services, references, and contact information.",
          link: "View Project",
          tags: ["HTML5", "CSS3", "JavaScript"],
          url: "https://gelgecbtp.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
          icon: "fas fa-hard-hat",
        },
        {
          title: "BTP Abdoulaye KEITA — Website (DÉBLOQUÉ BTP)",
          desc: "Professional showcase website for Abdoulaye KEITA's private BTP company: services, references, and contact.",
          link: "View Project",
          tags: ["HTML5", "CSS3", "JavaScript"],
          url: "https://debloque-btp.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
          icon: "fas fa-tools",
        },
        {
          title: "DS Service — Website (DIAK-SERVICE)",
          desc: "Professional showcase website for DS Service, presenting IT services, past achievements, and contact details.",
          link: "View Project",
          tags: ["HTML5", "CSS3", "JavaScript"],
          url: "https://diak-service.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
          icon: "fas fa-laptop",
        },
        {
          title: "Student Complaint Management",
          desc: "Centralized platform allowing students to submit, track, and resolve complaints with full transparency and automated routing.",
          link: "View Project",
          tags: ["React", "Django", "Python", "MySQL"],
          url: "https://grstiondesreclamations.web.app/",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
          icon: "fas fa-comments",
        },
        {
          title: "BTP TAMBA KOUYATE — Website (KOUYATE-BTP)",
          desc: "Professional showcase website for Tamba KOUYATE's BTP company: technical design, site supervision, services, and project portfolio in Bamako.",
          link: "View Project",
          tags: ["HTML5", "CSS3", "JavaScript"],
          url: "https://kouyate-btp.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
          icon: "fas fa-hard-hat",
        },
        {
          title: "IVO Coiffure — Hair Salon Website",
          desc: "Modern showcase website for IVO COIFFURE N°1 in Bamako: services, gallery, online booking, and contact for hair, beard, and beauty care.",
          link: "View Project",
          tags: ["HTML5", "CSS3", "JavaScript"],
          url: "https://ivo-coiffure.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
          icon: "fas fa-cut",
        },
        {
          title: "missira-imprim",
          desc: "Modern showcase website for Missira Imprim in Bamako: presentation of printing services, custom textile and promotional goodies, project gallery, quote requests, and contact information for professional printing solutions.",
          link: "View Project",
          tags: ["HTML5", "CSS3", "JavaScript"],
          url: "https://missira-imprim-site--madoudiakayeteb.replit.app/",
          image:
            "https://imprimeriedumaroc.com/wp-content/uploads/2022/12/maxresdefault.jpg",
          icon: "fas fa-cut",
        },

        {
          title: "School Management Platform",
          desc: "Complete digital management platform for Lycée Fatoumata Siré Touré de Samaya and partner schools: attendance, grades, timetables, and parent-teacher communication.",
          link: "View Project",
          tags: ["PHP", "Laravel", "Vue.js", "MySQL"],
          url: "coming-soon.html?id=1",
          image:
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
          icon: "fas fa-school",
        },
        {
          title: "ALLSHOP — E-commerce SaaS",
          desc: "Multi-vendor SaaS e-commerce platform enabling families and small businesses to create and manage their own online stores.",
          link: "View Project",
          tags: ["Vue.js", "Node.js", "MySQL", "SaaS"],
          url: "coming-soon.html?id=2",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
          icon: "fas fa-shopping-cart",
        },
        {
          title: "ImmoBko — Real Estate Mali",
          desc: "Real estate management platform tailored for Mali: property listings, rental management, and an owner/tenant portal.",
          link: "View Project",
          tags: ["React", "Django", "Python", "MySQL"],
          url: "coming-soon.html?id=3",
          image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
          icon: "fas fa-building",
        },
        {
          title: "Sakina Voyage — Travel Agency",
          desc: "Online travel agency website for Sakina Voyage: destination catalog, custom quotes, and booking management.",
          link: "View Project",
          tags: ["React", "CSS3", "JavaScript"],
          url: "coming-soon.html?id=5",
          image:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
          icon: "fas fa-plane",
        },
        {
          title: "PharmaShop — Pharmacy App",
          desc: "Complete pharmacy management app: inventory tracking, sales, prescriptions, and a real-time reporting dashboard.",
          link: "View Project",
          tags: ["PHP", "Laravel", "Vue.js", "MySQL"],
          url: "coming-soon.html?id=6",
          image:
            "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80",
          icon: "fas fa-pills",
        },
        {
          title: "AI Theft Detection — Supermarkets",
          desc: "Real-time AI-powered theft detection system for supermarkets using computer vision and behavioral pattern analysis.",
          link: "View Project",
          tags: ["Python", "TensorFlow", "OpenCV", "AI"],
          url: "coming-soon.html?id=9",
          image:
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
          icon: "fas fa-eye",
        },
        {
          title: "Plant Disease Detection",
          desc: "AI system detecting plant diseases by analyzing leaf photos — providing farmers with early diagnosis and treatment recommendations.",
          link: "View Project",
          tags: ["Python", "TensorFlow", "Django", "AI"],
          url: "coming-soon.html?id=10",
          image:
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
          icon: "fas fa-leaf",
        },
        {
          title: "Digital Textbook — Teacher Sign-in",
          desc: "Digital attendance application replacing paper registers: teachers sign in electronically, tracking is automated and fully transparent.",
          link: "View Project",
          tags: ["Vue.js", "PHP", "MySQL"],
          url: "coming-soon.html?id=11",
          image:
            "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80",
          icon: "fas fa-book-open",
        },
      ],
    },
    stack: {
      title: "Technical Stack",
      categories: [
        {
          name: "Frontend",
          items: [
            { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
            { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
            { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
            { name: "React", icon: "fab fa-react", color: "#61dafb" },
            { name: "Vue.js", icon: "fab fa-vuejs", color: "#42b883" },
          ],
        },
        {
          name: "Backend",
          items: [
            { name: "Python", icon: "fab fa-python", color: "#3776ab" },
            { name: "Django", icon: "fas fa-server", color: "#0c4b33" },
            { name: "PHP", icon: "fab fa-php", color: "#777bb4" },
            { name: "Laravel", icon: "fas fa-fire", color: "#ff2d20" },
            { name: "MySQL", icon: "fas fa-database", color: "#4479a1" },
          ],
        },
        {
          name: "Cloud & Tools",
          items: [
            { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
            { name: "GitHub", icon: "fab fa-github", color: "#181717" },
            { name: "AWS", icon: "fab fa-aws", color: "#ff9900" },
            { name: "Linux", icon: "fab fa-linux", color: "#fcc624" },
            { name: "API REST", icon: "fas fa-plug", color: "#2563eb" },
          ],
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "I'm currently looking for an apprenticeship in AI Development or Information Systems Architecture. Whether you have an opportunity or just want to say hi, feel free to reach out!",
      email: "Send an Email",
      linkedin: "LinkedIn",
    },
    footer: {
      copyright: "© 2026 Madou Diakayeteba. All rights reserved.",
    },
  },

  /* ---- FRENCH ---- */
  fr: {
    nav: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      stack: "Stack",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis Madou Diakayeteba",
      title: "Développeur Full-Stack & Étudiant Master IA",
      location: "Anglet (64), France",
      cta_contact: "Me Contacter",
      cta_work: "Voir mes Projets",
    },
    about: {
      title: "À Propos",
      p1: "Étudiant en Master 1 à l'Université de Pau et des Pays de l'Adour (UPPA), je suis à la recherche d'une alternance de 24 mois en développement logiciel, ingénierie de données ou DevOps.",
      p2: "Développeur Full-Stack expérimenté (Python/Django, PHP/Laravel, JS/TypeScript, React/Next.js) et cofondateur de la startup AnWKa IT Solutions, je conçois des solutions numériques robustes, évolutives et adaptées aux enjeux métiers. Mon approche allie rigueur d'ingénierie, agilité et sens de l'optimisation. Rythme : 2 à 3 sem. Entreprise / 2 à 3 sem. École",
     
    },
    experience: {
      title: "Expérience",
      items: [
        {
          title: "DÉVELOPPEUR FULL-STACK FREELANCE ",
          company: "Auto-Entrepreneur",
          date: "Sept. 2025 - Présent",
          desc: "Conception & Développement : Création de plateformes web, vitrines et applications sur-mesure (DEBLOQUE-BTP, GELGEC, Diak-Service).  Architecture & API : Intégration d'APIs REST, gestion de bases de données (MySQL, PostgreSQL) et systèmes de paiement.  Déploiement & SEO : Hébergement et optimisation du référencement naturel pour l'acquisition client.",
          icon: "fas fa-laptop-code",
        },
        {
          title: "Enseignant de Mathématiques",
          company: "Lycée Privé Fatoumata Siré, Bamako",
          date: "Janv. 2025",
          desc: "Amélioration des résultats des élèves de 20% en un an. Mise en place de projets mathématiques pratiques et engageants. Collaboration avec les parents pour suivre les progrès des élèves.",
          icon: "fas fa-chalkboard-teacher",
        },
        {
          title: "Assistant Maintenance Informatique",
          company: "EGITCOM",
          date: "Janv. 2024 — Janv. 2025",
          desc: "Assistance technique rapide pour maximiser la satisfaction client. Formation des utilisateurs pour une adoption efficace des outils informatiques. Mise en place de protocoles de sécurité pour protéger les données sensibles.",
          icon: "fas fa-tools",
        },
        {
          title: "Assistant Informatique",
          company: "EGITCOM, Bamako",
          date: "Juil. 2024 — Oct. 2024",
          desc: "Assistance utilisateurs et support de premier niveau. Installation et configuration de postes de travail. Sensibilisation aux bonnes pratiques numériques.",
          icon: "fas fa-desktop",
        },
      ],
    },
    projects: {
      title: "Projets",
      items: [
        /* Projets en ligne en premier — visibilité pour les recruteurs */
        {
          title: "GELGEC BTP — Vitrine",
          desc: "Site vitrine professionnel pour l'entreprise BTP de Christian Njankeu : services, références et informations de contact.",
          link: "Voir le Projet",
          tags: ["HTML5", "CSS3", "JavaScript"],
          url: "https://gelgecbtp.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
          icon: "fas fa-hard-hat",
        },
        {
          title: "Site web BTP Abdoulaye KEITA — DÉBLOQUÉ BTP",
          desc: "Site vitrine professionnel pour l'entreprise BTP d'Abdoulaye KEITA : services, références et informations de contact.",
          link: "Voir le Projet",
          tags: ["HTML5", "CSS3", "JavaScript"],
          url: "https://debloque-btp.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
          icon: "fas fa-tools",
        },
        {
          title: "DS Service — Site Vitrine (DIAK-SERVICE)",
          desc: "Site vitrine professionnel pour DS Service : présentation des services informatiques, réalisations et coordonnées de contact.",
          link: "Voir le Projet",
          tags: ["HTML5", "CSS3", "JavaScript"],
          url: "https://diak-service.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
          icon: "fas fa-laptop",
        },
        {
          title: "Gestion des Réclamations Étudiants",
          desc: "Plateforme centralisée permettant aux étudiants de soumettre, suivre et résoudre leurs réclamations avec transparence et routage automatisé.",
          link: "Voir le Projet",
          tags: ["React", "Django", "Python", "MySQL"],
          url: "https://grstiondesreclamations.web.app/",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
          icon: "fas fa-comments",
        },
        // KOUYATE-BTP en 5e position pour donner de la visibilité à ce projet clé, même s'il est en ligne depuis peu — c'est un projet important pour moi et je veux m'assurer qu'il est vu par les recruteurs qui visitent la section projets avant de scroller vers les projets à venir.
        {
          title: "KOUYATE-BTP — SiteVitrine (KOUYATE-BTP)",
          desc: "Site vitrine pour KOUYATE-BTP : conception technique, supervision de chantiers, services, réalisations et contact à Bamako.",
          link: "Voir le Projet",
          tags: ["HTML5", "CSS3", "JavaScript"],
          url: "https://kouyate-btp.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
          icon: "fas fa-hard-hat",
        },
        {
          title: "Salon de coiffure — Ivo Coiffure",
          desc: "Site vitrine moderne pour IVO COIFFURE N°1 à Bamako : services, galerie, réservation et contact pour coiffure, barbe et soins beauté.",
          link: "Voir le Projet",
          tags: ["HTML5", "CSS3", "JavaScript"],
          url: "https://ivo-coiffure.vercel.app/",
          image:
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
          icon: "fas fa-cut",
        },
        {
          title: "Plateforme de Gestion Scolaire",
          desc: "Plateforme de gestion complète pour le Lycée Fatoumata Siré Touré de Samaya et tout établissement partenaire : présences, notes, emplois du temps et communication parents-enseignants.",
          link: "Voir le Projet",
          tags: ["PHP", "Laravel", "Vue.js", "MySQL"],
          url: "coming-soon.html?id=1",
          image:
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
          icon: "fas fa-school",
        },
        {
          title: "ALLSHOP — E-commerce SaaS",
          desc: "Plateforme SaaS multi-vendeurs permettant aux familles et petites entreprises de créer et gérer leur boutique en ligne.",
          link: "Voir le Projet",
          tags: ["Vue.js", "Node.js", "MySQL", "SaaS"],
          url: "coming-soon.html?id=2",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
          icon: "fas fa-shopping-cart",
        },
        {
          title: "ImmoBko — Immobilier Mali",
          desc: "Plateforme de gestion immobilière adaptée au Mali : annonces de biens, gestion locative et portail propriétaires/locataires.",
          link: "Voir le Projet",
          tags: ["React", "Django", "Python", "MySQL"],
          url: "coming-soon.html?id=3",
          image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
          icon: "fas fa-building",
        },
        {
          title: "Sakina Voyage — Agence de Voyage",
          desc: "Site web pour l'agence Sakina Voyage : catalogue de destinations, devis personnalisés et gestion des réservations en ligne.",
          link: "Voir le Projet",
          tags: ["React", "CSS3", "JavaScript"],
          url: "coming-soon.html?id=5",
          image:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
          icon: "fas fa-plane",
        },
        {
          title: "PharmaShop — Gestion Pharmacie (PHARMASHOP)",
          desc: "Application complète de gestion de pharmacie : stocks, ventes, ordonnances et tableau de bord de reporting en temps réel.",
          link: "Voir le Projet",
          tags: ["PHP", "Laravel", "Vue.js", "MySQL"],
          url: "coming-soon.html?id=6",
          image:
            "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80",
          icon: "fas fa-pills",
        },
        {
          title: "Système de détection de Vols par IA",
          desc: "Système de détection de vols en temps réel dans les supermarchés, basé sur la vision par ordinateur et l'analyse comportementale.",
          link: "Voir le Projet",
          tags: ["Python", "TensorFlow", "OpenCV", "IA"],
          url: "coming-soon.html?id=9",
          image:
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
          icon: "fas fa-eye",
        },
        {
          title: "Plateforme de détection de Maladies des Plantes",
          desc: "Système IA de diagnostic des maladies des plantes par analyse photo de feuilles — aide les agriculteurs avec des recommandations de traitement.",
          link: "Voir le Projet",
          tags: ["Python", "TensorFlow", "Django", "IA"],
          url: "coming-soon.html?id=10",
          image:
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
          icon: "fas fa-leaf",
        },
        {
          title: "Cahier de Texte Numérique",
          desc: "Application d'émargement numérique remplaçant les registres papier : les enseignants signent électroniquement, le suivi est automatisé et transparent.",
          link: "Voir le Projet",
          tags: ["Vue.js", "PHP", "Laravel", "MySQL"],
          url: "coming-soon.html?id=11",
          image:
            "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80",
          icon: "fas fa-book-open",
        },
        {
          title: "ALLSHOP FACTURATION",
          desc: "Application de gestion des ventes pour les commerçants ",
          link: "Voir le Projet",
          tags: ["Vue.js", "PYTHON", "DJANGO", "MySQL"],
          url: "http://madou223.pythonanywhere.com/",
          image:
            "https://public-files.gumroad.com/variants/tct7wl5dfwb13m2fvyte6q9hsfow/3298c3eb001bbed90f1d616da66708480096a0a1b6e81bd4f8a2d6e9b831d301",
          icon: "fas fa-book-open",
        },

        {
          title: "missira-imprim",
          desc: "Site vitrine moderne pour Missira Imprim à Bamako : présentation des services d \ impression, textile personnalisé et goodies promotionnels, galerie de projets, demandes de devis et informations de contact pour des solutions d\ impression professionnelles.",
          link: "View Project",
          tags: ["HTML5", "CSS3", "JavaScript"],
          url: "https://missira-imprim-site--madoudiakayeteb.replit.app/",
          image:
            "https://imprimeriedumaroc.com/wp-content/uploads/2022/12/maxresdefault.jpg",
          icon: "fas fa-cut",
        },
      ],
    },
    stack: {
      title: "Stack Technique",
      categories: [
        {
          name: "Frontend",
          items: [
            { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
            { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
            { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
            { name: "React", icon: "fab fa-react", color: "#61dafb" },
            { name: "Vue.js", icon: "fab fa-vuejs", color: "#42b883" },
          ],
        },
        {
          name: "Backend",
          items: [
            { name: "Python", icon: "fab fa-python", color: "#3776ab" },
            { name: "Django", icon: "fas fa-server", color: "#0c4b33" },
            { name: "PHP", icon: "fab fa-php", color: "#777bb4" },
            { name: "Laravel", icon: "fas fa-fire", color: "#ff2d20" },
            { name: "MySQL", icon: "fas fa-database", color: "#4479a1" },
          ],
        },
        {
          name: "Cloud & Outils",
          items: [
            { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
            { name: "GitHub", icon: "fab fa-github", color: "#181717" },
            { name: "AWS", icon: "fab fa-aws", color: "#ff9900" },
            { name: "Linux", icon: "fab fa-linux", color: "#fcc624" },
            { name: "API REST", icon: "fas fa-plug", color: "#0d43b8" },
          ],
        },
      ],
    },
    contact: {
      title: "Me Contacter",
      subtitle:
        "Je suis actuellement à la recherche d'une alternance en développement IA ou architecture des systèmes d'information. N'hésitez pas à me contacter pour toute opportunité !",
      email: "Envoyer un Email",
      linkedin: "LinkedIn",
    },
    footer: {
      copyright: "© 2026 Madou Diakayeteba. Tous droits réservés.",
    },
  },
};

/* ============================================================
   Tag icon lookup
   ============================================================ */
const tagIconMap = {
  'html5':      'fab fa-html5',
  'css3':       'fab fa-css3-alt',
  'javascript': 'fab fa-js',
  'vue.js':     'fab fa-vuejs',
  'react':      'fab fa-react',
  'python':     'fab fa-python',
  'api rest':   'fas fa-plug',
  'responsive': 'fas fa-mobile-alt',
  'node.js':    'fab fa-node-js',
  'mysql':      'fas fa-database',
  'php':        'fab fa-php',
  'laravel':    'fas fa-fire',
  'django':     'fas fa-server',
  'saas':       'fas fa-cloud',
  'tensorflow': 'fas fa-brain',
  'opencv':     'fas fa-eye',
  'ai':         'fas fa-robot',
  'ia':         'fas fa-robot'
};

const tagColorMap = {
  'html5':      '#e34f26',
  'css3':       '#1572b6',
  'javascript': '#f0b429',
  'vue.js':     '#42b883',
  'react':      '#00d8ff',
  'python':     '#3776ab',
  'api rest':   '#2563eb',
  'responsive': '#10b981',
  'node.js':    '#339933',
  'mysql':      '#4479a1',
  'php':        '#8892c8',
  'laravel':    '#ff2d20',
  'django':     '#0da574',
  'saas':       '#6366f1',
  'tensorflow': '#ff6f00',
  'opencv':     '#5c3ee8',
  'ai':         '#7c3aed',
  'ia':         '#7c3aed'
};

function getTagIcon(tag)  { return tagIconMap[tag.toLowerCase()]  || 'fas fa-code';    }
function getTagColor(tag) { return tagColorMap[tag.toLowerCase()] || 'var(--primary)'; }

/* ============================================================
   State
   ============================================================ */
let currentLang       = 'fr';
let typingAnimationId = 0;

/* ============================================================
   Language helpers
   ============================================================ */
function detectLanguage() {
  const stored = localStorage.getItem('portfolioLang');
  if (stored === 'en' || stored === 'fr') return stored;
  return (navigator.language || '').startsWith('fr') ? 'fr' : 'en';
}

function t(key) {
  const parts = key.split('.');
  let value = translations[currentLang];
  for (const k of parts) {
    if (value == null) return key;
    value = value[k];
  }
  return typeof value === 'string' ? value : key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (typeof val === 'string') {
      el.classList.add('lang-transition');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.textContent = val;
          el.classList.remove('lang-transition');
        });
      });
    }
  });
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setLanguage(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem('portfolioLang', lang);
  document.documentElement.lang = lang;
  updateLangButtons();
  applyTranslations();
  renderTimeline();
  renderProjects();
  renderStack();
  startTypingAnimation();
}

/* ============================================================
   Typing animation
   ============================================================ */
function startTypingAnimation() {
  const el = document.getElementById('heroGreeting');
  if (!el) return;

  const animId = ++typingAnimationId;
  const text   = translations[currentLang]?.hero?.greeting ?? '';
  if (!text) return;
  let i = 0;

  el.innerHTML = '<span class="cursor"></span>';

  function typeNext() {
    if (animId !== typingAnimationId) return;
    if (i <= text.length) {
      el.innerHTML = text.substring(0, i) + '<span class="cursor"></span>';
      i++;
      setTimeout(typeNext, i === 1 ? 350 : 55);
    }
  }

  setTimeout(typeNext, 200);
}

/* ============================================================
   Floating icons (hero background)
   ============================================================ */
function initFloatingIcons() {
  const container = document.getElementById('floatingIcons');
  if (!container) return;

  const icons = [
    { cls: 'fab fa-html5',    color: '#e34f26' },
    { cls: 'fab fa-css3-alt', color: '#1572b6' },
    { cls: 'fab fa-js',       color: '#f7df1e' },
    { cls: 'fab fa-python',   color: '#3776ab' },
    { cls: 'fab fa-react',    color: '#61dafb' },
    { cls: 'fab fa-github',   color: '#181717' },
    { cls: 'fab fa-git-alt',  color: '#f05032' },
    { cls: 'fas fa-database', color: '#4479a1' },
    { cls: 'fab fa-aws',      color: '#ff9900' },
    { cls: 'fab fa-vuejs',    color: '#42b883' },
    { cls: 'fab fa-php',      color: '#777bb4' },
    { cls: 'fab fa-linux',    color: '#fcc624' }
  ];

  function spawnIcon() {
    const src      = icons[Math.floor(Math.random() * icons.length)];
    const size     = Math.random() * 28 + 18;
    const left     = Math.random() * 96;
    const duration = Math.random() * 10 + 9;
    const delay    = Math.random() * 3;

    const el = document.createElement('i');
    el.className = src.cls + ' floating-icon';
    el.style.cssText = `
      left: ${left}%;
      bottom: -60px;
      font-size: ${size}px;
      color: ${src.color};
      animation-name: floatUp;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      animation-timing-function: linear;
      animation-fill-mode: both;
    `;
    container.appendChild(el);
    setTimeout(() => el.remove(), (duration + delay + 1) * 1000);
  }

  for (let i = 0; i < 10; i++) setTimeout(spawnIcon, i * 500);
  setInterval(spawnIcon, 1400);
}

/* ============================================================
   Intersection Observer — fade-up
   ============================================================ */
function observeFadeElements() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up:not(.visible)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.bottom < 0) {
      el.classList.add('visible');
    } else {
      obs.observe(el);
    }
  });
}

/* ============================================================
   Dynamic rendering — Timeline
   ============================================================ */
function renderTimeline() {
  const container = document.getElementById('timeline');
  if (!container) return;
  container.innerHTML = '';

  const items = translations[currentLang]?.experience?.items ?? [];
  if (!items.length) return;

  items.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'timeline-item fade-up';
    div.style.transitionDelay = `${idx * 0.08}s`;

    div.innerHTML = `
      <div class="timeline-icon">
        <i class="${item.icon}"></i>
      </div>
      <div class="timeline-card">
        <h3>${item.title}</h3>
        <p class="tc-company"><i class="fas fa-building"></i> ${item.company}</p>
        <p class="tc-date"><i class="fas fa-calendar-alt"></i> ${item.date}</p>
        <p class="tc-desc">${item.desc}</p>
      </div>
    `;

    container.appendChild(div);
  });

  observeFadeElements();
}

/* ============================================================
   Dynamic rendering — Projects
   ============================================================ */
function renderProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;
  container.innerHTML = '';

  const items = translations[currentLang]?.projects?.items ?? [];
  if (!items.length) return;

  items.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'project-card fade-up';
    card.style.transitionDelay = `${idx * 0.1}s`;

    const tags = Array.isArray(item.tags) ? item.tags : [];
    const tagsHTML = tags.map(tag =>
      `<span class="project-tag"><i class="${getTagIcon(tag)}" style="color:${getTagColor(tag)}"></i> ${tag}</span>`
    ).join('');

    card.innerHTML = `
      <div class="project-image">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="project-overlay">
          <i class="fas fa-external-link-alt"></i>
        </div>
      </div>
      <div class="project-content">
        <h3><i class="${item.icon}"></i> ${item.title}</h3>
        <p>${item.desc}</p>
        <div class="project-tags">${tagsHTML}</div>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="project-link">
          ${item.link} <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;

    container.appendChild(card);
  });

  observeFadeElements();
}

/* ============================================================
   Dynamic rendering — Stack
   ============================================================ */
function renderStack() {
  const container = document.getElementById('stackContent');
  if (!container) return;
  container.innerHTML = '';

  const categories = translations[currentLang]?.stack?.categories ?? [];
  if (!categories.length) return;

  const wrap = document.createElement('div');
  wrap.className = 'stack-categories';

  categories.forEach((cat, idx) => {
    const catDiv = document.createElement('div');
    catDiv.className = 'stack-category fade-up';
    catDiv.style.transitionDelay = `${idx * 0.1}s`;

    const itemsHTML = cat.items.map(item => `
      <div class="stack-item">
        <i class="${item.icon}" style="color:${item.color}"></i>
        <span>${item.name}</span>
      </div>
    `).join('');

    catDiv.innerHTML = `
      <h3>${cat.name}</h3>
      <div class="stack-grid">${itemsHTML}</div>
    `;

    wrap.appendChild(catDiv);
  });

  container.appendChild(wrap);
  observeFadeElements();
}

/* ============================================================
   Navbar scroll effect
   ============================================================ */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ============================================================
   Language switcher event listeners
   ============================================================ */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

/* ============================================================
   DOMContentLoaded — Initialization order per spec:
     1. Initialize all UI components
     2. Create dynamic elements with initial language values
     3. Apply language system
     4. Set up event listeners (already done above via init fns)
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* 1 — Initialize UI components */
  initNavbarScroll();
  initLangSwitcher();
  initFloatingIcons();

  /* Detect & apply initial language */
  currentLang = detectLanguage();
  document.documentElement.lang = currentLang;

  /* 2 — Create dynamic elements with initial language values */
  renderTimeline();
  renderProjects();
  renderStack();

  /* 3 — Apply language system (static data-i18n elements) */
  applyTranslations();
  updateLangButtons();

  /* Start typing animation */
  startTypingAnimation();

  /* Trigger fade-up for hero text after short delay */
  setTimeout(() => {
    document.querySelectorAll('.hero .fade-up').forEach(el => el.classList.add('visible'));
    observeFadeElements();
  }, 120);
});
