import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributesCrit, AttributesElementDamageBonus } from "./help";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.DeepwoodMemories,
  characters: [
    { uid: CharacterUidEnum.Baizhu, is_better: true },
    { uid: CharacterUidEnum.Nahida, is_better: true },
    { uid: CharacterUidEnum.Yaoyao, is_better: true },
    { uid: CharacterUidEnum.Zhongli, is_better: true },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [
      AttributeUidEnum.ElementalMastery, AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HPPercentage,
    ],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [
      ...AttributesElementDamageBonus, AttributeUidEnum.ElementalMastery, AttributeUidEnum.HPPercentage,
    ],
    [ArtifactPieceUidEnum.CircletOfLogos]: [...AttributesCrit, AttributeUidEnum.ElementalMastery],
    additional: [
      ...AttributesCrit, AttributeUidEnum.ElementalMastery, AttributeUidEnum.EnergyRecharge,
      AttributeUidEnum.HPPercentage,
    ],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
