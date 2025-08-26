import type { CharacterRecommendations } from "@/features/characters-recommendations/types";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default {
  artifacts: {
    sets: [
      {
        key: ArtifactSetIds.ScrollOfTheHeroOfCinderCity,
        is_better: true,
        notes: [
          "Лучший набор для Иансан, так как восстановит ей энергию и увеличит элементальный урон основного персонажа.",
          "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
        ],
      },
      {
        key: ArtifactSetIds.NoblesseOblige,
        notes: [
          "Увеличит урон взрыва стихии Иансан и силу атаки отряду.",
          "Рекомендуется использовать, если другие члены отряда не носят данный комплект.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotIds.Sands]: [{ key: StatKeys.AtkPercentage }, { key: StatKeys.EnergyRecharge }],
      [ArtifactSlotIds.Goblet]: [{ key: StatKeys.AtkPercentage }],
      [ArtifactSlotIds.Circlet]: [{ key: StatKeys.AtkPercentage }],
      additional: [
        { key: StatKeys.EnergyRecharge, notes: ["Приоритетно", "от 160%"] },
        {
          key: StatKeys.AtkPercentage,
          notes: ["от 2000", "2556 для 10 Ур. Взрыва стихии", "3000 для 13 Ур. Взрыва стихии"],
        },
        { key: StatKeys.CritRate },
        { key: StatKeys.CritDMG },
      ],
    },
  },
  character_key: CharacterIds.Iansan,
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1 - 6)" },
    { key: TalentKeys.ElementalSkill, priority: "Не качаем\n(1 - 6)" },
    { key: TalentKeys.ElementalBurst, priority: "В первую очередь\n(10)" },
  ],
  weapons: [
    { key: WeaponKeys.SkywardSpine },
    { key: WeaponKeys.TamayurateiNoOhanashi },
    { key: WeaponKeys.FavoniusLance },
  ],
} as CharacterRecommendations;
