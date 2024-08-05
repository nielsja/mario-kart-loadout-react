import Container from 'react-bootstrap/Container';
import LoadoutOptions from '../Build/LoadoutOptions';
import AllStats from '../Stats/AllStats';

interface LoadoutProps {
  driverId: string;
  onDriverSelect: (id: string) => void;
  kartId: string;
  onKartSelect: (id: string) => void;
  tireId: string;
  onTireSelect: (id: string) => void;
  gliderId: string;
  onGliderSelect: (id: string) => void;
}

function Loadout(props: LoadoutProps) {
  return (
    <>
      <Container className="loadout-options-container">
        <LoadoutOptions
          selectedDriverId={props.driverId}
          handleSelectedDriver={props.onDriverSelect}
          selectedKartId={props.kartId}
          handleSelectedKart={props.onKartSelect}
          selectedTireId={props.tireId}
          handleSelectedTire={props.onTireSelect}
          selectedGliderId={props.gliderId}
          handleSelectedGlider={props.onGliderSelect}
        ></LoadoutOptions>
      </Container>
      <Container className="loadout-stats-container">
        <AllStats
          driverId={props.driverId}
          kartId={props.kartId}
          tireId={props.tireId}
          gliderId={props.gliderId}
        ></AllStats>
      </Container>
    </>
  );
}
export default Loadout;
