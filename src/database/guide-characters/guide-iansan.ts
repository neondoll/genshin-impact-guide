import { ArtifactPieceUidEnum } from "../enums/artifact-pieces";
import { ArtifactSetUidEnum } from "../enums/artifact-sets";
import { AttributeUidEnum } from "../enums/attributes";
import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import { WeaponUidEnum } from "../enums/weapons";
import type { CharacterRecommendation } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.Iansan,
  artifact_recommendations: {
    sets: [
      {
        uid: ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity,
        is_better: true,
        notes: [
          "Лучший набор для Иансан, так как восстановит ей энергию и увеличит элементальный урон основного персонажа.",
          "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
        ],
      },
      {
        uid: ArtifactSetUidEnum.NoblesseOblige,
        notes: [
          "Увеличит урон взрыва стихии Иансан и силу атаки отряду.",
          "Рекомендуется использовать, если другие члены отряда не носят данный комплект.",
        ],
      },
    ],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.AttackPercent },
        { uid: AttributeUidEnum.EnergyRecharge },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [{ uid: AttributeUidEnum.AttackPercent }],
      [ArtifactPieceUidEnum.CircletOfLogos]: [{ uid: AttributeUidEnum.AttackPercent }],
      additional: [
        { uid: AttributeUidEnum.EnergyRecharge, notes: ["Приоритетно", "от 160%"] },
        {
          uid: AttributeUidEnum.AttackPercent,
          notes: ["от 2000", "2556 для 10 Ур. Взрыва стихии", "3000 для 13 Ур. Взрыва стихии"],
        },
        { uid: AttributeUidEnum.CriticalRate },
        { uid: AttributeUidEnum.CriticalDamage },
      ],
    },
  },
  assembly_weapons: [
    { uid: WeaponUidEnum.SkywardSpine },
    { uid: WeaponUidEnum.TamayurateiNoOhanashi },
    { uid: WeaponUidEnum.FavoniusLance },
  ],
  talent_leveling_recommendations: [
    { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1 - 6)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Игнорируем\n(1 - 6)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Высокий приоритет\n(10)" },
  ],
} as CharacterRecommendation;
