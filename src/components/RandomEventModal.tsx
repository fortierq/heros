import { useGameStore } from "@/store/gameStore";
import { generateImageUrl } from "@/services/imageService";
import { AlertTriangle } from "lucide-react";

export default function RandomEventModal() {
  const { activeRandomEvent, resolveRandomEvent } = useGameStore();

  if (!activeRandomEvent) return null;

  const imageUrl = activeRandomEvent.imagePrompt
    ? generateImageUrl(activeRandomEvent.imagePrompt)
    : undefined;

  const hasChoices =
    activeRandomEvent.choices && activeRandomEvent.choices.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm animate-fade-in-up">
      <div className="relative w-full max-w-lg mx-4 bg-gray-900/95 border border-gold/30 rounded-2xl overflow-hidden shadow-2xl shadow-gold/10">
        {/* Image */}
        {imageUrl && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={imageUrl}
              alt={activeRandomEvent.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
          </div>
        )}

        <div className="p-6 space-y-4">
          {/* Title */}
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-gold shrink-0" />
            <h3 className="font-medieval text-gold text-lg">
              {activeRandomEvent.title}
            </h3>
          </div>

          {/* Text */}
          <div className="text-parchment/85 text-sm leading-relaxed whitespace-pre-line">
            {activeRandomEvent.text}
          </div>

          {/* Effects preview */}
          {activeRandomEvent.effects &&
            activeRandomEvent.effects.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {activeRandomEvent.effects.map((effect, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2 py-1 rounded-full ${
                      effect.type === "damage"
                        ? "bg-red-900/40 text-red-300"
                        : effect.type === "heal"
                          ? "bg-green-900/40 text-green-300"
                          : "bg-gold/10 text-gold"
                    }`}
                  >
                    {effect.type === "damage" && `💔 -${effect.value} PV`}
                    {effect.type === "heal" && `💚 +${effect.value} PV`}
                    {effect.type === "add_item" && `📦 Nouvel objet`}
                    {effect.type === "add_xp" && `✨ +${effect.value} XP`}
                    {effect.type === "stat_boost" &&
                      `⬆️ ${effect.target} +${effect.value}`}
                  </span>
                ))}
              </div>
            )}

          {/* Choices or Continue button */}
          <div className="space-y-2 pt-2">
            {hasChoices ? (
              activeRandomEvent.choices!.map((choice, idx) => (
                <button
                  key={idx}
                  onClick={() => resolveRandomEvent(choice)}
                  className="w-full text-left px-4 py-3 rounded-xl border bg-gray-800/60 border-gray-700/50 hover:bg-gray-700/60 hover:border-gold/40 transition-all text-sm text-parchment hover:text-gold"
                >
                  {choice.text}
                </button>
              ))
            ) : (
              <button
                onClick={() => resolveRandomEvent()}
                className="w-full px-4 py-3 rounded-xl bg-gold/20 hover:bg-gold/30 text-gold border border-gold/30 transition-colors font-medieval text-sm"
              >
                Continuer le voyage →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
