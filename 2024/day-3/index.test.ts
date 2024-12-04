import { describe, expect, it } from "vitest";
import { readContent } from "../../utils/file";
import { solve, solvePart2 } from "./index";

describe("2024 - day 3 - test data", () => {
  it("solve", () => {
    expect(
      solve(
        `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`,
      ),
    ).toBe(161);
  });
  it("solve - part 2", () => {
    expect(
      solvePart2(
        `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`,
      ),
    ).toBe(48);
  });
});

describe("2024 - day 3", () => {
  const content = readContent(__dirname + "/input");
  it("solve", () => {
    expect(solve(content)).toBe(175_015_740);
  });
  it("solve - part 2", () => {
    expect(solvePart2(content)).toBe(112_272_912);
  });
});
