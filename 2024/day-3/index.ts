/** @see https://adventofcode.com/2024/day/3 */

/**
 * The exercice is to detect any multiplication in the pattern and sum the multiplications
 * The pattern we are looking for is `mul(a,b)` where a and b are numbers of 3 digits max
 *
 * @param input a string containing multiplication instructions
 * @returns the sum of all multiplications
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
 * The exercice is to detect any multiplication in the pattern and sum the multiplications
 * The pattern we are looking for is `mul(a,b)` where a and b are numbers of 3 digits max
 * The pattern will also contain `do()` and `don't()` instructions. When we meet a don't() instruction we disable multiplication, when we meet a do() instruction we enable multiplication
 *
 * @param input a string containing multiplication instructions
 * @returns the sum of all multiplications
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
    /(mul\((\d{1,3}),(\d{1,3})\))|(do\(\))|(don't\(\))/gm
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
