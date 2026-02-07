import type { Adventure } from "@/types";

export const foretSombre: Adventure = {
  id: "foret-sombre",
  title: "La Forêt des Ombres",
  subtitle: "Une quête médiévale-fantastique",
  description:
    "Vous êtes un jeune aventurier au seuil de la Forêt des Ombres, un lieu maudit où nul n'est revenu depuis des décennies. On dit qu'un dragon ancien y garde un trésor légendaire... mais aussi que des forces obscures rôdent entre les arbres millénaires.",
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
    hp: 120,
    maxHp: 120,
    mana: 40,
    maxMana: 40,
    attack: 12,
    defense: 8,
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
  },
  startScene: "entree_foret",
  scenes: {
    // ─── ACTE 1 : L'Entrée ─────────────────────
    entree_foret: {
      id: "entree_foret",
      title: "L'Orée de la Forêt des Ombres",
      text: `Les derniers rayons du soleil filtrent à travers les branches noueuses tandis que vous contemplez l'entrée de la Forêt des Ombres. L'air est lourd, chargé d'une brume verdâtre qui rampe entre les racines tordues.\n\nUn panneau à moitié rongé par le temps porte une inscription à peine lisible : *"Nul n'entre ici sans y laisser une part de son âme."*\n\nVotre main se crispe sur la poignée de votre épée rouillée. Devant vous, deux sentiers se dessinent dans l'obscurité naissante.`,
      image: "images/foret/sentier-foret.jpg",
      imageAlt: "Forêt sombre et brumeuse",
      choices: [
        {
          text: "🌿 Emprunter le sentier de gauche, bordé de champignons luminescents",
          nextScene: "sentier_champignons",
        },
        {
          text: "🦇 Prendre le sentier de droite, d'où proviennent d'étranges bruits",
          nextScene: "sentier_bruits",
        },
        {
          text: "🔍 Examiner le panneau de plus près",
          nextScene: "panneau_secret",
        },
      ],
    },

    sentier_champignons: {
      id: "sentier_champignons",
      title: "Le Sentier Luminescent",
      text: `Les champignons émettent une douce lumière bleutée qui guide vos pas. Le sentier serpente entre des arbres centenaires dont les troncs sont couverts de mousse phosphorescente.\n\nAprès quelques minutes de marche, vous découvrez une clairière baignée de lumière de lune. En son centre, un vieux puits de pierre est couronné d'un lierre argenté. À côté, un petit renard vous observe avec des yeux qui semblent... intelligents.\n\n*"Voyageur,"* murmure le renard — car oui, il parle — *"le puits mène aux profondeurs où se cache ce que vous cherchez. Mais gare à vous : l'eau n'est pas ce qu'elle semble être."*`,
      image:
        "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjk4NzhiMjhjOWEwODE5MWEyOWU5M2JiYWU5YWQyMmI6ZmlsZV8wMDAwMDAwMGRiYzQ3MjQ2YmU1ZGIxNWQzNmE1ZjA2MiIsInRzIjoiMjA0OTEiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6IjdjM2JjOTAxZTQ0NDYxM2FhZTgzNzU2OTdkZTQ1OWMzMWM4MDc2OWM4Nzk5MGIzOWMwZmRhNDY0MDY1YzMzZWMiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ==?w=800&h=400&fit=crop",
      imageAlt: "Clairière mystique éclairée par la lune",
      effects: [{ type: "add_xp", value: 15 }],
      choices: [
        {
          text: "🕳️ Descendre dans le puits",
          nextScene: "puits_profondeur",
        },
        {
          text: "🦊 Parler avec le renard",
          nextScene: "dialogue_renard",
        },
        {
          text: "💧 Examiner l'eau du puits prudemment",
          nextScene: "eau_puits",
        },
      ],
    },

    sentier_bruits: {
      id: "sentier_bruits",
      title: "Le Sentier des Murmures",
      text: `Votre courage vous guide vers les sons inquiétants. Le sentier se rétrécit rapidement et les branches au-dessus de votre tête forment un tunnel naturel oppressant.\n\nSoudain, vous tombez nez à nez avec un gobelin blessé, adossé à un arbre. Il vous regarde avec des yeux emplis de terreur — pas de vous, mais de quelque chose derrière lui.\n\n*"L'Ombre... elle arrive..."* halète-t-il. *"Le chevalier noir... il a pris le donjon... Tenez..."*\n\nIl vous tend une clé en fer forgé avant de s'évanouir.`,
      image:
        "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjk4NzhjYjliZGNjODE5MTgxZWE5NmQ0ZTZkYjIyNzY6ZmlsZV8wMDAwMDAwMDMyOTA3MjQ2OGYwMDQyZTA4Njk2MmRkMyIsInRzIjoiMjA0OTEiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6IjQwMjI1MWRiNDViYjVkMDk2OGM1NTZmZGI0OTkxNDJhMTA1YzViM2E5NWNkZjY1NmNlZDQ3ZTdjNTIxYmEzOTUiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ==",
      imageAlt: "Sentier sombre et oppressant",
      effects: [
        { type: "add_item", itemId: "cle_donjon" },
        { type: "add_xp", value: 20 },
      ],
      choices: [
        {
          text: "🩹 Tenter de soigner le gobelin",
          nextScene: "soigner_gobelin",
        },
        {
          text: "🏃 Fuir avant que l'Ombre n'arrive",
          nextScene: "fuite_ombre",
        },
        {
          text: "⚔️ Se préparer au combat",
          nextScene: "combat_ombre",
        },
      ],
    },

    panneau_secret: {
      id: "panneau_secret",
      title: "L'Inscription Cachée",
      text: `En vous penchant sur le panneau, vous remarquez des runes gravées sous la couche de mousse. Vous les grattez délicatement et une lueur dorée émane des symboles.\n\nUne voix résonne dans votre esprit : *"Celui qui voit au-delà des apparences mérite le don de la flamme."*\n\nUne chaleur agréable envahit vos mains. Vous venez d'apprendre le sort de **Boule de Feu** ! De plus, une amulette en forme de loup se matérialise à vos pieds.`,
      image:
        "https://chatgpt.com/backend-api/estuary/content?id=file_00000000bb587246a0b545766206768f&ts=491803&p=fs&cid=1&sig=c8e851cd922e42c88c820e4dac6fb5d273700044fcfcb0b9eb4c9767f93f7382&v=0",
      imageAlt: "Runes magiques brillantes",
      effects: [
        { type: "add_spell", spellId: "boule_feu" },
        { type: "add_item", itemId: "amulette_loup" },
        { type: "stat_boost", target: "magic", value: 5 },
        { type: "add_xp", value: 30 },
      ],
      choices: [
        {
          text: "🌿 Emprunter le sentier de gauche",
          nextScene: "sentier_champignons",
        },
        {
          text: "🦇 Prendre le sentier de droite",
          nextScene: "sentier_bruits",
        },
      ],
    },

    // ─── Branche Renard / Puits ────────────────
    dialogue_renard: {
      id: "dialogue_renard",
      title: "Le Renard Sage",
      text: `Le renard penche la tête et ses yeux dorés brillent dans la pénombre.\n\n*"Je suis Kael, gardien de cette clairière depuis trois cents ans. Autrefois, j'étais un mage... avant que la malédiction ne frappe cette forêt."*\n\nIl agite sa queue et un grimoire apparaît dans un tourbillon de feuilles.\n\n*"Prenez ceci. Le sort de Guérison vous sera utile. Et sachez que le chevalier noir qui hante le donjon a un point faible : il craint la lumière pure. Cherchez la Gemme Solaire dans les ruines au nord."*`,
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
          text: "🏚️ Se diriger vers les ruines au nord",
          nextScene: "ruines_nord",
        },
        {
          text: "🕳️ Descendre dans le puits malgré tout",
          nextScene: "puits_profondeur",
        },
      ],
    },

    eau_puits: {
      id: "eau_puits",
      title: "L'Eau Mystérieuse",
      text: `Vous vous penchez prudemment au-dessus du puits. L'eau est d'un noir d'encre, mais quand vous y plongez le regard, des images apparaissent à la surface : un donjon en flammes, un chevalier en armure noire, et... une couronne d'or.\n\nL'eau se met à bouillonner et une main spectrale en jaillit, tenant une fiole remplie d'un liquide doré. La main dépose la fiole sur la margelle puis disparaît.`,
      image:
        "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjk4NzhkZTdjNTg4ODE5MWJiYWY1OGRmNGVlMDA1MTk6ZmlsZV8wMDAwMDAwMDQwZjA3MjQ2ODk2YzI3YzZmNWMyNjhlOCIsInRzIjoiMjA0OTEiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6ImY0YmRiMjY0MzNlMjcwMTJmNDgwZWQyOWJmZmQ1MWUyNTEwYWVhNzQ5MDhjNWU4ZTdjM2NjMTE0ZGYxZmFiMzEiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ==",
      imageAlt: "Puits ancien et mystérieux",
      effects: [
        { type: "add_item", itemId: "potion_soin" },
        { type: "set_flag", flag: "vision_donjon" },
        { type: "add_xp", value: 20 },
      ],
      choices: [
        {
          text: "🦊 Demander conseil au renard",
          nextScene: "dialogue_renard",
        },
        {
          text: "🏚️ Suivre la vision — aller vers le donjon",
          nextScene: "approche_donjon",
        },
      ],
    },

    puits_profondeur: {
      id: "puits_profondeur",
      title: "Les Profondeurs du Puits",
      text: `Vous descendez prudemment en utilisant les pierres comme prises. L'obscurité vous engloutit.Au fond, un tunnel creusé à même la roche mène à une grotte souterraine éclairée par des cristaux.\n\nDevant vous, un coffre ancien est gardé par une araignée géante, ses huit yeux rougeoyants fixés sur vous !`,
      image: "images/foret/puits_profondeur.jpg",
      imageAlt: "Grotte souterraine avec des cristaux",
      combat: {
        enemyName: "Araignée Géante",
        enemyIcon: "🕷️",
        enemyHp: 80,
        enemyAttack: 18,
        enemyDefense: 6,
        enemySpells: [
          { name: "Toile Venimeuse", icon: "💢", damage: 15, chance: 0.25 },
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
      text: `L'araignée géante s'effondre dans un nuage de poussière. Vous ouvrez le coffre ancien et découvrez une magnifique **Épée de Flamme** dont la lame danse de reflets orangés !\n\nVotre puissance augmente considérablement. Un passage secret s'ouvre dans le mur de la grotte, menant vers la surface.`,
      image: "images/foret/victoire_araignee.jpg",
      imageAlt: "Coffre au trésor ouvert",
      effects: [
        { type: "add_item", itemId: "epee_flamme" },
        { type: "stat_boost", target: "attack", value: 10 },
      ],
      choices: [
        {
          text: "🏚️ Suivre le passage vers les ruines",
          nextScene: "ruines_nord",
        },
        {
          text: "🏰 Se diriger directement vers le donjon",
          nextScene: "approche_donjon",
        },
      ],
    },

    // ─── Branche Gobelin / Ombre ───────────────
    soigner_gobelin: {
      id: "soigner_gobelin",
      title: "Un Allié Inattendu",
      text: `Vous utilisez un morceau de votre cape pour bander les blessures du gobelin. Ses yeux s'ouvrent lentement.\n\n*"Merci, humain... Je suis Grik. Le chevalier noir a détruit mon village. Mais j'ai vu quelque chose : il cache un bouclier magique dans les ruines au nord. Ce bouclier pourrait vous protéger contre ses attaques."*\n\nGrik vous tend un plan rudimentaire griffonné sur de l'écorce.\n\n*"Et prenez ça..."* Il sort une potion d'un vert lumineux de sa sacoche.`,
      image: "images/foret/soigner_gobelin.jpg",
      imageAlt: "Créature blessée dans la forêt",
      effects: [
        { type: "add_item", itemId: "potion_soin" },
        { type: "set_flag", flag: "allie_grik" },
        { type: "set_flag", flag: "connait_bouclier" },
        { type: "add_xp", value: 30 },
      ],
      choices: [
        {
          text: "🏚️ Aller aux ruines chercher le bouclier",
          nextScene: "ruines_nord",
        },
        {
          text: "🏰 Foncer directement vers le donjon",
          nextScene: "approche_donjon",
        },
      ],
    },

    fuite_ombre: {
      id: "fuite_ombre",
      title: "Course dans les Ténèbres",
      text: `Vous courez à perdre haleine entre les arbres. Derrière vous, une silhouette d'ombre sans forme définie glisse silencieusement, gagnant du terrain.\n\nVotre cœur bat à tout rompre. Soudain, vous apercevez un pont de corde au-dessus d'un ravin. De l'autre côté : les ruines d'un ancien temple.`,
      image: "images/foret/fuite_ombre.jpg",
      imageAlt: "Pont de corde au-dessus d'un ravin",
      effects: [{ type: "damage", value: 15 }],
      choices: [
        {
          text: "🌉 Traverser le pont de corde",
          nextScene: "ruines_nord",
        },
        {
          text: "🗡️ Se retourner et affronter l'Ombre",
          nextScene: "combat_ombre",
        },
      ],
    },

    combat_ombre: {
      id: "combat_ombre",
      title: "L'Ombre Attaque !",
      text: `L'Ombre se matérialise devant vous — une silhouette humanoïde faite de ténèbres pures, avec des yeux qui brillent comme des braises.\n\nL'air se glace autour de vous. C'est le moment de se battre !`,
      image: "images/foret/combat_ombre.jpg",
      imageAlt: "Créature d'ombre menaçante",
      combat: {
        enemyName: "Ombre Errante",
        enemyIcon: "👤",
        enemyHp: 95,
        enemyAttack: 20,
        enemyDefense: 9,
        enemySpells: [
          { name: "Drain de Vie", icon: "💀", damage: 18, chance: 0.3 },
          { name: "Ombre Guérisseuse", icon: "🖤", healing: 20, chance: 0.15 },
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
      text: `L'Ombre se disloque en filaments de fumée noire qui se dispersent dans la brise. À l'endroit où elle se tenait, un fragment de cristal noir pulse faiblement.\n\nVous sentez que cette énergie pourrait être canaliser. Votre puissance magique augmente et vous apprenez le sort **Éclair** !`,
      image: "images/foret/combat_ombre.jpg",
      imageAlt: "Lumière perçant les ténèbres",
      effects: [
        { type: "add_spell", spellId: "eclair" },
        { type: "stat_boost", target: "magic", value: 5 },
      ],
      choices: [
        {
          text: "🏚️ Se diriger vers les ruines au nord",
          nextScene: "ruines_nord",
        },
        {
          text: "🏰 Aller directement au donjon",
          nextScene: "approche_donjon",
        },
      ],
    },

    // ─── ACTE 2 : Les Ruines ──────────────────
    ruines_nord: {
      id: "ruines_nord",
      title: "Les Ruines du Temple Oublié",
      text: `Les ruines d'un temple ancien se dressent devant vous, envahies par la végétation. Des colonnes brisées encadrent une entrée béante d'où émane une lumière dorée.\n\nÀ l'intérieur, vous découvrez une salle circulaire avec un autel au centre. Sur l'autel, un **Bouclier Ancien** orné de runes protectrices repose, attendant un digne porteur.\n\nUne inscription sur l'autel dit : *"Que celui qui porte ce bouclier soit protégé contre les ténèbres."*`,
      image: "images/foret/ruines_nord.jpg",
      imageAlt: "Ruines d'un temple ancien",
      effects: [
        { type: "add_item", itemId: "bouclier_ancien" },
        { type: "stat_boost", target: "defense", value: 8 },
        { type: "add_xp", value: 25 },
      ],
      choices: [
        {
          text: "🔍 Explorer le reste des ruines",
          nextScene: "exploration_ruines",
        },
        {
          text: "🏰 Partir vers le Donjon du Chevalier Noir",
          nextScene: "approche_donjon",
        },
      ],
    },

    exploration_ruines: {
      id: "exploration_ruines",
      title: "Les Secrets des Ruines",
      text: `En explorant les salles adjacentes, vous trouvez une bibliothèque souterraine dont les livres sont miraculeusement préservés. L'un d'eux raconte l'histoire du Chevalier Noir :\n\n*"Sir Aldric fut autrefois le plus noble des chevaliers du royaume. Mais la Gemme du Dragon l'a corrompu, transformant son cœur en ténèbres. Seule la destruction de la Gemme peut briser la malédiction."*\n\nVous apprenez le sort de **Guérison** en lisant un grimoire oublié. Dans un coffre caché, vous trouvez également une puissante grande potion de soin.`,
      image: "images/foret/bibliotheque.jpg",
      imageAlt: "Bibliothèque ancienne",
      effects: [
        { type: "add_spell", spellId: "guerison" },
        { type: "add_item", itemId: "potion_soin" },
        { type: "set_flag", flag: "connait_histoire_aldric" },
        { type: "add_xp", value: 35 },
      ],
      choices: [
        {
          text: "🏰 Se diriger vers le Donjon du Chevalier Noir",
          nextScene: "approche_donjon",
        },
      ],
    },

    // ─── ACTE 3 : Le Donjon ──────────────────
    approche_donjon: {
      id: "approche_donjon",
      title: "L'Approche du Donjon",
      text: `Le Donjon du Chevalier Noir se dresse devant vous comme un poing de pierre noire serré contre le ciel. Des éclairs verdâtres crépitent autour de ses tours.\n\nLa porte principale est verrouillée par un mécanisme ancien. Mais vous remarquez aussi une fenêtre brisée au premier étage, et une entrée de service partiellement cachée par des ronces.`,
      image: "images/foret/creature-combat.jpg",
      imageAlt: "Donjon sombre et menaçant",
      choices: [
        {
          text: "🗝️ Utiliser la Clé du Donjon sur la porte principale",
          nextScene: "entree_principale_donjon",
          condition: { type: "has_item", itemId: "cle_donjon" },
        },
        {
          text: "🧗 Grimper jusqu'à la fenêtre brisée",
          nextScene: "fenetre_donjon",
        },
        {
          text: "🌿 Se faufiler par l'entrée de service",
          nextScene: "entree_service_donjon",
        },
      ],
    },

    entree_principale_donjon: {
      id: "entree_principale_donjon",
      title: "Le Hall du Donjon",
      text: `La clé tourne avec un grincement sinistre. Les portes massives s'ouvrent sur un grand hall éclairé par des torches verdâtres. Des armures vides sont alignées le long des murs, comme des sentinelles silencieuses.\n\nAu fond du hall, un escalier en colimaçon monte vers la salle du trône. Vous entendez le cliquetis d'une armure au-dessus de vous.\n\nLe Chevalier Noir vous attend.`,
      image: "images/foret/village-medieval.jpg",
      imageAlt: "Hall de donjon avec des torches",
      effects: [{ type: "add_xp", value: 20 }],
      choices: [
        {
          text: "⚔️ Monter affronter le Chevalier Noir",
          nextScene: "salle_trone",
        },
        {
          text: "🔍 Fouiller le hall d'abord",
          nextScene: "fouille_hall",
        },
      ],
    },

    fenetre_donjon: {
      id: "fenetre_donjon",
      title: "Infiltration par la Fenêtre",
      text: `L'escalade est périlleuse mais vous parvenez à vous hisser jusqu'à la fenêtre. Vous atterrissez dans ce qui semble être une armurerie abandonnée.\n\nDes armes et armures rouillées couvrent les murs, mais une épée attire votre attention — elle luit d'une lumière intérieure froide.`,
      image: "images/foret/labyrinthe-pierre.jpg",
      imageAlt: "Armurerie médiévale",
      effects: [
        { type: "damage", value: 10 },
        { type: "add_xp", value: 15 },
      ],
      choices: [
        {
          text: "⚔️ Monter vers la salle du trône",
          nextScene: "salle_trone",
        },
      ],
    },

    entree_service_donjon: {
      id: "entree_service_donjon",
      title: "Les Cuisines Abandonnées",
      text: `Vous vous faufilez entre les ronces et découvrez les anciennes cuisines du donjon. L'odeur de moisi est étouffante. Des rats s'enfuient devant vos pas.\n\nDans un garde-manger oublié, vous trouvez une potion de soin miraculeusement préservée. Un escalier de service mène vers les étages supérieurs.`,
      image: "images/foret/clairiere-magique.jpg",
      imageAlt: "Cuisines médiévales abandonnées",
      effects: [
        { type: "add_item", itemId: "potion_soin_faible" },
        { type: "add_xp", value: 10 },
      ],
      choices: [
        {
          text: "⚔️ Monter vers la salle du trône",
          nextScene: "salle_trone",
        },
        {
          text: "🔍 Explorer les sous-sols",
          nextScene: "fouille_hall",
        },
      ],
    },

    fouille_hall: {
      id: "fouille_hall",
      title: "Trésors Cachés",
      text: `En fouillant minutieusement, vous découvrez un passage secret derrière une tapisserie déchirée. Il mène à une petite salle au trésor contenant des pièces d'or et... la **Gemme du Dragon** !\n\nLa gemme pulse d'une énergie sombre mais vous sentez que la détruire pourrait être la clé pour vaincre le Chevalier Noir.`,
      image: "images/foret/tour-sombre.jpg",
      imageAlt: "Salle au trésor secrète",
      effects: [
        { type: "add_item", itemId: "gemme_dragon" },
        { type: "set_flag", flag: "possede_gemme" },
        { type: "add_xp", value: 40 },
      ],
      choices: [
        {
          text: "⚔️ Monter affronter le Chevalier Noir",
          nextScene: "salle_trone",
        },
      ],
    },

    // ─── ACTE FINAL : Le Boss ─────────────────
    salle_trone: {
      id: "salle_trone",
      title: "La Salle du Trône",
      text: `La salle du trône est immense, baignée d'une lumière surnaturelle verte. Sur un trône de fer noir, le **Chevalier Noir** se lève lentement. Son armure d'ébène absorbe la lumière autour de lui.\n\n*"Un autre héros vient chercher la mort,"* gronde-t-il, sa voix résonnant comme un tonnerre lointain. *"Cette forêt m'appartient. Ce royaume m'appartient. Et bientôt, votre âme aussi."*\n\nIl dégaine une épée massive qui crépite d'énergie sombre.`,
      image: "images/foret/combat-sombre.jpg",
      imageAlt: "Salle du trône sombre et imposante",
      choices: [
        {
          text: "💎 Brandir la Gemme du Dragon pour le paralyser",
          nextScene: "combat_chevalier_affaibli",
          condition: { type: "has_item", itemId: "gemme_dragon" },
        },
        {
          text: "💡 Utiliser ce que vous savez de sa faiblesse",
          nextScene: "combat_chevalier_affaibli",
          condition: { type: "has_flag", flag: "connait_faiblesse_chevalier" },
        },
        {
          text: "⚔️ L'affronter de front !",
          nextScene: "combat_chevalier_fort",
        },
        {
          text: "🗣️ Tenter de lui parler de son passé",
          nextScene: "dialogue_chevalier",
          condition: { type: "has_flag", flag: "connait_histoire_aldric" },
        },
      ],
    },

    dialogue_chevalier: {
      id: "dialogue_chevalier",
      title: "La Vérité de Sir Aldric",
      text: `*"Sir Aldric !"* criez-vous. *"Je connais votre histoire. Vous étiez un noble chevalier avant que la Gemme ne vous corrompe ! Ce n'est pas qui vous êtes vraiment !"*\n\nLe Chevalier Noir vacille. Sa main tremble sur son épée.\n\n*"Ce... ce nom... Comment..."* Des fissures de lumière dorée apparaissent dans son armure noire. *"Aidez-moi... Détruisez la gemme... dans mon armure... libérez-moi de cette prison..."*`,
      image: "images/foret/foret-profonde.jpg",
      imageAlt: "Lumière perçant à travers les ténèbres",
      effects: [{ type: "add_xp", value: 50 }],
      choices: [
        {
          text: "💎 Utiliser la Gemme du Dragon pour briser sa malédiction",
          nextScene: "fin_redemption",
          condition: { type: "has_item", itemId: "gemme_dragon" },
        },
        {
          text: "⚔️ Frapper le point faible dans son armure",
          nextScene: "combat_chevalier_affaibli",
        },
      ],
    },

    combat_chevalier_affaibli: {
      id: "combat_chevalier_affaibli",
      title: "Combat : Chevalier Noir (Affaibli)",
      text: `Le Chevalier Noir est déstabilisé ! Son armure crépite et des fissures de lumière apparaissent. C'est votre chance !\n\nMême affaibli, il reste un adversaire redoutable. Préparez-vous !`,
      image: "images/foret/combat-sombre.jpg",
      imageAlt: "Chevalier noir affaibli",
      combat: {
        enemyName: "Chevalier Noir (Affaibli)",
        enemyIcon: "🖤",
        enemyHp: 130,
        enemyAttack: 22,
        enemyDefense: 13,
        enemySpells: [
          { name: "Lame Maudite", icon: "⚔️", damage: 22, chance: 0.3 },
        ],
        victoryScene: "fin_victoire_combat",
        defeatScene: "defaite_generique",
        xpReward: 120,
      },
      choices: [],
    },

    combat_chevalier_fort: {
      id: "combat_chevalier_fort",
      title: "Combat : Chevalier Noir",
      text: `Le Chevalier Noir se jette sur vous avec une puissance dévastatrice ! C'est un combat à la vie, à la mort !\n\n*"Vous êtes courageux, mais la courage ne suffit pas !"*`,
      image: "images/foret/combat-sombre.jpg",
      imageAlt: "Combat épique contre le chevalier noir",
      combat: {
        enemyName: "Chevalier Noir",
        enemyIcon: "⚫",
        enemyHp: 200,
        enemyAttack: 30,
        enemyDefense: 18,
        enemySpells: [
          { name: "Lame Maudite", icon: "⚔️", damage: 28, chance: 0.3 },
          { name: "Aura Ténébreuse", icon: "🌑", damage: 20, chance: 0.2 },
          { name: "Régénération Noire", icon: "🖤", healing: 25, chance: 0.15 },
        ],
        victoryScene: "fin_victoire_combat",
        defeatScene: "defaite_generique",
        xpReward: 200,
      },
      choices: [],
    },

    // ─── FINS ────────────────────────────────
    fin_redemption: {
      id: "fin_redemption",
      title: "✨ La Rédemption de Sir Aldric",
      text: `Vous brandissez la Gemme du Dragon et une lumière aveuglante emplit la salle. L'armure noire se fissure, se brise, et tombe en morceaux.\n\nSous l'armure se tient un homme épuisé, aux cheveux blancs et aux yeux emplis de gratitude.\n\n*"Merci... Je suis enfin libre après des siècles de tourment."* Aldric s'agenouille et vous tend la **Couronne du Roi Oublié**.\n\n*"Vous avez prouvé que la compassion est la plus grande des armes. Cette forêt est désormais libérée, et ce royaume a trouvé son héros."*\n\nLa malédiction se dissipe. Les arbres retrouvent leurs couleurs, les oiseaux chantent à nouveau, et la brume s'évapore. Vous êtes le héros de la Forêt des Ombres.\n\n🏆 **FIN DORÉE — La Rédemption** 🏆\n*Vous avez choisi la voie de la compassion et sauvé un homme de sa malédiction.*`,
      image: "images/foret/portrait-homme.jpg",
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
      title: "⚔️ Le Chevalier Noir est Vaincu !",
      text: `Votre dernier coup transperce l'armure maudite. Le Chevalier Noir tombe à genoux, son épée sombre se brisant sur le sol.\n\nL'énergie sombre se dissipe et vous trouvez la **Gemme du Dragon** incrustée dans le trône. En la retirant, le donjon commence à trembler.\n\nVous courez vers la sortie tandis que les murs s'effondrent derrière vous. Dehors, la forêt commence déjà à se transformer — la malédiction se lève !\n\nLes villageois viendront bientôt vous acclamer comme le héros qui a libéré la Forêt des Ombres.\n\n⚔️ **FIN HÉROÏQUE — Le Triomphe par les Armes** ⚔️\n*Vous avez vaincu le mal par la force et le courage.*`,
      image: "images/foret/nature-lumiere.jpg",
      imageAlt: "Victoire triomphale au lever du soleil",
      effects: [{ type: "add_xp", value: 150 }],
      isEnding: true,
      endingType: "victory",
      choices: [],
    },

    defaite_generique: {
      id: "defaite_generique",
      title: "💀 Défaite...",
      text: `Vos forces vous abandonnent. Vous tombez à genoux tandis que les ténèbres vous engloutissent.\n\nLa Forêt des Ombres a réclamé une nouvelle victime. Votre histoire s'achève ici, mais peut-être qu'un autre aventurier prendra la relève un jour...\n\n💀 **FIN — Défaite** 💀\n*Le mal triomphe... pour l'instant.*`,
      image: "images/foret/tenebres.jpg",
      imageAlt: "Ténèbres envahissantes",
      isEnding: true,
      endingType: "defeat",
      choices: [],
    },
  },
};
