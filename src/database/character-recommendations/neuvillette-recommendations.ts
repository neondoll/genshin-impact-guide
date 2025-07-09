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
        uid: ArtifactSetUidEnum.MarechausseeHunter,
        notes: [
          "Лучший комплект для Нёвиллета, так как увеличивает урон заряженной атаки и повышает шанс крит. попадания в сумме на 36%.",
          "Так как Нёвиллет при заряженной атаке теряет HP, он выполняет условие 4 предметов.",
        ],
      },
    ],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [{ uid: AttributeUidEnum.HealthPercent }],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.HealthPercent, notes: ["Если в команде Фурина"] },
        { uid: AttributeUidEnum.HydroDamageBonus },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalRate },
        { uid: AttributeUidEnum.CriticalDamage, notes: ["Чаще всего"] },
        { uid: AttributeUidEnum.HealthPercent, notes: ["Иногда, особенно с Сигной"] },
      ],
      additional: [
        { uid: AttributeUidEnum.HealthPercent, notes: ["от 30000"] },
        {
          uid: AttributeUidEnum.CriticalRate,
          notes: [
            "от 65% в обычной ситуации",
            "от 35% при использовании полного комплекта Охотник Сумеречного двора и стремимся к 64%",
          ],
        },
        { uid: AttributeUidEnum.CriticalDamage, notes: ["от 160%"] },
        { uid: AttributeUidEnum.EnergyRecharge, notes: ["Специально не охотиться", "от 120%"] },
      ],
    },
  },
  character_uid: CharacterUidEnum.Neuvillette,
  first_constellation_or_signature_weapon: "Сигна > C1, Сигна > C2. Лучше Сигна и С1",
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "В первую очередь\n(10)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Во вторую очередь\n(6 | 8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "По необходимости\n(6 | 8)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
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
} as CharacterRecommendation;
