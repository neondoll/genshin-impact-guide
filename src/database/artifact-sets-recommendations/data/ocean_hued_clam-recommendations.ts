import type { IArtifactSetRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../enums/stat";

export default {
  artifact_set_key: ArtifactSetKeys.OceanHuedClam,
  characters: [
    { key: CharacterKeys.Baizhu },
    { key: CharacterKeys.Barbara, is_better: true },
    { key: CharacterKeys.Jean },
    { key: CharacterKeys.SangonomiyaKokomi, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Goblet]: [StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Circlet]: [StatKeys.Heal, StatKeys.HpPercentage],
    additional: [StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as IArtifactSetRecommendations;
