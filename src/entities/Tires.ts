import { IStats } from '../components/Stats/IStats';

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
  stats: IStats;
}

export const STANDARD_TIRE: ITire = {
  id: Tires.Standard,
  displayName: 'Standard',
  imageUrl: 'https://mario.wiki.gallery/images/a/a8/StandardTiresMK8.png',
  stats: { weight: 2, acceleration: 4 },
};
export const MONSTER_TIRE: ITire = {
  id: Tires.Monster,
  displayName: 'Monster',
  imageUrl: 'https://mario.wiki.gallery/images/2/29/MonsterTiresMK8.png',
  stats: { weight: 4, acceleration: 2 },
};

export const ROLLER_TIRE: ITire = {
  id: Tires.Roller,
  displayName: 'Roller',
  imageUrl: 'https://mario.wiki.gallery/images/7/76/RollerTiresMK8.png',
  stats: { weight: 0, acceleration: 6 },
};

export const TIRES: ITire[] = [STANDARD_TIRE, MONSTER_TIRE, ROLLER_TIRE];

export function getTire(id: string) {
  const tire = TIRES.find((tire) => tire.id === id);
  if (!tire) {
    throw new Error(`Tire associated with id ${id} not found.`);
  }
  return tire;
}
