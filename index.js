#!/usr/bin/env node

const messages = [
  "You're not crazy — you're early.",
  "Every breakthrough starts as psychotic.",
  "If they understand you immediately, you're not thinking far enough.",
  "Madness is just vision without validation.",
  "Genius is instability that survived.",
  "History rewards obsession, not balance."
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log("\n🧠 PSYCHOTIC\n");
console.log(random(messages));
console.log("\n— Stay unstable. Stay ahead.\n");
