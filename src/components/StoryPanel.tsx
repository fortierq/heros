import { useGameStore } from "@/store/gameStore";

export default function StoryPanel() {
  const { currentScene } = useGameStore();
  if (!currentScene) return null;

  // Convert markdown-like text to JSX
  const renderText = (text: string) => {
    const paragraphs = text.split("\n\n");
    return paragraphs.map((p, idx) => {
      // Process bold
      let processed = p.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      // Process italic
      processed = processed.replace(/\*(.+?)\*/g, "<em>$1</em>");
      // Handle line breaks within paragraph
      processed = processed.replace(/\n/g, "<br/>");

      return (
        <p
          key={idx}
          className="mb-4 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: `${idx * 100}ms` }}
          dangerouslySetInnerHTML={{ __html: processed }}
        />
      );
    });
  };

  return (
    <div className="space-y-4">
      {/* Scene Title */}
      <h2 className="font-medieval text-2xl md:text-3xl font-bold text-gold animate-fade-in-up">
        {currentScene.title}
      </h2>

      {/* Scene Image */}
      {currentScene.image && (
        <div
          className="relative rounded-xl overflow-hidden animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          <img
            src={
              currentScene.image.startsWith("http")
                ? currentScene.image
                : `${import.meta.env.BASE_URL}${currentScene.image}`
            }
            alt={currentScene.imageAlt || currentScene.title}
            className="w-full max-h-[28rem] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/20" />
        </div>
      )}

      {/* Story Text */}
      <div className="story-text text-parchment/90 text-base md:text-lg">
        {renderText(currentScene.text)}
      </div>
    </div>
  );
}
