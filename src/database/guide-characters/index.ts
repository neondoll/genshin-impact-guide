import guideMavuika from "./guide-mavuika";
import guideSkirk from "./guide-skirk";
import { artifactSets } from "../artifact-sets";
import { ArtifactSetUidEnum } from "../enums/artifact-sets";
import { ArtifactTypeUidEnum } from "../enums/artifact-types";
import { AttributeUidEnum } from "../enums/attributes";
import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import { weapons } from "../weapons";
import { WeaponUidEnum } from "../enums/weapons";
import type { GuideCharacter, GuideCharacters } from "../types/guide-characters";

const guideArlecchino = {
  character_uid: CharacterUidEnum.Arlecchino,
  assembly_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.FragmentOfHarmonicWhimsy }, { uid: ArtifactSetUidEnum.GladiatorsFinale }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [{ uid: AttributeUidEnum.PercentageOfAttackPower }],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.PyroDamageBonus, description: "Лучше" },
        { uid: AttributeUidEnum.PercentageOfAttackPower },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalDamage },
        { uid: AttributeUidEnum.CriticalHitChance },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalHitChance, description: "Приоритетно" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Приоритетно" },
        { uid: AttributeUidEnum.PercentageOfAttackPower },
        {
          uid: AttributeUidEnum.ElementalMastery,
          description: "100 - 150 МС для Пара или Таяния, в остальных случаях не нужно",
        },
        { uid: AttributeUidEnum.EnergyRestoration, description: "Специально не собирать" },
      ],
    },
  },
  assembly_weapons: {
    "Гиперкери | Прожарка | отр. Шеврёз": [
      { uid: WeaponUidEnum.CrimsonMoonsSemblance, percent: 1.316 },
      { uid: WeaponUidEnum.PrimordialJadeWingedSpear, percent: 1.124 },
      { uid: WeaponUidEnum.StaffOfTheScarletSands, percent: 1.112 },
      { uid: WeaponUidEnum.LumidouceElegy, percent: 1.103 },
      { uid: WeaponUidEnum.Deathmatch, refinement: 5, percent: 1.087 },
      { uid: WeaponUidEnum.StaffOfHoma, percent: 1.085 },
      { uid: WeaponUidEnum.CalamityQueller, percent: 1.063 },
      { uid: WeaponUidEnum.Deathmatch, refinement: 1, percent: 1.032 },
      { uid: WeaponUidEnum.WhiteTassel, percent: 1 },
      { uid: WeaponUidEnum.BalladOfTheFjords, percent: 0.968 },
      { uid: WeaponUidEnum.SkywardSpine, percent: 0.948 },
      { uid: WeaponUidEnum.BlackcliffPole, percent: 0.899 },
      { uid: WeaponUidEnum.MissiveWindspear, percent: 0.875 },
    ],
    "Пар | Таяние": [
      { uid: WeaponUidEnum.CrimsonMoonsSemblance, percent: 1.309 },
      { uid: WeaponUidEnum.StaffOfTheScarletSands, percent: 1.156 },
      { uid: WeaponUidEnum.PrimordialJadeWingedSpear, percent: 1.114 },
      { uid: WeaponUidEnum.Deathmatch, refinement: 5, percent: 1.105 },
      { uid: WeaponUidEnum.LumidouceElegy, percent: 1.103 },
      { uid: WeaponUidEnum.BalladOfTheFjords, refinement: 5, percent: 1.098 },
      { uid: WeaponUidEnum.StaffOfHoma, percent: 1.086 },
      { uid: WeaponUidEnum.CalamityQueller, percent: 1.062 },
      { uid: WeaponUidEnum.VortexVanquisher, percent: 1.044 },
      { uid: WeaponUidEnum.LithicSpear, refinement: 5, percent: 1.043 },
      { uid: WeaponUidEnum.Deathmatch, refinement: 1, percent: 1.043 },
      { uid: WeaponUidEnum.BalladOfTheFjords, refinement: 1, percent: 1.023 },
      { uid: WeaponUidEnum.WhiteTassel, percent: 1 },
      { uid: WeaponUidEnum.MissiveWindspear, percent: 0.99 },
      { uid: WeaponUidEnum.DragonsBane, percent: 0.965 },
      { uid: WeaponUidEnum.LithicSpear, refinement: 1, percent: 0.965 },
      { uid: WeaponUidEnum.SkywardSpine, percent: 0.943 },
      { uid: WeaponUidEnum.BlackcliffPole, percent: 0.938 },
    ],
  },
  first_constellation_or_signature_weapon: "С1 и Сигна",
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Высокий приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Ситуативно\n(6 | 8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Ситуативно\n(6 | 8)" },
  ],
} as GuideCharacter;
const guideBennett = {
  character_uid: CharacterUidEnum.Bennett,
  assembly_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.NoblesseOblige }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.EnergyRestoration, percent: 0.703 },
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.187 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.089 },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.749 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.109 },
        { uid: AttributeUidEnum.PyroDamageBonus, percent: 0.105 },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.TreatmentBonus, percent: 0.543 },
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.224 },
        { uid: AttributeUidEnum.CriticalHitChance, percent: 0.111 },
      ],
      additional: [
        { uid: AttributeUidEnum.PercentageOfHP, description: "Приоритетно" },
        { uid: AttributeUidEnum.EnergyRestoration, description: "Приоритетно" },
      ],
    },
  },
  assembly_weapons: [{ uid: WeaponUidEnum.SapwoodBlade }],
  key_constellations: [6],
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "По необходимости\n(6)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Вторичный приоритет\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Главный приоритет\n(10)" },
  ],
  required_level: 90,
} as GuideCharacter;
const guideChevreuse = {
  character_uid: CharacterUidEnum.Chevreuse,
  assembly_artifacts: {
    sets: [
      { uid: ArtifactSetUidEnum.NoblesseOblige },
      {
        uid: ArtifactSetUidEnum.SongOfDaysPast,
        description: "Не рекомендуется, слишком нестабильна и требует овер хил",
      },
      {
        uid: ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity,
        description: `Если ${artifactSets[ArtifactSetUidEnum.NoblesseOblige].name} занята`,
      },
      {
        uid: ArtifactSetUidEnum.EmblemOfSeveredFate,
        description: `Если ${artifactSets[ArtifactSetUidEnum.NoblesseOblige].name} и ${artifactSets[ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity].name} заняты`,
      },
    ],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [{ uid: AttributeUidEnum.PercentageOfHP }],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [{ uid: AttributeUidEnum.PercentageOfHP }],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.PercentageOfHP },
        {
          uid: AttributeUidEnum.CriticalHitChance,
          description: `Если в руках ${weapons[WeaponUidEnum.FavoniusLance].name}`,
        },
      ],
      additional: [{ uid: AttributeUidEnum.PercentageOfHP }, { uid: AttributeUidEnum.EnergyRestoration }],
    },
  },
  assembly_weapons: [
    { uid: WeaponUidEnum.RightfulReward },
    { uid: WeaponUidEnum.DialoguesOfTheDesertSages },
    { uid: WeaponUidEnum.FavoniusLance },
  ],
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "По необходимости\n(6)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Главный приоритет\n(9)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Вторичный приоритет\n(8)" },
  ],
  required_level: 90,
} as GuideCharacter;
const guideEscoffier = {
  character_uid: CharacterUidEnum.Escoffier,
  assembly_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.GoldenTroupe, description: "Лучше" }, { uid: ArtifactSetUidEnum.BlizzardStrayer }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Личный урон важнее, чем ульта по откату" },
        {
          uid: AttributeUidEnum.EnergyRestoration,
          description: "В меньшинстве случаев, когда есть Фурина, лечение нужно и лечить больше некому",
        },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.CryoDamageBonus, description: "В 99% случаев" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "В 1% случаев" },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalHitChance },
        { uid: AttributeUidEnum.CriticalDamage, description: "Почти всегда" },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalHitChance, description: "Приоритетно" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Приоритетно" },
        { uid: AttributeUidEnum.PercentageOfAttackPower },
        { uid: AttributeUidEnum.EnergyRestoration },
      ],
    },
  },
  assembly_weapons: [
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
  first_constellation_or_signature_weapon: "С1 лучше",
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Максимальный приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Вторичный приоритет\n(9)" },
  ],
  reference_point: [
    ["Оружие", `${weapons[WeaponUidEnum.Deathmatch].name} R1 [${weapons[WeaponUidEnum.Deathmatch].quality}⭐]`],
    ["Атака", "2 100"],
    ["Восст. энергии", "110% - 115%"],
    ["Крит. шанс", "80%"],
    ["Крит. урон", "175%"],
    ["Артефакты", artifactSets[ArtifactSetUidEnum.GoldenTroupe].name],
  ],
  required_level: 90,
} as GuideCharacter;
const guideFischl = {
  character_uid: CharacterUidEnum.Fischl,
  assembly_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.GoldenTroupe }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.785 },
        { uid: AttributeUidEnum.ElementalMastery, percent: 0.125 },
        { uid: AttributeUidEnum.EnergyRestoration, percent: 0.062 },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.ElectroDamageBonus, percent: 0.830 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.119 },
        { uid: AttributeUidEnum.ElementalMastery, percent: 0.018 },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalHitChance, percent: 0.669 },
        { uid: AttributeUidEnum.CriticalDamage, percent: 0.266 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.034 },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalHitChance, description: "Приоритетно" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Приоритетно" },
        { uid: AttributeUidEnum.PercentageOfAttackPower },
      ],
    },
  },
  assembly_weapons: [{ uid: WeaponUidEnum.TheStringless }],
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "По необходимости\n(6)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Главный приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Вторичный приоритет\n(8)" },
  ],
  required_level: 90,
} as GuideCharacter;
const guideFurina = {
  character_uid: CharacterUidEnum.Furina,
  assembly_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.GoldenTroupe }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.EnergyRestoration },
        { uid: AttributeUidEnum.PercentageOfHP },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.HydroDamageBonus },
        { uid: AttributeUidEnum.PercentageOfHP, description: "Лучше в подавляющем числе ситуаций" },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalHitChance },
        { uid: AttributeUidEnum.CriticalDamage },
      ],
      additional: [
        {
          uid: AttributeUidEnum.EnergyRestoration,
          description: "В отрядах без доп. подкачки - 200% - 220% ВЭ\nВ отрядах с доп. подкачкой - 160% - 180% ВЭ\nВ отрядах с Е Лань или Син Цю - 130% - 140% ВЭ\nВ отрядах с 3 Гидро и более - 100% ВЭ",
        },
        { uid: AttributeUidEnum.PercentageOfHP },
        { uid: AttributeUidEnum.CriticalHitChance },
        { uid: AttributeUidEnum.CriticalDamage },
      ],
    },
  },
  assembly_weapons: {
    "Без реакций - 120% ВЭ+": [
      { uid: WeaponUidEnum.SplendorOfTranquilWaters, percent: 1.3648 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(с гео)", percent: 1.3306 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(без гео)", percent: 1.2265 },
      { uid: WeaponUidEnum.PrimordialJadeCutter, percent: 1.2139 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(работает)", percent: 1.1795 },
      { uid: WeaponUidEnum.LightOfFoliarIncision, percent: 1.1536 },
      { uid: WeaponUidEnum.KeyOfKhajNisut, percent: 1.1298 },
      { uid: WeaponUidEnum.WolfFang, refinement: 5, percent: 1.1268 },
      { uid: WeaponUidEnum.FesteringDesire, percent: 1.0924 },
      { uid: WeaponUidEnum.WolfFang, refinement: 1, percent: 1.0648 },
      { uid: WeaponUidEnum.FleuveCendreFerryman, refinement: 5, percent: 1 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(не работает)", percent: 0.9745 },
      { uid: WeaponUidEnum.TheDockhandsAssistant, refinement: 5, percent: 0.9637 },
      { uid: WeaponUidEnum.FavoniusSword, refinement: 5, percent: 0.8936 },
    ],
    "Без реакций - 170% ВЭ+": [
      { uid: WeaponUidEnum.SplendorOfTranquilWaters, percent: 1.1296 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(с гео)", percent: 1.0842 },
      { uid: WeaponUidEnum.FleuveCendreFerryman, refinement: 5, percent: 1 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(без гео)", percent: 0.9999 },
      { uid: WeaponUidEnum.PrimordialJadeCutter, percent: 0.9964 },
      { uid: WeaponUidEnum.FesteringDesire, percent: 0.9878 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(работает)", percent: 0.9627 },
      { uid: WeaponUidEnum.KeyOfKhajNisut, percent: 0.9578 },
      { uid: WeaponUidEnum.LightOfFoliarIncision, percent: 0.9402 },
      { uid: WeaponUidEnum.WolfFang, refinement: 5, percent: 0.9153 },
      { uid: WeaponUidEnum.FavoniusSword, refinement: 5, percent: 0.8936 },
      { uid: WeaponUidEnum.WolfFang, refinement: 1, percent: 0.8648 },
      { uid: WeaponUidEnum.TheDockhandsAssistant, refinement: 5, percent: 0.8080 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(не работает)", percent: 0.7894 },
    ],
    "Без реакций - 220% ВЭ+": [
      { uid: WeaponUidEnum.SplendorOfTranquilWaters, percent: 1.0893 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(с гео)", percent: 1.0421 },
      { uid: WeaponUidEnum.FleuveCendreFerryman, refinement: 5, percent: 1 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(без гео)", percent: 0.9604 },
      { uid: WeaponUidEnum.PrimordialJadeCutter, percent: 0.9597 },
      { uid: WeaponUidEnum.FesteringDesire, percent: 0.9498 },
      { uid: WeaponUidEnum.KeyOfKhajNisut, percent: 0.9254 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(работает)", percent: 0.9232 },
      { uid: WeaponUidEnum.LightOfFoliarIncision, percent: 0.9048 },
      { uid: WeaponUidEnum.WolfFang, refinement: 5, percent: 0.8798 },
      { uid: WeaponUidEnum.FavoniusSword, refinement: 5, percent: 0.8725 },
      { uid: WeaponUidEnum.WolfFang, refinement: 1, percent: 0.8314 },
      { uid: WeaponUidEnum.TheDockhandsAssistant, refinement: 5, percent: 0.7762 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(не работает)", percent: 0.7608 },
    ],
    "Фурина вейпит - 180% ВЭ+": [
      { uid: WeaponUidEnum.SplendorOfTranquilWaters, percent: 1.2547 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(с гео)", percent: 1.1969 },
      { uid: WeaponUidEnum.KeyOfKhajNisut, percent: 1.1464 },
      { uid: WeaponUidEnum.PrimordialJadeCutter, percent: 1.1087 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(без гео)", percent: 1.1043 },
      { uid: WeaponUidEnum.FesteringDesire, percent: 1.0906 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(работает)", percent: 1.0652 },
      { uid: WeaponUidEnum.LightOfFoliarIncision, percent: 1.0406 },
      { uid: WeaponUidEnum.WolfFang, refinement: 5, percent: 1.0101 },
      { uid: WeaponUidEnum.FleuveCendreFerryman, refinement: 5, percent: 1 },
      { uid: WeaponUidEnum.FavoniusSword, refinement: 5, percent: 0.9592 },
      { uid: WeaponUidEnum.WolfFang, refinement: 1, percent: 0.9552 },
      { uid: WeaponUidEnum.TheDockhandsAssistant, refinement: 5, percent: 0.9425 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(не работает)", percent: 0.8743 },
    ],
  },
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Высокий приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Высокий приоритет\n(10)" },
  ],
  reference_point: [["Макс. HP", "33 000"], ["Восст. энергии", "170%"], ["Крит. шанс", "60%"], ["Крит. урон", "140%"]],
} as GuideCharacter;
const guideIansan = {
  character_uid: CharacterUidEnum.Iansan,
  assembly_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.PercentageOfAttackPower },
        { uid: AttributeUidEnum.EnergyRestoration },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [{ uid: AttributeUidEnum.PercentageOfAttackPower }],
      [ArtifactTypeUidEnum.CircletOfLogos]: [{ uid: AttributeUidEnum.PercentageOfAttackPower }],
      additional: [
        { uid: AttributeUidEnum.EnergyRestoration, description: "Приоритетно. 160% - 200%" },
        {
          uid: AttributeUidEnum.PercentageOfAttackPower,
          description: "2556 Силы атаки для 10 Ур. Ульты \n3000 Силы атаки для 13 Ур. Ульты",
        },
      ],
    },
  },
  assembly_weapons: [
    { uid: WeaponUidEnum.SkywardSpine },
    { uid: WeaponUidEnum.TamayurateiNoOhanashi },
    { uid: WeaponUidEnum.FavoniusLance },
  ],
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1 - 6)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Игнорируем\n(1 - 6)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Высокий приоритет\n(10)" },
  ],
} as GuideCharacter;
const guideKukiShinobu = {
  character_uid: CharacterUidEnum.KukiShinobu,
  assembly_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.GildedDreams }, { uid: ArtifactSetUidEnum.FlowerOfParadiseLost }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.ElementalMastery, percent: 0.894 },
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.073 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.016 },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.ElementalMastery, percent: 0.810 },
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.114 },
        { uid: AttributeUidEnum.ElectroDamageBonus, percent: 0.044 },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.ElementalMastery, percent: 0.807 },
        { uid: AttributeUidEnum.TreatmentBonus, percent: 0.071 },
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.056 },
      ],
      additional: [{ uid: AttributeUidEnum.ElementalMastery, description: "Приоритетно" }],
    },
  },
  assembly_weapons: [{ uid: WeaponUidEnum.XiphosMoonlight }],
  key_constellations: [2],
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Максимальный приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Максимальный приоритет\n(10)" },
  ],
  required_level: 90,
} as GuideCharacter;
const guideLayla = {
  character_uid: CharacterUidEnum.Layla,
  assembly_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.TenacityOfTheMillelith }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.907 },
        { uid: AttributeUidEnum.EnergyRestoration, percent: 0.051 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.025 },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.902 },
        { uid: AttributeUidEnum.CryoDamageBonus, percent: 0.058 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.015 },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.860 },
        { uid: AttributeUidEnum.CriticalHitChance, percent: 0.080 },
        { uid: AttributeUidEnum.CriticalDamage, percent: 0.035 },
      ],
      additional: [{ uid: AttributeUidEnum.PercentageOfHP, description: "Приоритетно" }],
    },
  },
  assembly_weapons: [{ uid: WeaponUidEnum.FavoniusSword }],
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Главный приоритет\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Вторичный приоритет\n(7)" },
  ],
  required_level: 80,
} as GuideCharacter;
const guideNeuvillette = {
  character_uid: CharacterUidEnum.Neuvillette,
  assembly_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.MarechausseeHunter }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [{ uid: AttributeUidEnum.PercentageOfHP }],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.PercentageOfHP, description: "Если в команде Фурина" },
        { uid: AttributeUidEnum.HydroDamageBonus },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalHitChance },
        { uid: AttributeUidEnum.CriticalDamage, description: "Чаще всего" },
        { uid: AttributeUidEnum.PercentageOfHP, description: "Иногда, особенно с Сигной" },
      ],
      additional: [
        { uid: AttributeUidEnum.PercentageOfHP },
        { uid: AttributeUidEnum.CriticalHitChance, description: "Стремимся к 64% Крит шанса" },
        { uid: AttributeUidEnum.CriticalDamage },
        { uid: AttributeUidEnum.EnergyRestoration, description: "Специально не охотиться" },
      ],
    },
  },
  assembly_weapons: [
    { uid: WeaponUidEnum.TomeOfTheEternalFlow, percent: 1 },
    { uid: WeaponUidEnum.SacrificialJade, refinement: 5, percent: 0.998 },
    { uid: WeaponUidEnum.SurfsUp, percent: 0.917 },
    { uid: WeaponUidEnum.SacrificialJade, refinement: 1, percent: 0.914 },
    { uid: WeaponUidEnum.AshGravenDrinkingHorn, refinement: 5, percent: 0.874 },
    { uid: WeaponUidEnum.LostPrayerToTheSacredWinds, percent: 0.847 },
    { uid: WeaponUidEnum.CashflowSupervision, percent: 0.831 },
    { uid: WeaponUidEnum.AshGravenDrinkingHorn, refinement: 1, percent: 0.808 },
    { uid: WeaponUidEnum.KagurasVerity, percent: 0.807 },
    { uid: WeaponUidEnum.TheWidsith, refinement: 5, percent: 0.805 },
    { uid: WeaponUidEnum.JadefallsSplendor, percent: 0.796 },
    { uid: WeaponUidEnum.TheWidsith, refinement: 1, percent: 0.791 },
    { uid: WeaponUidEnum.EverlastingMoonglow, percent: 0.765 },
    { uid: WeaponUidEnum.TulaytullahsRemembrance, percent: 0.752 },
    { uid: WeaponUidEnum.PrototypeAmber, percent: 0.745 },
    { uid: WeaponUidEnum.RingOfYaxche, percent: 0.745 },
  ],
  first_constellation_or_signature_weapon: "Сигна > C1, Сигна > C2. Лучше Сигна и С1",
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Высокий приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Ситуативно\n(6 | 8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Ситуативно\n(6 | 8)" },
  ],
} as GuideCharacter;
const guideVaresa = {
  character_uid: CharacterUidEnum.Varesa,
  assembly_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.LongNightsOath }, { uid: ArtifactSetUidEnum.ObsidianCodex }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [{ uid: AttributeUidEnum.PercentageOfAttackPower }],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.ElectroDamageBonus, description: "Лучше с Цаплей всегда" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Лучше с Фуриной или в сете на планжи" },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalHitChance },
        { uid: AttributeUidEnum.CriticalDamage },
      ],
      additional: [
        { uid: AttributeUidEnum.PercentageOfAttackPower },
        { uid: AttributeUidEnum.CriticalHitChance },
        { uid: AttributeUidEnum.CriticalDamage },
        { uid: AttributeUidEnum.EnergyRestoration, description: "115% - 135% ВЭ для Ульты" },
      ],
    },
  },
  assembly_weapons: [
    { uid: WeaponUidEnum.VividNotions, percent: 1.28 },
    { uid: WeaponUidEnum.LostPrayerToTheSacredWinds, percent: 1.06 },
    { uid: WeaponUidEnum.KagurasVerity, percent: 1.05 },
    { uid: WeaponUidEnum.TomeOfTheEternalFlow, percent: 1.04 },
    { uid: WeaponUidEnum.CashflowSupervision, percent: 1.04 },
    { uid: WeaponUidEnum.SurfsUp, percent: 1.03 },
    { uid: WeaponUidEnum.TheWidsith, refinement: 5, percent: 1 },
    { uid: WeaponUidEnum.SacrificialJade, refinement: 5, percent: 0.92 },
    { uid: WeaponUidEnum.FlowingPurity, refinement: 5, percent: 0.92 },
  ],
  first_constellation_or_signature_weapon: "Однозначно Сигна",
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Высокий приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Средний приоритет\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Высокий приоритет\n(10)" },
  ],
} as GuideCharacter;
const guideXiangling = {
  character_uid: CharacterUidEnum.Xiangling,
  assembly_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.EmblemOfSeveredFate }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.EnergyRestoration, percent: 0.748 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.171 },
        { uid: AttributeUidEnum.ElementalMastery, percent: 0.055 },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.PyroDamageBonus, percent: 0.841 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.118 },
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.013 },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalHitChance, percent: 0.642 },
        { uid: AttributeUidEnum.CriticalDamage, percent: 0.291 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.042 },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalHitChance, description: "Приоритетно" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Приоритетно" },
        { uid: AttributeUidEnum.EnergyRestoration },
      ],
    },
  },
  assembly_weapons: [{ uid: WeaponUidEnum.EngulfingLightning }],
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "По необходимости\n(6)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Вторичный приоритет\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Главный приоритет\n(10)" },
  ],
  required_level: 90,
} as GuideCharacter;
const guideXilonen = {
  character_uid: CharacterUidEnum.Xilonen,
  assembly_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.PercentageOfProtection },
        { uid: AttributeUidEnum.EnergyRestoration },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [{ uid: AttributeUidEnum.PercentageOfProtection }],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.PercentageOfProtection },
        { uid: AttributeUidEnum.CriticalHitChance },
        { uid: AttributeUidEnum.TreatmentBonus },
      ],
      additional: [
        { uid: AttributeUidEnum.PercentageOfProtection },
        { uid: AttributeUidEnum.EnergyRestoration, description: "~160% ВЭ для стабильной ульты" },
      ],
    },
  },
  assembly_weapons: [{ uid: WeaponUidEnum.PeakPatrolSong }, { uid: WeaponUidEnum.FavoniusSword }],
  first_constellation_or_signature_weapon: "Сигна > С1, но С2 > Сигна",
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Главный приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Ситуативно\n(8)" },
  ],
} as GuideCharacter;
const guideXingqiu = {
  character_uid: CharacterUidEnum.Xingqiu,
  assembly_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.EmblemOfSeveredFate }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.525 },
        { uid: AttributeUidEnum.EnergyRestoration, percent: 0.410 },
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.030 },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.HydroDamageBonus, percent: 0.844 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.108 },
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.025 },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalHitChance, percent: 0.650 },
        { uid: AttributeUidEnum.CriticalDamage, percent: 0.258 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.055 },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalHitChance, description: "Приоритетно" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Приоритетно" },
        { uid: AttributeUidEnum.PercentageOfAttackPower },
      ],
    },
  },
  assembly_weapons: [{ uid: WeaponUidEnum.SacrificialSword }],
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "По необходимости\n(6)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Вторичный приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Главный приоритет\n(10)" },
  ],
  required_level: 90,
} as GuideCharacter;

export const guideCharacters = {
  [CharacterUidEnum.Arlecchino]: guideArlecchino,
  [CharacterUidEnum.Bennett]: guideBennett,
  [CharacterUidEnum.Chevreuse]: guideChevreuse,
  [CharacterUidEnum.Escoffier]: guideEscoffier,
  [CharacterUidEnum.Fischl]: guideFischl,
  [CharacterUidEnum.Furina]: guideFurina,
  [CharacterUidEnum.Iansan]: guideIansan,
  [CharacterUidEnum.KukiShinobu]: guideKukiShinobu,
  [CharacterUidEnum.Layla]: guideLayla,
  [CharacterUidEnum.Mavuika]: guideMavuika,
  [CharacterUidEnum.Neuvillette]: guideNeuvillette,
  [CharacterUidEnum.Skirk]: guideSkirk,
  [CharacterUidEnum.Varesa]: guideVaresa,
  [CharacterUidEnum.Xiangling]: guideXiangling,
  [CharacterUidEnum.Xilonen]: guideXilonen,
  [CharacterUidEnum.Xingqiu]: guideXingqiu,
} as GuideCharacters;
