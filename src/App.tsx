import { useState } from 'react';
import './App.css';
import Selectors from './components/Selectors/Selectors';
import {
  calculateDisplayBarPercentage,
  calculateStats,
} from './components/Stats/CalculateStats';
import Stats from './components/Stats/Stats';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [selectedKart, setSelectedKart] = useState('');
  const [selectedTire, setSelectedTire] = useState('');
  const [selectedGlider, setSelectedGlider] = useState('');
  const [driverStat, setDriverStat] = useState(6);
  const [kartStat, setKartStat] = useState(4);
  const [tireStat, setTireStat] = useState(4);
  const [gliderStat, setGliderStat] = useState(0);
  const [overallStat, setOverallStat] = useState(0);
  const [displayStat, setDisplayStat] = useState(0);

  function updateOverallStats() {
    setOverallStat(calculateStats(driverStat, kartStat, tireStat, gliderStat));
    setDisplayStat(calculateDisplayBarPercentage(overallStat));
  }
  return (
    <>
      <div className="container-fluid">
        {/* <p>{selectedCharacter}</p> */}
        {/* <p>{selectedKart}</p> */}
        {/* <p>{selectedTire}</p> */}
        {/* <p>{selectedGlider}</p> */}
        <Selectors
          onSelectedCharacter={setSelectedCharacter}
          onSelectedKart={setSelectedKart}
          onSelectedTire={setSelectedTire}
          onSelectedGlider={setSelectedGlider}
        ></Selectors>
      </div>

      <div className="container-fluid">
        <input
          value={driverStat}
          onChange={(e) => {
            setDriverStat(Number(e.target.value));
            updateOverallStats();
          }}
        />
        <input
          value={kartStat}
          onChange={(e) => {
            setKartStat(Number(e.target.value));
            updateOverallStats();
          }}
        />
        <input
          value={tireStat}
          onChange={(e) => {
            setTireStat(Number(e.target.value));
            updateOverallStats();
          }}
        />
        <input
          value={gliderStat}
          onChange={(e) => {
            setGliderStat(Number(e.target.value));
            updateOverallStats();
          }}
        />
        <p>calculated stat: {overallStat}</p>
        <p>displayed bar %: {displayStat}</p>
        <Stats stat={displayStat}></Stats>
      </div>
    </>
  );
}

export default App;
