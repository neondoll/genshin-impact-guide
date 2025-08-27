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
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Fischl)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.GoldenTroupe)],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setUsePercent(0.785),
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setUsePercent(0.125),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setUsePercent(0.062),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.ElectroDmgBonus).setUsePercent(0.830),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setUsePercent(0.119),
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setUsePercent(0.018),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setUsePercent(0.669),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setUsePercent(0.266),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setUsePercent(0.034),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setDescription("Приоритетно"),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setDescription("Приоритетно"),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage),
      ],
    },
  ]))
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "Во вторую очередь\n(6)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponKeys.AquaSimulacra).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.ElegyForTheEnd).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.TheStringless),
  ]);
