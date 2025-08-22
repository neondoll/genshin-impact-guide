import type { ArtifactSetRecommendations } from "../types";
import { artifactSetById, StatsCrit, StatsElementDamageBonus } from "./_help";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "@/database/artifact-slots/enums";
import { CharacterKeys } from "@/database/characters/enums";
import { StatKeys } from "@/database/stats/enums";

export default {
  artifact_set_id: ArtifactSetIds.VourukashasGlow,
  characters: [
    {
      key: CharacterKeys.Dehya,
      is_better: true,
      notes: `Сияние Вурукаши - один из лучших комплектов для позиции основного урона и поддержки. Бонус 4 предметов увеличит урон Дэхьи, так как она получает урон, даже если не находится на поле.\nМожет использовать как полный комплект, так и 2 предмета, сочетая их с ${artifactSetById(ArtifactSetIds.CrimsonWitchOfFlames)}, ${artifactSetById(ArtifactSetIds.WanderersTroupe)}, ${artifactSetById(ArtifactSetIds.GildedDreams)}, ${artifactSetById(ArtifactSetIds.FlowerOfParadiseLost)} или ${artifactSetById(ArtifactSetIds.TenacityOfTheMillelith)} в зависимости от позиции. В данных случаях ${artifactSetById(ArtifactSetIds.VourukashasGlow)} может быть заменён ${artifactSetById(ArtifactSetIds.TenacityOfTheMillelith)}, если не используются оба комплекта.`,
    },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.HpPercentage],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StatKeys.AtkPercentage],
    [ArtifactSlotKeys.Circlet]: StatsCrit,
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
} as ArtifactSetRecommendations;
