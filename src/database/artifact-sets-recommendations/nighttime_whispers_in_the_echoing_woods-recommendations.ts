import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StAtkeys } from "../enums/stat";
import { StatsCrit } from "./help";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.NighttimeWhispersInTheEchoingWoods,
  characters: [
    {
      key: CharacterKeys.Navia,
      is_better: true,
      notes: "Является одним из лучших комплектов для Навии, так как увеличивает силу атаки и бонус Гео урона в сумме до 50% при выполнении всех условий 4 предметов. Для реализации условий в команде необходимо иметь Пиро/Крио/Гидро и/или Электро персонажей.",
    },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StAtkeys.AtkPercentage],
    [ArtifactSlotKeys.Goblet]: [StAtkeys.AtkPercentage, StAtkeys.GeoDmgBonus],
    [ArtifactSlotKeys.Circlet]: StatsCrit,
    additional: [...StatsCrit, StAtkeys.AtkPercentage, StAtkeys.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
