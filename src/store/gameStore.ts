import { create } from 'zustand';
import type {
  Adventure,
  Scene,
  CharacterStats,
  Item,
  Spell,
  GameEffect,
  Condition,
  CombatState,
  CombatEncounter,
} from '@/types';

interface GameStore {
  // State
  currentAdventure: Adventure | null;
  currentScene: Scene | null;
  stats: CharacterStats;
  inventory: Item[];
  spells: Spell[];
  flags: Set<string>;
  history: string[];
  isInCombat: boolean;
  combatState: CombatState | null;
  gameOver: boolean;
  notifications: string[];

  // Actions
  startAdventure: (adventure: Adventure) => void;
  goToScene: (sceneId: string) => void;
  makeChoice: (choiceIndex: number) => void;
  applyEffects: (effects: GameEffect[]) => void;
  checkCondition: (condition: Condition) => boolean;
  useItem: (itemId: string) => void;
  startCombat: (encounter: CombatEncounter) => void;
  playerAttack: () => void;
  playerCastSpell: (spell: Spell) => void;
  enemyAttack: () => void;
  endCombat: (victory: boolean) => void;
  levelUp: () => void;
  addNotification: (msg: string) => void;
  clearNotifications: () => void;
  resetGame: () => void;
}

const defaultStats: CharacterStats = {
  level: 1,
  hp: 100,
  maxHp: 100,
  attack: 10,
  defense: 5,
  magic: 5,
  luck: 5,
  xp: 0,
  xpToNextLevel: 100,
};

