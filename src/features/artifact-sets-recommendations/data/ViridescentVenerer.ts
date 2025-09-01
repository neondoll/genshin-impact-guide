import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";
import { elementalReactionById } from "@/features/elemental-reactions/help.ts";
import { ElementalReactionIds } from "@/features/elemental-reactions/enums.ts";

export default ArtifactSetRecommendationsClass.init([
  ArtifactSetIds.ViridescentVenerer,
  [
    new ArtifactSetCharacterRecommendationClass(CharacterIds.Jean).setIsBetter()
      .setNotes(`Анемо персонаж поддержки, который наносит Анемо урон, вызывает реакцию ${elementalReactionById(ElementalReactionIds.Swirl)} и лечит отряд. Она может использовать как полный комплект, так и только 2 его предмета, сочетая с 2 предметами набора ${artifactSetById(ArtifactSetIds.MaidenBeloved)} или аналогами, если команде не хватает лечения, или с 2 предметами ${artifactSetById(ArtifactSetIds.GladiatorsFinale)} (или аналогами), так как лечение Джинн зависит от силы атаки. 2 предмета набора ${artifactSetById(ArtifactSetIds.ViridescentVenerer)} в таком случае можно заменить ${artifactSetById(ArtifactSetIds.DesertPavilionChronicle)}.`),
    new ArtifactSetCharacterRecommendationClass(CharacterIds.KaedeharaKazuha).setIsBetter()
      .setNotes(`Анемо персонаж, играющий от реакции ${elementalReactionById(ElementalReactionIds.Swirl)}, поэтому ему будут полезны бонусы полного комплекта. Кроме того, набор снизит сопротивление врагов к соответствующему элементу при реакции ${elementalReactionById(ElementalReactionIds.Swirl)}.\n${artifactSetById(ArtifactSetIds.ViridescentVenerer)} - лучший комплект для Кадзухи.`),
    new ArtifactSetCharacterRecommendationClass(CharacterIds.ShikanoinHeizou).setIsBetter()
      .setNotes(`Хэйдзо является, как правило, персонажем, наносящим основной Анемо урон в команде. Он может использовать как бонусы только 2 предметов, так и бонус всего комплекта при игре через реакцию ${elementalReactionById(ElementalReactionIds.Swirl)}. 2 предмета набора лучше всего сочетать с 2 предметами набора ${artifactSetById(ArtifactSetIds.GladiatorsFinale)} или другими с аналогичными бонусами. В таком случае 2 предмета набора ${artifactSetById(ArtifactSetIds.ViridescentVenerer)} можно заменить ${artifactSetById(ArtifactSetIds.DesertPavilionChronicle)}.`),
    new ArtifactSetCharacterRecommendationClass(CharacterIds.Sayu)
      .setNotes(`Анемо персонаж поддержки, который наносит Анемо урон, вызывает реакцию ${elementalReactionById(ElementalReactionIds.Swirl)} и лечит отряд. Она может использовать как полный комплект, так и только 2 его предмета, сочетая с 2 предметами набора ${artifactSetById(ArtifactSetIds.MaidenBeloved)} или аналогами, если команде не хватает лечения, или с 2 предметами ${artifactSetById(ArtifactSetIds.GladiatorsFinale)} (или аналогами), так как лечение Саю зависит от силы атаки. 2 предмета набора ${artifactSetById(ArtifactSetIds.ViridescentVenerer)} в таком случае можно заменить ${artifactSetById(ArtifactSetIds.DesertPavilionChronicle)}.`),
    new ArtifactSetCharacterRecommendationClass(CharacterIds.Sucrose).setIsBetter()
      .setNotes(`Так как Сахароза является Анемо персонажем, играющим от реакции ${elementalReactionById(ElementalReactionIds.Swirl)}, ей будут полезны бонусы полного комплекта. Кроме того, этот комплект будет очень полезен для остальных членов отряда, так как реакция ${elementalReactionById(ElementalReactionIds.Swirl)} будет понижать сопротивление противников к соответствующему элементу.\n${artifactSetById(ArtifactSetIds.ViridescentVenerer)} является лучшим комплектом для Сахарозы.`),
    new ArtifactSetCharacterRecommendationClass(CharacterIds.Venti).setIsBetter()
      .setNotes(`Анемо персонаж поддержки, вызывающий реакцию ${elementalReactionById(ElementalReactionIds.Swirl)}, поэтому ему подойдет бонус полного комплекта. Кроме того, набор снизит сопротивление врагов к соответствующему элементу при данной реакции.\n${artifactSetById(ArtifactSetIds.ViridescentVenerer)} - лучший комплект для Венти.`),
    new ArtifactSetCharacterRecommendationClass(CharacterIds.Xiao)
      .setNotes(`Персонаж, наносящий основной Анемо урон в команде, поэтому ему будут полезны бонусы 2 предметов. Для лучшего эффекта сочетать с 2 предметами набора ${artifactSetById(ArtifactSetIds.GladiatorsFinale)} или другими с аналогичными бонусами. 2 предмета набора ${artifactSetById(ArtifactSetIds.ViridescentVenerer)} можно заменить ${artifactSetById(ArtifactSetIds.DesertPavilionChronicle)}.`),
  ],
])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.ElementalMastery],
    [ArtifactSlotIds.Circlet]: [...StatsCrit, StatIds.ElementalMastery],
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
