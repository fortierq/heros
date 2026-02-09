import { useGameStore } from "@/store/gameStore";
import { Package, Wand2, Swords, ShieldCheck } from "lucide-react";

export default function InventoryPanel() {
  const {
    inventory,
    spells,
    useItem,
    equippedWeapon,
    equippedArmor,
    equipItem,
    unequipItem,
    isInCombat,
    newItems,
    markItemSeen,
  } = useGameStore();

  return (
    <div className="bg-gray-900/80 border border-gray-700/50 rounded-xl p-4 space-y-4">
      {/* Equipment Slots */}
      <div>
        <h3 className="font-medieval text-orange-400 text-sm font-bold flex items-center gap-2 mb-2">
          <Swords className="w-4 h-4" /> Équipement
        </h3>
        <div className="space-y-1.5">
          {/* Weapon Slot */}
          <div className="flex items-center gap-2 bg-gray-800/70 rounded-lg px-3 py-2 border border-orange-900/30">
            <span className="text-[10px] text-orange-400 font-bold w-10 shrink-0">
              Arme
            </span>
            {equippedWeapon ? (
              <>
                <span className="text-lg shrink-0">{equippedWeapon.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-parchment">
                    {equippedWeapon.name}
                    <span className="text-orange-400 font-normal ml-1">
                      (⚔️+{equippedWeapon.damage ?? 0})
                    </span>
                  </p>
                </div>
                {!isInCombat && (
                  <button
                    onClick={() => unequipItem("weapon")}
                    className="text-[10px] px-2 py-1 bg-gray-700/50 text-gray-400 rounded hover:bg-gray-600/50 transition-colors shrink-0"
                  >
                    Retirer
                  </button>
                )}
              </>
            ) : (
              <span className="text-[10px] text-gray-600 italic">— Vide —</span>
            )}
          </div>

          {/* Armor Slot */}
          <div className="flex items-center gap-2 bg-gray-800/70 rounded-lg px-3 py-2 border border-blue-900/30">
            <span className="text-[10px] text-blue-400 font-bold w-10 shrink-0">
              Armure
            </span>
            {equippedArmor ? (
              <>
                <span className="text-lg shrink-0">{equippedArmor.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-parchment">
                    {equippedArmor.name}
                    {equippedArmor.effects?.map((e, i) => (
                      <span key={i} className="text-blue-400 font-normal ml-1">
                        (🛡️+{e.value})
                      </span>
                    ))}
                  </p>
                </div>
                {!isInCombat && (
                  <button
                    onClick={() => unequipItem("armor")}
                    className="text-[10px] px-2 py-1 bg-gray-700/50 text-gray-400 rounded hover:bg-gray-600/50 transition-colors shrink-0"
                  >
                    Retirer
                  </button>
                )}
              </>
            ) : (
              <span className="text-[10px] text-gray-600 italic">— Vide —</span>
            )}
          </div>
        </div>
      </div>

      {/* Inventory */}
      <div>
        <h3 className="font-medieval text-gold text-sm font-bold flex items-center gap-2 mb-2">
          <Package className="w-4 h-4" /> Inventaire
        </h3>
        {inventory.length === 0 ? (
          <p className="text-xs text-gray-500 italic">Aucun objet</p>
        ) : (
          <div className="space-y-1.5">
            {inventory.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onMouseEnter={() => markItemSeen(item.id)}
                className={`flex items-center gap-2 bg-gray-800/50 rounded-lg px-3 py-2 group relative ${newItems.has(item.id) ? "ring-1 ring-gold shadow-[0_0_8px_rgba(212,160,23,0.3)]" : ""}`}
              >
                {newItems.has(item.id) && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full animate-pulse shadow-sm" />
                )}
                <span className="text-lg shrink-0">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-parchment">
                    {item.name}
                    {item.type === "weapon" && item.damage != null && (
                      <span className="text-orange-400 font-normal ml-1">
                        (⚔️+{item.damage})
                      </span>
                    )}
                    {item.type === "armor" &&
                      item.effects?.map((e, i) => (
                        <span
                          key={i}
                          className="text-blue-400 font-normal ml-1"
                        >
                          (🛡️+{e.value})
                        </span>
                      ))}
                    {item.type === "ring" &&
                      item.effects?.map((e, i) => (
                        <span
                          key={i}
                          className="text-yellow-400 font-normal ml-1"
                        >
                          (
                          {e.target === "attack"
                            ? "⚔️"
                            : e.target === "defense"
                              ? "🛡️"
                              : "✨"}
                          +{e.value})
                        </span>
                      ))}
                  </p>
                  <p className="text-[10px] text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {item.usable && (
                  <button
                    onClick={() => useItem(item.id)}
                    className="text-[10px] px-2 py-1 bg-green-900/50 text-green-400 rounded hover:bg-green-800/50 transition-colors shrink-0"
                  >
                    Utiliser
                  </button>
                )}
                {(item.type === "weapon" || item.type === "armor") &&
                  !isInCombat && (
                    <button
                      onClick={() => equipItem(item)}
                      className="text-[10px] px-2 py-1 bg-orange-900/50 text-orange-400 rounded hover:bg-orange-800/50 transition-colors shrink-0"
                    >
                      Équiper
                    </button>
                  )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Spells */}
      <div>
        <h3 className="font-medieval text-purple-400 text-sm font-bold flex items-center gap-2 mb-2">
          <Wand2 className="w-4 h-4" /> Sorts
        </h3>
        {spells.length === 0 ? (
          <p className="text-xs text-gray-500 italic">Aucun sort appris</p>
        ) : (
          <div className="space-y-1.5">
            {spells.map((spell) => (
              <div
                key={spell.id}
                className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-3 py-2"
              >
                <span className="text-lg shrink-0">{spell.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-parchment">
                    {spell.name}
                  </p>
                  <p className="text-[10px] text-gray-500 leading-relaxed">
                    {spell.description}
                  </p>
                </div>
                <div className="text-[10px] text-purple-400 shrink-0 text-right">
                  <div>
                    {spell.damage && `⚔️${spell.damage}`}
                    {spell.healing && `💚${spell.healing}`}
                  </div>
                  <div className="text-blue-400">🔮{spell.manaCost}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
