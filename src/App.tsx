import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './App.css';
import AppHeader from './components/Layout/AppHeader';
import Loadout from './components/Layout/Loadout';
import Sources from './components/Layout/Sources';
import Toolbar from './components/Layout/Toolbar';

function App() {
  // selected driver/kart/tire/glider
  const [driver1Id, setDriver1Id] = useState('');
  const [kart1Id, setKart1Id] = useState('');
  const [tire1Id, setTire1Id] = useState('');
  const [glider1Id, setGlider1Id] = useState('');

  const [driver2Id, setDriver2Id] = useState('');
  const [kart2Id, setKart2Id] = useState('');
  const [tire2Id, setTire2Id] = useState('');
  const [glider2Id, setGlider2Id] = useState('');

  return (
    <>
      <div className="app-background">
        <Container className="app-container">
          <Container className="app-header-container">
            <AppHeader></AppHeader>
          </Container>

          {/* Loadout builds */}
          <Container className="app-main-content-container">
            <Container className="toolbar-container">
              <Toolbar></Toolbar>
            </Container>

            <Container className="loadout-container">
              <Col xs={12} md={6}>
                <Loadout
                  driverId={driver1Id}
                  onDriverSelect={setDriver1Id}
                  kartId={kart1Id}
                  onKartSelect={setKart1Id}
                  tireId={tire1Id}
                  onTireSelect={setTire1Id}
                  gliderId={glider1Id}
                  onGliderSelect={setGlider1Id}
                ></Loadout>
              </Col>
              <Col xs={12} md={6}>
                <Loadout
                  driverId={driver2Id}
                  onDriverSelect={setDriver2Id}
                  kartId={kart2Id}
                  onKartSelect={setKart2Id}
                  tireId={tire2Id}
                  onTireSelect={setTire2Id}
                  gliderId={glider2Id}
                  onGliderSelect={setGlider2Id}
                ></Loadout>
              </Col>
            </Container>
          </Container>

          <Container className="app-footer-container">
            <Sources></Sources>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default App;
