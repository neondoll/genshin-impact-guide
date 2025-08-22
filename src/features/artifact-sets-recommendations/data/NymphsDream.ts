import type { ArtifactSetRecommendations } from "../types";
import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "@/database/artifact-slots/enums";
import { CharacterKeys } from "@/database/characters/enums";
import { StatKeys } from "@/database/stats/enums";

export default {
  artifact_set_id: ArtifactSetIds.NymphsDream,
  characters: [
    {
      key: CharacterKeys.KamisatoAyato,
      is_better: true,
      notes: `Хороший комплект для Аято, так как значительно увеличивает Гидро урон и силу атаки.\nМожет использовать как полный набор, так и 2 предмета, сочетая с ${artifactSetById(ArtifactSetIds.GladiatorsFinale)}, ${artifactSetById(ArtifactSetIds.ShimenawasReminiscence)}, ${artifactSetById(ArtifactSetIds.EchoesOfAnOffering)}, ${artifactSetById(ArtifactSetIds.VermillionHereafter)}. В таком случае ${artifactSetById(ArtifactSetIds.NymphsDream)} может быть заменён ${artifactSetById(ArtifactSetIds.HeartOfDepth)}.`,
    },
    {
      key: CharacterKeys.Tartaglia,
      is_better: true,
      notes: `Один из лучших комплектов для Тартальи, так как значительно увеличивает Гидро урон и силу атаки.\nМожет использовать как полный набор, так и 2 предмета, сочетая с ${artifactSetById(ArtifactSetIds.GladiatorsFinale)}, ${artifactSetById(ArtifactSetIds.NoblesseOblige)}, ${artifactSetById(ArtifactSetIds.ShimenawasReminiscence)}, ${artifactSetById(ArtifactSetIds.EchoesOfAnOffering)}, ${artifactSetById(ArtifactSetIds.VermillionHereafter)}. В таком случае ${artifactSetById(ArtifactSetIds.NymphsDream)} может быть заменён ${artifactSetById(ArtifactSetIds.HeartOfDepth)}.`,
    },
    {
      key: CharacterKeys.Xingqiu,
      notes: `Син Цю будет полезен бонус 2 предметов, так как ему важен Гидро урон. Можно сочетать с ${artifactSetById(ArtifactSetIds.EmblemOfSeveredFate)} или ${artifactSetById(ArtifactSetIds.NoblesseOblige)}. В таком случае ${artifactSetById(ArtifactSetIds.NymphsDream)} может быть заменён ${artifactSetById(ArtifactSetIds.HeartOfDepth)}.`,
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
} as ArtifactSetRecommendations;
