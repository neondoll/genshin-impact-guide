import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSetRecommendationsVideoSources } from "@/enums/artifact-set-recommendations";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/features/characters/enums";
import { StatIds } from "@/features/stats/enums";
import { elementalReactionById } from "@/features/elemental-reactions/help.ts";
import { ElementalReactionIds } from "@/features/elemental-reactions/enums.ts";

export default ArtifactSetRecommendations.init([
  ArtifactSetIds.ViridescentVenerer,
  [
    new ArtifactSetCharacterRecommendation(CharacterIds.Jean).setIsBetter()
      .setNotes(`Анемо персонаж поддержки, который наносит Анемо урон, вызывает реакцию ${elementalReactionById(ElementalReactionIds.Swirl)} и лечит отряд. Она может использовать как полный комплект, так и только 2 его предмета, сочетая с 2 предметами набора ${artifactSetById(ArtifactSetIds.MaidenBeloved)} или аналогами, если команде не хватает лечения, или с 2 предметами ${artifactSetById(ArtifactSetIds.GladiatorsFinale)} (или аналогами), так как лечение Джинн зависит от силы атаки. 2 предмета набора ${artifactSetById(ArtifactSetIds.ViridescentVenerer)} в таком случае можно заменить ${artifactSetById(ArtifactSetIds.DesertPavilionChronicle)}.`),
    new ArtifactSetCharacterRecommendation(CharacterIds.KaedeharaKazuha).setIsBetter()
      .setNotes(`Анемо персонаж, играющий от реакции ${elementalReactionById(ElementalReactionIds.Swirl)}, поэтому ему будут полезны бонусы полного комплекта. Кроме того, набор снизит сопротивление врагов к соответствующему элементу при реакции ${elementalReactionById(ElementalReactionIds.Swirl)}.\n${artifactSetById(ArtifactSetIds.ViridescentVenerer)} - лучший комплект для Кадзухи.`),
    new ArtifactSetCharacterRecommendation(CharacterIds.ShikanoinHeizou).setIsBetter()
      .setNotes(`Хэйдзо является, как правило, персонажем, наносящим основной Анемо урон в команде. Он может использовать как бонусы только 2 предметов, так и бонус всего комплекта при игре через реакцию ${elementalReactionById(ElementalReactionIds.Swirl)}. 2 предмета набора лучше всего сочетать с 2 предметами набора ${artifactSetById(ArtifactSetIds.GladiatorsFinale)} или другими с аналогичными бонусами. В таком случае 2 предмета набора ${artifactSetById(ArtifactSetIds.ViridescentVenerer)} можно заменить ${artifactSetById(ArtifactSetIds.DesertPavilionChronicle)}.`),
    new ArtifactSetCharacterRecommendation(CharacterIds.Sayu)
      .setNotes(`Анемо персонаж поддержки, который наносит Анемо урон, вызывает реакцию ${elementalReactionById(ElementalReactionIds.Swirl)} и лечит отряд. Она может использовать как полный комплект, так и только 2 его предмета, сочетая с 2 предметами набора ${artifactSetById(ArtifactSetIds.MaidenBeloved)} или аналогами, если команде не хватает лечения, или с 2 предметами ${artifactSetById(ArtifactSetIds.GladiatorsFinale)} (или аналогами), так как лечение Саю зависит от силы атаки. 2 предмета набора ${artifactSetById(ArtifactSetIds.ViridescentVenerer)} в таком случае можно заменить ${artifactSetById(ArtifactSetIds.DesertPavilionChronicle)}.`),
    new ArtifactSetCharacterRecommendation(CharacterIds.Sucrose).setIsBetter()
      .setNotes(`Так как Сахароза является Анемо персонажем, играющим от реакции ${elementalReactionById(ElementalReactionIds.Swirl)}, ей будут полезны бонусы полного комплекта. Кроме того, этот комплект будет очень полезен для остальных членов отряда, так как реакция ${elementalReactionById(ElementalReactionIds.Swirl)} будет понижать сопротивление противников к соответствующему элементу.\n${artifactSetById(ArtifactSetIds.ViridescentVenerer)} является лучшим комплектом для Сахарозы.`),
    new ArtifactSetCharacterRecommendation(CharacterIds.Venti).setIsBetter()
      .setNotes(`Анемо персонаж поддержки, вызывающий реакцию ${elementalReactionById(ElementalReactionIds.Swirl)}, поэтому ему подойдет бонус полного комплекта. Кроме того, набор снизит сопротивление врагов к соответствующему элементу при данной реакции.\n${artifactSetById(ArtifactSetIds.ViridescentVenerer)} - лучший комплект для Венти.`),
    new ArtifactSetCharacterRecommendation(CharacterIds.Xiao)
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
