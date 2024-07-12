import { IStats } from '../components/Stats/IStats';

// TODO: add remaining Gliders
// TODO: reorganize this file so function is up top and actual values are below

export enum Gliders {
  SuperGlider = 'super-glider',
  CloudGlider = 'cloud-glider',
  WarioWing = 'wario-wing',
}

export interface IGlider {
  id: Gliders;
  displayName: string;
  imageUrl: string;
  stats: IStats;
}

export const SUPER_GLIDER: IGlider = {
  id: Gliders.SuperGlider,
  displayName: 'Super Glider',
  imageUrl: 'https://mario.wiki.gallery/images/a/a8/SuperGliderMK8.png',
  stats: { weight: 1, acceleration: 1 },
};
export const CLOUD_GLIDER: IGlider = {
  id: Gliders.CloudGlider,
  displayName: 'Cloud Glider',
  imageUrl: 'https://mario.wiki.gallery/images/8/84/Cloud_Glider.png',
  stats: { weight: 0, acceleration: 2 },
};

export const WARIO_WING: IGlider = {
  id: Gliders.WarioWing,
  displayName: 'Wario Wing',
  imageUrl: 'https://mario.wiki.gallery/images/a/ae/WarioWingMK8.png',
  stats: { weight: 2, acceleration: 1 },
};

export const GLIDERS: IGlider[] = [SUPER_GLIDER, CLOUD_GLIDER, WARIO_WING];

export function getGlider(id: string) {
  const glider = GLIDERS.find((glider) => glider.id === id);
  if (!glider) {
    throw new Error(`Glider associated with id ${id} not found.`);
  }
  return glider;
}
