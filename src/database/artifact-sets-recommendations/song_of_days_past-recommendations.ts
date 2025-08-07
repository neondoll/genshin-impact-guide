import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.SongOfDaysPast,
  characters: [
    { uid: CharacterUidEnum.Barbara, is_better: true },
    { uid: CharacterUidEnum.SangonomiyaKokomi, is_better: true },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [AttributeUidEnum.HPPercentage],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [AttributeUidEnum.HPPercentage],
    [ArtifactPieceUidEnum.CircletOfLogos]: [AttributeUidEnum.HealingBonus, AttributeUidEnum.HPPercentage],
    additional: [AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HPPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
