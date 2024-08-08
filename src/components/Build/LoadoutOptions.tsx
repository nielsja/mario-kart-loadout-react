import { CHARACTERS } from '../../entities/Characters';
import { GLIDERS } from '../../entities/Gliders';
import { KARTS } from '../../entities/Karts';
import { TIRES } from '../../entities/Tires';
import './Build.css';
import BuildOption from './BuildOption';
import { Options } from './BuildOptionsModal';

interface LoadoutOptionsProps {
  selectedDriverId: string;
  handleSelectedDriver: (id: string) => void;
  selectedKartId: string;
  handleSelectedKart: (id: string) => void;
  selectedTireId: string;
  handleSelectedTire: (id: string) => void;
  selectedGliderId: string;
  handleSelectedGlider: (id: string) => void;
}

function LoadoutOptions(props: LoadoutOptionsProps) {
  const characterOptions: Options[] = CHARACTERS.map((char) => {
    return {
      id: char.id,
      displayName: char.displayName,
      imageUrl: char.imageUrl,
    };
  });
  const kartOptions: Options[] = KARTS.map((kart) => {
    return {
      id: kart.id,
      displayName: kart.displayName,
      imageUrl: kart.imageUrl,
    };
  });
  const tireOptions: Options[] = TIRES.map((tire) => {
    return {
      id: tire.id,
      displayName: tire.displayName,
      imageUrl: tire.imageUrl,
    };
  });
  const gliderOptions: Options[] = GLIDERS.map((glider) => {
    return {
      id: glider.id,
      displayName: glider.displayName,
      imageUrl: glider.imageUrl,
    };
  });

  return (
    <>
      <BuildOption
        id={props.selectedDriverId}
        allOptions={characterOptions}
        onSelectOption={props.handleSelectedDriver}
      ></BuildOption>
      <BuildOption
        id={props.selectedKartId}
        allOptions={kartOptions}
        onSelectOption={props.handleSelectedKart}
      ></BuildOption>
      <BuildOption
        id={props.selectedTireId}
        allOptions={tireOptions}
        onSelectOption={props.handleSelectedTire}
      ></BuildOption>
      <BuildOption
        id={props.selectedGliderId}
        allOptions={gliderOptions}
        onSelectOption={props.handleSelectedGlider}
      ></BuildOption>
    </>
  );
}

export default LoadoutOptions;
