import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';
import BuildOption from './components/Build/BuildOption';
import { Options } from './components/Build/BuildOptionsModal';
import Sources from './components/Layout/Sources';
import AllStats from './components/Stats/AllStats';
import { CHARACTERS } from './entities/Characters';
import { GLIDERS } from './entities/Gliders';
import { KARTS } from './entities/Karts';
import { TIRES } from './entities/Tires';

function App() {
  // selectors options
  const characterOptions: Options[] = CHARACTERS.map((char) => {
    return {
      id: char.id,
      displayName: char.displayName,
      imageUrl: char.imageUrl,
    };
  });
  const kartOptions: Options[] = KARTS.map((kart) => {
    return {
      id: kart.id,
      displayName: kart.displayName,
      imageUrl: kart.imageUrl,
    };
  });
  const tireOptions: Options[] = TIRES.map((tire) => {
    return {
      id: tire.id,
      displayName: tire.displayName,
      imageUrl: tire.imageUrl,
    };
  });
  const gliderOptions: Options[] = GLIDERS.map((glider) => {
    return {
      id: glider.id,
      displayName: glider.displayName,
      imageUrl: glider.imageUrl,
    };
  });

  // selected driver/kart/tire/glider
  const [selectedDriverId, setSelectedDriverId] = useState('');
  const [selectedKartId, setSelectedKartId] = useState('');
  const [selectedTireId, setSelectedTireId] = useState('');
  const [selectedGliderId, setSelectedGliderId] = useState('');

  // on driver/kart/tire/glider selection handlers
  const handleSelectedDriver = (id: string) => {
    setSelectedDriverId(id);
  };
  const handleSelectedKart = (id: string) => {
    setSelectedKartId(id);
  };
  const handleSelectedTire = (id: string) => {
    setSelectedTireId(id);
  };
  const handleSelectedGlider = (id: string) => {
    setSelectedGliderId(id);
  };

  return (
    <>
      <div className="app-container">
        {/* Loadout builds */}
        <Container>
          <Col xs={6} md={4}>
            <Row>
              <Col>
                <BuildOption
                  id={selectedDriverId}
                  allOptions={characterOptions}
                  onSelectOption={handleSelectedDriver}
                ></BuildOption>
              </Col>
              <Col>
                <BuildOption
                  id={selectedKartId}
                  allOptions={kartOptions}
                  onSelectOption={handleSelectedKart}
                ></BuildOption>
              </Col>
              <Col>
                <BuildOption
                  id={selectedTireId}
                  allOptions={tireOptions}
                  onSelectOption={handleSelectedTire}
                ></BuildOption>
              </Col>
              <Col>
                <BuildOption
                  id={selectedGliderId}
                  allOptions={gliderOptions}
                  onSelectOption={handleSelectedGlider}
                ></BuildOption>
              </Col>
            </Row>
            <Row>
              <AllStats
                driverId={selectedDriverId}
                kartId={selectedKartId}
                tireId={selectedTireId}
                gliderId={selectedGliderId}
              ></AllStats>
            </Row>
          </Col>
        </Container>
        {/* Sources */}
        <div>
          <Sources></Sources>
        </div>
      </div>
    </>
  );
}

export default App;
