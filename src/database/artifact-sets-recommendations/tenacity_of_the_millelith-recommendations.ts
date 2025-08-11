import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StAtkeys } from "../enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./help";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.TenacityOfTheMillelith,
  characters: [
    { key: CharacterKeys.Dehya },
    { key: CharacterKeys.KukiShinobu },
    { key: CharacterKeys.Mona, is_better: true },
    { key: CharacterKeys.SangonomiyaKokomi, is_better: true },
    { key: CharacterKeys.Zhongli, is_better: true },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StAtkeys.EnergyRecharge, StAtkeys.HpPercentage],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StAtkeys.HpPercentage],
    [ArtifactSlotKeys.Circlet]: [...StatsCrit, StAtkeys.HpPercentage],
    additional: [...StatsCrit, StAtkeys.AtkPercentage, StAtkeys.EnergyRecharge, StAtkeys.HpPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
