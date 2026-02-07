import { adventures } from '@/data';
import AdventureCard from '@/components/AdventureCard';
import type { Adventure } from '@/types';
import { BookOpen, Sparkles } from 'lucide-react';

interface HomePageProps {
  onSelectAdventure: (adventure: Adventure) => void;
}

export default function HomePage({ onSelectAdventure }: HomePageProps) {
  return (
    <div className="min-h-screen bg-pattern-dots">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>3 aventures disponibles</span>
          </div>

          <h1 className="font-medieval text-5xl md:text-7xl font-black text-parchment mb-4 leading-tight">
            Le Livre Dont Vous Êtes
            <br />
            <span className="text-gold">le Héros</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-body">
            Plongez dans des mondes extraordinaires où chaque choix façonne votre destin.
            Combattez des créatures légendaires, récoltez des objets magiques et montez de niveau
            au fil d'aventures palpitantes.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">⚔️ Combats épiques</span>
            <span className="flex items-center gap-1">📦 Objets & sorts</span>
            <span className="flex items-center gap-1">⬆️ Progression</span>
            <span className="flex items-center gap-1">🔀 Choix multiples</span>
          </div>
        </div>
      </header>

      {/* Adventures Grid */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-6 h-6 text-gold" />
          <h2 className="font-medieval text-2xl text-parchment">Choisissez votre aventure</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure) => (
            <AdventureCard
              key={adventure.id}
              adventure={adventure}
              onSelect={onSelectAdventure}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-600">
        <p className="font-medieval">
          Le Livre Dont Vous Êtes le Héros — Créé avec ❤️ et ⚔️
        </p>
      </footer>
    </div>
  );
}
