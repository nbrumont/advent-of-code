import { describe, expect, it } from "vitest";
import { readFile } from "../../utils/file";
import { solve, solve2 } from "./index";

describe("day 3 - test data", () => {
  it("solve", () => {
    expect(
      solve(
        `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
      )
    ).toBe(161);
  });
  it("solve2", () => {
    expect(
      solve2(
        `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`
      )
    ).toBe(48);
  });
});

describe("day 3", () => {
  const lines = readFile(__dirname + "/input");
  it("solve", () => {
    expect(solve(lines)).toBe(175_015_740);
  });
  it("solve2", () => {
    expect(solve2(lines)).toBe(112_272_912);
  });
});
