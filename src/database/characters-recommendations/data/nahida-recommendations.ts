import type { ICharacterRecommendations } from "../types";
import { CharacterKeys } from "../../characters/enums";
import { TalentKeys } from "../../talents/enums";
import { WeaponKeys } from "../../weapons/enums";

export default {
  character_key: CharacterKeys.Nahida,
  first_constellation_or_signature_weapon: "С1 < Сигна < С2",
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
    { key: TalentKeys.ElementalSkill, priority: "В первую очередь\n(10)" },
    { key: TalentKeys.ElementalBurst, priority: "Во вторую очередь\n(8)" },
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
    { key: WeaponKeys.AThousandFloatingDreams, refinement: 1, is_better: true },
    { key: WeaponKeys.SacrificialFragments, refinement: 5 },
  ],
} as ICharacterRecommendations;
