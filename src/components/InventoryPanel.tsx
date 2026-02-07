import { useGameStore } from '@/store/gameStore';
import { Package, Wand2 } from 'lucide-react';

export default function InventoryPanel() {
  const { inventory, spells, useItem } = useGameStore();

  return (
    <div className="bg-gray-900/80 border border-gray-700/50 rounded-xl p-4 space-y-4">
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
                className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-3 py-2 group"
              >
                <span className="text-lg">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-parchment truncate">{item.name}</p>
                  <p className="text-[10px] text-gray-500 truncate">{item.description}</p>
                </div>
                {item.usable && (
                  <button
                    onClick={() => useItem(item.id)}
                    className="text-[10px] px-2 py-1 bg-green-900/50 text-green-400 rounded hover:bg-green-800/50 transition-colors shrink-0"
                  >
                    Utiliser
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
                <span className="text-lg">{spell.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-parchment truncate">{spell.name}</p>
                  <p className="text-[10px] text-gray-500 truncate">{spell.description}</p>
                </div>
                <div className="text-[10px] text-purple-400 shrink-0">
                  {spell.damage && `⚔️${spell.damage}`}
                  {spell.healing && `💚${spell.healing}`}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
