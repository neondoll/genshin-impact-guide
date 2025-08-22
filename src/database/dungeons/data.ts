import type { IDungeon } from "./types";
import { ArtifactSetIds } from "@/features/artifact-sets/enums";
import { CDungeon } from "./classes";
import { DungeonKeys } from "./enums";

export default {
  [DungeonKeys.CityOfGold]: CDungeon.init([
    DungeonKeys.CityOfGold,
    "Город золота",
    [ArtifactSetIds.DesertPavilionChronicle, ArtifactSetIds.FlowerOfParadiseLost],
  ]), /* Крайне не выгодный */
  [DungeonKeys.ClearPoolAndMountainCavern]: CDungeon.init([
    DungeonKeys.ClearPoolAndMountainCavern,
    "Чистая вода и горная пещера",
    [ArtifactSetIds.BloodstainedChivalry, ArtifactSetIds.NoblesseOblige],
  ]), /* Крайне не выгодный */
  [DungeonKeys.DenouementOfSin]: CDungeon.init([
    DungeonKeys.DenouementOfSin,
    "Конец греха",
    [ArtifactSetIds.GoldenTroupe, ArtifactSetIds.MarechausseeHunter],
  ]), /* Крайне выгодный */
  [DungeonKeys.DomainOfGuyun]: CDungeon.init([
    DungeonKeys.DomainOfGuyun,
    "Владения Гуюнь",
    [ArtifactSetIds.ArchaicPetra, ArtifactSetIds.RetracingBolide],
  ]), /* Крайне не выгодный */
  [DungeonKeys.FadedTheater]: CDungeon.init([
    DungeonKeys.FadedTheater,
    "Обветшалый театр",
    [ArtifactSetIds.FragmentOfHarmonicWhimsy],
  ]),
  [DungeonKeys.HiddenPalaceOfZhouFormula]: CDungeon.init([
    DungeonKeys.HiddenPalaceOfZhouFormula,
    "Скрытый дворец Уван",
    [ArtifactSetIds.CrimsonWitchOfFlames, ArtifactSetIds.Lavawalker],
  ]), /* Может быть полезен */
  [DungeonKeys.MidsummerCourtyard]: CDungeon.init([
    DungeonKeys.MidsummerCourtyard,
    "Июльские сады",
    [ArtifactSetIds.ThunderingFury, ArtifactSetIds.Thundersoother],
  ]), /* Крайне не выгодный */
  [DungeonKeys.MoltenIronFortress]: CDungeon.init([
    DungeonKeys.MoltenIronFortress,
    "Расплавленная крепость",
    [ArtifactSetIds.NymphsDream, ArtifactSetIds.VourukashasGlow],
  ]), /* Крайне не выгодный */
  [DungeonKeys.MomijiDyedCourt]: CDungeon.init([
    DungeonKeys.MomijiDyedCourt,
    "Кленовый зал",
    [ArtifactSetIds.EmblemOfSeveredFate, ArtifactSetIds.ShimenawasReminiscence],
  ]), /* Крайне выгодный */
  [DungeonKeys.PeakOfVindagnyr]: CDungeon.init([
    DungeonKeys.PeakOfVindagnyr,
    "Пик Виндагнира",
    [ArtifactSetIds.BlizzardStrayer, ArtifactSetIds.HeartOfDepth],
  ]), /* Выгодный */
  [DungeonKeys.RidgeWatch]: CDungeon.init([
    DungeonKeys.RidgeWatch,
    "Горный дозор",
    [ArtifactSetIds.PaleFlame, ArtifactSetIds.TenacityOfTheMillelith],
  ]), /* Крайне не выгодный */
  [DungeonKeys.SanctumOfRainbowSpirits]: CDungeon.init([
    DungeonKeys.SanctumOfRainbowSpirits,
    "Святилище мириадов духов",
    [ArtifactSetIds.ObsidianCodex, ArtifactSetIds.ScrollOfTheHeroOfCinderCity],
  ]),
  [DungeonKeys.SlumberingCourt]: CDungeon.init([
    DungeonKeys.SlumberingCourt,
    "Дремлющий сад",
    [ArtifactSetIds.HuskOfOpulentDreams, ArtifactSetIds.OceanHuedClam],
  ]), /* Крайне не выгодный */
  [DungeonKeys.SpireOfSolitaryEnlightenment]: CDungeon.init([
    DungeonKeys.SpireOfSolitaryEnlightenment,
    "Шпиль одинокого просветления",
    [ArtifactSetIds.DeepwoodMemories, ArtifactSetIds.GildedDreams],
  ]), /* Крайне выгодный */
  [DungeonKeys.TheLostValley]: CDungeon.init([
    DungeonKeys.TheLostValley,
    "Затерянная долина",
    [ArtifactSetIds.EchoesOfAnOffering, ArtifactSetIds.VermillionHereafter],
  ]), /* Крайне не выгодный */
  [DungeonKeys.ValleyOfRemembrance]: CDungeon.init([
    DungeonKeys.ValleyOfRemembrance,
    "Долина воспоминаний",
    [ArtifactSetIds.MaidenBeloved, ArtifactSetIds.ViridescentVenerer],
  ]), /* Может быть полезен */
  [DungeonKeys.WaterfallWen]: CDungeon.init([
    DungeonKeys.WaterfallWen,
    "Город гроз",
    [ArtifactSetIds.NighttimeWhispersInTheEchoingWoods, ArtifactSetIds.SongOfDaysPast],
  ]), /* Крайне не выгодный */
} as Record<IDungeon["key"], IDungeon>;
