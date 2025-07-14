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
  [WeaponTypeUidEnum.Bow]: {
    list: [
      {
        tier: "S",
        description: "Лучшие",
        weapon_uids: [
          WeaponUidEnum.AquaSimulacra, WeaponUidEnum.ElegyForTheEnd, WeaponUidEnum.FavoniusWarbow,
          WeaponUidEnum.SkywardHarp,
        ],
      },
      {
        tier: "A",
        description: "Отличные",
        weapon_uids: [
          WeaponUidEnum.AstralVulturesCrimsonPlumage, WeaponUidEnum.HuntersPath, WeaponUidEnum.PolarStar,
          WeaponUidEnum.TheFirstGreatMagic, WeaponUidEnum.ThunderingPulse,
        ],
      },
      {
        tier: "B",
        description: "Хорошие",
        weapon_uids: [
          WeaponUidEnum.AlleyHunter, WeaponUidEnum.AmosBow, WeaponUidEnum.BlackcliffWarbow, WeaponUidEnum.ChainBreaker,
          WeaponUidEnum.FlowerWreathedFeathers, WeaponUidEnum.RangeGauge, WeaponUidEnum.SacrificialBow,
          WeaponUidEnum.ScionOfTheBlazingSun, WeaponUidEnum.Slingshot, WeaponUidEnum.SongOfStillness,
          WeaponUidEnum.TheStringless,
        ],
      },
      {
        tier: "C",
        description: "Ситуативные",
        weapon_uids: [
          WeaponUidEnum.FadingTwilight, WeaponUidEnum.Hamayumi, WeaponUidEnum.IbisPiercer, WeaponUidEnum.MouunsMoon,
          WeaponUidEnum.PrototypeCrescent, WeaponUidEnum.RecurveBow, WeaponUidEnum.Rust,
          WeaponUidEnum.SilvershowerHeartstrings, WeaponUidEnum.TheViridescentHunt, WeaponUidEnum.WindblumeOde,
        ],
      },
      {
        tier: "D",
        description: "Плохие",
        weapon_uids: [
          WeaponUidEnum.Cloudforged, WeaponUidEnum.CompoundBow, WeaponUidEnum.EndOfTheLine, WeaponUidEnum.KingsSquire,
          WeaponUidEnum.Messenger, WeaponUidEnum.MitternachtsWaltz, WeaponUidEnum.Predator, WeaponUidEnum.RavenBow,
          WeaponUidEnum.RoyalBow, WeaponUidEnum.SharpshootersOath,
        ],
      },
    ],
    video_source: {
      title: "Miron MinMax: Лучшие и Худшие Луки | Тир-лист (2025)",
      vk_url: "https://vkvideo.ru/video-227044935_456239218",
    },
  },
  [WeaponTypeUidEnum.Polearm]: {
    list: [
      {
        tier: "S",
        description: "Лучшие",
        weapon_uids: [WeaponUidEnum.FavoniusLance, WeaponUidEnum.StaffOfHoma, WeaponUidEnum.StaffOfTheScarletSands],
      },
      {
        tier: "A",
        description: "Отличные",
        weapon_uids: [
          WeaponUidEnum.CrimsonMoonsSemblance, WeaponUidEnum.EngulfingLightning, WeaponUidEnum.LumidouceElegy,
          WeaponUidEnum.PrimordialJadeWingedSpear,
        ],
      },
      {
        tier: "B",
        description: "Хорошие",
        weapon_uids: [
          WeaponUidEnum.BalladOfTheFjords, WeaponUidEnum.BlackcliffPole, WeaponUidEnum.CalamityQueller,
          WeaponUidEnum.Deathmatch, WeaponUidEnum.DragonsBane, WeaponUidEnum.SkywardSpine,
          WeaponUidEnum.TamayurateiNoOhanashi, WeaponUidEnum.TheCatch, WeaponUidEnum.VortexVanquisher,
          WeaponUidEnum.WavebreakersFin,
        ],
      },
      {
        tier: "C",
        description: "Ситуативные",
        weapon_uids: [
          WeaponUidEnum.BlackTassel, WeaponUidEnum.DialoguesOfTheDesertSages, WeaponUidEnum.FootprintOfTheRainbow,
          WeaponUidEnum.LithicSpear, WeaponUidEnum.KitainCrossSpear, WeaponUidEnum.MissiveWindspear,
          WeaponUidEnum.MountainBracingBolt, WeaponUidEnum.ProspectorsDrill, WeaponUidEnum.RightfulReward,
          WeaponUidEnum.RoyalSpear, WeaponUidEnum.WhiteTassel,
        ],
      },
      {
        tier: "D",
        description: "Плохие",
        weapon_uids: [
          WeaponUidEnum.CrescentPike, WeaponUidEnum.DragonspineSpear, WeaponUidEnum.Halberd, WeaponUidEnum.Moonpiercer,
          WeaponUidEnum.PrototypeStarglitter,
        ],
      },
    ],
    video_source: {
      title: "Miron MinMax: Лучшие и Худшие Копья | Тирлист Древкового Оружия | 2025",
      vk_url: "https://vkvideo.ru/video-227044935_456239209",
    },
  },
  [WeaponTypeUidEnum.Claymore]: {
    list: [
      {
        tier: "S",
        description: "Лучшие",
        weapon_uids: [
          WeaponUidEnum.AThousandBlazingSuns, WeaponUidEnum.BeaconOfTheReedSea, WeaponUidEnum.SerpentSpine,
          WeaponUidEnum.Verdict,
        ],
      },
      {
        tier: "A",
        description: "Хорошие",
        weapon_uids: [
          WeaponUidEnum.Akuoumaru, WeaponUidEnum.FangOfTheMountainKing, WeaponUidEnum.FruitfulHook,
          WeaponUidEnum.RedhornStonethresher, WeaponUidEnum.WolfsGravestone,
        ],
      },
      {
        tier: "B",
        description: "Середнячки",
        weapon_uids: [
          WeaponUidEnum.BlackcliffSlasher, WeaponUidEnum.EarthShaker, WeaponUidEnum.FavoniusGreatsword,
          WeaponUidEnum.MailedFlower, WeaponUidEnum.Rainslasher, WeaponUidEnum.SkywardPride,
          WeaponUidEnum.SongOfBrokenPines, WeaponUidEnum.TheUnforged, WeaponUidEnum.TidalShadow,
          WeaponUidEnum.UltimateOverlordsMegaMagicSword,
        ],
      },
      {
        tier: "C",
        description: "Ситуативное оружие",
        weapon_uids: [
          WeaponUidEnum.BloodtaintedGreatsword, WeaponUidEnum.KatsuragikiriNagamasa, WeaponUidEnum.LithicBlade,
          WeaponUidEnum.MakhairaAquamarine, WeaponUidEnum.PortablePowerSaw, WeaponUidEnum.PrototypeArchaic,
          WeaponUidEnum.Whiteblind,
        ],
      },
      {
        tier: "D",
        description: "Не рекомендуется к прокачке",
        weapon_uids: [
          WeaponUidEnum.DebateClub, WeaponUidEnum.FerrousShadow, WeaponUidEnum.ForestRegalia,
          WeaponUidEnum.LuxuriousSeaLord, WeaponUidEnum.RoyalGreatsword, WeaponUidEnum.SacrificialGreatsword,
          WeaponUidEnum.SkyriderGreatsword, WeaponUidEnum.SnowTombedStarsilver, WeaponUidEnum.TalkingStick,
          WeaponUidEnum.TheBell, WeaponUidEnum.WhiteIronGreatsword,
        ],
      },
    ],
    video_source: {
      title: "Miron MinMax: Лучшие и Худшие Двуручные Мечи | Тир-лист (2025)",
      vk_url: "https://vkvideo.ru/video-227044935_456239205",
    },
  },
  [WeaponTypeUidEnum.Sword]: {
    list: [
      { tier: "S", description: "Лучшее оружие", weapon_uids: [WeaponUidEnum.FavoniusSword] },
      {
        tier: "A",
        description: "Хорошее оружие",
        weapon_uids: [WeaponUidEnum.SacrificialSword, WeaponUidEnum.XiphosMoonlight],
      },
      {
        tier: "B",
        description: "Опциональное оружие",
        weapon_uids: [
          WeaponUidEnum.FesteringDesire, WeaponUidEnum.FleuveCendreFerryman, WeaponUidEnum.IronSting,
          WeaponUidEnum.TheBlackSword, WeaponUidEnum.ToukabouShigure, WeaponUidEnum.WolfFang,
        ],
      },
      {
        tier: "C",
        description: "Если нет альтернатив",
        weapon_uids: [
          WeaponUidEnum.BlackcliffLongsword, WeaponUidEnum.CalamityOfEshu, WeaponUidEnum.FinaleOfTheDeep,
          WeaponUidEnum.HarbingerOfDawn, WeaponUidEnum.SapwoodBlade, WeaponUidEnum.SturdyBone,
          WeaponUidEnum.TheAlleyFlash, WeaponUidEnum.TheDockhandsAssistant,
        ],
      },
      {
        tier: "D",
        description: "На крайний случай",
        weapon_uids: [
          WeaponUidEnum.AmenomaKageuchi, WeaponUidEnum.CinnabarSpindle, WeaponUidEnum.FluteOfEzpitzal,
          WeaponUidEnum.KagotsurubeIsshin, WeaponUidEnum.LionsRoar, WeaponUidEnum.RoyalLongsword,
          WeaponUidEnum.SwordOfNarzissenkreuz,
        ],
      },
      {
        tier: "F",
        description: "Худшее оружие",
        weapon_uids: [
          WeaponUidEnum.CoolSteel, WeaponUidEnum.DarkIronSword, WeaponUidEnum.FilletBlade,
          WeaponUidEnum.PrototypeRancour, WeaponUidEnum.SkyriderSword, WeaponUidEnum.SwordOfDescension,
          WeaponUidEnum.TheFlute, WeaponUidEnum.TravelersHandySword,
        ],
      },
    ],
    video_source: {
      title: "Miron MinMax: Лучшие и Худшие Одноручные Мечи | Тир-лист (2025)",
      vk_url: "https://vkvideo.ru/video-227044935_456239200",
    },
  },
} as Record<WeaponTypeUid, TierListWeapons>;
