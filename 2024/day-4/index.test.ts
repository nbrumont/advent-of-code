import { describe, expect, it } from "vitest";
import { readContent, readLines } from "../../utils/file";
import { solve } from "./index";
import { CROSS_PATTERN_XMAS, PATTERN_XMAS } from "./pattern";

describe("2024 - day 4 - test data", () => {
  const testData = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`.split("\n");
  it("solve", () => {
    expect(solve(testData, PATTERN_XMAS)).toBe(18);
  });
  it("solve - part 2", () => {
    expect(solve(testData, CROSS_PATTERN_XMAS)).toBe(9);
  });
});

describe("2024 - day 4", () => {
  const lines = readLines(__dirname + "/input");
  it("solve", () => {
    expect(solve(lines, PATTERN_XMAS)).toBe(2613);
  });
  it("solve - part 2", () => {
    expect(solve(lines, CROSS_PATTERN_XMAS)).toBe(1905);
  });
});
