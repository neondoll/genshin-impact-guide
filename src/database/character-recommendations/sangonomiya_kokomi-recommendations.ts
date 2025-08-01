import { CharacterUidEnum } from "../enums/character";
import { TalentUidEnum } from "../enums/talent";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.SangonomiyaKokomi,
  first_constellation_or_signature_weapon: "Сигна",
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "По необходимости\n(6)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "В первую очередь\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Во вторую очередь\n(8)" },
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
    { uid: WeaponUidEnum.ThrillingTalesOfDragonSlayers, refinement: 5, is_better: true },
    { uid: WeaponUidEnum.EverlastingMoonglow, refinement: 1 },
    { uid: WeaponUidEnum.PrototypeAmber, refinement: 5 },
    { uid: WeaponUidEnum.FlowingPurity, refinement: 5 },
  ],
} as CharacterRecommendations;
