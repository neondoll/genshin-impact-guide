import type { IArtifactSetRecommendations } from "../types";
import { artifactSetByKey, StatsCrit, StatsElementDamageBonus } from "./_help.ts";
import { ArtifactSetKeys } from "../../artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../stats/enums";

export default {
  artifact_set_key: ArtifactSetKeys.ViridescentVenerer,
  characters: [
    {
      key: CharacterKeys.Jean,
      is_better: true,
      notes: `Анемо персонаж поддержки, который наносит Анемо урон, вызывает реакцию Рассеивание и лечит отряд. Она может использовать как полный комплект, так и только 2 его предмета, сочетая с 2 предметами набора ${artifactSetByKey(ArtifactSetKeys.MaidenBeloved)} или аналогами, если команде не хватает лечения, или с 2 предметами ${artifactSetByKey(ArtifactSetKeys.GladiatorsFinale)} (или аналогами), так как лечение Джинн зависит от силы атаки. 2 предмета набора ${artifactSetByKey(ArtifactSetKeys.ViridescentVenerer)} в таком случае можно заменить ${artifactSetByKey(ArtifactSetKeys.DesertPavilionChronicle)}.`,
    },
    {
      key: CharacterKeys.KaedeharaKazuha,
      is_better: true,
      notes: `Анемо персонаж, играющий от реакции Рассеивание, поэтому ему будут полезны бонусы полного комплекта. Кроме того, набор снизит сопротивление врагов к соответствующему элементу при реакции Рассеивание.\n${artifactSetByKey(ArtifactSetKeys.ViridescentVenerer)} - лучший комплект для Кадзухи.`,
    },
    {
      key: CharacterKeys.ShikanoinHeizou,
      is_better: true,
      notes: `Хэйдзо является, как правило, персонажем, наносящим основной Анемо урон в команде. Он может использовать как бонусы только 2 предметов, так и бонус всего комплекта при игре через реакцию Рассеивание. 2 предмета набора лучше всего сочетать с 2 предметами набора ${artifactSetByKey(ArtifactSetKeys.GladiatorsFinale)} или другими с аналогичными бонусами. В таком случае 2 предмета набора ${artifactSetByKey(ArtifactSetKeys.ViridescentVenerer)} можно заменить ${artifactSetByKey(ArtifactSetKeys.DesertPavilionChronicle)}.`,
    },
    {
      key: CharacterKeys.Sayu,
      notes: `Анемо персонаж поддержки, который наносит Анемо урон, вызывает реакцию Рассеивание и лечит отряд. Она может использовать как полный комплект, так и только 2 его предмета, сочетая с 2 предметами набора ${artifactSetByKey(ArtifactSetKeys.MaidenBeloved)} или аналогами, если команде не хватает лечения, или с 2 предметами ${artifactSetByKey(ArtifactSetKeys.GladiatorsFinale)} (или аналогами), так как лечение Саю зависит от силы атаки. 2 предмета набора ${artifactSetByKey(ArtifactSetKeys.ViridescentVenerer)} в таком случае можно заменить ${artifactSetByKey(ArtifactSetKeys.DesertPavilionChronicle)}.`,
    },
    {
      key: CharacterKeys.Sucrose,
      is_better: true,
      notes: `Так как Сахароза является Анемо персонажем, играющим от реакции Рассеивание, ей будут полезны бонусы полного комплекта. Кроме того, этот комплект будет очень полезен для остальных членов отряда, так как реакция Рассеивание будет понижать сопротивление противников к соответствующему элементу.\n${artifactSetByKey(ArtifactSetKeys.ViridescentVenerer)} является лучшим комплектом для Сахарозы.`,
    },
    {
      key: CharacterKeys.Venti,
      is_better: true,
      notes: `Анемо персонаж поддержки, вызывающий реакцию Рассеивание, поэтому ему подойдет бонус полного комплекта. Кроме того, набор снизит сопротивление врагов к соответствующему элементу при данной реакции.\n${artifactSetByKey(ArtifactSetKeys.ViridescentVenerer)} - лучший комплект для Венти.`,
    },
    {
      key: CharacterKeys.Xiao,
      notes: `Персонаж, наносящий основной Анемо урон в команде, поэтому ему будут полезны бонусы 2 предметов. Для лучшего эффекта сочетать с 2 предметами набора ${artifactSetByKey(ArtifactSetKeys.GladiatorsFinale)} или другими с аналогичными бонусами. 2 предмета набора ${artifactSetByKey(ArtifactSetKeys.ViridescentVenerer)} можно заменить ${artifactSetByKey(ArtifactSetKeys.DesertPavilionChronicle)}.`,
    },
  ],
  preferred_stats: {
    [ArtifactSlotKeys.Sands]: [StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge],
    [ArtifactSlotKeys.Goblet]: [...StatsElementDamageBonus, StatKeys.ElementalMastery],
    [ArtifactSlotKeys.Circlet]: [...StatsCrit, StatKeys.ElementalMastery],
    additional: [...StatsCrit, StatKeys.AtkPercentage, StatKeys.ElementalMastery, StatKeys.EnergyRecharge],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as IArtifactSetRecommendations;
