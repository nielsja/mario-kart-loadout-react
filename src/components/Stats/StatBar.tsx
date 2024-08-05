import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import './Stats.css';

export interface StatsProps {
  statName: string;
  displayValue: number;
}

function StatBar({ statName, displayValue }: StatsProps) {
  return (
    <>
      <Row className="stat-bar-row">
        <Col xs={12} className="stat-bar-col">
          <span className="stat-bar-label">{statName}</span>
          <ProgressBar
            min={0}
            max={1}
            now={displayValue}
            label={statName}
            visuallyHidden
          ></ProgressBar>
        </Col>
      </Row>
    </>
  );
}

export default StatBar;
