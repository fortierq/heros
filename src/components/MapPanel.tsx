import { useGameStore } from "@/store/gameStore";
import { X, MapPin } from "lucide-react";
import type { MapLocation } from "@/types";

export default function MapPanel() {
  const {
    currentAdventure,
    discoveredLocations,
    currentMapLocation,
    travelToLocation,
    toggleMap,
  } = useGameStore();

  if (!currentAdventure?.mapLocations) return null;

  const locations = currentAdventure.mapLocations;
  const currentLoc = locations.find((l) => l.id === currentMapLocation);

  const isConnected = (locId: string) =>
    currentLoc?.connectedTo.includes(locId) ?? false;
  const isDiscovered = (locId: string) => discoveredLocations.has(locId);
  const isCurrent = (locId: string) => locId === currentMapLocation;

  const handleClick = (loc: MapLocation) => {
    if (isCurrent(loc.id) || !isDiscovered(loc.id) || !isConnected(loc.id))
      return;
    travelToLocation(loc.id);
  };

  // Collect unique paths between discovered locations
  const paths: [MapLocation, MapLocation][] = [];
  const pathSet = new Set<string>();
  for (const loc of locations) {
    for (const connId of loc.connectedTo) {
      const conn = locations.find((l) => l.id === connId);
      if (!conn) continue;
      const key = [loc.id, conn.id].sort().join("-");
      if (pathSet.has(key)) continue;
      pathSet.add(key);
      if (isDiscovered(loc.id) && isDiscovered(conn.id)) {
        paths.push([loc, conn]);
      }
    }
  }

  // Decorative trees
  const trees = [
    { x: 8, y: 15 },
    { x: 92, y: 20 },
    { x: 5, y: 50 },
    { x: 95, y: 55 },
    { x: 12, y: 85 },
    { x: 88, y: 90 },
    { x: 45, y: 5 },
    { x: 55, y: 95 },
    { x: 3, y: 72 },
    { x: 97, y: 40 },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) toggleMap();
      }}
    >
      <div className="relative w-full max-w-3xl mx-4 bg-gray-900/95 border border-gold/30 rounded-2xl overflow-hidden shadow-2xl shadow-gold/10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800/80">
          <h2 className="font-medieval text-gold text-xl flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Carte de la Forêt des Ombres
          </h2>
          <button
            onClick={toggleMap}
            className="text-gray-400 hover:text-gold transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Map SVG */}
        <div className="relative p-4 md:p-6">
          <svg
            viewBox="-2 -2 104 104"
            className="w-full h-auto"
            style={{ maxHeight: "65vh" }}
          >
            <defs>
              <radialGradient id="mapBg" cx="50%" cy="50%" r="65%">
                <stop offset="0%" stopColor="#152015" />
                <stop offset="100%" stopColor="#080d08" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="0.6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowStrong">
                <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background */}
            <rect
              x="-2"
              y="-2"
              width="104"
              height="104"
              fill="url(#mapBg)"
              rx="2"
            />

            {/* Decorative forest outline */}
            <rect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="none"
              stroke="#1a472a22"
              strokeWidth="0.3"
              rx="1"
            />

            {/* Decorative trees */}
            {trees.map((t, i) => (
              <text
                key={`tree-${i}`}
                x={t.x}
                y={t.y}
                textAnchor="middle"
                fontSize="3"
                opacity="0.15"
              >
                🌲
              </text>
            ))}

            {/* Paths between locations */}
            {paths.map(([from, to], i) => {
              const isActivePath =
                (isCurrent(from.id) && isConnected(to.id)) ||
                (isCurrent(to.id) && isConnected(from.id));
              return (
                <line
                  key={`path-${i}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={isActivePath ? "#d4a01766" : "#d4a01722"}
                  strokeWidth={isActivePath ? "0.4" : "0.25"}
                  strokeDasharray={isActivePath ? "1.5,0.8" : "1,1.5"}
                />
              );
            })}

            {/* Location nodes */}
            {locations.map((loc) => {
              if (!isDiscovered(loc.id)) return null;
              const current = isCurrent(loc.id);
              const connected = isConnected(loc.id) && !current;
              const clickable = connected;

              return (
                <g
                  key={loc.id}
                  onClick={() => clickable && handleClick(loc)}
                  className={
                    clickable ? "cursor-pointer" : current ? "" : "opacity-50"
                  }
                  filter={
                    current ? "url(#glowStrong)" : connected ? "url(#glow)" : ""
                  }
                >
                  {/* Background circle */}
                  <circle
                    cx={loc.x}
                    cy={loc.y}
                    r="3.5"
                    fill={
                      current ? "#d4a017" : connected ? "#1a472a" : "#1a1a2e"
                    }
                    stroke={
                      current ? "#ffd700" : connected ? "#d4a017" : "#333"
                    }
                    strokeWidth="0.4"
                  />

                  {/* Pulse animation for current */}
                  {current && (
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r="4"
                      fill="none"
                      stroke="#d4a017"
                      strokeWidth="0.25"
                    >
                      <animate
                        attributeName="r"
                        values="4;5.5;4"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.8;0.1;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}

                  {/* Icon */}
                  <text
                    x={loc.x}
                    y={loc.y + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="3.2"
                    className="select-none pointer-events-none"
                  >
                    {loc.icon}
                  </text>

                  {/* Label */}
                  <text
                    x={loc.x}
                    y={loc.y + 6}
                    textAnchor="middle"
                    fontSize="1.6"
                    fill={current ? "#ffd700" : connected ? "#d4a017" : "#666"}
                    fontFamily="Cinzel, serif"
                    className="select-none pointer-events-none"
                  >
                    {loc.name}
                  </text>

                  {/* Clickable hover target (larger invisible circle) */}
                  {clickable && (
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r="5"
                      fill="transparent"
                      className="cursor-pointer"
                    >
                      <title>Voyager vers {loc.name}</title>
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 justify-center mt-4 text-[11px] text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-gold inline-block animate-pulse-slow" />
              Position actuelle
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-forest border border-gold/50 inline-block" />
              Accessible (cliquez)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-gray-800 border border-gray-600 inline-block" />
              Découvert
            </span>
          </div>

          {/* Travel hint */}
          <p className="text-center text-xs text-gray-600 mt-2 italic">
            Cliquez sur un lieu accessible pour vous y déplacer. Attention aux
            rencontres aléatoires en chemin !
          </p>
        </div>
      </div>
    </div>
  );
}
