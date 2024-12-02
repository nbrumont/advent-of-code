/** @see https://adventofcode.com/2024/day/2 */

/**
 * Given a list of reports, determines the number of safe reports
 * @param lines the lines of reports
 * @returns the number of safe reports
 * @example
 * ```ts
 * solve([
 *   "7 6 4 2 1",
 *   "1 2 7 8 9",
 *   "9 7 6 2 1",
 *   "1 3 2 4 5",
 *   "8 6 4 4 1",
 *   "1 3 6 7 9"
 * ]); // 2
 * ```
 */
export function solve(lines: string[]) {
  return lines.map(parseReport).filter(isReportSafe).length;
}

/**
 * Given a list of reports, determines the number of safe reports
 * This time, a report is safe if it has a safe subset when removing at most one element
 * @param lines the lines of reports
 * @returns the number of safe reports
 * @example
 * ```ts
 * solve([
 *   "7 6 4 2 1",
 *   "1 2 7 8 9",
 *   "9 7 6 2 1",
 *   "1 3 2 4 5",
 *   "8 6 4 4 1",
 *   "1 3 6 7 9"
 * ]); // 4
 * ```
 */
export function solve2(lines: string[]) {
  return lines.map(parseReport).reduce((safeReports, report) => {
    if (isReportSafe(report)) {
      return safeReports + 1;
    }

    const hasSafeSubset = report.some((_, index) =>
      isReportSafe(report.filter((_, i) => i !== index)),
    );

    return hasSafeSubset ? safeReports + 1 : safeReports;
  }, 0);
}

/**
 * Check if a report is safe
 * A report is safe if the numbers are only either increasing or decreasing
 * and if the difference beetween two number is < 4 (1, 2 or 3)
 * @param report an array of numbers
 * @returns true if the report is safe, false otherwise
 * @example
 * ```ts
 * isReportSafe([1, 2, 3, 4, 5]); // true
 * isReportSafe([2, 2, 3, 4]); // false
 * ```
 */
function isReportSafe(report: number[]) {
  const increasing = report.every(
    (element, index) => index === 0 || element > report[index - 1],
  );
  const decreasing = report.every(
    (element, index) => index === 0 || element < report[index - 1],
  );
  const smallChanges = report.every((element, index) => {
    const abs = Math.abs(element - report[index - 1]);
    return index === 0 || (abs > 0 && abs < 4);
  });
  return (increasing || decreasing) && smallChanges;
}

/**
 * Parse a report from a line into an array of numbers
 * @param report the report as a string
 * @returns the report as an array of numbers
 * @example
 * ```ts
 * parseReport("7 6 4 2 1"); // [7, 6, 4, 2, 1]
 * ```
 */
function parseReport(report: string) {
  return report.split(" ").map(Number);
}
