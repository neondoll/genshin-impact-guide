import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributesCrit, AttributesElementDamageBonus } from "./help";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.EchoesOfAnOffering,
  characters: [{ uid: CharacterUidEnum.KamisatoAyato, is_better: true }, { uid: CharacterUidEnum.Yoimiya }],
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
