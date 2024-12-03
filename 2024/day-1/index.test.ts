import { describe, expect, it } from "vitest";
import { readLines } from "../../utils/file";
import { solve, solve2 } from "./index";

describe("day 1 - test data", () => {
  const testData = `3   4
4   3
2   5
1   3
3   9
3   3`;
  it("solve", () => {
    expect(solve(testData.split("\n"))).toBe(11);
  });
  it("solve2", () => {
    expect(solve2(testData.split("\n"))).toBe(31);
  });
});

describe("day 1", () => {
  const lines = readLines(__dirname + "/input");
  it("solve", () => {
    expect(solve(lines)).toBe(1_151_792);
  });
  it("solve2", () => {
    expect(solve2(lines)).toBe(21_790_168);
  });
});
