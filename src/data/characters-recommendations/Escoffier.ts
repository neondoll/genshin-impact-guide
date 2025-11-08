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
import artifactSets from "../artifact-sets";
import weapons from "../weapons";

export default new CharacterRecommendations(CharacterIds.Escoffier)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.GOLDEN_TROUPE).setIsBetter().setNotes([
        "Значительно увеличит урон элементального навыка Эскофье, особенно когда она не на поле.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.BLIZZARD_STRAYER).setNotes([
        "Комплект увеличит Крио урон и шанс крит. попадания Эскофье.",
        "Поскольку Эскофье играет в отрядах с Крио и Гидро персонажами, она выполняет условие комплекта.",
      ]),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setNotes([
          "Личный урон важнее, чем ульта по откату",
        ]),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setNotes([
          "В меньшинстве случаев, когда есть Фурина, лечение нужно и лечить больше некому",
        ]),
      ],
      [ARTIFACT_SLOTS.GOBLET]: [
        new CharacterArtifactStatRecommendation(STATS.CRYO_DMG_BONUS).setNotes(["В 99% случаев"]),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE).setNotes(["В 1% случаев"]),
      ],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setNotes(["Почти всегда"]),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setNotes(["Приоритетно"]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setNotes(["Приоритетно"]),
        new CharacterArtifactStatRecommendation(STATS.ATK_PERCENTAGE),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("С1 лучше")
  .setReferencePoint([
    ["Оружие", `${weapons[WeaponIds.Deathmatch].title} R1 [${weapons[WeaponIds.Deathmatch].rarity}⭐]`],
    ["Атака", "2 100"],
    ["Восст. энергии", "110% - 115%"],
    ["Крит. шанс", "80%"],
    ["Крит. урон", "175%"],
    ["Артефакты", artifactSets[ARTIFACT_SETS.GOLDEN_TROUPE].name],
  ])
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(9)"]),
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.SymphonistOfScents).setPercent(1.2991),
    new CharacterWeaponRecommendation(WeaponIds.StaffOfHoma).setPercent(1.2247),
    new CharacterWeaponRecommendation(WeaponIds.LumidouceElegy).setPercent(1.1820),
    new CharacterWeaponRecommendation(WeaponIds.Deathmatch).setPercent(1.1568).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeWingedSpear).setPercent(1.1435),
    new CharacterWeaponRecommendation(WeaponIds.CrimsonMoonsSemblance).setPercent(1.1126),
    new CharacterWeaponRecommendation(WeaponIds.StaffOfTheScarletSands).setPercent(1.0994),
    new CharacterWeaponRecommendation(WeaponIds.Deathmatch).setPercent(1.0637).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.SkywardSpine).setPercent(1.0356),
    new CharacterWeaponRecommendation(WeaponIds.ProspectorsDrill).setPercent(1.0309).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.LithicSpear).setPercent(1.0118).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.BlackcliffPole).setPercent(1.0000),
    new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords).setPercent(0.9927).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords).setPercent(0.9926).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.ProspectorsDrill).setPercent(0.9819).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.MissiveWindspear).setPercent(0.9801),
    new CharacterWeaponRecommendation(WeaponIds.KitainCrossSpear).setPercent(0.8818).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusLance).setPercent(0.8526).setRefinement(5),
  ]);
