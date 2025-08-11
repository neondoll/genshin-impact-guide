import { ArtifactSetKeys } from "./enums/artifact-set";
import { DungeonKeys } from "./enums/dungeon";
import type { Dungeon, DungeonKey } from "./types/dungeon";

export default {
  [DungeonKeys.CityOfGold]: {
    key: DungeonKeys.CityOfGold,
    name: "Город золота",
    artifact_set_keys: [ArtifactSetKeys.DesertPavilionChronicle, ArtifactSetKeys.FlowerOfParadiseLost],
  }, // Крайне не выгодный
  [DungeonKeys.ClearPoolAndMountainCavern]: {
    key: DungeonKeys.ClearPoolAndMountainCavern,
    name: "Чистая вода и горная пещера",
    artifact_set_keys: [ArtifactSetKeys.BloodstainedChivalry, ArtifactSetKeys.NoblesseOblige],
  }, // Крайне не выгодный
  [DungeonKeys.DenouementOfSin]: {
    key: DungeonKeys.DenouementOfSin,
    name: "Конец греха",
    artifact_set_keys: [ArtifactSetKeys.GoldenTroupe, ArtifactSetKeys.MarechausseeHunter],
  }, // Крайне выгодный
  [DungeonKeys.DomainOfGuyun]: {
    key: DungeonKeys.DomainOfGuyun,
    name: "Владения Гуюнь",
    artifact_set_keys: [ArtifactSetKeys.ArchaicPetra, ArtifactSetKeys.RetracingBolide],
  }, // Крайне не выгодный
  [DungeonKeys.HiddenPalaceOfZhouFormula]: {
    key: DungeonKeys.HiddenPalaceOfZhouFormula,
    name: "Скрытый дворец Уван",
    artifact_set_keys: [ArtifactSetKeys.CrimsonWitchOfFlames, ArtifactSetKeys.Lavawalker],
  }, // Может быть полезен
  [DungeonKeys.MidsummerCourtyard]: {
    key: DungeonKeys.MidsummerCourtyard,
    name: "Июльские сады",
    artifact_set_keys: [ArtifactSetKeys.ThunderingFury, ArtifactSetKeys.Thundersoother],
  }, // Крайне не выгодный
  [DungeonKeys.MoltenIronFortress]: {
    key: DungeonKeys.MoltenIronFortress,
    name: "Расплавленная крепость",
    artifact_set_keys: [ArtifactSetKeys.NymphsDream, ArtifactSetKeys.VourukashasGlow],
  }, // Крайне не выгодный
  [DungeonKeys.MomijiDyedCourt]: {
    key: DungeonKeys.MomijiDyedCourt,
    name: "Кленовый зал",
    artifact_set_keys: [ArtifactSetKeys.EmblemOfSeveredFate, ArtifactSetKeys.ShimenawasReminiscence],
  }, // Крайне выгодный
  [DungeonKeys.PeakOfVindagnyr]: {
    key: DungeonKeys.PeakOfVindagnyr,
    name: "Пик Виндагнира",
    artifact_set_keys: [ArtifactSetKeys.BlizzardStrayer, ArtifactSetKeys.HeartOfDepth],
  }, // Выгодный
  [DungeonKeys.RidgeWatch]: {
    key: DungeonKeys.RidgeWatch,
    name: "Горный дозор",
    artifact_set_keys: [ArtifactSetKeys.PaleFlame, ArtifactSetKeys.TenacityOfTheMillelith],
  }, // Крайне не выгодный
  [DungeonKeys.SlumberingCourt]: {
    key: DungeonKeys.SlumberingCourt,
    name: "Дремлющий сад",
    artifact_set_keys: [ArtifactSetKeys.HuskOfOpulentDreams, ArtifactSetKeys.OceanHuedClam],
  }, // Крайне не выгодный
  [DungeonKeys.SpireOfSolitaryEnlightenment]: {
    key: DungeonKeys.SpireOfSolitaryEnlightenment,
    name: "Шпиль одинокого просветления",
    artifact_set_keys: [ArtifactSetKeys.DeepwoodMemories, ArtifactSetKeys.GildedDreams],
  }, // Крайне выгодный
  [DungeonKeys.TheLostValley]: {
    key: DungeonKeys.TheLostValley,
    name: "Затерянная долина",
    artifact_set_keys: [ArtifactSetKeys.EchoesOfAnOffering, ArtifactSetKeys.VermillionHereafter],
  }, // Крайне не выгодный
  [DungeonKeys.ValleyOfRemembrance]: {
    key: DungeonKeys.ValleyOfRemembrance,
    name: "Долина воспоминаний",
    artifact_set_keys: [ArtifactSetKeys.MaidenBeloved, ArtifactSetKeys.ViridescentVenerer],
  }, // Может быть полезен
  [DungeonKeys.WaterfallWen]: {
    key: DungeonKeys.WaterfallWen,
    name: "Город гроз",
    artifact_set_keys: [ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods, ArtifactSetKeys.SongOfDaysPast],
  }, // Крайне не выгодный
} as Record<DungeonKey, Dungeon>;
