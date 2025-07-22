import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";
import { AttributesCrit, AttributesElementDamageBonus } from "@/database/artifact-sets-recommendations/help.ts";

export default {
  artifact_set_uid: ArtifactSetUidEnum.Thundersoother,
  characters: [
    { uid: CharacterUidEnum.Cyno, is_better: true },
    { uid: CharacterUidEnum.Fischl },
    { uid: CharacterUidEnum.Keqing, is_better: true },
    { uid: CharacterUidEnum.YaeMiko },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [AttributeUidEnum.AttackPercent, AttributeUidEnum.ElementalMastery],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [...AttributesElementDamageBonus, AttributeUidEnum.AttackPercent],
    [ArtifactPieceUidEnum.CircletOfLogos]: AttributesCrit,
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
