import { ArtifactPieceUidEnum } from "../enums/artifact-piece.ts";
import { ArtifactSetUidEnum } from "../enums/artifact-set.ts";
import { AttributeUidEnum } from "../enums/attribute.ts";
import { CharacterUidEnum } from "../enums/character";
import { TalentUidEnum } from "../enums/talent";
import { WeaponUidEnum } from "../enums/weapon.ts";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
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
        { uid: AttributeUidEnum.ATKPercentage },
        { uid: AttributeUidEnum.EnergyRecharge },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [{ uid: AttributeUidEnum.ATKPercentage }],
      [ArtifactPieceUidEnum.CircletOfLogos]: [{ uid: AttributeUidEnum.ATKPercentage }],
      additional: [
        { uid: AttributeUidEnum.EnergyRecharge, notes: ["Приоритетно", "от 160%"] },
        {
          uid: AttributeUidEnum.ATKPercentage,
          notes: ["от 2000", "2556 для 10 Ур. Взрыва стихии", "3000 для 13 Ур. Взрыва стихии"],
        },
        { uid: AttributeUidEnum.CRITRate },
        { uid: AttributeUidEnum.CRITDMG },
      ],
    },
  },
  character_uid: CharacterUidEnum.Iansan,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1 - 6)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Не качаем\n(1 - 6)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "В первую очередь\n(10)" },
  ],
  weapons: [
    { uid: WeaponUidEnum.SkywardSpine },
    { uid: WeaponUidEnum.TamayurateiNoOhanashi },
    { uid: WeaponUidEnum.FavoniusLance },
  ],
} as CharacterRecommendations;
