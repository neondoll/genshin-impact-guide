import type { IArtifactSetRecommendations } from "../types";
import { artifactSetByKey, StatsCrit, StatsElementDamageBonus } from "./_help.ts";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../stats/enums";

export default {
  artifact_set_key: ArtifactSetKeys.BlizzardStrayer,
  characters: [
    {
      key: CharacterKeys.Ganyu,
      notes: `Является персонажем, наносящим основной Крио урон в команде, поэтому ей подойдут бонусы как 2 предметов, так и полного комплекта. Полный комплект лучше всего подходят для игры через Заморозку, а 2 предмета комплекта можно использовать в других случаях и сочетать с 2 предметами ${artifactSetByKey(ArtifactSetKeys.GladiatorsFinale)} или аналогами.`,
    },
    {
      key: CharacterKeys.KamisatoAyaka,
      is_better: true,
      notes: `Является персонажем, наносящим основной Крио урон в команде, поэтому ей подойдут бонусы как 2 предметов, так и полного комплекта. Полный комплект лучше всего подходит для игры через Заморозку, а 2 предмета комплекта можно использовать в любом другом случае и сочетать с 2 предметами ${artifactSetByKey(ArtifactSetKeys.GladiatorsFinale)} или аналогами.`,
    },
    { key: CharacterKeys.Wriothesley },
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
