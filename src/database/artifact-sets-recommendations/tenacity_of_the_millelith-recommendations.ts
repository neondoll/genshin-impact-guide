import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";
import { AttributesCrit, AttributesElementDamageBonus } from "@/database/artifact-sets-recommendations/help.ts";

export default {
  artifact_set_uid: ArtifactSetUidEnum.TenacityOfTheMillelith,
  characters: [
    { uid: CharacterUidEnum.Dehya },
    { uid: CharacterUidEnum.KukiShinobu },
    { uid: CharacterUidEnum.Mona, is_better: true },
    { uid: CharacterUidEnum.SangonomiyaKokomi, is_better: true },
    { uid: CharacterUidEnum.Zhongli, is_better: true },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HealthPercent],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [...AttributesElementDamageBonus, AttributeUidEnum.HealthPercent],
    [ArtifactPieceUidEnum.CircletOfLogos]: [...AttributesCrit, AttributeUidEnum.HealthPercent],
    additional: [
      ...AttributesCrit, AttributeUidEnum.AttackPercent, AttributeUidEnum.EnergyRecharge,
      AttributeUidEnum.HealthPercent,
    ],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
