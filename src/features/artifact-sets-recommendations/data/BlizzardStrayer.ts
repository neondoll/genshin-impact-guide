import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.BlizzardStrayer, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Ganyu)
    .setNotes(`Является персонажем, наносящим основной Крио урон в команде, поэтому ей подойдут бонусы как 2 предметов, так и полного комплекта. Полный комплект лучше всего подходят для игры через Заморозку, а 2 предмета комплекта можно использовать в других случаях и сочетать с 2 предметами ${artifactSetById(ArtifactSetIds.GladiatorsFinale)} или аналогами.`),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.KamisatoAyaka).setIsBetter()
    .setNotes(`Является персонажем, наносящим основной Крио урон в команде, поэтому ей подойдут бонусы как 2 предметов, так и полного комплекта. Полный комплект лучше всего подходит для игры через Заморозку, а 2 предмета комплекта можно использовать в любом другом случае и сочетать с 2 предметами ${artifactSetById(ArtifactSetIds.GladiatorsFinale)} или аналогами.`),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Wriothesley),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatKeys.AtkPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatKeys.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
