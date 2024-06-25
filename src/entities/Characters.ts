export enum Characters {
  // Mario = 'mario',
  // Luigi,
  // Peach,
  // Daisy,
  // Rosalina,
  // TanookiMario,
  // CatPeach,
  // Birdo,
  // Yoshi,
  // Toad,
  // KoopaTroopa,
  // ShyGuy,
  // Lakitu,
  // Toadette,
  // KingBoo,
  // PetePiranha,
  // BabyMario,
  // BabyLuigi,
  // BabyPeach,
  // BabyDaisy,
  // BabyRosalina,
  MetalMario = 'metal-mario',
  PinkGoldPeach = 'pink-gold-peach',
  // Wiggler,
  // Wario,
  // Waluigi,
  // DonkeyKong,
  // Bowser,
  // DryBones,
  // BowserJr,
}

export interface ICharacter {
  id: Characters;
  displayName: string;
  imageUrl: string;
}

export const METAL_MARIO = {
  id: Characters.MetalMario,
  displayName: 'Metal Mario',
  imageUrl: 'https://www.mariowiki.com/images/e/e3/MK8_MMario_Icon.png',
};
export const PINK_GOLD_PEACH = {
  id: Characters.PinkGoldPeach,
  displayName: 'Pink Gold Peach',
  imageUrl: 'https://www.mariowiki.com/images/0/0d/MK8_PGPeach_Icon.png',
};
export const CHARACTERS: ICharacter[] = [METAL_MARIO, PINK_GOLD_PEACH];

export function getCharacter(id: string) {
  return CHARACTERS.find((char) => {
    char.id === id;
  });
}
