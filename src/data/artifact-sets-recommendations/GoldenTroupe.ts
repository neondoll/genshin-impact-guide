import { artifactSetById, StatsCrit, StatsElementDamageBonus, weaponById } from "./_help";
import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new ArtifactSetRecommendations(ArtifactSetIds.GoldenTroupe)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Albedo).setNotes([
      "Так как элементальный навык Альбедо наносит его основной урон, даже когда тот не находится на поле, этот набор "
      + "подходит Альбедо, особенно при наличии " + weaponById(WeaponIds.CinnabarSpindle) + ".",
      "2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами "
      + artifactSetById(ArtifactSetIds.HuskOfOpulentDreams) + ".",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Escoffier),
    new ArtifactSetCharacterRecommendation(CharacterIds.Fischl).setIsBetter().setNotes([
      "Лучший комплект для Фишль в роли дополнительного урона, так как её элементальный навык наносит основной урон и "
      + "действует, даже когда Фишль не находится на поле.",
      "2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами "
      + artifactSetById(ArtifactSetIds.ThunderingFury) + " или " + artifactSetById(ArtifactSetIds.GladiatorsFinale)
      + " (или другими с аналогичными бонусами).",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Furina).setIsBetter().setNotes([
      "Лучший комплект для Фурины, так как её элементальный навык является основным талантом, при этом Фурина наносит "
      + "урон, не находясь на поле.",
      "2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами "
      + artifactSetById(ArtifactSetIds.TenacityOfTheMillelith) + " / " + artifactSetById(ArtifactSetIds.VourukashasGlow)
      + ".",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Nahida).setNotes([
      "Подходит Нахиде в роли дополнительного урона, когда она не находится на поле. Рекомендуется иметь в команде "
      + "персонажа с полным комплектом " + artifactSetById(ArtifactSetIds.DeepwoodMemories) + ".",
      "2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами "
      + artifactSetById(ArtifactSetIds.DeepwoodMemories) + " или " + artifactSetById(ArtifactSetIds.GildedDreams) + " "
      + "(или другими с аналогичными бонусами).",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Navia).setNotes([
      "Элементальный навык наносит основной урон Навии, поэтому увеличение урона будет ей полезно. Рекомендуется "
      + "использовать элементальный навык сразу при выходе на поле, пока действует бонус 70%.",
      `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами `
      + artifactSetById(ArtifactSetIds.NighttimeWhispersInTheEchoingWoods) + " или "
      + artifactSetById(ArtifactSetIds.ArchaicPetra) + " (или другими с аналогичными бонусами).",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.YaeMiko).setIsBetter().setNotes([
      "Элементальный навык Яэ Мико наносит достаточно большой урон, даже когда она не находится на поле, поэтому "
      + "комплект будет ей полезен.",
      "2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами "
      + artifactSetById(ArtifactSetIds.ThunderingFury) + " или " + artifactSetById(ArtifactSetIds.GladiatorsFinale)
      + " (или другими с аналогичными бонусами).",
    ]),
  ])
  .setPreferredStats({
    [ArtifactSlotIds.Sands]: [StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.HpPercentage],
    [ArtifactSlotIds.Goblet]: [...StatsElementDamageBonus, StatIds.HpPercentage],
    [ArtifactSlotIds.Circlet]: StatsCrit,
    additional: [...StatsCrit, StatIds.AtkPercentage, StatIds.ElementalMastery, StatIds.EnergyRecharge, StatIds.HpPercentage],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
