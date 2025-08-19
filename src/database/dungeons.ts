import { ArtifactSetKeys } from "./artifact-sets/enums";
import { DungeonKeys } from "./enums/dungeon";
import type { Dungeon } from "./types/dungeon";

class _Dungeon implements Dungeon {
  readonly key: Dungeon["key"];
  readonly name: Dungeon["name"];
  readonly artifact_set_keys: Dungeon["artifact_set_keys"];

  constructor(key: Dungeon["key"], name: Dungeon["name"], artifactSetKeys: Dungeon["artifact_set_keys"]) {
    this.key = key;
    this.name = name;
    this.artifact_set_keys = artifactSetKeys;
  }
}

export default {
  [DungeonKeys.CityOfGold]: new _Dungeon(DungeonKeys.CityOfGold, "Город золота", [ArtifactSetKeys.DesertPavilionChronicle, ArtifactSetKeys.FlowerOfParadiseLost]), /* Крайне не выгодный */
  [DungeonKeys.ClearPoolAndMountainCavern]: new _Dungeon(DungeonKeys.ClearPoolAndMountainCavern, "Чистая вода и горная пещера", [ArtifactSetKeys.BloodstainedChivalry, ArtifactSetKeys.NoblesseOblige]), /* Крайне не выгодный */
  [DungeonKeys.DenouementOfSin]: new _Dungeon(DungeonKeys.DenouementOfSin, "Конец греха", [ArtifactSetKeys.GoldenTroupe, ArtifactSetKeys.MarechausseeHunter]), /* Крайне выгодный */
  [DungeonKeys.DomainOfGuyun]: new _Dungeon(DungeonKeys.DomainOfGuyun, "Владения Гуюнь", [ArtifactSetKeys.ArchaicPetra, ArtifactSetKeys.RetracingBolide]), /* Крайне не выгодный */
  [DungeonKeys.HiddenPalaceOfZhouFormula]: new _Dungeon(DungeonKeys.HiddenPalaceOfZhouFormula, "Скрытый дворец Уван", [ArtifactSetKeys.CrimsonWitchOfFlames, ArtifactSetKeys.Lavawalker]), /* Может быть полезен */
  [DungeonKeys.MidsummerCourtyard]: new _Dungeon(DungeonKeys.MidsummerCourtyard, "Июльские сады", [ArtifactSetKeys.ThunderingFury, ArtifactSetKeys.Thundersoother]), /* Крайне не выгодный */
  [DungeonKeys.MoltenIronFortress]: new _Dungeon(DungeonKeys.MoltenIronFortress, "Расплавленная крепость", [ArtifactSetKeys.NymphsDream, ArtifactSetKeys.VourukashasGlow]), /* Крайне не выгодный */
  [DungeonKeys.MomijiDyedCourt]: new _Dungeon(DungeonKeys.MomijiDyedCourt, "Кленовый зал", [ArtifactSetKeys.EmblemOfSeveredFate, ArtifactSetKeys.ShimenawasReminiscence]), /* Крайне выгодный */
  [DungeonKeys.PeakOfVindagnyr]: new _Dungeon(DungeonKeys.PeakOfVindagnyr, "Пик Виндагнира", [ArtifactSetKeys.BlizzardStrayer, ArtifactSetKeys.HeartOfDepth]), /* Выгодный */
  [DungeonKeys.RidgeWatch]: new _Dungeon(DungeonKeys.RidgeWatch, "Горный дозор", [ArtifactSetKeys.PaleFlame, ArtifactSetKeys.TenacityOfTheMillelith]), /* Крайне не выгодный */
  [DungeonKeys.SlumberingCourt]: new _Dungeon(DungeonKeys.SlumberingCourt, "Дремлющий сад", [ArtifactSetKeys.HuskOfOpulentDreams, ArtifactSetKeys.OceanHuedClam]), /* Крайне не выгодный */
  [DungeonKeys.SpireOfSolitaryEnlightenment]: new _Dungeon(DungeonKeys.SpireOfSolitaryEnlightenment, "Шпиль одинокого просветления", [ArtifactSetKeys.DeepwoodMemories, ArtifactSetKeys.GildedDreams]), /* Крайне выгодный */
  [DungeonKeys.TheLostValley]: new _Dungeon(DungeonKeys.TheLostValley, "Затерянная долина", [ArtifactSetKeys.EchoesOfAnOffering, ArtifactSetKeys.VermillionHereafter]), /* Крайне не выгодный */
  [DungeonKeys.ValleyOfRemembrance]: new _Dungeon(DungeonKeys.ValleyOfRemembrance, "Долина воспоминаний", [ArtifactSetKeys.MaidenBeloved, ArtifactSetKeys.ViridescentVenerer]), /* Может быть полезен */
  [DungeonKeys.WaterfallWen]: new _Dungeon(DungeonKeys.WaterfallWen, "Город гроз", [ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods, ArtifactSetKeys.SongOfDaysPast]), /* Крайне не выгодный */
} as Record<Dungeon["key"], Dungeon>;