export const useGameStore = create<GameStore>((set, get) => ({
  currentAdventure: null,
  currentScene: null,
  stats: { ...defaultStats },
  inventory: [],
  spells: [],
  flags: new Set<string>(),
  history: [],
  isInCombat: false,
  combatState: null,
  gameOver: false,
  notifications: [],

  startAdventure: (adventure: Adventure) => {
    set({
      currentAdventure: adventure,
      currentScene: adventure.scenes[adventure.startScene],
      stats: { ...adventure.startingStats },
      inventory: [...adventure.startingItems],
      spells: [...adventure.startingSpells],
      flags: new Set<string>(),
      history: [adventure.startScene],
      isInCombat: false,
      combatState: null,
      gameOver: false,
      notifications: [],
    });

    // Apply initial scene effects
    const startScene = adventure.scenes[adventure.startScene];
    if (startScene.effects) {
      get().applyEffects(startScene.effects);
    }
  },

  goToScene: (sceneId: string) => {
    const { currentAdventure, history } = get();
    if (!currentAdventure) return;

    const scene = currentAdventure.scenes[sceneId];
    if (!scene) return;

    set({
      currentScene: scene,
      history: [...history, sceneId],
      gameOver: scene.isEnding ?? false,
    });

    if (scene.effects) {
      get().applyEffects(scene.effects);
    }

    if (scene.combat) {
      get().startCombat(scene.combat);
    }
  },

  makeChoice: (choiceIndex: number) => {
    const { currentScene } = get();
    if (!currentScene) return;

    const choice = currentScene.choices[choiceIndex];
    if (!choice) return;

    if (choice.condition && !get().checkCondition(choice.condition)) return;

    if (choice.effects) {
      get().applyEffects(choice.effects);
    }

    get().goToScene(choice.nextScene);
  },

  applyEffects: (effects: GameEffect[]) => {
    const { stats, inventory, spells, flags, currentAdventure } = get();
    const newStats = { ...stats };
    let newInventory = [...inventory];
    let newSpells = [...spells];
    const newFlags = new Set(flags);
    const notifications: string[] = [];

    for (const effect of effects) {
      switch (effect.type) {
        case 'heal':
          newStats.hp = Math.min(newStats.maxHp, newStats.hp + (effect.value ?? 0));
          notifications.push(`+${effect.value} PV`);
          break;
        case 'damage':
          newStats.hp = Math.max(0, newStats.hp - (effect.value ?? 0));
          notifications.push(`-${effect.value} PV`);
          break;
        case 'stat_boost':
          if (effect.target && effect.target in newStats) {
            (newStats[effect.target as keyof CharacterStats] as number) += effect.value ?? 0;
            notifications.push(`${effect.target} +${effect.value}`);
          }
          break;
        case 'add_item':
          if (effect.itemId && currentAdventure?.allItems[effect.itemId]) {
            const item = currentAdventure.allItems[effect.itemId];
            newInventory.push(item);
            notifications.push(`Objet obtenu : ${item.name} ${item.icon}`);
          }
          break;
        case 'remove_item':
          if (effect.itemId) {
            newInventory = newInventory.filter((i) => i.id !== effect.itemId);
          }
          break;
        case 'add_spell':
          if (effect.spellId && currentAdventure?.allSpells[effect.spellId]) {
            const spell = currentAdventure.allSpells[effect.spellId];
            if (!newSpells.find((s) => s.id === spell.id)) {
              newSpells.push(spell);
              notifications.push(`Sort appris : ${spell.name} ${spell.icon}`);
            }
          }
          break;
        case 'add_xp': {
          newStats.xp += effect.value ?? 0;
          notifications.push(`+${effect.value} XP`);
          if (newStats.xp >= newStats.xpToNextLevel) {
            // Will level up after state update
            setTimeout(() => get().levelUp(), 100);
          }
          break;
        }
        case 'set_flag':
          if (effect.flag) {
            newFlags.add(effect.flag);
          }
          break;
      }
    }

    set({
      stats: newStats,
      inventory: newInventory,
      spells: newSpells,
      flags: newFlags,
      notifications: [...get().notifications, ...notifications],
    });

    if (newStats.hp <= 0) {
      set({ gameOver: true });
    }
  },

  checkCondition: (condition: Condition): boolean => {
    const { stats, inventory, spells, flags } = get();
    switch (condition.type) {
      case 'has_item':
        return inventory.some((i) => i.id === condition.itemId);
      case 'has_spell':
        return spells.some((s) => s.id === condition.spellId);
      case 'min_stat':
        if (condition.stat) {
          return (stats[condition.stat] as number) >= (condition.value ?? 0);
        }
        return false;
      case 'has_flag':
        return condition.flag ? flags.has(condition.flag) : false;
      case 'min_level':
        return stats.level >= (condition.value ?? 1);
      case 'luck_check':
        return Math.random() * 20 + stats.luck >= (condition.value ?? 10);
      default:
        return true;
    }
  },

  useItem: (itemId: string) => {
    const { inventory } = get();
    const item = inventory.find((i) => i.id === itemId);
    if (!item || !item.usable || !item.effects) return;
    get().applyEffects(item.effects);
    set({ inventory: inventory.filter((i) => i.id !== itemId) });
  },

  startCombat: (encounter: CombatEncounter) => {
    set({
      isInCombat: true,
      combatState: {
        encounter,
        enemyCurrentHp: encounter.enemyHp,
        playerTurn: true,
        log: [`⚔️ ${encounter.enemyName} apparaît !`],
      },
    });
  },

  playerAttack: () => {
    const { stats, combatState } = get();
    if (!combatState) return;

    const baseDmg = stats.attack - combatState.encounter.enemyDefense / 2;
    const variance = Math.floor(Math.random() * 6) - 2;
    const damage = Math.max(1, Math.floor(baseDmg + variance));
    const newEnemyHp = Math.max(0, combatState.enemyCurrentHp - damage);
    const log = [...combatState.log, `🗡️ Vous infligez ${damage} dégâts !`];

    if (newEnemyHp <= 0) {
      log.push(`🎉 ${combatState.encounter.enemyName} est vaincu !`);
      set({
        combatState: { ...combatState, enemyCurrentHp: 0, log },
      });
      setTimeout(() => get().endCombat(true), 1200);
    } else {
      set({
        combatState: { ...combatState, enemyCurrentHp: newEnemyHp, playerTurn: false, log },
      });
      setTimeout(() => get().enemyAttack(), 800);
    }
  },

  playerCastSpell: (spell: Spell) => {
    const { combatState } = get();
    if (!combatState) return;

    const log = [...combatState.log];

    if (spell.damage) {
      const damage = spell.damage;
      const newEnemyHp = Math.max(0, combatState.enemyCurrentHp - damage);
      log.push(`✨ ${spell.name} inflige ${damage} dégâts !`);

      if (newEnemyHp <= 0) {
        log.push(`🎉 ${combatState.encounter.enemyName} est vaincu !`);
        set({ combatState: { ...combatState, enemyCurrentHp: 0, log } });
        setTimeout(() => get().endCombat(true), 1200);
        return;
      }
      set({
        combatState: { ...combatState, enemyCurrentHp: newEnemyHp, playerTurn: false, log },
      });
    }

    if (spell.healing) {
      const { stats } = get();
      const healed = Math.min(spell.healing, stats.maxHp - stats.hp);
      set({ stats: { ...stats, hp: stats.hp + healed } });
      log.push(`💚 ${spell.name} restaure ${healed} PV !`);
      set({
        combatState: { ...combatState, playerTurn: false, log },
      });
    }

    setTimeout(() => get().enemyAttack(), 800);
  },

  enemyAttack: () => {
    const { stats, combatState } = get();
    if (!combatState) return;

    const baseDmg = combatState.encounter.enemyAttack - stats.defense / 2;
    const variance = Math.floor(Math.random() * 6) - 2;
    const damage = Math.max(1, Math.floor(baseDmg + variance));
    const newHp = Math.max(0, stats.hp - damage);
    const log = [
      ...combatState.log,
      `💥 ${combatState.encounter.enemyName} inflige ${damage} dégâts !`,
    ];

    set({
      stats: { ...stats, hp: newHp },
      combatState: { ...combatState, playerTurn: true, log },
    });

    if (newHp <= 0) {
      log.push(`💀 Vous avez été vaincu...`);
      set({ combatState: { ...combatState, log } });
      setTimeout(() => get().endCombat(false), 1200);
    }
  },

  endCombat: (victory: boolean) => {
    const { combatState } = get();
    if (!combatState) return;

    if (victory) {
      const effects: GameEffect[] = [{ type: 'add_xp', value: combatState.encounter.xpReward }];
      get().applyEffects(effects);

      if (combatState.encounter.lootItems) {
        for (const item of combatState.encounter.lootItems) {
          get().applyEffects([{ type: 'add_item', itemId: item.id }]);
        }
      }

      set({ isInCombat: false, combatState: null });
      get().goToScene(combatState.encounter.victoryScene);
    } else {
      set({ isInCombat: false, combatState: null });
      get().goToScene(combatState.encounter.defeatScene);
    }
  },

  levelUp: () => {
    const { stats } = get();
    if (stats.xp < stats.xpToNextLevel) return;

    const newStats: CharacterStats = {
      ...stats,
      level: stats.level + 1,
      xp: stats.xp - stats.xpToNextLevel,
      xpToNextLevel: Math.floor(stats.xpToNextLevel * 1.5),
      maxHp: stats.maxHp + 15,
      hp: Math.min(stats.hp + 15, stats.maxHp + 15),
      attack: stats.attack + 3,
      defense: stats.defense + 2,
      magic: stats.magic + 2,
      luck: stats.luck + 1,
    };

    set({
      stats: newStats,
      notifications: [...get().notifications, `⬆️ Niveau ${newStats.level} atteint !`],
    });

    // Recursive check for multiple level-ups
    if (newStats.xp >= newStats.xpToNextLevel) {
      setTimeout(() => get().levelUp(), 100);
    }
  },

  addNotification: (msg: string) => {
    set({ notifications: [...get().notifications, msg] });
  },

  clearNotifications: () => {
    set({ notifications: [] });
  },

  resetGame: () => {
    set({
      currentAdventure: null,
      currentScene: null,
      stats: { ...defaultStats },
      inventory: [],
      spells: [],
      flags: new Set<string>(),
      history: [],
      isInCombat: false,
      combatState: null,
      gameOver: false,
      notifications: [],
    });
  },
}));
