import { useState } from 'react';
import './App.css';
import Build from './components/Build/Build';
import Sources from './components/Layout/Sources';
import LoadoutOption from './components/Selectors/LoadoutOption';
import { CHARACTERS } from './entities/Characters';
import { GLIDERS } from './entities/Gliders';
import { KARTS } from './entities/Karts';
import { TIRES } from './entities/Tires';

function App() {
  // selectors
  const characterOptions: LoadoutOption[] = CHARACTERS.map((char) => {
    return {
      optionId: char.id,
      displayName: char.displayName,
      imageUrl: char.imageUrl,
    };
  });
  const kartOptions: LoadoutOption[] = KARTS.map((kart) => {
    return {
      optionId: kart.id,
      displayName: kart.displayName,
      imageUrl: kart.imageUrl,
    };
  });
  const tireOptions: LoadoutOption[] = TIRES.map((tire) => {
    return {
      optionId: tire.id,
      displayName: tire.displayName,
      imageUrl: tire.imageUrl,
    };
  });
  const gliderOptions: LoadoutOption[] = GLIDERS.map((glider) => {
    return {
      optionId: glider.id,
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
        {/* Select driver, kart, tires, glider */}
        <div className="container-fluid row">
          {/* Character selector */}
          <div className="col-4">
            <LoadoutOption
              options={characterOptions}
              onSelectOption={handleSelectedDriver}
            ></LoadoutOption>
          </div>

          {/* Kart selector */}
          <div className="col-4">
            <LoadoutOption
              options={kartOptions}
              onSelectOption={handleSelectedKart}
            ></LoadoutOption>
          </div>

          {/* Tire selector */}
          {/* Glider selector */}
          <div className="col-4">
            <LoadoutOption
              options={tireOptions}
              onSelectOption={handleSelectedTire}
            ></LoadoutOption>
            <LoadoutOption
              options={gliderOptions}
              onSelectOption={handleSelectedGlider}
            ></LoadoutOption>
          </div>
        </div>

        {/* Loadout builds */}
        <div className="container-fluid row">
          <div className="col-6">
            <Build
              driverId={selectedDriverId}
              kartId={selectedKartId}
              tireId={selectedTireId}
              gliderId={selectedGliderId}
            ></Build>
          </div>
        </div>
        {/* Sources */}
        <div>
          <Sources></Sources>
        </div>
      </div>
    </>
  );
}

export default App;
