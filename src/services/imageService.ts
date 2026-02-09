/**
 * Service de génération d'images par IA via Pollinations.ai
 * Gratuit, sans clé API requise.
 */

const GENERATED_IMAGES_PATH = "images/generated";

/**
 * Génère un nom de fichier explicite (slug) à partir du prompt.
 */
export function slugifyPrompt(prompt: string): string {
  return prompt
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .substring(0, 64)
    .replace(/-$/, "");
}

/**
 * Retourne le chemin de l'image générée statiquement (build-time).
 * Ne fait plus d'appel API au runtime.
 */
export function generateImageUrl(
  prompt: string,
  width = 800,
  height = 400,
): string {
  const filename = slugifyPrompt(prompt);
  return `${GENERATED_IMAGES_PATH}/${filename}.jpg`;
}

/**
 * Retourne l'URL d'image pour une scène :
 * - Priorité à imagePrompt (génération IA)
 * - Sinon utilise image si c'est un chemin local
 * - Sinon image comme fallback
 */
export function getSceneImageUrl(scene: {
  image?: string;
  imagePrompt?: string;
}): string | undefined {
  if (scene.imagePrompt) {
    return generateImageUrl(scene.imagePrompt);
  }
  if (scene.image) {
    return scene.image;
  }
  return undefined;
}
