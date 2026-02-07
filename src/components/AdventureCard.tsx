import type { Adventure } from "@/types";
import { Sword, Rocket, Landmark } from "lucide-react";

interface AdventureCardProps {
  adventure: Adventure;
  onSelect: (adventure: Adventure) => void;
}

const themeIcons: Record<string, React.ReactNode> = {
  fantasy: <Sword className="w-6 h-6" />,
  scifi: <Rocket className="w-6 h-6" />,
  mythologie: <Landmark className="w-6 h-6" />,
};

const themeBadgeColors: Record<string, string> = {
  fantasy: "bg-green-900/60 text-green-300 border-green-700",
  scifi: "bg-blue-900/60 text-blue-300 border-blue-700",
  mythologie: "bg-purple-900/60 text-purple-300 border-purple-700",
};

const themeLabels: Record<string, string> = {
  fantasy: "Fantasy",
  scifi: "Science-Fiction",
  mythologie: "Mythologie",
};

export default function AdventureCard({
  adventure,
  onSelect,
}: AdventureCardProps) {
  return (
    <button
      onClick={() => onSelect(adventure)}
      className="adventure-card group w-full text-left rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800/80 to-gray-900/90 border border-gray-700/50 hover:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
    >
      {/* Cover Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={
            adventure.coverImage.startsWith("http")
              ? adventure.coverImage
              : `${import.meta.env.BASE_URL}${adventure.coverImage}`
          }
          alt={adventure.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

        {/* Theme Badge */}
        <div
          className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium ${themeBadgeColors[adventure.theme]}`}
        >
          {themeIcons[adventure.theme]}
          <span>{themeLabels[adventure.theme]}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-medieval text-2xl font-bold text-parchment group-hover:text-gold transition-colors mb-1">
          {adventure.title}
        </h3>
        <p className="text-sm text-gold/70 font-medium mb-3">
          {adventure.subtitle}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {adventure.description}
        </p>

        {/* Stats Preview */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span>❤️ {adventure.startingStats.hp} PV</span>
          <span>⚔️ {adventure.startingStats.attack} ATK</span>
          <span>🛡️ {adventure.startingStats.defense} DEF</span>
          <span>✨ {adventure.startingStats.magic} MAG</span>
        </div>

        {/* CTA */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-gold font-medieval text-sm tracking-wide group-hover:tracking-wider transition-all">
            Commencer l'aventure →
          </span>
          <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
            <span className="text-lg">
              {adventure.theme === "fantasy"
                ? "⚔️"
                : adventure.theme === "scifi"
                  ? "🚀"
                  : "⚡"}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
