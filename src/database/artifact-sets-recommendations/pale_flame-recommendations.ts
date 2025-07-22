import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributesCrit } from "./help";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.PaleFlame,
  characters: [
    { uid: CharacterUidEnum.Eula, is_better: true },
    { uid: CharacterUidEnum.Freminet },
    { uid: CharacterUidEnum.Razor },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [AttributeUidEnum.AttackPercent],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [AttributeUidEnum.AttackPercent, AttributeUidEnum.PhysicalDamageBonus],
    [ArtifactPieceUidEnum.CircletOfLogos]: AttributesCrit,
    additional: [...AttributesCrit, AttributeUidEnum.AttackPercent],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
