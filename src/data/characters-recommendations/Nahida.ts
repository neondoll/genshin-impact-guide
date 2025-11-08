import { ARTIFACT_SETS } from "@/constants/artifact-sets";
import { ARTIFACT_SLOTS } from "@/constants/artifact-slots";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterIds } from "@/enums/character";
import { elementalReactionById } from "@/features/elemental-reactions/help";
import { ElementalReactionIds } from "@/enums/elemental-reaction";
import { STATS } from "@/constants/stats";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Nahida)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.DEEPWOOD_MEMORIES).setIsBetter(),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.GOLDEN_TROUPE),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.GILDED_DREAMS),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.INSTRUCTOR),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY)],
      [ARTIFACT_SLOTS.GOBLET]: [
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY),
        new CharacterArtifactStatRecommendation(STATS.DENDRO_DMG_BONUS),
      ],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("С1 < Сигна < С2")
  .setKeyConstellations([2])
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "По необходимости\n(6-8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6-8)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.GuideToNahida,
    VideoSourceIds.WhoNeedsLevelingPart2,
  ])
  .setWeapons({
    [elementalReactionById(ElementalReactionIds.Hyperbloom)]: [
      new CharacterWeaponRecommendation(WeaponIds.AThousandFloatingDreams).setIsBetter("Лучшее оружие (низкая зависимость)").setPercent(1.0000).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.WanderingEvenstar).setPercent(0.9841).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setIsBetter("Лучшее доступное оружие").setPercent(0.9705).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.WanderingEvenstar).setPercent(0.9702).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SurfsUp).setPercent(0.9679).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.KagurasVerity).setPercent(0.9668).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.TomeOfTheEternalFlow).setPercent(0.9664).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SacrificialJade).setPercent(0.9654).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setPercent(0.9646).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SolarPearl).setPercent(0.9628).setRefinement(1),
    ],
    [elementalReactionById(ElementalReactionIds.Quicken)]: [
      new CharacterWeaponRecommendation(WeaponIds.AThousandFloatingDreams).setIsBetter("Лучшее оружие (низкая зависимость)").setPercent(1.0000).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.WanderingEvenstar).setPercent(0.9789).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.WanderingEvenstar).setPercent(0.9718).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.MagicGuide).setIsBetter("Лучшее доступное оружие").setPercent(0.9552).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setPercent(0.9522).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.SacrificialJade).setPercent(0.9518).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.KagurasVerity).setPercent(0.9502).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SacrificialFragments).setPercent(0.9489).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.MappaMare).setPercent(0.9484).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.SurfsUp).setPercent(0.9471).setRefinement(1),
    ],
  });
