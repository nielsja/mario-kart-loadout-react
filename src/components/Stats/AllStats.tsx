import { getCharacter } from '../../entities/Characters';
import { getGlider } from '../../entities/Gliders';
import { getKart } from '../../entities/Karts';
import { getTire } from '../../entities/Tires';
import { calculateAllDisplayStats, calculateAllStats } from './CalculateStats';
import { IStats } from './IStats';
import StatBar from './StatBar';
import './Stats.css';

export interface AllStatsProps {
  driver: string;
  kart: string;
  tire: string;
  glider: string;
}

function AllStats({ driver, kart, tire, glider }: AllStatsProps) {
  let driverStats: IStats | null = null;
  let kartStats: IStats | null = null;
  let tireStats: IStats | null = null;
  let gliderStats: IStats | null = null;
  let overallStats = calculateAllStats(
    driverStats,
    kartStats,
    tireStats,
    gliderStats
  );
  let displayStats: IStats = calculateAllDisplayStats(overallStats);

  function getCharacterStats(characterId: string) {
    driverStats = characterId ? getCharacter(driver).stats : null;
    updateOverallStats();
    return driverStats;
  }
  function getKartStats(kartId: string) {
    kartStats = kartId ? getKart(kart).stats : null;
    updateOverallStats();
    return kartStats;
  }

  function getTireStats(tireId: string) {
    tireStats = tireId ? getTire(tire).stats : null;
    updateOverallStats();
    return tireStats;
  }

  function getGliderStats(gliderId: string) {
    gliderStats = gliderId ? getGlider(gliderId).stats : null;
    updateOverallStats();
    return gliderStats;
  }
  function updateOverallStats() {
    overallStats = calculateAllStats(
      driverStats,
      kartStats,
      tireStats,
      gliderStats
    );
    displayStats = calculateAllDisplayStats(overallStats);
  }

  return (
    <>
      <div className="container-fluid stat-bars-container">
        <StatBar
          key="weightStatsBar"
          statName="Weight"
          displayValue={displayStats.weight}
        ></StatBar>
        <StatBar
          key="accelerationStatsBar"
          statName="Acceleration"
          displayValue={displayStats.acceleration}
        ></StatBar>
        {/* <StatBar
          key="onRoadTractionStatsBar"
          statName="On-Road Traction"
          displayValue={displayStats.onRoadTraction}
        ></StatBar>
        <StatBar
          key="offRoadTractionStatsBar"
          statName="Off-Road Traction"
          displayValue={displayStats.offRoadTraction}
        ></StatBar>{' '}
        <StatBar
          key="miniTurboStatsBar"
          statName="Mini Turbo"
          displayValue={displayStats.miniTurbo}
        ></StatBar>
        <StatBar
          key="groundSpeedStatsBar"
          statName="Speed (Ground)"
          displayValue={displayStats.groundSpeed}
        ></StatBar>
        <StatBar
          key="waterSpeedStatsBar"
          statName="Speed (Water)"
          displayValue={displayStats.waterSpeed}
        ></StatBar>
        <StatBar
          key="antiGravitySpeedStatsBar"
          statName="Speed (Anti-Gravity)"
          displayValue={displayStats.antiGravitySpeed}
        ></StatBar>
        <StatBar
          key="airSpeedStatsBar"
          statName="Speed (Air)"
          displayValue={displayStats.airSpeed}
        ></StatBar>
        <StatBar
          key="groundHandlingStatsBar"
          statName="Handling (Ground)"
          displayValue={displayStats.groundHandling}
        ></StatBar>
        <StatBar
          key="waterHandlingStatsBar"
          statName="Handling (Water)"
          displayValue={displayStats.waterHandling}
        ></StatBar>
        <StatBar
          key="antiGravityHandlingStatsBar"
          statName="Handling (Anti-Gravity)"
          displayValue={displayStats.antiGravityHandling}
        ></StatBar>
        <StatBar
          key="airHandlingStatsBar"
          statName="Handling (Air)"
          displayValue={displayStats.airHandling}
        ></StatBar>
        <StatBar
          key="invincibilityStatsBar"
          statName="Invincibility"
          displayValue={displayStats.invincibility}
        ></StatBar> */}
      </div>
    </>
  );
}

export default AllStats;
