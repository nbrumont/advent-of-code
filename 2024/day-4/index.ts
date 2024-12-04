/** @see https://adventofcode.com/2024/day/4 */
import type { Pattern, Patterns } from "./pattern";

/**
 * Solves the puzzle by counting occurrences of specified patterns in a matrix.
 *
 * @param input - A multiline string where each character represents a cell in a grid.
 * @param patterns - An array of patterns to search for in the grid.
 * @returns The total count of matches for all patterns in the grid.
 *
 * @example
 * ```ts
 * const grid = `MMMSXXMASM
 * MSAMXMSMSA
 * AMXSXMAAMM
 * MSAMASMSMX
 * XMASAMXAMM
 * XXAMMXXAMA
 * SMSMSASXSS
 * SAXAMASAAA
 * MAMMMXMMMM
 * MXMXAXMASX`;
 * solve(grid, PATTERN_XMAS); // 18
 * ```
 */
export function solve(input: string[], patterns: Patterns): number {
  const matrix = input.map((row) => row.split(""));
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  let matchCount = 0;

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    for (let colIndex = 0; colIndex < colCount; colIndex++) {
      for (const pattern of patterns) {
        if (checkPattern(pattern, matrix, rowIndex, colIndex)) {
          matchCount++;
        }
      }
    }
  }
  return matchCount;
}

/**
 * Checks if a given pattern matches the grid starting from a specific cell.
 *
 * @param pattern - A pattern defining the relative positions of required letters.
 * @param matrix - A 2D grid represented as an array of character arrays.
 * @param rowIndex - The row index of the starting cell.
 * @param colIndex - The column index of the starting cell.
 * @returns `true` if the pattern matches the grid starting from the given cell, `false` otherwise.
 *
 * @example
 * ```ts
 * const pattern = {
 *   X: [{ x: 0, y: 0 }],
 *   M: [{ x: 1, y: 0 }],
 *   A: [{ x: 2, y: 0 }],
 *   S: [{ x: 3, y: 0 }]
 * };
 * const matrix = [
 *   ["M", "M", "M", "S"],
 *   ["X", "M", "A", "S"], <--
 *   ["A", "X", "M", "S"]
 * ];
 * checkPattern(pattern, matrix, 1, 1); // true
 * ```
 */
function checkPattern(
  pattern: Pattern,
  matrix: string[][],
  rowIndex: number,
  colIndex: number,
): boolean {
  for (const [letter, positions] of Object.entries(pattern)) {
    for (const { x, y } of positions) {
      const newRow = rowIndex + x;
      const newCol = colIndex + y;
      if (
        newRow < 0 ||
        newRow >= matrix.length ||
        newCol < 0 ||
        newCol >= matrix[0].length ||
        matrix[newRow][newCol] !== letter
      ) {
        return false;
      }
    }
  }
  return true;
}
