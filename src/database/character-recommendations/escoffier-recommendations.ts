import artifactSets from "../artifact-sets";
import weapons from "../weapons";
import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StAtkeys } from "../enums/stat";
import { TalentKeys } from "../enums/talent";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [
      {
        key: ArtifactSetKeys.GoldenTroupe,
        is_better: true,
        notes: ["Значительно увеличит урон элементального навыка Эскофье, особенно когда она не на поле."],
      },
      {
        key: ArtifactSetKeys.BlizzardStrayer,
        notes: [
          "Комплект увеличит Крио урон и шанс крит. попадания Эскофье.",
          "Поскольку Эскофье играет в отрядах с Крио и Гидро персонажами, она выполняет условие комплекта.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotKeys.Sands]: [
        { key: StAtkeys.AtkPercentage, notes: ["Личный урон важнее, чем ульта по откату"] },
        {
          key: StAtkeys.EnergyRecharge,
          notes: ["В меньшинстве случаев, когда есть Фурина, лечение нужно и лечить больше некому"],
        },
      ],
      [ArtifactSlotKeys.Goblet]: [
        { key: StAtkeys.CryoDmgBonus, notes: ["В 99% случаев"] },
        { key: StAtkeys.AtkPercentage, notes: ["В 1% случаев"] },
      ],
      [ArtifactSlotKeys.Circlet]: [
        { key: StAtkeys.CritRate },
        { key: StAtkeys.CritDMG, notes: ["Почти всегда"] },
      ],
      additional: [
        { key: StAtkeys.CritRate, notes: ["Приоритетно"] },
        { key: StAtkeys.CritDMG, notes: ["Приоритетно"] },
        { key: StAtkeys.AtkPercentage },
        { key: StAtkeys.EnergyRecharge },
      ],
    },
  },
  character_key: CharacterKeys.Escoffier,
  first_constellation_or_signature_weapon: "С1 лучше",
  reference_point: [
    ["Оружие", `${weapons[WeaponKeys.Deathmatch].name} R1 [${weapons[WeaponKeys.Deathmatch].rarity}⭐]`],
    ["Атака", "2 100"],
    ["Восст. энергии", "110% - 115%"],
    ["Крит. шанс", "80%"],
    ["Крит. урон", "175%"],
    ["Артефакты", artifactSets[ArtifactSetKeys.GoldenTroupe].name],
  ],
  required_level: 90,
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
    { key: TalentKeys.ElementalSkill, priority: "В первую очередь\n(10)" },
    { key: TalentKeys.ElementalBurst, priority: "Во вторую очередь\n(9)" },
  ],
  weapons: [
    { key: WeaponKeys.SymphonistOfScents, percent: 1.2991 },
    { key: WeaponKeys.StaffOfHoma, percent: 1.2247 },
    { key: WeaponKeys.LumidouceElegy, percent: 1.1820 },
    { key: WeaponKeys.Deathmatch, refinement: 5, percent: 1.1568 },
    { key: WeaponKeys.PrimordialJadeWingedSpear, percent: 1.1435 },
    { key: WeaponKeys.CrimsonMoonsSemblance, percent: 1.1126 },
    { key: WeaponKeys.StaffOfTheScarletSands, percent: 1.0994 },
    { key: WeaponKeys.Deathmatch, refinement: 1, percent: 1.0637 },
    { key: WeaponKeys.SkywardSpine, percent: 1.0356 },
    { key: WeaponKeys.ProspectorsDrill, refinement: 5, percent: 1.0309 },
    { key: WeaponKeys.LithicSpear, refinement: 5, percent: 1.0118 },
    { key: WeaponKeys.BlackcliffPole, percent: 1 },
    { key: WeaponKeys.BalladOfTheFjords, refinement: 5, percent: 0.9927 },
    { key: WeaponKeys.BalladOfTheFjords, refinement: 1, percent: 0.9926 },
    { key: WeaponKeys.ProspectorsDrill, refinement: 1, percent: 0.9819 },
    { key: WeaponKeys.MissiveWindspear, percent: 0.9801 },
    { key: WeaponKeys.KitainCrossSpear, refinement: 5, percent: 0.8818 },
    { key: WeaponKeys.FavoniusLance, refinement: 5, percent: 0.8526 },
  ],
} as CharacterRecommendations;
