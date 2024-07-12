/**
 * Calculates the overall loadout's value of a given statistic
 * (weight, acceleration, etc.).
 * @param driverStat The driver's stat value.
 * @param kartStat The kart or bike's stat value.
 * @param tireStat The tire's stat value.
 * @param gliderStat The glider's stat value.
 * @returns The overall kit's value for that stat.
 */
export function calculateStats(
  driverStat: number,
  kartStat: number,
  tireStat: number,
  gliderStat: number
): number {
  const combinedLevel = driverStat + kartStat + tireStat + gliderStat;
  return (combinedLevel + 3) / 4;
}

/**
 * Calculates how full the statistic bar should be in the in-game menu.
 * @param combinedLevel The overall kit's stat value.
 * @returns The percentage (to the nearest hundreth) that the bar should be filled.
 */
export function calculateDisplayBarPercentage(combinedLevel: number): number {
  const percentageNonRounded = combinedLevel / 6;
  const roundedPercentage = Math.round(percentageNonRounded * 100);
  const finalValue = roundedPercentage / 100;
  console.log(`combined level: ${combinedLevel}`);
  console.log(`percentage (non-rounded): ${percentageNonRounded}`);
  console.log(`percentage (rounded): ${roundedPercentage}`);
  console.log(`final value: ${finalValue}`);
  return finalValue;
}
