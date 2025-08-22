import type { ICharacterRecommendations } from "../types";
import { ArtifactSetIds } from "@/features/artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../stats/enums";
import { TalentKeys } from "../../talents/enums";
import { WeaponKeys } from "../../weapons/enums";

export default {
  artifacts: {
    sets: [
      {
        key: ArtifactSetIds.MarechausseeHunter,
        notes: [
          "Лучший комплект для Нёвиллета, так как увеличивает урон заряженной атаки и повышает шанс крит. попадания в сумме на 36%.",
          "Так как Нёвиллет при заряженной атаке теряет HP, он выполняет условие 4 предметов.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotKeys.Sands]: [{ key: StatKeys.HpPercentage }],
      [ArtifactSlotKeys.Goblet]: [
        { key: StatKeys.HpPercentage, notes: ["Если в команде Фурина"] },
        { key: StatKeys.HydroDmgBonus },
      ],
      [ArtifactSlotKeys.Circlet]: [
        { key: StatKeys.CritRate },
        { key: StatKeys.CritDMG, notes: ["Чаще всего"] },
        { key: StatKeys.HpPercentage, notes: ["Иногда, особенно с Сигной"] },
      ],
      additional: [
        { key: StatKeys.HpPercentage, notes: ["от 30000"] },
        {
          key: StatKeys.CritRate,
          notes: [
            "от 65% в обычной ситуации",
            "от 35% при использовании полного комплекта Охотник Сумеречного двора и стремимся к 64%",
          ],
        },
        { key: StatKeys.CritDMG, notes: ["от 160%"] },
        { key: StatKeys.EnergyRecharge, notes: ["Специально не охотиться", "от 120%"] },
      ],
    },
  },
  character_key: CharacterKeys.Neuvillette,
  first_constellation_or_signature_weapon: "Сигна > C1, Сигна > C2. Лучше Сигна и С1",
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "В первую очередь\n(10)" },
    { key: TalentKeys.ElementalSkill, priority: "Во вторую очередь\n(6 | 8)" },
    { key: TalentKeys.ElementalBurst, priority: "По необходимости\n(6 | 8)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { key: WeaponKeys.TomeOfTheEternalFlow, is_better: true, percent: 1 },
    { key: WeaponKeys.SacrificialJade, refinement: 5, percent: 0.998 },
    { key: WeaponKeys.SurfsUp, percent: 0.917 },
    { key: WeaponKeys.SacrificialJade, refinement: 1, percent: 0.914 },
    { key: WeaponKeys.AshGravenDrinkingHorn, refinement: 5, percent: 0.874 },
    { key: WeaponKeys.LostPrayerToTheSacredWinds, percent: 0.847 },
    { key: WeaponKeys.CashflowSupervision, percent: 0.831 },
    { key: WeaponKeys.AshGravenDrinkingHorn, refinement: 1, percent: 0.808 },
    { key: WeaponKeys.KagurasVerity, percent: 0.807 },
    { key: WeaponKeys.TheWidsith, refinement: 5, percent: 0.805 },
    { key: WeaponKeys.JadefallsSplendor, percent: 0.796 },
    { key: WeaponKeys.TheWidsith, refinement: 1, percent: 0.791 },
    { key: WeaponKeys.EverlastingMoonglow, percent: 0.765 },
    { key: WeaponKeys.TulaytullahsRemembrance, percent: 0.752 },
    { key: WeaponKeys.PrototypeAmber, percent: 0.745 },
    { key: WeaponKeys.RingOfYaxche, percent: 0.745 },
  ],
} as ICharacterRecommendations;
