import './Stats.css';

export interface StatsProps {
  statName: string;
  displayValue: number;
}

function StatBar({ statName, displayValue }: StatsProps) {
  return (
    <>
      <div className="row stat-bar-row">
        <div className="col-3">{statName}</div>
        <div className="col-6 stat-bar">
          <progress value={displayValue}></progress>
        </div>
      </div>
    </>
  );
}

export default StatBar;
