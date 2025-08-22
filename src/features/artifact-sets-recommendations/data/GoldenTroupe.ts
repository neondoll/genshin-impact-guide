import type { ArtifactSetRecommendations } from "../types";
import { artifactSetById, StatsCrit, StatsElementDamageBonus, weaponById } from "./_help";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "@/database/artifact-slots/enums";
import { CharacterKeys } from "@/database/characters/enums";
import { StatKeys } from "@/database/stats/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default {
  artifact_set_id: ArtifactSetIds.GoldenTroupe,
  characters: [
    {
      key: CharacterKeys.Albedo,
      notes: [
        `Так как элементальный навык Альбедо наносит его основной урон, даже когда тот не находится на поле, этот набор подходит Альбедо, особенно при наличии ${weaponById(WeaponKeys.CinnabarSpindle)}.`,
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetById(ArtifactSetIds.HuskOfOpulentDreams)}.`,
      ],
    },
    { key: CharacterKeys.Escoffier },
    {
      key: CharacterKeys.Fischl,
      is_better: true,
      notes: [
        "Лучший комплект для Фишль в роли дополнительного урона, так как её элементальный навык наносит основной урон и действует, даже когда Фишль не находится на поле.",
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetById(ArtifactSetIds.ThunderingFury)} или ${artifactSetById(ArtifactSetIds.GladiatorsFinale)} (или другими с аналогичными бонусами).`,
      ],
    },
    {
      key: CharacterKeys.Furina,
      is_better: true,
      notes: [
        "Лучший комплект для Фурины, так как её элементальный навык является основным талантом, при этом Фурина наносит урон, не находясь на поле.",
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetById(ArtifactSetIds.TenacityOfTheMillelith)} / ${artifactSetById(ArtifactSetIds.VourukashasGlow)}.`,
      ],
    },
    {
      key: CharacterKeys.Nahida,
      notes: [
        `Подходит Нахиде в роли дополнительного урона, когда она не находится на поле. Рекомендуется иметь в команде персонажа с полным комплектом ${artifactSetById(ArtifactSetIds.DeepwoodMemories)}.`,
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetById(ArtifactSetIds.DeepwoodMemories)} или ${artifactSetById(ArtifactSetIds.GildedDreams)} (или другими с аналогичными бонусами).`,
      ],
    },
    {
      key: CharacterKeys.Navia,
      notes: [
        "Элементальный навык наносит основной урон Навии, поэтому увеличение урона будет ей полезно. Рекомендуется использовать элементальный навык сразу при выходе на поле, пока действует бонус 70%.",
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetById(ArtifactSetIds.NighttimeWhispersInTheEchoingWoods)} или ${artifactSetById(ArtifactSetIds.ArchaicPetra)} (или другими с аналогичными бонусами).`,
      ],
    },
    {
      key: CharacterKeys.YaeMiko,
      is_better: true,
      notes: [
        "Элементальный навык Яэ Мико наносит достаточно большой урон, даже когда она не находится на поле, поэтому комплект будет ей полезен.",
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetById(ArtifactSetIds.ThunderingFury)} или ${artifactSetById(ArtifactSetIds.GladiatorsFinale)} (или другими с аналогичными бонусами).`,
      ],
    },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Circlet]: StatsCrit,
    additional: [
      ...StatsCrit, StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage,
    ],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
