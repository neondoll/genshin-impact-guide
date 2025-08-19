import type { IArtifactSetRecommendations } from "../types";
import { artifactSetByKey, StatsCrit, StatsElementDamageBonus } from "./_help.ts";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../stats/enums";

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
} as IArtifactSetRecommendations;
