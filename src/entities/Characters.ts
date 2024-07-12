import { IStats } from '../components/Stats/IStats';

// TODO: reorganize this file so function is up top and actual values are below
export enum Characters {
  Mario = 'mario',
  Luigi = 'luigi',
  Peach = 'peach',
  Daisy = 'daisy',
  Rosalina = 'rosalina',
  TanookiMario = 'tanooki-mario',
  CatPeach = 'cat-peach',
  Birdo = 'birdo',
  Yoshi = 'yoshi',
  Toad = 'toad',
  KoopaTroopa = 'koopa-troopa',
  ShyGuy = 'shy-guy',
  Lakitu = 'lakitu',
  Toadette = 'toadette',
  KingBoo = 'king-boo',
  PetePiranha = 'pete-piranha',
  BabyMario = 'baby-mario',
  BabyLuigi = 'baby-luigi',
  BabyPeach = 'baby-peach',
  BabyDaisy = 'baby-daisy',
  BabyRosalina = 'baby-rosalina',
  MetalMario = 'metal-mario',
  PinkGoldPeach = 'pink-gold-peach',
  Wiggler = 'wiggler',
  Wario = 'wario',
  Waluigi = 'waluigi',
  DonkeyKong = 'donkey-kong',
  Bowser = 'bowser',
  DryBones = 'dry-bones',
  BowserJr = 'bowser-jr',
  DryBowser = 'dry-bowser',
  Kamek = 'kamek',
  Lemmy = 'lemmy',
  Larry = 'larry',
  Wendy = 'wendy',
  Ludgwig = 'ludwig',
  Iggy = 'iggy',
  Roy = 'roy',
  Morton = 'morton',
  Peachette = 'peachette',
  InklingGirl = 'inkling-girl',
  Villager = 'villager',
  Isabelle = 'isabelle',
  Link = 'link',
  DiddyKong = 'diddy-kong',
  FunkyKong = 'funky-kong',
  Pauline = 'pauline',
  Mii = 'mii',
}

export interface ICharacter {
  id: Characters;
  displayName: string;
  imageUrl: string;
  iconUrl: string;
  stats?: IStats; // TODO: remove the optional part later
}

