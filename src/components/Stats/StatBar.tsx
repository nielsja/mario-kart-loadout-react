import './StatBar.css';

export interface StatsProps {
  statName: string;
  displayValue: number;
}

function StatBar({ statName, displayValue }: StatsProps) {
  // const [stat, setStat] = useState(statPercentage);

  return (
    <>
      <div className="row">
        <div className="col-3">{statName}</div>
        <div className="col-6 stat-bar-container">
          <progress value={displayValue}></progress>
        </div>
      </div>
    </>
  );
}

export default StatBar;
