import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";

export default ArtifactSetRecommendations.init([ArtifactSetIds.VourukashasGlow, [
  new ArtifactSetCharacterRecommendation(CharacterIds.Dehya).setIsBetter()
    .setNotes(`Сияние Вурукаши - один из лучших комплектов для позиции основного урона и поддержки. Бонус 4 предметов увеличит урон Дэхьи, так как она получает урон, даже если не находится на поле.\nМожет использовать как полный комплект, так и 2 предмета, сочетая их с ${artifactSetById(ArtifactSetIds.CrimsonWitchOfFlames)}, ${artifactSetById(ArtifactSetIds.WanderersTroupe)}, ${artifactSetById(ArtifactSetIds.GildedDreams)}, ${artifactSetById(ArtifactSetIds.FlowerOfParadiseLost)} или ${artifactSetById(ArtifactSetIds.TenacityOfTheMillelith)} в зависимости от позиции. В данных случаях ${artifactSetById(ArtifactSetIds.VourukashasGlow)} может быть заменён ${artifactSetById(ArtifactSetIds.TenacityOfTheMillelith)}, если не используются оба комплекта.`),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
