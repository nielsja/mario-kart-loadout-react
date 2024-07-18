import './Stats.css';

export interface StatsProps {
  statName: string;
  displayValue: number;
}

function StatBar({ statName, displayValue }: StatsProps) {
  // TODO: make the labels display on top of bar and on hover when narrow?
  return (
    <>
      <div className="stat-bar-row">
        <div className="col-3">{statName}</div>
        <div className="col-6">
          <progress value={displayValue}></progress>
        </div>
      </div>
    </>
  );
}

export default StatBar;
