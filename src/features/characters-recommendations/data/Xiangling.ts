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

export default new CharacterRecommendationsClass(CharacterIds.Xiangling)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.EmblemOfSeveredFate)],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setUsePercent(0.748),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setUsePercent(0.171),
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setUsePercent(0.055),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.PyroDmgBonus).setUsePercent(0.841),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setUsePercent(0.118),
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setUsePercent(0.013),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setUsePercent(0.642),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setUsePercent(0.291),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setUsePercent(0.042),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setDescription("Приоритетно"),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setDescription("Приоритетно"),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge),
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
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.EngulfingLightning).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.StaffOfHoma).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.StaffOfTheScarletSands).setRefinement(1),
  ]);
