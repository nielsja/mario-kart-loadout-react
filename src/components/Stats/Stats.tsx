import './Stats.css';
export interface StatsProps {
  stat: number;
}
function Stats({ stat }: StatsProps) {
  // const [speedStat, setSpeedStat] = useState(stat);
  // const updateSpeedBar = (newSpeed: number) => {
  //   setSpeedStat(newSpeed);
  // };
  // updateSpeedBar(stat);
  // const speedBar = Array(stat);
  return (
    <>
      <div className="row">
        <div className="col-3">Speed</div>
        <div className="col-6 stat-bar-container">
          <progress value={stat}></progress>
          {/* {Array(stat).map((n, i) => {
            return (
              <div key={`speed-bar=${i}`} className="speed-bar">
                .
              </div>
            );
          })} */}
        </div>
      </div>
    </>
  );
}

export default Stats;
