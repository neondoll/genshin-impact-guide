import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributesCrit } from "./help";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.NighttimeWhispersInTheEchoingWoods,
  characters: [
    {
      uid: CharacterUidEnum.Navia,
      is_better: true,
      notes: "Является одним из лучших комплектов для Навии, так как увеличивает силу атаки и бонус Гео урона в сумме до 50% при выполнении всех условий 4 предметов. Для реализации условий в команде необходимо иметь Пиро/Крио/Гидро и/или Электро персонажей.",
    },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [AttributeUidEnum.ATKPercentage],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [AttributeUidEnum.ATKPercentage, AttributeUidEnum.GeoDMGBonus],
    [ArtifactPieceUidEnum.CircletOfLogos]: AttributesCrit,
    additional: [...AttributesCrit, AttributeUidEnum.ATKPercentage, AttributeUidEnum.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
