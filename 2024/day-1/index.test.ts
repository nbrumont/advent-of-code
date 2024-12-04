import { describe, expect, it } from "vitest";
import { readLines } from "../../utils/file";
import { solve, solvePart2 } from "./index";

describe("2024 - day 1 - test data", () => {
  const testData = `3   4
4   3
2   5
1   3
3   9
3   3`.split("\n");
  it("solve", () => {
    expect(solve(testData)).toBe(11);
  });
  it("solve - part 2", () => {
    expect(solvePart2(testData)).toBe(31);
  });
});

describe("2024 - day 1", () => {
  const lines = readLines(__dirname + "/input");
  it("solve", () => {
    expect(solve(lines)).toBe(1_151_792);
  });
  it("solve - part 2", () => {
    expect(solvePart2(lines)).toBe(21_790_168);
  });
});
