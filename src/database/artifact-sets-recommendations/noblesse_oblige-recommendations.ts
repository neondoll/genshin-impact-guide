import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributesCrit, AttributesElementDamageBonus } from "./help";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.NoblesseOblige,
  characters: [
    { uid: CharacterUidEnum.Bennett, is_better: true },
    { uid: CharacterUidEnum.Charlotte, is_better: true },
    { uid: CharacterUidEnum.Chevreuse, is_better: true },
    { uid: CharacterUidEnum.Ganyu, is_better: true },
    { uid: CharacterUidEnum.Gorou, is_better: true },
    { uid: CharacterUidEnum.Jean, is_better: true },
    { uid: CharacterUidEnum.KujouSara, is_better: true },
    { uid: CharacterUidEnum.Mona, is_better: true },
    { uid: CharacterUidEnum.Shenhe, is_better: true },
    { uid: CharacterUidEnum.Xingqiu, is_better: true },
    { uid: CharacterUidEnum.Zhongli, is_better: true },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [
      AttributeUidEnum.AttackPercent, AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HealthPercent,
    ],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [
      ...AttributesElementDamageBonus, AttributeUidEnum.AttackPercent, AttributeUidEnum.HealthPercent,
    ],
    [ArtifactPieceUidEnum.CircletOfLogos]: [...AttributesCrit, AttributeUidEnum.HealthPercent],
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
