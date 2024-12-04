import { describe, expect, it } from "vitest";
import { readContent } from "../../utils/file";
import { solve, solvePart2 } from "./index";

describe("2015 - day 3 - test data", () => {
  it("solve", () => {
    expect(solve(">")).toBe(2);
    expect(solve("^>v<")).toBe(4);
    expect(solve("^v^v^v^v^v")).toBe(2);
  });
  it("solve - part 2", () => {
    expect(solvePart2("^v")).toBe(3);
    expect(solvePart2("^>v<")).toBe(3);
    expect(solvePart2("^v^v^v^v^v")).toBe(11);
  });
});

describe("2015 - day 3", () => {
  const content = readContent(__dirname + "/input");
  it("solve", () => {
    expect(solve(content)).toBe(2081);
  });
  it("solve - part 2", () => {
    expect(solvePart2(content)).toBe(2341);
  });
});
