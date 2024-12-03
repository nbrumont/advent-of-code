/** @see https://adventofcode.com/2015/day/3 */

/**
 * This exercice is to count the number of unique positions Santa would visit.
 * ^ goes up and v goes down.
 * > goes right and < goes left.
 * We need to count the number of houses he would leave a gift
 *
 * @param input the input string of <>^v
 * @returns the number of unique positions Santa would visit
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
 * This exercice is to count the number of unique positions Santa would visit.
 * This time he has a robot that can go up, down, left and right.
 * They both start at the same position.
 * Santa goes first and uses all odds instructions.
 * The robot goes second and uses all even instructions.
 * ^ goes up and v goes down.
 * > goes right and < goes left.
 * We need to count the number of houses he would leave a gift
 *
 * @param input the input string of <>^v
 * @returns the number of unique positions Santa and its robot would visit
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
 * Counts all the unique positions visited by instructions <>^v
 *
 * @param input the input string of <>^v
 * @returns the unique positions visited as a set of x,y coordinates
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
