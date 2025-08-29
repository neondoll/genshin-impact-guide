import { artifactSetById, StatsCrit, StatsElementDamageBonus, weaponById } from "./_help";
import { ArtifactSetCharacterRecommendationClass, ArtifactSetRecommendationsClass } from "../classes";
import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSetRecommendationsVideoSources } from "../enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CharacterIds } from "../../characters/enums";
import { StatIds } from "../../stats/enums";
import { WeaponIds } from "../../weapons/enums";

export default ArtifactSetRecommendationsClass.init([ArtifactSetIds.GoldenTroupe, [
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Albedo).setNotes([
    `Так как элементальный навык Альбедо наносит его основной урон, даже когда тот не находится на поле, этот набор подходит Альбедо, особенно при наличии ${weaponById(WeaponIds.CinnabarSpindle)}.`,
    `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetById(ArtifactSetIds.HuskOfOpulentDreams)}.`,
  ]),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Escoffier),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Fischl).setIsBetter().setNotes([
    "Лучший комплект для Фишль в роли дополнительного урона, так как её элементальный навык наносит основной урон и действует, даже когда Фишль не находится на поле.",
    `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetById(ArtifactSetIds.ThunderingFury)} или ${artifactSetById(ArtifactSetIds.GladiatorsFinale)} (или другими с аналогичными бонусами).`,
  ]),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Furina).setIsBetter().setNotes([
    "Лучший комплект для Фурины, так как её элементальный навык является основным талантом, при этом Фурина наносит урон, не находясь на поле.",
    `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetById(ArtifactSetIds.TenacityOfTheMillelith)} / ${artifactSetById(ArtifactSetIds.VourukashasGlow)}.`,
  ]),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Nahida).setNotes([
    `Подходит Нахиде в роли дополнительного урона, когда она не находится на поле. Рекомендуется иметь в команде персонажа с полным комплектом ${artifactSetById(ArtifactSetIds.DeepwoodMemories)}.`,
    `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetById(ArtifactSetIds.DeepwoodMemories)} или ${artifactSetById(ArtifactSetIds.GildedDreams)} (или другими с аналогичными бонусами).`,
  ]),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.Navia).setNotes([
    "Элементальный навык наносит основной урон Навии, поэтому увеличение урона будет ей полезно. Рекомендуется использовать элементальный навык сразу при выходе на поле, пока действует бонус 70%.",
    `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetById(ArtifactSetIds.NighttimeWhispersInTheEchoingWoods)} или ${artifactSetById(ArtifactSetIds.ArchaicPetra)} (или другими с аналогичными бонусами).`,
  ]),
  new ArtifactSetCharacterRecommendationClass(CharacterIds.YaeMiko).setIsBetter().setNotes([
    "Элементальный навык Яэ Мико наносит достаточно большой урон, даже когда она не находится на поле, поэтому комплект будет ей полезен.",
    `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами ${artifactSetById(ArtifactSetIds.ThunderingFury)} или ${artifactSetById(ArtifactSetIds.GladiatorsFinale)} (или другими с аналогичными бонусами).`,
  ]),
]])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSources([ArtifactSetRecommendationsVideoSources.AllAboutAll]);
