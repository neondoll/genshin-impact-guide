import type { ArtifactSlotId } from "../artifact-slots";
import type { Rarity } from "../rarities";

export const ARTIFACT_SETS = {
  ARCHAIC_PETRA: "ArchaicPetra",
  BLIZZARD_STRAYER: "BlizzardStrayer",
  BLOODSTAINED_CHIVALRY: "BloodstainedChivalry",
  CRIMSON_WITCH_OF_FLAMES: "CrimsonWitchOfFlames",
  DEEPWOOD_MEMORIES: "DeepwoodMemories",
  DESERT_PAVILION_CHRONICLE: "DesertPavilionChronicle",
  ECHOES_OF_AN_OFFERING: "EchoesOfAnOffering",
  EMBLEM_OF_SEVERED_FATE: "EmblemOfSeveredFate",
  FINALE_OF_THE_DEEP_GALLERIES: "FinaleOfTheDeepGalleries",
  FLOWER_OF_PARADISE_LOST: "FlowerOfParadiseLost",
  FRAGMENT_OF_HARMONIC_WHIMSY: "FragmentOfHarmonicWhimsy",
  GILDED_DREAMS: "GildedDreams",
  GLADIATORS_FINALE: "GladiatorsFinale",
  GOLDEN_TROUPE: "GoldenTroupe",
  HEART_OF_DEPTH: "HeartOfDepth",
  HUSK_OF_OPULENT_DREAMS: "HuskOfOpulentDreams",
  INSTRUCTOR: "Instructor",
  LAVAWALKER: "Lavawalker",
  LONG_NIGHTS_OATH: "LongNightsOath",
  MAIDEN_BELOVED: "MaidenBeloved",
  MARECHAUSSEE_HUNTER: "MarechausseeHunter",
  NIGHT_OF_THE_SKYS_UNVEILING: "NightOfTheSkysUnveiling",
  NIGHTTIME_WHISPERS_IN_THE_ECHOING_WOODS: "NighttimeWhispersInTheEchoingWoods",
  NOBLESSE_OBLIGE: "NoblesseOblige",
  NYMPHS_DREAM: "NymphsDream",
  OBSIDIAN_CODEX: "ObsidianCodex",
  OCEAN_HUED_CLAM: "OceanHuedClam",
  PALE_FLAME: "PaleFlame",
  RETRACING_BOLIDE: "RetracingBolide",
  SCROLL_OF_THE_HERO_OF_CINDER_CITY: "ScrollOfTheHeroOfCinderCity",
  SHIMENAWAS_REMINISCENCE: "ShimenawasReminiscence",
  SILKEN_MOONS_SERENADE: "SilkenMoonsSerenade",
  SONG_OF_DAYS_PAST: "SongOfDaysPast",
  TENACITY_OF_THE_MILLELITH: "TenacityOfTheMillelith",
  THUNDERING_FURY: "ThunderingFury",
  THUNDERSOOTHER: "Thundersoother",
  VERMILLION_HEREAFTER: "VermillionHereafter",
  VIRIDESCENT_VENERER: "ViridescentVenerer",
  VOURUKASHAS_GLOW: "VourukashasGlow",
  WANDERERS_TROUPE: "WanderersTroupe",
} as const;

export type ArtifactSetId = typeof ARTIFACT_SETS[keyof typeof ARTIFACT_SETS];

export interface ArtifactSetSlot {
  id: ArtifactSlotId;
  name: string;
  imageSrc: string;
}

export interface ArtifactSet {
  id: ArtifactSetId;
  name: string;
  rarities: Rarity[];
  sources: string[];
  itemBonuses: {
    2: string;
    4: string;
  };
  slots: Partial<Record<ArtifactSlotId, ArtifactSetSlot>>;
  imageSrc?: string;
}

export interface ArtifactSetFilter {
  rarities?: Rarity[];
  search?: string;
  sources?: string[];
}

export type ArtifactSetArray = ArtifactSet[];
export type ArtifactSetBonusType = 2 | 4;
export type ArtifactSetMap = Record<ArtifactSetId, ArtifactSet>;

export const DOMAIN_SETS = [
  ARTIFACT_SETS.ARCHAIC_PETRA,
  ARTIFACT_SETS.BLIZZARD_STRAYER,
  ARTIFACT_SETS.CRIMSON_WITCH_OF_FLAMES,
  ARTIFACT_SETS.DEEPWOOD_MEMORIES,
  ARTIFACT_SETS.DESERT_PAVILION_CHRONICLE,
  ARTIFACT_SETS.ECHOES_OF_AN_OFFERING,
  ARTIFACT_SETS.EMBLEM_OF_SEVERED_FATE,
  ARTIFACT_SETS.FINALE_OF_THE_DEEP_GALLERIES,
  ARTIFACT_SETS.FLOWER_OF_PARADISE_LOST,
  ARTIFACT_SETS.FRAGMENT_OF_HARMONIC_WHIMSY,
  ARTIFACT_SETS.GILDED_DREAMS,
  ARTIFACT_SETS.GOLDEN_TROUPE,
  ARTIFACT_SETS.HEART_OF_DEPTH,
  ARTIFACT_SETS.HUSK_OF_OPULENT_DREAMS,
  ARTIFACT_SETS.LAVAWALKER,
  ARTIFACT_SETS.LONG_NIGHTS_OATH,
  ARTIFACT_SETS.MAIDEN_BELOVED,
  ARTIFACT_SETS.MARECHAUSSEE_HUNTER,
  ARTIFACT_SETS.NIGHT_OF_THE_SKYS_UNVEILING,
  ARTIFACT_SETS.NIGHTTIME_WHISPERS_IN_THE_ECHOING_WOODS,
  ARTIFACT_SETS.NOBLESSE_OBLIGE,
  ARTIFACT_SETS.NYMPHS_DREAM,
  ARTIFACT_SETS.OBSIDIAN_CODEX,
  ARTIFACT_SETS.OCEAN_HUED_CLAM,
  ARTIFACT_SETS.PALE_FLAME,
  ARTIFACT_SETS.RETRACING_BOLIDE,
  ARTIFACT_SETS.SCROLL_OF_THE_HERO_OF_CINDER_CITY,
  ARTIFACT_SETS.SHIMENAWAS_REMINISCENCE,
  ARTIFACT_SETS.SILKEN_MOONS_SERENADE,
  ARTIFACT_SETS.SONG_OF_DAYS_PAST,
  ARTIFACT_SETS.TENACITY_OF_THE_MILLELITH,
  ARTIFACT_SETS.THUNDERING_FURY,
  ARTIFACT_SETS.THUNDERSOOTHER,
  ARTIFACT_SETS.VERMILLION_HEREAFTER,
  ARTIFACT_SETS.VIRIDESCENT_VENERER,
  ARTIFACT_SETS.VOURUKASHAS_GLOW,
] as const;
export const BOSS_SETS = [
  ARTIFACT_SETS.BLOODSTAINED_CHIVALRY,
  ARTIFACT_SETS.GLADIATORS_FINALE,
  ARTIFACT_SETS.WANDERERS_TROUPE,
] as const;
export const WORLD_SETS = [
  ARTIFACT_SETS.INSTRUCTOR,
] as const;
