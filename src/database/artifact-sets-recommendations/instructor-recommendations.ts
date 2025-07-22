import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.Instructor,
  characters: [
    { uid: CharacterUidEnum.Bennett, is_better: true },
    { uid: CharacterUidEnum.Collei },
    { uid: CharacterUidEnum.Kirara },
    { uid: CharacterUidEnum.KukiShinobu },
    { uid: CharacterUidEnum.Mona, is_better: true },
    { uid: CharacterUidEnum.Sucrose, is_better: true },
    { uid: CharacterUidEnum.Zhongli, is_better: true },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [
      AttributeUidEnum.ElementalMastery, AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HealthPercent,
    ],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [AttributeUidEnum.ElementalMastery, AttributeUidEnum.HealthPercent],
    [ArtifactPieceUidEnum.CircletOfLogos]: [AttributeUidEnum.ElementalMastery, AttributeUidEnum.HealthPercent],
    additional: [AttributeUidEnum.ElementalMastery, AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HealthPercent],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
