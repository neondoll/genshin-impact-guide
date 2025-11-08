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

export default new CharacterRecommendations(CharacterIds.Xingqiu)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.EMBLEM_OF_SEVERED_FATE).setIsBetter().setNotes([
        "Лучший комплект для Син Цю, так как повысит очень важное восстановление энергии и увеличит урон от взрыва стихии, который является основным талантом Син Цю.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.NOBLESSE_OBLIGE).setNotes([
        "Увеличивает как урон Син Цю от взрыва стихии, так и силу атаки всего отряда.",
        "Рекомендуется, только если никто другой в команде не носит данный комплект артефактов.",
      ]),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setUsePercent(0.525),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setUsePercent(0.410),
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setUsePercent(0.030),
      ],
      [ARTIFACT_SLOTS.GOBLET]: [
        new CharacterArtifactStatRecommendation(STATS.HYDRO_DMG_BONUS).setUsePercent(0.844),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setUsePercent(0.108),
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setUsePercent(0.025),
      ],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setUsePercent(0.650),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setUsePercent(0.258),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setUsePercent(0.055),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setNotes(["Приоритетно", "от 60%"]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setNotes(["Приоритетно", "от 120%"]),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setNotes(["от 1400"]),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setNotes(["от 220%"]),
      ],
    },
  ]))
  .setRequiredLevel("80/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.SacrificialSword).setIsBetter("Лучшее оружие").setRefinement(5),
  ]);
