/** @see https://adventofcode.com/2015/day/3 */

/**
 * Calculates the number of unique positions Santa visits based on movement instructions.
 * ^ moves up, v moves down, > moves right, < moves left.
 *
 * @param input the input string of <>^v
 * @returns The number of unique positions visited.
 * @example
 * ```ts
 * solve(">"); // 2
 * solve("^>v<"); // 4
 * solve("^v^v^v^v^v"); // 2
 * ```
 */
export function solve(input: string) {
  return visit([...input]).size;
}

/**
 * Calculates the number of unique positions visited by Santa and Robo-Santa.
 * Santa follows odd-indexed instructions, Robo-Santa follows even-indexed ones.
 * ^ moves up, v moves down, > moves right, < moves left.
 * @param input the input string of <>^v
 * @returns The number of unique positions visited.
 * @example
 * ```ts
 * solvePart2("^v"); // 3
 * solvePart2("^>v<"); // 3
 * solvePart2("^v^v^v^v^v"); // 11
 * ```
 */
export function solvePart2(input: string) {
  const instructions = [...input];
  const santaVisited = visit(instructions.filter((_, i) => i % 2 === 1));
  const roboSantaVisited = visit(instructions.filter((_, i) => i % 2 === 0));
  return new Set([...santaVisited, ...roboSantaVisited]).size;
}

/**
 * Computes all unique positions visited based on movement instructions.
 *
 * @param input A string containing movement instructions (<>^v).
 * @returns A set of unique positions visited in "x,y" format.
 * @example
 * ```ts
 * visit(">"); // { "0,0", "1,0" }
 * visit("^>v<"); // { "0,0", "0,1", "1,1", "1,0" }
 * visit("^v^v^v^v^v"); // { "0,0", "0,1", "0,2", "0,3", "0,4", "0,5" }
 * ```
 */
function visit(input: string[]) {
  let x = 0;
  let y = 0;

  const visited = new Set<string>();
  visited.add(`${x},${y}`);

  for (const move of input) {
    switch (move) {
      case ">":
        x++;
        break;
      case "<":
        x--;
        break;
      case "^":
        y--;
        break;
      case "v":
        y++;
        break;
    }
    visited.add(`${x},${y}`);
  }
  return visited;
}
