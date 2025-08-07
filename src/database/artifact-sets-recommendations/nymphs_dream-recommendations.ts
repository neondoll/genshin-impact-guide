import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { artifactSetByUid, AttributesCrit, AttributesElementDamageBonus } from "./help";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.NymphsDream,
  characters: [
    {
      uid: CharacterUidEnum.KamisatoAyato,
      is_better: true,
      notes: `Хороший комплект для Аято, так как значительно увеличивает Гидро урон и силу атаки.\nМожет использовать как полный набор, так и 2 предмета, сочетая с ${artifactSetByUid(ArtifactSetUidEnum.GladiatorsFinale)}, ${artifactSetByUid(ArtifactSetUidEnum.ShimenawasReminiscence)}, ${artifactSetByUid(ArtifactSetUidEnum.EchoesOfAnOffering)}, ${artifactSetByUid(ArtifactSetUidEnum.VermillionHereafter)}. В таком случае ${artifactSetByUid(ArtifactSetUidEnum.NymphsDream)} может быть заменён ${artifactSetByUid(ArtifactSetUidEnum.HeartOfDepth)}.`,
    },
    {
      uid: CharacterUidEnum.Tartaglia,
      is_better: true,
      notes: `Один из лучших комплектов для Тартальи, так как значительно увеличивает Гидро урон и силу атаки.\nМожет использовать как полный набор, так и 2 предмета, сочетая с ${artifactSetByUid(ArtifactSetUidEnum.GladiatorsFinale)}, ${artifactSetByUid(ArtifactSetUidEnum.NoblesseOblige)}, ${artifactSetByUid(ArtifactSetUidEnum.ShimenawasReminiscence)}, ${artifactSetByUid(ArtifactSetUidEnum.EchoesOfAnOffering)}, ${artifactSetByUid(ArtifactSetUidEnum.VermillionHereafter)}. В таком случае ${artifactSetByUid(ArtifactSetUidEnum.NymphsDream)} может быть заменён ${artifactSetByUid(ArtifactSetUidEnum.HeartOfDepth)}.`,
    },
    {
      uid: CharacterUidEnum.Xingqiu,
      notes: `Син Цю будет полезен бонус 2 предметов, так как ему важен Гидро урон. Можно сочетать с ${artifactSetByUid(ArtifactSetUidEnum.EmblemOfSeveredFate)} или ${artifactSetByUid(ArtifactSetUidEnum.NoblesseOblige)}. В таком случае ${artifactSetByUid(ArtifactSetUidEnum.NymphsDream)} может быть заменён ${artifactSetByUid(ArtifactSetUidEnum.HeartOfDepth)}.`,
    },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [AttributeUidEnum.ATKPercentage],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [...AttributesElementDamageBonus, AttributeUidEnum.ATKPercentage],
    [ArtifactPieceUidEnum.CircletOfLogos]: AttributesCrit,
    additional: [...AttributesCrit, AttributeUidEnum.ATKPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
