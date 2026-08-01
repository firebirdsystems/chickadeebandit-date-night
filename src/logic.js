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

/**
 * Fields the in-app search matches against (see hub-sdk `searchMatch`).
 * Notes and tags count as well as the title — ideas get browsed as
 * "something cheap" or "outdoors", which are tags.
 */
export function searchableFields(item) {
  return [item.title, item.notes, item.tags];
}
