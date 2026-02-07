import { useGameStore } from '@/store/gameStore';
import { RotateCcw, Trophy, Skull } from 'lucide-react';

interface EndingScreenProps {
  onBackToMenu: () => void;
}

export default function EndingScreen({ onBackToMenu }: EndingScreenProps) {
  const { currentScene, stats, resetGame } = useGameStore();

  if (!currentScene?.isEnding) return null;

  const isVictory = currentScene.endingType === 'victory';

  const handleRestart = () => {
    resetGame();
    onBackToMenu();
  };

  return (
    <div className="text-center space-y-6 py-8 animate-fade-in-up">
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${isVictory ? 'bg-gold/20 animate-glow' : 'bg-red-900/20'}`}>
        {isVictory ? (
          <Trophy className="w-12 h-12 text-gold" />
        ) : (
          <Skull className="w-12 h-12 text-red-400" />
        )}
      </div>

      {/* Final Stats */}
      <div className="bg-gray-800/50 rounded-xl p-6 max-w-md mx-auto">
        <h3 className="font-medieval text-gold text-lg mb-4">Statistiques finales</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="text-gray-400">Niveau atteint</div>
          <div className="text-parchment font-bold">{stats.level}</div>
          <div className="text-gray-400">Points de vie</div>
          <div className="text-parchment font-bold">{stats.hp}/{stats.maxHp}</div>
          <div className="text-gray-400">Attaque</div>
          <div className="text-parchment font-bold">{stats.attack}</div>
          <div className="text-gray-400">Défense</div>
          <div className="text-parchment font-bold">{stats.defense}</div>
          <div className="text-gray-400">Magie</div>
          <div className="text-parchment font-bold">{stats.magic}</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={handleRestart}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gold/20 hover:bg-gold/30 text-gold rounded-xl border border-gold/30 transition-colors font-medieval"
        >
          <RotateCcw className="w-4 h-4" /> Retour aux aventures
        </button>
      </div>
    </div>
  );
}
