import { useState } from 'react';
import './App.css';
import LoadoutLayout from './components/LoadoutLayout';
import { CHARACTERS, getCharacter } from './entities/Characters';

function App() {
  // const [count, setCount] = useState(0);

  // const metalMario = {
  //   optionName: 'metal-mario',
  //   displayName: 'Metal Mario',
  //   imageUrl: 'https://www.mariowiki.com/images/e/e3/MK8_MMario_Icon.png',
  // };

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
    console.log(`${characterId} selected!`);
    const selectedCharacter = getCharacter(characterId);
    setSelectedCharacter(characterId);
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
