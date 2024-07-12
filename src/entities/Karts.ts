import { IStats } from '../components/Stats/IStats';

// TODO: add remaining Karts
export enum Karts {
  StandardKart = 'standard-kart',
  PipeFrame = 'pipe-frame',
  Mach8 = 'mach-8',
}

export interface IKart {
  id: Karts;
  displayName: string;
  imageUrl: string;
  stats: IStats;
}

export const STANDARD_KART: IKart = {
  id: Karts.StandardKart,
  displayName: 'Standard Kart',
  imageUrl: 'https://mario.wiki.gallery/images/0/05/StandardKartBodyMK8.png',
  stats: { weight: 2, acceleration: 4 },
};
export const PIPE_FRAME: IKart = {
  id: Karts.PipeFrame,
  displayName: 'Pipe Frame',
  imageUrl: 'https://mario.wiki.gallery/images/d/d1/PipeFrameBodyMK8.png',
  stats: { weight: 1, acceleration: 6 },
};

export const MACH_8: IKart = {
  id: Karts.Mach8,
  displayName: 'Mach 8',
  imageUrl: 'https://mario.wiki.gallery/images/d/df/Mach8BodyMK8.png',
  stats: { weight: 3, acceleration: 3 },
};

export const KARTS: IKart[] = [STANDARD_KART, PIPE_FRAME, MACH_8];

export function getKart(id: string): IKart {
  const kart = KARTS.find((kart) => kart.id === id);
  if (!kart) {
    throw new Error(`Kart associated with id ${id} not found.`);
  }
  return kart;
}
