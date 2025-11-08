import { artifactSetById, StatsCrit, StatsElementDamageBonus, weaponById } from "./_help";
import { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "@/classes/artifact-set-recommendations";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new ArtifactSetRecommendations(ARTIFACT_SETS.GOLDEN_TROUPE)
  .setCharacters([
    new ArtifactSetCharacterRecommendation(CharacterIds.Albedo).setNotes([
      "Так как элементальный навык Альбедо наносит его основной урон, даже когда тот не находится на поле, этот набор "
      + "подходит Альбедо, особенно при наличии " + weaponById(WeaponIds.CinnabarSpindle) + ".",
      "2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами "
      + artifactSetById(ARTIFACT_SETS.HUSK_OF_OPULENT_DREAMS) + ".",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Escoffier),
    new ArtifactSetCharacterRecommendation(CharacterIds.Fischl).setIsBetter().setNotes([
      "Лучший комплект для Фишль в роли дополнительного урона, так как её элементальный навык наносит основной урон и "
      + "действует, даже когда Фишль не находится на поле.",
      "2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами "
      + artifactSetById(ARTIFACT_SETS.THUNDERING_FURY) + " или " + artifactSetById(ARTIFACT_SETS.GLADIATORS_FINALE)
      + " (или другими с аналогичными бонусами).",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Furina).setIsBetter().setNotes([
      "Лучший комплект для Фурины, так как её элементальный навык является основным талантом, при этом Фурина наносит "
      + "урон, не находясь на поле.",
      "2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами "
      + artifactSetById(ARTIFACT_SETS.TENACITY_OF_THE_MILLELITH) + " / " + artifactSetById(ARTIFACT_SETS.VOURUKASHAS_GLOW)
      + ".",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Nahida).setNotes([
      "Подходит Нахиде в роли дополнительного урона, когда она не находится на поле. Рекомендуется иметь в команде "
      + "персонажа с полным комплектом " + artifactSetById(ARTIFACT_SETS.DEEPWOOD_MEMORIES) + ".",
      "2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами "
      + artifactSetById(ARTIFACT_SETS.DEEPWOOD_MEMORIES) + " или " + artifactSetById(ARTIFACT_SETS.GILDED_DREAMS) + " "
      + "(или другими с аналогичными бонусами).",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.Navia).setNotes([
      "Элементальный навык наносит основной урон Навии, поэтому увеличение урона будет ей полезно. Рекомендуется "
      + "использовать элементальный навык сразу при выходе на поле, пока действует бонус 70%.",
      `2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами `
      + artifactSetById(ARTIFACT_SETS.NIGHTTIME_WHISPERS_IN_THE_ECHOING_WOODS) + " или "
      + artifactSetById(ARTIFACT_SETS.ARCHAIC_PETRA) + " (или другими с аналогичными бонусами).",
    ]),
    new ArtifactSetCharacterRecommendation(CharacterIds.YaeMiko).setIsBetter().setNotes([
      "Элементальный навык Яэ Мико наносит достаточно большой урон, даже когда она не находится на поле, поэтому "
      + "комплект будет ей полезен.",
      "2 предмета набора увеличат урон элементального навыка на 20%. Рекомендуется сочетать с 2 предметами "
      + artifactSetById(ARTIFACT_SETS.THUNDERING_FURY) + " или " + artifactSetById(ARTIFACT_SETS.GLADIATORS_FINALE)
      + " (или другими с аналогичными бонусами).",
    ]),
  ])
  .setPreferredStats({
    [ARTIFACT_SLOTS.SANDS]: [STATS.ATK_PERCENTAGE, STATS.ELEMENTAL_MASTERY, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.GOBLET]: [...StatsElementDamageBonus, STATS.HP_PERCENTAGE],
    [ARTIFACT_SLOTS.CIRCLET]: StatsCrit,
    additional: [
      ...StatsCrit, STATS.ATK_PERCENTAGE, STATS.ELEMENTAL_MASTERY, STATS.ENERGY_RECHARGE, STATS.HP_PERCENTAGE,
    ],
  })
  .setVideoSourceIds([VideoSourceIds.AllAboutAllArtifactSets]);
