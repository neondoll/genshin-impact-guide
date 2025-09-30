import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/features/characters/enums";
import { StatIds } from "@/features/stats/enums";

export default ArtifactSetRecommendations.init([ArtifactSetIds.NymphsDream, [
  new ArtifactSetCharacterRecommendation(CharacterIds.KamisatoAyato).setIsBetter()
    .setNotes(`Хороший комплект для Аято, так как значительно увеличивает Гидро урон и силу атаки.\nМожет использовать как полный набор, так и 2 предмета, сочетая с ${artifactSetById(ArtifactSetIds.GladiatorsFinale)}, ${artifactSetById(ArtifactSetIds.ShimenawasReminiscence)}, ${artifactSetById(ArtifactSetIds.EchoesOfAnOffering)}, ${artifactSetById(ArtifactSetIds.VermillionHereafter)}. В таком случае ${artifactSetById(ArtifactSetIds.NymphsDream)} может быть заменён ${artifactSetById(ArtifactSetIds.HeartOfDepth)}.`),
  new ArtifactSetCharacterRecommendation(CharacterIds.Tartaglia).setIsBetter()
    .setNotes(`Один из лучших комплектов для Тартальи, так как значительно увеличивает Гидро урон и силу атаки.\nМожет использовать как полный набор, так и 2 предмета, сочетая с ${artifactSetById(ArtifactSetIds.GladiatorsFinale)}, ${artifactSetById(ArtifactSetIds.NoblesseOblige)}, ${artifactSetById(ArtifactSetIds.ShimenawasReminiscence)}, ${artifactSetById(ArtifactSetIds.EchoesOfAnOffering)}, ${artifactSetById(ArtifactSetIds.VermillionHereafter)}. В таком случае ${artifactSetById(ArtifactSetIds.NymphsDream)} может быть заменён ${artifactSetById(ArtifactSetIds.HeartOfDepth)}.`),
  new ArtifactSetCharacterRecommendation(CharacterIds.Xingqiu)
    .setNotes(`Син Цю будет полезен бонус 2 предметов, так как ему важен Гидро урон. Можно сочетать с ${artifactSetById(ArtifactSetIds.EmblemOfSeveredFate)} или ${artifactSetById(ArtifactSetIds.NoblesseOblige)}. В таком случае ${artifactSetById(ArtifactSetIds.NymphsDream)} может быть заменён ${artifactSetById(ArtifactSetIds.HeartOfDepth)}.`),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
