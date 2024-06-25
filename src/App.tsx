import { useState } from 'react';
import './App.css';
import LoadoutOption from './components/LoadoutOption';
import SelectedOption from './components/SelectedOption';
import { CHARACTERS } from './entities/Characters';

function App() {
  // const [count, setCount] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState('metal-mario');

  // const metalMario = {
  //   optionName: 'metal-mario',
  //   displayName: 'Metal Mario',
  //   imageUrl: 'https://www.mariowiki.com/images/e/e3/MK8_MMario_Icon.png',
  // };
  const characterOptions = CHARACTERS.map((char) => {
    return {
      optionName: char.id,
      displayName: char.displayName,
      imageUrl: char.imageUrl,
    };
  });
  const handleCharacterSelectOption = (characterName: string) => {
    console.log(`${characterName} selected!`);
    setSelectedCharacter(characterName);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <SelectedOption
              cardTitle={selectedCharacter}
              imageUrl="https://www.mariowiki.com/images/e/e3/MK8_MMario_Icon.png"
            ></SelectedOption>
            <LoadoutOption
              options={characterOptions}
              onSelectOption={handleCharacterSelectOption}
            ></LoadoutOption>
          </div>
          <div className="col-sm">One of three columns</div>
          <div className="col-sm">One of three columns</div>
        </div>
      </div>
    </>
  );
}

export default App;
