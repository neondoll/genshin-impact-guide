import type { IArtifactSetRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../stats/enums";
import { StatsCrit, StatsElementDamageBonus } from "./_help.ts";

export default {
  artifact_set_key: ArtifactSetKeys.EmblemOfSeveredFate,
  characters: [
    { key: CharacterKeys.Chevreuse, is_better: true },
    { key: CharacterKeys.Ganyu },
    { key: CharacterKeys.Mona },
    { key: CharacterKeys.RaidenShogun, is_better: true },
    { key: CharacterKeys.Shenhe },
    { key: CharacterKeys.Xiangling, is_better: true },
    { key: CharacterKeys.Xingqiu, is_better: true },
    { key: CharacterKeys.Yelan, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [
      StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage,
    ],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StatKeys.AtkPercentage, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Circlet]: [...StatsCrit, StatKeys.HpPercentage],
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as IArtifactSetRecommendations;
