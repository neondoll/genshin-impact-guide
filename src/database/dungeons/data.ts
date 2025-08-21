import type { IDungeon } from "./types";
import { ArtifactSetKeys } from "../artifact-sets/enums";
import { CDungeon } from "./classes";
import { DungeonKeys } from "./enums";

export default {
  [DungeonKeys.CityOfGold]: CDungeon.init([
    DungeonKeys.CityOfGold,
    "Город золота",
    [ArtifactSetKeys.DesertPavilionChronicle, ArtifactSetKeys.FlowerOfParadiseLost],
  ]), /* Крайне не выгодный */
  [DungeonKeys.ClearPoolAndMountainCavern]: CDungeon.init([
    DungeonKeys.ClearPoolAndMountainCavern,
    "Чистая вода и горная пещера",
    [ArtifactSetKeys.BloodstainedChivalry, ArtifactSetKeys.NoblesseOblige],
  ]), /* Крайне не выгодный */
  [DungeonKeys.DenouementOfSin]: CDungeon.init([
    DungeonKeys.DenouementOfSin,
    "Конец греха",
    [ArtifactSetKeys.GoldenTroupe, ArtifactSetKeys.MarechausseeHunter],
  ]), /* Крайне выгодный */
  [DungeonKeys.DomainOfGuyun]: CDungeon.init([
    DungeonKeys.DomainOfGuyun,
    "Владения Гуюнь",
    [ArtifactSetKeys.ArchaicPetra, ArtifactSetKeys.RetracingBolide],
  ]), /* Крайне не выгодный */
  [DungeonKeys.FadedTheater]: CDungeon.init([
    DungeonKeys.FadedTheater,
    "Обветшалый театр",
    [ArtifactSetKeys.FragmentOfHarmonicWhimsy],
  ]),
  [DungeonKeys.HiddenPalaceOfZhouFormula]: CDungeon.init([
    DungeonKeys.HiddenPalaceOfZhouFormula,
    "Скрытый дворец Уван",
    [ArtifactSetKeys.CrimsonWitchOfFlames, ArtifactSetKeys.Lavawalker],
  ]), /* Может быть полезен */
  [DungeonKeys.MidsummerCourtyard]: CDungeon.init([
    DungeonKeys.MidsummerCourtyard,
    "Июльские сады",
    [ArtifactSetKeys.ThunderingFury, ArtifactSetKeys.Thundersoother],
  ]), /* Крайне не выгодный */
  [DungeonKeys.MoltenIronFortress]: CDungeon.init([
    DungeonKeys.MoltenIronFortress,
    "Расплавленная крепость",
    [ArtifactSetKeys.NymphsDream, ArtifactSetKeys.VourukashasGlow],
  ]), /* Крайне не выгодный */
  [DungeonKeys.MomijiDyedCourt]: CDungeon.init([
    DungeonKeys.MomijiDyedCourt,
    "Кленовый зал",
    [ArtifactSetKeys.EmblemOfSeveredFate, ArtifactSetKeys.ShimenawasReminiscence],
  ]), /* Крайне выгодный */
  [DungeonKeys.PeakOfVindagnyr]: CDungeon.init([
    DungeonKeys.PeakOfVindagnyr,
    "Пик Виндагнира",
    [ArtifactSetKeys.BlizzardStrayer, ArtifactSetKeys.HeartOfDepth],
  ]), /* Выгодный */
  [DungeonKeys.RidgeWatch]: CDungeon.init([
    DungeonKeys.RidgeWatch,
    "Горный дозор",
    [ArtifactSetKeys.PaleFlame, ArtifactSetKeys.TenacityOfTheMillelith],
  ]), /* Крайне не выгодный */
  [DungeonKeys.SanctumOfRainbowSpirits]: CDungeon.init([
    DungeonKeys.SanctumOfRainbowSpirits,
    "Святилище мириадов духов",
    [ArtifactSetKeys.ObsidianCodex, ArtifactSetKeys.ScrollOfTheHeroOfCinderCity],
  ]),
  [DungeonKeys.SlumberingCourt]: CDungeon.init([
    DungeonKeys.SlumberingCourt,
    "Дремлющий сад",
    [ArtifactSetKeys.HuskOfOpulentDreams, ArtifactSetKeys.OceanHuedClam],
  ]), /* Крайне не выгодный */
  [DungeonKeys.SpireOfSolitaryEnlightenment]: CDungeon.init([
    DungeonKeys.SpireOfSolitaryEnlightenment,
    "Шпиль одинокого просветления",
    [ArtifactSetKeys.DeepwoodMemories, ArtifactSetKeys.GildedDreams],
  ]), /* Крайне выгодный */
  [DungeonKeys.TheLostValley]: CDungeon.init([
    DungeonKeys.TheLostValley,
    "Затерянная долина",
    [ArtifactSetKeys.EchoesOfAnOffering, ArtifactSetKeys.VermillionHereafter],
  ]), /* Крайне не выгодный */
  [DungeonKeys.ValleyOfRemembrance]: CDungeon.init([
    DungeonKeys.ValleyOfRemembrance,
    "Долина воспоминаний",
    [ArtifactSetKeys.MaidenBeloved, ArtifactSetKeys.ViridescentVenerer],
  ]), /* Может быть полезен */
  [DungeonKeys.WaterfallWen]: CDungeon.init([
    DungeonKeys.WaterfallWen,
    "Город гроз",
    [ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods, ArtifactSetKeys.SongOfDaysPast],
  ]), /* Крайне не выгодный */
} as Record<IDungeon["key"], IDungeon>;
