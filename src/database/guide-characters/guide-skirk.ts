import { artifactSets } from "../artifact-sets";
import { ArtifactSetUidEnum } from "../enums/artifact-sets";
import { ArtifactTypeUidEnum } from "../enums/artifact-types";
import { AttributeUidEnum } from "../enums/attributes";
import { CharacterUidEnum } from "../enums/characters";
import { ElementUidEnum } from "../enums/elements";
import { TalentUidEnum } from "../enums/talents";
import { weapons } from "../weapons";
import { WeaponUidEnum } from "../enums/weapons";
import type { GuideCharacter } from "../types/guide-characters";

type GameVariantUid = typeof GameVariantEnum[keyof typeof GameVariantEnum];

const GameVariantEnum = {
  GameFromElementalBurst: `game_from_${TalentUidEnum.ElementalBurst}`,
  GameFromStance: "game_from_stance",
} as const;

const gameVariants: Record<GameVariantUid, string> = {
  [GameVariantEnum.GameFromElementalBurst]: "Игра от взрыва стихий",
  [GameVariantEnum.GameFromStance]: "Игра от стойки",
};

export default {
  assembly_artifacts: {
    sets: [
      {
        uid: ArtifactSetUidEnum.MarechausseeHunter,
        percent: 1,
        description: "Лучше при игре от стойки. Работает только с Фуриной",
      },
      {
        uid: ArtifactSetUidEnum.FinaleOfTheDeepGalleries,
        percent: 0.9761,
        description: "Лучше при игре от взрыва стихии",
      },
    ],
    attributes: {
      [ArtifactTypeUidEnum.SandsOfEon]: [{ uid: AttributeUidEnum.PercentageOfAttackPower }],
      [ArtifactTypeUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.CryoDamageBonus, description: "Лучше" },
        { uid: AttributeUidEnum.PercentageOfAttackPower, description: "Можно поставить, если в отряде Фурина" },
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
  assembly_weapons: [
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
  first_constellation_or_signature_weapon: "Сигна > C1,\nC2 > Сигна",
  key_constellations: [1, 2, 5, 6],
  priority_of_talent_leveling: {
    [gameVariants[GameVariantEnum.GameFromStance]]: [
      { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1)" },
      { uid: TalentUidEnum.ElementalSkill, priority: "Максимальный приоритет\n(10)" },
      { uid: TalentUidEnum.ElementalBurst, priority: "Максимальный приоритет\n(10)" },
    ],
    [gameVariants[GameVariantEnum.GameFromElementalBurst]]: [
      { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1)" },
      { uid: TalentUidEnum.ElementalSkill, priority: "Игнорируем\n(1)" },
      { uid: TalentUidEnum.ElementalBurst, priority: "Максимальный приоритет\n(10)" },
    ],
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
  required_level: 90,
  rotation: {
    [gameVariants[GameVariantEnum.GameFromStance]]: "Отряд > Обычный навык (E) > Взрыв стихий (Q) > 10 обычных атак > Заряженная атака > 8 обычных атак",
    [gameVariants[GameVariantEnum.GameFromElementalBurst]]: "Отряд > Заряженный навык (hold E) > Взрыв стихий (Q)",
  },
  squads: {
    general_template: [
      { type: "character", uid: CharacterUidEnum.Skirk },
      { type: "element", uid: ElementUidEnum.Hydro },
      { type: "element", uid: ElementUidEnum.Cryo },
      [{ type: "element", uid: ElementUidEnum.Cryo }, { type: "element", uid: ElementUidEnum.Hydro }],
    ],
    best_teammates: [
      { type: "character", uid: CharacterUidEnum.Escoffier },
      { type: "character", uid: CharacterUidEnum.Furina },
    ],
  },
  video_sources: [
    {
      title: "Анимекул: Скирк – заложник Эскофье или имба? | Подробный гайд на Скирк",
      youtube_url: "https://youtu.be/5ZoCR8bsSYM",
    },
    {
      title: "Miron MinMax: Скирк - Сильнейший Крио (но есть нюанс)",
      vk_url: "https://vkvideo.ru/video-227044935_456239232",
      youtube_url: "https://youtu.be/jpAMI38M-LI",
    },
    {
      title: "xPandaChannelx: Скирк Гайд | Ротации/Шмотки/Группы/F2P | Skirk Как Играть Геншин Импакт 5.7",
      youtube_url: "https://youtu.be/Rr26SHvbmXE",
    },
  ],
} as GuideCharacter;
