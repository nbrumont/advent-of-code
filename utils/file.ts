import { readFileSync } from "node:fs";

/**
 * Reads a file and returns its content as a string
 * @param path the path of the file to read
 * @returns the content of the file as a string
 * @example
 * ```ts
 * readFile("input.txt");
 * ```
 */
export function readFile(path: string): string {
  return readFileSync(path, "utf-8");
}

/**
 * Reads a file and returns its content as an array of lines
 * @param path the path of the file to read
 * @returns the content of the file as an array of lines
 * @example
 * ```ts
 * readLines("input.txt");
 * ```
 */
export function readLines(path: string): string[] {
  return readFile(path)
    .split("\n")
    .filter((line) => line.trim() !== "");
}
