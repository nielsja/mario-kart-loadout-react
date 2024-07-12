import { useState } from 'react';
import './App.css';
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
        <p>{selectedCharacter}</p>
        <p>{selectedKart}</p>
        <p>{selectedTire}</p>
        <p>{selectedGlider}</p>
        <Selectors
          onSelectedCharacter={setSelectedCharacter}
          onSelectedKart={setSelectedKart}
          onSelectedTire={setSelectedTire}
          onSelectedGlider={setSelectedGlider}
        ></Selectors>
      </div>
      <div className="container-fluid">
        <AllStats
          driver={selectedCharacter}
          kart={selectedKart}
          tire={selectedTire}
          glider={selectedGlider}
        ></AllStats>
      </div>
    </>
  );
}

export default App;
