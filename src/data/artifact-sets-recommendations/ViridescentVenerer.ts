import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { elementalReactionById } from "@/features/elemental-reactions/help";
import { ElementalReactionIds } from "@/enums/elemental-reaction";
import { VideoSourceIds } from "@/enums/video-source";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.VIRIDESCENT_VENERER)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Jean).setIsBetter().setNotes([
      "Анемо персонаж поддержки, который наносит Анемо урон, вызывает реакцию "
      + elementalReactionById(ElementalReactionIds.Swirl) + " и лечит отряд. Она может использовать как полный "
      + "комплект, так и только 2 его предмета, сочетая с 2 предметами набора "
      + artifactSetById(ARTIFACT_SETS.MAIDEN_BELOVED) + " или аналогами, если команде не хватает лечения, или с 2 "
      + "предметами " + artifactSetById(ARTIFACT_SETS.GLADIATORS_FINALE) + " (или аналогами), так как лечение Джинн "
      + "зависит от силы атаки. 2 предмета набора " + artifactSetById(ARTIFACT_SETS.VIRIDESCENT_VENERER) + " в таком "
      + "случае можно заменить " + artifactSetById(ARTIFACT_SETS.DESERT_PAVILION_CHRONICLE) + ".",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.KaedeharaKazuha).setIsBetter().setNotes([
      `Анемо персонаж, играющий от реакции ${elementalReactionById(ElementalReactionIds.Swirl)}, поэтому ему будут полезны бонусы полного комплекта. Кроме того, набор снизит сопротивление врагов к соответствующему элементу при реакции ${elementalReactionById(ElementalReactionIds.Swirl)}.\n${artifactSetById(ARTIFACT_SETS.VIRIDESCENT_VENERER)} - лучший комплект для Кадзухи.`,
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.ShikanoinHeizou).setIsBetter().setNotes([
      `Хэйдзо является, как правило, персонажем, наносящим основной Анемо урон в команде. Он может использовать как бонусы только 2 предметов, так и бонус всего комплекта при игре через реакцию ${elementalReactionById(ElementalReactionIds.Swirl)}. 2 предмета набора лучше всего сочетать с 2 предметами набора ${artifactSetById(ARTIFACT_SETS.GLADIATORS_FINALE)} или другими с аналогичными бонусами. В таком случае 2 предмета набора ${artifactSetById(ARTIFACT_SETS.VIRIDESCENT_VENERER)} можно заменить ${artifactSetById(ARTIFACT_SETS.DESERT_PAVILION_CHRONICLE)}.`,
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Sayu).setNotes([
      `Анемо персонаж поддержки, который наносит Анемо урон, вызывает реакцию ${elementalReactionById(ElementalReactionIds.Swirl)} и лечит отряд. Она может использовать как полный комплект, так и только 2 его предмета, сочетая с 2 предметами набора ${artifactSetById(ARTIFACT_SETS.MAIDEN_BELOVED)} или аналогами, если команде не хватает лечения, или с 2 предметами ${artifactSetById(ARTIFACT_SETS.GLADIATORS_FINALE)} (или аналогами), так как лечение Саю зависит от силы атаки. 2 предмета набора ${artifactSetById(ARTIFACT_SETS.VIRIDESCENT_VENERER)} в таком случае можно заменить ${artifactSetById(ARTIFACT_SETS.DESERT_PAVILION_CHRONICLE)}.`,
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Sucrose).setIsBetter().setNotes([
      `Так как Сахароза является Анемо персонажем, играющим от реакции ${elementalReactionById(ElementalReactionIds.Swirl)}, ей будут полезны бонусы полного комплекта. Кроме того, этот комплект будет очень полезен для остальных членов отряда, так как реакция ${elementalReactionById(ElementalReactionIds.Swirl)} будет понижать сопротивление противников к соответствующему элементу.\n${artifactSetById(ARTIFACT_SETS.VIRIDESCENT_VENERER)} является лучшим комплектом для Сахарозы.`,
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Venti).setIsBetter().setNotes([
      `Анемо персонаж поддержки, вызывающий реакцию ${elementalReactionById(ElementalReactionIds.Swirl)}, поэтому ему подойдет бонус полного комплекта. Кроме того, набор снизит сопротивление врагов к соответствующему элементу при данной реакции.\n${artifactSetById(ARTIFACT_SETS.VIRIDESCENT_VENERER)} - лучший комплект для Венти.`,
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Xiao).setNotes([
      `Персонаж, наносящий основной Анемо урон в команде, поэтому ему будут полезны бонусы 2 предметов. Для лучшего эффекта сочетать с 2 предметами набора ${artifactSetById(ARTIFACT_SETS.GLADIATORS_FINALE)} или другими с аналогичными бонусами. 2 предмета набора ${artifactSetById(ARTIFACT_SETS.VIRIDESCENT_VENERER)} можно заменить ${artifactSetById(ARTIFACT_SETS.DESERT_PAVILION_CHRONICLE)}.`,
    ]),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ATK_PERCENTAGE, STATS.ELEMENTAL_MASTERY, STATS.ENERGY_RECHARGE],
    [ARTIFACT_SLOTS.GOBLET]: [...StatsElementDamageBonus, STATS.ELEMENTAL_MASTERY],
    [ARTIFACT_SLOTS.CIRCLET]: [...StatsCrit, STATS.ELEMENTAL_MASTERY],
    additional: [...StatsCrit, STATS.ATK_PERCENTAGE, STATS.ELEMENTAL_MASTERY, STATS.ENERGY_RECHARGE],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
