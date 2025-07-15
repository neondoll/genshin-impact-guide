import { CharacterUidEnum } from "../enums/character";
import { TalentUidEnum } from "../enums/talent";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.KaedeharaKazuha,
  first_constellation_or_signature_weapon: "С1",
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "По необходимости\n(8)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Во вторую очередь\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "В первую очередь\n(10)" },
  ],
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
    { uid: WeaponUidEnum.FreedomSworn, refinement: 1 },
    { uid: WeaponUidEnum.FavoniusSword, refinement: 5 },
    { uid: WeaponUidEnum.XiphosMoonlight, refinement: 5, is_better: true },
  ],
} as CharacterRecommendations;
