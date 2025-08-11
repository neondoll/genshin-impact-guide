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
        key: ArtifactSetKeys.ScrollOfTheHeroOfCinderCity,
        is_better: true,
        notes: [
          "Лучший набор для Иансан, так как восстановит ей энергию и увеличит элементальный урон основного персонажа.",
          "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
        ],
      },
      {
        key: ArtifactSetKeys.NoblesseOblige,
        notes: [
          "Увеличит урон взрыва стихии Иансан и силу атаки отряду.",
          "Рекомендуется использовать, если другие члены отряда не носят данный комплект.",
        ],
      },
    ],
    stats: {
      [ArtifactSlotKeys.Sands]: [{ key: StAtkeys.AtkPercentage }, { key: StAtkeys.EnergyRecharge }],
      [ArtifactSlotKeys.Goblet]: [{ key: StAtkeys.AtkPercentage }],
      [ArtifactSlotKeys.Circlet]: [{ key: StAtkeys.AtkPercentage }],
      additional: [
        { key: StAtkeys.EnergyRecharge, notes: ["Приоритетно", "от 160%"] },
        {
          key: StAtkeys.AtkPercentage,
          notes: ["от 2000", "2556 для 10 Ур. Взрыва стихии", "3000 для 13 Ур. Взрыва стихии"],
        },
        { key: StAtkeys.CritRate },
        { key: StAtkeys.CritDMG },
      ],
    },
  },
  character_key: CharacterKeys.Iansan,
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
