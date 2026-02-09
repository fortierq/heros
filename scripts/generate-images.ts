import fs from "fs";
import path from "path";
import { adventures } from "../src/data/index";

const OUTPUT_DIR = path.join(process.cwd(), "public", "images", "generated");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function slugifyPrompt(prompt: string): string {
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

// Wrapper for Freepik AI Image Generation
// https://api.freepik.com/v1/ai/text-to-image
async function generateFreepikImage(
  prompt: string,
  apiKey: string,
): Promise<Buffer> {
  const enhancedPrompt = `${prompt}. Dark fantasy digital painting style, rpg game asset, highly detailed, atmospheric. No text.`;

  // Using standard Text to Image
  const response = await fetch("https://api.freepik.com/v1/ai/text-to-image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-freepik-api-key": apiKey,
      Accept: "application/json",
    },
    body: JSON.stringify({
      prompt: enhancedPrompt,
      num_images: 1,
      aspect_ratio: "landscape_4_3",
    }),
  });

  if (!response.ok) {
    let errMessage = response.statusText;
    try {
      const err = await response.json();
      errMessage = JSON.stringify(err);
    } catch {
      const txt = await response.text();
      if (txt) errMessage = txt;
    }
    throw new Error(`Freepik API Error: ${response.status} ${errMessage}`);
  }

  const data = await response.json();
  if (data.data && data.data[0] && data.data[0].base64) {
    return Buffer.from(data.data[0].base64, "base64");
  }

  throw new Error("Freepik response format unexpected (no base64 data found)");
}

function getFallbackImages(): string[] {
  const fallbackDir = path.join(process.cwd(), "public", "images", "foret");
  try {
    if (fs.existsSync(fallbackDir)) {
      return fs
        .readdirSync(fallbackDir)
        .filter((f) => f.endsWith(".jpg") || f.endsWith(".png"))
        .map((f) => path.join(fallbackDir, f));
    }
  } catch (e) {
    console.error("Could not load fallbacks");
  }
  return [];
}

async function main() {
  console.log("🖼️  Starting Freepik build-time image generation...");

  const apiKey = process.env.FREEPIK_API_KEY;
  if (!apiKey) {
    console.error(
      "\n❌ ERROR: FREEPIK_API_KEY environment variable is missing.",
    );
    console.error("To use Freepik AI, you must export your API key:");
    console.error("  export FREEPIK_API_KEY='FPSX-...'");
    console.error("  npm run generate-images");
    process.exit(1);
  }

  const prompts = new Set<string>();

  adventures.forEach((adv) => {
    Object.values(adv.scenes).forEach((scene) => {
      if (scene.imagePrompt) prompts.add(scene.imagePrompt);
    });
    if (adv.randomEvents) {
      adv.randomEvents.forEach((evt) => {
        if (evt.imagePrompt) prompts.add(evt.imagePrompt);
      });
    }
  });

  console.log(`📝 Found ${prompts.size} unique prompts.`);
  const fallbackImages = getFallbackImages();

  let successCount = 0;
  let failCount = 0;
  let skipCount = 0;

  for (const prompt of prompts) {
    const filename = `${slugifyPrompt(prompt)}.jpg`;
    const filepath = path.join(OUTPUT_DIR, filename);

    if (fs.existsSync(filepath)) {
      skipCount++;
      continue;
    }

    console.log(`[GEN] "${prompt.substring(0, 30)}..."`);

    try {
      const imageBuffer = await generateFreepikImage(prompt, apiKey);
      fs.writeFileSync(filepath, imageBuffer);
      console.log(`   -> Saved to ${filename}`);
      successCount++;
    } catch (e: any) {
      console.error(`   ❌ Failed: ${e.message}`);

      // Fallback logic
      if (fallbackImages.length > 0) {
        const randomFallback =
          fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
        try {
          fs.copyFileSync(randomFallback, filepath);
          console.log(`   -> Using fallback: ${path.basename(randomFallback)}`);
          failCount++;
        } catch (err) {
          console.error("   -> Fallback copy failed", err);
        }
      } else {
        failCount++;
      }
    }
  }

  console.log(
    `\n✨ Done! New: ${successCount}, Skipped: ${skipCount}, Fallback: ${failCount}`,
  );
}

main().catch(console.error);
