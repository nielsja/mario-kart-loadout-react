import { useState } from 'react';
import './App.css';
import Sources from './components/Layout/Sources';
import Selectors from './components/Selectors/Selectors';
import AllStats from './components/Stats/AllStats';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [selectedKart, setSelectedKart] = useState('');
  const [selectedTire, setSelectedTire] = useState('');
  const [selectedGlider, setSelectedGlider] = useState('');

  return (
    <>
      <div className="container-fluid">
        <Selectors
          onSelectedCharacter={setSelectedCharacter}
          onSelectedKart={setSelectedKart}
          onSelectedTire={setSelectedTire}
          onSelectedGlider={setSelectedGlider}
        ></Selectors>
      </div>
      <div className="container-fluid">
        <AllStats
          driverId={selectedCharacter}
          kartId={selectedKart}
          tireId={selectedTire}
          gliderId={selectedGlider}
        ></AllStats>
      </div>
      <p>
        <Sources></Sources>
      </p>
    </>
  );
}

export default App;
