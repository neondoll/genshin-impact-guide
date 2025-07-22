import { ArtifactSetUidEnum } from "./enums/artifact-set";
import { DungeonUidEnum } from "./enums/dungeon";
import type { Dungeon, DungeonUid } from "./types/dungeon";

export default {
  [DungeonUidEnum.CityOfGold]: {
    uid: DungeonUidEnum.CityOfGold,
    name: "Город золота",
    artifact_set_uids: [ArtifactSetUidEnum.DesertPavilionChronicle, ArtifactSetUidEnum.FlowerOfParadiseLost],
  }, // Крайне не выгодный
  [DungeonUidEnum.ClearPoolAndMountainCavern]: {
    uid: DungeonUidEnum.ClearPoolAndMountainCavern,
    name: "Чистая вода и горная пещера",
    artifact_set_uids: [ArtifactSetUidEnum.BloodstainedChivalry, ArtifactSetUidEnum.NoblesseOblige],
  }, // Крайне не выгодный
  [DungeonUidEnum.DenouementOfSin]: {
    uid: DungeonUidEnum.DenouementOfSin,
    name: "Конец греха",
    artifact_set_uids: [ArtifactSetUidEnum.GoldenTroupe, ArtifactSetUidEnum.MarechausseeHunter],
  }, // Крайне выгодный
  [DungeonUidEnum.DomainOfGuyun]: {
    uid: DungeonUidEnum.DomainOfGuyun,
    name: "Владения Гуюнь",
    artifact_set_uids: [ArtifactSetUidEnum.ArchaicPetra, ArtifactSetUidEnum.RetracingBolide],
  }, // Крайне не выгодный
  [DungeonUidEnum.HiddenPalaceOfZhouFormula]: {
    uid: DungeonUidEnum.HiddenPalaceOfZhouFormula,
    name: "Скрытый дворец Уван",
    artifact_set_uids: [ArtifactSetUidEnum.CrimsonWitchOfFlames, ArtifactSetUidEnum.Lavawalker],
  }, // Может быть полезен
  [DungeonUidEnum.MidsummerCourtyard]: {
    uid: DungeonUidEnum.MidsummerCourtyard,
    name: "Июльские сады",
    artifact_set_uids: [ArtifactSetUidEnum.ThunderingFury, ArtifactSetUidEnum.Thundersoother],
  }, // Крайне не выгодный
  [DungeonUidEnum.MoltenIronFortress]: {
    uid: DungeonUidEnum.MoltenIronFortress,
    name: "Расплавленная крепость",
    artifact_set_uids: [ArtifactSetUidEnum.NymphsDream, ArtifactSetUidEnum.VourukashasGlow],
  }, // Крайне не выгодный
  [DungeonUidEnum.MomijiDyedCourt]: {
    uid: DungeonUidEnum.MomijiDyedCourt,
    name: "Кленовый зал",
    artifact_set_uids: [ArtifactSetUidEnum.EmblemOfSeveredFate, ArtifactSetUidEnum.ShimenawasReminiscence],
  }, // Крайне выгодный
  [DungeonUidEnum.PeakOfVindagnyr]: {
    uid: DungeonUidEnum.PeakOfVindagnyr,
    name: "Пик Виндагнира",
    artifact_set_uids: [ArtifactSetUidEnum.BlizzardStrayer, ArtifactSetUidEnum.HeartOfDepth],
  }, // Выгодный
  [DungeonUidEnum.RidgeWatch]: {
    uid: DungeonUidEnum.RidgeWatch,
    name: "Горный дозор",
    artifact_set_uids: [ArtifactSetUidEnum.PaleFlame, ArtifactSetUidEnum.TenacityOfTheMillelith],
  }, // Крайне не выгодный
  [DungeonUidEnum.SlumberingCourt]: {
    uid: DungeonUidEnum.SlumberingCourt,
    name: "Дремлющий сад",
    artifact_set_uids: [ArtifactSetUidEnum.HuskOfOpulentDreams, ArtifactSetUidEnum.OceanHuedClam],
  }, // Крайне не выгодный
  [DungeonUidEnum.SpireOfSolitaryEnlightenment]: {
    uid: DungeonUidEnum.SpireOfSolitaryEnlightenment,
    name: "Шпиль одинокого просветления",
    artifact_set_uids: [ArtifactSetUidEnum.DeepwoodMemories, ArtifactSetUidEnum.GildedDreams],
  }, // Крайне выгодный
  [DungeonUidEnum.TheLostValley]: {
    uid: DungeonUidEnum.TheLostValley,
    name: "Затерянная долина",
    artifact_set_uids: [ArtifactSetUidEnum.EchoesOfAnOffering, ArtifactSetUidEnum.VermillionHereafter],
  }, // Крайне не выгодный
  [DungeonUidEnum.ValleyOfRemembrance]: {
    uid: DungeonUidEnum.ValleyOfRemembrance,
    name: "Долина воспоминаний",
    artifact_set_uids: [ArtifactSetUidEnum.MaidenBeloved, ArtifactSetUidEnum.ViridescentVenerer],
  }, // Может быть полезен
  [DungeonUidEnum.WaterfallWen]: {
    uid: DungeonUidEnum.WaterfallWen,
    name: "Город гроз",
    artifact_set_uids: [ArtifactSetUidEnum.NighttimeWhispersInTheEchoingWoods, ArtifactSetUidEnum.SongOfDaysPast],
  }, // Крайне не выгодный
} as Record<DungeonUid, Dungeon>;
