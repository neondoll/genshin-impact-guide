import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./help";
import type { IArtifactSetRecommendations } from "../types";

export default {
  artifact_set_key: ArtifactSetKeys.GildedDreams,
  characters: [
    { key: CharacterKeys.Alhaitham, is_better: true },
    { key: CharacterKeys.Cyno, is_better: true },
    { key: CharacterKeys.Keqing },
    { key: CharacterKeys.KukiShinobu },
    { key: CharacterKeys.Nahida, is_better: true },
    { key: CharacterKeys.RaidenShogun },
    { key: CharacterKeys.Tighnari, is_better: true },
    { key: CharacterKeys.YaeMiko, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.AtkPercentage, StatKeys.ElementalMastery],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StatKeys.ElementalMastery],
    [ArtifactSlotKeys.Circlet]: [...StatsCrit, StatKeys.ElementalMastery],
    additional: [
      ...StatsCrit, StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge, StatKeys.HpPercentage,
    ],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as IArtifactSetRecommendations;
