export enum Karts {
  StandardKart = 'standard-kart',
  PipeFrame = 'pipe-frame',
  Mach8 = 'mach-8',
}

export interface IKart {
  id: Karts;
  displayName: string;
  imageUrl: string;
}

export const STANDARD_KART = {
  id: Karts.StandardKart,
  displayName: 'Standard Kart',
  imageUrl: 'https://mario.wiki.gallery/images/0/05/StandardKartBodyMK8.png',
};
export const PIPE_FRAME = {
  id: Karts.PipeFrame,
  displayName: 'Pipe Frame',
  imageUrl: 'https://mario.wiki.gallery/images/d/d1/PipeFrameBodyMK8.png',
};

export const MACH_8 = {
  id: Karts.Mach8,
  displayName: 'Mach 8',
  imageUrl: 'https://mario.wiki.gallery/images/d/df/Mach8BodyMK8.png',
};

export const KARTS: IKart[] = [STANDARD_KART, PIPE_FRAME, MACH_8];

export function getKart(id: string) {
  return KARTS.find((kart) => kart.id === id);
}
