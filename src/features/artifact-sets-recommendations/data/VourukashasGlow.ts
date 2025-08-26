import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.VourukashasGlow, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Dehya).setIsBetter()
    .setNotes(`Сияние Вурукаши - один из лучших комплектов для позиции основного урона и поддержки. Бонус 4 предметов увеличит урон Дэхьи, так как она получает урон, даже если не находится на поле.\nМожет использовать как полный комплект, так и 2 предмета, сочетая их с ${artifactSetById(ArtifactSetIds.CrimsonWitchOfFlames)}, ${artifactSetById(ArtifactSetIds.WanderersTroupe)}, ${artifactSetById(ArtifactSetIds.GildedDreams)}, ${artifactSetById(ArtifactSetIds.FlowerOfParadiseLost)} или ${artifactSetById(ArtifactSetIds.TenacityOfTheMillelith)} в зависимости от позиции. В данных случаях ${artifactSetById(ArtifactSetIds.VourukashasGlow)} может быть заменён ${artifactSetById(ArtifactSetIds.TenacityOfTheMillelith)}, если не используются оба комплекта.`),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatKeys.AtkPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
