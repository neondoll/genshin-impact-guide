import weaponTypes from "./weapon-types";
import { WeaponKeys } from "./enums/weapon";
import { WeaponTypeKeys } from "./enums/weapon-type";
import type { TierListWeapons } from "./types/tier-list-weapons";

export default {
  "Крафтовое оружие": {
    list: [
      {
        tier: "Могут быть полезны",
        weapon_keys: [
          WeaponKeys.EarthShaker, WeaponKeys.FinaleOfTheDeep, WeaponKeys.FlowingPurity, WeaponKeys.FluteOfEzpitzal,
          WeaponKeys.FootprintOfTheRainbow, WeaponKeys.IronSting, WeaponKeys.KitainCrossSpear, WeaponKeys.MappaMare,
          WeaponKeys.PrototypeAmber, WeaponKeys.RightfulReward, WeaponKeys.RingOfYaxche, WeaponKeys.SapwoodBlade,
          WeaponKeys.SongOfStillness, WeaponKeys.TidalShadow, WeaponKeys.Whiteblind,
        ],
      },
      {
        tier: "Трата ресурсов",
        weapon_keys: [
          WeaponKeys.AmenomaKageuchi, WeaponKeys.ChainBreaker, WeaponKeys.CompoundBow, WeaponKeys.CrescentPike,
          WeaponKeys.DragonspineSpear, WeaponKeys.ForestRegalia, WeaponKeys.Frostbearer, WeaponKeys.FruitOfFulfillment,
          WeaponKeys.HakushinRing, WeaponKeys.Hamayumi, WeaponKeys.KatsuragikiriNagamasa, WeaponKeys.KingsSquire,
          WeaponKeys.Moonpiercer, WeaponKeys.PrototypeArchaic, WeaponKeys.PrototypeCrescent,
          WeaponKeys.PrototypeRancour, WeaponKeys.PrototypeStarglitter, WeaponKeys.SnowTombedStarsilver,
        ],
      },
    ],
    video_source: {
      title: "Анимекул: Анализ ВСЕГО Крафтового Оружия | Тир-лист полезности [Genshin Impact]",
      youtube_url: "https://youtu.be/CU-BxsNF-qw",
    },
  },
  [weaponTypes[WeaponTypeKeys.Catalyst].name]: {
    list: [
      {
        tier: "S",
        description: "Лучшие",
        weapon_keys: [
          WeaponKeys.LostPrayerToTheSacredWinds, WeaponKeys.StarcallersWatch, WeaponKeys.SurfsUp,
          WeaponKeys.TomeOfTheEternalFlow, WeaponKeys.VividNotions,
        ],
      },
      {
        tier: "A",
        description: "Хорошие",
        weapon_keys: [
          WeaponKeys.AThousandFloatingDreams, WeaponKeys.CashflowSupervision, WeaponKeys.CranesEchoingCall,
          WeaponKeys.KagurasVerity, WeaponKeys.TheWidsith, WeaponKeys.ThrillingTalesOfDragonSlayers,
          WeaponKeys.TulaytullahsRemembrance,
        ],
      },
      {
        tier: "B",
        description: "Опциональные",
        weapon_keys: [
          WeaponKeys.FavoniusCodex, WeaponKeys.FlowingPurity, WeaponKeys.PrototypeAmber, WeaponKeys.RingOfYaxche,
          WeaponKeys.SacrificialFragments, WeaponKeys.SacrificialJade, WeaponKeys.SkywardAtlas,
          WeaponKeys.WanderingEvenstar,
        ],
      },
      {
        tier: "C",
        description: "Если нет вариантов лучше",
        weapon_keys: [
          WeaponKeys.AshGravenDrinkingHorn, WeaponKeys.BlackcliffAgate, WeaponKeys.EverlastingMoonglow,
          WeaponKeys.HakushinRing, WeaponKeys.JadefallsSplendor, WeaponKeys.MemoryOfDust, WeaponKeys.OathswornEye,
          WeaponKeys.SolarPearl, WeaponKeys.SunnyMorningSleepIn,
        ],
      },
      {
        tier: "D",
        description: "На крайний случай",
        weapon_keys: [
          WeaponKeys.BalladOfTheBoundlessBlue, WeaponKeys.DodocoTales, WeaponKeys.MagicGkeye, WeaponKeys.MappaMare,
          WeaponKeys.WineAndSong,
        ],
      },
      {
        tier: "F",
        description: "Худшие",
        weapon_keys: [
          WeaponKeys.EmeraldOrb, WeaponKeys.EyeOfPerception, WeaponKeys.Frostbearer, WeaponKeys.FruitOfFulfillment,
          WeaponKeys.OtherworldlyStory, WeaponKeys.RoyalGrimoire, WeaponKeys.TwinNephrite, WeaponKeys.WaveridingWhirl,
        ],
      },
    ],
    video_source: {
      title: "Miron MinMax: Лучшие и Худшие Катализаторы | Тир-лист | 2025",
      vk_url: "https://vkvideo.ru/video-227044935_456239231",
    },
  },
  [weaponTypes[WeaponTypeKeys.Bow].name]: {
    list: [
      {
        tier: "S",
        description: "Лучшие",
        weapon_keys: [
          WeaponKeys.AquaSimulacra, WeaponKeys.ElegyForTheEnd, WeaponKeys.FavoniusWarbow, WeaponKeys.SkywardHarp,
        ],
      },
      {
        tier: "A",
        description: "Отличные",
        weapon_keys: [
          WeaponKeys.AstralVulturesCrimsonPlumage, WeaponKeys.HuntersPath, WeaponKeys.PolarStar,
          WeaponKeys.TheFirstGreatMagic, WeaponKeys.ThunderingPulse,
        ],
      },
      {
        tier: "B",
        description: "Хорошие",
        weapon_keys: [
          WeaponKeys.AlleyHunter, WeaponKeys.AmosBow, WeaponKeys.BlackcliffWarbow, WeaponKeys.ChainBreaker,
          WeaponKeys.FlowerWreathedFeathers, WeaponKeys.RangeGauge, WeaponKeys.SacrificialBow,
          WeaponKeys.ScionOfTheBlazingSun, WeaponKeys.Slingshot, WeaponKeys.SongOfStillness, WeaponKeys.TheStringless,
        ],
      },
      {
        tier: "C",
        description: "Ситуативные",
        weapon_keys: [
          WeaponKeys.FadingTwilight, WeaponKeys.Hamayumi, WeaponKeys.IbisPiercer, WeaponKeys.MouunsMoon,
          WeaponKeys.PrototypeCrescent, WeaponKeys.RecurveBow, WeaponKeys.Rust, WeaponKeys.SilvershowerHeartstrings,
          WeaponKeys.TheViridescentHunt, WeaponKeys.WindblumeOde,
        ],
      },
      {
        tier: "D",
        description: "Плохие",
        weapon_keys: [
          WeaponKeys.Cloudforged, WeaponKeys.CompoundBow, WeaponKeys.EndOfTheLine, WeaponKeys.KingsSquire,
          WeaponKeys.Messenger, WeaponKeys.MitternachtsWaltz, WeaponKeys.Predator, WeaponKeys.RavenBow,
          WeaponKeys.RoyalBow, WeaponKeys.SharpshootersOath,
        ],
      },
    ],
    video_source: {
      title: "Miron MinMax: Лучшие и Худшие Луки | Тир-лист (2025)",
      vk_url: "https://vkvideo.ru/video-227044935_456239218",
    },
  },
  [weaponTypes[WeaponTypeKeys.Polearm].name]: {
    list: [
      {
        tier: "S",
        description: "Лучшие",
        weapon_keys: [WeaponKeys.FavoniusLance, WeaponKeys.StaffOfHoma, WeaponKeys.StaffOfTheScarletSands],
      },
      {
        tier: "A",
        description: "Отличные",
        weapon_keys: [
          WeaponKeys.CrimsonMoonsSemblance, WeaponKeys.EngulfingLightning, WeaponKeys.LumidouceElegy,
          WeaponKeys.PrimordialJadeWingedSpear,
        ],
      },
      {
        tier: "B",
        description: "Хорошие",
        weapon_keys: [
          WeaponKeys.BalladOfTheFjords, WeaponKeys.BlackcliffPole, WeaponKeys.CalamityQueller, WeaponKeys.Deathmatch,
          WeaponKeys.DragonsBane, WeaponKeys.SkywardSpine, WeaponKeys.TamayurateiNoOhanashi, WeaponKeys.TheCatch,
          WeaponKeys.VortexVanquisher, WeaponKeys.WavebreakersFin,
        ],
      },
      {
        tier: "C",
        description: "Ситуативные",
        weapon_keys: [
          WeaponKeys.BlackTassel, WeaponKeys.DialoguesOfTheDesertSages, WeaponKeys.FootprintOfTheRainbow,
          WeaponKeys.LithicSpear, WeaponKeys.KitainCrossSpear, WeaponKeys.MissiveWindspear,
          WeaponKeys.MountainBracingBolt, WeaponKeys.ProspectorsDrill, WeaponKeys.RightfulReward, WeaponKeys.RoyalSpear,
          WeaponKeys.WhiteTassel,
        ],
      },
      {
        tier: "D",
        description: "Плохие",
        weapon_keys: [
          WeaponKeys.CrescentPike, WeaponKeys.DragonspineSpear, WeaponKeys.Halberd, WeaponKeys.Moonpiercer,
          WeaponKeys.PrototypeStarglitter,
        ],
      },
    ],
    video_source: {
      title: "Miron MinMax: Лучшие и Худшие Копья | Тирлист Древкового Оружия | 2025",
      vk_url: "https://vkvideo.ru/video-227044935_456239209",
    },
  },
  [weaponTypes[WeaponTypeKeys.Claymore].name]: {
    list: [
      {
        tier: "S",
        description: "Лучшие",
        weapon_keys: [
          WeaponKeys.AThousandBlazingSuns, WeaponKeys.BeaconOfTheReedSea, WeaponKeys.SerpentSpine, WeaponKeys.Verdict,
        ],
      },
      {
        tier: "A",
        description: "Хорошие",
        weapon_keys: [
          WeaponKeys.Akuoumaru, WeaponKeys.FangOfTheMountainKing, WeaponKeys.FruitfulHook,
          WeaponKeys.RedhornStonethresher, WeaponKeys.WolfsGravestone,
        ],
      },
      {
        tier: "B",
        description: "Середнячки",
        weapon_keys: [
          WeaponKeys.BlackcliffSlasher, WeaponKeys.EarthShaker, WeaponKeys.FavoniusGreatsword, WeaponKeys.MailedFlower,
          WeaponKeys.Rainslasher, WeaponKeys.SkywardPride, WeaponKeys.SongOfBrokenPines, WeaponKeys.TheUnforged,
          WeaponKeys.TidalShadow, WeaponKeys.UltimateOverlordsMegaMagicSword,
        ],
      },
      {
        tier: "C",
        description: "Ситуативное оружие",
        weapon_keys: [
          WeaponKeys.BloodtaintedGreatsword, WeaponKeys.KatsuragikiriNagamasa, WeaponKeys.LithicBlade,
          WeaponKeys.MakhairaAquamarine, WeaponKeys.PortablePowerSaw, WeaponKeys.PrototypeArchaic,
          WeaponKeys.Whiteblind,
        ],
      },
      {
        tier: "D",
        description: "Не рекомендуется к прокачке",
        weapon_keys: [
          WeaponKeys.DebateClub, WeaponKeys.FerrousShadow, WeaponKeys.ForestRegalia, WeaponKeys.LuxuriousSeaLord,
          WeaponKeys.RoyalGreatsword, WeaponKeys.SacrificialGreatsword, WeaponKeys.SkyriderGreatsword,
          WeaponKeys.SnowTombedStarsilver, WeaponKeys.TalkingStick, WeaponKeys.TheBell, WeaponKeys.WhiteIronGreatsword,
        ],
      },
    ],
    video_source: {
      title: "Miron MinMax: Лучшие и Худшие Двуручные Мечи | Тир-лист (2025)",
      vk_url: "https://vkvideo.ru/video-227044935_456239205",
    },
  },
  [weaponTypes[WeaponTypeKeys.Sword].name]: {
    list: [
      {
        tier: "S",
        description: "Лучшее оружие",
        weapon_keys: [
          WeaponKeys.Absolution, WeaponKeys.FavoniusSword, WeaponKeys.MistsplitterReforged, WeaponKeys.PeakPatrolSong,
        ],
      },
      {
        tier: "A",
        description: "Хорошее оружие",
        weapon_keys: [
          WeaponKeys.FreedomSworn, WeaponKeys.HaranGeppakuFutsu, WeaponKeys.LightOfFoliarIncision,
          WeaponKeys.PrimordialJadeCutter, WeaponKeys.SacrificialSword, WeaponKeys.SplendorOfTranquilWaters,
          WeaponKeys.UrakuMisugiri, WeaponKeys.XiphosMoonlight,
        ],
      },
      {
        tier: "B",
        description: "Опциональное оружие",
        weapon_keys: [
          WeaponKeys.FesteringDesire, WeaponKeys.FleuveCendreFerryman, WeaponKeys.IronSting, WeaponKeys.KeyOfKhajNisut,
          WeaponKeys.SkywardBlade, WeaponKeys.TheBlackSword, WeaponKeys.ToukabouShigure, WeaponKeys.WolfFang,
        ],
      },
      {
        tier: "C",
        description: "Если нет альтернатив",
        weapon_keys: [
          WeaponKeys.BlackcliffLongsword, WeaponKeys.CalamityOfEshu, WeaponKeys.FinaleOfTheDeep,
          WeaponKeys.HarbingerOfDawn, WeaponKeys.SapwoodBlade, WeaponKeys.SturdyBone, WeaponKeys.SummitShaper,
          WeaponKeys.TheAlleyFlash, WeaponKeys.TheDockhandsAssistant,
        ],
      },
      {
        tier: "D",
        description: "На крайний случай",
        weapon_keys: [
          WeaponKeys.AmenomaKageuchi, WeaponKeys.AquilaFavonia, WeaponKeys.CinnabarSpindle, WeaponKeys.FluteOfEzpitzal,
          WeaponKeys.KagotsurubeIsshin, WeaponKeys.LionsRoar, WeaponKeys.RoyalLongsword,
          WeaponKeys.SwordOfNarzissenkreuz,
        ],
      },
      {
        tier: "F",
        description: "Худшее оружие",
        weapon_keys: [
          WeaponKeys.CoolSteel, WeaponKeys.DarkIronSword, WeaponKeys.FilletBlade, WeaponKeys.PrototypeRancour,
          WeaponKeys.SkyriderSword, WeaponKeys.SwordOfDescension, WeaponKeys.TheFlute, WeaponKeys.TravelersHandySword,
        ],
      },
    ],
    video_source: {
      title: "Miron MinMax: Лучшие и Худшие Одноручные Мечи | Тир-лист (2025)",
      vk_url: "https://vkvideo.ru/video-227044935_456239200",
    },
  },
} as Record<string, TierListWeapons>;
