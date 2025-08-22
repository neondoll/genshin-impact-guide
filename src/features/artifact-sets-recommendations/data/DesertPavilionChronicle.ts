import type { ArtifactSetRecommendations } from "../types";
import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "@/database/artifact-slots/enums";
import { CharacterKeys } from "@/database/characters/enums";
import { StatKeys } from "@/database/stats/enums";

export default {
  artifact_set_id: ArtifactSetIds.DesertPavilionChronicle,
  characters: [
    {
      key: CharacterKeys.ShikanoinHeizou,
      is_better: true,
      notes: `Может использовать как 4 предмета, так и 2 предмета.\nДля реализации условия 4 предметов необходимо использовать заряженную атаку перед обычными.\n2 предмета можно сочетать с ${artifactSetById(ArtifactSetIds.GladiatorsFinale)}, ${artifactSetById(ArtifactSetIds.ShimenawasReminiscence)}, ${artifactSetById(ArtifactSetIds.EchoesOfAnOffering)}, ${artifactSetById(ArtifactSetIds.GoldenTroupe)} и ${artifactSetById(ArtifactSetIds.VermillionHereafter)}. В данном случае комплект может быть заменён 2 предметами набора ${artifactSetById(ArtifactSetIds.ViridescentVenerer)}.`,
    },
    {
      key: CharacterKeys.Wanderer,
      is_better: true,
      notes: `Лучший комплект для Странника, так как даёт бонус Анемо урона и увеличивает урон обычной и заряженной атаки. Для реализации условия 4 предметов необходимо использовать заряженную атаку перед обычными.\nСтраннику будет полезен бонус и 2 предметов, которые он может сочетать с ${artifactSetById(ArtifactSetIds.GladiatorsFinale)}, ${artifactSetById(ArtifactSetIds.ShimenawasReminiscence)}, ${artifactSetById(ArtifactSetIds.EchoesOfAnOffering)}, ${artifactSetById(ArtifactSetIds.MarechausseeHunter)} и ${artifactSetById(ArtifactSetIds.VermillionHereafter)}. В данном случае комплект может быть заменён 2 предметами набора ${artifactSetById(ArtifactSetIds.ViridescentVenerer)}.`,
    },
    {
      key: CharacterKeys.Xiao,
      is_better: true,
      notes: `Может использовать как 4 предмета, так и 2 предмета.\nДля реализации условия 4 предметов необходимо использовать заряженную атаку сразу перед взрывом стихии.\n2 предмета можно сочетать с ${artifactSetById(ArtifactSetIds.GladiatorsFinale)}, ${artifactSetById(ArtifactSetIds.ShimenawasReminiscence)}, ${artifactSetById(ArtifactSetIds.EchoesOfAnOffering)} и ${artifactSetById(ArtifactSetIds.VermillionHereafter)}. В данном случае комплект может быть заменён 2 предметами набора ${artifactSetById(ArtifactSetIds.ViridescentVenerer)}.`,
    },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.AtkPercentage],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StatKeys.AtkPercentage],
    [ArtifactSlotKeys.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
