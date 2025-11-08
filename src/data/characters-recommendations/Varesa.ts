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
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Varesa)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.LONG_NIGHTS_OATH).setNotes([
        "Лучший набор для Варесы, поскольку значительно увеличивает её урон от атак в падении.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.OBSIDIAN_CODEX).setNotes([
        "Комплект увеличивает урон Варесы и повышает шанс крит. попадания в сумме до 40%, позволяя сосредоточиться на крит. уроне в артефактах.",
        "Так как Вареса обладает Благословением Ночного духа, она полностью реализует условия комплекта.",
      ]),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE)],
      [ARTIFACT_SLOTS.GOBLET]: [
        new CharacterArtifactStatRecommendation(STATS.ELECTRO_DMG_BONUS).setNotes(["Лучше с Цаплей всегда"]),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setNotes([
          "Лучше с Фуриной или в сете на планжи",
        ]),
      ],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setNotes(["от 1800"]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setNotes(["от 60%"]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setNotes(["от 180%"]),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setNotes([
          "115% - 135% для Взрыва стихии",
        ]),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setNotes([
          `от 150 (при игре через реакцию ${elementalReactionById(ElementalReactionIds.Hyperbloom)})`,
        ]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("Однозначно Сигна")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "По необходимости\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(10)"]),
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.VividNotions).setPercent(1.28),
    new CharacterWeaponRecommendation(WeaponIds.LostPrayerToTheSacredWinds).setPercent(1.06),
    new CharacterWeaponRecommendation(WeaponIds.KagurasVerity).setPercent(1.05),
    new CharacterWeaponRecommendation(WeaponIds.TomeOfTheEternalFlow).setPercent(1.04),
    new CharacterWeaponRecommendation(WeaponIds.CashflowSupervision).setPercent(1.04),
    new CharacterWeaponRecommendation(WeaponIds.SurfsUp).setPercent(1.03),
    new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setPercent(1.00).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialJade).setPercent(0.92).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FlowingPurity).setPercent(0.92).setRefinement(5),
  ]);
