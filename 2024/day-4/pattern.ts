export type Pattern = Record<string, { x: number; y: number }[]>;
export type Patterns = Pattern[];

/**
 * Patterns for detecting the word "XMAS" in all directions.
 * Directions included: horizontal, vertical, and diagonal.
 */
export const PATTERN_XMAS: Patterns = [
  // Horizontal (left-to-right)
  {
    X: [{ x: 0, y: 0 }],
    M: [{ x: 1, y: 0 }],
    A: [{ x: 2, y: 0 }],
    S: [{ x: 3, y: 0 }],
  },
  // Horizontal (right-to-left)
  {
    X: [{ x: 0, y: 0 }],
    M: [{ x: -1, y: 0 }],
    A: [{ x: -2, y: 0 }],
    S: [{ x: -3, y: 0 }],
  },
  // Vertical (top-to-bottom)
  {
    X: [{ x: 0, y: 0 }],
    M: [{ x: 0, y: 1 }],
    A: [{ x: 0, y: 2 }],
    S: [{ x: 0, y: 3 }],
  },
  // Vertical (bottom-to-top)
  {
    X: [{ x: 0, y: 0 }],
    M: [{ x: 0, y: -1 }],
    A: [{ x: 0, y: -2 }],
    S: [{ x: 0, y: -3 }],
  },
  // Diagonal (top-left to bottom-right)
  {
    X: [{ x: 0, y: 0 }],
    M: [{ x: 1, y: 1 }],
    A: [{ x: 2, y: 2 }],
    S: [{ x: 3, y: 3 }],
  },
  // Diagonal (bottom-right to top-left)
  {
    X: [{ x: 0, y: 0 }],
    M: [{ x: -1, y: -1 }],
    A: [{ x: -2, y: -2 }],
    S: [{ x: -3, y: -3 }],
  },
  // Diagonal (top-right to bottom-left)
  {
    X: [{ x: 0, y: 0 }],
    M: [{ x: -1, y: 1 }],
    A: [{ x: -2, y: 2 }],
    S: [{ x: -3, y: 3 }],
  },
  // Diagonal (bottom-left to top-right)
  {
    X: [{ x: 0, y: 0 }],
    M: [{ x: 1, y: -1 }],
    A: [{ x: 2, y: -2 }],
    S: [{ x: 3, y: -3 }],
  },
];

/**
 * Patterns for detecting rotated variations of:
 *
 * `
 * M . S
 * . A .
 * M . S
 * `
 * The pattern can appear in any of its rotational states.
 */
export const CROSS_PATTERN_XMAS: Patterns = [
  // Base pattern from the jsdoc
  {
    A: [{ x: 0, y: 0 }],
    M: [
      { x: -1, y: -1 },
      { x: -1, y: 1 },
    ],
    S: [
      { x: 1, y: -1 },
      { x: 1, y: 1 },
    ],
  },
  // 90° right
  {
    A: [{ x: 0, y: 0 }],
    M: [
      { x: -1, y: -1 },
      { x: 1, y: -1 },
    ],
    S: [
      { x: -1, y: 1 },
      { x: 1, y: 1 },
    ],
  },
  // 180°
  {
    A: [{ x: 0, y: 0 }],
    M: [
      { x: 1, y: -1 },
      { x: 1, y: 1 },
    ],
    S: [
      { x: -1, y: -1 },
      { x: -1, y: 1 },
    ],
  },
  // 90° left
  {
    A: [{ x: 0, y: 0 }],
    M: [
      { x: -1, y: 1 },
      { x: 1, y: 1 },
    ],
    S: [
      { x: -1, y: -1 },
      { x: 1, y: -1 },
    ],
  },
];
