import { artifactSetByKey, StatsCrit, StatsElementDamageBonus, weaponByKey } from "./help";
import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import { WeaponKeys } from "../enums/weapon";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.GoldenTroupe,
  characters: [
    {
      key: CharacterKeys.Albedo,
      notes: [
        `Так как элементальный навык Альбедо наносит его основной урон, даже когда тот не находится на поле, этот набор подходит Альбедо, особенно при наличии ${weaponByKey(WeaponKeys.CinnabarSpindle)}.`,
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetByKey(ArtifactSetKeys.HuskOfOpulentDreams)}.`,
      ],
    },
    { key: CharacterKeys.Escoffier },
    {
      key: CharacterKeys.Fischl,
      is_better: true,
      notes: [
        "Лучший комплект для Фишль в роли дополнительного урона, так как её элементальный навык наносит основной урон и действует, даже когда Фишль не находится на поле.",
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetByKey(ArtifactSetKeys.ThunderingFury)} или ${artifactSetByKey(ArtifactSetKeys.GladiatorsFinale)} (или другими с аналогичными бонусами).`,
      ],
    },
    {
      key: CharacterKeys.Furina,
      is_better: true,
      notes: [
        "Лучший комплект для Фурины, так как её элементальный навык является основным талантом, при этом Фурина наносит урон, не находясь на поле.",
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetByKey(ArtifactSetKeys.TenacityOfTheMillelith)} / ${artifactSetByKey(ArtifactSetKeys.VourukashasGlow)}.`,
      ],
    },
    {
      key: CharacterKeys.Nahida,
      notes: [
        `Подходит Нахиде в роли дополнительного урона, когда она не находится на поле. Рекомендуется иметь в команде персонажа с полным комплектом ${artifactSetByKey(ArtifactSetKeys.DeepwoodMemories)}.`,
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetByKey(ArtifactSetKeys.DeepwoodMemories)} или ${artifactSetByKey(ArtifactSetKeys.GildedDreams)} (или другими с аналогичными бонусами).`,
      ],
    },
    {
      key: CharacterKeys.Navia,
      notes: [
        "Элементальный навык наносит основной урон Навии, поэтому увеличение урона будет ей полезно. Рекомендуется использовать элементальный навык сразу при выходе на поле, пока действует бонус 70%.",
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetByKey(ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods)} или ${artifactSetByKey(ArtifactSetKeys.ArchaicPetra)} (или другими с аналогичными бонусами).`,
      ],
    },
    {
      key: CharacterKeys.YaeMiko,
      is_better: true,
      notes: [
        "Элементальный навык Яэ Мико наносит достаточно большой урон, даже когда она не находится на поле, поэтому комплект будет ей полезен.",
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetByKey(ArtifactSetKeys.ThunderingFury)} или ${artifactSetByKey(ArtifactSetKeys.GladiatorsFinale)} (или другими с аналогичными бонусами).`,
      ],
    },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.SandsOfEon]: [StatKeys.ATKPercentage, StatKeys.ElementalMastery, StatKeys.HPPercentage],
    [ArtifactSlotKeys.GobletOfEonothem]: [...StatsElementDamageBonus, StatKeys.HPPercentage],
    [ArtifactSlotKeys.CircletOfLogos]: StatsCrit,
    additional: [
      ...StatsCrit, StatKeys.ATKPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HPPercentage,
    ],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
