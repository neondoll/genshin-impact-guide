import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.MaidenBeloved,
  characters: [
    { uid: CharacterUidEnum.Barbara, is_better: true },
    { uid: CharacterUidEnum.Jean, is_better: true },
    { uid: CharacterUidEnum.Qiqi },
    { uid: CharacterUidEnum.SangonomiyaKokomi, is_better: true },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [
      AttributeUidEnum.ATKPercentage, AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HPPercentage,
    ],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [
      AttributeUidEnum.ATKPercentage, AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HPPercentage,
    ],
    [ArtifactPieceUidEnum.CircletOfLogos]: [
      AttributeUidEnum.ATKPercentage, AttributeUidEnum.HealingBonus, AttributeUidEnum.HPPercentage,
    ],
    additional: [AttributeUidEnum.ATKPercentage, AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HPPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
