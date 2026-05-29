import { describe, it, expect } from "vitest";
import { validateIdea, parseTags, pickRandom } from "../src/logic.js";

describe("validateIdea", () => {
  it("rejects empty string", () => expect(validateIdea("").valid).toBe(false));
  it("rejects whitespace only", () => expect(validateIdea("  ").valid).toBe(false));
  it("accepts valid title", () => {
    const r = validateIdea("Dinner at Mario's");
    expect(r.valid).toBe(true);
    expect(r.trimmed).toBe("Dinner at Mario's");
  });
  it("rejects title over 200 chars", () => expect(validateIdea("x".repeat(201)).valid).toBe(false));
  it("accepts exactly 200 chars", () => expect(validateIdea("x".repeat(200)).valid).toBe(true));
});

describe("parseTags", () => {
  it("parses valid JSON array", () => expect(parseTags('["a","b"]')).toEqual(["a", "b"]));
  it("returns empty for invalid JSON", () => expect(parseTags("not-json")).toEqual([]));
  it("returns empty for null", () => expect(parseTags(null)).toEqual([]));
  it("returns empty for non-array JSON", () => expect(parseTags('"string"')).toEqual([]));
});

describe("pickRandom", () => {
  it("returns null for empty array", () => expect(pickRandom([])).toBeNull());
  it("returns the only element for a single-item array", () => expect(pickRandom([{ id: "1" }])).toEqual({ id: "1" }));
  it("returns an element from the array", () => {
    const ideas = [{ id: "a" }, { id: "b" }, { id: "c" }];
    const result = pickRandom(ideas);
    expect(ideas).toContainEqual(result);
  });
});
