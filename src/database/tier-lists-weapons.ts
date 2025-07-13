import { WeaponTypeUidEnum } from "./enums/weapon-type";
import { WeaponUidEnum } from "./enums/weapon";
import type { TierListWeapons } from "./types/tier-list-weapons";
import type { WeaponTypeUid } from "./types/weapon-type";

export default {
  [WeaponTypeUidEnum.Catalyst]: {
    list: [
      {
        tier: "S",
        description: "Лучшие",
        weapon_uids: [
          WeaponUidEnum.LostPrayerToTheSacredWinds, WeaponUidEnum.StarcallersWatch, WeaponUidEnum.SurfsUp,
          WeaponUidEnum.TomeOfTheEternalFlow, WeaponUidEnum.VividNotions,
        ],
      },
      {
        tier: "A",
        description: "Хорошие",
        weapon_uids: [
          WeaponUidEnum.AThousandFloatingDreams, WeaponUidEnum.CashflowSupervision, WeaponUidEnum.CranesEchoingCall,
          WeaponUidEnum.KagurasVerity, WeaponUidEnum.TheWidsith, WeaponUidEnum.ThrillingTalesOfDragonSlayers,
          WeaponUidEnum.TulaytullahsRemembrance,
        ],
      },
      {
        tier: "B",
        description: "Опциональные",
        weapon_uids: [
          WeaponUidEnum.FavoniusCodex, WeaponUidEnum.FlowingPurity, WeaponUidEnum.PrototypeAmber,
          WeaponUidEnum.RingOfYaxche, WeaponUidEnum.SacrificialFragments, WeaponUidEnum.SacrificialJade,
          WeaponUidEnum.SkywardAtlas, WeaponUidEnum.WanderingEvenstar,
        ],
      },
      {
        tier: "C",
        description: "Если нет вариантов лучше",
        weapon_uids: [
          WeaponUidEnum.AshGravenDrinkingHorn, WeaponUidEnum.BlackcliffAgate, WeaponUidEnum.EverlastingMoonglow,
          WeaponUidEnum.HakushinRing, WeaponUidEnum.JadefallsSplendor, WeaponUidEnum.MemoryOfDust,
          WeaponUidEnum.OathswornEye, WeaponUidEnum.SolarPearl, WeaponUidEnum.SunnyMorningSleepIn,
        ],
      },
      {
        tier: "D",
        description: "На крайний случай",
        weapon_uids: [
          WeaponUidEnum.BalladOfTheBoundlessBlue, WeaponUidEnum.DodocoTales, WeaponUidEnum.MagicGuide,
          WeaponUidEnum.MappaMare, WeaponUidEnum.WineAndSong,
        ],
      },
      {
        tier: "F",
        description: "Худшие",
        weapon_uids: [
          WeaponUidEnum.EmeraldOrb, WeaponUidEnum.EyeOfPerception, WeaponUidEnum.Frostbearer,
          WeaponUidEnum.FruitOfFulfillment, WeaponUidEnum.OtherworldlyStory, WeaponUidEnum.RoyalGrimoire,
          WeaponUidEnum.TwinNephrite, WeaponUidEnum.WaveridingWhirl,
        ],
      },
    ],
    video_source: {
      title: "Miron MinMax: Лучшие и Худшие Катализаторы | Тир-лист | 2025",
      vk_url: "https://vkvideo.ru/video-227044935_456239231",
    },
  },
  [WeaponTypeUidEnum.Bow]: {},
  [WeaponTypeUidEnum.Claymore]: {},
  [WeaponTypeUidEnum.Polearm]: {},
  [WeaponTypeUidEnum.Sword]: {},
} as Record<WeaponTypeUid, TierListWeapons>;
