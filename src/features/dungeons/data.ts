import type { Dungeon } from "./types";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { DungeonIds } from "./enums";

class DungeonClass implements Dungeon {
  readonly id: Dungeon["id"];
  readonly name: Dungeon["name"];
  readonly artifact_set_ids: Dungeon["artifact_set_ids"];

  constructor(id: Dungeon["id"], name: Dungeon["name"], artifactSetIds: Dungeon["artifact_set_ids"]) {
    this.id = id;
    this.name = name;
    this.artifact_set_ids = artifactSetIds;
  }

  static init(params: ConstructorParameters<typeof DungeonClass>) {
    return new DungeonClass(...params);
  }
}

export default {
  [DungeonIds.CityOfGold]: DungeonClass.init([
    DungeonIds.CityOfGold,
    "Город золота",
    [ArtifactSetIds.DesertPavilionChronicle, ArtifactSetIds.FlowerOfParadiseLost],
  ]), /* Крайне не выгодный */
  [DungeonIds.ClearPoolAndMountainCavern]: DungeonClass.init([
    DungeonIds.ClearPoolAndMountainCavern,
    "Чистая вода и горная пещера",
    [ArtifactSetIds.BloodstainedChivalry, ArtifactSetIds.NoblesseOblige],
  ]), /* Крайне не выгодный */
  [DungeonIds.DenouementOfSin]: DungeonClass.init([
    DungeonIds.DenouementOfSin,
    "Конец греха",
    [ArtifactSetIds.GoldenTroupe, ArtifactSetIds.MarechausseeHunter],
  ]), /* Крайне выгодный */
  [DungeonIds.DomainOfGuyun]: DungeonClass.init([
    DungeonIds.DomainOfGuyun,
    "Владения Гуюнь",
    [ArtifactSetIds.ArchaicPetra, ArtifactSetIds.RetracingBolide],
  ]), /* Крайне не выгодный */
  [DungeonIds.FadedTheater]: DungeonClass.init([
    DungeonIds.FadedTheater,
    "Обветшалый театр",
    [ArtifactSetIds.FragmentOfHarmonicWhimsy],
  ]),
  [DungeonIds.HiddenPalaceOfZhouFormula]: DungeonClass.init([
    DungeonIds.HiddenPalaceOfZhouFormula,
    "Скрытый дворец Уван",
    [ArtifactSetIds.CrimsonWitchOfFlames, ArtifactSetIds.Lavawalker],
  ]), /* Может быть полезен */
  [DungeonIds.MidsummerCourtyard]: DungeonClass.init([
    DungeonIds.MidsummerCourtyard,
    "Июльские сады",
    [ArtifactSetIds.ThunderingFury, ArtifactSetIds.Thundersoother],
  ]), /* Крайне не выгодный */
  [DungeonIds.MoltenIronFortress]: DungeonClass.init([
    DungeonIds.MoltenIronFortress,
    "Расплавленная крепость",
    [ArtifactSetIds.NymphsDream, ArtifactSetIds.VourukashasGlow],
  ]), /* Крайне не выгодный */
  [DungeonIds.MomijiDyedCourt]: DungeonClass.init([
    DungeonIds.MomijiDyedCourt,
    "Кленовый зал",
    [ArtifactSetIds.EmblemOfSeveredFate, ArtifactSetIds.ShimenawasReminiscence],
  ]), /* Крайне выгодный */
  [DungeonIds.PeakOfVindagnyr]: DungeonClass.init([
    DungeonIds.PeakOfVindagnyr,
    "Пик Виндагнира",
    [ArtifactSetIds.BlizzardStrayer, ArtifactSetIds.HeartOfDepth],
  ]), /* Выгодный */
  [DungeonIds.RidgeWatch]: DungeonClass.init([
    DungeonIds.RidgeWatch,
    "Горный дозор",
    [ArtifactSetIds.PaleFlame, ArtifactSetIds.TenacityOfTheMillelith],
  ]), /* Крайне не выгодный */
  [DungeonIds.SanctumOfRainbowSpirits]: DungeonClass.init([
    DungeonIds.SanctumOfRainbowSpirits,
    "Святилище мириадов духов",
    [ArtifactSetIds.ObsidianCodex, ArtifactSetIds.ScrollOfTheHeroOfCinderCity],
  ]),
  [DungeonIds.SlumberingCourt]: DungeonClass.init([
    DungeonIds.SlumberingCourt,
    "Дремлющий сад",
    [ArtifactSetIds.HuskOfOpulentDreams, ArtifactSetIds.OceanHuedClam],
  ]), /* Крайне не выгодный */
  [DungeonIds.SpireOfSolitaryEnlightenment]: DungeonClass.init([
    DungeonIds.SpireOfSolitaryEnlightenment,
    "Шпиль одинокого просветления",
    [ArtifactSetIds.DeepwoodMemories, ArtifactSetIds.GildedDreams],
  ]), /* Крайне выгодный */
  [DungeonIds.TheLostValley]: DungeonClass.init([
    DungeonIds.TheLostValley,
    "Затерянная долина",
    [ArtifactSetIds.EchoesOfAnOffering, ArtifactSetIds.VermillionHereafter],
  ]), /* Крайне не выгодный */
  [DungeonIds.ValleyOfRemembrance]: DungeonClass.init([
    DungeonIds.ValleyOfRemembrance,
    "Долина воспоминаний",
    [ArtifactSetIds.MaidenBeloved, ArtifactSetIds.ViridescentVenerer],
  ]), /* Может быть полезен */
  [DungeonIds.WaterfallWen]: DungeonClass.init([
    DungeonIds.WaterfallWen,
    "Город гроз",
    [ArtifactSetIds.NighttimeWhispersInTheEchoingWoods, ArtifactSetIds.SongOfDaysPast],
  ]), /* Крайне не выгодный */
} as Record<Dungeon["id"], Dungeon>;
