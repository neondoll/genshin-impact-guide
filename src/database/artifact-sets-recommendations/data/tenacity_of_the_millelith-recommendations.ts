import type { IArtifactSetRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./help";

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
    [ArtifactSlotKeys.Sands]: [StatKeys.EnergyRecharge, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Circlet]: [...StatsCrit, StatKeys.HpPercentage],
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.EnergyRecharge, StatKeys.HpPercentage],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as IArtifactSetRecommendations;
