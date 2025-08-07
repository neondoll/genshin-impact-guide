import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributesCrit, AttributesElementDamageBonus } from "./help";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.GildedDreams,
  characters: [
    { uid: CharacterUidEnum.Alhaitham, is_better: true },
    { uid: CharacterUidEnum.Cyno, is_better: true },
    { uid: CharacterUidEnum.Keqing },
    { uid: CharacterUidEnum.KukiShinobu },
    { uid: CharacterUidEnum.Nahida, is_better: true },
    { uid: CharacterUidEnum.RaidenShogun },
    { uid: CharacterUidEnum.Tighnari, is_better: true },
    { uid: CharacterUidEnum.YaeMiko, is_better: true },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [AttributeUidEnum.ATKPercentage, AttributeUidEnum.ElementalMastery],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [...AttributesElementDamageBonus, AttributeUidEnum.ElementalMastery],
    [ArtifactPieceUidEnum.CircletOfLogos]: [...AttributesCrit, AttributeUidEnum.ElementalMastery],
    additional: [
      ...AttributesCrit, AttributeUidEnum.ATKPercentage, AttributeUidEnum.ElementalMastery,
      AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HPPercentage,
    ],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
