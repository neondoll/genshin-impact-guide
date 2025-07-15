import { CharacterUidEnum } from "../enums/character";
import { ElementUidEnum } from "../enums/element";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";
import type { ElementUid } from "../types/element";

const recommendations = {
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [
    { uid: WeaponUidEnum.FavoniusSword, refinement: 5, is_better: true },
    { uid: WeaponUidEnum.SacrificialSword, refinement: 5, is_better: true },
  ],
} as Omit<CharacterRecommendations, "character_uid">;

export default {
  [ElementUidEnum.Anemo]: { ...recommendations, character_uid: CharacterUidEnum.TravelerAnemo },
  [ElementUidEnum.Dendro]: { ...recommendations, character_uid: CharacterUidEnum.TravelerDendro },
  [ElementUidEnum.Electro]: { ...recommendations, character_uid: CharacterUidEnum.TravelerElectro },
  [ElementUidEnum.Geo]: { ...recommendations, character_uid: CharacterUidEnum.TravelerGeo },
  [ElementUidEnum.Hydro]: { ...recommendations, character_uid: CharacterUidEnum.TravelerHydro },
} as Record<ElementUid, CharacterRecommendations>;
