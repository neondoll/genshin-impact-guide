import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { artifactSetByUid, AttributesCrit, AttributesElementDamageBonus } from "./help";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.DesertPavilionChronicle,
  characters: [
    {
      uid: CharacterUidEnum.ShikanoinHeizou,
      is_better: true,
      notes: `Может использовать как 4 предмета, так и 2 предмета.\nДля реализации условия 4 предметов необходимо использовать заряженную атаку перед обычными.\n2 предмета можно сочетать с ${artifactSetByUid(ArtifactSetUidEnum.GladiatorsFinale)}, ${artifactSetByUid(ArtifactSetUidEnum.ShimenawasReminiscence)}, ${artifactSetByUid(ArtifactSetUidEnum.EchoesOfAnOffering)}, ${artifactSetByUid(ArtifactSetUidEnum.GoldenTroupe)} и ${artifactSetByUid(ArtifactSetUidEnum.VermillionHereafter)}. В данном случае комплект может быть заменён 2 предметами набора ${artifactSetByUid(ArtifactSetUidEnum.ViridescentVenerer)}.`,
    },
    {
      uid: CharacterUidEnum.Wanderer,
      is_better: true,
      notes: `Лучший комплект для Странника, так как даёт бонус Анемо урона и увеличивает урон обычной и заряженной атаки. Для реализации условия 4 предметов необходимо использовать заряженную атаку перед обычными.\nСтраннику будет полезен бонус и 2 предметов, которые он может сочетать с ${artifactSetByUid(ArtifactSetUidEnum.GladiatorsFinale)}, ${artifactSetByUid(ArtifactSetUidEnum.ShimenawasReminiscence)}, ${artifactSetByUid(ArtifactSetUidEnum.EchoesOfAnOffering)}, ${artifactSetByUid(ArtifactSetUidEnum.MarechausseeHunter)} и ${artifactSetByUid(ArtifactSetUidEnum.VermillionHereafter)}. В данном случае комплект может быть заменён 2 предметами набора ${artifactSetByUid(ArtifactSetUidEnum.ViridescentVenerer)}.`,
    },
    {
      uid: CharacterUidEnum.Xiao,
      is_better: true,
      notes: `Может использовать как 4 предмета, так и 2 предмета.\nДля реализации условия 4 предметов необходимо использовать заряженную атаку сразу перед взрывом стихии.\n2 предмета можно сочетать с ${artifactSetByUid(ArtifactSetUidEnum.GladiatorsFinale)}, ${artifactSetByUid(ArtifactSetUidEnum.ShimenawasReminiscence)}, ${artifactSetByUid(ArtifactSetUidEnum.EchoesOfAnOffering)} и ${artifactSetByUid(ArtifactSetUidEnum.VermillionHereafter)}. В данном случае комплект может быть заменён 2 предметами набора ${artifactSetByUid(ArtifactSetUidEnum.ViridescentVenerer)}.`,
    },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [AttributeUidEnum.ATKPercentage],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [...AttributesElementDamageBonus, AttributeUidEnum.ATKPercentage],
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
