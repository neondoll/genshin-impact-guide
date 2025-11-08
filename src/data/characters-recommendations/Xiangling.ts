import { ARTIFACT_SETS } from "@/constants/artifact-sets";
import { ARTIFACT_SLOTS } from "@/constants/artifact-slots";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactSetRecommendationWithIds,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterIds } from "@/enums/character";
import { ElementalReactionIds } from "@/enums/elemental-reaction";
import { elementalReactionLink } from "@/features/elemental-reactions/help";
import { STATS } from "@/constants/stats";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Xiangling)
  .setArtifacts(
    CharacterArtifactRecommendations.init([
      {
        [elementalReactionLink(ElementalReactionIds.Vaporize, "Пар")]: [
          new CharacterArtifactSetRecommendationWithId(
            ARTIFACT_SETS.EMBLEM_OF_SEVERED_FATE,
          )
            .setIsBetter()
            .setNotes([
              "Лучший вариант для Сян Лин, так как увеличивает очень важное "
              + "восст. энергии и урон взрыва стихии, который является основным талантом.",
            ])
            .setPercent(1.0),
          new CharacterArtifactSetRecommendationWithId(
            ARTIFACT_SETS.CRIMSON_WITCH_OF_FLAMES,
          ).setNotes([
            "Если Сян Лин вызывает реакции (например, Пар), ей будет "
            + "полезен бонус 4 предметов.",
            "Лучше всего работает с Гидро и/или Крио персонажами в отряде.",
          ]).setPercent(0.9954),
          new CharacterArtifactSetRecommendationWithIds([
            ARTIFACT_SETS.CRIMSON_WITCH_OF_FLAMES,
            ARTIFACT_SETS.EMBLEM_OF_SEVERED_FATE,
          ]).setNotes([
            "Увеличивает Пиро урон и скорость накопления взрыва стихии.",
          ]).setPercent(0.9277),
        ],
        [elementalReactionLink(ElementalReactionIds.Overloaded, "Перегрузка")]: [
          new CharacterArtifactSetRecommendationWithId(
            ARTIFACT_SETS.EMBLEM_OF_SEVERED_FATE,
          )
            .setIsBetter()
            .setNotes([
              "Лучший вариант для Сян Лин, так как увеличивает очень важное "
              + "восст. энергии и урон взрыва стихии, который является основным талантом.",
            ])
            .setPercent(1.0),
          new CharacterArtifactSetRecommendationWithId(
            ARTIFACT_SETS.CRIMSON_WITCH_OF_FLAMES,
          ).setNotes([
            "Если Сян Лин вызывает реакции (например, Пар), ей будет "
            + "полезен бонус 4 предметов.",
            "Лучше всего работает с Гидро и/или Крио персонажами в отряде.",
          ]).setPercent(0.9595),
          new CharacterArtifactSetRecommendationWithIds([
            ARTIFACT_SETS.CRIMSON_WITCH_OF_FLAMES,
            ARTIFACT_SETS.EMBLEM_OF_SEVERED_FATE,
          ]).setNotes([
            "Увеличивает Пиро урон и скорость накопления взрыва стихии.",
          ]).setPercent(0.9408),
        ],
      },
      {
        [ARTIFACT_SLOTS.SANDS]: [
          new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setNotes([
            "Ставим если без этого показателя в часах мы не закрываем требования",
          ]),
          new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setNotes([
            `Ставим если без ВЭ в часах мы закрываем требования для отрядов `
            + `без ${elementalReactionLink(ElementalReactionIds.Vaporize, "Пара")}`,
          ]),
          new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setNotes([
            `Ставим если без ВЭ в часах мы закрываем требования для отрядов `
            + `с ${elementalReactionLink(ElementalReactionIds.Vaporize, "Паром")}`,
          ]),
        ],
        [ARTIFACT_SLOTS.GOBLET]: [
          new CharacterArtifactStatRecommendation(STATS.PYRO_DMG_BONUS),
        ],
        [ARTIFACT_SLOTS.CIRCLET]: [
          new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
          new CharacterArtifactStatRecommendation(STATS.CRIT_DMG),
        ],
        additional: [
          new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
          new CharacterArtifactStatRecommendation(STATS.CRIT_DMG),
          new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE),
          new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setNotes([
            "Приоритетно",
          ]),
          new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setNotes([
            `Если играем в ${elementalReactionLink(
              ElementalReactionIds.Vaporize,
              "Паре",
            )}`,
          ]),
        ],
      },
    ]),
  )
  .setKeyConstellations([3, 4])
  .setRequiredLevel("80/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([
      TalentIds.NormalAttack,
      "Не качаем\n(1)",
    ]),
    CharacterTalentLevelingRecommendation.init([
      TalentIds.ElementalSkill,
      "Во вторую очередь\n(9)",
    ]),
    CharacterTalentLevelingRecommendation.init([
      TalentIds.ElementalBurst,
      "В первую очередь\n(10)",
    ]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.GuideToXiangling,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
    VideoSourceIds.XianglingElementalBurstGuide,
  ])
  .setWeapons({
    [elementalReactionLink(ElementalReactionIds.Vaporize, "Пар")]: [
      new CharacterWeaponRecommendation(WeaponIds.StaffOfTheScarletSands)
        .setIsBetter("Лучшее оружие")
        .setPercent(1.07),
      new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords)
        .setPercent(1.06)
        .setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.WavebreakersFin)
        .setPercent(1.02)
        .setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.FracturedHalo).setPercent(1.02),
      new CharacterWeaponRecommendation(WeaponIds.StaffOfHoma).setPercent(1.01),
      new CharacterWeaponRecommendation(WeaponIds.EngulfingLightning).setPercent(1.01),
      new CharacterWeaponRecommendation(WeaponIds.Deathmatch)
        .setPercent(1.01)
        .setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.LumidouceElegy).setPercent(1.0),
      new CharacterWeaponRecommendation(WeaponIds.TheCatch)
        .setIsBetter("Лучшее доступное оружие")
        .setPercent(1.0)
        .setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.SymphonistOfScents).setPercent(0.99),
      new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords)
        .setPercent(0.99)
        .setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SkywardSpine).setPercent(0.98),
      new CharacterWeaponRecommendation(WeaponIds.DragonsBane)
        .setPercent(0.97)
        .setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.Deathmatch)
        .setPercent(0.97)
        .setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeWingedSpear).setPercent(0.97),
      new CharacterWeaponRecommendation(WeaponIds.CrimsonMoonsSemblance).setPercent(0.95),
      new CharacterWeaponRecommendation(WeaponIds.BloodsoakedRuins).setPercent(0.95),
      new CharacterWeaponRecommendation(WeaponIds.CalamityQueller).setPercent(0.95),
      new CharacterWeaponRecommendation(WeaponIds.WavebreakersFin)
        .setPercent(0.93)
        .setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.MissiveWindspear).setPercent(0.93),
      new CharacterWeaponRecommendation(WeaponIds.VortexVanquisher).setPercent(0.92),
      new CharacterWeaponRecommendation(WeaponIds.BlackcliffPole)
        .setPercent(0.9)
        .setPostfix("(0 стаков)"),
      new CharacterWeaponRecommendation(WeaponIds.FavoniusLance).setPercent(0.89),
      new CharacterWeaponRecommendation(WeaponIds.TamayurateiNoOhanashi).setPercent(0.89),
    ],
    [elementalReactionLink(ElementalReactionIds.Overloaded, "Перегрузка")]: [
      new CharacterWeaponRecommendation(WeaponIds.StaffOfTheScarletSands)
        .setIsBetter("Лучшее оружие")
        .setPercent(1.06),
      new CharacterWeaponRecommendation(WeaponIds.LumidouceElegy).setPercent(1.05),
      new CharacterWeaponRecommendation(WeaponIds.FracturedHalo).setPercent(1.05),
      new CharacterWeaponRecommendation(WeaponIds.StaffOfHoma).setPercent(1.05),
      new CharacterWeaponRecommendation(WeaponIds.SymphonistOfScents).setPercent(1.04),
      new CharacterWeaponRecommendation(WeaponIds.Deathmatch)
        .setPercent(1.03)
        .setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeWingedSpear).setPercent(1.03),
      new CharacterWeaponRecommendation(WeaponIds.WavebreakersFin)
        .setPercent(1.02)
        .setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.EngulfingLightning).setPercent(1.02),
      new CharacterWeaponRecommendation(WeaponIds.SkywardSpine).setPercent(1.01),
      new CharacterWeaponRecommendation(WeaponIds.TheCatch)
        .setIsBetter("Лучшее доступное оружие")
        .setPercent(1.0)
        .setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.CalamityQueller).setPercent(0.99),
      new CharacterWeaponRecommendation(WeaponIds.Deathmatch)
        .setPercent(0.99)
        .setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.CrimsonMoonsSemblance).setPercent(0.98),
      new CharacterWeaponRecommendation(WeaponIds.BloodsoakedRuins).setPercent(0.98),
      new CharacterWeaponRecommendation(WeaponIds.VortexVanquisher).setPercent(0.95),
      new CharacterWeaponRecommendation(WeaponIds.WavebreakersFin)
        .setPercent(0.94)
        .setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords)
        .setPercent(0.93)
        .setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords)
        .setPercent(0.92)
        .setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.BlackcliffPole)
        .setPercent(0.92)
        .setPostfix("(0 стаков)"),
      new CharacterWeaponRecommendation(WeaponIds.TamayurateiNoOhanashi).setPercent(0.9),
      new CharacterWeaponRecommendation(WeaponIds.FavoniusLance).setPercent(0.89),
      new CharacterWeaponRecommendation(WeaponIds.DragonsBane)
        .setPercent(0.88)
        .setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.MissiveWindspear).setPercent(0.85),
    ],
  });
