import type { Adventure } from "../types";

export const foretSombre: Adventure = {
  id: "foret-sombre",
  title: "La Forêt des Ombres",
  subtitle: "Une quête médiévale-fantastique étendue",
  description:
    "Explorez la vaste Forêt des Ombres, un labyrinthe maudit regorgeant de lieux oubliés. Des villages fantômes aux cavernes cristallines, chaque recoin cache un danger ou un trésor. Préparez votre carte, car les sentiers sont nombreux et les périls grands.",
  coverImage: "images/foret/foret-sombre-cover.jpg",
  theme: "fantasy",
  themeColors: {
    primary: "#1a472a",
    secondary: "#2d5a3f",
    bg: "#0d1f15",
    accent: "#d4a017",
  },
  startingStats: {
    level: 1,
    hp: 100,
    maxHp: 100,
    mana: 30,
    maxMana: 30,
    attack: 10,
    defense: 6,
    magic: 6,
    luck: 7,
    xp: 0,
    xpToNextLevel: 100,
  },
  startingItems: [
    {
      id: "epee_rouilee",
      name: "Épée Rouillée",
      description:
        "Une vieille épée qui a connu des jours meilleurs. Dégâts : 3.",
      icon: "🗡️",
      type: "weapon",
      damage: 3,
    },
    {
      id: "potion_soin_faible",
      name: "Potion de soin",
      description: "Restaure 30 PV.",
      icon: "🧪",
      type: "potion",
      usable: true,
      effects: [{ type: "heal", value: 30 }],
    },
    {
      id: "carte_gribouillee",
      name: "Carte Partielle",
      description: "Une carte incomplète de la région.",
      icon: "🗺️",
      type: "quest",
    },
  ],
  startingSpells: [],
  allItems: {
    epee_rouilee: {
      id: "epee_rouilee",
      name: "Épée Rouillée",
      description:
        "Une vieille épée qui a connu des jours meilleurs. Dégâts : 3.",
      icon: "🗡️",
      type: "weapon",
      damage: 3,
    },
    potion_soin_faible: {
      id: "potion_soin_faible",
      name: "Potion de soin",
      description: "Restaure 30 PV.",
      icon: "🧪",
      type: "potion",
      usable: true,
      effects: [{ type: "heal", value: 30 }],
    },
    artefact_purif: {
      id: "artefact_purif",
      name: "Orbe de Purification",
      description:
        "Dissipe les brumes magiques. Immunité contre les illusions.",
      icon: "🔮",
      type: "artifact",
    },
    amulette_loup: {
      id: "amulette_loup",
      name: "Amulette du Loup",
      description: "Un pendentif gravé d'un loup hurlant. Attaque +5.",
      icon: "🐺",
      type: "ring",
      effects: [{ type: "stat_boost", target: "attack", value: 5 }],
    },
    cle_donjon: {
      id: "cle_donjon",
      name: "Clé du Donjon",
      description: "Une clé ancienne en fer forgé.",
      icon: "🗝️",
      type: "key",
    },
    epee_flamme: {
      id: "epee_flamme",
      name: "Épée de Flamme",
      description:
        "Une lame enchantée qui brûle d'un feu éternel. Dégâts : 12.",
      icon: "🔥",
      type: "weapon",
      damage: 12,
      effects: [{ type: "stat_boost", target: "attack", value: 10 }],
    },
    bouclier_ancien: {
      id: "bouclier_ancien",
      name: "Bouclier Ancien",
      description: "Un bouclier ouvragé trouvé dans les ruines. Défense +8.",
      icon: "🛡️",
      type: "armor",
      effects: [{ type: "stat_boost", target: "defense", value: 8 }],
    },
    potion_soin: {
      id: "potion_soin",
      name: "Grande Potion de Soin",
      description: "Restaure 60 PV.",
      icon: "❤️‍🩹",
      type: "potion",
      usable: true,
      effects: [{ type: "heal", value: 60 }],
    },
    gemme_dragon: {
      id: "gemme_dragon",
      name: "Gemme du Dragon",
      description: "Une pierre précieuse qui pulse d'énergie draconique.",
      icon: "💎",
      type: "quest",
    },
    couronne_roi: {
      id: "couronne_roi",
      name: "Couronne du Roi Oublié",
      description:
        "La couronne d'un roi dont le nom s'est perdu dans le temps.",
      icon: "👑",
      type: "quest",
    },
    carte_gribouillee: {
      id: "carte_gribouillee",
      name: "Carte Partielle",
      description: "Une carte incomplète de la région.",
      icon: "🗺️",
      type: "quest",
    },
    poupee_perdue: {
      id: "poupee_perdue",
      name: "Poupée de Chiffon",
      description: "Un jouet d'enfant trouvé dans le village maudit.",
      icon: "🧸",
      type: "quest",
    },
    cristal_bleu: {
      id: "cristal_bleu",
      name: "Cristal d'Énergie",
      description: "Un cristal vibrant de magie brute. Mana +10",
      icon: "💎",
      type: "quest",
      effects: [{ type: "stat_boost", target: "maxMana", value: 10 }],
    },
  },
  allSpells: {
    boule_feu: {
      id: "boule_feu",
      name: "Boule de Feu",
      description: "Lance une boule de feu ardente.",
      icon: "🔥",
      manaCost: 10,
      damage: 25,
    },
    guerison: {
      id: "guerison",
      name: "Guérison",
      description: "Restaure les points de vie.",
      icon: "💚",
      manaCost: 8,
      healing: 40,
    },
    eclair: {
      id: "eclair",
      name: "Éclair",
      description: "Un éclair dévastateur fend le ciel.",
      icon: "⚡",
      manaCost: 15,
      damage: 40,
    },
    purification: {
      id: "purification",
      name: "Purification",
      description: "Dissipe les illusions et blesse les morts-vivants.",
      icon: "✨",
      manaCost: 12,
      damage: 30,
    },
  },
  mapLocations: [
    {
      id: "entree",
      name: "Entrée de la Forêt",
      x: 50,
      y: 90,
      icon: "🌲",
      arrivalScene: "entree_foret",
      connectedTo: ["lac_brume", "village_maudit", "clairiere"],
      discoveredByDefault: true,
    },
    {
      id: "lac_brume",
      name: "Lac des Esprits",
      x: 20,
      y: 80,
      icon: "💧",
      arrivalScene: "lac_brume_scene",
      connectedTo: ["entree", "caverne_cristal", "clairiere"],
    },
    {
      id: "village_maudit",
      name: "Village Abandonné",
      x: 80,
      y: 80,
      icon: "🏚️",
      arrivalScene: "village_maudit_scene",
      connectedTo: ["entree", "tour_guet", "sentier_sombre"],
    },
    {
      id: "clairiere",
      name: "Clairière aux Champignons",
      x: 35,
      y: 60,
      icon: "🍄",
      arrivalScene: "sentier_champignons",
      connectedTo: ["entree", "lac_brume", "ruines", "caverne_cristal"],
    },
    {
      id: "sentier_sombre",
      name: "Sentier des Murmures",
      x: 65,
      y: 60,
      icon: "💀",
      arrivalScene: "sentier_bruits",
      connectedTo: ["village_maudit", "ruines", "tour_guet"],
    },
    {
      id: "caverne_cristal",
      name: "Caverne de Cristal",
      x: 10,
      y: 40,
      icon: "💎",
      arrivalScene: "caverne_cristal_scene",
      connectedTo: ["lac_brume", "clairiere"],
    },
    {
      id: "tour_guet",
      name: "Tour de Guet",
      x: 90,
      y: 40,
      icon: "🏯",
      arrivalScene: "tour_guet_scene",
      connectedTo: ["village_maudit", "sentier_sombre"],
    },
    {
      id: "ruines",
      name: "Ruines Antiques",
      x: 50,
      y: 35,
      icon: "🏛️",
      arrivalScene: "ruines_nord",
      connectedTo: ["clairiere", "sentier_sombre", "donjon"],
    },
    {
      id: "donjon",
      name: "Donjon Noir",
      x: 50,
      y: 10,
      icon: "🏰",
      arrivalScene: "approche_donjon",
      connectedTo: ["ruines"],
    },
  ],
  randomEvents: [
    {
      id: "loup_affame",
      title: "Loup Affamé",
      text: "Un loup aux yeux rouges surgit des fourrés !",
      imagePrompt: "angry wolf with red eyes in dark forest",
      probability: 0.15,
      combat: {
        enemyName: "Loup",
        enemyIcon: "🐺",
        enemyHp: 55,
        enemyAttack: 18,
        enemyDefense: 6,
        victoryScene: "",
        defeatScene: "defaite_generique",
        xpReward: 15,
      },
    },
    {
      id: "feu_follet",
      title: "Jeu du Feu Follet",
      text: "Une petite lumière danse devant vous. Elle semble vouloir jouer.",
      imagePrompt: "will-o-the-wisp deep forest night magical",
      probability: 0.1,
      choices: [
        {
          text: "Suivre la lumière",
          effects: [{ type: "add_xp", value: 10 }],
        },
        {
          text: "L'ignorer",
        },
      ],
    },
  ],
  startScene: "entree_foret",
  scenes: {
    // ─── ACTE 1 : L'Entrée et Extensions ────────
    entree_foret: {
      id: "entree_foret",
      title: "L'Orée de la Forêt des Ombres",
      mapLocation: "entree",
      imagePrompt:
        "mysterious dark forest entrance with fog medieval fantasy painting",
      text: `Les derniers rayons du soleil filtrent à travers les branches noueuses. L'air est lourd, chargé d'une brume verdâtre.\n\nUn panneau rongé par le temps indique : *"Nul n'entre ici sans y laisser une part de son âme."*\n\nVous consultez votre carte gribouillée. Plusieurs chemins s'offrent à vous : vers l'ouest, le Lac des Esprits; vers l'est, un village abandonné; et tout droit, les profondeurs de la forêt.\n\nUtilisez votre **Carte** pour choisir votre destination.`,
      image: "images/foret/sentier-foret.jpg",
      imageAlt: "Forêt sombre et brumeuse",
      choices: [
        {
          text: "🔍 Examiner le panneau de plus près",
          nextScene: "panneau_secret",
          condition: { type: "not_has_flag", flag: "recu_panneau_secret" },
        },
        {
          text: "🎒 Vérifier son équipement",
          nextScene: "verification_equipement",
        },
      ],
    },

    verification_equipement: {
      id: "verification_equipement",
      title: "Préparatifs",
      mapLocation: "entree",
      text: "Vous vérifiez les sangles de votre armure et le fil de votre lame. Vous êtes prêt à affronter les dangers de la carte.",
      imagePrompt: "adventurer checking gear woods",
      choices: [
        {
          text: "Retourner à l'observation",
          nextScene: "entree_foret",
        },
      ],
    },

    // ─── LAC DES ESPRITS (Corrigé pour éviter le loop de bonus) ──
    lac_brume_scene: {
      id: "lac_brume_scene",
      title: "Le Lac des Esprits",
      mapLocation: "lac_brume",
      imagePrompt:
        "mystical lake with fog and spirit woman rising water fantasy art",
      text: "Une étendue d'eau calme et sombre s'étend devant vous. La brume danse à la surface, formant des silhouettes évanescentes.",
      choices: [
        {
          text: "💧 S'approcher de l'eau",
          nextScene: "rencontre_esprit_lac",
          condition: { type: "not_has_flag", flag: "recu_don_esprit" },
        },
        {
          text: "🐟 Chercher de quoi manger",
          nextScene: "peche_lac",
        },
      ],
    },

    rencontre_esprit_lac: {
      id: "rencontre_esprit_lac",
      title: "La Dame du Lac",
      mapLocation: "lac_brume",
      text: "Une forme féminine faite d'eau pure s'élève. *\"L'étranger cherche-t-il la force ou la sagesse ?\"*\n\nElle vous observe avec intensité.",
      imagePrompt: "water elemental spirit lady fantasy",
      choices: [
        {
          text: "💪 La Force (Attaque +2)",
          effects: [
            { type: "stat_boost", target: "attack", value: 2 },
            { type: "add_xp", value: 10 },
            { type: "set_flag", flag: "recu_don_esprit" },
          ],
          nextScene: "don_esprit",
        },
        {
          text: "🧠 La Sagesse (Magie +2)",
          effects: [
            { type: "stat_boost", target: "magic", value: 2 },
            { type: "add_xp", value: 10 },
            { type: "set_flag", flag: "recu_don_esprit" },
          ],
          nextScene: "don_esprit",
        },
      ],
    },

    don_esprit: {
      id: "don_esprit",
      title: "Le Don de l'Eau",
      mapLocation: "lac_brume",
      text: "*\"Soit. Puisse l'eau guider vos pas.\"* L'esprit disparaît en une pluie fine qui vous revigore.",
      imagePrompt:
        "peaceful lake surface light raid healing magical water rain",
      effects: [{ type: "heal", value: 20 }],
      choices: [], // Force map
    },

    peche_lac: {
      id: "peche_lac",
      title: "Pêche Tranquille",
      mapLocation: "lac_brume",
      text: "Vous prenez un moment pour pêcher. Vous attrapez un poisson aux écailles dorées qui vous rend des forces.",
      imagePrompt: "fishing wooden rod calm misty lake golden fish fantasy rpg",
      effects: [{ type: "heal", value: 15 }],
      choices: [],
    },

    // ─── VILLAGE ABANDONNÉ (Avec quête Poupée complétée) ──
    village_maudit_scene: {
      id: "village_maudit_scene",
      title: "Le Village Silencieux",
      mapLocation: "village_maudit",
      imagePrompt:
        "abandoned medieval village dark spooky fog night ruined houses",
      text: "Des maisons aux toits effondrés bordent une rue envahie par les herbes folles. Le silence est total, brisé seulement par le craquement du bois pourri.\n\nVous remarquez une petite maison encore intacte avec une lumière à la fenêtre.",
      choices: [
        {
          text: "🏠 Entrer dans la maison intacte",
          nextScene: "maison_intacte",
        },
        {
          text: "💀 Fouiller les ruines des alentours",
          nextScene: "fouille_village",
        },
      ],
    },

    maison_intacte: {
      id: "maison_intacte",
      title: "La Maison de la Poupée",
      mapLocation: "village_maudit",
      text: "À l'intérieur, le temps semble s'être arrêté. Sur une table poussiéreuse, vous trouvez le journal d'une petite fille qui parle de sa **Poupée de Chiffon** perdue près de la Tour de Guet.\n\n*\"Si seulement je retrouvais Lili...\"*",
      imagePrompt:
        "dusty abandonned house interior child bedroom rag doll old journal sunbeam windows",
      effects: [{ type: "set_flag", flag: "quete_poupee" }],
      choices: [
        {
          text: "🧸 Rendre la Poupée de Chiffon à l'esprit",
          nextScene: "recompense_poupee",
          condition: { type: "has_item", itemId: "poupee_perdue" },
        },
        {
          text: "Sortir",
          nextScene: "village_maudit_scene",
        },
      ],
    },

    recompense_poupee: {
      id: "recompense_poupee",
      title: "Lili est de retour",
      mapLocation: "village_maudit",
      imagePrompt: "ghost child happy holding doll glowing light fantasy",
      text: "Vous déposez la poupée près du journal. Une brise légère traverse la pièce et vous entendez un rire d'enfant.\n\nSur la table apparaît un **Orbe de Purification** scintillant. L'atmosphère de la maison devient soudain apaisante.",
      effects: [
        { type: "remove_item", itemId: "poupee_perdue" },
        { type: "add_item", itemId: "artefact_purif" },
        { type: "add_xp", value: 60 },
      ],
      choices: [
        {
          text: "Sortir",
          nextScene: "village_maudit_scene",
        },
      ],
    },

    fouille_village: {
      id: "fouille_village",
      title: "Mauvaise Rencontre",
      mapLocation: "village_maudit",
      text: "En fouillant les décombres, vous dérangez un groupe de rats géants !",
      imagePrompt: "giant rats aggressive eyes glowing dark ruins rubble scary",
      combat: {
        enemyName: "Horde de Rats",
        enemyIcon: "🐀",
        enemyHp: 45,
        enemyAttack: 14,
        enemyDefense: 4,
        victoryScene: "victoire_rats",
        defeatScene: "defaite_generique",
        xpReward: 15,
      },
      choices: [],
    },

    victoire_rats: {
      id: "victoire_rats",
      title: "Village Nettoyé",
      mapLocation: "village_maudit",
      text: "Les rats sont dispersés. Vous trouvez quelques pièces d'or dans leur nid.",
      imagePrompt:
        "scattered rats running away ruins gold coins on ground fantasy",
      effects: [{ type: "add_xp", value: 10 }],
      choices: [],
    },

    // ─── CAVERNE DE CRISTAL ───────────────────
    caverne_cristal_scene: {
      id: "caverne_cristal_scene",
      title: "La Caverne Scintillante",
      mapLocation: "caverne_cristal",
      imagePrompt:
        "crystal cave purple blue glowing minerals underground fantasy",
      text: "Les murs de cette grotte sont tapissés de cristaux pulsant d'une lumière violette. L'air est chargé d'électricité statique.\n\nC'est un lieu de puissance brute.",
      choices: [
        {
          text: "⛏️ Récolter un cristal",
          nextScene: "recolte_cristal",
        },
        {
          text: "🧘 Méditer pour recharger sa mana",
          nextScene: "meditation_cristal",
        },
      ],
    },

    recolte_cristal: {
      id: "recolte_cristal",
      title: "Cristal d'Énergie",
      mapLocation: "caverne_cristal",
      text: "Vous parvenez à détacher un magnifique **Cristal Bleu**. Il vibre dans votre main.",
      imagePrompt:
        "hand holding glowing blue crystal cave background magic energy",
      effects: [
        { type: "add_item", itemId: "cristal_bleu" },
        { type: "add_xp", value: 20 },
      ],
      condition: { type: "luck_check", value: 4 },
      choices: [],
    },

    meditation_cristal: {
      id: "meditation_cristal",
      title: "Harmonie Magique",
      mapLocation: "caverne_cristal",
      text: "Vous vous asseyez et laissez l'énergie de la caverne vous envahir. Votre mana est restaurée.",
      imagePrompt:
        "mage meditating crystal cave glowing purple aura peace serenity",
      effects: [{ type: "heal_mana", value: 40 }],
      choices: [],
    },

    // ─── TOUR DE GUET ──────────────────────────
    tour_guet_scene: {
      id: "tour_guet_scene",
      title: "La Tour de Guet",
      mapLocation: "tour_guet",
      imagePrompt: "old stone watchtower hill dark forest night goblins",
      text: "Une vieille tour de pierre surplombe la région Est. C'est un point stratégique, actuellement occupé par des gobelins éclaireurs.\n\nVous apercevez quelque chose de coloré abandonné dans les hautes herbes au pied de la tour.",
      choices: [
        {
          text: "⚔️ Attaquer la patrouille gobelin",
          nextScene: "combat_patrouille",
        },
        {
          text: "🧸 Chercher discrètement dans les herbes",
          nextScene: "cherche_herbes",
          condition: { type: "has_flag", flag: "quete_poupee" },
        },
      ],
    },

    combat_patrouille: {
      id: "combat_patrouille",
      title: "Embuscade !",
      mapLocation: "tour_guet",
      text: "Les gobelins vous ont vu ! Aux armes !",
      imagePrompt: "goblins attacking weapons drawn angry fantasy art action",
      combat: {
        enemyName: "Patrouille Gobeline",
        enemyIcon: "👺",
        enemyHp: 65,
        enemyAttack: 16,
        enemyDefense: 7,
        victoryScene: "victoire_patrouille",
        defeatScene: "defaite_generique",
        xpReward: 30,
      },
      choices: [],
    },

    victoire_patrouille: {
      id: "victoire_patrouille",
      title: "Tour Sécurisée",
      mapLocation: "tour_guet",
      text: "La tour est libre. Du sommet, vous avez une vue imprenable sur le Donjon Noir au nord. Il semble entouré d'une barrière magique.",
      imagePrompt:
        "view from high stone tower forest horizon dark castle in distance magic barrier",
      effects: [{ type: "add_xp", value: 20 }],
      choices: [],
    },

    cherche_herbes: {
      id: "cherche_herbes",
      title: "La Poupée Retrouvée",
      mapLocation: "tour_guet",
      text: "Entre les ronces, vous trouvez la **Poupée de Chiffon** ! Elle est un peu sale mais intacte.\n\nL'esprit de la petite fille sera apaisé si vous la ramenez.",
      imagePrompt: "rag toy doll lying in tall grass brambles flowers",
      effects: [
        { type: "add_item", itemId: "poupee_perdue" },
        { type: "add_xp", value: 40 },
      ],
      choices: [
        {
          text: "Se retourner",
          nextScene: "combat_patrouille",
        },
      ],
    },

    // ─── ANCIENS LIEUX (Standardisation MapLocation) ────

    sentier_champignons: {
      id: "sentier_champignons",
      title: "La Clairière aux Champignons",
      mapLocation: "clairiere",
      imagePrompt:
        "magical forest path covered in glowing blue mushrooms night",
      text: `Vous êtes dans une clairière baignée de lumière de lune, tapissée de champignons bioluminescents.\n\nUn vieux puits de pierre trône au centre. À côté, le renard Kael vous observe.`,
      image:
        "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjk4NzhiMjhjOWEwODE5MWEyOWU5M2JiYWU5YWQyMmI6ZmlsZV8wMDAwMDAwMGRiYzQ3MjQ2YmU1ZGIxNWQzNmE1ZjA2MiIsInRzIjoiMjA0OTEiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6IjdjM2JjOTAxZTQ0NDYxM2FhZTgzNzU2OTdkZTQ1OWMzMWM4MDc2OWM4Nzk5MGIzOWMwZmRhNDY0MDY1YzMzZWMiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ==?w=800&h=400&fit=crop",
      imageAlt: "Clairière mystique éclairée par la lune",
      effects: [
        { type: "add_xp", value: 15 },
        { type: "set_flag", flag: "visite_clairiere" },
      ],
      choices: [
        {
          text: "🕳️ Descendre dans le puits",
          nextScene: "puits_profondeur",
          condition: { type: "not_has_flag", flag: "recu_epee_flamme" },
        },
        {
          text: "🦊 Parler avec le renard",
          nextScene: "dialogue_renard",
          condition: {
            type: "not_has_flag",
            flag: "connait_faiblesse_chevalier",
          },
        },
        {
          text: "💧 Examiner l'eau du puits",
          nextScene: "eau_puits",
          condition: { type: "not_has_flag", flag: "vision_donjon" },
        },
      ],
    },

    sentier_bruits: {
      id: "sentier_bruits",
      title: "Le Sentier des Murmures",
      mapLocation: "sentier_sombre",
      text: `Le sentier est oppressant. Les branches ressemblent à des griffes.\n\nVous trouvez un gobelin blessé, adossé à un arbre.`,
      image:
        "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjk4NzhjYjliZGNjODE5MTgxZWE5NmQ0ZTZkYjIyNzY6ZmlsZV8wMDAwMDAwMDMyOTA3MjQ2OGYwMDQyZTA4Njk2MmRkMyIsInRzIjoiMjA0OTEiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6IjQwMjI1MWRiNDViYjVkMDk2OGM1NTZmZGI0OTkxNDJhMTA1YzViM2E5NWNkZjY1NmNlZDQ3ZTdjNTIxYmEzOTUiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ==",
      imageAlt: "Sentier sombre et oppressant",
      effects: [
        { type: "add_item", itemId: "cle_donjon" },
        { type: "add_xp", value: 20 },
        { type: "set_flag", flag: "visite_sentier" },
      ],
      choices: [
        {
          text: "🩹 Soigner le gobelin",
          nextScene: "soigner_gobelin",
          condition: { type: "not_has_flag", flag: "allie_grik" },
        },
        {
          text: "⚔️ Rester sur ses gardes",
          nextScene: "combat_ombre",
          condition: { type: "not_has_flag", flag: "recu_eclair" },
        },
      ],
    },

    panneau_secret: {
      id: "panneau_secret",
      title: "L'Inscription Cachée",
      mapLocation: "entree",
      imagePrompt: "magical glowing golden runes on ancient stone text closeup",
      text: `Les runes brillent d'une lueur dorée.\n\n*"Celui qui voit au-delà des apparences mérite le don de la flamme."*\n\nVous apprenez le sort de **Boule de Feu** !`,
      image:
        "https://chatgpt.com/backend-api/estuary/content?id=file_00000000bb587246a0b545766206768f&ts=491803&p=fs&cid=1&sig=c8e851cd922e42c88c820e4dac6fb5d273700044fcfcb0b9eb4c9767f93f7382&v=0",
      imageAlt: "Runes magiques brillantes",
      effects: [
        { type: "add_spell", spellId: "boule_feu" },
        { type: "add_item", itemId: "amulette_loup" },
        { type: "stat_boost", target: "magic", value: 5 },
        { type: "add_xp", value: 30 },
        { type: "set_flag", flag: "recu_panneau_secret" },
      ],
      choices: [],
    },

    dialogue_renard: {
      id: "dialogue_renard",
      title: "Le Renard Sage",
      mapLocation: "clairiere",
      text: `Kael le renard explique qu'il est l'ancien gardien.\n\n*"Le chevalier noir craint la lumière pure. Cherchez la Gemme Solaire dans les ruines."*`,
      image:
        "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjk4NzhiMjhjOWEwODE5MWEyOWU5M2JiYWU5YWQyMmI6ZmlsZV8wMDAwMDAwMGRiYzQ3MjQ2YmU1ZGIxNWQzNmE1ZjA2MiIsInRzIjoiMjA0OTEiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6IjdjM2JjOTAxZTQ0NDYxM2FhZTgzNzU2OTdkZTQ1OWMzMWM4MDc2OWM4Nzk5MGIzOWMwZmRhNDY0MDY1YzMzZWMiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ==?w=800&h=400&fit=crop",
      imageAlt: "Renard mystérieux aux yeux dorés",
      effects: [
        { type: "add_spell", spellId: "guerison" },
        { type: "set_flag", flag: "connait_faiblesse_chevalier" },
        { type: "add_xp", value: 25 },
      ],
      choices: [
        {
          text: "🕳️ Descendre dans le puits",
          nextScene: "puits_profondeur",
        },
      ],
    },

    eau_puits: {
      id: "eau_puits",
      title: "L'Eau Mystérieuse",
      mapLocation: "clairiere",
      text: `L'eau bouillonne et une main spectrale vous offre une potion.`,
      image:
        "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjk4NzhkZTdjNTg4ODE5MWJiYWY1OGRmNGVlMDA1MTk6ZmlsZV8wMDAwMDAwMDQwZjA3MjQ2ODk2YzI3YzZmNWMyNjhlOCIsInRzIjoiMjA0OTEiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6ImY0YmRiMjY0MzNlMjcwMTJmNDgwZWQyOWJmZmQ1MWUyNTEwYWVhNzQ5MDhjNWU4ZTdjM2NjMTE0ZGYxZmFiMzEiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ==",
      imageAlt: "Puits ancien et mystérieux",
      effects: [
        { type: "add_item", itemId: "potion_soin" },
        { type: "set_flag", flag: "vision_donjon" },
        { type: "add_xp", value: 20 },
      ],
      choices: [],
    },

    puits_profondeur: {
      id: "puits_profondeur",
      title: "Les Profondeurs du Puits",
      mapLocation: "clairiere",
      text: `Une araignée géante garde un coffre au fond de la grotte !`,
      image: "images/foret/puits_profondeur.jpg",
      imageAlt: "Grotte souterraine avec des cristaux",
      combat: {
        enemyName: "Araignée Géante",
        enemyIcon: "🕷️",
        enemyHp: 110,
        enemyAttack: 22,
        enemyDefense: 8,
        enemySpells: [
          { name: "Toile Venimeuse", icon: "💢", damage: 20, chance: 0.3 },
        ],
        victoryScene: "victoire_araignee",
        defeatScene: "defaite_generique",
        xpReward: 50,
      },
      choices: [],
    },

    victoire_araignee: {
      id: "victoire_araignee",
      title: "Victoire sur l'Araignée",
      mapLocation: "clairiere",
      text: `Vous récupérez l'**Épée de Flamme** ! Un passage remonte vers la clairière.`,
      image: "images/foret/victoire_araignee.jpg",
      imageAlt: "Coffre au trésor ouvert",
      effects: [
        { type: "add_item", itemId: "epee_flamme" },
        { type: "stat_boost", target: "attack", value: 10 },
        { type: "set_flag", flag: "recu_epee_flamme" },
      ],
      choices: [],
    },

    soigner_gobelin: {
      id: "soigner_gobelin",
      title: "Un Allié Inattendu",
      mapLocation: "sentier_sombre",
      text: `Grik le gobelin vous remercie.\n\n*"Le chevalier noir cache un bouclier magique dans les ruines au centre de la forêt. Prenez ma potion."*`,
      image: "images/foret/soigner_gobelin.jpg",
      imageAlt: "Créature blessée dans la forêt",
      effects: [
        { type: "add_item", itemId: "potion_soin" },
        { type: "set_flag", flag: "allie_grik" },
        { type: "set_flag", flag: "connait_bouclier" },
        { type: "add_xp", value: 30 },
      ],
      choices: [],
    },

    combat_ombre: {
      id: "combat_ombre",
      title: "L'Ombre Attaque !",
      mapLocation: "sentier_sombre",
      imagePrompt:
        "shadow creature silhouette with glowing red eyes scary smoke",
      text: `Une Ombre surgit des ténèbres !`,
      image: "images/foret/combat_ombre.jpg",
      imageAlt: "Créature d'ombre menaçante",
      combat: {
        enemyName: "Ombre Errante",
        enemyIcon: "👤",
        enemyHp: 120,
        enemyAttack: 24,
        enemyDefense: 11,
        enemySpells: [
          { name: "Drain de Vie", icon: "💀", damage: 22, chance: 0.35 },
        ],
        victoryScene: "victoire_ombre",
        defeatScene: "defaite_generique",
        xpReward: 60,
      },
      choices: [],
    },

    victoire_ombre: {
      id: "victoire_ombre",
      title: "L'Ombre Dissipée",
      mapLocation: "sentier_sombre",
      text: `Vous absorbez l'énergie de l'ombre et apprenez le sort **Éclair** !`,
      image: "images/foret/combat_ombre.jpg",
      imageAlt: "Lumière perçant les ténèbres",
      effects: [
        { type: "add_spell", spellId: "eclair" },
        { type: "stat_boost", target: "magic", value: 5 },
        { type: "set_flag", flag: "recu_eclair" },
      ],
      choices: [],
    },

    ruines_nord: {
      id: "ruines_nord",
      title: "Les Ruines du Temple",
      mapLocation: "ruines",
      imagePrompt:
        "ancient stone temple ruins in forest overgrown with vines sunlight golden",
      text: `Le temple en ruines abrite un autel où repose le **Bouclier Ancien**.\n\nC'est un lieu calme au centre de la forêt.`,
      image: "images/foret/ruines_nord.jpg",
      imageAlt: "Ruines d'un temple ancien",
      effects: [
        { type: "add_item", itemId: "bouclier_ancien" },
        { type: "stat_boost", target: "defense", value: 8 },
        { type: "add_xp", value: 25 },
        { type: "set_flag", flag: "recu_bouclier" },
      ],
      choices: [
        {
          text: "🔍 Explorer la bibliothèque souterraine",
          nextScene: "exploration_ruines",
          condition: { type: "not_has_flag", flag: "connait_histoire_aldric" },
        },
      ],
    },

    exploration_ruines: {
      id: "exploration_ruines",
      title: "Les Secrets des Ruines",
      mapLocation: "ruines",
      text: `Les livres révèlent que Sir Aldric peut être sauvé en détruisant la Gemme. Vous trouvez aussi un sort de **Guérison**.`,
      imagePrompt:
        "ancient library underground stone shelves old books magical light",
      imageAlt: "Bibliothèque ancienne",
      effects: [
        { type: "add_spell", spellId: "guerison" },
        { type: "add_item", itemId: "potion_soin" },
        { type: "set_flag", flag: "connait_histoire_aldric" },
        { type: "add_xp", value: 35 },
      ],
      choices: [],
    },

    approche_donjon: {
      id: "approche_donjon",
      title: "Le Donjon Noir",
      mapLocation: "donjon",
      imagePrompt: "ominous dark black castle tower with green lightning storm",
      text: `Le repaire final. Le Chevalier Noir est ici.\n\nComment voulez-vous entrer ?`,
      image: "images/foret/creature-combat.jpg",
      imageAlt: "Donjon sombre et menaçant",
      choices: [
        {
          text: "🗝️ Porte principale (avec Clé)",
          nextScene: "entree_principale_donjon",
          condition: { type: "has_item", itemId: "cle_donjon" },
        },
        {
          text: "🧗 Grimper à la fenêtre",
          nextScene: "fenetre_donjon",
        },
        {
          text: "🌿 Entrée de service",
          nextScene: "entree_service_donjon",
        },
      ],
    },

    entree_principale_donjon: {
      id: "entree_principale_donjon",
      title: "Le Hall du Donjon",
      mapLocation: "donjon",
      text: `Vous entrez par la grande porte.`,
      imagePrompt:
        "dark fantasy dungeon entrance grand hall torches green lighting",
      imageAlt: "Hall de donjon avec des torches",
      effects: [{ type: "add_xp", value: 20 }],
      choices: [
        {
          text: "⚔️ Monter au trône",
          nextScene: "salle_trone",
        },
        {
          text: "🔍 Fouiller le hall",
          nextScene: "fouille_hall",
        },
      ],
    },

    fenetre_donjon: {
      id: "fenetre_donjon",
      title: "L'Armurerie",
      mapLocation: "donjon",
      text: `Vous entrez par la fenêtre et vous coupez sur du verre (10 Dégâts).`,
      image: "images/foret/labyrinthe-pierre.jpg",
      imageAlt: "Armurerie médiévale",
      effects: [
        { type: "damage", value: 10 },
        { type: "add_xp", value: 15 },
      ],
      choices: [
        {
          text: "⚔️ Monter au trône",
          nextScene: "salle_trone",
        },
      ],
    },

    entree_service_donjon: {
      id: "entree_service_donjon",
      mapLocation: "donjon",
      title: "Les Cuisines",
      text: `Par les cuisines, vous trouvez une potion oubliée.`,
      image: "images/foret/clairiere-magique.jpg",
      imageAlt: "Cuisines médiévales abandonnées",
      effects: [
        { type: "add_item", itemId: "potion_soin_faible" },
        { type: "add_xp", value: 10 },
      ],
      choices: [
        {
          text: "⚔️ Monter au trône",
          nextScene: "salle_trone",
        },
      ],
    },

    fouille_hall: {
      id: "fouille_hall",
      title: "La Gemme Cachée",
      mapLocation: "donjon",
      text: `Vous trouvez la **Gemme du Dragon** cachée derrière une tapisserie !`,
      imagePrompt:
        "hidden treasure room with glowing gem ancient dungeon fantasy",
      imageAlt: "Salle au trésor secrète",
      effects: [
        { type: "add_item", itemId: "gemme_dragon" },
        { type: "set_flag", flag: "possede_gemme" },
        { type: "add_xp", value: 40 },
      ],
      choices: [
        {
          text: "⚔️ Monter au trône",
          nextScene: "salle_trone",
        },
      ],
    },

    salle_trone: {
      id: "salle_trone",
      title: "Face au Chevalier Noir",
      mapLocation: "donjon",
      text: `*"Cette forêt est à moi !"* hurle le Chevalier Noir.\n\nIl est temps d'en finir.`,
      image: "images/foret/chevalier_noir.png",
      imageAlt: "Salle du trône sombre et imposante",
      choices: [
        {
          text: "💎 Utiliser la Gemme",
          nextScene: "combat_chevalier_affaibli",
          condition: { type: "has_item", itemId: "gemme_dragon" },
        },
        {
          text: "💡 Exploiter sa faiblesse (Lumière)",
          nextScene: "combat_chevalier_affaibli",
          condition: { type: "has_flag", flag: "connait_faiblesse_chevalier" },
        },
        {
          text: "🗣️ Parler de son passé",
          nextScene: "dialogue_chevalier",
          condition: { type: "has_flag", flag: "connait_histoire_aldric" },
        },
        {
          text: "⚔️ Attaquer !",
          nextScene: "combat_chevalier_fort",
        },
      ],
    },

    dialogue_chevalier: {
      id: "dialogue_chevalier",
      title: "La Conscience d'Aldric",
      mapLocation: "donjon",
      text: `Vos mots touchent l'homme sous l'armure. Il hésite.`,
      image: "images/foret/chevalier_noir.png",
      effects: [{ type: "add_xp", value: 50 }],
      choices: [
        {
          text: "💎 Le sauver avec la Gemme",
          nextScene: "fin_redemption",
          condition: { type: "has_item", itemId: "gemme_dragon" },
        },
        {
          text: "⚔️ Profiter de son hésitation pour frapper",
          nextScene: "combat_chevalier_affaibli",
        },
      ],
    },

    combat_chevalier_affaibli: {
      id: "combat_chevalier_affaibli",
      title: "Combat Final (Avantage)",
      mapLocation: "donjon",
      text: `Le Chevalier est affaibli. Frappez maintenant !`,
      image: "images/foret/chevalier_noir.png",
      imageAlt: "Chevalier noir affaibli",
      combat: {
        enemyName: "Chevalier Déchu",
        enemyIcon: "🖤",
        enemyHp: 160,
        enemyAttack: 26,
        enemyDefense: 15,
        enemySpells: [
          { name: "Lame Maudite", icon: "⚔️", damage: 26, chance: 0.35 },
        ],
        victoryScene: "fin_victoire_combat",
        defeatScene: "defaite_generique",
        xpReward: 120,
      },
      choices: [],
    },

    combat_chevalier_fort: {
      id: "combat_chevalier_fort",
      title: "Combat Final (Difficile)",
      mapLocation: "donjon",
      text: `Le Chevalier Noir est au sommet de sa puissance !`,
      image: "images/foret/chevalier_noir.png",
      imageAlt: "Combat épique contre le chevalier noir",
      combat: {
        enemyName: "Chevalier Noir",
        enemyIcon: "⚫",
        enemyHp: 250,
        enemyAttack: 35,
        enemyDefense: 20,
        enemySpells: [
          { name: "Lame Maudite", icon: "⚔️", damage: 32, chance: 0.35 },
          { name: "Aura Ténébreuse", icon: "🌑", damage: 25, chance: 0.25 },
        ],
        victoryScene: "fin_victoire_combat",
        defeatScene: "defaite_generique",
        xpReward: 200,
      },
      choices: [],
    },

    fin_redemption: {
      id: "fin_redemption",
      title: "✨ Victoire : Rédemption",
      mapLocation: "donjon",
      imagePrompt:
        "divine golden light breaking darkness redemption knight kneeling",
      text: `Sir Aldric est libéré. La forêt est purifiée.\n\nVous êtes un véritable héros.\n\n🏆 **FIN DE LA LÉGENDE** 🏆`,
      image: "images/foret/redemption.png",
      imageAlt: "Lumière dorée dissipant les ténèbres",
      effects: [
        { type: "add_item", itemId: "couronne_roi" },
        { type: "add_xp", value: 200 },
      ],
      isEnding: true,
      endingType: "victory",
      choices: [],
    },

    fin_victoire_combat: {
      id: "fin_victoire_combat",
      title: "⚔️ Victoire : Conquête",
      mapLocation: "donjon",
      text: `Le Chevalier Noir gît à terre. Le mal est vaincu par la force.\n\nVous êtes le nouveau maître de la forêt.\n\n⚔️ **FIN DU GUERRIER** ⚔️`,
      image: "images/foret/chevalier_noir.png",
      imageAlt: "Victoire triomphale",
      effects: [{ type: "add_xp", value: 150 }],
      isEnding: true,
      endingType: "victory",
      choices: [],
    },

    defaite_generique: {
      id: "defaite_generique",
      title: "💀 Game Over",
      mapLocation: "entree",
      text: `Votre aventure s'arrête ici.`,
      imagePrompt: "dead corpse adventurer lies in dark forest",
      imageAlt: "Ténèbres envahissantes",
      isEnding: true,
      endingType: "defeat",
      choices: [],
    },
  },
};
