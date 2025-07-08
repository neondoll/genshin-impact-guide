import { ArtifactPieceUidEnum } from "../enums/artifact-pieces";
import { ArtifactSetUidEnum } from "../enums/artifact-sets";
import { AttributeUidEnum } from "../enums/attributes";
import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import { WeaponUidEnum } from "../enums/weapons";
import type { CharacterRecommendation } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.Furina,
  artifact_recommendations: {
    sets: [{ uid: ArtifactSetUidEnum.GoldenTroupe }],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.EnergyRecharge },
        { uid: AttributeUidEnum.HealthPercent },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.HydroDamageBonus },
        { uid: AttributeUidEnum.HealthPercent, description: "Лучше в подавляющем числе ситуаций" },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalRate },
        { uid: AttributeUidEnum.CriticalDamage },
      ],
      additional: [
        {
          uid: AttributeUidEnum.EnergyRecharge,
          description: "В отрядах без доп. подкачки - 200% - 220% ВЭ\nВ отрядах с доп. подкачкой - 160% - 180% ВЭ\nВ отрядах с Е Лань или Син Цю - 130% - 140% ВЭ\nВ отрядах с 3 Гидро и более - 100% ВЭ",
        },
        { uid: AttributeUidEnum.HealthPercent },
        { uid: AttributeUidEnum.CriticalRate },
        { uid: AttributeUidEnum.CriticalDamage },
      ],
    },
  },
  assembly_weapons: {
    "Без реакций - 120% ВЭ+": [
      { uid: WeaponUidEnum.SplendorOfTranquilWaters, percent: 1.3648 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(с гео)", percent: 1.3306 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(без гео)", percent: 1.2265 },
      { uid: WeaponUidEnum.PrimordialJadeCutter, percent: 1.2139 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(работает)", percent: 1.1795 },
      { uid: WeaponUidEnum.LightOfFoliarIncision, percent: 1.1536 },
      { uid: WeaponUidEnum.KeyOfKhajNisut, percent: 1.1298 },
      { uid: WeaponUidEnum.WolfFang, refinement: 5, percent: 1.1268 },
      { uid: WeaponUidEnum.FesteringDesire, percent: 1.0924 },
      { uid: WeaponUidEnum.WolfFang, refinement: 1, percent: 1.0648 },
      { uid: WeaponUidEnum.FleuveCendreFerryman, refinement: 5, percent: 1 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(не работает)", percent: 0.9745 },
      { uid: WeaponUidEnum.TheDockhandsAssistant, refinement: 5, percent: 0.9637 },
      { uid: WeaponUidEnum.FavoniusSword, refinement: 5, percent: 0.8936 },
    ],
    "Без реакций - 170% ВЭ+": [
      { uid: WeaponUidEnum.SplendorOfTranquilWaters, percent: 1.1296 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(с гео)", percent: 1.0842 },
      { uid: WeaponUidEnum.FleuveCendreFerryman, refinement: 5, percent: 1 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(без гео)", percent: 0.9999 },
      { uid: WeaponUidEnum.PrimordialJadeCutter, percent: 0.9964 },
      { uid: WeaponUidEnum.FesteringDesire, percent: 0.9878 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(работает)", percent: 0.9627 },
      { uid: WeaponUidEnum.KeyOfKhajNisut, percent: 0.9578 },
      { uid: WeaponUidEnum.LightOfFoliarIncision, percent: 0.9402 },
      { uid: WeaponUidEnum.WolfFang, refinement: 5, percent: 0.9153 },
      { uid: WeaponUidEnum.FavoniusSword, refinement: 5, percent: 0.8936 },
      { uid: WeaponUidEnum.WolfFang, refinement: 1, percent: 0.8648 },
      { uid: WeaponUidEnum.TheDockhandsAssistant, refinement: 5, percent: 0.8080 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(не работает)", percent: 0.7894 },
    ],
    "Без реакций - 220% ВЭ+": [
      { uid: WeaponUidEnum.SplendorOfTranquilWaters, percent: 1.0893 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(с гео)", percent: 1.0421 },
      { uid: WeaponUidEnum.FleuveCendreFerryman, refinement: 5, percent: 1 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(без гео)", percent: 0.9604 },
      { uid: WeaponUidEnum.PrimordialJadeCutter, percent: 0.9597 },
      { uid: WeaponUidEnum.FesteringDesire, percent: 0.9498 },
      { uid: WeaponUidEnum.KeyOfKhajNisut, percent: 0.9254 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(работает)", percent: 0.9232 },
      { uid: WeaponUidEnum.LightOfFoliarIncision, percent: 0.9048 },
      { uid: WeaponUidEnum.WolfFang, refinement: 5, percent: 0.8798 },
      { uid: WeaponUidEnum.FavoniusSword, refinement: 5, percent: 0.8725 },
      { uid: WeaponUidEnum.WolfFang, refinement: 1, percent: 0.8314 },
      { uid: WeaponUidEnum.TheDockhandsAssistant, refinement: 5, percent: 0.7762 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(не работает)", percent: 0.7608 },
    ],
    "Фурина вейпит - 180% ВЭ+": [
      { uid: WeaponUidEnum.SplendorOfTranquilWaters, percent: 1.2547 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(с гео)", percent: 1.1969 },
      { uid: WeaponUidEnum.KeyOfKhajNisut, percent: 1.1464 },
      { uid: WeaponUidEnum.PrimordialJadeCutter, percent: 1.1087 },
      { uid: WeaponUidEnum.UrakuMisugiri, postfix: "(без гео)", percent: 1.1043 },
      { uid: WeaponUidEnum.FesteringDesire, percent: 1.0906 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(работает)", percent: 1.0652 },
      { uid: WeaponUidEnum.LightOfFoliarIncision, percent: 1.0406 },
      { uid: WeaponUidEnum.WolfFang, refinement: 5, percent: 1.0101 },
      { uid: WeaponUidEnum.FleuveCendreFerryman, refinement: 5, percent: 1 },
      { uid: WeaponUidEnum.FavoniusSword, refinement: 5, percent: 0.9592 },
      { uid: WeaponUidEnum.WolfFang, refinement: 1, percent: 0.9552 },
      { uid: WeaponUidEnum.TheDockhandsAssistant, refinement: 5, percent: 0.9425 },
      { uid: WeaponUidEnum.HarbingerOfDawn, refinement: 5, postfix: "(не работает)", percent: 0.8743 },
    ],
  },
  reference_point: [["Макс. HP", "33 000"], ["Восст. энергии", "170%"], ["Крит. шанс", "60%"], ["Крит. урон", "140%"]],
  talent_leveling_recommendations: [
    { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Максимальный приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Максимальный приоритет\n(10)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
} as CharacterRecommendation;
