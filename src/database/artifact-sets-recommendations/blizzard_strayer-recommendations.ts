import { artifactSetByUid } from "./help";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.BlizzardStrayer,
  characters: [
    {
      uid: CharacterUidEnum.Ganyu,
      notes: `Является персонажем, наносящим основной Крио урон в команде, поэтому ей подойдут бонусы как 2 предметов, так и полного комплекта. Полный комплект лучше всего подходят для игры через Заморозку, а 2 предмета комплекта можно использовать в других случаях и сочетать с 2 предметами ${artifactSetByUid(ArtifactSetUidEnum.GladiatorsFinale)} или аналогами.`,
    },
    {
      uid: CharacterUidEnum.KamisatoAyaka,
      is_better: true,
      notes: `Является персонажем, наносящим основной Крио урон в команде, поэтому ей подойдут бонусы как 2 предметов, так и полного комплекта. Полный комплект лучше всего подходит для игры через Заморозку, а 2 предмета комплекта можно использовать в любом другом случае и сочетать с 2 предметами ${artifactSetByUid(ArtifactSetUidEnum.GladiatorsFinale)} или аналогами.`,
    },
    { uid: CharacterUidEnum.Wriothesley },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
