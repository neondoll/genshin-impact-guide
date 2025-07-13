import { WeaponTypeUidEnum } from "./enums/weapon-type";
import { WeaponUidEnum } from "./enums/weapon";

export default {
  [WeaponTypeUidEnum.Catalyst]: {
    list: [
      { tier: "S", description: "Лучшие", weaponUids: [] },
      { tier: "A", description: "Хорошие", weaponUids: [WeaponUidEnum.ThrillingTalesOfDragonSlayers] },
      { tier: "B", description: "Опциональные", weaponUids: [] },
      { tier: "C", description: "Если нет вариантов лучше", weaponUids: [] },
      {
        tier: "D",
        description: "На крайний случай",
        weaponUids: [WeaponUidEnum.MagicGuide, WeaponUidEnum.WineAndSong],
      },
      {
        tier: "F",
        description: "Худшие",
        weaponUids: [WeaponUidEnum.EmeraldOrb, WeaponUidEnum.OtherworldlyStory, WeaponUidEnum.TwinNephrite],
      },
    ],
  },
} as const;
