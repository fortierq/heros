import { useState } from 'react';
import { useGameStore } from '@/store/gameStore';
import HomePage from '@/pages/HomePage';
import GamePage from '@/pages/GamePage';
import Notifications from '@/components/Notifications';
import type { Adventure } from '@/types';

type Page = 'home' | 'game';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const { startAdventure } = useGameStore();

  const handleSelectAdventure = (adventure: Adventure) => {
    startAdventure(adventure);
    setPage('game');
    window.scrollTo(0, 0);
  };

  const handleBackToMenu = () => {
    setPage('home');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Notifications />
      {page === 'home' && <HomePage onSelectAdventure={handleSelectAdventure} />}
      {page === 'game' && <GamePage onBackToMenu={handleBackToMenu} />}
    </>
  );
}
