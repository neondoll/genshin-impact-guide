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
import { elementalReactionById } from "@/features/elemental-reactions/help";
import { ElementalReactionIds } from "@/enums/elemental-reaction";
import { STATS } from "@/constants/stats";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.KukiShinobu)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.TENACITY_OF_THE_MILLELITH).setNotes([
        "Набор увеличивает лечение Синобу благодаря бонусу HP и увеличивает силу атаки и прочность щита всего отряда, так как элементальный навык Синобу срабатывает каждые 1.5 секунды.",
        "Набор хорошо показывает себя в любом отряде",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.MAIDEN_BELOVED).setNotes([
        "Набор хорошо работает, если Синобу используется исключительно для лечения команды.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.FLOWER_OF_PARADISE_LOST).setNotes([
        "Набор хорошо работает только в команде с Дендро и Гидро персонажами. Бонус мастерства стихий увеличивает лечение Синобу и урон от реакций.",
        `Так как элементальный навык Синобу срабатывает каждый 1.5 секунды, он активирует реакцию ${elementalReactionById(ElementalReactionIds.Hyperbloom)} и увеличивает урон реакции.`,
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.GILDED_DREAMS).setNotes([
        "Бонус мастерства стихий увеличивает лечение Синобу и урон от реакций.",
        "Отлично подходит для отрядов, которые вызывают реакции с Дендро.",
      ]),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setUsePercent(0.894),
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setUsePercent(0.073),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setUsePercent(0.016),
      ],
      [ARTIFACT_SLOTS.GOBLET]: [
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setUsePercent(0.810),
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setUsePercent(0.114),
        new CharacterArtifactStatRecommendation(STATS.ELECTRO_DMG_BONUS).setUsePercent(0.044),
      ],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setUsePercent(0.807),
        new CharacterArtifactStatRecommendation(STATS.HEALING_BONUS).setUsePercent(0.071),
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setUsePercent(0.056),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setNotes(["Приоритетно", "от 700"]),
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setNotes(["от 30000"]),
      ],
    },
  ]))
  .setKeyConstellations([2])
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Не качаем\n(1)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart2,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.FreedomSworn).setIsBetter("Лучшее оружие (низкая зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.ToukabouShigure).setIsBetter("Лучшее эвентовое оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.IronSting).setIsBetter("Лучшее доступное оружие").setRefinement(5),
  ]);
