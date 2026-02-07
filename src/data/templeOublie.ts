import type { Adventure } from '@/types';

export const templeOublie: Adventure = {
  id: 'temple-oublie',
  title: 'Le Temple de l\'Éternel',
  subtitle: 'Mythologie et mystères antiques',
  description:
    'Grèce antique, époque mythologique. Vous êtes un demi-dieu, enfant d\'Athéna, envoyé par l\'Oracle de Delphes pour retrouver un artéfact divin caché dans le Temple de l\'Éternel — un lieu situé entre le monde des mortels et celui des dieux. Les Titans cherchent aussi cet artéfact pour renverser l\'Olympe.',
  coverImage: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=500&fit=crop',
  theme: 'mythologie',
  themeColors: {
    primary: '#6b4c9a',
    secondary: '#8b6fc0',
    bg: '#1a1028',
    accent: '#ffd700',
  },
  startingStats: {
    level: 1,
    hp: 110,
    maxHp: 110,
    attack: 14,
    defense: 8,
    magic: 12,
    luck: 8,
    xp: 0,
    xpToNextLevel: 100,
  },
  startingItems: [
    {
      id: 'lance_bronze',
      name: 'Lance de Bronze',
      description: 'Une lance forgée à Athènes.',
      icon: '🔱',
      type: 'weapon',
    },
    {
      id: 'ambroisie',
      name: 'Ambroisie',
      description: 'Nourriture des dieux. Restaure 40 PV.',
      icon: '🍯',
      type: 'potion',
      usable: true,
      effects: [{ type: 'heal', value: 40 }],
    },
  ],
  startingSpells: [
    {
      id: 'sagesse_athena',
      name: 'Sagesse d\'Athéna',
      description: 'La clarté d\'esprit d\'Athéna vous guide.',
      icon: '🦉',
      manaCost: 8,
      healing: 25,
    },
  ],
  allItems: {
    lance_bronze: {
      id: 'lance_bronze',
      name: 'Lance de Bronze',
      description: 'Une lance forgée à Athènes.',
      icon: '🔱',
      type: 'weapon',
    },
    ambroisie: {
      id: 'ambroisie',
      name: 'Ambroisie',
      description: 'Restaure 40 PV.',
      icon: '🍯',
      type: 'potion',
      usable: true,
      effects: [{ type: 'heal', value: 40 }],
    },
    bouclier_athena: {
      id: 'bouclier_athena',
      name: 'Égide d\'Athéna',
      description: 'Le bouclier légendaire orné de la Gorgone.',
      icon: '🛡️',
      type: 'armor',
      effects: [{ type: 'stat_boost', target: 'defense', value: 12 }],
    },
    epee_styx: {
      id: 'epee_styx',
      name: 'Épée du Styx',
      description: 'Forgée dans les eaux du fleuve des Enfers.',
      icon: '⚔️',
      type: 'weapon',
      effects: [{ type: 'stat_boost', target: 'attack', value: 15 }],
    },
    lyre_orphee: {
      id: 'lyre_orphee',
      name: 'Lyre d\'Orphée',
      description: 'Sa musique charme toute créature.',
      icon: '🎵',
      type: 'quest',
    },
    fil_ariane: {
      id: 'fil_ariane',
      name: 'Fil d\'Ariane',
      description: 'Ne vous perdez jamais dans un labyrinthe.',
      icon: '🧶',
      type: 'key',
    },
    pomme_or: {
      id: 'pomme_or',
      name: 'Pomme d\'Or',
      description: 'Fruit du jardin des Hespérides.',
      icon: '🍎',
      type: 'potion',
      usable: true,
      effects: [{ type: 'heal', value: 80 }, { type: 'stat_boost', target: 'maxHp', value: 20 }],
    },
    couronne_laurier: {
      id: 'couronne_laurier',
      name: 'Couronne de Laurier',
      description: 'Symbole de victoire divine.',
      icon: '🏆',
      type: 'quest',
    },
    oeil_cyclope: {
      id: 'oeil_cyclope',
      name: 'Œil de Cyclope',
      description: 'Permet de voir à travers les illusions.',
      icon: '👁️',
      type: 'quest',
    },
    nectar_divin: {
      id: 'nectar_divin',
      name: 'Nectar Divin',
      description: 'Boisson des Olympiens. Restaure 60 PV.',
      icon: '🏺',
      type: 'potion',
      usable: true,
      effects: [{ type: 'heal', value: 60 }],
    },
  },
  allSpells: {
    sagesse_athena: {
      id: 'sagesse_athena',
      name: 'Sagesse d\'Athéna',
      description: 'La clarté d\'esprit d\'Athéna vous guide.',
      icon: '🦉',
      manaCost: 8,
      healing: 25,
    },
    foudre_zeus: {
      id: 'foudre_zeus',
      name: 'Foudre de Zeus',
      description: 'Un éclair divin frappe l\'ennemi.',
      icon: '⚡',
      manaCost: 15,
      damage: 45,
    },
    flamme_hephaistos: {
      id: 'flamme_hephaistos',
      name: 'Flamme d\'Héphaistos',
      description: 'Le feu de la forge divine.',
      icon: '🔥',
      manaCost: 12,
      damage: 35,
    },
    vague_poseidon: {
      id: 'vague_poseidon',
      name: 'Vague de Poséidon',
      description: 'Une vague dévastatrice.',
      icon: '🌊',
      manaCost: 10,
      damage: 28,
    },
  },
  startScene: 'oracle_delphes',
  scenes: {
    // ─── ACTE 1 : La Quête Commence ─────────
    oracle_delphes: {
      id: 'oracle_delphes',
      title: 'L\'Oracle de Delphes',
      text: `La Pythie se tord sur son trépied, les yeux voilés par la transe divine. Sa voix résonne dans le temple empli de fumée d'encens :\n\n*"Enfant d'Athéna, trois épreuves t'attendent avant le Temple de l'Éternel. La mer, le labyrinthe, et les enfers. Choisis ta première épreuve avec sagesse, car l'ordre déterminera ton destin."*\n\nUn tremblement de terre fait vibrer les colonnes. Au loin, les Titans sont en mouvement. Le temps presse.`,
      image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=400&fit=crop',
      imageAlt: 'Temple grec ancien dans la brume',
      choices: [
        {
          text: '🌊 Épreuve de la Mer — Affronter les dangers de Poséidon',
          nextScene: 'epreuve_mer',
        },
        {
          text: '🏛️ Épreuve du Labyrinthe — Entrer dans le dédale du Minotaure',
          nextScene: 'epreuve_labyrinthe',
        },
        {
          text: '💀 Épreuve des Enfers — Descendre dans le royaume d\'Hadès',
          nextScene: 'epreuve_enfers',
        },
      ],
    },

    // ─── Épreuve de la Mer ──────────────────
    epreuve_mer: {
      id: 'epreuve_mer',
      title: 'L\'Épreuve de la Mer',
      text: `Votre navire fend les flots agités de la mer Égée. Les vagues deviennent de plus en plus hautes, et le ciel s'assombrit.\n\nSoudain, un tourbillon se forme devant vous. Du centre émerge **Scylla**, le monstre à six têtes, tandis que de l'autre côté, **Charybde** crée un vortex dévastateur.\n\nVous devez choisir votre passage.`,
      image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=400&fit=crop',
      imageAlt: 'Mer déchaînée sous un ciel d\'orage',
      effects: [{ type: 'add_xp', value: 15 }],
      choices: [
        {
          text: '🐍 Naviguer près de Scylla — perdre un peu mais survivre',
          nextScene: 'passage_scylla',
        },
        {
          text: '🌀 Tenter de passer Charybde — risqué mais rapide',
          nextScene: 'passage_charybde',
        },
        {
          text: '🎵 Utiliser la Lyre d\'Orphée pour apaiser les monstres',
          nextScene: 'lyre_monstres_mer',
          condition: { type: 'has_item', itemId: 'lyre_orphee' },
        },
      ],
    },

    passage_scylla: {
      id: 'passage_scylla',
      title: 'Face à Scylla',
      text: `Scylla plonge ses têtes vers votre navire ! Vous parvenez à en trancher une avec votre lance, mais les autres vous mordent avant que vous ne passiez.\n\nMeurtri mais vivant, vous atteignez l'Île des Sirènes. Là, dans un temple en ruine, vous trouvez le sort **Vague de Poséidon**, laissé par le dieu des mers lui-même en cadeau aux mortels courageux.`,
      image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=400&fit=crop',
      imageAlt: 'Combat maritime contre un monstre marin',
      effects: [
        { type: 'damage', value: 20 },
        { type: 'add_spell', spellId: 'vague_poseidon' },
        { type: 'add_xp', value: 40 },
        { type: 'set_flag', flag: 'epreuve_mer_complete' },
      ],
      choices: [
        {
          text: '🏛️ Épreuve du Labyrinthe',
          nextScene: 'epreuve_labyrinthe',
        },
        {
          text: '💀 Épreuve des Enfers',
          nextScene: 'epreuve_enfers',
        },
        {
          text: '⛩️ Aller au Temple de l\'Éternel',
          nextScene: 'approche_temple',
          condition: { type: 'min_level', value: 2 },
        },
      ],
    },

    passage_charybde: {
      id: 'passage_charybde',
      title: 'Le Vortex de Charybde',
      text: `Vous foncez droit vers le vortex ! Le navire est secoué violemment mais votre habileté est sans faille — vous passez au travers au moment exact où Charybde reprend son souffle.\n\nDe l'autre côté, vous découvrez une grotte marine contenant le **Bouclier d'Athéna** — l'Égide elle-même, ornée du visage de la Gorgone ! Votre mère divine veillait sur vous.`,
      image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=400&fit=crop',
      imageAlt: 'Navire passant à travers un vortex',
      effects: [
        { type: 'add_item', itemId: 'bouclier_athena' },
        { type: 'stat_boost', target: 'defense', value: 12 },
        { type: 'add_xp', value: 50 },
        { type: 'set_flag', flag: 'epreuve_mer_complete' },
      ],
      choices: [
        {
          text: '🏛️ Épreuve du Labyrinthe',
          nextScene: 'epreuve_labyrinthe',
        },
        {
          text: '💀 Épreuve des Enfers',
          nextScene: 'epreuve_enfers',
        },
        {
          text: '⛩️ Aller au Temple de l\'Éternel',
          nextScene: 'approche_temple',
          condition: { type: 'min_level', value: 2 },
        },
      ],
    },

    lyre_monstres_mer: {
      id: 'lyre_monstres_mer',
      title: 'La Mélodie Apaisante',
      text: `Vous jouez de la Lyre d'Orphée et une mélodie divine s'élève au-dessus des flots. Scylla et Charybde s'immobilisent, envoutés par la musique.\n\nVous passez sans une égratignure et Poséidon lui-même émerge des flots pour vous saluer :\n\n*"Ingénieux, enfant d'Athéna. Prends ma bénédiction."*\n\nVous apprenez le sort **Vague de Poséidon** et recevez du **Nectar Divin**.`,
      effects: [
        { type: 'add_spell', spellId: 'vague_poseidon' },
        { type: 'add_item', itemId: 'nectar_divin' },
        { type: 'add_xp', value: 60 },
        { type: 'set_flag', flag: 'epreuve_mer_complete' },
        { type: 'set_flag', flag: 'benediction_poseidon' },
      ],
      choices: [
        {
          text: '🏛️ Épreuve du Labyrinthe',
          nextScene: 'epreuve_labyrinthe',
        },
        {
          text: '💀 Épreuve des Enfers',
          nextScene: 'epreuve_enfers',
        },
      ],
    },

    // ─── Épreuve du Labyrinthe ──────────────
    epreuve_labyrinthe: {
      id: 'epreuve_labyrinthe',
      title: 'Le Labyrinthe du Minotaure',
      text: `L'entrée du labyrinthe de Crète s'ouvre devant vous comme une gueule béante. Les murs de pierre sont couverts de fresques anciennes représentant des sacrifices humains.\n\nUne vieille femme vous attend à l'entrée. C'est **Ariane**, enchantée par les dieux pour guider les héros.\n\n*"Héros, prenez ceci."* Elle vous tend un fil doré. *"Suivez-le pour en sortir. Mais d'abord, vous devrez affronter ce qui vit au centre."*`,
      image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=400&fit=crop',
      imageAlt: 'Entrée d\'un labyrinthe de pierre',
      effects: [
        { type: 'add_item', itemId: 'fil_ariane' },
        { type: 'add_xp', value: 20 },
      ],
      choices: [
        {
          text: '🏃 Courir directement vers le centre',
          nextScene: 'centre_labyrinthe',
        },
        {
          text: '🔍 Explorer méthodiquement les couloirs',
          nextScene: 'exploration_labyrinthe',
        },
      ],
    },

    exploration_labyrinthe: {
      id: 'exploration_labyrinthe',
      title: 'Les Secrets du Labyrinthe',
      text: `En explorant prudemment, vous découvrez les restes d'anciens héros qui n'ont pas eu votre chance. Parmi eux, vous trouvez une **Pomme d'Or** miraculeusement préservée et un grimoire contenant le sort **Flamme d'Héphaistos**.\n\nLe Minotaure rugit au loin. Il a senti votre présence.`,
      image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=400&fit=crop',
      imageAlt: 'Couloirs sombres du labyrinthe',
      effects: [
        { type: 'add_item', itemId: 'pomme_or' },
        { type: 'add_spell', spellId: 'flamme_hephaistos' },
        { type: 'add_xp', value: 30 },
      ],
      choices: [
        {
          text: '⚔️ Aller affronter le Minotaure',
          nextScene: 'centre_labyrinthe',
        },
      ],
    },

    centre_labyrinthe: {
      id: 'centre_labyrinthe',
      title: 'Le Minotaure !',
      text: `Au centre du labyrinthe, une vaste arène à ciel ouvert. Et là, il attend — le **Minotaure**, mi-homme, mi-taureau, ses cornes tachées du sang de centaines de victimes.\n\nIl gratte le sol de son sabot et charge !`,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop',
      imageAlt: 'Arène du Minotaure',
      combat: {
        enemyName: 'Le Minotaure',
        enemyIcon: '🐂',
        enemyHp: 85,
        enemyAttack: 20,
        enemyDefense: 10,
        victoryScene: 'victoire_minotaure',
        defeatScene: 'defaite_mythologique',
        xpReward: 75,
      },
      choices: [],
    },

    victoire_minotaure: {
      id: 'victoire_minotaure',
      title: 'Le Minotaure est Vaincu !',
      text: `Le Minotaure s'effondre dans un dernier mugissement. Vous suivez le Fil d'Ariane pour sortir du labyrinthe.\n\nÀ la sortie, Ariane est rayonnante : *"Héros, prenez cet Œil de Cyclope. Il vous permettra de voir à travers les illusions du Temple de l'Éternel."*`,
      image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=400&fit=crop',
      imageAlt: 'Victoire dans l\'arène',
      effects: [
        { type: 'add_item', itemId: 'oeil_cyclope' },
        { type: 'set_flag', flag: 'epreuve_labyrinthe_complete' },
      ],
      choices: [
        {
          text: '🌊 Épreuve de la Mer',
          nextScene: 'epreuve_mer',
          condition: { type: 'has_flag', flag: 'epreuve_mer_complete' },
          hidden: true,
        },
        {
          text: '🌊 Épreuve de la Mer',
          nextScene: 'epreuve_mer',
        },
        {
          text: '💀 Épreuve des Enfers',
          nextScene: 'epreuve_enfers',
        },
        {
          text: '⛩️ Aller au Temple de l\'Éternel',
          nextScene: 'approche_temple',
          condition: { type: 'min_level', value: 2 },
        },
      ],
    },

    // ─── Épreuve des Enfers ─────────────────
    epreuve_enfers: {
      id: 'epreuve_enfers',
      title: 'La Descente aux Enfers',
      text: `L'entrée du royaume d'Hadès est une crevasse béante dans la terre. L'air qui en émane est glacial et sent le soufre.\n\nVous descendez et arrivez aux bords du **Styx**, le fleuve des morts. Charon, le passeur, vous attend dans sa barque.\n\n*"Un vivant parmi les morts ? Intéressant. Que m'offres-tu en échange du passage ?"*`,
      image: 'https://images.unsplash.com/photo-1509248961620-e3e73c5f3840?w=800&h=400&fit=crop',
      imageAlt: 'Entrée des Enfers grecs',
      effects: [{ type: 'add_xp', value: 20 }],
      choices: [
        {
          text: '🎵 Jouer de la Lyre d\'Orphée pour charmer Charon',
          nextScene: 'charmer_charon',
          condition: { type: 'has_item', itemId: 'lyre_orphee' },
        },
        {
          text: '🍎 Offrir la Pomme d\'Or',
          nextScene: 'passage_charon_pomme',
          condition: { type: 'has_item', itemId: 'pomme_or' },
        },
        {
          text: '💪 Forcer le passage !',
          nextScene: 'forcer_passage_styx',
        },
        {
          text: '🗣️ Invoquer votre héritage divin',
          nextScene: 'heritage_divin',
        },
      ],
    },

    charmer_charon: {
      id: 'charmer_charon',
      title: 'La Musique des Enfers',
      text: `La mélodie de la Lyre fait pleurer Charon — un exploit sans précédent. Il vous transporte gratuitement et vous confie un secret :\n\n*"Hadès garde une épée forgée dans les eaux du Styx. Dites-lui que Charon vous envoie."*`,
      effects: [
        { type: 'set_flag', flag: 'ami_charon' },
        { type: 'add_xp', value: 30 },
      ],
      choices: [
        {
          text: '👑 Aller voir Hadès',
          nextScene: 'palais_hades',
        },
      ],
    },

    passage_charon_pomme: {
      id: 'passage_charon_pomme',
      title: 'Un Prix Acceptable',
      text: `Charon prend la Pomme d'Or avec avidité.\n\n*"Une pomme des Hespérides ! Passage accordé."*\n\nIl vous dépose sur l'autre rive.`,
      effects: [
        { type: 'remove_item', itemId: 'pomme_or' },
        { type: 'add_xp', value: 20 },
      ],
      choices: [
        {
          text: '👑 Aller voir Hadès',
          nextScene: 'palais_hades',
        },
      ],
    },

    forcer_passage_styx: {
      id: 'forcer_passage_styx',
      title: 'Traversée Périlleuse',
      text: `Vous plongez dans le Styx ! L'eau glaciale brûle comme de l'acide, mais elle vous renforce aussi. Tel Achille, vous en ressortez plus puissant.\n\nCharon marmonne de mécontentement mais vous laisse passer.`,
      effects: [
        { type: 'damage', value: 25 },
        { type: 'stat_boost', target: 'attack', value: 8 },
        { type: 'stat_boost', target: 'defense', value: 5 },
        { type: 'set_flag', flag: 'bain_styx' },
        { type: 'add_xp', value: 35 },
      ],
      choices: [
        {
          text: '👑 Aller voir Hadès',
          nextScene: 'palais_hades',
        },
      ],
    },

    heritage_divin: {
      id: 'heritage_divin',
      title: 'Le Sang des Dieux',
      text: `*"Je suis enfant d'Athéna, et j'exige le passage !"*\n\nVos yeux brillent d'une lumière dorée. Charon hésite, puis s'incline.\n\n*"Le sang olympien coule dans tes veines... Passage accordé, demi-dieu."*\n\nVotre nature divine s'éveille davantage, augmentant vos capacités magiques.`,
      effects: [
        { type: 'stat_boost', target: 'magic', value: 8 },
        { type: 'set_flag', flag: 'heritage_actif' },
        { type: 'add_xp', value: 25 },
      ],
      choices: [
        {
          text: '👑 Aller voir Hadès',
          nextScene: 'palais_hades',
        },
      ],
    },

    palais_hades: {
      id: 'palais_hades',
      title: 'Le Palais d\'Hadès',
      text: `Le palais d'Hadès est grandiose — des colonnes d'obsidienne soutiennent un plafond de flammes vertes. Sur son trône de crânes, Hadès vous observe avec curiosité.\n\n*"Enfant d'Athéna. Ma chère nièce continue d'envoyer ses enfants me déranger."* Un sourire narquois traverse son visage. *"Très bien. Si tu peux vaincre Cerbère, je te donnerai ce que tu cherches — et une épée qui fera trembler même les Titans."*`,
      image: 'https://images.unsplash.com/photo-1509248961620-e3e73c5f3840?w=800&h=400&fit=crop',
      imageAlt: 'Palais sombre et grandiose',
      choices: [
        {
          text: '🐕 Affronter Cerbère',
          nextScene: 'combat_cerbere',
        },
        {
          text: '🎵 Endormir Cerbère avec la Lyre',
          nextScene: 'lyre_cerbere',
          condition: { type: 'has_item', itemId: 'lyre_orphee' },
        },
      ],
    },

    combat_cerbere: {
      id: 'combat_cerbere',
      title: 'Combat : Cerbère !',
      text: `Le gardien des Enfers, le chien à trois têtes, surgit de l'ombre. Ses trois gueules claquent, chacune capable d'avaler un homme entier.\n\nLe combat est engagé !`,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop',
      imageAlt: 'Créature monstrueuse à trois têtes',
      combat: {
        enemyName: 'Cerbère',
        enemyIcon: '🐕‍🦺',
        enemyHp: 100,
        enemyAttack: 22,
        enemyDefense: 12,
        victoryScene: 'victoire_cerbere',
        defeatScene: 'defaite_mythologique',
        xpReward: 90,
      },
      choices: [],
    },

    lyre_cerbere: {
      id: 'lyre_cerbere',
      title: 'Le Charme d\'Orphée',
      text: `Comme Orphée avant vous, la mélodie de la Lyre endort Cerbère. Le monstre s'effondre en ronflant, ses trois têtes posées sur ses pattes.\n\nHadès applaudit lentement. *"Comme Orphée... Impressionnant. Tu as gagné mon respect."*\n\nIl vous offre l'Épée du Styx et son propre sort de combat.`,
      effects: [
        { type: 'add_item', itemId: 'epee_styx' },
        { type: 'stat_boost', target: 'attack', value: 15 },
        { type: 'add_spell', spellId: 'foudre_zeus' },
        { type: 'set_flag', flag: 'epreuve_enfers_complete' },
        { type: 'set_flag', flag: 'respect_hades' },
        { type: 'add_xp', value: 80 },
      ],
      choices: [
        {
          text: '🌊 Épreuve de la Mer',
          nextScene: 'epreuve_mer',
        },
        {
          text: '🏛️ Épreuve du Labyrinthe',
          nextScene: 'epreuve_labyrinthe',
        },
        {
          text: '⛩️ Aller au Temple de l\'Éternel',
          nextScene: 'approche_temple',
        },
      ],
    },

    victoire_cerbere: {
      id: 'victoire_cerbere',
      title: 'Cerbère est Vaincu !',
      text: `Cerbère gémit et se couche en soumission. Hadès se lève de son trône.\n\n*"Par le Styx... Tu l'as vaincu par la force. Voilà ton épée, guerrier. Et un sort digne de Zeus lui-même."*\n\nIl vous remet l'**Épée du Styx** et vous enseigne la **Foudre de Zeus**.`,
      effects: [
        { type: 'add_item', itemId: 'epee_styx' },
        { type: 'stat_boost', target: 'attack', value: 15 },
        { type: 'add_spell', spellId: 'foudre_zeus' },
        { type: 'set_flag', flag: 'epreuve_enfers_complete' },
      ],
      choices: [
        {
          text: '🌊 Épreuve de la Mer',
          nextScene: 'epreuve_mer',
        },
        {
          text: '🏛️ Épreuve du Labyrinthe',
          nextScene: 'epreuve_labyrinthe',
        },
        {
          text: '⛩️ Aller au Temple de l\'Éternel',
          nextScene: 'approche_temple',
        },
      ],
    },

    // ─── ACTE FINAL : Le Temple ─────────────
    approche_temple: {
      id: 'approche_temple',
      title: 'Le Temple de l\'Éternel',
      text: `Le Temple se dresse au sommet du Mont Kronos, entre les nuages et les étoiles. Ses colonnes de marbre blanc brillent d'une lumière divine. L'air est chargé d'énergie cosmique.\n\nMais un obstacle se dresse à l'entrée : **Cronos**, le Titan du Temps, père de Zeus, bloque le passage. Son immense silhouette fait trembler la montagne.\n\n*"Mortel insignifiant ! L'artéfact est MIEN ! Avec lui, je renverserai l'Olympe et reprendrai ce qui m'appartient !"*`,
      image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=400&fit=crop',
      imageAlt: 'Temple majestueux au sommet d\'une montagne',
      choices: [
        {
          text: '⚔️ Affronter Cronos de front',
          nextScene: 'combat_cronos_fort',
        },
        {
          text: '👁️ Utiliser l\'Œil de Cyclope pour voir ses faiblesses',
          nextScene: 'combat_cronos_faible',
          condition: { type: 'has_item', itemId: 'oeil_cyclope' },
        },
        {
          text: '⚡ Invoquer la Foudre de Zeus',
          nextScene: 'combat_cronos_faible',
          condition: { type: 'has_spell', spellId: 'foudre_zeus' },
        },
        {
          text: '🗣️ Gagner du temps en dialoguant',
          nextScene: 'dialogue_cronos',
        },
      ],
    },

    dialogue_cronos: {
      id: 'dialogue_cronos',
      title: 'Paroles au Titan',
      text: `*"Cronos ! Les dieux ont créé un monde de beauté et de diversité. Votre règne était celui de la terreur !"*\n\nCronos ricane : *"La terreur ? J'offrais l'ordre ! Le chaos de Zeus n'est pas meilleur."*\n\nPendant qu'il parle, vous remarquez une fissure dans son armure — là où Zeus l'avait blessé il y a des éons.`,
      effects: [
        { type: 'set_flag', flag: 'connait_faiblesse_cronos' },
        { type: 'add_xp', value: 25 },
      ],
      choices: [
        {
          text: '⚔️ Frapper la fissure dans son armure !',
          nextScene: 'combat_cronos_faible',
        },
        {
          text: '⚔️ L\'affronter maintenant !',
          nextScene: 'combat_cronos_fort',
        },
      ],
    },

    combat_cronos_faible: {
      id: 'combat_cronos_faible',
      title: 'Combat : Cronos (Affaibli)',
      text: `Vous exploitez la faiblesse de Cronos ! Le Titan rugit de douleur alors que vos attaques trouvent leurs cibles.\n\nMême affaibli, il reste un adversaire terrifiant !`,
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aede?w=800&h=400&fit=crop',
      imageAlt: 'Titan cosmique affaibli',
      combat: {
        enemyName: 'Cronos (Affaibli)',
        enemyIcon: '⏳',
        enemyHp: 120,
        enemyAttack: 22,
        enemyDefense: 12,
        victoryScene: 'victoire_cronos',
        defeatScene: 'defaite_mythologique',
        xpReward: 150,
      },
      choices: [],
    },

    combat_cronos_fort: {
      id: 'combat_cronos_fort',
      title: 'Combat : Cronos',
      text: `Le Titan du Temps s'abat sur vous avec la puissance d'un cataclysme ! Son épée coupe à travers l'espace-temps lui-même !\n\nC'est le combat le plus difficile que vous ayez jamais mené !`,
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aede?w=800&h=400&fit=crop',
      imageAlt: 'Titan du Temps en pleine puissance',
      combat: {
        enemyName: 'Cronos, Titan du Temps',
        enemyIcon: '⏳',
        enemyHp: 180,
        enemyAttack: 28,
        enemyDefense: 16,
        victoryScene: 'victoire_cronos',
        defeatScene: 'defaite_mythologique',
        xpReward: 250,
      },
      choices: [],
    },

    // ─── FINS ────────────────────────────────
    victoire_cronos: {
      id: 'victoire_cronos',
      title: '⚡ Cronos est Vaincu !',
      text: `Cronos tombe à genoux, son essence se dissipant comme du sable dans le vent.\n\n*"Impossible... un mortel..."* murmure-t-il avant de disparaître.\n\nVous entrez dans le Temple de l'Éternel. Au centre, sur un piédestal de lumière, flotte la **Couronne de Laurier Divin** — l'artéfact qui confère l'immortalité.\n\nLes dieux de l'Olympe apparaissent en visions dorées. **Athéna** s'avance, les yeux emplis de fierté.\n\n*"Mon enfant, tu as prouvé ta valeur. L'Olympe est sauvé. Prends la couronne — tu es désormais un héros éternel."*\n\nLe ciel s'illumine et une nouvelle constellation prend forme — la vôtre.\n\n🏛️ **FIN MYTHIQUE — L'Ascension au Panthéon** 🏛️\n*Vous avez vaincu un Titan et gagné votre place parmi les étoiles.*`,
      image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=400&fit=crop',
      imageAlt: 'Ascension divine parmi les étoiles',
      effects: [
        { type: 'add_item', itemId: 'couronne_laurier' },
        { type: 'add_xp', value: 300 },
      ],
      isEnding: true,
      endingType: 'victory',
      choices: [],
    },

    defaite_mythologique: {
      id: 'defaite_mythologique',
      title: '💀 Défaite du Héros',
      text: `Vos forces s'épuisent. Le monde des mortels n'était peut-être pas prêt pour cette quête.\n\nCharon viendra vous chercher pour votre dernier voyage... Mais les Moires filent toujours, et peut-être qu'un autre héros reprendra le flambeau.\n\n💀 **FIN — Défaite** 💀\n*Les dieux pleurent la chute d'un héros prometteur.*`,
      image: 'https://images.unsplash.com/photo-1509248961620-e3e73c5f3840?w=800&h=400&fit=crop',
      imageAlt: 'Ténèbres des Enfers',
      isEnding: true,
      endingType: 'defeat',
      choices: [],
    },
  },
};
