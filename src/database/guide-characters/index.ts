import guideArlecchino from "./guide-arlecchino";
import guideBennett from "./guide-bennett";
import guideEscoffier from "./guide-escoffier";
import guideIansan from "./guide-iansan";
import guideKukiShinobu from "./guide-kuki_shinobu";
import guideLayla from "./guide-layla";
import guideMavuika from "./guide-mavuika";
import guideNeuvillette from "./guide-neuvillette";
import guideSkirk from "./guide-skirk";
import guideVaresa from "./guide-varesa";
import guideXingqiu from "./guide-xingqiu";
import { ArtifactPieceUidEnum } from "../enums/artifact-pieces";
import { artifactSets } from "../artifact-sets";
import { ArtifactSetUidEnum } from "../enums/artifact-sets";
import { AttributeUidEnum } from "../enums/attributes";
import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import { weapons } from "../weapons";
import { WeaponUidEnum } from "../enums/weapons";
import type { GuideCharacter, GuideCharacters } from "../types/guide-characters";

const guideChevreuse = {
  character_uid: CharacterUidEnum.Chevreuse,
  artifact_recommendations: {
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
      [ArtifactPieceUidEnum.SandsOfEon]: [{ uid: AttributeUidEnum.HealthPercent }],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [{ uid: AttributeUidEnum.HealthPercent }],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.HealthPercent },
        {
          uid: AttributeUidEnum.CriticalRate,
          description: `Если в руках ${weapons[WeaponUidEnum.FavoniusLance].name}`,
        },
      ],
      additional: [{ uid: AttributeUidEnum.HealthPercent }, { uid: AttributeUidEnum.EnergyRecharge }],
    },
  },
  assembly_weapons: [
    { uid: WeaponUidEnum.RightfulReward },
    { uid: WeaponUidEnum.DialoguesOfTheDesertSages },
    { uid: WeaponUidEnum.FavoniusLance },
  ],
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Главный приоритет\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Вторичный приоритет\n(8)" },
  ],
  required_level: 90,
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
} as GuideCharacter;
const guideFischl = {
  character_uid: CharacterUidEnum.Fischl,
  artifact_recommendations: {
    sets: [{ uid: ArtifactSetUidEnum.GoldenTroupe }],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.AttackPercent, percent: 0.785 },
        { uid: AttributeUidEnum.ElementalMastery, percent: 0.125 },
        { uid: AttributeUidEnum.EnergyRecharge, percent: 0.062 },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.ElectroDamageBonus, percent: 0.830 },
        { uid: AttributeUidEnum.AttackPercent, percent: 0.119 },
        { uid: AttributeUidEnum.ElementalMastery, percent: 0.018 },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalRate, percent: 0.669 },
        { uid: AttributeUidEnum.CriticalDamage, percent: 0.266 },
        { uid: AttributeUidEnum.AttackPercent, percent: 0.034 },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalRate, description: "Приоритетно" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Приоритетно" },
        { uid: AttributeUidEnum.AttackPercent },
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
  artifact_recommendations: {
    sets: [{ uid: ArtifactSetUidEnum.GoldenTroupe }],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.EnergyRecharge },
        { uid: AttributeUidEnum.HealthPercent },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.HydroDamageBonus },
        { uid: AttributeUidEnum.HealthPercent, description: "Лучше в подавляющем числе ситуаций" },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalRate },
        { uid: AttributeUidEnum.CriticalDamage },
      ],
      additional: [
        {
          uid: AttributeUidEnum.EnergyRecharge,
          description: "В отрядах без доп. подкачки - 200% - 220% ВЭ\nВ отрядах с доп. подкачкой - 160% - 180% ВЭ\nВ отрядах с Е Лань или Син Цю - 130% - 140% ВЭ\nВ отрядах с 3 Гидро и более - 100% ВЭ",
        },
        { uid: AttributeUidEnum.HealthPercent },
        { uid: AttributeUidEnum.CriticalRate },
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
    { uid: TalentUidEnum.ElementalSkill, priority: "Максимальный приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Максимальный приоритет\n(10)" },
  ],
  reference_point: [["Макс. HP", "33 000"], ["Восст. энергии", "170%"], ["Крит. шанс", "60%"], ["Крит. урон", "140%"]],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
} as GuideCharacter;
const guideXiangling = {
  character_uid: CharacterUidEnum.Xiangling,
  artifact_recommendations: {
    sets: [{ uid: ArtifactSetUidEnum.EmblemOfSeveredFate }],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.EnergyRecharge, percent: 0.748 },
        { uid: AttributeUidEnum.AttackPercent, percent: 0.171 },
        { uid: AttributeUidEnum.ElementalMastery, percent: 0.055 },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.PyroDamageBonus, percent: 0.841 },
        { uid: AttributeUidEnum.AttackPercent, percent: 0.118 },
        { uid: AttributeUidEnum.HealthPercent, percent: 0.013 },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalRate, percent: 0.642 },
        { uid: AttributeUidEnum.CriticalDamage, percent: 0.291 },
        { uid: AttributeUidEnum.AttackPercent, percent: 0.042 },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalRate, description: "Приоритетно" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Приоритетно" },
        { uid: AttributeUidEnum.EnergyRecharge },
      ],
    },
  },
  assembly_weapons: [{ uid: WeaponUidEnum.EngulfingLightning }],
  priority_of_talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Вторичный приоритет\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Максимальный приоритет\n(10)" },
  ],
  required_level: 90,
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
} as GuideCharacter;
const guideXilonen = {
  character_uid: CharacterUidEnum.Xilonen,
  artifact_recommendations: {
    sets: [{ uid: ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity }],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.DefensePercent },
        { uid: AttributeUidEnum.EnergyRecharge },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [{ uid: AttributeUidEnum.DefensePercent }],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.DefensePercent },
        { uid: AttributeUidEnum.CriticalRate },
        { uid: AttributeUidEnum.HealingBonus },
      ],
      additional: [
        { uid: AttributeUidEnum.DefensePercent },
        { uid: AttributeUidEnum.EnergyRecharge, description: "~160% ВЭ для стабильной ульты" },
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