export const MARIO: ICharacter = {
  id: Characters.Mario,
  displayName: 'Mario',
  imageUrl: 'https://mario.wiki.gallery/images/d/d9/MK8_Mario_Icon.png',
  iconUrl: 'https://mario.wiki.gallery/images/0/0f/MK8_Mario_Emblem.png',
  stats: { weight: 6, acceleration: 2 },
};
// export const LUIGI: ICharacter = {
//   id: Characters.Luigi,
//   displayName: 'Luigi',
//   imageUrl: 'https://mario.wiki.gallery/images/5/51/MK8_Luigi_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/8/85/MK8_Luigi_Emblem.png',
// };
export const PEACH: ICharacter = {
  id: Characters.Peach,
  displayName: 'Peach',
  imageUrl: 'https://mario.wiki.gallery/images/c/c2/MK8_Peach_Icon.png',
  iconUrl: 'https://mario.wiki.gallery/images/6/67/MK8_Peach_Emblem.png',
  stats: { weight: 4, acceleration: 3 },
};
// export const DAISY: ICharacter = {
//   id: Characters.Daisy,
//   displayName: 'Daisy',
//   imageUrl: 'https://mario.wiki.gallery/images/3/32/MK8_Daisy_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/d/d5/MK8_Daisy_Emblem.png',
// };
// export const ROSALINA: ICharacter = {
//   id: Characters.Rosalina,
//   displayName: 'Rosalina',
//   imageUrl: 'https://mario.wiki.gallery/images/8/89/MK8_Rosalina_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/b/b7/MK8_Rosalina_Emblem.png',
// };
// export const TANOOKI_MARIO: ICharacter = {
//   id: Characters.TanookiMario,
//   displayName: 'Tanooki Mario',
//   imageUrl: 'https://mario.wiki.gallery/images/a/a2/MK8_Tanooki_Mario_Icon.png',
//   iconUrl:
//     'https://mario.wiki.gallery/images/b/bd/MK8_Tanooki_Mario_Emblem.png',
// };
// export const CAT_PEACH: ICharacter = {
//   id: Characters.CatPeach,
//   displayName: 'Cat Peach',
//   imageUrl: 'https://mario.wiki.gallery/images/a/ad/MK8_Cat_Peach_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/1/16/MK8_Cat_Peach_Emblem.png',
// };
// export const BIRDO: ICharacter = {
//   id: Characters.Birdo,
//   displayName: 'Birdo',
//   imageUrl: 'https://mario.wiki.gallery/images/f/f6/MK8D_Birdo_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/c/cc/MK8D_Birdo_Emblem.png',
// };
// export const YOSHI: ICharacter = {
//   id: Characters.Yoshi,
//   displayName: 'Yoshi',
//   imageUrl: 'https://mario.wiki.gallery/images/9/91/MK8_Yoshi_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/c/c5/MK8_Green_Yoshi_Emblem.png',
// };
// export const TOAD: ICharacter = {
//   id: Characters.Toad,
//   displayName: 'Toad',
//   imageUrl: 'https://mario.wiki.gallery/images/4/45/MK8_Toad_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/8/8c/MK8_Toad_Emblem.png',
// };
// export const KOOPA_TROOPA: ICharacter = {
//   id: Characters.KoopaTroopa,
//   displayName: 'Koopa Troopa',
//   imageUrl: 'https://mario.wiki.gallery/images/b/bc/MK8_Koopa_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/a/a5/MK8_Koopa_Troopa_Emblem.png',
// };
// export const SHY_GUY: ICharacter = {
//   id: Characters.ShyGuy,
//   displayName: 'Shy Guy',
//   imageUrl: 'https://mario.wiki.gallery/images/7/7f/MK8_ShyGuy_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/4/4c/MK8_Shy_Guy_Emblem.png',
// };
// export const LAKITU: ICharacter = {
//   id: Characters.Lakitu,
//   displayName: 'Lakitu',
//   imageUrl: 'https://mario.wiki.gallery/images/7/7d/MK8_Lakitu_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/7/71/MK8_Lakitu_Emblem.png',
// };
// export const TOADETTE: ICharacter = {
//   id: Characters.Toadette,
//   displayName: 'Toadette',
//   imageUrl: 'https://mario.wiki.gallery/images/8/8e/MK8_Toadette_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/1/17/MK8_Toadette_Emblem.png',
// };
// export const KING_BOO: ICharacter = {
//   id: Characters.KingBoo,
//   displayName: 'King Boo',
//   imageUrl: 'https://mario.wiki.gallery/images/1/1d/MK8DX_King_Boo_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/c/cb/MK8D_King_Boo_Emblem.png',
// };
// export const PETE_PIRANHA: ICharacter = {
//   id: Characters.PetePiranha,
//   displayName: 'Pete Piranha',
//   imageUrl:
//     'https://mario.wiki.gallery/images/8/86/MK8DX_Petey_Piranha_Icon.png',
//   iconUrl:
//     'https://mario.wiki.gallery/images/d/d7/MK8D_Petey_Piranha_Emblem.png',
// };
// export const BABY_MARIO: ICharacter = {
//   id: Characters.BabyMario,
//   displayName: 'Baby Mario',
//   imageUrl: 'https://mario.wiki.gallery/images/d/d2/MK8_BabyMario_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/f/f2/MK8_Baby_Mario_Emblem.png',
// };
// export const BABY_LUIGI: ICharacter = {
//   id: Characters.BabyLuigi,
//   displayName: 'Baby Luigi',
//   imageUrl: 'https://mario.wiki.gallery/images/a/aa/MK8_BabyLuigi_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/a/ab/MK8_Baby_Luigi_Emblem.png',
// };
// export const BABY_PEACH: ICharacter = {
//   id: Characters.BabyPeach,
//   displayName: 'Baby Peach',
//   imageUrl: 'https://mario.wiki.gallery/images/3/3d/MK8_BabyPeach_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/8/8c/MK8_Baby_Peach_Emblem.png',
// };
// export const BABY_DAISY: ICharacter = {
//   id: Characters.BabyDaisy,
//   displayName: 'Baby Daisy',
//   imageUrl: 'https://mario.wiki.gallery/images/4/43/MK8_BabyDaisy_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/9/9e/MK8_Baby_Daisy_Emblem.png',
// };
// export const BABY_ROSALINA: ICharacter = {
//   id: Characters.BabyRosalina,
//   displayName: 'Baby Rosalina',
//   imageUrl: 'https://mario.wiki.gallery/images/0/09/MK8_BabyRosalina_Icon.png',
//   iconUrl:
//     'https://mario.wiki.gallery/images/8/8a/MK8_Baby_Rosalina_Emblem.png',
// };
// export const METAL_MARIO: ICharacter = {
//   id: Characters.MetalMario,
//   displayName: 'Metal Mario',
//   imageUrl: 'https://www.mariowiki.com/images/e/e3/MK8_MMario_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/0/0b/MK8_Metal_Mario_Emblem.png',
// };
// export const PINK_GOLD_PEACH: ICharacter = {
//   id: Characters.PinkGoldPeach,
//   displayName: 'Pink Gold Peach',
//   imageUrl: 'https://www.mariowiki.com/images/0/0d/MK8_PGPeach_Icon.png',
//   iconUrl:
//     'https://mario.wiki.gallery/images/6/6e/MK8_Pink_Gold_Peach_Emblem.png',
// };
// export const WIGGLER: ICharacter = {
//   id: Characters.Wiggler,
//   displayName: 'Wiggler',
//   imageUrl: 'https://mario.wiki.gallery/images/7/7e/MK8DX_Wiggler_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/5/56/MK8D_Wiggler_Emblem.png',
// };
// export const WARIO: ICharacter = {
//   id: Characters.Wario,
//   displayName: 'Wario',
//   imageUrl: 'https://mario.wiki.gallery/images/c/c2/MK8_Wario_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/e/eb/MK8_Wario_Emblem.png',
// };
// export const WALUIGI: ICharacter = {
//   id: Characters.Waluigi,
//   displayName: 'Waluigi',
//   imageUrl: 'https://mario.wiki.gallery/images/7/78/MK8_Waluigi_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/1/11/MK8_Waluigi_Emblem.png',
// };
// export const DONKEY_KONG: ICharacter = {
//   id: Characters.DonkeyKong,
//   displayName: 'Donkey Kong',
//   imageUrl: 'https://mario.wiki.gallery/images/0/08/MK8_DKong_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/9/94/MK8_Donkey_Kong_Emblem.png',
// };
// export const BOWSER: ICharacter = {
//   id: Characters.Bowser,
//   displayName: 'Bowser',
//   imageUrl: 'https://mario.wiki.gallery/images/4/47/MK8_Bowser_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/8/81/MK8_Bowser_Emblem.png',
// };
// export const DRY_BONES: ICharacter = {
//   id: Characters.DryBones,
//   displayName: 'Dry Bones',
//   imageUrl: 'https://mario.wiki.gallery/images/3/3f/MK8DX_Dry_Bones_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/d/d2/MK8D_Dry_Bones_Emblem.png',
// };
// export const BOWSER_JR: ICharacter = {
//   id: Characters.BowserJr,
//   displayName: 'Bowser Jr.',
//   imageUrl: 'https://mario.wiki.gallery/images/2/26/MK8_Bowser_Jr_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/5/57/MK8D_Bowser_Jr_Emblem.png',
// };
// export const DRY_BOWSER: ICharacter = {
//   id: Characters.DryBowser,
//   displayName: 'Dry Bowser',
//   imageUrl: 'https://mario.wiki.gallery/images/2/29/MK8_Dry_Bowser_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/3/3e/MK8_Dry_Bowser_Emblem.png',
// };
// export const KAMEK: ICharacter = {
//   id: Characters.Kamek,
//   displayName: 'Kamek',
//   imageUrl: 'https://mario.wiki.gallery/images/0/00/MK8DX_Kamek_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/5/59/MK8D_Kamek_Emblem.png',
// };
// export const LEMMY: ICharacter = {
//   id: Characters.Lemmy,
//   displayName: 'Lemmy',
//   imageUrl: 'https://mario.wiki.gallery/images/f/fc/MK8_Lemmy_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/0/0f/MK8_Lemmy_Emblem.png',
// };
// export const LARRY: ICharacter = {
//   id: Characters.Larry,
//   displayName: 'Larry',
//   imageUrl: 'https://mario.wiki.gallery/images/c/c2/MK8_Larry_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/8/8e/MK8_Larry_Emblem.png',
// };
// export const WENDY: ICharacter = {
//   id: Characters.Wendy,
//   displayName: 'Wendy',
//   imageUrl: 'https://mario.wiki.gallery/images/d/d9/MK8_Wendy_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/0/01/MK8_Wendy_Emblem.png',
// };
// export const LUDWIG: ICharacter = {
//   id: Characters.Ludgwig,
//   displayName: 'Ludgwig',
//   imageUrl: 'https://mario.wiki.gallery/images/a/a8/MK8_Ludwig_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/2/28/MK8_Ludwig_Emblem.png',
// };
// export const IGGY: ICharacter = {
//   id: Characters.Iggy,
//   displayName: 'Iggy',
//   imageUrl: 'https://mario.wiki.gallery/images/d/dd/MK8_Iggy_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/a/aa/MK8_Iggy_Emblem.png',
// };
// export const ROY: ICharacter = {
//   id: Characters.Roy,
//   displayName: 'Roy',
//   imageUrl: 'https://mario.wiki.gallery/images/3/3e/MK8_Roy_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/e/eb/MK8_Roy_Emblem.png',
// };
// export const MORTON: ICharacter = {
//   id: Characters.Morton,
//   displayName: 'Morton',
//   imageUrl: 'https://mario.wiki.gallery/images/7/72/MK8_Morton_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/b/bb/MK8_Morton_Jr_Emblem.png',
// };
// export const PEACHETTE: ICharacter = {
//   id: Characters.Peachette,
//   displayName: 'Peachette',
//   imageUrl: 'https://mario.wiki.gallery/images/f/fd/MK8DX_Peachette_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/f/f9/MK8D_Peachette_Emblem.png',
// };
// export const INKLING_GIRL: ICharacter = {
//   id: Characters.InklingGirl,
//   displayName: 'Inkling Girl',
//   imageUrl:
//     'https://mario.wiki.gallery/images/b/b9/MK8DX_Female_Inkling_Icon.png',
//   iconUrl:
//     'https://mario.wiki.gallery/images/6/6c/MK8D_Inkling_Girl_Emblem.png',
// };
// export const VILLAGER: ICharacter = {
//   id: Characters.Villager,
//   displayName: 'Villager',
//   imageUrl: 'https://mario.wiki.gallery/images/1/16/VillagerMale-Icon-MK8.png',
//   iconUrl: 'https://mario.wiki.gallery/images/2/2f/MK8_Villager_Emblem.png',
// };
// export const ISABELLE: ICharacter = {
//   id: Characters.Isabelle,
//   displayName: 'Isabelle',
//   imageUrl: 'https://mario.wiki.gallery/images/2/20/MK8_Isabelle_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/a/a2/MK8_Isabelle_Emblem.png',
// };
// export const LINK: ICharacter = {
//   id: Characters.Link,
//   displayName: 'Link',
//   imageUrl: 'https://mario.wiki.gallery/images/9/9e/MK8D_BotW_Link_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/6/6e/MK8D_BotW_Link_Emblem.png',
// };
// export const DIDDY_KONG: ICharacter = {
//   id: Characters.DiddyKong,
//   displayName: 'Diddy Kong',
//   imageUrl: 'https://mario.wiki.gallery/images/8/82/MK8DX_Diddy_Kong_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/1/19/MK8D_Diddy_Kong_Emblem.png',
// };
// export const FUNKY_KONG: ICharacter = {
//   id: Characters.FunkyKong,
//   displayName: 'Funky Kong',
//   imageUrl: 'https://mario.wiki.gallery/images/4/4a/MK8DX_Funky_Kong_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/c/c9/MK8D_Funky_Kong_Emblem.png',
// };
// export const PAULINE: ICharacter = {
//   id: Characters.Pauline,
//   displayName: 'Pauline',
//   imageUrl: 'https://mario.wiki.gallery/images/d/dd/MK8DX_Pauline_Icon.png',
//   iconUrl: 'https://mario.wiki.gallery/images/6/65/MK8D_Pauline_Emblem.png',
// };
// export const MII: ICharacter = {
//   id: Characters.Mii,
//   displayName: 'Mii',
//   imageUrl: 'https://mario.wiki.gallery/images/b/bb/Mii_MK8.png',
//   iconUrl: 'https://mario.wiki.gallery/images/0/09/MK8_Mii_Emblem.png',
// };

