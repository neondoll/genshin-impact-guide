import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import {
  CharacterArtifactRecommendationsClass,
  CharacterArtifactSetRecommendationWithIdClass,
  CharacterArtifactStatRecommendationClass,
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterIds } from "../../characters/enums";
import { CharacterRecommendationsVideoSources } from "../enums";
import { StatIds } from "../../stats/enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Xingqiu)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.EmblemOfSeveredFate).setIsBetter().setNotes([
        "Лучший комплект для Син Цю, так как повысит очень важное восстановление энергии и увеличит урон от взрыва стихии, который является основным талантом Син Цю.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.NoblesseOblige).setNotes([
        "Увеличивает как урон Син Цю от взрыва стихии, так и силу атаки всего отряда.",
        "Рекомендуется, только если никто другой в команде не носит данный комплект артефактов.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setUsePercent(0.525),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setUsePercent(0.410),
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setUsePercent(0.030),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.HydroDmgBonus).setUsePercent(0.844),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setUsePercent(0.108),
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setUsePercent(0.025),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setUsePercent(0.650),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setUsePercent(0.258),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setUsePercent(0.055),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setNotes(["Приоритетно", "от 60%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setNotes(["Приоритетно", "от 120%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setNotes(["от 1400"]),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setNotes(["от 220%"]),
      ],
    },
  ]))
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "Во вторую очередь\n(8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([new CharacterWeaponRecommendationClass(WeaponIds.SacrificialSword).setIsBetter().setRefinement(5)]);
