import { useState } from 'react';
import { CHARACTERS, getCharacter } from '../../entities/Characters';
import { GLIDERS, getGlider } from '../../entities/Gliders';
import { KARTS, getKart } from '../../entities/Karts';
import { TIRES, getTire } from '../../entities/Tires';
import LoadoutOption from './LoadoutOption';
import SelectedOption from './SelectedOption';

export interface SelectorsProps {
  onSelectedCharacter: (id: string) => void;
  onSelectedKart: (id: string) => void;
  onSelectedTire: (id: string) => void;
  onSelectedGlider: (id: string) => void;
}
function Selectors({
  onSelectedCharacter,
  onSelectedKart,
  onSelectedTire,
  onSelectedGlider,
}: SelectorsProps) {
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
  const handleSelectedCharacter = (characterId: string) => {
    const selectedCharacter = getCharacter(characterId);
    setSelectedCharacter(selectedCharacter?.displayName ?? '');
    setSelectedCharacterImage(selectedCharacter?.imageUrl ?? '');
    onSelectedCharacter(characterId);
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
  const handleSelectedKart = (kartId: string) => {
    const selectedKart = getKart(kartId);
    setSelectedKart(selectedKart?.displayName ?? '');
    setSelectedKartImage(selectedKart?.imageUrl ?? '');
    onSelectedKart(kartId);
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
  const handleSelectedTire = (tireId: string) => {
    const selectedTire = getTire(tireId);
    setSelectedTire(selectedTire?.displayName ?? '');
    setSelectedTireImage(selectedTire?.imageUrl ?? '');
    onSelectedTire(tireId);
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
  const handleSelectedGlider = (gliderId: string) => {
    const selectedGlider = getGlider(gliderId);
    setSelectedGlider(selectedGlider?.displayName ?? '');
    setSelectedGliderImage(selectedGlider?.imageUrl ?? '');
    onSelectedGlider(gliderId);
  };

  return (
    <>
      <div className="row">
        {/* Character selector */}
        <div className="col-xs-10 m-xs-2 col-sm-3 m-sm-auto">
          <div className="col">
            <SelectedOption
              cardTitle={selectedCharacter}
              imageUrl={selectedCharacterImage}
            ></SelectedOption>
            <LoadoutOption
              options={characterOptions}
              onSelectOption={handleSelectedCharacter}
            ></LoadoutOption>
          </div>
        </div>

        {/* Kart selector */}
        <div className="col-xs-10 m-xs-2 col-sm-3 m-sm-auto">
          <div className="col">
            <SelectedOption
              cardTitle={selectedKart}
              imageUrl={selectedKartImage}
            ></SelectedOption>
            <LoadoutOption
              options={kartOptions}
              onSelectOption={handleSelectedKart}
            ></LoadoutOption>
          </div>
        </div>
        {/* Tire selector */}

        <div className="col-xs-10 m-xs-2 col-sm-3 m-sm-auto">
          <div className="col">
            <SelectedOption
              cardTitle={selectedTire}
              imageUrl={selectedTireImage}
            ></SelectedOption>
            <LoadoutOption
              options={tireOptions}
              onSelectOption={handleSelectedTire}
            ></LoadoutOption>
          </div>
        </div>

        {/* Glider selector */}
        <div className="col-xs-10 m-xs-2 col-sm-3 m-sm-auto">
          <div className="col">
            <SelectedOption
              cardTitle={selectedGlider}
              imageUrl={selectedGliderImage}
            ></SelectedOption>
            <LoadoutOption
              options={gliderOptions}
              onSelectOption={handleSelectedGlider}
            ></LoadoutOption>
          </div>
        </div>
      </div>
    </>
  );
}

export default Selectors;
