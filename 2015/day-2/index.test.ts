import { describe, expect, it } from "vitest";
import { readLines } from "../../utils/file";
import { solve, solvePart2 } from "./index";

describe("2015 - day 1 - test data", () => {
  it("solve", () => {
    expect(solve(["2x3x4"])).toBe(58);
    expect(solve(["1x1x10"])).toBe(43);
  });
  it("solve - part 2", () => {
    expect(solvePart2(["2x3x4"])).toBe(34);
    expect(solvePart2(["1x1x10"])).toBe(14);
  });
});

describe("2015 - day 1", () => {
  const lines = readLines(__dirname + "/input");
  it("solve", () => {
    expect(solve(lines)).toBe(1_588_178);
  });
  it("solve - part 2", () => {
    expect(solvePart2(lines)).toBe(3_783_758);
  });
});
