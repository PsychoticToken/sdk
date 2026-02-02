import fetch from "node-fetch";
import "dotenv/config";

const BASE_URL = process.env.LLM_BASE_URL;
const API_KEY = process.env.OPENAI_API_KEY;
const MODEL = process.env.LLM_MODEL;

export async function callLLM(system, user) {
  const res = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      temperature: 0.9
    })
  });

  const json = await res.json();
  return json.choices[0].message.content;
}