export const CHARACTERS: ICharacter[] = [
  MARIO,
  // LUIGI,
  PEACH,
  // DAISY,
  // ROSALINA,
  // TANOOKI_MARIO,
  // CAT_PEACH,
  // BIRDO,
  // YOSHI,
  // TOAD,
  // KOOPA_TROOPA,
  // SHY_GUY,
  // LAKITU,
  // TOADETTE,
  // KING_BOO,
  // PETE_PIRANHA,
  // BABY_MARIO,
  // BABY_LUIGI,
  // BABY_PEACH,
  // BABY_DAISY,
  // BABY_ROSALINA,
  // METAL_MARIO,
  // PINK_GOLD_PEACH,
  // WIGGLER,
  // WARIO,
  // WALUIGI,
  // DONKEY_KONG,
  // BOWSER,
  // DRY_BONES,
  // BOWSER_JR,
  // DRY_BOWSER,
  // KAMEK,
  // LEMMY,
  // LARRY,
  // WENDY,
  // LUDWIG,
  // IGGY,
  // ROY,
  // MORTON,
  // PEACHETTE,
  // INKLING_GIRL,
  // VILLAGER,
  // ISABELLE,
  // LINK,
  // DIDDY_KONG,
  // FUNKY_KONG,
  // PAULINE,
  // MII,
];

export function getCharacter(id: string): ICharacter {
  const character = CHARACTERS.find((char) => char.id === id);
  if (!character) {
    throw new Error(`Character associated with id ${id} not found.`);
  }
  return character;
}
