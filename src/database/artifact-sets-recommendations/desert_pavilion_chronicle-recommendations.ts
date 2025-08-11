import { artifactSetByKey, StatsCrit, StatsElementDamageBonus } from "./help";
import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StAtkeys } from "../enums/stat";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.DesertPavilionChronicle,
  characters: [
    {
      key: CharacterKeys.ShikanoinHeizou,
      is_better: true,
      notes: `Может использовать как 4 предмета, так и 2 предмета.\nДля реализации условия 4 предметов необходимо использовать заряженную атаку перед обычными.\n2 предмета можно сочетать с ${artifactSetByKey(ArtifactSetKeys.GladiatorsFinale)}, ${artifactSetByKey(ArtifactSetKeys.ShimenawasReminiscence)}, ${artifactSetByKey(ArtifactSetKeys.EchoesOfAnOffering)}, ${artifactSetByKey(ArtifactSetKeys.GoldenTroupe)} и ${artifactSetByKey(ArtifactSetKeys.VermillionHereafter)}. В данном случае комплект может быть заменён 2 предметами набора ${artifactSetByKey(ArtifactSetKeys.ViridescentVenerer)}.`,
    },
    {
      key: CharacterKeys.Wanderer,
      is_better: true,
      notes: `Лучший комплект для Странника, так как даёт бонус Анемо урона и увеличивает урон обычной и заряженной атаки. Для реализации условия 4 предметов необходимо использовать заряженную атаку перед обычными.\nСтраннику будет полезен бонус и 2 предметов, которые он может сочетать с ${artifactSetByKey(ArtifactSetKeys.GladiatorsFinale)}, ${artifactSetByKey(ArtifactSetKeys.ShimenawasReminiscence)}, ${artifactSetByKey(ArtifactSetKeys.EchoesOfAnOffering)}, ${artifactSetByKey(ArtifactSetKeys.MarechausseeHunter)} и ${artifactSetByKey(ArtifactSetKeys.VermillionHereafter)}. В данном случае комплект может быть заменён 2 предметами набора ${artifactSetByKey(ArtifactSetKeys.ViridescentVenerer)}.`,
    },
    {
      key: CharacterKeys.Xiao,
      is_better: true,
      notes: `Может использовать как 4 предмета, так и 2 предмета.\nДля реализации условия 4 предметов необходимо использовать заряженную атаку сразу перед взрывом стихии.\n2 предмета можно сочетать с ${artifactSetByKey(ArtifactSetKeys.GladiatorsFinale)}, ${artifactSetByKey(ArtifactSetKeys.ShimenawasReminiscence)}, ${artifactSetByKey(ArtifactSetKeys.EchoesOfAnOffering)} и ${artifactSetByKey(ArtifactSetKeys.VermillionHereafter)}. В данном случае комплект может быть заменён 2 предметами набора ${artifactSetByKey(ArtifactSetKeys.ViridescentVenerer)}.`,
    },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StAtkeys.AtkPercentage],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StAtkeys.AtkPercentage],
    [ArtifactSlotKeys.Circlet]: StatsCrit,
    additional: [...StatsCrit, StAtkeys.AtkPercentage, StAtkeys.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
