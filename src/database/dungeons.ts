import { ArtifactSetKeys } from "./enums/artifact-set";
import { DungeonKeys } from "./enums/dungeon";
import type { Dungeon } from "./types/dungeon";

class _Dungeon implements Dungeon {
  readonly key: Dungeon["key"];
  readonly name: Dungeon["name"];
  readonly artifact_set_keys: Dungeon["artifact_set_keys"];

  constructor(key: keyof typeof DungeonKeys, name: Dungeon["name"], artifactSetKeys: (keyof typeof ArtifactSetKeys)[]) {
    this.key = DungeonKeys[key];
    this.name = name;
    this.artifact_set_keys = artifactSetKeys.map(artifactSetKey => ArtifactSetKeys[artifactSetKey]);
  }
}

export default {
  [DungeonKeys.CityOfGold]: new _Dungeon("CityOfGold", "Город золота", ["DesertPavilionChronicle", "FlowerOfParadiseLost"]), /* Крайне не выгодный */
  [DungeonKeys.ClearPoolAndMountainCavern]: new _Dungeon("ClearPoolAndMountainCavern", "Чистая вода и горная пещера", ["BloodstainedChivalry", "NoblesseOblige"]), /* Крайне не выгодный */
  [DungeonKeys.DenouementOfSin]: new _Dungeon("DenouementOfSin", "Конец греха", ["GoldenTroupe", "MarechausseeHunter"]), /* Крайне выгодный */
  [DungeonKeys.DomainOfGuyun]: new _Dungeon("DomainOfGuyun", "Владения Гуюнь", ["ArchaicPetra", "RetracingBolide"]), /* Крайне не выгодный */
  [DungeonKeys.HiddenPalaceOfZhouFormula]: new _Dungeon("HiddenPalaceOfZhouFormula", "Скрытый дворец Уван", ["CrimsonWitchOfFlames", "Lavawalker"]), /* Может быть полезен */
  [DungeonKeys.MidsummerCourtyard]: new _Dungeon("MidsummerCourtyard", "Июльские сады", ["ThunderingFury", "Thundersoother"]), /* Крайне не выгодный */
  [DungeonKeys.MoltenIronFortress]: new _Dungeon("MoltenIronFortress", "Расплавленная крепость", ["NymphsDream", "VourukashasGlow"]), /* Крайне не выгодный */
  [DungeonKeys.MomijiDyedCourt]: new _Dungeon("MomijiDyedCourt", "Кленовый зал", ["EmblemOfSeveredFate", "ShimenawasReminiscence"]), /* Крайне выгодный */
  [DungeonKeys.PeakOfVindagnyr]: new _Dungeon("PeakOfVindagnyr", "Пик Виндагнира", ["BlizzardStrayer", "HeartOfDepth"]), /* Выгодный */
  [DungeonKeys.RidgeWatch]: new _Dungeon("RidgeWatch", "Горный дозор", ["PaleFlame", "TenacityOfTheMillelith"]), /* Крайне не выгодный */
  [DungeonKeys.SlumberingCourt]: new _Dungeon("SlumberingCourt", "Дремлющий сад", ["HuskOfOpulentDreams", "OceanHuedClam"]), /* Крайне не выгодный */
  [DungeonKeys.SpireOfSolitaryEnlightenment]: new _Dungeon("SpireOfSolitaryEnlightenment", "Шпиль одинокого просветления", ["DeepwoodMemories", "GildedDreams"]), /* Крайне выгодный */
  [DungeonKeys.TheLostValley]: new _Dungeon("TheLostValley", "Затерянная долина", ["EchoesOfAnOffering", "VermillionHereafter"]), /* Крайне не выгодный */
  [DungeonKeys.ValleyOfRemembrance]: new _Dungeon("ValleyOfRemembrance", "Долина воспоминаний", ["MaidenBeloved", "ViridescentVenerer"]), /* Может быть полезен */
  [DungeonKeys.WaterfallWen]: new _Dungeon("WaterfallWen", "Город гроз", ["NighttimeWhispersInTheEchoingWoods", "SongOfDaysPast"]), /* Крайне не выгодный */
} as Record<Dungeon["key"], Dungeon>;
