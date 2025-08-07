import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributesCrit, AttributesElementDamageBonus } from "./help";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.NoblesseOblige,
  characters: [
    { uid: CharacterUidEnum.Bennett, is_better: true },
    { uid: CharacterUidEnum.Charlotte, is_better: true },
    { uid: CharacterUidEnum.Chevreuse, is_better: true },
    { uid: CharacterUidEnum.Ganyu, is_better: true },
    { uid: CharacterUidEnum.Gorou, is_better: true },
    { uid: CharacterUidEnum.Jean, is_better: true },
    { uid: CharacterUidEnum.KujouSara, is_better: true },
    { uid: CharacterUidEnum.Mona, is_better: true },
    { uid: CharacterUidEnum.Shenhe, is_better: true },
    { uid: CharacterUidEnum.Xingqiu, is_better: true },
    { uid: CharacterUidEnum.Zhongli, is_better: true },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [
      AttributeUidEnum.ATKPercentage, AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HPPercentage,
    ],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [
      ...AttributesElementDamageBonus, AttributeUidEnum.ATKPercentage, AttributeUidEnum.HPPercentage,
    ],
    [ArtifactPieceUidEnum.CircletOfLogos]: [...AttributesCrit, AttributeUidEnum.HPPercentage],
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
