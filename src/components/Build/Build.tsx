import { getCharacter } from '../../entities/Characters';
import { getGlider } from '../../entities/Gliders';
import { getKart } from '../../entities/Karts';
import { getTire } from '../../entities/Tires';
import AllStats from '../Stats/AllStats';
import SelectedOption from './SelectedOption';

export interface BuildProps {
  id: string;
  displayName: string;
  imageUrl: string;
}

interface SelectorsProps {
  driverId: string;
  kartId: string;
  tireId: string;
  gliderId: string;
}
function Build({ driverId, kartId, tireId, gliderId }: SelectorsProps) {
  const driver = driverId ? getCharacter(driverId) : null;
  const kart = kartId ? getKart(kartId) : null;
  const tire = tireId ? getTire(tireId) : null;
  const glider = gliderId ? getGlider(gliderId) : null;  

  return (
    <>
      <div className="row">
        <SelectedOption
          cardTitle={driver?.displayName ?? ''}
          imageUrl={driver?.imageUrl ?? ''}
        ></SelectedOption>

        <SelectedOption
          cardTitle={kart?.displayName ?? ''}
          imageUrl={kart?.imageUrl ?? ''}
        ></SelectedOption>


        <SelectedOption
          cardTitle={tire?.displayName ?? ''}
          imageUrl={tire?.imageUrl ?? ''}
          ></SelectedOption>
        <SelectedOption
          cardTitle={glider?.displayName ?? ''}
          imageUrl={glider?.imageUrl ?? ''}
          ></SelectedOption>
      </div>
      <div className="row">
        <AllStats
            driverId={driver?.id ?? ''}
            kartId={kart?.id ?? ''}
            tireId={tire?.id ?? ''}
            gliderId={glider?.id ?? ''}
          ></AllStats>
      </div>
    </>
  );
}

export default Build;
