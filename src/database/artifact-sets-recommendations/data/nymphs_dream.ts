import type { IArtifactSetRecommendations } from "../types";
import { artifactSetByKey, StatsCrit, StatsElementDamageBonus } from "./_help.ts";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../stats/enums";

export default {
  artifact_set_key: ArtifactSetKeys.NymphsDream,
  characters: [
    {
      key: CharacterKeys.KamisatoAyato,
      is_better: true,
      notes: `Хороший комплект для Аято, так как значительно увеличивает Гидро урон и силу атаки.\nМожет использовать как полный набор, так и 2 предмета, сочетая с ${artifactSetByKey(ArtifactSetKeys.GladiatorsFinale)}, ${artifactSetByKey(ArtifactSetKeys.ShimenawasReminiscence)}, ${artifactSetByKey(ArtifactSetKeys.EchoesOfAnOffering)}, ${artifactSetByKey(ArtifactSetKeys.VermillionHereafter)}. В таком случае ${artifactSetByKey(ArtifactSetKeys.NymphsDream)} может быть заменён ${artifactSetByKey(ArtifactSetKeys.HeartOfDepth)}.`,
    },
    {
      key: CharacterKeys.Tartaglia,
      is_better: true,
      notes: `Один из лучших комплектов для Тартальи, так как значительно увеличивает Гидро урон и силу атаки.\nМожет использовать как полный набор, так и 2 предмета, сочетая с ${artifactSetByKey(ArtifactSetKeys.GladiatorsFinale)}, ${artifactSetByKey(ArtifactSetKeys.NoblesseOblige)}, ${artifactSetByKey(ArtifactSetKeys.ShimenawasReminiscence)}, ${artifactSetByKey(ArtifactSetKeys.EchoesOfAnOffering)}, ${artifactSetByKey(ArtifactSetKeys.VermillionHereafter)}. В таком случае ${artifactSetByKey(ArtifactSetKeys.NymphsDream)} может быть заменён ${artifactSetByKey(ArtifactSetKeys.HeartOfDepth)}.`,
    },
    {
      key: CharacterKeys.Xingqiu,
      notes: `Син Цю будет полезен бонус 2 предметов, так как ему важен Гидро урон. Можно сочетать с ${artifactSetByKey(ArtifactSetKeys.EmblemOfSeveredFate)} или ${artifactSetByKey(ArtifactSetKeys.NoblesseOblige)}. В таком случае ${artifactSetByKey(ArtifactSetKeys.NymphsDream)} может быть заменён ${artifactSetByKey(ArtifactSetKeys.HeartOfDepth)}.`,
    },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.AtkPercentage],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StatKeys.AtkPercentage],
    [ArtifactSlotKeys.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.AtkPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as IArtifactSetRecommendations;
