import { useGameStore } from "@/store/gameStore";
import {
  Heart,
  Sword,
  Shield,
  Sparkles,
  Clover,
  Star,
  Droplets,
} from "lucide-react";

export default function CharacterSheet() {
  const { stats, equippedWeapon, equippedArmor } = useGameStore();

  const hpPercent = (stats.hp / stats.maxHp) * 100;
  const manaPercent = (stats.mana / stats.maxMana) * 100;
  const xpPercent = (stats.xp / stats.xpToNextLevel) * 100;
  const hpColor =
    hpPercent > 60
      ? "hp-bar-high"
      : hpPercent > 30
        ? "hp-bar-mid"
        : "hp-bar-low";

  return (
    <div className="bg-gray-900/80 border border-gray-700/50 rounded-xl p-4 space-y-3">
      {/* Level */}
      <div className="flex items-center justify-between">
        <span className="font-medieval text-gold font-bold text-lg flex items-center gap-2">
          <Star className="w-5 h-5 fill-gold text-gold" />
          Niveau {stats.level}
        </span>
      </div>

      {/* HP Bar */}
      <div>
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="flex items-center gap-1 text-red-400">
            <Heart className="w-3.5 h-3.5" /> PV
          </span>
          <span className="text-gray-400">
            {stats.hp}/{stats.maxHp}
          </span>
        </div>
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${hpColor}`}
            style={{ width: `${hpPercent}%` }}
          />
        </div>
      </div>

      {/* Mana Bar */}
      <div>
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="flex items-center gap-1 text-blue-400">
            <Droplets className="w-3.5 h-3.5" /> Mana
          </span>
          <span className="text-gray-400">
            {stats.mana}/{stats.maxMana}
          </span>
        </div>
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500"
            style={{ width: `${manaPercent}%` }}
          />
        </div>
      </div>

      {/* XP Bar */}
      <div>
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="flex items-center gap-1 text-purple-400">
            <Sparkles className="w-3.5 h-3.5" /> XP
          </span>
          <span className="text-gray-400">
            {stats.xp}/{stats.xpToNextLevel}
          </span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-500"
            style={{ width: `${xpPercent}%` }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <StatItem
          icon={<Sword className="w-3.5 h-3.5 text-orange-400" />}
          label="Attaque"
          value={stats.attack}
          bonus={equippedWeapon ? `+${equippedWeapon.damage ?? 0}` : undefined}
        />
        <StatItem
          icon={<Shield className="w-3.5 h-3.5 text-blue-400" />}
          label="Défense"
          value={stats.defense}
        />
        <StatItem
          icon={<Sparkles className="w-3.5 h-3.5 text-purple-400" />}
          label="Magie"
          value={stats.magic}
        />
        <StatItem
          icon={<Clover className="w-3.5 h-3.5 text-green-400" />}
          label="Chance"
          value={stats.luck}
        />
      </div>
    </div>
  );
}

function StatItem({
  icon,
  label,
  value,
  bonus,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  bonus?: string;
}) {
  return (
    <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-3 py-1.5">
      {icon}
      <span className="text-xs text-gray-400">{label}</span>
      <span className="text-xs font-bold text-parchment ml-auto">{value}</span>
      {bonus && <span className="text-[10px] text-orange-400">{bonus}</span>}
    </div>
  );
}
