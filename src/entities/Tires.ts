// TODO: add remaining Tires
export enum Tires {
  Standard = 'standard-tire',
  Monster = 'monster-tire',
  Roller = 'roller-tire',
}

export interface ITire {
  id: Tires;
  displayName: string;
  imageUrl: string;
}

export const STANDARD_TIRE = {
  id: Tires.Standard,
  displayName: 'Standard',
  imageUrl: 'https://mario.wiki.gallery/images/a/a8/StandardTiresMK8.png',
};
export const MONSTER_TIRE = {
  id: Tires.Monster,
  displayName: 'Monster',
  imageUrl: 'https://mario.wiki.gallery/images/2/29/MonsterTiresMK8.png',
};

export const ROLLER_TIRE = {
  id: Tires.Roller,
  displayName: 'Roller',
  imageUrl: 'https://mario.wiki.gallery/images/7/76/RollerTiresMK8.png',
};

export const TIRES: ITire[] = [STANDARD_TIRE, MONSTER_TIRE, ROLLER_TIRE];

export function getTire(id: string) {
  return TIRES.find((tire) => tire.id === id);
}
