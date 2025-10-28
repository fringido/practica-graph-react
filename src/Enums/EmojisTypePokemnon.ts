type Emoji = {
  [key: string]: string;
};

function getEmojiByType(type: string): string {
  const emojis: Emoji = {
    normal: "⚪️",
    fire: "🔥",
    water: "💧",
    electric: "⚡️",
    grass: "🌿",
    ice: "❄️",
    fighting: "🥊",
    poison: "☠️",
    ground: "⛰️",
    flying: "🦅",
    psychic: "🔮",
    bug: "🐛",
    rock: "🪨",
    ghost: "👻",
    dragon: "🐉",
    dark: "🌑",
    steel: "🔩",
    fairy: "🧚♀️",
  };

  const normalizedType = type.toLowerCase();
  if (normalizedType in emojis) {
    return emojis[normalizedType];
  }

  return "❓"; // emoji para tipo desconocido
}

export { getEmojiByType };