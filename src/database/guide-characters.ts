import { artifactSets } from "./artifact-sets";
import { ArtifactSetUidEnum } from "./enums/artifact-sets";
import { ArtifactTypeUidEnum } from "./enums/artifact-types";
import { AttributeUidEnum } from "./enums/attributes";
import { characters } from "./characters";
import { CharacterUidEnum } from "./enums/characters";
import { elements } from "./elements";
import { ElementUidEnum } from "./enums/elements";
import { TalentUidEnum } from "./enums/talents";
import { weapons } from "./weapons";
import { WeaponUidEnum } from "./enums/weapons";
import type { GuideCharacter, GuideCharacters } from "./types/guide-characters";

const guideArlecchino = {
  first_constellation_or_signature_weapon: "С1 и Сигна",
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "Высокий приоритет \n(10)",
    [TalentUidEnum.ElementalSkill]: "Ситуативно \n(6 | 8)",
    [TalentUidEnum.ElementalBurst]: "Ситуативно \n(6 | 8)",
  },
  suitable_weapons: {
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
  suitable_artifacts: {
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
          uid: AttributeUidEnum.MasteryOfElements,
          description: "100 - 150 МС для Пара или Таяния, в остальных случаях не нужно",
        },
        { uid: AttributeUidEnum.EnergyRestoration, description: "Специально не собирать" },
      ],
    },
  },
} as GuideCharacter;
const guideBennett = {
  required_level: 90,
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "По необходимости \n(6)",
    [TalentUidEnum.ElementalSkill]: "Вторичный приоритет \n(8)",
    [TalentUidEnum.ElementalBurst]: "Главный приоритет \n(10)",
  },
  suitable_weapons: [{ uid: WeaponUidEnum.SapwoodBlade }],
  suitable_artifacts: {
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
  // Важна С6
} as GuideCharacter;
const guideChevreuse = {
  required_level: 90,
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "По необходимости \n(6)",
    [TalentUidEnum.ElementalSkill]: "Главный приоритет \n(9)",
    [TalentUidEnum.ElementalBurst]: "Вторичный приоритет \n(9)",
  },
  suitable_weapons: [
    { uid: WeaponUidEnum.DialoguesOfTheDesertSages },
    { uid: WeaponUidEnum.FavoniusLance },
    { uid: WeaponUidEnum.Deathmatch },
    { uid: WeaponUidEnum.RightfulReward },
  ],
  suitable_artifacts: {
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
      [ArtifactTypeUidEnum.SandsOfEon]: [],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [],
      [ArtifactTypeUidEnum.CircletOfLogos]: [],
      additional: [],
    },
  },
} as GuideCharacter;
const guideEscoffier = {
  required_level: 90,
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "Игнорируем \n(1)",
    [TalentUidEnum.ElementalSkill]: "Максимальный приоритет \n(10)",
    [TalentUidEnum.ElementalBurst]: "Вторичный приоритет \n(9)",
  },
  suitable_weapons: [{ uid: WeaponUidEnum.StaffOfHoma }],
  suitable_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.GoldenTroupe, description: "Лучше" }],
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
} as GuideCharacter;
const guideFischl = {
  required_level: 90,
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "По необходимости \n(6)",
    [TalentUidEnum.ElementalSkill]: "Главный приоритет \n(10)",
    [TalentUidEnum.ElementalBurst]: "Вторичный приоритет \n(8)",
  },
  suitable_weapons: [{ uid: WeaponUidEnum.TheStringless }],
  suitable_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.GoldenTroupe }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.785 },
        { uid: AttributeUidEnum.MasteryOfElements, percent: 0.125 },
        { uid: AttributeUidEnum.EnergyRestoration, percent: 0.062 },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.ElectroDamageBonus, percent: 0.830 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.119 },
        { uid: AttributeUidEnum.MasteryOfElements, percent: 0.018 },
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
} as GuideCharacter;
const guideFurina = {
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "Игнорируем \n(1)",
    [TalentUidEnum.ElementalSkill]: "Высокий приоритет \n(10)",
    [TalentUidEnum.ElementalBurst]: "Высокий приоритет \n(10)",
  },
  suitable_weapons: {
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
  suitable_artifacts: {
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
  reference_point: [["Макс. HP", "33 000"], ["Восст. энергии", "170%"], ["Крит. шанс", "60%"], ["Крит. урон", "140%"]],
} as GuideCharacter;
const guideIansan = {
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "Игнорируем \n(1 - 6)",
    [TalentUidEnum.ElementalSkill]: "Игнорируем \n(1 - 6)",
    [TalentUidEnum.ElementalBurst]: "Высокий приоритет \n(10)",
  },
  suitable_weapons: [
    { uid: WeaponUidEnum.SkywardSpine },
    { uid: WeaponUidEnum.TamayurateiNoOhanashi },
    { uid: WeaponUidEnum.FavoniusLance },
  ],
  suitable_artifacts: {
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
} as GuideCharacter;
const guideKukiShinobu = {
  required_level: 90,
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "Игнорируем \n(1)",
    [TalentUidEnum.ElementalSkill]: "Максимальный приоритет \n(10)",
    [TalentUidEnum.ElementalBurst]: "Максимальный приоритет \n(10)",
  },
  suitable_weapons: [{ uid: WeaponUidEnum.XiphosMoonlight }],
  suitable_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.GildedDreams }, { uid: ArtifactSetUidEnum.FlowerOfParadiseLost }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.MasteryOfElements, percent: 0.894 },
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.073 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.016 },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.MasteryOfElements, percent: 0.810 },
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.114 },
        { uid: AttributeUidEnum.ElectroDamageBonus, percent: 0.044 },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.MasteryOfElements, percent: 0.807 },
        { uid: AttributeUidEnum.TreatmentBonus, percent: 0.071 },
        { uid: AttributeUidEnum.PercentageOfHP, percent: 0.056 },
      ],
      additional: [{ uid: AttributeUidEnum.MasteryOfElements, description: "Приоритетно" }],
    },
  },
  // Важна С2
} as GuideCharacter;
const guideLayla = {
  required_level: 80,
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "Игнорируем \n(1)",
    [TalentUidEnum.ElementalSkill]: "Главный приоритет \n(8)",
    [TalentUidEnum.ElementalBurst]: "Вторичный приоритет \n(7)",
  },
  suitable_weapons: [{ uid: WeaponUidEnum.FavoniusSword }],
  suitable_artifacts: {
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
} as GuideCharacter;
const guideNeuvillette = {
  first_constellation_or_signature_weapon: "Сигна > C1, Сигна > C2. Лучше Сигна и С1",
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "Высокий приоритет \n(10)",
    [TalentUidEnum.ElementalSkill]: "Ситуативно \n(6 | 8)",
    [TalentUidEnum.ElementalBurst]: "Ситуативно \n(6 | 8)",
  },
  suitable_weapons: [
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
  suitable_artifacts: {
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
} as GuideCharacter;
const guideSkirk = {
  required_level: 90,
  required_squad: `<span style="color:var(${elements[ElementUidEnum.Hydro].color_var})">${elements[ElementUidEnum.Hydro].name}</span> и <span style="color:var(${elements[ElementUidEnum.Cryo].color_var})">${elements[ElementUidEnum.Cryo].name}</span> персонажи,\nособенно <span style="color:var(${elements[characters[CharacterUidEnum.Furina].element_uid].color_var})">${characters[CharacterUidEnum.Furina].name}</span> и <span style="color:var(${elements[characters[CharacterUidEnum.Escoffier].element_uid].color_var})">${characters[CharacterUidEnum.Escoffier].name}</span>`,
  key_constellations: [1, 2, 5, 6],
  first_constellation_or_signature_weapon: "Сигна > C1,\nC2 > Сигна",
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "Игнорируем \n(1)",
    [TalentUidEnum.ElementalSkill]: "Максимальный приоритет \n(10)",
    [TalentUidEnum.ElementalBurst]: "Максимальный приоритет \n(10)",
  },
  suitable_weapons: [
    { uid: WeaponUidEnum.Azurelight, percent: 1.4256 },
    { uid: WeaponUidEnum.HaranGeppakuFutsu, percent: 1.2239 },
    { uid: WeaponUidEnum.PrimordialJadeCutter, percent: 1.2238 },
    { uid: WeaponUidEnum.CalamityOfEshu, postfix: "(щит)", percent: 1.1844 },
    { uid: WeaponUidEnum.MistsplitterReforged, percent: 1.1639 },
    { uid: WeaponUidEnum.SummitShaper, postfix: "(щит)", percent: 1.1500 },
    { uid: WeaponUidEnum.Absolution, percent: 1.1291 },
    { uid: WeaponUidEnum.UrakuMisugiri, percent: 1.1264 },
    { uid: WeaponUidEnum.LightOfFoliarIncision, percent: 1.1176 },
    { uid: WeaponUidEnum.SplendorOfTranquilWaters, percent: 1.1023 },
    { uid: WeaponUidEnum.TheBlackSword, percent: 1.0728 },
    { uid: WeaponUidEnum.FinaleOfTheDeep, percent: 1 },
    { uid: WeaponUidEnum.BlackcliffLongsword, percent: 0.9451 },
  ],
  suitable_artifacts: {
    sets: [
      {
        uid: ArtifactSetUidEnum.MarechausseeHunter,
        percent: 1,
        description: "Лучше, когда Скирк играет как мейн ДД. Работает только с Фуриной",
      },
      {
        uid: ArtifactSetUidEnum.FinaleOfTheDeepGalleries,
        percent: 0.9761,
        description: "Лучше, когда Скирк играет от Взрыва стихии",
      },
    ],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [{ uid: AttributeUidEnum.PercentageOfAttackPower }],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.CryoDamageBonus, description: "Лучше" },
        { uid: AttributeUidEnum.PercentageOfAttackPower },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalHitChance },
        { uid: AttributeUidEnum.CriticalDamage },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalHitChance },
        { uid: AttributeUidEnum.CriticalDamage },
        { uid: AttributeUidEnum.PercentageOfAttackPower },
      ],
    },
  },
  reference_point: {
    [`${artifactSets[ArtifactSetUidEnum.MarechausseeHunter].name}\n+\n${weapons[WeaponUidEnum.FinaleOfTheDeep].name}`]: [
      ["Макс. HP", "22 041"],
      ["Сила атаки", "2 136"],
      ["Защита", "946"],
      ["МС", "40"],
      ["Крит. шанс", "44.7%"],
      ["Крит. урон", "216.8%"],
      ["Восст. энергии", "111.0%"],
    ],
    [`${artifactSets[ArtifactSetUidEnum.FinaleOfTheDeepGalleries].name}\n+\n${weapons[WeaponUidEnum.CalamityOfEshu].name}`]: [
      ["Макс. HP", "22 041"],
      ["Сила атаки", "2 136"],
      ["Защита", "946"],
      ["МС", "40"],
      ["Крит. шанс", "69.2%"],
      ["Крит. урон", "167.8%"],
      ["Восст. энергии", "111.0%"],
    ],
  },
} as GuideCharacter;
const guideVaresa = {
  first_constellation_or_signature_weapon: "Однозначно Сигна",
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "Высокий приоритет \n(10)",
    [TalentUidEnum.ElementalSkill]: "Средний приоритет \n(8)",
    [TalentUidEnum.ElementalBurst]: "Высокий приоритет \n(10)",
  },
  suitable_weapons: [
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
  suitable_artifacts: {
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
} as GuideCharacter;
const guideXiangling = {
  required_level: 90,
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "По необходимости (6)",
    [TalentUidEnum.ElementalSkill]: "Вторичный приоритет (8)",
    [TalentUidEnum.ElementalBurst]: "Главный приоритет (10)",
  },
  suitable_weapons: [{ uid: WeaponUidEnum.EngulfingLightning }],
  suitable_artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.EmblemOfSeveredFate }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.EnergyRestoration, percent: 0.748 },
        { uid: AttributeUidEnum.PercentageOfAttackPower, percent: 0.171 },
        { uid: AttributeUidEnum.MasteryOfElements, percent: 0.055 },
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
} as GuideCharacter;
const guideXilonen = {
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "Игнорируем \n(1)",
    [TalentUidEnum.ElementalSkill]: "Высокий приоритет \n(10)",
    [TalentUidEnum.ElementalBurst]: "Ситуативно \n(8)",
  },
} as GuideCharacter;
const guideXingqiu = {
  required_level: 90,
  upgrading_talents: {
    [TalentUidEnum.NormalAttack]: "По необходимости (6)",
    [TalentUidEnum.ElementalSkill]: "Вторичный приоритет (10)",
    [TalentUidEnum.ElementalBurst]: "Главный приоритет (10)",
  },
  suitable_weapons: [{ uid: WeaponUidEnum.SacrificialSword }],
  suitable_artifacts: {
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
  [CharacterUidEnum.Neuvillette]: guideNeuvillette,
  [CharacterUidEnum.Skirk]: guideSkirk,
  [CharacterUidEnum.Varesa]: guideVaresa,
  [CharacterUidEnum.Xiangling]: guideXiangling,
  [CharacterUidEnum.Xilonen]: guideXilonen,
  [CharacterUidEnum.Xingqiu]: guideXingqiu,
} as GuideCharacters;
