/** @see https://adventofcode.com/2015/day/1 */

/**
 * Determines the floor Santa ends up on after following the given instructions.
 * - `(` increases the floor by 1.
 * - `)` decreases the floor by 1.
 *
 * @param input the string of ( and ) characters
 * @returns the floor he would end up in
 *
 * @example
 * ```ts
 * solve("(())"); // 0
 * solve("()()"); // 0
 * solve("((("); // 3
 * ```
 */
export function solve(input: string) {
  return [...input].reduce((floor, char) => floor + (char === "(" ? 1 : -1), 0);
}

/**
 * Finds the position of the first character that causes Santa to enter the basement (floor -1).
 * - `(` increases the floor by 1.
 * - `)` decreases the floor by 1.
 * - The position is 1-based (starting from 1).
 *
 * @param input A string of `(` and `)` characters representing instructions.
 * @returns The 1-based position of the character causing Santa to enter the basement,
 * or -1 if he never enters the basement.
 *
 * @example
 * ```ts
 * solvePart2(")"); // 1
 * solvePart2("()())"); // 0
 * ```
 */
export function solvePart2(input: string) {
  let floor = 0;
  for (let i = 0; i < input.length; i++) {
    floor += input[i] === "(" ? 1 : -1;

    if (floor === -1) {
      return i + 1;
    }
  }

  return -1;
}
