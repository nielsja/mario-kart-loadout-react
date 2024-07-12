import { IStats } from './IStats';

export function calculateAllStats(
  driver: IStats | null,
  kart: IStats | null,
  tire: IStats | null,
  glider: IStats | null
): IStats {
  const d = driver;
  const k = kart;
  const t = tire;
  const g = glider;
  // we don't want to calculate values until all are selected
  if (!d || !k || !t || !g) {
    return {
      weight: 0,
      acceleration: 0,
      // TODO: add these back in
      // onRoadTraction: 0,
      // offRoadTraction: 0,
      // miniTurbo: 0,
      // groundSpeed: 0,
      // waterSpeed: 0,
      // antiGravitySpeed: 0,
      // airSpeed: 0,
      // groundHandling: 0,
      // waterHandling: 0,
      // antiGravityHandling: 0,
      // airHandling: 0,
      // invincibility: 0,
    };
  }
  return {
    weight: calculateStats(d.weight, k.weight, t.weight, g.weight),
    acceleration: calculateStats(
      d.acceleration,
      k.acceleration,
      t.acceleration,
      g.acceleration
    ),
    // TODO: add these back in
    // onRoadTraction: calculateStats(d.onRoadTraction, k.onRoadTraction, t.onRoadTraction, g.onRoadTraction),
    // offRoadTraction: calculateStats(d.offRoadTraction, k.offRoadTraction, t.offRoadTraction, g.offRoadTraction),
    // miniTurbo: calculateStats(d.miniTurbo, k.miniTurbo, t.miniTurbo, g.miniTurbo),
    // groundSpeed: calculateStats(d.groundSpeed, k.groundSpeed, t.groundSpeed, g.groundSpeed),
    // waterSpeed: calculateStats(d.waterSpeed, k.waterSpeed, t.waterSpeed, g.waterSpeed),
    // antiGravitySpeed: calculateStats(d.antiGravitySpeed, k.antiGravitySpeed, t.antiGravitySpeed, g.antiGravitySpeed),
    // airSpeed: calculateStats(d.airSpeed, k.airSpeed, t.airSpeed, g.airSpeed),
    // groundHandling: calculateStats(d.groundHandling, k.groundHandling, t.groundHandling, g.groundHandling),
    // waterHandling: calculateStats(d.waterHandling, k.waterHandling, t.waterHandling, g.waterHandling),
    // antiGravityHandling: calculateStats(d.antiGravityHandling, k.antiGravityHandling, t.antiGravityHandling, g.antiGravityHandling),
    // airHandling: calculateStats(d.airHandling, k.airHandling, t.airHandling, g.airHandling),
    // invincibility: calculateStats(d.invincibility, k.invincibility, t.invincibility, g.invincibility),
  };
}

export function calculateAllDisplayStats(stats: IStats) {
  return {
    weight: calcDisplayBarPercentage(stats.weight),
    acceleration: calcDisplayBarPercentage(stats.acceleration),
    // TODO: add these back in
    // onRoadTraction: calcDisplayBarPercentage(stats.onRoadTraction),
    // offRoadTraction: calcDisplayBarPercentage(stats.offRoadTraction),
    // miniTurbo: calcDisplayBarPercentage(stats.miniTurbo),
    // groundSpeed: calcDisplayBarPercentage(stats.groundSpeed),
    // waterSpeed: calcDisplayBarPercentage(stats.waterSpeed),
    // antiGravitySpeed: calcDisplayBarPercentage(stats.antiGravitySpeed),
    // airSpeed: calcDisplayBarPercentage(stats.airSpeed),
    // groundHandling: calcDisplayBarPercentage(stats.groundHandling),
    // waterHandling: calcDisplayBarPercentage(stats.waterHandling),
    // antiGravityHandling: calcDisplayBarPercentage(stats.antiGravityHandling),
    // airHandling: calcDisplayBarPercentage(stats.airHandling),
    // invincibility: calcDisplayBarPercentage(stats.invincibility),
  };
}

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
export function calcDisplayBarPercentage(combinedLevel: number): number {
  const percentageNonRounded = combinedLevel / 6;
  const roundedPercentage = Math.round(percentageNonRounded * 100);
  const finalValue = roundedPercentage / 100;
  console.log(`combined level: ${combinedLevel}`);
  console.log(`percentage (non-rounded): ${percentageNonRounded}`);
  console.log(`percentage (rounded): ${roundedPercentage}`);
  console.log(`final value: ${finalValue}`);
  return finalValue;
}
