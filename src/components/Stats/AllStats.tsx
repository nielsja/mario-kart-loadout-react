import { useEffect } from 'react';
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
  // const [driverStats, setDriverStat] = useState(
  //   driver ? getCharacter(driver).stats : null
  // );
  // const [kartStats, setKartStat] = useState(kart ? getKart(kart).stats : null);
  // const [tireStats, setTireStat] = useState(tire ? getTire(tire).stats : null);
  // const [gliderStats, setGliderStat] = useState(
  //   glider ? getGlider(glider).stats : null
  // );
  let driverStats: IStats | null = getCharacterStats(driver);
  let kartStats: IStats | null = getKartStats(kart);
  let tireStats: IStats | null = getTireStats(tire);
  let gliderStats: IStats | null = getGliderStats(glider);
  let overallStats: IStats = calculateAllStats(
    driverStats,
    kartStats,
    tireStats,
    gliderStats
  );
  let displayStats: IStats = calculateAllDisplayStats(overallStats);

  useEffect(() => {
    driverStats = getCharacterStats(driver);
    kartStats = getKartStats(kart);
    tireStats = getTireStats(tire);
    gliderStats = getGliderStats(glider);
    overallStats = calculateAllStats(
      driverStats,
      kartStats,
      tireStats,
      gliderStats
    );
    displayStats = calculateAllDisplayStats(overallStats);

    console.log('character weight: ', driverStats?.weight);
    console.log('kart weight: ', kartStats?.weight);
    console.log('tire weight: ', tireStats?.weight);
    console.log('glider weight: ', gliderStats?.weight);
  }, [driver, kart, tire, glider]);
  function getCharacterStats(characterId: string) {
    return characterId ? getCharacter(driver).stats : null;
  }
  function getKartStats(kartId: string) {
    return kartId ? getKart(kart).stats : null;
  }

  function getTireStats(tireId: string) {
    return tireId ? getTire(tire).stats : null;
  }

  function getGliderStats(gliderId: string) {
    return gliderId ? getGlider(gliderId).stats : null;
  }

  return (
    <>
      <div className="container-fluid">
        <p>character stat: {driverStats?.weight}</p>
        <p>kart stat: {kartStats?.weight ?? 'none'}</p>
        <p>tire stat: {tireStats?.weight ?? 'none'}</p>
        <p>glider stat: {gliderStats?.weight ?? 'none'}</p>
        <p>overall stat: {overallStats.weight}</p>
        <p>displayed bar %: {displayStats.weight}</p>
        <StatBar statName="Speed" displayValue={displayStats.weight}></StatBar>
      </div>
    </>
  );
}

export default AllStats;
