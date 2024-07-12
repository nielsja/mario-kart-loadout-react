import { getCharacter } from '../../entities/Characters';
import { getGlider } from '../../entities/Gliders';
import { getKart } from '../../entities/Karts';
import { getTire } from '../../entities/Tires';
import { calculateAllDisplayStats, calculateAllStats } from './CalculateStats';
import { IStats } from './IStats';
import StatBar from './StatBar';

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
      <div className="container-fluid">
        <p>character stat: {getCharacterStats(driver)?.weight ?? 'none'}</p>
        <p>kart stat: {getKartStats(kart)?.weight ?? 'none'}</p>
        <p>tire stat: {getTireStats(tire)?.weight ?? 'none'}</p>
        <p>glider stat: {getGliderStats(glider)?.weight ?? 'none'}</p>
        <p>overall stat: {overallStats.weight}</p>
        <p>displayed bar %: {displayStats.weight}</p>
        <StatBar statName="Speed" displayValue={displayStats.weight}></StatBar>
      </div>
    </>
  );
}

export default AllStats;
