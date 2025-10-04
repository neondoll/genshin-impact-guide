import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";

export default ArtifactSetRecommendations.init([
  ArtifactSetIds.BlizzardStrayer,
  [
    new ArtifactSetCharacterRecommendation(CharacterIds.Ganyu).setNotes(
      `Является персонажем, наносящим основной Крио урон в команде, поэтому ей подойдут бонусы как 2 предметов, так и `
      + `полного комплекта. Полный комплект лучше всего подходят для игры через Заморозку, а 2 предмета комплекта `
      + `можно использовать в других случаях и сочетать с 2 предметами `
      + `${artifactSetById(ArtifactSetIds.GladiatorsFinale)} или аналогами.`,
    ),
    new ArtifactSetCharacterRecommendation(CharacterIds.KamisatoAyaka).setIsBetter().setNotes(
      `Является персонажем, наносящим основной Крио урон в команде, поэтому ей подойдут бонусы как 2 предметов, так и `
      + `полного комплекта. Полный комплект лучше всего подходит для игры через Заморозку, а 2 предмета комплекта `
      + `можно использовать в любом другом случае и сочетать с 2 предметами `
      + `${artifactSetById(ArtifactSetIds.GladiatorsFinale)} или аналогами.`,
    ),
    new ArtifactSetCharacterRecommendation(CharacterIds.Wriothesley),
  ],
])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
