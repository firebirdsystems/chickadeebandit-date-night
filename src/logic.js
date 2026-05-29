export const TAGS = ["restaurant", "adventure", "stay-in", "outdoors", "culture", "budget"];

export function validateIdea(title) {
  const trimmed = (title ?? "").trim();
  if (!trimmed) return { valid: false, trimmed: "" };
  if (trimmed.length > 200) return { valid: false, trimmed };
  return { valid: true, trimmed };
}

export function parseTags(json) {
  try { return Array.isArray(JSON.parse(json)) ? JSON.parse(json) : []; }
  catch { return []; }
}

export function pickRandom(ideas) {
  if (!ideas.length) return null;
  return ideas[Math.floor(Math.random() * ideas.length)];
}
