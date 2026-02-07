import { useGameStore } from "@/store/gameStore";
import { useEffect, useRef, useState } from "react";
import { Sword, Wand2, Heart, HelpCircle } from "lucide-react";

export default function CombatPanel() {
  const {
    stats,
    combatState,
    playerAttack,
    playerCastSpell,
    spells,
    equippedWeapon,
  } = useGameStore();
  const logEndRef = useRef<HTMLDivElement>(null);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [combatState?.log]);

  if (!combatState) return null;

  const { encounter, enemyCurrentHp, playerTurn, log } = combatState;
  const enemyHpPercent = (enemyCurrentHp / encounter.enemyHp) * 100;
  const playerHpPercent = (stats.hp / stats.maxHp) * 100;

  return (
    <div className="bg-gradient-to-b from-red-950/30 to-gray-900/80 border border-red-900/50 rounded-xl p-5 space-y-4 animate-fade-in-up">
      <div className="flex items-center justify-center gap-2">
        <h3 className="font-medieval text-red-400 text-lg font-bold text-center flex items-center justify-center gap-2">
          <Sword className="w-5 h-5" /> COMBAT <Sword className="w-5 h-5" />
        </h3>
        <button
          onClick={() => setShowHelp(!showHelp)}
          className="text-gray-500 hover:text-gold transition-colors"
          title="Aide combat"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>

      {showHelp && (
        <div className="bg-gray-800/80 border border-gold/20 rounded-lg p-3 text-[11px] text-gray-300 space-y-1.5">
          <p className="text-gold font-semibold text-xs">
            ⚔️ Système de combat
          </p>
          <p>
            <strong className="text-parchment">Attaque physique :</strong> ATK +
            dégâts arme − déf. ennemi/2 ± aléa (−2 à +3)
          </p>
          <p>
            <strong className="text-parchment">Sort offensif :</strong> dégâts
            du sort + magie/3 (coûte du mana)
          </p>
          <p>
            <strong className="text-parchment">Sort de soin :</strong> restaure
            des PV (coûte du mana)
          </p>
          <p>
            <strong className="text-parchment">Attaque ennemie :</strong> ATK
            ennemi − votre déf./2 ± aléa
          </p>
          <p>
            <strong className="text-parchment">Sorts ennemis :</strong> certains
            ennemis lancent des sorts (dégâts ou soin) au lieu d'attaquer
          </p>
          <p>
            <strong className="text-parchment">Mana :</strong> se régénère entre
            les scènes (5 + magie/2)
          </p>
          <p className="text-gray-500 italic">
            Équipez des armes pour augmenter vos dégâts et des armures pour
            réduire ceux reçus.
          </p>
        </div>
      )}

      {/* Enemy & Player HP side by side */}
      <div className="grid grid-cols-2 gap-4">
        {/* Enemy */}
        <div className="bg-gray-800/60 rounded-lg p-3">
          <div className="text-center mb-2">
            <span className="text-3xl block mb-1">{encounter.enemyIcon}</span>
            <span className="text-sm font-bold text-red-300">
              {encounter.enemyName}
            </span>
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
          {encounter.enemySpells && encounter.enemySpells.length > 0 && (
            <div className="flex flex-wrap gap-1 justify-center mt-1">
              {encounter.enemySpells.map((s, i) => (
                <span
                  key={i}
                  className="text-[9px] bg-purple-900/40 text-purple-300 px-1.5 py-0.5 rounded"
                >
                  {s.icon} {s.name}
                </span>
              ))}
            </div>
          )}
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
                playerHpPercent > 60
                  ? "hp-bar-high"
                  : playerHpPercent > 30
                    ? "hp-bar-mid"
                    : "hp-bar-low"
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
          <p
            key={idx}
            className="text-xs text-gray-300 animate-slide-in"
            style={{ animationDelay: `${idx * 50}ms` }}
            dangerouslySetInnerHTML={{
              __html: entry.replace(
                /\*\*(.+?)\*\*/g,
                '<strong class="text-parchment">$1</strong>',
              ),
            }}
          />
        ))}
        <div ref={logEndRef} />
      </div>

      {/* Actions */}
      {playerTurn && enemyCurrentHp > 0 && stats.hp > 0 && (
        <div className="space-y-2">
          <p className="text-xs text-gold text-center font-medium">
            — Votre tour —
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {(() => {
              const weapon = equippedWeapon;
              return (
                <button
                  onClick={playerAttack}
                  className="flex items-center gap-2 px-4 py-2 bg-red-900/60 hover:bg-red-800/60 text-red-200 rounded-lg text-sm transition-colors border border-red-800/50"
                >
                  <Sword className="w-4 h-4" /> Attaquer
                  {weapon && (
                    <span className="text-[10px] text-red-400 ml-1">
                      ({weapon.name} +{weapon.damage ?? 0})
                    </span>
                  )}
                </button>
              );
            })()}

            {spells
              .filter((s) => s.damage)
              .map((spell) => {
                const canCast = stats.mana >= spell.manaCost;
                return (
                  <button
                    key={spell.id}
                    onClick={() => canCast && playerCastSpell(spell)}
                    disabled={!canCast}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors border ${
                      canCast
                        ? "bg-purple-900/60 hover:bg-purple-800/60 text-purple-200 border-purple-800/50"
                        : "bg-gray-900/40 text-gray-600 border-gray-800/30 cursor-not-allowed opacity-50"
                    }`}
                  >
                    <Wand2 className="w-4 h-4" /> {spell.icon} {spell.name}
                    <span className="text-[10px] ml-1">
                      ({spell.manaCost} mana)
                    </span>
                  </button>
                );
              })}

            {spells
              .filter((s) => s.healing)
              .map((spell) => {
                const canCast = stats.mana >= spell.manaCost;
                return (
                  <button
                    key={spell.id}
                    onClick={() => canCast && playerCastSpell(spell)}
                    disabled={!canCast}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors border ${
                      canCast
                        ? "bg-green-900/60 hover:bg-green-800/60 text-green-200 border-green-800/50"
                        : "bg-gray-900/40 text-gray-600 border-gray-800/30 cursor-not-allowed opacity-50"
                    }`}
                  >
                    <Heart className="w-4 h-4" /> {spell.icon} {spell.name}
                    <span className="text-[10px] ml-1">
                      ({spell.manaCost} mana)
                    </span>
                  </button>
                );
              })}
          </div>
          <p className="text-[10px] text-center text-blue-400">
            🔮 Mana : {stats.mana}/{stats.maxMana}
          </p>
        </div>
      )}
    </div>
  );
}
