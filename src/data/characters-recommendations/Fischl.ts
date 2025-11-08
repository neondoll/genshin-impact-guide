import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Fischl)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.GOLDEN_TROUPE)],
    {
      [ARTIFACT_SLOTS.SANDS]: [
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setUsePercent(0.785),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setUsePercent(0.125),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setUsePercent(0.062),
      ],
      [ARTIFACT_SLOTS.GOBLET]: [
        new CharacterArtifactStatRecommendation(STATS.ELECTRO_DMG_BONUS).setUsePercent(0.830),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setUsePercent(0.119),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setUsePercent(0.018),
      ],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setUsePercent(0.669),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setUsePercent(0.266),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setUsePercent(0.034),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setDescription("Приоритетно"),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setDescription("Приоритетно"),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE),
      ],
    },
  ]))
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.AquaSimulacra).setIsBetter("Лучшее оружие (средняя зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.ElegyForTheEnd).setIsBetter("Лучшее оружие (средняя зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.TheStringless).setIsBetter("Лучшее доступное оружие").setRefinement(5),
  ]);
