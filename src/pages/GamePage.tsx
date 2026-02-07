import { useGameStore } from '@/store/gameStore';
import CharacterSheet from '@/components/CharacterSheet';
import InventoryPanel from '@/components/InventoryPanel';
import StoryPanel from '@/components/StoryPanel';
import ChoicePanel from '@/components/ChoicePanel';
import CombatPanel from '@/components/CombatPanel';
import EndingScreen from '@/components/EndingScreen';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface GamePageProps {
  onBackToMenu: () => void;
}

export default function GamePage({ onBackToMenu }: GamePageProps) {
  const { currentAdventure, currentScene, isInCombat, gameOver, resetGame } = useGameStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!currentAdventure || !currentScene) return null;

  const handleBack = () => {
    if (confirm('Quitter l\'aventure ? Votre progression sera perdue.')) {
      resetGame();
      onBackToMenu();
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: currentAdventure.themeColors.bg }}>
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-gray-900/90 backdrop-blur-md border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Quitter</span>
          </button>

          <h1 className="font-medieval text-lg md:text-xl font-bold text-center" style={{ color: currentAdventure.themeColors.accent }}>
            {currentAdventure.title}
          </h1>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-gray-400 hover:text-gold transition-colors p-1"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full flex">
        {/* Story Area */}
        <main className="flex-1 px-4 md:px-8 py-6 max-w-3xl mx-auto lg:mx-0 lg:max-w-none lg:pr-0">
          <div className="max-w-2xl">
            {gameOver ? (
              <>
                <StoryPanel />
                <div className="mt-6">
                  <EndingScreen onBackToMenu={onBackToMenu} />
                </div>
              </>
            ) : (
              <>
                <StoryPanel />

                {isInCombat ? (
                  <div className="mt-6">
                    <CombatPanel />
                  </div>
                ) : (
                  <div className="mt-6">
                    <ChoicePanel />
                  </div>
                )}
              </>
            )}
          </div>
        </main>

        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-80 border-l border-gray-800/50 p-4 space-y-4 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <CharacterSheet />
          <InventoryPanel />
        </aside>

        {/* Sidebar - Mobile Drawer */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-gray-900 border-l border-gray-800 p-4 space-y-4 overflow-y-auto animate-slide-in">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-medieval text-gold text-lg">Personnage</h2>
                <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-gold">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <CharacterSheet />
              <InventoryPanel />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
