import { CharacterUidEnum } from "../enums/character";
import { ElementUidEnum } from "../enums/element";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";
import type { ElementUid } from "../types/element";

export default {
  [ElementUidEnum.Anemo]: {
    character_uid: CharacterUidEnum.TravelerAnemo,
    video_sources: [
      { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    ],
    weapons: [
      { uid: WeaponUidEnum.FavoniusSword, refinement: 5 },
      { uid: WeaponUidEnum.SacrificialSword, refinement: 5 },
    ],
  },
  [ElementUidEnum.Dendro]: {
    character_uid: CharacterUidEnum.TravelerDendro,
    video_sources: [
      { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    ],
    weapons: [
      { uid: WeaponUidEnum.FavoniusSword, refinement: 5 },
      { uid: WeaponUidEnum.SacrificialSword, refinement: 5 },
    ],
  },
  [ElementUidEnum.Electro]: {
    character_uid: CharacterUidEnum.TravelerElectro,
    video_sources: [
      { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    ],
    weapons: [
      { uid: WeaponUidEnum.FavoniusSword, refinement: 5 },
      { uid: WeaponUidEnum.SacrificialSword, refinement: 5 },
    ],
  },
  [ElementUidEnum.Geo]: {
    character_uid: CharacterUidEnum.TravelerGeo,
    video_sources: [
      { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    ],
    weapons: [
      { uid: WeaponUidEnum.FavoniusSword, refinement: 5 },
      { uid: WeaponUidEnum.SacrificialSword, refinement: 5 },
    ],
  },
  [ElementUidEnum.Hydro]: {
    character_uid: CharacterUidEnum.TravelerHydro,
    video_sources: [
      { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    ],
    weapons: [
      { uid: WeaponUidEnum.FavoniusSword, refinement: 5 },
      { uid: WeaponUidEnum.SacrificialSword, refinement: 5 },
    ],
  },
} as Record<ElementUid, CharacterRecommendations>;
