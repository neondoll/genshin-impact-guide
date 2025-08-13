import { artifactSetByKey, StatsCrit, StatsElementDamageBonus } from "./help";
import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_key: ArtifactSetKeys.VourukashasGlow,
  characters: [
    {
      key: CharacterKeys.Dehya,
      is_better: true,
      notes: `Сияние Вурукаши - один из лучших комплектов для позиции основного урона и поддержки. Бонус 4 предметов увеличит урон Дэхьи, так как она получает урон, даже если не находится на поле.\nМожет использовать как полный комплект, так и 2 предмета, сочетая их с ${artifactSetByKey(ArtifactSetKeys.CrimsonWitchOfFlames)}, ${artifactSetByKey(ArtifactSetKeys.WanderersTroupe)}, ${artifactSetByKey(ArtifactSetKeys.GildedDreams)}, ${artifactSetByKey(ArtifactSetKeys.FlowerOfParadiseLost)} или ${artifactSetByKey(ArtifactSetKeys.TenacityOfTheMillelith)} в зависимости от позиции. В данных случаях ${artifactSetByKey(ArtifactSetKeys.VourukashasGlow)} может быть заменён ${artifactSetByKey(ArtifactSetKeys.TenacityOfTheMillelith)}, если не используются оба комплекта.`,
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
