import { useGameStore } from "@/store/gameStore";
import CharacterSheet from "@/components/CharacterSheet";
import InventoryPanel from "@/components/InventoryPanel";
import StoryPanel from "@/components/StoryPanel";
import ChoicePanel from "@/components/ChoicePanel";
import CombatPanel from "@/components/CombatPanel";
import MapPanel from "@/components/MapPanel";
import RandomEventModal from "@/components/RandomEventModal";
import EndingScreen from "@/components/EndingScreen";
import {
  ArrowLeft,
  Menu,
  X,
  Map as MapIcon,
  Heart,
  Droplets,
  Star,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface GamePageProps {
  onBackToMenu: () => void;
}

export default function GamePage({ onBackToMenu }: GamePageProps) {
  const {
    currentAdventure,
    currentScene,
    isInCombat,
    gameOver,
    resetGame,
    showMap,
    toggleMap,
    stats,
  } = useGameStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to top when scene changes
  useEffect(() => {
    storyRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentScene?.id]);

  // Close sidebar on scene change
  useEffect(() => {
    setSidebarOpen(false);
  }, [currentScene?.id]);

  if (!currentAdventure || !currentScene) return null;

  const handleBack = () => {
    if (confirm("Quitter l'aventure ? Votre progression sera perdue.")) {
      resetGame();
      onBackToMenu();
    }
  };

  const hpPercent = (stats.hp / stats.maxHp) * 100;
  const manaPercent = (stats.mana / stats.maxMana) * 100;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: currentAdventure.themeColors.bg }}
    >
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-gray-400 hover:text-gold transition-colors text-sm p-1.5 rounded hover:bg-gray-800/50"
              title="Quitter l'aventure"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            {currentAdventure.mapLocations && (
              <button
                onClick={toggleMap}
                className={`flex items-center gap-1.5 text-sm px-2.5 py-1.5 rounded border transition-colors ${
                  showMap
                    ? "text-gold bg-gold/10 border-gold/40"
                    : "text-gold/70 border-gold/20 hover:text-gold hover:bg-gold/10"
                }`}
              >
                <MapIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Carte</span>
              </button>
            )}
          </div>

          {/* Compact HP/Mana in header - always visible */}
          <div className="flex items-center gap-3 flex-1 justify-center max-w-xs">
            <div className="flex items-center gap-1.5 flex-1">
              <Heart className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden flex-1">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    hpPercent > 60
                      ? "hp-bar-high"
                      : hpPercent > 30
                        ? "hp-bar-mid"
                        : "hp-bar-low"
                  }`}
                  style={{ width: `${hpPercent}%` }}
                />
              </div>
              <span className="text-[10px] text-gray-400 w-8 text-right shrink-0">
                {stats.hp}
              </span>
            </div>
            <div className="flex items-center gap-1.5 flex-1">
              <Droplets className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden flex-1">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500"
                  style={{ width: `${manaPercent}%` }}
                />
              </div>
              <span className="text-[10px] text-gray-400 w-8 text-right shrink-0">
                {stats.mana}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <Star className="w-3 h-3 text-gold fill-gold" />
              <span className="text-[10px] text-gold">{stats.level}</span>
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-gray-400 hover:text-gold transition-colors p-1.5 rounded hover:bg-gray-800/50 shrink-0"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full flex">
        {/* Story Area */}
        <main
          ref={storyRef}
          className="flex-1 px-4 md:px-8 py-6 max-w-3xl mx-auto lg:mx-0 lg:max-w-none lg:pr-0 overflow-y-auto"
        >
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
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-gray-900 border-l border-gray-800 p-4 space-y-4 overflow-y-auto animate-slide-in">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-medieval text-gold text-lg">Personnage</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-gray-400 hover:text-gold"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <CharacterSheet />
              <InventoryPanel />
            </div>
          </div>
        )}
      </div>

      {showMap && <MapPanel />}
      <RandomEventModal />
    </div>
  );
}
