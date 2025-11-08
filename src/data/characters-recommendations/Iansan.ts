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
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Iansan)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.SCROLL_OF_THE_HERO_OF_CINDER_CITY).setIsBetter().setNotes([
        "Лучший набор для Иансан, так как восстановит ей энергию и увеличит элементальный урон основного персонажа.",
        "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.NOBLESSE_OBLIGE).setNotes([
        "Увеличит урон взрыва стихии Иансан и силу атаки отряду.",
        "Рекомендуется использовать, если другие члены отряда не носят данный комплект.",
      ]),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE),
      ],
      [ARTIFACT_SLOTS.GOBLET]: [new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE)],
      [ARTIFACT_SLOTS.CIRCLET]: [new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE)],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setNotes(["Приоритетно", "от 160%"]),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setNotes([
          "от 2000",
          "2556 для 10 Ур. Взрыва стихии",
          "3000 для 13 Ур. Взрыва стихии",
        ]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG),
      ],
    },
  ]))
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1 - 6)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Не качаем\n(1 - 6)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.SkywardSpine),
    new CharacterWeaponRecommendation(WeaponIds.TamayurateiNoOhanashi),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusLance),
  ]);
