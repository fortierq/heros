// ─── Types du moteur de jeu ─────────────────────────────────────

// ─── Carte & Événements aléatoires ──────────────────────────────

export interface MapLocation {
  id: string;
  name: string;
  x: number; // position 0-100 (pourcentage)
  y: number;
  icon: string;
  arrivalScene: string;
  connectedTo: string[];
  discoveredByDefault?: boolean;
  description?: string;
}

export interface RandomEvent {
  id: string;
  title: string;
  text: string;
  imagePrompt?: string;
  probability: number; // 0-1
  condition?: Condition;
  effects?: GameEffect[];
  combat?: CombatEncounter;
  choices?: RandomEventChoice[];
}

export interface RandomEventChoice {
  text: string;
  effects?: GameEffect[];
}

// ─── Stats & Objets ─────────────────────────────────────────────

export interface CharacterStats {
  level: number;
  hp: number;
  maxHp: number;
  mana: number;
  maxMana: number;
  attack: number;
  defense: number;
  magic: number;
  luck: number;
  xp: number;
  xpToNextLevel: number;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  icon: string;
  type:
    | "weapon"
    | "armor"
    | "potion"
    | "spell"
    | "key"
    | "quest"
    | "ring"
    | "artifact";
  damage?: number;
  effects?: GameEffect[];
  usable?: boolean;
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  icon: string;
  manaCost: number;
  damage?: number;
  healing?: number;
  effect?: string;
}

export interface GameEffect {
  type:
    | "heal"
    | "damage"
    | "stat_boost"
    | "add_item"
    | "remove_item"
    | "add_spell"
    | "add_xp"
    | "set_flag"
    | "heal_mana";
  target?: "hp" | "attack" | "defense" | "magic" | "luck" | "maxHp" | "maxMana";
  value?: number;
  itemId?: string;
  spellId?: string;
  flag?: string;
}

export interface Condition {
  type:
    | "has_item"
    | "has_spell"
    | "min_stat"
    | "has_flag"
    | "not_has_flag"
    | "min_level"
    | "luck_check";
  itemId?: string;
  spellId?: string;
  stat?: keyof CharacterStats;
  flag?: string;
  value?: number;
}

export interface CombatEncounter {
  enemyName: string;
  enemyIcon: string;
  enemyHp: number;
  enemyAttack: number;
  enemyDefense: number;
  enemySpells?: EnemySpell[];
  victoryScene: string;
  defeatScene: string;
  xpReward: number;
  lootItems?: Item[];
}

export interface EnemySpell {
  name: string;
  icon: string;
  damage?: number;
  healing?: number;
  chance: number; // 0-1 probability of casting instead of normal attack
}

export interface Choice {
  text: string;
  nextScene: string;
  condition?: Condition;
  effects?: GameEffect[];
  hidden?: boolean;
}

export interface Scene {
  id: string;
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
  imagePrompt?: string;
  mapLocation?: string;
  choices: Choice[];
  effects?: GameEffect[];
  condition?: Condition;
  combat?: CombatEncounter;
  isEnding?: boolean;
  endingType?: "victory" | "defeat" | "neutral";
}

export interface Adventure {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  theme: "fantasy" | "scifi" | "horror" | "mythologie";
  themeColors: {
    primary: string;
    secondary: string;
    bg: string;
    accent: string;
  };
  startingStats: CharacterStats;
  startingItems: Item[];
  startingSpells: Spell[];
  allItems: Record<string, Item>;
  allSpells: Record<string, Spell>;
  scenes: Record<string, Scene>;
  startScene: string;
  mapLocations?: MapLocation[];
  randomEvents?: RandomEvent[];
}

export interface GameState {
  currentAdventure: Adventure | null;
  currentScene: Scene | null;
  stats: CharacterStats;
  inventory: Item[];
  equippedWeapon: Item | null;
  equippedArmor: Item | null;
  spells: Spell[];
  flags: Set<string>;
  history: string[];
  isInCombat: boolean;
  combatState: CombatState | null;
  gameOver: boolean;
}

export interface CombatState {
  encounter: CombatEncounter;
  enemyCurrentHp: number;
  playerTurn: boolean;
  log: string[];
}
