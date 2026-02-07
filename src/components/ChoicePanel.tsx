import { useGameStore } from '@/store/gameStore';
import { Lock, ChevronRight } from 'lucide-react';

export default function ChoicePanel() {
  const { currentScene, makeChoice, checkCondition, isInCombat, gameOver } = useGameStore();
  if (!currentScene || isInCombat) return null;

  const choices = currentScene.choices.filter((c) => !c.hidden);

  if (choices.length === 0 && !gameOver) return null;

  return (
    <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
      {!gameOver && (
        <h3 className="font-medieval text-lg text-gold/80 mb-2">Que faites-vous ?</h3>
      )}
      <div className="space-y-2">
        {choices.map((choice, idx) => {
          const conditionMet = choice.condition ? checkCondition(choice.condition) : true;

          return (
            <button
              key={idx}
              onClick={() => conditionMet && makeChoice(idx)}
              disabled={!conditionMet}
              className={`
                w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 group
                ${
                  conditionMet
                    ? 'bg-gray-800/60 border-gray-700/50 hover:bg-gray-700/60 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 cursor-pointer'
                    : 'bg-gray-900/40 border-gray-800/30 opacity-50 cursor-not-allowed'
                }
              `}
            >
              <div className="flex items-start gap-3">
                {conditionMet ? (
                  <ChevronRight className="w-5 h-5 text-gold/60 mt-0.5 shrink-0 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                ) : (
                  <Lock className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />
                )}
                <div>
                  <p className={`text-sm md:text-base ${conditionMet ? 'text-parchment group-hover:text-gold' : 'text-gray-600'} transition-colors`}>
                    {choice.text}
                  </p>
                  {!conditionMet && choice.condition && (
                    <p className="text-[10px] text-gray-600 mt-1">
                      {choice.condition.type === 'has_item' && '🔒 Nécessite un objet spécial'}
                      {choice.condition.type === 'has_spell' && '🔒 Nécessite un sort spécial'}
                      {choice.condition.type === 'has_flag' && '🔒 Nécessite une connaissance spéciale'}
                      {choice.condition.type === 'min_level' && `🔒 Nécessite le niveau ${choice.condition.value}`}
                      {choice.condition.type === 'min_stat' && '🔒 Statistique insuffisante'}
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
