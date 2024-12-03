/** @see https://adventofcode.com/2015/day/1 */

/**
 * This exercice is to count the floor Santa would end up in.
 * He starts at 0 and ( means he goes up and ) means he goes down.
 * The input is a string of ( and ) characters
 *
 * @param input the string of ( and ) characters
 * @returns the floor he would end up in
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
 * This exercice is to return the position of the character that would make Santa enters the basement (-1).
 * He starts at 0 and ( means he goes up and ) means he goes down.
 * The input is a string of ( and ) characters
 * The first position is 1 and the second is 2 etc
 *
 * @param input the string of ( and ) characters
 * @returns the floor would enter the basement
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
