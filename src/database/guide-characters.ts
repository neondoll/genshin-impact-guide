import { ArtifactTypeUidEnum } from "./artifact-types";
import { type ArtifactSetUid, ArtifactSetUidEnum } from "./artifact-sets";
import { type AttributeUid, AttributeUidEnum } from "./attributes";
import { type CharacterUid, CharacterUidEnum } from "./characters";
import { type TalentUid, TalentUidEnum } from "./talents";
import { type WeaponUid, WeaponUidEnum } from "./weapons";

type GuideCharacter = {
  level?: 80 | 90;
  weapons?: GuideCharacterWeapons | Record<string, GuideCharacterWeapons>;
  artifacts?: {
    sets: { uid: ArtifactSetUid; description?: string }[];
    attributes: Record<typeof ArtifactTypeUidEnum["SandsOfEon" | "GobletOfEonothem" | "CircletOfLogos"] | "additional", {
      uid: AttributeUid;
      description?: string;
    }[]>;
  };
  talents?: Record<TalentUid, string>;
};
type GuideCharacters = Record<CharacterUid, GuideCharacter>;
type GuideCharacterWeapon = { uid: WeaponUid; refinement?: 1 | 5; percent?: number };

export type GuideCharacterWeapons = GuideCharacterWeapon[];

