import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { artifactSetByUid, AttributesCrit, AttributesElementDamageBonus, weaponByUid } from "./help";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import { WeaponUidEnum } from "../enums/weapon";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.GoldenTroupe,
  characters: [
    {
      uid: CharacterUidEnum.Albedo,
      notes: [
        `Так как элементальный навык Альбедо наносит его основной урон, даже когда тот не находится на поле, этот набор подходит Альбедо, особенно при наличии ${weaponByUid(WeaponUidEnum.CinnabarSpindle)}.`,
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetByUid(ArtifactSetUidEnum.HuskOfOpulentDreams)}.`,
      ],
    },
    { uid: CharacterUidEnum.Escoffier },
    {
      uid: CharacterUidEnum.Fischl,
      is_better: true,
      notes: [
        "Лучший комплект для Фишль в роли дополнительного урона, так как её элементальный навык наносит основной урон и действует, даже когда Фишль не находится на поле.",
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetByUid(ArtifactSetUidEnum.ThunderingFury)} или ${artifactSetByUid(ArtifactSetUidEnum.GladiatorsFinale)} (или другими с аналогичными бонусами).`,
      ],
    },
    {
      uid: CharacterUidEnum.Furina,
      is_better: true,
      notes: [
        "Лучший комплект для Фурины, так как её элементальный навык является основным талантом, при этом Фурина наносит урон, не находясь на поле.",
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetByUid(ArtifactSetUidEnum.TenacityOfTheMillelith)} / ${artifactSetByUid(ArtifactSetUidEnum.VourukashasGlow)}.`,
      ],
    },
    {
      uid: CharacterUidEnum.Nahida,
      notes: [
        `Подходит Нахиде в роли дополнительного урона, когда она не находится на поле. Рекомендуется иметь в команде персонажа с полным комплектом ${artifactSetByUid(ArtifactSetUidEnum.DeepwoodMemories)}.`,
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetByUid(ArtifactSetUidEnum.DeepwoodMemories)} или ${artifactSetByUid(ArtifactSetUidEnum.GildedDreams)} (или другими с аналогичными бонусами).`,
      ],
    },
    {
      uid: CharacterUidEnum.Navia,
      notes: [
        "Элементальный навык наносит основной урон Навии, поэтому увеличение урона будет ей полезно. Рекомендуется использовать элементальный навык сразу при выходе на поле, пока действует бонус 70%.",
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetByUid(ArtifactSetUidEnum.NighttimeWhispersInTheEchoingWoods)} или ${artifactSetByUid(ArtifactSetUidEnum.ArchaicPetra)} (или другими с аналогичными бонусами).`,
      ],
    },
    {
      uid: CharacterUidEnum.YaeMiko,
      is_better: true,
      notes: [
        "Элементальный навык Яэ Мико наносит достаточно большой урон, даже когда она не находится на поле, поэтому комплект будет ей полезен.",
        `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetByUid(ArtifactSetUidEnum.ThunderingFury)} или ${artifactSetByUid(ArtifactSetUidEnum.GladiatorsFinale)} (или другими с аналогичными бонусами).`,
      ],
    },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [
      AttributeUidEnum.AttackPercent, AttributeUidEnum.ElementalMastery, AttributeUidEnum.HealthPercent,
    ],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [...AttributesElementDamageBonus, AttributeUidEnum.HealthPercent],
    [ArtifactPieceUidEnum.CircletOfLogos]: AttributesCrit,
    additional: [
      ...AttributesCrit, AttributeUidEnum.AttackPercent, AttributeUidEnum.ElementalMastery,
      AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HealthPercent,
    ],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
