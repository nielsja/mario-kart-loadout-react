import { IStats } from './IStats';

/**
 * Calculates all statistics for the overall kit.
 * Note: this will only calculate the stats if all kit components are provided;
 * if any of the components (driver, kart, tire, or glider) are `null`,
 * then this will return `0`s for all stats, since we don't want to display
 * any calculated values until all components have been selected.
 * @param driver The driver character's stats.
 * @param kart The kart's stats.
 * @param tire The tire's stats.
 * @param glider The glider The glider's stats.
 * @returns The overall kit's stats.
 */
export function calculateAllStats(
  driver: IStats | null,
  kart: IStats | null,
  tire: IStats | null,
  glider: IStats | null
): IStats {
  if (!driver || !kart || !tire || !glider) {
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
    weight: calculateStats(
      driver.weight,
      kart.weight,
      tire.weight,
      glider.weight
    ),
    acceleration: calculateStats(
      driver.acceleration,
      kart.acceleration,
      tire.acceleration,
      glider.acceleration
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
  return (driverStat + kartStat + tireStat + gliderStat + 3) / 4;
}

/**
 * Calculates how full the statistic bar should be in the in-game menu.
 * @param combinedLevel The overall kit's stat value.
 * @returns The percentage (to the nearest hundreth) that the bar should be filled.
 */
export function calcDisplayBarPercentage(combinedLevel: number): number {
  return Math.round((combinedLevel / 6) * 100) / 100;
}
