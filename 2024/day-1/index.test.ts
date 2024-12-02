const testData = `3   4
4   3
2   5
1   3
3   9
3   3`;

import { describe, expect, it } from "vitest";
import { solve, solve2 } from "./index";
import { readLines } from "../../utils/file";

describe("day 1 - test data", () => {
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
