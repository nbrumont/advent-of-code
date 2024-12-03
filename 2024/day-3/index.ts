/** @see https://adventofcode.com/2024/day/3 */

/**
 * Detects all valid multiplication patterns in the input and calculates the sum of their results.
 * The pattern to search for is `mul(a,b)`, where `a` and `b` are numbers with up to three digits.
 *
 * @param input A string containing various instructions, including multiplication patterns.
 * @returns The sum of all valid multiplications found in the input.
 * @example
 * ```ts
 * solve(`xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`)
 * // 161
 * ```
 */
export function solve(input: string) {
  let total = 0;
  const matches = input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/gm);

  for (const match of matches) {
    const left = Number(match[1]);
    const right = Number(match[2]);
    total += left * right;
  }
  return total;
}

/**
 * Detects valid multiplication patterns and calculates their sum, while accounting for enable/disable instructions.
 * The pattern `mul(a,b)` is only considered when multiplications are enabled.
 * - The pattern `do()` enables multiplication.
 * - The pattern `don't()` disables multiplication.
 *
 * @param input A string containing various instructions, including multiplications and enable/disable commands.
 * @returns The sum of all valid multiplications performed when multiplication is enabled.
 * @example
 * ```ts
 * solve2(`xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`)
 * // 48
 * ```
 */
export function solve2(input: string) {
  let total = 0;
  let enabled = true;
  const matches = input.matchAll(
    /(mul\((\d{1,3}),(\d{1,3})\))|(do\(\))|(don't\(\))/gm,
  );

  for (const match of matches) {
    if (match[5] === "don't()") {
      enabled = false;
    } else if (match[4] === "do()") {
      enabled = true;
    } else if (match[1] && enabled) {
      // Process `mul(a,b)` if multiplication is enabled
      const left = Number(match[2]);
      const right = Number(match[3]);
      total += left * right;
    }
  }

  return total;
}
