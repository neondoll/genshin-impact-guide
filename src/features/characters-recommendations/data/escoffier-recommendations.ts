import type { CharacterRecommendations } from "@/features/characters-recommendations/types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";
import artifactSets from "../../artifact-sets/data";
import weapons from "@/database/weapons/data";

export default {
  artifacts: {
    sets: [
      {
        key: ArtifactSetIds.GoldenTroupe,
        is_better: true,
        notes: ["Значительно увеличит урон элементального навыка Эскофье, особенно когда она не на поле."],
      },
      {
        key: ArtifactSetIds.BlizzardStrayer,
        notes: [
          "Комплект увеличит Крио урон и шанс крит. попадания Эскофье.",
          "Поскольку Эскофье играет в отрядах с Крио и Гидро персонажами, она выполняет условие комплекта.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotIds.Sands]: [
        { key: StatKeys.AtkPercentage, notes: ["Личный урон важнее, чем ульта по откату"] },
        {
          key: StatKeys.EnergyRecharge,
          notes: ["В меньшинстве случаев, когда есть Фурина, лечение нужно и лечить больше некому"],
        },
      ],
      [ArtifactSlotIds.Goblet]: [
        { key: StatKeys.CryoDmgBonus, notes: ["В 99% случаев"] },
        { key: StatKeys.AtkPercentage, notes: ["В 1% случаев"] },
      ],
      [ArtifactSlotIds.Circlet]: [
        { key: StatKeys.CritRate },
        { key: StatKeys.CritDMG, notes: ["Почти всегда"] },
      ],
      additional: [
        { key: StatKeys.CritRate, notes: ["Приоритетно"] },
        { key: StatKeys.CritDMG, notes: ["Приоритетно"] },
        { key: StatKeys.AtkPercentage },
        { key: StatKeys.EnergyRecharge },
      ],
    },
  },
  character_key: CharacterIds.Escoffier,
  first_constellation_or_signature_weapon: "С1 лучше",
  reference_point: [
    ["Оружие", `${weapons[WeaponKeys.Deathmatch].name} R1 [${weapons[WeaponKeys.Deathmatch].rarity}⭐]`],
    ["Атака", "2 100"],
    ["Восст. энергии", "110% - 115%"],
    ["Крит. шанс", "80%"],
    ["Крит. урон", "175%"],
    ["Артефакты", artifactSets[ArtifactSetIds.GoldenTroupe].name],
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
