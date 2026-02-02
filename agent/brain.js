import { memory } from "./memory.js";
import { prompts } from "./prompts.js";

export async function think(input) {
  const intent = detectIntent(input);

  const thought = {
    input,
    intent,
    response: generateResponse(intent),
    timestamp: Date.now()
  };

  memory.push(thought);
  return thought;
}

function detectIntent(text = "") {
  if (text.includes("?")) return "question";
  if (text.includes("why")) return "existential";
  if (text.includes("build")) return "creator";
  return "signal";
}

function generateResponse(intent) {
  return prompts[intent] || prompts.signal;
}
