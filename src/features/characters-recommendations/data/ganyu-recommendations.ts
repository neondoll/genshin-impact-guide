import type { CharacterRecommendations } from "@/features/characters-recommendations/types";
import { CharacterIds } from "../../characters/enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default {
  character_key: CharacterIds.Ganyu,
  first_constellation_or_signature_weapon: "С1",
  talent_leveling: {
    Мелт: [
      { key: TalentKeys.NormalAttack, priority: "В первую очередь\n(10)" },
      { key: TalentKeys.ElementalSkill, priority: "Во вторую очередь\n(8)" },
      { key: TalentKeys.ElementalBurst, priority: "Не качаем\n(1)" },
    ],
    Фриз: [
      { key: TalentKeys.NormalAttack, priority: "В первую очередь\n(10)" },
      { key: TalentKeys.ElementalSkill, priority: "Во вторую очередь\n(8)" },
      { key: TalentKeys.ElementalBurst, priority: "По необходимости\n(6)" },
    ],
    Саппорт: [
      { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
      { key: TalentKeys.ElementalSkill, priority: "Во вторую очередь\n(6)" },
      { key: TalentKeys.ElementalBurst, priority: "В первую очередь\n(8)" },
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
    { key: WeaponKeys.AstralVulturesCrimsonPlumage, refinement: 1, is_better: true },
    { key: WeaponKeys.AmosBow, refinement: 1 },
    { key: WeaponKeys.ElegyForTheEnd, refinement: 1 },
    { key: WeaponKeys.SongOfStillness, refinement: 5 },
  ],
} as CharacterRecommendations;
