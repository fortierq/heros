import { useGameStore } from '@/store/gameStore';
import { useEffect, useRef } from 'react';
import { Sword, Wand2, Heart } from 'lucide-react';

export default function CombatPanel() {
  const { stats, combatState, playerAttack, playerCastSpell, spells } = useGameStore();
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [combatState?.log]);

  if (!combatState) return null;

  const { encounter, enemyCurrentHp, playerTurn, log } = combatState;
  const enemyHpPercent = (enemyCurrentHp / encounter.enemyHp) * 100;
  const playerHpPercent = (stats.hp / stats.maxHp) * 100;

  return (
    <div className="bg-gradient-to-b from-red-950/30 to-gray-900/80 border border-red-900/50 rounded-xl p-5 space-y-4 animate-fade-in-up">
      <h3 className="font-medieval text-red-400 text-lg font-bold text-center flex items-center justify-center gap-2">
        <Sword className="w-5 h-5" /> COMBAT <Sword className="w-5 h-5" />
      </h3>

      {/* Enemy & Player HP side by side */}
      <div className="grid grid-cols-2 gap-4">
        {/* Enemy */}
        <div className="bg-gray-800/60 rounded-lg p-3">
          <div className="text-center mb-2">
            <span className="text-3xl block mb-1">{encounter.enemyIcon}</span>
            <span className="text-sm font-bold text-red-300">{encounter.enemyName}</span>
          </div>
          <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500"
              style={{ width: `${enemyHpPercent}%` }}
            />
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-1">
            {enemyCurrentHp}/{encounter.enemyHp} PV
          </p>
        </div>

        {/* Player */}
        <div className="bg-gray-800/60 rounded-lg p-3">
          <div className="text-center mb-2">
            <span className="text-3xl block mb-1">🧙</span>
            <span className="text-sm font-bold text-blue-300">Vous</span>
          </div>
          <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                playerHpPercent > 60 ? 'hp-bar-high' : playerHpPercent > 30 ? 'hp-bar-mid' : 'hp-bar-low'
              }`}
              style={{ width: `${playerHpPercent}%` }}
            />
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-1">
            {stats.hp}/{stats.maxHp} PV
          </p>
        </div>
      </div>

      {/* Combat Log */}
      <div className="combat-log bg-gray-950/60 rounded-lg p-3 h-32 overflow-y-auto space-y-1 border border-gray-800">
        {log.map((entry, idx) => (
          <p key={idx} className="text-xs text-gray-300 animate-slide-in" style={{ animationDelay: `${idx * 50}ms` }}>
            {entry}
          </p>
        ))}
        <div ref={logEndRef} />
      </div>

      {/* Actions */}
      {playerTurn && enemyCurrentHp > 0 && stats.hp > 0 && (
        <div className="space-y-2">
          <p className="text-xs text-gold text-center font-medium">— Votre tour —</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={playerAttack}
              className="flex items-center gap-2 px-4 py-2 bg-red-900/60 hover:bg-red-800/60 text-red-200 rounded-lg text-sm transition-colors border border-red-800/50"
            >
              <Sword className="w-4 h-4" /> Attaquer
            </button>

            {spells.filter(s => s.damage).map((spell) => (
              <button
                key={spell.id}
                onClick={() => playerCastSpell(spell)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-900/60 hover:bg-purple-800/60 text-purple-200 rounded-lg text-sm transition-colors border border-purple-800/50"
              >
                <Wand2 className="w-4 h-4" /> {spell.icon} {spell.name}
              </button>
            ))}

            {spells.filter(s => s.healing).map((spell) => (
              <button
                key={spell.id}
                onClick={() => playerCastSpell(spell)}
                className="flex items-center gap-2 px-4 py-2 bg-green-900/60 hover:bg-green-800/60 text-green-200 rounded-lg text-sm transition-colors border border-green-800/50"
              >
                <Heart className="w-4 h-4" /> {spell.icon} {spell.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
