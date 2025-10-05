import type { Dungeon as Type } from "@/types/dungeon";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { Dungeon as Class } from "@/classes/dungeon";
import { DungeonIds } from "@/enums/dungeon";

export default {
  [DungeonIds.CityOfGold]: Class.init([
    DungeonIds.CityOfGold,
    "Город золота",
    [ArtifactSetIds.DesertPavilionChronicle, ArtifactSetIds.FlowerOfParadiseLost],
  ]), /* Крайне не выгодный */
  [DungeonIds.ClearPoolAndMountainCavern]: Class.init([
    DungeonIds.ClearPoolAndMountainCavern,
    "Чистая вода и горная пещера",
    [ArtifactSetIds.BloodstainedChivalry, ArtifactSetIds.NoblesseOblige],
  ]), /* Крайне не выгодный */
  [DungeonIds.DenouementOfSin]: Class.init([
    DungeonIds.DenouementOfSin,
    "Конец греха",
    [ArtifactSetIds.GoldenTroupe, ArtifactSetIds.MarechausseeHunter],
  ]), /* Крайне выгодный */
  [DungeonIds.DomainOfGuyun]: Class.init([
    DungeonIds.DomainOfGuyun,
    "Владения Гуюнь",
    [ArtifactSetIds.ArchaicPetra, ArtifactSetIds.RetracingBolide],
  ]), /* Крайне не выгодный */
  [DungeonIds.FadedTheater]: Class.init([
    DungeonIds.FadedTheater,
    "Обветшалый театр",
    [ArtifactSetIds.FragmentOfHarmonicWhimsy],
  ]),
  [DungeonIds.FrostladenMachinery]: Class.init([
    DungeonIds.FrostladenMachinery,
    "Покрытая инеем машинерия",
    [ArtifactSetIds.NightOfTheSkysUnveiling, ArtifactSetIds.SilkenMoonsSerenade],
  ]),
  [DungeonIds.HiddenPalaceOfZhouFormula]: Class.init([
    DungeonIds.HiddenPalaceOfZhouFormula,
    "Скрытый дворец Уван",
    [ArtifactSetIds.CrimsonWitchOfFlames, ArtifactSetIds.Lavawalker],
  ]), /* Может быть полезен */
  [DungeonIds.MidsummerCourtyard]: Class.init([
    DungeonIds.MidsummerCourtyard,
    "Июльские сады",
    [ArtifactSetIds.ThunderingFury, ArtifactSetIds.Thundersoother],
  ]), /* Крайне не выгодный */
  [DungeonIds.MoltenIronFortress]: Class.init([
    DungeonIds.MoltenIronFortress,
    "Расплавленная крепость",
    [ArtifactSetIds.NymphsDream, ArtifactSetIds.VourukashasGlow],
  ]), /* Крайне не выгодный */
  [DungeonIds.MomijiDyedCourt]: Class.init([
    DungeonIds.MomijiDyedCourt,
    "Кленовый зал",
    [ArtifactSetIds.EmblemOfSeveredFate, ArtifactSetIds.ShimenawasReminiscence],
  ]), /* Крайне выгодный */
  [DungeonIds.PeakOfVindagnyr]: Class.init([
    DungeonIds.PeakOfVindagnyr,
    "Пик Виндагнира",
    [ArtifactSetIds.BlizzardStrayer, ArtifactSetIds.HeartOfDepth],
  ]), /* Выгодный */
  [DungeonIds.RidgeWatch]: Class.init([
    DungeonIds.RidgeWatch,
    "Горный дозор",
    [ArtifactSetIds.PaleFlame, ArtifactSetIds.TenacityOfTheMillelith],
  ]), /* Крайне не выгодный */
  [DungeonIds.SanctumOfRainbowSpirits]: Class.init([
    DungeonIds.SanctumOfRainbowSpirits,
    "Святилище мириадов духов",
    [ArtifactSetIds.ObsidianCodex, ArtifactSetIds.ScrollOfTheHeroOfCinderCity],
  ]),
  [DungeonIds.SlumberingCourt]: Class.init([
    DungeonIds.SlumberingCourt,
    "Дремлющий сад",
    [ArtifactSetIds.HuskOfOpulentDreams, ArtifactSetIds.OceanHuedClam],
  ]), /* Крайне не выгодный */
  [DungeonIds.SpireOfSolitaryEnlightenment]: Class.init([
    DungeonIds.SpireOfSolitaryEnlightenment,
    "Шпиль одинокого просветления",
    [ArtifactSetIds.DeepwoodMemories, ArtifactSetIds.GildedDreams],
  ]), /* Крайне выгодный */
  [DungeonIds.TheLostValley]: Class.init([
    DungeonIds.TheLostValley,
    "Затерянная долина",
    [ArtifactSetIds.EchoesOfAnOffering, ArtifactSetIds.VermillionHereafter],
  ]), /* Крайне не выгодный */
  [DungeonIds.ValleyOfRemembrance]: Class.init([
    DungeonIds.ValleyOfRemembrance,
    "Долина воспоминаний",
    [ArtifactSetIds.MaidenBeloved, ArtifactSetIds.ViridescentVenerer],
  ]), /* Может быть полезен */
  [DungeonIds.WaterfallWen]: Class.init([
    DungeonIds.WaterfallWen,
    "Город гроз",
    [ArtifactSetIds.NighttimeWhispersInTheEchoingWoods, ArtifactSetIds.SongOfDaysPast],
  ]), /* Крайне не выгодный */
} as Record<Type["id"], Type>;
