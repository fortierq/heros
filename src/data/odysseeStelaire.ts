import type { Adventure } from "@/types";

export const odysseeStelaire: Adventure = {
  id: "odyssee-stellaire",
  title: "Odyssée Stellaire",
  subtitle: "Une aventure spatiale épique",
  description:
    "Année 3147. Votre vaisseau, le Némésis, a été endommagé lors d'un saut hyperspatial raté. Vous êtes perdu dans un secteur inconnu de la galaxie, près d'une planète mystérieuse qui émet un signal ancien. Votre mission : survivre, explorer, et percer les secrets de cette région oubliée de l'espace.",
  coverImage:
    "images/stellaire/nebuleuse.jpg",
  theme: "scifi",
  themeColors: {
    primary: "#1a1a4e",
    secondary: "#2d2d7b",
    bg: "#0a0a1f",
    accent: "#00d4ff",
  },
  startingStats: {
    level: 1,
    hp: 100,
    maxHp: 100,
    mana: 60,
    maxMana: 60,
    attack: 10,
    defense: 10,
    magic: 8,
    luck: 6,
    xp: 0,
    xpToNextLevel: 100,
  },
  startingItems: [
    {
      id: "blaster_standard",
      name: "Blaster Standard",
      description: "Un blaster de série, fiable mais peu puissant. Dégâts : 4.",
      icon: "🔫",
      type: "weapon",
      damage: 4,
    },
    {
      id: "medikit",
      name: "Médi-Kit",
      description: "Kit de premiers soins. Restaure 35 PV.",
      icon: "💊",
      type: "potion",
      usable: true,
      effects: [{ type: "heal", value: 35 }],
    },
  ],
  startingSpells: [],
  allItems: {
    blaster_standard: {
      id: "blaster_standard",
      name: "Blaster Standard",
      description: "Un blaster de série. Dégâts : 4.",
      icon: "🔫",
      type: "weapon",
      damage: 4,
    },
    medikit: {
      id: "medikit",
      name: "Médi-Kit",
      description: "Restaure 35 PV.",
      icon: "💊",
      type: "potion",
      usable: true,
      effects: [{ type: "heal", value: 35 }],
    },
    carte_stellaire: {
      id: "carte_stellaire",
      name: "Carte Stellaire",
      description: "Carte holographique du secteur.",
      icon: "🗺️",
      type: "quest",
    },
    blaster_plasma: {
      id: "blaster_plasma",
      name: "Blaster à Plasma",
      description: "Arme de haute technologie alien. Dégâts : 15.",
      icon: "⚡",
      type: "weapon",
      damage: 15,
      effects: [{ type: "stat_boost", target: "attack", value: 12 }],
    },
    armure_nano: {
      id: "armure_nano",
      name: "Armure Nano-Tissée",
      description: "Armure utilisant la nanotechnologie. Défense +10.",
      icon: "🦾",
      type: "armor",
      effects: [{ type: "stat_boost", target: "defense", value: 10 }],
    },
    cle_alien: {
      id: "cle_alien",
      name: "Artéfact-Clé Alien",
      description: "Un objet d'une technologie inconnue.",
      icon: "🔑",
      type: "key",
    },
    cristal_energie: {
      id: "cristal_energie",
      name: "Cristal d'Énergie",
      description: "Source d'énergie pure condensée.",
      icon: "💠",
      type: "quest",
    },
    medikit_avance: {
      id: "medikit_avance",
      name: "Médi-Kit Avancé",
      description: "Restaure 60 PV.",
      icon: "❤️‍🩹",
      type: "potion",
      usable: true,
      effects: [{ type: "heal", value: 60 }],
    },
    module_ia: {
      id: "module_ia",
      name: "Module IA Alien",
      description: "Un processeur d'intelligence artificielle alien.",
      icon: "🧠",
      type: "quest",
    },
  },
  allSpells: {
    bouclier_energie: {
      id: "bouclier_energie",
      name: "Bouclier Énergétique",
      description: "Active un champ de force protecteur.",
      icon: "🛡️",
      manaCost: 10,
      healing: 30,
    },
    rayon_ionique: {
      id: "rayon_ionique",
      name: "Rayon Ionique",
      description: "Un rayon d'énergie ionique concentré.",
      icon: "⚡",
      manaCost: 12,
      damage: 30,
    },
    piratage: {
      id: "piratage",
      name: "Piratage Système",
      description: "Pirate les systèmes ennemis.",
      icon: "💻",
      manaCost: 8,
      damage: 20,
      effect: "weaken",
    },
  },
  startScene: "reveil_vaisseau",
  scenes: {
    // ─── ACTE 1 : Le Réveil ─────────────────
    reveil_vaisseau: {
      id: "reveil_vaisseau",
      title: "Réveil en Urgence",
      text: `**ALERTE ! ALERTE ! Systèmes critiques endommagés.**\n\nVous vous réveillez dans le cockpit du Némésis, la tête bourdonnante. À travers le hublot fissuré, une planète bleue et verte tourne lentement — inconnue de toutes vos cartes.\n\nL'IA du vaisseau, ARIA, grésille : *"Capitaine... saut hyperspatial... échec critique... localisation inconnue... réserves d'oxygène à 47%... signal alien détecté sur la planète."*\n\nLes instruments clignotent frénétiquement. Vous devez agir vite.`,
      image:
        "images/stellaire/lancement-fusee.jpg",
      imageAlt: "Cockpit de vaisseau spatial endommagé",
      choices: [
        {
          text: "🛬 Atterrir sur la planète pour chercher des ressources",
          nextScene: "atterrissage_planete",
        },
        {
          text: "📡 Analyser le signal alien d'abord",
          nextScene: "analyse_signal",
        },
        {
          text: "🔧 Tenter de réparer ARIA en priorité",
          nextScene: "reparation_aria",
        },
      ],
    },

    analyse_signal: {
      id: "analyse_signal",
      title: "Le Signal Mystérieux",
      text: `Vous redirigez l'énergie vers les capteurs. Le signal est structuré — ce n'est pas naturel. ARIA décode partiellement le message :\n\n*"... gardiens ... réveil ... épreuve ... digne ... porte des étoiles ..."*\n\nUne carte stellaire holographique se matérialise soudain au-dessus de la console ! Elle montre la planète en contrebas avec trois points d'intérêt marqués.\n\nARIA ajoute : *"Capitaine, ce signal a plus de 10 000 ans."*`,
      image:
        "images/stellaire/terre-espace.jpg",
      imageAlt: "Hologramme d'une carte stellaire",
      effects: [
        { type: "add_item", itemId: "carte_stellaire" },
        { type: "add_xp", value: 25 },
        { type: "set_flag", flag: "signal_decode" },
      ],
      choices: [
        {
          text: "🛬 Atterrir sur la planète",
          nextScene: "atterrissage_planete",
        },
        {
          text: "🔧 Réparer ARIA d'abord",
          nextScene: "reparation_aria",
        },
      ],
    },

    reparation_aria: {
      id: "reparation_aria",
      title: "Réparation d'ARIA",
      text: `Vous ouvrez le panneau d'accès au processeur central d'ARIA. Les circuits sont endommagés mais réparables. Après une heure de travail minutieux, ARIA redémarre avec une voix plus claire :\n\n*"Merci, Capitaine. Mes diagnostics sont restaurés à 78%. Je détecte maintenant des formes de vie sur la planète — certaines amicales, d'autres... hostiles. Je recommande la prudence."*\n\nARIA active le **Bouclier Énergétique** de vos systèmes défensifs.`,
      image:
        "images/stellaire/technologie.jpg",
      imageAlt: "Circuits et technologie",
      effects: [
        { type: "add_spell", spellId: "bouclier_energie" },
        { type: "stat_boost", target: "defense", value: 5 },
        { type: "set_flag", flag: "aria_reparee" },
        { type: "add_xp", value: 30 },
      ],
      choices: [
        {
          text: "🛬 Atterrir sur la planète",
          nextScene: "atterrissage_planete",
        },
      ],
    },

    // ─── ACTE 2 : La Planète ─────────────────
    atterrissage_planete: {
      id: "atterrissage_planete",
      title: "Atterrissage sur Elysia-7",
      text: `Le Némésis traverse l'atmosphère dans un rugissement de flammes. Vous vous posez dans une vallée luxuriante aux plantes bioluminescentes. Le ciel a deux soleils orangés.\n\nDevant vous s'étend un paysage extraordinaire : une jungle de cristal à l'est, des ruines technologiques au nord, et un lac miroir à l'ouest d'où émane une lumière pulsante.\n\nARIA détecte le signal alien provenant des ruines au nord.`,
      image:
        "images/stellaire/planete-alien.jpg",
      imageAlt: "Paysage alien luxuriant",
      effects: [{ type: "add_xp", value: 15 }],
      choices: [
        {
          text: "🌿 Explorer la jungle de cristal à l'est",
          nextScene: "jungle_cristal",
        },
        {
          text: "🏛️ Se diriger vers les ruines au nord",
          nextScene: "ruines_alien",
        },
        {
          text: "💧 Investiguer le lac miroir à l'ouest",
          nextScene: "lac_miroir",
        },
      ],
    },

    jungle_cristal: {
      id: "jungle_cristal",
      title: "La Jungle de Cristal",
      text: `Les "arbres" ici sont d'immenses structures cristallines qui chantent quand le vent les traverse. C'est d'une beauté hypnotique.\n\nSoudain, un prédateur alien surgit d'entre les cristaux — une créature biomécanique aux griffes acérées !`,
      image:
        "images/stellaire/foret-alien.jpg",
      imageAlt: "Jungle de cristaux alien",
      combat: {
        enemyName: "Prédateur Cristallin",
        enemyIcon: "🦎",
        enemyHp: 85,
        enemyAttack: 19,
        enemyDefense: 10,
        enemySpells: [
          {
            name: "Griffes Cristallines",
            icon: "💎",
            damage: 16,
            chance: 0.25,
          },
        ],
        victoryScene: "victoire_predateur",
        defeatScene: "defaite_spatiale",
        xpReward: 55,
      },
      choices: [],
    },

    victoire_predateur: {
      id: "victoire_predateur",
      title: "Victoire sur le Prédateur",
      text: `Le prédateur s'effondre en milliers de fragments cristallins. Parmi les débris, vous récupérez un **Cristal d'Énergie** qui pulse d'une lumière bleue intense.\n\nPlus deep dans la jungle, vous découvrez un arsenal alien abandonné contenant un **Blaster à Plasma** — une arme bien supérieure à votre équipement standard.`,
      image:
        "images/stellaire/foret-alien.jpg",
      imageAlt: "Cristaux et technologie alien",
      effects: [
        { type: "add_item", itemId: "cristal_energie" },
        { type: "add_item", itemId: "blaster_plasma" },
        { type: "stat_boost", target: "attack", value: 12 },
      ],
      choices: [
        {
          text: "🏛️ Aller aux ruines au nord",
          nextScene: "ruines_alien",
        },
        {
          text: "💧 Explorer le lac miroir",
          nextScene: "lac_miroir",
        },
      ],
    },

    lac_miroir: {
      id: "lac_miroir",
      title: "Le Lac Miroir",
      text: `Le lac est d'un calme surnaturel — sa surface réfléchit non pas le ciel, mais des images d'un autre temps. Vous voyez une civilisation alien florissante, des vaisseaux immenses, puis... la destruction.\n\nUne entité lumineuse émerge du lac — un être d'énergie pure qui communique par télépathie :\n\n*"Voyageur des étoiles, nous sommes les derniers échos des Architectes. Notre technologie est piégée dans les ruines au nord. Si vous êtes digne, elle vous appartiendra. Nous vous offrons la connaissance du Rayon Ionique."*`,
      image:
        "images/stellaire/station-spatiale.jpg",
      imageAlt: "Lac miroir reflétant les étoiles",
      effects: [
        { type: "add_spell", spellId: "rayon_ionique" },
        { type: "stat_boost", target: "magic", value: 8 },
        { type: "set_flag", flag: "benediction_architectes" },
        { type: "add_xp", value: 40 },
      ],
      choices: [
        {
          text: "🏛️ Aller aux ruines des Architectes",
          nextScene: "ruines_alien",
        },
        {
          text: "❓ Demander plus d'informations aux Architectes",
          nextScene: "histoire_architectes",
        },
      ],
    },

    histoire_architectes: {
      id: "histoire_architectes",
      title: "L'Histoire des Architectes",
      text: `L'entité projette des images dans votre esprit : les Architectes étaient une civilisation qui avait maîtrisé le voyage entre les dimensions. Mais leur plus grande création — la **Porte des Étoiles** — a attiré une entité destructrice d'une autre dimension : le **Dévoreur**.\n\n*"Le Dévoreur sommeille dans les ruines. Si quelqu'un active la Porte sans le vaincre, il s'échappera et consumera cette galaxie. Vous devez trouver le Module IA et l'Artéfact-Clé pour contrôler la Porte en sécurité."*\n\nVous recevez une armure de nanotechnologie alien en cadeau.`,
      image:
        "images/stellaire/nebuleuse.jpg",
      imageAlt: "Visions cosmiques des Architectes",
      effects: [
        { type: "add_item", itemId: "armure_nano" },
        { type: "stat_boost", target: "defense", value: 10 },
        { type: "set_flag", flag: "connait_devoreur" },
        { type: "add_xp", value: 35 },
      ],
      choices: [
        {
          text: "🏛️ Se rendre aux ruines, prêt à affronter le Dévoreur",
          nextScene: "ruines_alien",
        },
      ],
    },

    // ─── ACTE 3 : Les Ruines ─────────────────
    ruines_alien: {
      id: "ruines_alien",
      title: "Les Ruines des Architectes",
      text: `Les ruines sont monumentales — des structures métalliques qui défient la gravité, flottant au-dessus du sol. Des écrans holographiques clignotent encore après des millénaires.\n\nAu centre, une immense arche — la **Porte des Étoiles** — pulse d'une énergie contenue. Mais devant elle, un robot sentinelle s'active, ses yeux rouges braqués sur vous.\n\n*"INTRUS DÉTECTÉ. PROTOCOLE DE DÉFENSE ACTIVÉ."*`,
      image:
        "images/stellaire/terre-espace.jpg",
      imageAlt: "Ruines de technologie alien avancée",
      choices: [
        {
          text: "💻 Tenter de pirater la sentinelle",
          nextScene: "piratage_sentinelle",
          condition: { type: "has_flag", flag: "aria_reparee" },
        },
        {
          text: "⚔️ Combattre la sentinelle",
          nextScene: "combat_sentinelle",
        },
        {
          text: "🗣️ Montrer l'Artéfact-Clé Alien",
          nextScene: "acces_sentinelle",
          condition: { type: "has_item", itemId: "cle_alien" },
        },
      ],
    },

    piratage_sentinelle: {
      id: "piratage_sentinelle",
      title: "Piratage Réussi !",
      text: `ARIA interface avec les systèmes de la sentinelle. Après quelques secondes tendues, le robot s'immobilise et ses yeux passent au vert.\n\n*"Interface acceptée. Bienvenue, visiteur. Les Archives des Architectes sont accessibles."*\n\nVous apprenez le sort **Piratage Système** et trouvez l'**Artéfact-Clé Alien** dans les archives.`,
      image:
        "images/stellaire/technologie.jpg",
      imageAlt: "Piratage informatique alien",
      effects: [
        { type: "add_spell", spellId: "piratage" },
        { type: "add_item", itemId: "cle_alien" },
        { type: "add_item", itemId: "module_ia" },
        { type: "add_xp", value: 50 },
      ],
      choices: [
        {
          text: "🌀 Activer la Porte des Étoiles",
          nextScene: "activation_porte",
        },
        {
          text: "🔍 Explorer les archives",
          nextScene: "archives_alien",
        },
      ],
    },

    combat_sentinelle: {
      id: "combat_sentinelle",
      title: "Combat : Sentinelle Alien",
      text: `La sentinelle déploie ses armes intégrées — des canons lasers et un bouclier d'énergie. Le combat s'engage !`,
      image:
        "images/stellaire/robot.jpg",
      imageAlt: "Robot sentinelle alien",
      combat: {
        enemyName: "Sentinelle des Architectes",
        enemyIcon: "🤖",
        enemyHp: 120,
        enemyAttack: 23,
        enemyDefense: 15,
        enemySpells: [
          { name: "Rayon Laser", icon: "💥", damage: 22, chance: 0.35 },
          {
            name: "Bouclier Énergétique",
            icon: "🛡️",
            healing: 18,
            chance: 0.15,
          },
        ],
        victoryScene: "victoire_sentinelle",
        defeatScene: "defaite_spatiale",
        xpReward: 80,
      },
      choices: [],
    },

    victoire_sentinelle: {
      id: "victoire_sentinelle",
      title: "Sentinelle Désactivée",
      text: `La sentinelle s'effondre dans une pluie d'étincelles. Dans ses restes, vous récupérez un **Module IA Alien** et l'**Artéfact-Clé**.\n\nLe chemin vers la Porte des Étoiles est libre.`,
      image:
        "images/stellaire/robot.jpg",
      imageAlt: "Robot détruit",
      effects: [
        { type: "add_item", itemId: "cle_alien" },
        { type: "add_item", itemId: "module_ia" },
        { type: "add_item", itemId: "medikit_avance" },
      ],
      choices: [
        {
          text: "🌀 Activer la Porte des Étoiles",
          nextScene: "activation_porte",
        },
        {
          text: "🔍 Explorer les archives d'abord",
          nextScene: "archives_alien",
        },
      ],
    },

    acces_sentinelle: {
      id: "acces_sentinelle",
      title: "Accès Autorisé",
      text: `La sentinelle scanne l'Artéfact-Clé et se met en mode passif.\n\n*"Artéfact reconnu. Accès total accordé."*\n\nLes archives et la Porte des Étoiles sont accessibles.`,
      effects: [{ type: "add_xp", value: 30 }],
      choices: [
        {
          text: "🌀 Activer la Porte des Étoiles",
          nextScene: "activation_porte",
        },
        {
          text: "🔍 Explorer les archives",
          nextScene: "archives_alien",
        },
      ],
    },

    archives_alien: {
      id: "archives_alien",
      title: "Les Archives des Architectes",
      text: `Les archives contiennent la somme du savoir d'une civilisation millénaire. Vous découvrez comment activer la Porte en sécurité — et surtout, comment vaincre le Dévoreur : il faut utiliser le Cristal d'Énergie comme catalyseur pour refermer sa dimension.\n\nVous découvrez aussi un **Médi-Kit Avancé** et des améliorations pour votre équipement.`,
      image:
        "images/stellaire/bibliotheque.jpg",
      imageAlt: "Archives holographiques alien",
      effects: [
        { type: "add_item", itemId: "medikit_avance" },
        { type: "stat_boost", target: "attack", value: 5 },
        { type: "stat_boost", target: "defense", value: 5 },
        { type: "set_flag", flag: "connait_solution_devoreur" },
        { type: "add_xp", value: 40 },
      ],
      choices: [
        {
          text: "🌀 Activer la Porte des Étoiles",
          nextScene: "activation_porte",
        },
      ],
    },

    // ─── ACTE FINAL ──────────────────────────
    activation_porte: {
      id: "activation_porte",
      title: "La Porte des Étoiles",
      text: `Vous insérez l'Artéfact-Clé dans la console centrale. La Porte des Étoiles s'illumine d'une lumière blanche aveuglante, et un vortex se forme en son centre.\n\nMais soudain, l'énergie se teinte de pourpre. Un grondement fait trembler les ruines. Une forme colossale commence à émerger du vortex — le **Dévoreur** s'éveille !\n\nSes tentacules d'énergie sombre s'étendent, détruisant tout sur leur passage.`,
      image:
        "images/stellaire/nebuleuse.jpg",
      imageAlt: "Porte des étoiles activée",
      choices: [
        {
          text: "💠 Utiliser le Cristal d'Énergie pour refermer la porte",
          nextScene: "fin_cristal",
          condition: { type: "has_item", itemId: "cristal_energie" },
        },
        {
          text: "🧠 Utiliser le Module IA pour reprogrammer la Porte",
          nextScene: "fin_reprogrammer",
          condition: { type: "has_item", itemId: "module_ia" },
        },
        {
          text: "⚔️ Affronter le Dévoreur directement",
          nextScene: "combat_devoreur",
        },
      ],
    },

    combat_devoreur: {
      id: "combat_devoreur",
      title: "Combat : Le Dévoreur",
      text: `Le Dévoreur est une masse d'énergie sombre et de tentacules cosmiques. Son rugissement fait vibrer la réalité elle-même !\n\nC'est le combat de votre vie !`,
      image:
        "images/stellaire/nebuleuse.jpg",
      imageAlt: "Entité cosmique monstrueuse",
      combat: {
        enemyName: "Le Dévoreur",
        enemyIcon: "👁️",
        enemyHp: 220,
        enemyAttack: 32,
        enemyDefense: 20,
        enemySpells: [
          { name: "Rayon Cosmique", icon: "🌌", damage: 30, chance: 0.3 },
          { name: "Tentacules du Vide", icon: "🪸", damage: 25, chance: 0.2 },
          { name: "Absorption", icon: "🕳️", healing: 30, chance: 0.15 },
        ],
        victoryScene: "fin_combat_devoreur",
        defeatScene: "defaite_spatiale",
        xpReward: 200,
      },
      choices: [],
    },

    // ─── FINS ────────────────────────────────
    fin_cristal: {
      id: "fin_cristal",
      title: "✨ La Lumière Triomphe",
      text: `Vous brandissez le Cristal d'Énergie face au Dévoreur. Le cristal absorbe l'énergie sombre du vortex et la convertit en lumière pure.\n\nLe Dévoreur hurle — un son qui traverse les dimensions — tandis qu'il est aspiré à nouveau dans la faille. La Porte se stabilise, brillant désormais d'une lumière bleue sereine.\n\nARIA confirme : *"Porte stabilisée. Coordonnées de la Terre verrouillées. Prêt pour le saut, Capitaine."*\n\nVous franchissez la Porte et retrouvez la Voie Lactée. La civilisation des Architectes revivra à travers les données que vous ramenez.\n\n🌟 **FIN ULTIME — Sauveur des Étoiles** 🌟\n*Vous avez vaincu le Dévoreur et ramené le savoir des Architectes à l'humanité.*`,
      image:
        "images/stellaire/terre-espace.jpg",
      imageAlt: "Lumière cosmique triomphante",
      effects: [{ type: "add_xp", value: 250 }],
      isEnding: true,
      endingType: "victory",
      choices: [],
    },

    fin_reprogrammer: {
      id: "fin_reprogrammer",
      title: "🖥️ Le Code Ultime",
      text: `Vous connectez le Module IA à la console de la Porte. ARIA et l'IA alien travaillent ensemble pour reprogrammer le vortex.\n\nLe Dévoreur est repoussé dans sa dimension et la Porte se recalibre. Elle affiche maintenant des coordonnées familières — la Terre !\n\n*"Solution optimale trouvée,"* annonce ARIA. *"La Porte est sécurisée. Le Dévoreur ne pourra plus jamais s'en échapper."*\n\nVous rentrez chez vous en héros, porteur de la technologie qui changera l'avenir de l'humanité.\n\n💻 **FIN SCIENTIFIQUE — Le Programmeur des Étoiles** 💻\n*L'intelligence a triomphé de la force brute.*`,
      image:
        "images/stellaire/technologie.jpg",
      imageAlt: "Code alien et technologie",
      effects: [{ type: "add_xp", value: 200 }],
      isEnding: true,
      endingType: "victory",
      choices: [],
    },

    fin_combat_devoreur: {
      id: "fin_combat_devoreur",
      title: "⚔️ Le Dévoreur est Vaincu !",
      text: `Après un combat titanesque, le Dévoreur se disloque en fragments d'énergie sombre qui sont aspirés dans le vortex. La Porte se stabilise d'elle-même.\n\nVous êtes épuisé mais victorieux. ARIA localise les coordonnées de la Terre et vous préparez le saut retour.\n\nL'humanité ne saura probablement jamais à quel point elle est passée près de l'extinction. Mais vous, vous savez.\n\n⚔️ **FIN HÉROÏQUE — Le Combattant des Étoiles** ⚔️\n*La force et le courage ont prévalu contre l'impossible.*`,
      image:
        "images/stellaire/lancement-fusee.jpg",
      imageAlt: "Victoire spatiale",
      effects: [{ type: "add_xp", value: 180 }],
      isEnding: true,
      endingType: "victory",
      choices: [],
    },

    defaite_spatiale: {
      id: "defaite_spatiale",
      title: "💀 Perdu dans les Étoiles",
      text: `Vos systèmes de survie tombent en panne un par un. Seul dans l'obscurité de l'espace inconnu, votre aventure prend fin.\n\nPeut-être qu'un jour, un autre explorateur trouvera l'épave du Némésis et reprendra votre mission...\n\n💀 **FIN — Défaite** 💀\n*L'espace est vaste et impitoyable.*`,
      image:
        "images/stellaire/nebuleuse.jpg",
      imageAlt: "Vaisseau dérivant dans l'espace",
      isEnding: true,
      endingType: "defeat",
      choices: [],
    },
  },
};
