import { describe, expect, it } from "vitest";
import { readFile } from "../../utils/file";
import { solve, solvePart2 } from "./index";

describe("2015 - day 1 - test data", () => {
  it("solve", () => {
    expect(solve("(())")).toBe(0);
    expect(solve("()()")).toBe(0);
    expect(solve("(((")).toBe(3);
    expect(solve("))(((((")).toBe(3);
    expect(solve("())")).toBe(-1);
    expect(solve("))(")).toBe(-1);
    expect(solve(")))")).toBe(-3);
    expect(solve(")())())")).toBe(-3);
  });
  it("solve - part 2", () => {
    expect(solvePart2(")")).toBe(1);
    expect(solvePart2("()())")).toBe(5);
  });
});

describe("2015 - day 1", () => {
  const lines = readFile(__dirname + "/input");
  it("solve", () => {
    expect(solve(lines)).toBe(74);
  });
  it("solve - part 2", () => {
    expect(solvePart2(lines)).toBe(1795);
  });
});
