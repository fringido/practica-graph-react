type Emoji = {
  [key: string]: string;
};

function getEmojiByType(type: string): string {
  const emojis: Emoji = {
    Normal: "⚪️",
    Fire: "🔥",
    Water: "💧",
    Electric: "⚡️",
    Grass: "🌿",
    Ice: "❄️",
    Fighting: "🥊",
    Poison: "☠️",
    Ground: "⛰️",
    Flying: "🦅",
    Psychic: "🔮",
    Bug: "🐛",
    Rock: "🪨",
    Ghost: "👻",
    Dragon: "🐉",
    Dark: "🌑",
    Steel: "🔩",
    Fairy: "🧚‍♀️",
  };

  if (type in emojis) {
    return emojis[type];
  }

  return "❓"; // emoji para tipo desconocido
}

export { getEmojiByType };
