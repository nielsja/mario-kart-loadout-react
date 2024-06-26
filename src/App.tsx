import { useState } from 'react';
import './App.css';
import LoadoutLayout from './components/LoadoutLayout';
import { CHARACTERS, getCharacter } from './entities/Characters';
import { KARTS, getKart } from './entities/Karts';

function App() {
  // character selection
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [selectedCharacterImage, setSelectedCharacterImage] = useState('');
  const characterOptions = CHARACTERS.map((char) => {
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

  const [selectedKart, setSelectedKart] = useState('');
  const [selectedKartImage, setSelectedKartImage] = useState('');
  const kartOptions = KARTS.map((kart) => {
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

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-xs-10 p-1">
            <LoadoutLayout
              selectedOptionTitle={selectedCharacter}
              selectedOptionImage={selectedCharacterImage}
              loadoutOptions={characterOptions}
              optionSelectedHandler={handleCharacterSelectOption}
            ></LoadoutLayout>
          </div>
          <div className="col-sm-4 col-xs-10 p-1">
            <LoadoutLayout
              selectedOptionTitle={selectedKart}
              selectedOptionImage={selectedKartImage}
              loadoutOptions={kartOptions}
              optionSelectedHandler={handleKartSelectOption}
            ></LoadoutLayout>
          </div>
          <div className="col-sm-4 col-xs-10 p-1">One of three columns</div>
        </div>
      </div>
    </>
  );
}

export default App;
