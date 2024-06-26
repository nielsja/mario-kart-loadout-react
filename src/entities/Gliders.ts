// TODO: add remaining Gliders
export enum Gliders {
  SuperGlider = 'super-glider',
  CloudGlider = 'cloud-glider',
  WarioWing = 'wario-wing',
}

export interface IGlider {
  id: Gliders;
  displayName: string;
  imageUrl: string;
}

export const SUPER_GLIDER = {
  id: Gliders.SuperGlider,
  displayName: 'Super Glider',
  imageUrl: 'https://mario.wiki.gallery/images/a/a8/SuperGliderMK8.png',
};
export const CLOUD_GLIDER = {
  id: Gliders.CloudGlider,
  displayName: 'Cloud Glider',
  imageUrl: 'https://mario.wiki.gallery/images/8/84/Cloud_Glider.png',
};

export const WARIO_WING = {
  id: Gliders.WarioWing,
  displayName: 'Wario Wing',
  imageUrl: 'https://mario.wiki.gallery/images/a/ae/WarioWingMK8.png',
};

export const GLIDERS: IGlider[] = [SUPER_GLIDER, CLOUD_GLIDER, WARIO_WING];

export function getGlider(id: string) {
  return GLIDERS.find((glider) => glider.id === id);
}
