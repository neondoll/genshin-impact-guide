import type { ITierListWeapons } from "./types";
import { CTierListWeapons, CTierListWeaponsListItem } from "./classes";
import { CVideoSource } from "../video-sources/classes";
import { TierListWeaponsKeys } from "./enums";
import { WeaponKeys } from "../weapons/enums";

export default {
  [TierListWeaponsKeys.Crafted]: CTierListWeapons.init([
    TierListWeaponsKeys.Crafted,
    [
      CTierListWeaponsListItem.init([
        "Могут быть полезны",
        undefined,
        [
          WeaponKeys.EarthShaker, WeaponKeys.FinaleOfTheDeep, WeaponKeys.FlowingPurity, WeaponKeys.FluteOfEzpitzal,
          WeaponKeys.FootprintOfTheRainbow, WeaponKeys.IronSting, WeaponKeys.KitainCrossSpear, WeaponKeys.MappaMare,
          WeaponKeys.PrototypeAmber, WeaponKeys.RightfulReward, WeaponKeys.RingOfYaxche, WeaponKeys.SapwoodBlade,
          WeaponKeys.SongOfStillness, WeaponKeys.TidalShadow, WeaponKeys.Whiteblind,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "Трата ресурсов",
        undefined,
        [
          WeaponKeys.AmenomaKageuchi, WeaponKeys.ChainBreaker, WeaponKeys.CompoundBow, WeaponKeys.CrescentPike,
          WeaponKeys.DragonspineSpear, WeaponKeys.ForestRegalia, WeaponKeys.Frostbearer, WeaponKeys.FruitOfFulfillment,
          WeaponKeys.HakushinRing, WeaponKeys.Hamayumi, WeaponKeys.KatsuragikiriNagamasa, WeaponKeys.KingsSquire,
          WeaponKeys.Moonpiercer, WeaponKeys.PrototypeArchaic, WeaponKeys.PrototypeCrescent,
          WeaponKeys.PrototypeRancour, WeaponKeys.PrototypeStarglitter, WeaponKeys.SnowTombedStarsilver,
        ],
      ]),
    ],
    new CVideoSource("Анимекул: Анализ ВСЕГО Крафтового Оружия | Тир-лист полезности [Genshin Impact]").setYoutubeUrl("https://youtu.be/CU-BxsNF-qw"),
  ]),
  [TierListWeaponsKeys.Catalyst]: CTierListWeapons.init([
    TierListWeaponsKeys.Catalyst,
    [
      CTierListWeaponsListItem.init([
        "S",
        "Лучшие",
        [
          WeaponKeys.LostPrayerToTheSacredWinds, WeaponKeys.StarcallersWatch, WeaponKeys.SurfsUp,
          WeaponKeys.TomeOfTheEternalFlow, WeaponKeys.VividNotions,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "A",
        "Хорошие",
        [
          WeaponKeys.AThousandFloatingDreams, WeaponKeys.CashflowSupervision, WeaponKeys.CranesEchoingCall,
          WeaponKeys.KagurasVerity, WeaponKeys.TheWidsith, WeaponKeys.ThrillingTalesOfDragonSlayers,
          WeaponKeys.TulaytullahsRemembrance,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "B",
        "Опциональные",
        [
          WeaponKeys.FavoniusCodex, WeaponKeys.FlowingPurity, WeaponKeys.PrototypeAmber, WeaponKeys.RingOfYaxche,
          WeaponKeys.SacrificialFragments, WeaponKeys.SacrificialJade, WeaponKeys.SkywardAtlas,
          WeaponKeys.WanderingEvenstar,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "C",
        "Если нет вариантов лучше",
        [
          WeaponKeys.AshGravenDrinkingHorn, WeaponKeys.BlackcliffAgate, WeaponKeys.EverlastingMoonglow,
          WeaponKeys.HakushinRing, WeaponKeys.JadefallsSplendor, WeaponKeys.MemoryOfDust, WeaponKeys.OathswornEye,
          WeaponKeys.SolarPearl, WeaponKeys.SunnyMorningSleepIn,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "D",
        "На крайний случай",
        [
          WeaponKeys.BalladOfTheBoundlessBlue, WeaponKeys.DodocoTales, WeaponKeys.MagicGuide, WeaponKeys.MappaMare,
          WeaponKeys.WineAndSong,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "F",
        "Худшие",
        [
          WeaponKeys.EmeraldOrb, WeaponKeys.EyeOfPerception, WeaponKeys.Frostbearer, WeaponKeys.FruitOfFulfillment,
          WeaponKeys.OtherworldlyStory, WeaponKeys.RoyalGrimoire, WeaponKeys.TwinNephrite, WeaponKeys.WaveridingWhirl,
        ],
      ]),
    ],
    new CVideoSource("Miron MinMax: Лучшие и Худшие Катализаторы | Тир-лист | 2025").setVkUrl("https://vkvideo.ru/video-227044935_456239231"),
  ]),
  [TierListWeaponsKeys.Bow]: CTierListWeapons.init([
    TierListWeaponsKeys.Bow,
    [
      CTierListWeaponsListItem.init([
        "S",
        "Лучшие",
        [WeaponKeys.AquaSimulacra, WeaponKeys.ElegyForTheEnd, WeaponKeys.FavoniusWarbow, WeaponKeys.SkywardHarp],
      ]),
      CTierListWeaponsListItem.init([
        "A",
        "Отличные",
        [
          WeaponKeys.AstralVulturesCrimsonPlumage, WeaponKeys.HuntersPath, WeaponKeys.PolarStar,
          WeaponKeys.TheFirstGreatMagic, WeaponKeys.ThunderingPulse,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "B",
        "Хорошие",
        [
          WeaponKeys.AlleyHunter, WeaponKeys.AmosBow, WeaponKeys.BlackcliffWarbow, WeaponKeys.ChainBreaker,
          WeaponKeys.FlowerWreathedFeathers, WeaponKeys.RangeGauge, WeaponKeys.SacrificialBow,
          WeaponKeys.ScionOfTheBlazingSun, WeaponKeys.Slingshot, WeaponKeys.SongOfStillness, WeaponKeys.TheStringless,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "C",
        "Ситуативные",
        [
          WeaponKeys.FadingTwilight, WeaponKeys.Hamayumi, WeaponKeys.IbisPiercer, WeaponKeys.MouunsMoon,
          WeaponKeys.PrototypeCrescent, WeaponKeys.RecurveBow, WeaponKeys.Rust, WeaponKeys.SilvershowerHeartstrings,
          WeaponKeys.TheViridescentHunt, WeaponKeys.WindblumeOde,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "D",
        "Плохие",
        [
          WeaponKeys.Cloudforged, WeaponKeys.CompoundBow, WeaponKeys.EndOfTheLine, WeaponKeys.KingsSquire,
          WeaponKeys.Messenger, WeaponKeys.MitternachtsWaltz, WeaponKeys.Predator, WeaponKeys.RavenBow,
          WeaponKeys.RoyalBow, WeaponKeys.SharpshootersOath,
        ],
      ]),
    ],
    new CVideoSource("Miron MinMax: Лучшие и Худшие Луки | Тир-лист (2025)").setVkUrl("https://vkvideo.ru/video-227044935_456239218"),
  ]),
  [TierListWeaponsKeys.Polearm]: CTierListWeapons.init([
    TierListWeaponsKeys.Polearm,
    [
      CTierListWeaponsListItem.init([
        "S",
        "Лучшие",
        [WeaponKeys.FavoniusLance, WeaponKeys.StaffOfHoma, WeaponKeys.StaffOfTheScarletSands],
      ]),
      CTierListWeaponsListItem.init([
        "A",
        "Отличные",
        [
          WeaponKeys.CrimsonMoonsSemblance, WeaponKeys.EngulfingLightning, WeaponKeys.LumidouceElegy,
          WeaponKeys.PrimordialJadeWingedSpear,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "B",
        "Хорошие",
        [
          WeaponKeys.BalladOfTheFjords, WeaponKeys.BlackcliffPole, WeaponKeys.CalamityQueller, WeaponKeys.Deathmatch,
          WeaponKeys.DragonsBane, WeaponKeys.SkywardSpine, WeaponKeys.TamayurateiNoOhanashi, WeaponKeys.TheCatch,
          WeaponKeys.VortexVanquisher, WeaponKeys.WavebreakersFin,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "C",
        "Ситуативные",
        [
          WeaponKeys.BlackTassel, WeaponKeys.DialoguesOfTheDesertSages, WeaponKeys.FootprintOfTheRainbow,
          WeaponKeys.LithicSpear, WeaponKeys.KitainCrossSpear, WeaponKeys.MissiveWindspear,
          WeaponKeys.MountainBracingBolt, WeaponKeys.ProspectorsDrill, WeaponKeys.RightfulReward, WeaponKeys.RoyalSpear,
          WeaponKeys.WhiteTassel,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "D",
        "Плохие",
        [
          WeaponKeys.CrescentPike, WeaponKeys.DragonspineSpear, WeaponKeys.Halberd, WeaponKeys.Moonpiercer,
          WeaponKeys.PrototypeStarglitter,
        ],
      ]),
    ],
    new CVideoSource("Miron MinMax: Лучшие и Худшие Копья | Тирлист Древкового Оружия | 2025").setVkUrl("https://vkvideo.ru/video-227044935_456239209"),
  ]),
  [TierListWeaponsKeys.Claymore]: CTierListWeapons.init([
    TierListWeaponsKeys.Claymore,
    [
      CTierListWeaponsListItem.init([
        "S",
        "Лучшие",
        [WeaponKeys.AThousandBlazingSuns, WeaponKeys.BeaconOfTheReedSea, WeaponKeys.SerpentSpine, WeaponKeys.Verdict],
      ]),
      CTierListWeaponsListItem.init([
        "A",
        "Хорошие",
        [
          WeaponKeys.Akuoumaru, WeaponKeys.FangOfTheMountainKing, WeaponKeys.FruitfulHook,
          WeaponKeys.RedhornStonethresher, WeaponKeys.WolfsGravestone,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "B",
        "Середнячки",
        [
          WeaponKeys.BlackcliffSlasher, WeaponKeys.EarthShaker, WeaponKeys.FavoniusGreatsword, WeaponKeys.MailedFlower,
          WeaponKeys.Rainslasher, WeaponKeys.SkywardPride, WeaponKeys.SongOfBrokenPines, WeaponKeys.TheUnforged,
          WeaponKeys.TidalShadow, WeaponKeys.UltimateOverlordsMegaMagicSword,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "C",
        "Ситуативное оружие",
        [
          WeaponKeys.BloodtaintedGreatsword, WeaponKeys.KatsuragikiriNagamasa, WeaponKeys.LithicBlade,
          WeaponKeys.MakhairaAquamarine, WeaponKeys.PortablePowerSaw, WeaponKeys.PrototypeArchaic,
          WeaponKeys.Whiteblind,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "D",
        "Не рекомендуется к прокачке",
        [
          WeaponKeys.DebateClub, WeaponKeys.FerrousShadow, WeaponKeys.ForestRegalia, WeaponKeys.LuxuriousSeaLord,
          WeaponKeys.RoyalGreatsword, WeaponKeys.SacrificialGreatsword, WeaponKeys.SkyriderGreatsword,
          WeaponKeys.SnowTombedStarsilver, WeaponKeys.TalkingStick, WeaponKeys.TheBell, WeaponKeys.WhiteIronGreatsword,
        ],
      ]),
    ],
    new CVideoSource("Miron MinMax: Лучшие и Худшие Двуручные Мечи | Тир-лист (2025)").setVkUrl("https://vkvideo.ru/video-227044935_456239205"),
  ]),
  [TierListWeaponsKeys.Sword]: CTierListWeapons.init([
    TierListWeaponsKeys.Sword,
    [
      CTierListWeaponsListItem.init([
        "S",
        "Лучшее оружие",
        [WeaponKeys.Absolution, WeaponKeys.FavoniusSword, WeaponKeys.MistsplitterReforged, WeaponKeys.PeakPatrolSong],
      ]),
      CTierListWeaponsListItem.init([
        "A",
        "Хорошее оружие",
        [
          WeaponKeys.FreedomSworn, WeaponKeys.HaranGeppakuFutsu, WeaponKeys.LightOfFoliarIncision,
          WeaponKeys.PrimordialJadeCutter, WeaponKeys.SacrificialSword, WeaponKeys.SplendorOfTranquilWaters,
          WeaponKeys.UrakuMisugiri, WeaponKeys.XiphosMoonlight,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "B",
        "Опциональное оружие",
        [
          WeaponKeys.FesteringDesire, WeaponKeys.FleuveCendreFerryman, WeaponKeys.IronSting, WeaponKeys.KeyOfKhajNisut,
          WeaponKeys.SkywardBlade, WeaponKeys.TheBlackSword, WeaponKeys.ToukabouShigure, WeaponKeys.WolfFang,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "C",
        "Если нет альтернатив",
        [
          WeaponKeys.BlackcliffLongsword, WeaponKeys.CalamityOfEshu, WeaponKeys.FinaleOfTheDeep,
          WeaponKeys.HarbingerOfDawn, WeaponKeys.SapwoodBlade, WeaponKeys.SturdyBone, WeaponKeys.SummitShaper,
          WeaponKeys.TheAlleyFlash, WeaponKeys.TheDockhandsAssistant,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "D",
        "На крайний случай",
        [
          WeaponKeys.AmenomaKageuchi, WeaponKeys.AquilaFavonia, WeaponKeys.CinnabarSpindle, WeaponKeys.FluteOfEzpitzal,
          WeaponKeys.KagotsurubeIsshin, WeaponKeys.LionsRoar, WeaponKeys.RoyalLongsword,
          WeaponKeys.SwordOfNarzissenkreuz,
        ],
      ]),
      CTierListWeaponsListItem.init([
        "F",
        "Худшее оружие",
        [
          WeaponKeys.CoolSteel, WeaponKeys.DarkIronSword, WeaponKeys.FilletBlade, WeaponKeys.PrototypeRancour,
          WeaponKeys.SkyriderSword, WeaponKeys.SwordOfDescension, WeaponKeys.TheFlute, WeaponKeys.TravelersHandySword,
        ],
      ]),
    ],
    new CVideoSource("Miron MinMax: Лучшие и Худшие Одноручные Мечи | Тир-лист (2025)").setVkUrl("https://vkvideo.ru/video-227044935_456239200"),
  ]),
} as Record<ITierListWeapons["key"], ITierListWeapons>;
