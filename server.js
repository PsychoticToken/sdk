import express from "express";
import { think } from "./agent/brain.js";

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    name: "Psychotic",
    message: "You're not crazy — you're 100x away from being called a genius."
  });
});

app.post("/think", async (req, res) => {
  const { input } = req.body;
  const response = await think(input);
  res.json(response);
});

app.get("/manifesto", (_, res) => {
  res.json({
    principles: [
      "Madness is misunderstood focus",
      "Noise today, signal tomorrow",
      "Genius survives instability"
    ]
  });
});

app.listen(3000, () =>
  console.log("🧠 Psychotic API running on http://localhost:3000")
);
