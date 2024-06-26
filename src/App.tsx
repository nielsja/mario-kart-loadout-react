import { useState } from 'react';
import './App.css';
import LoadoutLayout from './components/LoadoutLayout';
import { CHARACTERS, getCharacter } from './entities/Characters';

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

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-xs-10 p-1">
            <LoadoutLayout
              selectedOptionTitle={selectedCharacter}
              selectedOptionImage={selectedCharacterImage}
              loadoutOptions={characterOptions}
              optionSelectedHandler={handleCharacterSelectOption}
            ></LoadoutLayout>
          </div>
          <div className="col-md-4 col-xs-10 p-1">One of three columns</div>
          <div className="col-md-4 col-xs-10 p-1">One of three columns</div>
        </div>
      </div>
    </>
  );
}

export default App;
