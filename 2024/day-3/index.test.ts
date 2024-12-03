import { describe, expect, it } from "vitest";
import { readFile } from "../../utils/file";
import { solve, solve2 as solvePart2 } from "./index";

describe("2024 - day 3 - test data", () => {
  it("solve", () => {
    expect(
      solve(
        `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
      )
    ).toBe(161);
  });
  it("solve - part 2", () => {
    expect(
      solvePart2(
        `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`
      )
    ).toBe(48);
  });
});

describe("2024 - day 3", () => {
  const lines = readFile(__dirname + "/input");
  it("solve", () => {
    expect(solve(lines)).toBe(175_015_740);
  });
  it("solve - part 2", () => {
    expect(solvePart2(lines)).toBe(112_272_912);
  });
});
