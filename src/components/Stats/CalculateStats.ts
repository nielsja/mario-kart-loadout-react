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
      onRoadTraction: 0,
      offRoadTraction: 0,
      miniTurbo: 0,
      groundSpeed: 0,
      waterSpeed: 0,
      antiGravitySpeed: 0,
      airSpeed: 0,
      groundHandling: 0,
      waterHandling: 0,
      antiGravityHandling: 0,
      airHandling: 0,
      invincibility: 0,
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
    onRoadTraction: calculateStats(
      driver.onRoadTraction,
      kart.onRoadTraction,
      tire.onRoadTraction,
      glider.onRoadTraction
    ),
    offRoadTraction: calculateStats(
      driver.offRoadTraction,
      kart.offRoadTraction,
      tire.offRoadTraction,
      glider.offRoadTraction
    ),
    miniTurbo: calculateStats(
      driver.miniTurbo,
      kart.miniTurbo,
      tire.miniTurbo,
      glider.miniTurbo
    ),
    groundSpeed: calculateStats(
      driver.groundSpeed,
      kart.groundSpeed,
      tire.groundSpeed,
      glider.groundSpeed
    ),
    waterSpeed: calculateStats(
      driver.waterSpeed,
      kart.waterSpeed,
      tire.waterSpeed,
      glider.waterSpeed
    ),
    antiGravitySpeed: calculateStats(
      driver.antiGravitySpeed,
      kart.antiGravitySpeed,
      tire.antiGravitySpeed,
      glider.antiGravitySpeed
    ),
    airSpeed: calculateStats(
      driver.airSpeed,
      kart.airSpeed,
      tire.airSpeed,
      glider.airSpeed
    ),
    groundHandling: calculateStats(
      driver.groundHandling,
      kart.groundHandling,
      tire.groundHandling,
      glider.groundHandling
    ),
    waterHandling: calculateStats(
      driver.waterHandling,
      kart.waterHandling,
      tire.waterHandling,
      glider.waterHandling
    ),
    antiGravityHandling: calculateStats(
      driver.antiGravityHandling,
      kart.antiGravityHandling,
      tire.antiGravityHandling,
      glider.antiGravityHandling
    ),
    airHandling: calculateStats(
      driver.airHandling,
      kart.airHandling,
      tire.airHandling,
      glider.airHandling
    ),
    invincibility: calculateStats(
      driver.invincibility,
      kart.invincibility,
      tire.invincibility,
      glider.invincibility
    ),
  };
}

export function calculateAllDisplayStats(stats: IStats) {
  return {
    weight: calcDisplayBarPercentage(stats.weight),
    acceleration: calcDisplayBarPercentage(stats.acceleration),
    onRoadTraction: calcDisplayBarPercentage(stats.onRoadTraction),
    offRoadTraction: calcDisplayBarPercentage(stats.offRoadTraction),
    miniTurbo: calcDisplayBarPercentage(stats.miniTurbo),
    groundSpeed: calcDisplayBarPercentage(stats.groundSpeed),
    waterSpeed: calcDisplayBarPercentage(stats.waterSpeed),
    antiGravitySpeed: calcDisplayBarPercentage(stats.antiGravitySpeed),
    airSpeed: calcDisplayBarPercentage(stats.airSpeed),
    groundHandling: calcDisplayBarPercentage(stats.groundHandling),
    waterHandling: calcDisplayBarPercentage(stats.waterHandling),
    antiGravityHandling: calcDisplayBarPercentage(stats.antiGravityHandling),
    airHandling: calcDisplayBarPercentage(stats.airHandling),
    invincibility: calcDisplayBarPercentage(stats.invincibility),
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
