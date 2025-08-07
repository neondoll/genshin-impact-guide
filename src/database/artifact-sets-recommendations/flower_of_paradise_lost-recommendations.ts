import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.FlowerOfParadiseLost,
  characters: [
    { uid: CharacterUidEnum.KukiShinobu, is_better: true },
    { uid: CharacterUidEnum.Nilou, is_better: true },
    { uid: CharacterUidEnum.RaidenShogun, is_better: true },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [AttributeUidEnum.ElementalMastery, AttributeUidEnum.HPPercentage],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [AttributeUidEnum.ElementalMastery, AttributeUidEnum.HPPercentage],
    [ArtifactPieceUidEnum.CircletOfLogos]: [AttributeUidEnum.ElementalMastery, AttributeUidEnum.HPPercentage],
    additional: [AttributeUidEnum.ElementalMastery, AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HPPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
