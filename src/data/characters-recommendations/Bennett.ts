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

export default new CharacterRecommendations(CharacterIds.Bennett)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.NOBLESSE_OBLIGE).setIsBetter().setNotes([
        "Лучший комплект для Беннета в роли поддержки. Увеличивает собственный урон от взрыва стихий и даёт дополнительный бонус к атаке. Используется, когда никто другой не носит данный комплект артефактов.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.EMBLEM_OF_SEVERED_FATE).setNotes([
        "Комплект не даёт никаких бонусов другим членам отряда, но увеличивает восстановление энергии Беннета и урон от его взрыва стихий. Комплект используется, если хочется, чтобы Беннет наносил дополнительный урон.",
      ]),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setUsePercent(0.703),
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setUsePercent(0.187),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setUsePercent(0.089),
      ],
      [ARTIFACT_SLOTS.GOBLET]: [
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setUsePercent(0.749),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setUsePercent(0.109),
        new CharacterArtifactStatRecommendation(STATS.PYRO_DMG_BONUS).setUsePercent(0.105),
      ],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.HEALING_BONUS).setUsePercent(0.543),
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setUsePercent(0.224),
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setUsePercent(0.111),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setNotes(["Приоритетно", "от 25000"]),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setNotes(["Приоритетно", "от 220%"]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setNotes([
          "от 50% (при использовании меча Фавония или если Беннет будет наносить дополнительный урон)",
        ]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setNotes([
          "от 120% (если Беннет будет наносить дополнительный урон)",
        ]),
      ],
    },
  ]))
  .setKeyConstellations([6])
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.MistsplitterReforged).setIsBetter("Лучшее оружие (низкая зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.AquilaFavonia).setIsBetter("Лучшее оружие (низкая зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.SkywardBlade).setIsBetter("Лучшее оружие (низкая зависимость)").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.SapwoodBlade).setIsBetter("Лучшее доступное оружие").setRefinement(5),
  ]);
