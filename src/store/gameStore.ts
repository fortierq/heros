import { create } from "zustand";
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
} from "@/types";

interface GameStore {
  // State
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
  notifications: string[];

  // Actions
  startAdventure: (adventure: Adventure) => void;
  goToScene: (sceneId: string) => void;
  makeChoice: (choiceIndex: number) => void;
  applyEffects: (effects: GameEffect[]) => void;
  checkCondition: (condition: Condition) => boolean;
  useItem: (itemId: string) => void;
  equipItem: (item: Item) => void;
  unequipItem: (slot: "weapon" | "armor") => void;
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
  mana: 50,
  maxMana: 50,
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
  equippedWeapon: null,
  equippedArmor: null,
  spells: [],
  flags: new Set<string>(),
  history: [],
  isInCombat: false,
  combatState: null,
  gameOver: false,
  notifications: [],

  startAdventure: (adventure: Adventure) => {
    // Auto-equip starting weapon and armor
    const startWeapon =
      adventure.startingItems.find((i) => i.type === "weapon") ?? null;
    const startArmor =
      adventure.startingItems.find((i) => i.type === "armor") ?? null;
    const remainingItems = adventure.startingItems.filter(
      (i) => i !== startWeapon && i !== startArmor,
    );

    set({
      currentAdventure: adventure,
      currentScene: adventure.scenes[adventure.startScene],
      stats: { ...adventure.startingStats },
      inventory: remainingItems,
      equippedWeapon: startWeapon,
      equippedArmor: startArmor,
      spells: [...adventure.startingSpells],
      flags: new Set<string>(),
      history: [adventure.startScene],
      isInCombat: false,
      combatState: null,
      gameOver: false,
      notifications: [],
    });

    // Apply equip effects
    if (startWeapon?.effects) {
      get().applyEffects(startWeapon.effects);
    }
    if (startArmor?.effects) {
      get().applyEffects(startArmor.effects);
    }

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

    // Mana regen on dialogue: recover 5 + magic/2 mana when entering a new scene
    if (!scene.combat) {
      const { stats } = get();
      const manaRegen = Math.floor(5 + stats.magic / 2);
      const newMana = Math.min(stats.maxMana, stats.mana + manaRegen);
      if (newMana > stats.mana) {
        set({ stats: { ...stats, mana: newMana } });
        get().addNotification(`+${newMana - stats.mana} Mana`);
      }
    }

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
        case "heal":
          newStats.hp = Math.min(
            newStats.maxHp,
            newStats.hp + (effect.value ?? 0),
          );
          notifications.push(`+${effect.value} PV`);
          break;
        case "damage":
          newStats.hp = Math.max(0, newStats.hp - (effect.value ?? 0));
          notifications.push(`-${effect.value} PV`);
          break;
        case "stat_boost":
          if (effect.target && effect.target in newStats) {
            (newStats[effect.target as keyof CharacterStats] as number) +=
              effect.value ?? 0;
            notifications.push(`${effect.target} +${effect.value}`);
          }
          break;
        case "add_item":
          if (effect.itemId && currentAdventure?.allItems[effect.itemId]) {
            const item = currentAdventure.allItems[effect.itemId];
            newInventory.push(item);
            notifications.push(`Objet obtenu : ${item.name} ${item.icon}`);
          }
          break;
        case "remove_item":
          if (effect.itemId) {
            newInventory = newInventory.filter((i) => i.id !== effect.itemId);
          }
          break;
        case "add_spell":
          if (effect.spellId && currentAdventure?.allSpells[effect.spellId]) {
            const spell = currentAdventure.allSpells[effect.spellId];
            if (!newSpells.find((s) => s.id === spell.id)) {
              newSpells.push(spell);
              notifications.push(`Sort appris : ${spell.name} ${spell.icon}`);
            }
          }
          break;
        case "add_xp": {
          newStats.xp += effect.value ?? 0;
          notifications.push(`+${effect.value} XP`);
          if (newStats.xp >= newStats.xpToNextLevel) {
            // Will level up after state update
            setTimeout(() => get().levelUp(), 100);
          }
          break;
        }
        case "set_flag":
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
      case "has_item":
        return inventory.some((i) => i.id === condition.itemId);
      case "has_spell":
        return spells.some((s) => s.id === condition.spellId);
      case "min_stat":
        if (condition.stat) {
          return (stats[condition.stat] as number) >= (condition.value ?? 0);
        }
        return false;
      case "has_flag":
        return condition.flag ? flags.has(condition.flag) : false;
      case "min_level":
        return stats.level >= (condition.value ?? 1);
      case "luck_check":
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

  equipItem: (item: Item) => {
    const { inventory, equippedWeapon, equippedArmor, stats } = get();
    const slot = item.type === "weapon" ? "weapon" : "armor";
    const currentEquipped = slot === "weapon" ? equippedWeapon : equippedArmor;

    // Remove new item from inventory
    let newInventory = inventory.filter((i) => i !== item);

    // Unequip current: reverse effects and put back in inventory
    let newStats = { ...stats };
    if (currentEquipped) {
      if (currentEquipped.effects) {
        for (const e of currentEquipped.effects) {
          if (e.type === "stat_boost" && e.target && e.target in newStats) {
            (newStats[e.target as keyof CharacterStats] as number) -=
              e.value ?? 0;
          }
        }
      }
      newInventory = [...newInventory, currentEquipped];
    }

    // Equip new: apply effects
    if (item.effects) {
      for (const e of item.effects) {
        if (e.type === "stat_boost" && e.target && e.target in newStats) {
          (newStats[e.target as keyof CharacterStats] as number) +=
            e.value ?? 0;
        }
      }
    }

    set({
      inventory: newInventory,
      stats: newStats,
      ...(slot === "weapon"
        ? { equippedWeapon: item }
        : { equippedArmor: item }),
    });
    get().addNotification(`${item.icon} ${item.name} équipé !`);
  },

  unequipItem: (slot: "weapon" | "armor") => {
    const { equippedWeapon, equippedArmor, inventory, stats } = get();
    const item = slot === "weapon" ? equippedWeapon : equippedArmor;
    if (!item) return;

    // Reverse effects
    const newStats = { ...stats };
    if (item.effects) {
      for (const e of item.effects) {
        if (e.type === "stat_boost" && e.target && e.target in newStats) {
          (newStats[e.target as keyof CharacterStats] as number) -=
            e.value ?? 0;
        }
      }
    }

    set({
      inventory: [...inventory, item],
      stats: newStats,
      ...(slot === "weapon"
        ? { equippedWeapon: null }
        : { equippedArmor: null }),
    });
    get().addNotification(`${item.icon} ${item.name} déséquipé`);
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
    const { stats, combatState, equippedWeapon } = get();
    if (!combatState) return;

    // Use equipped weapon bonus
    const weapon = equippedWeapon;
    const weaponDmg = weapon?.damage ?? 0;
    const baseAtk = stats.attack + weaponDmg;
    const enemyDef = combatState.encounter.enemyDefense;
    const reduced = Math.floor(enemyDef / 2);
    const baseDmg = baseAtk - reduced;
    const variance = Math.floor(Math.random() * 6) - 2;
    const damage = Math.max(1, Math.floor(baseDmg + variance));
    const newEnemyHp = Math.max(0, combatState.enemyCurrentHp - damage);

    const detail = weapon
      ? `🗡️ Vous attaquez avec ${weapon.name} : ${stats.attack} ATK + ${weaponDmg} (arme) - ${reduced} (déf.) ${variance >= 0 ? "+" : ""}${variance} = **${damage}** dégâts`
      : `🗡️ Vous attaquez : ${stats.attack} ATK - ${reduced} (déf.) ${variance >= 0 ? "+" : ""}${variance} = **${damage}** dégâts`;
    const log = [...combatState.log, detail];

    if (newEnemyHp <= 0) {
      log.push(`🎉 ${combatState.encounter.enemyName} est vaincu !`);
      set({
        combatState: { ...combatState, enemyCurrentHp: 0, log },
      });
      setTimeout(() => get().endCombat(true), 1200);
    } else {
      set({
        combatState: {
          ...combatState,
          enemyCurrentHp: newEnemyHp,
          playerTurn: false,
          log,
        },
      });
      setTimeout(() => get().enemyAttack(), 800);
    }
  },

  playerCastSpell: (spell: Spell) => {
    const { combatState, stats } = get();
    if (!combatState) return;

    // Check mana
    if (stats.mana < spell.manaCost) {
      get().addNotification(
        `Mana insuffisant ! (${stats.mana}/${spell.manaCost})`,
      );
      return;
    }

    // Consume mana
    const newMana = stats.mana - spell.manaCost;
    set({ stats: { ...stats, mana: newMana } });

    const log = [...combatState.log];
    log.push(
      `🔮 ${spell.name} (coût : ${spell.manaCost} mana, reste : ${newMana})`,
    );

    if (spell.damage) {
      const magicBonus = Math.floor(stats.magic / 3);
      const totalDamage = spell.damage + magicBonus;
      const newEnemyHp = Math.max(0, combatState.enemyCurrentHp - totalDamage);
      log.push(
        `✨ ${spell.damage} (sort) + ${magicBonus} (magie) = **${totalDamage}** dégâts`,
      );

      if (newEnemyHp <= 0) {
        log.push(`🎉 ${combatState.encounter.enemyName} est vaincu !`);
        set({ combatState: { ...combatState, enemyCurrentHp: 0, log } });
        setTimeout(() => get().endCombat(true), 1200);
        return;
      }
      set({
        combatState: {
          ...combatState,
          enemyCurrentHp: newEnemyHp,
          playerTurn: false,
          log,
        },
      });
    }

    if (spell.healing) {
      const { stats: currentStats } = get();
      const healed = Math.min(
        spell.healing,
        currentStats.maxHp - currentStats.hp,
      );
      set({ stats: { ...currentStats, hp: currentStats.hp + healed } });
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

    const { encounter } = combatState;

    // Check if enemy casts a spell
    if (encounter.enemySpells && encounter.enemySpells.length > 0) {
      for (const spell of encounter.enemySpells) {
        if (Math.random() < spell.chance) {
          const log = [...combatState.log];

          if (spell.damage) {
            const damage = spell.damage;
            const newHp = Math.max(0, stats.hp - damage);
            log.push(
              `🔮 ${encounter.enemyName} lance **${spell.name}** ${spell.icon} : **${damage}** dégâts !`,
            );

            set({
              stats: { ...stats, hp: newHp },
              combatState: { ...combatState, playerTurn: true, log },
            });

            if (newHp <= 0) {
              log.push(`💀 Vous avez été vaincu...`);
              set({ combatState: { ...combatState, log } });
              setTimeout(() => get().endCombat(false), 1200);
            }
            return;
          }

          if (spell.healing) {
            const healed = Math.min(
              spell.healing,
              encounter.enemyHp - combatState.enemyCurrentHp,
            );
            if (healed > 0) {
              const newEnemyHp = combatState.enemyCurrentHp + healed;
              log.push(
                `💚 ${encounter.enemyName} lance **${spell.name}** ${spell.icon} et récupère **${healed}** PV !`,
              );
              set({
                combatState: {
                  ...combatState,
                  enemyCurrentHp: newEnemyHp,
                  playerTurn: true,
                  log,
                },
              });
              return;
            }
          }
        }
      }
    }

    // Normal attack
    const baseDmg = encounter.enemyAttack - stats.defense / 2;
    const variance = Math.floor(Math.random() * 6) - 2;
    const damage = Math.max(1, Math.floor(baseDmg + variance));
    const newHp = Math.max(0, stats.hp - damage);
    const reduced = Math.floor(stats.defense / 2);
    const log = [
      ...combatState.log,
      `💥 ${encounter.enemyName} : ${encounter.enemyAttack} ATK - ${reduced} (déf.) ${variance >= 0 ? "+" : ""}${variance} = **${damage}** dégâts`,
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
      const effects: GameEffect[] = [
        { type: "add_xp", value: combatState.encounter.xpReward },
      ];
      get().applyEffects(effects);

      if (combatState.encounter.lootItems) {
        for (const item of combatState.encounter.lootItems) {
          get().applyEffects([{ type: "add_item", itemId: item.id }]);
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
      maxMana: stats.maxMana + 10,
      mana: Math.min(stats.mana + 10, stats.maxMana + 10),
      attack: stats.attack + 3,
      defense: stats.defense + 2,
      magic: stats.magic + 2,
      luck: stats.luck + 1,
    };

    set({
      stats: newStats,
      notifications: [
        ...get().notifications,
        `⬆️ Niveau ${newStats.level} atteint !`,
      ],
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
      equippedWeapon: null,
      equippedArmor: null,
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
