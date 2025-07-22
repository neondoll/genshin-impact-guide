import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { artifactSetByUid, AttributesCrit, AttributesElementDamageBonus } from "./help";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.ViridescentVenerer,
  characters: [
    {
      uid: CharacterUidEnum.Jean,
      is_better: true,
      notes: `Анемо персонаж поддержки, который наносит Анемо урон, вызывает реакцию Рассеивание и лечит отряд. Она может использовать как полный комплект, так и только 2 его предмета, сочетая с 2 предметами набора ${artifactSetByUid(ArtifactSetUidEnum.MaidenBeloved)} или аналогами, если команде не хватает лечения, или с 2 предметами ${artifactSetByUid(ArtifactSetUidEnum.GladiatorsFinale)} (или аналогами), так как лечение Джинн зависит от силы атаки. 2 предмета набора ${artifactSetByUid(ArtifactSetUidEnum.ViridescentVenerer)} в таком случае можно заменить ${artifactSetByUid(ArtifactSetUidEnum.DesertPavilionChronicle)}.`,
    },
    {
      uid: CharacterUidEnum.KaedeharaKazuha,
      is_better: true,
      notes: `Анемо персонаж, играющий от реакции Рассеивание, поэтому ему будут полезны бонусы полного комплекта. Кроме того, набор снизит сопротивление врагов к соответствующему элементу при реакции Рассеивание.\n${artifactSetByUid(ArtifactSetUidEnum.ViridescentVenerer)} - лучший комплект для Кадзухи.`,
    },
    {
      uid: CharacterUidEnum.ShikanoinHeizou,
      is_better: true,
      notes: `Хэйдзо является, как правило, персонажем, наносящим основной Анемо урон в команде. Он может использовать как бонусы только 2 предметов, так и бонус всего комплекта при игре через реакцию Рассеивание. 2 предмета набора лучше всего сочетать с 2 предметами набора ${artifactSetByUid(ArtifactSetUidEnum.GladiatorsFinale)} или другими с аналогичными бонусами. В таком случае 2 предмета набора ${artifactSetByUid(ArtifactSetUidEnum.ViridescentVenerer)} можно заменить ${artifactSetByUid(ArtifactSetUidEnum.DesertPavilionChronicle)}.`,
    },
    {
      uid: CharacterUidEnum.Sayu,
      notes: `Анемо персонаж поддержки, который наносит Анемо урон, вызывает реакцию Рассеивание и лечит отряд. Она может использовать как полный комплект, так и только 2 его предмета, сочетая с 2 предметами набора ${artifactSetByUid(ArtifactSetUidEnum.MaidenBeloved)} или аналогами, если команде не хватает лечения, или с 2 предметами ${artifactSetByUid(ArtifactSetUidEnum.GladiatorsFinale)} (или аналогами), так как лечение Саю зависит от силы атаки. 2 предмета набора ${artifactSetByUid(ArtifactSetUidEnum.ViridescentVenerer)} в таком случае можно заменить ${artifactSetByUid(ArtifactSetUidEnum.DesertPavilionChronicle)}.`,
    },
    {
      uid: CharacterUidEnum.Sucrose,
      is_better: true,
      notes: `Так как Сахароза является Анемо персонажем, играющим от реакции Рассеивание, ей будут полезны бонусы полного комплекта. Кроме того, этот комплект будет очень полезен для остальных членов отряда, так как реакция Рассеивание будет понижать сопротивление противников к соответствующему элементу.\n${artifactSetByUid(ArtifactSetUidEnum.ViridescentVenerer)} является лучшим комплектом для Сахарозы.`,
    },
    {
      uid: CharacterUidEnum.Venti,
      is_better: true,
      notes: `Анемо персонаж поддержки, вызывающий реакцию Рассеивание, поэтому ему подойдет бонус полного комплекта. Кроме того, набор снизит сопротивление врагов к соответствующему элементу при данной реакции.\n${artifactSetByUid(ArtifactSetUidEnum.ViridescentVenerer)} - лучший комплект для Венти.`,
    },
    {
      uid: CharacterUidEnum.Xiao,
      notes: `Персонаж, наносящий основной Анемо урон в команде, поэтому ему будут полезны бонусы 2 предметов. Для лучшего эффекта сочетать с 2 предметами набора ${artifactSetByUid(ArtifactSetUidEnum.GladiatorsFinale)} или другими с аналогичными бонусами. 2 предмета набора ${artifactSetByUid(ArtifactSetUidEnum.ViridescentVenerer)} можно заменить ${artifactSetByUid(ArtifactSetUidEnum.DesertPavilionChronicle)}.`,
    },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [
      AttributeUidEnum.AttackPercent, AttributeUidEnum.ElementalMastery, AttributeUidEnum.EnergyRecharge,
    ],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [...AttributesElementDamageBonus, AttributeUidEnum.ElementalMastery],
    [ArtifactPieceUidEnum.CircletOfLogos]: [...AttributesCrit, AttributeUidEnum.ElementalMastery],
    additional: [
      ...AttributesCrit, AttributeUidEnum.AttackPercent, AttributeUidEnum.ElementalMastery,
      AttributeUidEnum.EnergyRecharge,
    ],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
