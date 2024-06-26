import { useState } from 'react';
import './App.css';
import LoadoutLayout from './components/LoadoutLayout';
import LoadoutOption from './components/LoadoutOption';
import { CHARACTERS, getCharacter } from './entities/Characters';
import { GLIDERS, getGlider } from './entities/Gliders';
import { KARTS, getKart } from './entities/Karts';
import { TIRES, getTire } from './entities/Tires';

function App() {
  // character selection
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [selectedCharacterImage, setSelectedCharacterImage] = useState('');
  const characterOptions: LoadoutOption[] = CHARACTERS.map((char) => {
    return {
      optionId: char.id,
      displayName: char.displayName,
      imageUrl: char.imageUrl,
    };
  });
  const handleCharacterSelectOption = (characterId: string) => {
    const selectedCharacter = getCharacter(characterId);
    setSelectedCharacter(selectedCharacter?.displayName ?? '');
    setSelectedCharacterImage(selectedCharacter?.imageUrl ?? '');
  };

  // kart selection
  const [selectedKart, setSelectedKart] = useState('');
  const [selectedKartImage, setSelectedKartImage] = useState('');
  const kartOptions: LoadoutOption[] = KARTS.map((kart) => {
    return {
      optionId: kart.id,
      displayName: kart.displayName,
      imageUrl: kart.imageUrl,
    };
  });
  const handleKartSelectOption = (kartId: string) => {
    const selectedKart = getKart(kartId);
    setSelectedKart(selectedKart?.displayName ?? '');
    setSelectedKartImage(selectedKart?.imageUrl ?? '');
  };

  // tire selection
  const [selectedTire, setSelectedTire] = useState('');
  const [selectedTireImage, setSelectedTireImage] = useState('');
  const tireOptions: LoadoutOption[] = TIRES.map((tire) => {
    return {
      optionId: tire.id,
      displayName: tire.displayName,
      imageUrl: tire.imageUrl,
    };
  });
  const handleTireSelectOption = (tireId: string) => {
    const selectedTire = getTire(tireId);
    setSelectedTire(selectedTire?.displayName ?? '');
    setSelectedTireImage(selectedTire?.imageUrl ?? '');
  };

  // glider selection
  const [selectedGlider, setSelectedGlider] = useState('');
  const [selectedGliderImage, setSelectedGliderImage] = useState('');
  const gliderOptions: LoadoutOption[] = GLIDERS.map((glider) => {
    return {
      optionId: glider.id,
      displayName: glider.displayName,
      imageUrl: glider.imageUrl,
    };
  });
  const handleGliderSelectOption = (gliderId: string) => {
    const selectedGlider = getGlider(gliderId);
    setSelectedGlider(selectedGlider?.displayName ?? '');
    setSelectedGliderImage(selectedGlider?.imageUrl ?? '');
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-xs-10 p-1">
            <LoadoutLayout
              selectedOptionTitle={selectedCharacter}
              selectedOptionImage={selectedCharacterImage}
              loadoutOptions={characterOptions}
              optionSelectedHandler={handleCharacterSelectOption}
            ></LoadoutLayout>
          </div>
          <div className="col-sm-3 col-xs-10 p-1">
            <LoadoutLayout
              selectedOptionTitle={selectedKart}
              selectedOptionImage={selectedKartImage}
              loadoutOptions={kartOptions}
              optionSelectedHandler={handleKartSelectOption}
            ></LoadoutLayout>
          </div>
          <div className="col-sm-3 col-xs-10 p-1">
            <LoadoutLayout
              selectedOptionTitle={selectedTire}
              selectedOptionImage={selectedTireImage}
              loadoutOptions={tireOptions}
              optionSelectedHandler={handleTireSelectOption}
            ></LoadoutLayout>
          </div>
          <div className="col-sm-3 col-xs-10 p-1">
            <LoadoutLayout
              selectedOptionTitle={selectedGlider}
              selectedOptionImage={selectedGliderImage}
              loadoutOptions={gliderOptions}
              optionSelectedHandler={handleGliderSelectOption}
            ></LoadoutLayout>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
