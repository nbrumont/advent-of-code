import { describe, expect, it } from "vitest";
import { readLines } from "../../utils/file";
import { solve, solvePart2 } from "./index";

describe("2024 - day 2 - test data", () => {
  const testData = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
  it("solve", () => {
    expect(solve(testData.split("\n"))).toBe(2);
  });
  it("solve - part 2", () => {
    expect(solvePart2(testData.split("\n"))).toBe(4);
  });
});

describe("2024 - day 2", () => {
  const lines = readLines(__dirname + "/input");
  it("solve", () => {
    expect(solve(lines)).toBe(341);
  });
  it("solve - part 2", () => {
    expect(solvePart2(lines)).toBe(404);
  });
});
