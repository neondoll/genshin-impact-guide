import { CharacterUidEnum } from "../enums/character";
import { TalentUidEnum } from "../enums/talent";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.Ganyu,
  first_constellation_or_signature_weapon: "С1",
  talent_leveling: {
    Мелт: [
      { uid: TalentUidEnum.NormalAttack, priority: "В первую очередь\n(10)" },
      { uid: TalentUidEnum.ElementalSkill, priority: "Во вторую очередь\n(8)" },
      { uid: TalentUidEnum.ElementalBurst, priority: "Не качаем\n(1)" },
    ],
    Фриз: [
      { uid: TalentUidEnum.NormalAttack, priority: "В первую очередь\n(10)" },
      { uid: TalentUidEnum.ElementalSkill, priority: "Во вторую очередь\n(8)" },
      { uid: TalentUidEnum.ElementalBurst, priority: "По необходимости\n(6)" },
    ],
    Саппорт: [
      { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
      { uid: TalentUidEnum.ElementalSkill, priority: "Во вторую очередь\n(6)" },
      { uid: TalentUidEnum.ElementalBurst, priority: "В первую очередь\n(8)" },
    ],
  },
  video_sources: [
    {
      title: "Miron MinMax: С1 или Сигна? Что Лучше и Насколько? | Про Всех 5★ Персонажей",
      youtube_url: "https://youtu.be/NfgsESKwsdk",
    },
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { uid: WeaponUidEnum.AstralVulturesCrimsonPlumage, refinement: 1, is_better: true },
    { uid: WeaponUidEnum.AmosBow, refinement: 1 },
    { uid: WeaponUidEnum.ElegyForTheEnd, refinement: 1 },
    { uid: WeaponUidEnum.SongOfStillness, refinement: 5 },
  ],
} as CharacterRecommendations;
