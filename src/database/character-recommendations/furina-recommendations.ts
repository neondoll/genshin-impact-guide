import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import { TalentKeys } from "../enums/talent";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [{ key: ArtifactSetKeys.GoldenTroupe }],
    stats: {
      [ArtifactSlotKeys.SandsOfEon]: [{ key: StatKeys.EnergyRecharge }, { key: StatKeys.HPPercentage }],
      [ArtifactSlotKeys.GobletOfEonothem]: [
        { key: StatKeys.HydroDMGBonus },
        { key: StatKeys.HPPercentage, description: "Лучше в подавляющем числе ситуаций" },
      ],
      [ArtifactSlotKeys.CircletOfLogos]: [{ key: StatKeys.CRITRate }, { key: StatKeys.CRITDMG }],
      additional: [
        {
          key: StatKeys.EnergyRecharge,
          description: "В отрядах без доп. подкачки - 200% - 220% ВЭ\nВ отрядах с доп. подкачкой - 160% - 180% ВЭ\nВ отрядах с Е Лань или Син Цю - 130% - 140% ВЭ\nВ отрядах с 3 Гидро и более - 100% ВЭ",
        },
        { key: StatKeys.HPPercentage },
        { key: StatKeys.CRITRate },
        { key: StatKeys.CRITDMG },
      ],
    },
  },
  character_key: CharacterKeys.Furina,
  reference_point: [["Макс. HP", "33 000"], ["Восст. энергии", "170%"], ["Крит. шанс", "60%"], ["Крит. урон", "140%"]],
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
    { key: TalentKeys.ElementalSkill, priority: "В первую очередь\n(10)" },
    { key: TalentKeys.ElementalBurst, priority: "Во вторую очередь\n(10)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: {
    "Без реакций - 120% ВЭ+": [
      { key: WeaponKeys.SplendorOfTranquilWaters, is_better: true, percent: 1.3648 },
      { key: WeaponKeys.UrakuMisugiri, postfix: "(с гео)", percent: 1.3306 },
      { key: WeaponKeys.UrakuMisugiri, postfix: "(без гео)", percent: 1.2265 },
      { key: WeaponKeys.PrimordialJadeCutter, percent: 1.2139 },
      { key: WeaponKeys.HarbingerOfDawn, refinement: 5, postfix: "(работает)", percent: 1.1795 },
      { key: WeaponKeys.LightOfFoliarIncision, percent: 1.1536 },
      { key: WeaponKeys.KeyOfKhajNisut, percent: 1.1298 },
      { key: WeaponKeys.WolfFang, refinement: 5, percent: 1.1268 },
      { key: WeaponKeys.FesteringDesire, percent: 1.0924 },
      { key: WeaponKeys.WolfFang, refinement: 1, percent: 1.0648 },
      { key: WeaponKeys.FleuveCendreFerryman, refinement: 5, percent: 1 },
      { key: WeaponKeys.HarbingerOfDawn, refinement: 5, postfix: "(не работает)", percent: 0.9745 },
      { key: WeaponKeys.TheDockhandsAssistant, refinement: 5, percent: 0.9637 },
      { key: WeaponKeys.FavoniusSword, refinement: 5, percent: 0.8936 },
    ],
    "Без реакций - 170% ВЭ+": [
      { key: WeaponKeys.SplendorOfTranquilWaters, is_better: true, percent: 1.1296 },
      { key: WeaponKeys.UrakuMisugiri, postfix: "(с гео)", percent: 1.0842 },
      { key: WeaponKeys.FleuveCendreFerryman, refinement: 5, percent: 1 },
      { key: WeaponKeys.UrakuMisugiri, postfix: "(без гео)", percent: 0.9999 },
      { key: WeaponKeys.PrimordialJadeCutter, percent: 0.9964 },
      { key: WeaponKeys.FesteringDesire, percent: 0.9878 },
      { key: WeaponKeys.HarbingerOfDawn, refinement: 5, postfix: "(работает)", percent: 0.9627 },
      { key: WeaponKeys.KeyOfKhajNisut, percent: 0.9578 },
      { key: WeaponKeys.LightOfFoliarIncision, percent: 0.9402 },
      { key: WeaponKeys.WolfFang, refinement: 5, percent: 0.9153 },
      { key: WeaponKeys.FavoniusSword, refinement: 5, percent: 0.8936 },
      { key: WeaponKeys.WolfFang, refinement: 1, percent: 0.8648 },
      { key: WeaponKeys.TheDockhandsAssistant, refinement: 5, percent: 0.8080 },
      { key: WeaponKeys.HarbingerOfDawn, refinement: 5, postfix: "(не работает)", percent: 0.7894 },
    ],
    "Без реакций - 220% ВЭ+": [
      { key: WeaponKeys.SplendorOfTranquilWaters, is_better: true, percent: 1.0893 },
      { key: WeaponKeys.UrakuMisugiri, postfix: "(с гео)", percent: 1.0421 },
      { key: WeaponKeys.FleuveCendreFerryman, refinement: 5, percent: 1 },
      { key: WeaponKeys.UrakuMisugiri, postfix: "(без гео)", percent: 0.9604 },
      { key: WeaponKeys.PrimordialJadeCutter, percent: 0.9597 },
      { key: WeaponKeys.FesteringDesire, percent: 0.9498 },
      { key: WeaponKeys.KeyOfKhajNisut, percent: 0.9254 },
      { key: WeaponKeys.HarbingerOfDawn, refinement: 5, postfix: "(работает)", percent: 0.9232 },
      { key: WeaponKeys.LightOfFoliarIncision, percent: 0.9048 },
      { key: WeaponKeys.WolfFang, refinement: 5, percent: 0.8798 },
      { key: WeaponKeys.FavoniusSword, refinement: 5, percent: 0.8725 },
      { key: WeaponKeys.WolfFang, refinement: 1, percent: 0.8314 },
      { key: WeaponKeys.TheDockhandsAssistant, refinement: 5, percent: 0.7762 },
      { key: WeaponKeys.HarbingerOfDawn, refinement: 5, postfix: "(не работает)", percent: 0.7608 },
    ],
    "Фурина вейпит - 180% ВЭ+": [
      { key: WeaponKeys.SplendorOfTranquilWaters, is_better: true, percent: 1.2547 },
      { key: WeaponKeys.UrakuMisugiri, postfix: "(с гео)", percent: 1.1969 },
      { key: WeaponKeys.KeyOfKhajNisut, percent: 1.1464 },
      { key: WeaponKeys.PrimordialJadeCutter, percent: 1.1087 },
      { key: WeaponKeys.UrakuMisugiri, postfix: "(без гео)", percent: 1.1043 },
      { key: WeaponKeys.FesteringDesire, percent: 1.0906 },
      { key: WeaponKeys.HarbingerOfDawn, refinement: 5, postfix: "(работает)", percent: 1.0652 },
      { key: WeaponKeys.LightOfFoliarIncision, percent: 1.0406 },
      { key: WeaponKeys.WolfFang, refinement: 5, percent: 1.0101 },
      { key: WeaponKeys.FleuveCendreFerryman, refinement: 5, percent: 1 },
      { key: WeaponKeys.FavoniusSword, refinement: 5, percent: 0.9592 },
      { key: WeaponKeys.WolfFang, refinement: 1, percent: 0.9552 },
      { key: WeaponKeys.TheDockhandsAssistant, refinement: 5, percent: 0.9425 },
      { key: WeaponKeys.HarbingerOfDawn, refinement: 5, postfix: "(не работает)", percent: 0.8743 },
    ],
  },
} as CharacterRecommendations;
