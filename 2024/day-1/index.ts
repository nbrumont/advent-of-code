/** @see https://adventofcode.com/2024/day/1 */

/**
 * Calculates the "distance" between two arrays by summing the absolute differences
 * between the nth smallest number of the left array and the nth smallest number of the right array.
 *
 * @param lines An array of strings where each line contains two space-separated numbers.
 * @returns The total distance between the two arrays.
 * @example
 * ```ts
 * solve([
 *   "1   3",
 *   "3   6",
 *   "2   4",
 *   "1   2",
 *   "3   5"
 * ]); // 10
 * ```
 */
export function solve(lines: string[]) {
  const [left, right] = createLeftAndRightArrays(lines);
  return left.reduce(
    (distance, value, index) => distance + Math.abs(value - right[index]),
    0,
  );
}

/**
 * Calculates the total value by summing the product of each element in the left array
 * and the number of times it appears in the right array.
 *
 * @param lines An array of strings where each line contains two space-separated numbers.
 * @returns The total calculated value.
 * @example
 * ```ts
 * solve2([
 *   "1   3",
 *   "3   6",
 *   "2   4",
 *   "1   2",
 *   "3   5"
 * ]); // 8
 * ```
 */
export function solvePart2(lines: string[]) {
  const [left, right] = createLeftAndRightArrays(lines);
  const rightMap = right.reduce(
    (map, value) => map.set(value, (map.get(value) || 0) + 1),
    new Map<number, number>(),
  );
  return left.reduce((total, element) => {
    return total + element * (rightMap.get(element) || 0);
  }, 0);
}

/**
 * Creates two arrays, one for the left part of the input and one for the right part and then sorts them
 * @param lines
 * @returns the sorted arrays
 * @example
 * ```ts
 * createLeftAndRightArrays([
 *   "1   3",
 *   "3   6",
 *   "2   4",
 *   "1   2",
 *   "3   5"
 * ]); // [[1, 1, 2, 3, 3], [2, 3, 4, 5, 6]]
 * ```
 */
function createLeftAndRightArrays(lines: string[]) {
  let left = [];
  let right = [];
  for (let i = 0; i < lines.length; i++) {
    const [leftPart, rightPart] = lines[i].split("   ");
    left.push(Number(leftPart));
    right.push(Number(rightPart));
  }
  return [left.sort((a, b) => a - b), right.sort((a, b) => a - b)];
}
