/**
 * Calculates the total area of craft paper needed for the provided boxes.
 *
 * @param lines - An array of box dimensions in the format `LxWxH`.
 * @returns The total area of craft paper required.
 *
 * @example
 * ```ts
 * solve(["2x3x4"]); // 58
 * ```
 */
export function solve(lines: string[]): number {
  return lines
    .map(parseBox)
    .reduce(
      (total, { l, w, h }) => total + calculateBoxAreaWithSupplement(l, w, h),
      0,
    );
}

/**
 * Calculates the total ribbon length needed for the provided boxes.
 *
 * @param lines - An array of box dimensions in the format `LxWxH`.
 * @returns The total ribbon length required.
 *
 * @example
 * ```ts
 * solvePart2(["2x3x4"]); // 34
 * ```
 */
export function solvePart2(lines: string[]): number {
  return lines
    .map(parseBox)
    .reduce(
      (total, { l, w, h }) => total + calculateRibbonSizeForBox(l, w, h),
      0,
    );
}

/**
 * Parses a box description in the format `LxWxH` into its dimensions.
 *
 * @param line - A string representing box dimensions in the format `LxWxH`.
 * @returns An object with `l`, `w`, and `h` as the dimensions of the box.
 *
 * @example
 * ```ts
 * parseBox("2x3x4"); // { l: 2, w: 3, h: 4 }
 * ```
 */
function parseBox(line: string): { l: number; w: number; h: number } {
  const [l, w, h] = line.split("x").map(Number);
  return { l, w, h };
}

/**
 * Calculates the length of ribbon needed to wrap a box.
 *
 * The ribbon required consists of:
 * 1. The smallest perimeter of any face (`2 * (smallest_side + second_smallest_side)`).
 * 2. The bow length equal to the box volume (`l * w * h`).
 *
 * @param l - Length of the box.
 * @param w - Width of the box.
 * @param h - Height of the box.
 * @returns The total ribbon length needed.
 *
 * @example
 * ```ts
 * calculateRibbonSizeForBox(2, 3, 4); // 34
 * ```
 */
function calculateRibbonSizeForBox(l: number, w: number, h: number): number {
  const [smallest, secondSmallest] = [l, w, h].sort((a, b) => a - b);
  return 2 * (smallest + secondSmallest) + l * w * h;
}

/**
 * Calculates the area of a box including an extra supplement.
 *
 * The total area consists of:
 * 1. The surface area of the box (`2*l*w + 2*w*h + 2*h*l`).
 * 2. An extra area equal to the smallest side of the box (`smallest_side_area`).
 *
 * @param l - Length of the box.
 * @param w - Width of the box.
 * @param h - Height of the box.
 * @returns The total area of the box with the supplement.
 *
 * @example
 * ```ts
 * calculateBoxAreaWithSupplement(2, 3, 4); // 58
 * ```
 */
function calculateBoxAreaWithSupplement(
  l: number,
  w: number,
  h: number,
): number {
  const [smallest, secondSmallest] = [l, w, h].sort((a, b) => a - b);
  return 2 * (l * w + w * h + h * l) + smallest * secondSmallest;
}