const guideArlecchino = {
  weapons: {
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
  artifacts: {
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
  talents: {
    [TalentUidEnum.NormalAttack]: "Высокий приоритет \n(10)",
    [TalentUidEnum.ElementalSkill]: "Ситуативно \n(6 / 8)",
    [TalentUidEnum.ElementalBurst]: "Ситуативно \n(6 / 8)",
  },
} as unknown as GuideCharacter;
const guideBennett = {
  level: 90,
  weapons: [{ uid: WeaponUidEnum.SapwoodBlade }],
  artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.NoblesseOblige }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.EnergyRestoration, description: "Коэффициент выбора: \n70,3%" },
        { uid: AttributeUidEnum.PercentageOfHP, description: "Коэффициент выбора: \n18,7%" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Коэффициент выбора: \n8,9%" },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.PercentageOfHP, description: "Коэффициент выбора: \n74,9%" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Коэффициент выбора: \n10,9%" },
        { uid: AttributeUidEnum.PyroDamageBonus, description: "Коэффициент выбора: \n10,5%" },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.TreatmentBonus, description: "Коэффициент выбора: \n54,3%" },
        { uid: AttributeUidEnum.PercentageOfHP, description: "Коэффициент выбора: \n22,4%" },
        { uid: AttributeUidEnum.CriticalHitChance, description: "Коэффициент выбора: \n11,1%" },
      ],
      additional: [
        { uid: AttributeUidEnum.PercentageOfHP, description: "Приоритетно" },
        { uid: AttributeUidEnum.EnergyRestoration, description: "Приоритетно" },
      ],
    },
  },
  // Важна С6
  talents: {
    [TalentUidEnum.NormalAttack]: "По необходимости \n(6)",
    [TalentUidEnum.ElementalSkill]: "Вторичный приоритет \n(8)",
    [TalentUidEnum.ElementalBurst]: "Главный приоритет \n(10)",
  },
} as GuideCharacter;
const guideChevreuse = {
  level: 90,
  weapons: [{ uid: WeaponUidEnum.Deathmatch }],
  talents: {
    [TalentUidEnum.NormalAttack]: "По необходимости \n(6)",
    [TalentUidEnum.ElementalSkill]: "Главный приоритет \n(9)",
    [TalentUidEnum.ElementalBurst]: "Вторичный приоритет \n(9)",
  },
} as GuideCharacter;
const guideEscoffier = {
  level: 90,
  weapons: [{ uid: WeaponUidEnum.StaffOfHoma }],
  artifacts: {
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
  talents: {
    [TalentUidEnum.NormalAttack]: "Игнорируем \n(1)",
    [TalentUidEnum.ElementalSkill]: "Максимальный приоритет \n(10)",
    [TalentUidEnum.ElementalBurst]: "Вторичный приоритет \n(9)",
  },
} as GuideCharacter;
const guideFischl = {
  level: 90,
  weapons: [{ uid: WeaponUidEnum.TheStringless }],
  artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.GoldenTroupe }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Коэффициент выбора: \n78,5%" },
        { uid: AttributeUidEnum.MasteryOfElements, description: "Коэффициент выбора: \n12,5%" },
        { uid: AttributeUidEnum.EnergyRestoration, description: "Коэффициент выбора: \n6,2%" },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.ElectroDamageBonus, description: "Коэффициент выбора: \n83,0%" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Коэффициент выбора: \n11,9%" },
        { uid: AttributeUidEnum.MasteryOfElements, description: "Коэффициент выбора: \n1,8%" },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalHitChance, description: "Коэффициент выбора: \n66,9%" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Коэффициент выбора: \n26,6%" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Коэффициент выбора: \n3,4%" },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalHitChance, description: "Приоритетно" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Приоритетно" },
        { uid: AttributeUidEnum.PercentageOfAttackPower },
      ],
    },
  },
  talents: {
    [TalentUidEnum.NormalAttack]: "По необходимости \n(6)",
    [TalentUidEnum.ElementalSkill]: "Главный приоритет \n(10)",
    [TalentUidEnum.ElementalBurst]: "Вторичный приоритет \n(8)",
  },
} as GuideCharacter;
const guideKukiShinobu = {
  level: 90,
  weapons: [{ uid: WeaponUidEnum.XiphosMoonlight }],
  artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.GildedDreams }, { uid: ArtifactSetUidEnum.FlowerOfParadiseLost }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.MasteryOfElements, description: "Коэффициент выбора: \n89,4%" },
        { uid: AttributeUidEnum.PercentageOfHP, description: "Коэффициент выбора: \n7,3%" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Коэффициент выбора: \n1,6%" },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.MasteryOfElements, description: "Коэффициент выбора: \n81,0%" },
        { uid: AttributeUidEnum.PercentageOfHP, description: "Коэффициент выбора: \n11,4%" },
        { uid: AttributeUidEnum.ElectroDamageBonus, description: "Коэффициент выбора: \n4,4%" },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.MasteryOfElements, description: "Коэффициент выбора: \n80,7%" },
        { uid: AttributeUidEnum.TreatmentBonus, description: "Коэффициент выбора: \n7,1%" },
        { uid: AttributeUidEnum.PercentageOfHP, description: "Коэффициент выбора: \n5,6%" },
      ],
      additional: [{ uid: AttributeUidEnum.MasteryOfElements, description: "Приоритетно" }],
    },
  },
  // Важна С2
  talents: {
    [TalentUidEnum.NormalAttack]: "Игнорируем \n(1)",
    [TalentUidEnum.ElementalSkill]: "Максимальный приоритет \n(10)",
    [TalentUidEnum.ElementalBurst]: "Максимальный приоритет \n(10)",
  },
} as GuideCharacter;
const guideLayla = {
  level: 80,
  weapons: [{ uid: WeaponUidEnum.FavoniusSword }],
  artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.TenacityOfTheMillelith }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.PercentageOfHP, description: "Коэффициент выбора: \n90,7%" },
        { uid: AttributeUidEnum.EnergyRestoration, description: "Коэффициент выбора: \n5,1%" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Коэффициент выбора: \n2,5%" },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.PercentageOfHP, description: "Коэффициент выбора: \n90,2%" },
        { uid: AttributeUidEnum.CryoDamageBonus, description: "Коэффициент выбора: \n5,8%" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Коэффициент выбора: \n1,5%" },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.PercentageOfHP, description: "Коэффициент выбора: \n86,0%" },
        { uid: AttributeUidEnum.CriticalHitChance, description: "Коэффициент выбора: \n8,0%" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Коэффициент выбора: \n3,5%" },
      ],
      additional: [{ uid: AttributeUidEnum.PercentageOfHP, description: "Приоритетно" }],
    },
  },
  talents: {
    [TalentUidEnum.NormalAttack]: "Игнорируем \n(1)",
    [TalentUidEnum.ElementalSkill]: "Главный приоритет \n(8)",
    [TalentUidEnum.ElementalBurst]: "Вторичный приоритет \n(7)",
  },
} as GuideCharacter;
const guideSkirk = {
  level: 90,
  weapons: [{ uid: WeaponUidEnum.Azurelight }],
  artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.FinaleOfTheDeepGalleries }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [],
      [ArtifactTypeUidEnum.CircletOfLogos]: [],
      additional: [],
    },
  },
  talents: {
    [TalentUidEnum.NormalAttack]: "Игнорируем \n(1)",
    [TalentUidEnum.ElementalSkill]: "Максимальный приоритет \n(10)",
    [TalentUidEnum.ElementalBurst]: "Максимальный приоритет \n(10)",
  },
} as GuideCharacter;
const guideXiangling = {
  level: 90,
  weapons: [{ uid: WeaponUidEnum.EngulfingLightning }],
  artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.EmblemOfSeveredFate }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.EnergyRestoration, description: "Коэффициент выбора: \n74,8%" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Коэффициент выбора: \n17,1%" },
        { uid: AttributeUidEnum.MasteryOfElements, description: "Коэффициент выбора: \n5,5%" },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.PyroDamageBonus, description: "Коэффициент выбора: \n84,1%" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Коэффициент выбора: \n11,8%" },
        { uid: AttributeUidEnum.PercentageOfHP, description: "Коэффициент выбора: \n1,3%" },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalHitChance, description: "Коэффициент выбора: \n64,2%" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Коэффициент выбора: \n29,1%" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Коэффициент выбора: \n4,2%" },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalHitChance, description: "Приоритетно" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Приоритетно" },
        { uid: AttributeUidEnum.EnergyRestoration },
      ],
    },
  },
  talents: {
    [TalentUidEnum.NormalAttack]: "По необходимости (6)",
    [TalentUidEnum.ElementalSkill]: "Вторичный приоритет (8)",
    [TalentUidEnum.ElementalBurst]: "Главный приоритет (10)",
  },
} as GuideCharacter;
const guideXingqiu = {
  level: 90,
  weapons: [{ uid: WeaponUidEnum.SacrificialSword }],
  artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.EmblemOfSeveredFate }],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Коэффициент выбора: \n52,5%" },
        { uid: AttributeUidEnum.EnergyRestoration, description: "Коэффициент выбора: \n41,0%" },
        { uid: AttributeUidEnum.PercentageOfHP, description: "Коэффициент выбора: \n3,0%" },
      ],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.HydroDamageBonus, description: "Коэффициент выбора: \n84,4%" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Коэффициент выбора: \n10,8%" },
        { uid: AttributeUidEnum.PercentageOfHP, description: "Коэффициент выбора: \n2,5%" },
      ],
      [ArtifactTypeUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalHitChance, description: "Коэффициент выбора: \n65,0%" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Коэффициент выбора: \n25,8%" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Коэффициент выбора: \n5,5%" },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalHitChance, description: "Приоритетно" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Приоритетно" },
        { uid: AttributeUidEnum.PercentageOfAttackPower },
      ],
    },
  },
  talents: {
    [TalentUidEnum.NormalAttack]: "По необходимости (6)",
    [TalentUidEnum.ElementalSkill]: "Вторичный приоритет (10)",
    [TalentUidEnum.ElementalBurst]: "Главный приоритет (10)",
  },
} as GuideCharacter;

const guideCharacters = {
  [CharacterUidEnum.Arlecchino]: guideArlecchino,
  [CharacterUidEnum.Bennett]: guideBennett,
  [CharacterUidEnum.Chevreuse]: guideChevreuse,
  [CharacterUidEnum.Escoffier]: guideEscoffier,
  [CharacterUidEnum.Fischl]: guideFischl,
  [CharacterUidEnum.KukiShinobu]: guideKukiShinobu,
  [CharacterUidEnum.Layla]: guideLayla,
  [CharacterUidEnum.Skirk]: guideSkirk,
  [CharacterUidEnum.Xiangling]: guideXiangling,
  [CharacterUidEnum.Xingqiu]: guideXingqiu,
} as GuideCharacters;

export function getGuideCharacter(characterUid: CharacterUid) {
  return characterUid in guideCharacters ? guideCharacters[characterUid] : undefined;
}
