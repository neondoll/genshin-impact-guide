import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.OceanHuedClam,
  characters: [
    { uid: CharacterUidEnum.Baizhu },
    { uid: CharacterUidEnum.Barbara, is_better: true },
    { uid: CharacterUidEnum.Jean },
    { uid: CharacterUidEnum.SangonomiyaKokomi, is_better: true },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HealthPercent],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HealthPercent],
    [ArtifactPieceUidEnum.CircletOfLogos]: [AttributeUidEnum.HealingBonus, AttributeUidEnum.HealthPercent],
    additional: [AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HealthPercent],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
