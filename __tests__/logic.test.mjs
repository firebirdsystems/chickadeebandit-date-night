import { describe, it, expect } from "vitest";
import { TAGS, validateIdea, parseTags, pickRandom } from "../src/logic.js";

describe("validateIdea", () => {
  it("rejects empty/whitespace/null titles", () => {
    expect(validateIdea("").valid).toBe(false);
    expect(validateIdea("   ").valid).toBe(false);
    expect(validateIdea(null).valid).toBe(false);
  });

  it("rejects titles over 200 chars", () => {
    expect(validateIdea("x".repeat(201)).valid).toBe(false);
  });

  it("accepts and trims a valid title", () => {
    expect(validateIdea("  Picnic  ")).toEqual({ valid: true, trimmed: "Picnic" });
  });
});

describe("parseTags", () => {
  it("parses a JSON array", () => {
    expect(parseTags('["outdoors","budget"]')).toEqual(["outdoors", "budget"]);
  });

  it("returns [] for non-array JSON", () => {
    expect(parseTags('{"a":1}')).toEqual([]);
    expect(parseTags('"str"')).toEqual([]);
  });

  it("returns [] for invalid JSON or undefined", () => {
    expect(parseTags("not json")).toEqual([]);
    expect(parseTags(undefined)).toEqual([]);
  });
});

describe("pickRandom", () => {
  it("returns null for an empty list", () => {
    expect(pickRandom([])).toBeNull();
  });

  it("returns the only element of a single-item list", () => {
    const idea = { id: 1 };
    expect(pickRandom([idea])).toBe(idea);
  });

  it("always returns a member of the list", () => {
    const ideas = [{ id: 1 }, { id: 2 }, { id: 3 }];
    for (let i = 0; i < 20; i++) expect(ideas).toContain(pickRandom(ideas));
  });
});

describe("TAGS", () => {
  it("stays a non-empty list of unique strings", () => {
    expect(TAGS.length).toBeGreaterThan(0);
    expect(new Set(TAGS).size).toBe(TAGS.length);
  });
});
