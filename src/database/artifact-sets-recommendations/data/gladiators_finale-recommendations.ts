import type { IArtifactSetRecommendations } from "../types";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../enums/stat";
import { StatsCrit, StatsElementDamageBonus } from "./help";

export default {
  artifact_set_key: ArtifactSetKeys.GladiatorsFinale,
  characters: [
    { key: CharacterKeys.Cyno, is_better: true },
    { key: CharacterKeys.KamisatoAyato, is_better: true },
    { key: CharacterKeys.Noelle },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.AtkPercentage, StatKeys.ElementalMastery],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StatKeys.AtkPercentage],
    [ArtifactSlotKeys.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as IArtifactSetRecommendations;
