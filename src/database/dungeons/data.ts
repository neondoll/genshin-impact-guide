import type { IDungeon } from "./types";
import { ArtifactSetKeys } from "../artifact-sets/enums";
import { CDungeon } from "./classes";
import { DungeonKeys } from "./enums";

export default {
  [DungeonKeys.CityOfGold]: new CDungeon(DungeonKeys.CityOfGold, "Город золота", [ArtifactSetKeys.DesertPavilionChronicle, ArtifactSetKeys.FlowerOfParadiseLost]), /* Крайне не выгодный */
  [DungeonKeys.ClearPoolAndMountainCavern]: new CDungeon(DungeonKeys.ClearPoolAndMountainCavern, "Чистая вода и горная пещера", [ArtifactSetKeys.BloodstainedChivalry, ArtifactSetKeys.NoblesseOblige]), /* Крайне не выгодный */
  [DungeonKeys.DenouementOfSin]: new CDungeon(DungeonKeys.DenouementOfSin, "Конец греха", [ArtifactSetKeys.GoldenTroupe, ArtifactSetKeys.MarechausseeHunter]), /* Крайне выгодный */
  [DungeonKeys.DomainOfGuyun]: new CDungeon(DungeonKeys.DomainOfGuyun, "Владения Гуюнь", [ArtifactSetKeys.ArchaicPetra, ArtifactSetKeys.RetracingBolide]), /* Крайне не выгодный */
  [DungeonKeys.FadedTheater]: new CDungeon(DungeonKeys.FadedTheater, "Обветшалый театр", [ArtifactSetKeys.FragmentOfHarmonicWhimsy]),
  [DungeonKeys.HiddenPalaceOfZhouFormula]: new CDungeon(DungeonKeys.HiddenPalaceOfZhouFormula, "Скрытый дворец Уван", [ArtifactSetKeys.CrimsonWitchOfFlames, ArtifactSetKeys.Lavawalker]), /* Может быть полезен */
  [DungeonKeys.MidsummerCourtyard]: new CDungeon(DungeonKeys.MidsummerCourtyard, "Июльские сады", [ArtifactSetKeys.ThunderingFury, ArtifactSetKeys.Thundersoother]), /* Крайне не выгодный */
  [DungeonKeys.MoltenIronFortress]: new CDungeon(DungeonKeys.MoltenIronFortress, "Расплавленная крепость", [ArtifactSetKeys.NymphsDream, ArtifactSetKeys.VourukashasGlow]), /* Крайне не выгодный */
  [DungeonKeys.MomijiDyedCourt]: new CDungeon(DungeonKeys.MomijiDyedCourt, "Кленовый зал", [ArtifactSetKeys.EmblemOfSeveredFate, ArtifactSetKeys.ShimenawasReminiscence]), /* Крайне выгодный */
  [DungeonKeys.PeakOfVindagnyr]: new CDungeon(DungeonKeys.PeakOfVindagnyr, "Пик Виндагнира", [ArtifactSetKeys.BlizzardStrayer, ArtifactSetKeys.HeartOfDepth]), /* Выгодный */
  [DungeonKeys.RidgeWatch]: new CDungeon(DungeonKeys.RidgeWatch, "Горный дозор", [ArtifactSetKeys.PaleFlame, ArtifactSetKeys.TenacityOfTheMillelith]), /* Крайне не выгодный */
  [DungeonKeys.SanctumOfRainbowSpirits]: new CDungeon(DungeonKeys.SanctumOfRainbowSpirits, "Святилище мириадов духов", [ArtifactSetKeys.ObsidianCodex, ArtifactSetKeys.ScrollOfTheHeroOfCinderCity]),
  [DungeonKeys.SlumberingCourt]: new CDungeon(DungeonKeys.SlumberingCourt, "Дремлющий сад", [ArtifactSetKeys.HuskOfOpulentDreams, ArtifactSetKeys.OceanHuedClam]), /* Крайне не выгодный */
  [DungeonKeys.SpireOfSolitaryEnlightenment]: new CDungeon(DungeonKeys.SpireOfSolitaryEnlightenment, "Шпиль одинокого просветления", [ArtifactSetKeys.DeepwoodMemories, ArtifactSetKeys.GildedDreams]), /* Крайне выгодный */
  [DungeonKeys.TheLostValley]: new CDungeon(DungeonKeys.TheLostValley, "Затерянная долина", [ArtifactSetKeys.EchoesOfAnOffering, ArtifactSetKeys.VermillionHereafter]), /* Крайне не выгодный */
  [DungeonKeys.ValleyOfRemembrance]: new CDungeon(DungeonKeys.ValleyOfRemembrance, "Долина воспоминаний", [ArtifactSetKeys.MaidenBeloved, ArtifactSetKeys.ViridescentVenerer]), /* Может быть полезен */
  [DungeonKeys.WaterfallWen]: new CDungeon(DungeonKeys.WaterfallWen, "Город гроз", [ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods, ArtifactSetKeys.SongOfDaysPast]), /* Крайне не выгодный */
} as Record<IDungeon["key"], IDungeon>;
