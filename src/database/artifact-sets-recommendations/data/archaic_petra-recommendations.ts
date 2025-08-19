import type { IArtifactSetRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../enums/stat";
import { StatsCrit } from "./help";

export default {
  artifact_set_key: ArtifactSetKeys.ArchaicPetra,
  characters: [
    { key: CharacterKeys.Albedo },
    { key: CharacterKeys.Ningguang, is_better: true },
    { key: CharacterKeys.Noelle, is_better: true },
    { key: CharacterKeys.YunJin },
    { key: CharacterKeys.Zhongli, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.DefPercentage, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Goblet]: [StatKeys.DefPercentage, StatKeys.HpPercentage],
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
