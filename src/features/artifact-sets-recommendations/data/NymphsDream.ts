import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.NymphsDream, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.KamisatoAyato).setIsBetter()
    .setNotes(`Хороший комплект для Аято, так как значительно увеличивает Гидро урон и силу атаки.\nМожет использовать как полный набор, так и 2 предмета, сочетая с ${artifactSetById(ArtifactSetIds.GladiatorsFinale)}, ${artifactSetById(ArtifactSetIds.ShimenawasReminiscence)}, ${artifactSetById(ArtifactSetIds.EchoesOfAnOffering)}, ${artifactSetById(ArtifactSetIds.VermillionHereafter)}. В таком случае ${artifactSetById(ArtifactSetIds.NymphsDream)} может быть заменён ${artifactSetById(ArtifactSetIds.HeartOfDepth)}.`),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Tartaglia).setIsBetter()
    .setNotes(`Один из лучших комплектов для Тартальи, так как значительно увеличивает Гидро урон и силу атаки.\nМожет использовать как полный набор, так и 2 предмета, сочетая с ${artifactSetById(ArtifactSetIds.GladiatorsFinale)}, ${artifactSetById(ArtifactSetIds.NoblesseOblige)}, ${artifactSetById(ArtifactSetIds.ShimenawasReminiscence)}, ${artifactSetById(ArtifactSetIds.EchoesOfAnOffering)}, ${artifactSetById(ArtifactSetIds.VermillionHereafter)}. В таком случае ${artifactSetById(ArtifactSetIds.NymphsDream)} может быть заменён ${artifactSetById(ArtifactSetIds.HeartOfDepth)}.`),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Xingqiu)
    .setNotes(`Син Цю будет полезен бонус 2 предметов, так как ему важен Гидро урон. Можно сочетать с ${artifactSetById(ArtifactSetIds.EmblemOfSeveredFate)} или ${artifactSetById(ArtifactSetIds.NoblesseOblige)}. В таком случае ${artifactSetById(ArtifactSetIds.NymphsDream)} может быть заменён ${artifactSetById(ArtifactSetIds.HeartOfDepth)}.`),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
