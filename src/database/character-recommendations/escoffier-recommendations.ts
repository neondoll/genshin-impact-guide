import artifactSets from "../artifact-sets";
import weapons from "../weapons";
import { ArtifactPieceUidEnum } from "../enums/artifact-pieces";
import { ArtifactSetUidEnum } from "../enums/artifact-sets";
import { AttributeUidEnum } from "../enums/attributes";
import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import { WeaponUidEnum } from "../enums/weapons";
import type { CharacterRecommendation } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [
      {
        uid: ArtifactSetUidEnum.GoldenTroupe,
        is_better: true,
        notes: ["Значительно увеличит урон элементального навыка Эскофье, особенно когда она не на поле."],
      },
      {
        uid: ArtifactSetUidEnum.BlizzardStrayer,
        notes: [
          "Комплект увеличит Крио урон и шанс крит. попадания Эскофье.",
          "Поскольку Эскофье играет в отрядах с Крио и Гидро персонажами, она выполняет условие комплекта.",
        ],
      },
    ],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.AttackPercent, notes: ["Личный урон важнее, чем ульта по откату"] },
        {
          uid: AttributeUidEnum.EnergyRecharge,
          notes: ["В меньшинстве случаев, когда есть Фурина, лечение нужно и лечить больше некому"],
        },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.CryoDamageBonus, notes: ["В 99% случаев"] },
        { uid: AttributeUidEnum.AttackPercent, notes: ["В 1% случаев"] },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalRate },
        { uid: AttributeUidEnum.CriticalDamage, notes: ["Почти всегда"] },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalRate, notes: ["Приоритетно"] },
        { uid: AttributeUidEnum.CriticalDamage, notes: ["Приоритетно"] },
        { uid: AttributeUidEnum.AttackPercent },
        { uid: AttributeUidEnum.EnergyRecharge },
      ],
    },
  },
  character_uid: CharacterUidEnum.Escoffier,
  first_constellation_or_signature_weapon: "С1 лучше",
  reference_point: [
    ["Оружие", `${weapons[WeaponUidEnum.Deathmatch].name} R1 [${weapons[WeaponUidEnum.Deathmatch].quality}⭐]`],
    ["Атака", "2 100"],
    ["Восст. энергии", "110% - 115%"],
    ["Крит. шанс", "80%"],
    ["Крит. урон", "175%"],
    ["Артефакты", artifactSets[ArtifactSetUidEnum.GoldenTroupe].name],
  ],
  required_level: 90,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Максимальный приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Вторичный приоритет\n(9)" },
  ],
  weapons: [
    { uid: WeaponUidEnum.SymphonistOfScents, percent: 1.2991 },
    { uid: WeaponUidEnum.StaffOfHoma, percent: 1.2247 },
    { uid: WeaponUidEnum.LumidouceElegy, percent: 1.1820 },
    { uid: WeaponUidEnum.Deathmatch, refinement: 5, percent: 1.1568 },
    { uid: WeaponUidEnum.PrimordialJadeWingedSpear, percent: 1.1435 },
    { uid: WeaponUidEnum.CrimsonMoonsSemblance, percent: 1.1126 },
    { uid: WeaponUidEnum.StaffOfTheScarletSands, percent: 1.0994 },
    { uid: WeaponUidEnum.Deathmatch, refinement: 1, percent: 1.0637 },
    { uid: WeaponUidEnum.SkywardSpine, percent: 1.0356 },
    { uid: WeaponUidEnum.ProspectorsDrill, refinement: 5, percent: 1.0309 },
    { uid: WeaponUidEnum.LithicSpear, refinement: 5, percent: 1.0118 },
    { uid: WeaponUidEnum.BlackcliffPole, percent: 1 },
    { uid: WeaponUidEnum.BalladOfTheFjords, refinement: 5, percent: 0.9927 },
    { uid: WeaponUidEnum.BalladOfTheFjords, refinement: 1, percent: 0.9926 },
    { uid: WeaponUidEnum.ProspectorsDrill, refinement: 1, percent: 0.9819 },
    { uid: WeaponUidEnum.MissiveWindspear, percent: 0.9801 },
    { uid: WeaponUidEnum.KitainCrossSpear, refinement: 5, percent: 0.8818 },
    { uid: WeaponUidEnum.FavoniusLance, refinement: 5, percent: 0.8526 },
  ],
} as CharacterRecommendation;
