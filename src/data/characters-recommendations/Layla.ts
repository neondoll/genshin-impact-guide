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
import { STATS } from "@/constants/stats";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Layla)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.TENACITY_OF_THE_MILLELITH).setIsBetter().setNotes([
        "Лучший комплект, так как бонус к HP повысит прочность щита и урон Лайлы.",
        "Лайла будет повышать атаку остальных членов отряда, что отлично подходит ей как персонажу поддержки.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.NOBLESSE_OBLIGE).setNotes([
        "Увеличивает урон от взрыва стихии Лайлы и увеличивает силу атаки другим членам отряда.",
        "Рекомендуется, если никто другой в отряде не носит данный комплект.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.BLIZZARD_STRAYER).setNotes([
        "Рекомендуется, только если хочется получить больше урона от Лайлы.",
        "Рекомендуется иметь в отряде Гидро и других Крио персонажей для поддержания Заморозки.",
      ]),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setUsePercent(0.907),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setUsePercent(0.051),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setUsePercent(0.025),
      ],
      [ARTIFACT_SLOTS.GOBLET]: [
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setUsePercent(0.902),
        new CharacterArtifactStatRecommendation(STATS.CRYO_DMG_BONUS).setUsePercent(0.058),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setUsePercent(0.015),
      ],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setUsePercent(0.860),
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setUsePercent(0.080),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setUsePercent(0.035),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setNotes(["Приоритетно", "от 25000"]),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setNotes(["от 120%"]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setNotes(["от 50%"]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setNotes(["от 120%"]),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setNotes([
          "от 250 (только при игре через реакции)",
        ]),
      ],
    },
  ]))
  .setRequiredLevel("80/80")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart2,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.FavoniusSword).setIsBetter("Лучшее оружие").setRefinement(5),
  ]);
