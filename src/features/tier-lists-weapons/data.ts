import type { TierListWeapons, TierListWeaponsListItem } from "./types";
import { TierListWeaponsTitles } from "./enums";
import { VideoSourceClass } from "../video-sources/classes";
import { WeaponIds } from "../weapons/enums";

class TierListWeaponsClass implements TierListWeapons {
  readonly title: TierListWeapons["title"];
  readonly list: TierListWeapons["list"];
  readonly video_source: TierListWeapons["video_source"];

  constructor(
    title: TierListWeapons["title"],
    list: TierListWeapons["list"],
    video_source: TierListWeapons["video_source"],
  ) {
    this.title = title;
    this.list = list;
    this.video_source = video_source;
  }

  static init(params: ConstructorParameters<typeof TierListWeaponsClass>) {
    return new TierListWeaponsClass(...params);
  }
}

class TierListWeaponsListItemClass implements TierListWeaponsListItem {
  readonly tier: TierListWeaponsListItem["tier"];
  readonly description: TierListWeaponsListItem["description"];
  readonly weapon_ids: TierListWeaponsListItem["weapon_ids"];

  constructor(
    tier: TierListWeaponsListItem["tier"],
    description: TierListWeaponsListItem["description"],
    weaponIds: TierListWeaponsListItem["weapon_ids"],
  ) {
    this.tier = tier;
    this.description = description;
    this.weapon_ids = weaponIds;
  }

  static init(params: ConstructorParameters<typeof TierListWeaponsListItemClass>) {
    return new TierListWeaponsListItemClass(...params);
  }
}

export default {
  [TierListWeaponsTitles.Crafted]: TierListWeaponsClass.init([
    TierListWeaponsTitles.Crafted,
    [
      TierListWeaponsListItemClass.init(["Могут быть полезны", undefined, [
        WeaponIds.EarthShaker, WeaponIds.FinaleOfTheDeep, WeaponIds.FlowingPurity, WeaponIds.FluteOfEzpitzal,
        WeaponIds.FootprintOfTheRainbow, WeaponIds.IronSting, WeaponIds.KitainCrossSpear, WeaponIds.MappaMare,
        WeaponIds.PrototypeAmber, WeaponIds.RightfulReward, WeaponIds.RingOfYaxche, WeaponIds.SapwoodBlade,
        WeaponIds.SongOfStillness, WeaponIds.TidalShadow, WeaponIds.Whiteblind,
      ]]),
      TierListWeaponsListItemClass.init(["Трата ресурсов", undefined, [
        WeaponIds.AmenomaKageuchi, WeaponIds.ChainBreaker, WeaponIds.CompoundBow, WeaponIds.CrescentPike,
        WeaponIds.DragonspineSpear, WeaponIds.ForestRegalia, WeaponIds.Frostbearer, WeaponIds.FruitOfFulfillment,
        WeaponIds.HakushinRing, WeaponIds.Hamayumi, WeaponIds.KatsuragikiriNagamasa, WeaponIds.KingsSquire,
        WeaponIds.Moonpiercer, WeaponIds.PrototypeArchaic, WeaponIds.PrototypeCrescent, WeaponIds.PrototypeRancour,
        WeaponIds.PrototypeStarglitter, WeaponIds.SnowTombedStarsilver,
      ]]),
    ],
    new VideoSourceClass("Анимекул: Анализ ВСЕГО Крафтового Оружия | Тир-лист полезности [Genshin Impact]").setYoutubeUrl("https://youtu.be/CU-BxsNF-qw"),
  ]),
  [TierListWeaponsTitles.Catalyst]: TierListWeaponsClass.init([
    TierListWeaponsTitles.Catalyst,
    [
      TierListWeaponsListItemClass.init(["S", "Лучшие", [
        WeaponIds.LostPrayerToTheSacredWinds, WeaponIds.StarcallersWatch, WeaponIds.SurfsUp,
        WeaponIds.TomeOfTheEternalFlow, WeaponIds.VividNotions,
      ]]),
      TierListWeaponsListItemClass.init(["A", "Хорошие", [
        WeaponIds.AThousandFloatingDreams, WeaponIds.CashflowSupervision, WeaponIds.CranesEchoingCall,
        WeaponIds.KagurasVerity, WeaponIds.TheWidsith, WeaponIds.ThrillingTalesOfDragonSlayers,
        WeaponIds.TulaytullahsRemembrance,
      ]]),
      TierListWeaponsListItemClass.init(["B", "Опциональные", [
        WeaponIds.FavoniusCodex, WeaponIds.FlowingPurity, WeaponIds.PrototypeAmber, WeaponIds.RingOfYaxche,
        WeaponIds.SacrificialFragments, WeaponIds.SacrificialJade, WeaponIds.SkywardAtlas, WeaponIds.WanderingEvenstar,
      ]]),
      TierListWeaponsListItemClass.init(["C", "Если нет вариантов лучше", [
        WeaponIds.AshGravenDrinkingHorn, WeaponIds.BlackcliffAgate, WeaponIds.EverlastingMoonglow,
        WeaponIds.HakushinRing, WeaponIds.JadefallsSplendor, WeaponIds.MemoryOfDust, WeaponIds.OathswornEye,
        WeaponIds.SolarPearl, WeaponIds.SunnyMorningSleepIn,
      ]]),
      TierListWeaponsListItemClass.init(["D", "На крайний случай", [
        WeaponIds.BalladOfTheBoundlessBlue, WeaponIds.DodocoTales, WeaponIds.MagicGuide, WeaponIds.MappaMare,
        WeaponIds.WineAndSong,
      ]]),
      TierListWeaponsListItemClass.init(["F", "Худшие", [
        WeaponIds.EmeraldOrb, WeaponIds.EyeOfPerception, WeaponIds.Frostbearer, WeaponIds.FruitOfFulfillment,
        WeaponIds.OtherworldlyStory, WeaponIds.RoyalGrimoire, WeaponIds.TwinNephrite, WeaponIds.WaveridingWhirl,
      ]]),
    ],
    new VideoSourceClass("Miron MinMax: Лучшие и Худшие Катализаторы | Тир-лист | 2025").setVkUrl("https://vkvideo.ru/video-227044935_456239231"),
  ]),
  [TierListWeaponsTitles.Bow]: TierListWeaponsClass.init([
    TierListWeaponsTitles.Bow,
    [
      TierListWeaponsListItemClass.init(["S", "Лучшие", [
        WeaponIds.AquaSimulacra, WeaponIds.ElegyForTheEnd, WeaponIds.FavoniusWarbow, WeaponIds.SkywardHarp,
      ]]),
      TierListWeaponsListItemClass.init(["A", "Отличные", [
        WeaponIds.AstralVulturesCrimsonPlumage, WeaponIds.HuntersPath, WeaponIds.PolarStar,
        WeaponIds.TheFirstGreatMagic, WeaponIds.ThunderingPulse,
      ]]),
      TierListWeaponsListItemClass.init(["B", "Хорошие", [
        WeaponIds.AlleyHunter, WeaponIds.AmosBow, WeaponIds.BlackcliffWarbow, WeaponIds.ChainBreaker,
        WeaponIds.FlowerWreathedFeathers, WeaponIds.RangeGauge, WeaponIds.SacrificialBow,
        WeaponIds.ScionOfTheBlazingSun, WeaponIds.Slingshot, WeaponIds.SongOfStillness, WeaponIds.TheStringless,
      ]]),
      TierListWeaponsListItemClass.init(["C", "Ситуативные", [
        WeaponIds.FadingTwilight, WeaponIds.Hamayumi, WeaponIds.IbisPiercer, WeaponIds.MouunsMoon,
        WeaponIds.PrototypeCrescent, WeaponIds.RecurveBow, WeaponIds.Rust, WeaponIds.SilvershowerHeartstrings,
        WeaponIds.TheViridescentHunt, WeaponIds.WindblumeOde,
      ]]),
      TierListWeaponsListItemClass.init(["D", "Плохие", [
        WeaponIds.Cloudforged, WeaponIds.CompoundBow, WeaponIds.EndOfTheLine, WeaponIds.KingsSquire,
        WeaponIds.Messenger, WeaponIds.MitternachtsWaltz, WeaponIds.Predator, WeaponIds.RavenBow, WeaponIds.RoyalBow,
        WeaponIds.SharpshootersOath,
      ]]),
    ],
    new VideoSourceClass("Miron MinMax: Лучшие и Худшие Луки | Тир-лист (2025)").setVkUrl("https://vkvideo.ru/video-227044935_456239218"),
  ]),
  [TierListWeaponsTitles.Polearm]: TierListWeaponsClass.init([
    TierListWeaponsTitles.Polearm,
    [
      TierListWeaponsListItemClass.init(["S", "Лучшие", [
        WeaponIds.FavoniusLance, WeaponIds.StaffOfHoma, WeaponIds.StaffOfTheScarletSands,
      ]]),
      TierListWeaponsListItemClass.init(["A", "Отличные", [
        WeaponIds.CrimsonMoonsSemblance, WeaponIds.EngulfingLightning, WeaponIds.LumidouceElegy,
        WeaponIds.PrimordialJadeWingedSpear,
      ]]),
      TierListWeaponsListItemClass.init(["B", "Хорошие", [
        WeaponIds.BalladOfTheFjords, WeaponIds.BlackcliffPole, WeaponIds.CalamityQueller, WeaponIds.Deathmatch,
        WeaponIds.DragonsBane, WeaponIds.SkywardSpine, WeaponIds.TamayurateiNoOhanashi, WeaponIds.TheCatch,
        WeaponIds.VortexVanquisher, WeaponIds.WavebreakersFin,
      ]]),
      TierListWeaponsListItemClass.init(["C", "Ситуативные", [
        WeaponIds.BlackTassel, WeaponIds.DialoguesOfTheDesertSages, WeaponIds.FootprintOfTheRainbow,
        WeaponIds.LithicSpear, WeaponIds.KitainCrossSpear, WeaponIds.MissiveWindspear, WeaponIds.MountainBracingBolt,
        WeaponIds.ProspectorsDrill, WeaponIds.RightfulReward, WeaponIds.RoyalSpear, WeaponIds.WhiteTassel,
      ]]),
      TierListWeaponsListItemClass.init(["D", "Плохие", [
        WeaponIds.CrescentPike, WeaponIds.DragonspineSpear, WeaponIds.Halberd, WeaponIds.Moonpiercer,
        WeaponIds.PrototypeStarglitter,
      ]]),
    ],
    new VideoSourceClass("Miron MinMax: Лучшие и Худшие Копья | Тирлист Древкового Оружия | 2025").setVkUrl("https://vkvideo.ru/video-227044935_456239209"),
  ]),
  [TierListWeaponsTitles.Claymore]: TierListWeaponsClass.init([
    TierListWeaponsTitles.Claymore,
    [
      TierListWeaponsListItemClass.init(["S", "Лучшие", [
        WeaponIds.AThousandBlazingSuns, WeaponIds.BeaconOfTheReedSea, WeaponIds.SerpentSpine, WeaponIds.Verdict,
      ]]),
      TierListWeaponsListItemClass.init(["A", "Хорошие", [
        WeaponIds.Akuoumaru, WeaponIds.FangOfTheMountainKing, WeaponIds.FruitfulHook, WeaponIds.RedhornStonethresher,
        WeaponIds.WolfsGravestone,
      ]]),
      TierListWeaponsListItemClass.init(["B", "Середнячки", [
        WeaponIds.BlackcliffSlasher, WeaponIds.EarthShaker, WeaponIds.FavoniusGreatsword, WeaponIds.MailedFlower,
        WeaponIds.Rainslasher, WeaponIds.SkywardPride, WeaponIds.SongOfBrokenPines, WeaponIds.TheUnforged,
        WeaponIds.TidalShadow, WeaponIds.UltimateOverlordsMegaMagicSword,
      ]]),
      TierListWeaponsListItemClass.init(["C", "Ситуативное оружие", [
        WeaponIds.BloodtaintedGreatsword, WeaponIds.KatsuragikiriNagamasa, WeaponIds.LithicBlade,
        WeaponIds.MakhairaAquamarine, WeaponIds.PortablePowerSaw, WeaponIds.PrototypeArchaic, WeaponIds.Whiteblind,
      ]]),
      TierListWeaponsListItemClass.init(["D", "Не рекомендуется к прокачке", [
        WeaponIds.DebateClub, WeaponIds.FerrousShadow, WeaponIds.ForestRegalia, WeaponIds.LuxuriousSeaLord,
        WeaponIds.RoyalGreatsword, WeaponIds.SacrificialGreatsword, WeaponIds.SkyriderGreatsword,
        WeaponIds.SnowTombedStarsilver, WeaponIds.TalkingStick, WeaponIds.TheBell, WeaponIds.WhiteIronGreatsword,
      ]]),
    ],
    new VideoSourceClass("Miron MinMax: Лучшие и Худшие Двуручные Мечи | Тир-лист (2025)").setVkUrl("https://vkvideo.ru/video-227044935_456239205"),
  ]),
  [TierListWeaponsTitles.Sword]: TierListWeaponsClass.init([
    TierListWeaponsTitles.Sword,
    [
      TierListWeaponsListItemClass.init(["S", "Лучшее оружие", [
        WeaponIds.Absolution, WeaponIds.FavoniusSword, WeaponIds.MistsplitterReforged, WeaponIds.PeakPatrolSong,
      ]]),
      TierListWeaponsListItemClass.init(["A", "Хорошее оружие", [
        WeaponIds.FreedomSworn, WeaponIds.HaranGeppakuFutsu, WeaponIds.LightOfFoliarIncision,
        WeaponIds.PrimordialJadeCutter, WeaponIds.SacrificialSword, WeaponIds.SplendorOfTranquilWaters,
        WeaponIds.UrakuMisugiri, WeaponIds.XiphosMoonlight,
      ]]),
      TierListWeaponsListItemClass.init(["B", "Опциональное оружие", [
        WeaponIds.FesteringDesire, WeaponIds.FleuveCendreFerryman, WeaponIds.IronSting, WeaponIds.KeyOfKhajNisut,
        WeaponIds.SkywardBlade, WeaponIds.TheBlackSword, WeaponIds.ToukabouShigure, WeaponIds.WolfFang,
      ]]),
      TierListWeaponsListItemClass.init(["C", "Если нет альтернатив", [
        WeaponIds.BlackcliffLongsword, WeaponIds.CalamityOfEshu, WeaponIds.FinaleOfTheDeep, WeaponIds.HarbingerOfDawn,
        WeaponIds.SapwoodBlade, WeaponIds.SturdyBone, WeaponIds.SummitShaper, WeaponIds.TheAlleyFlash,
        WeaponIds.TheDockhandsAssistant,
      ]]),
      TierListWeaponsListItemClass.init(["D", "На крайний случай", [
        WeaponIds.AmenomaKageuchi, WeaponIds.AquilaFavonia, WeaponIds.CinnabarSpindle, WeaponIds.FluteOfEzpitzal,
        WeaponIds.KagotsurubeIsshin, WeaponIds.LionsRoar, WeaponIds.RoyalLongsword, WeaponIds.SwordOfNarzissenkreuz,
      ]]),
      TierListWeaponsListItemClass.init(["F", "Худшее оружие", [
        WeaponIds.CoolSteel, WeaponIds.DarkIronSword, WeaponIds.FilletBlade, WeaponIds.PrototypeRancour,
        WeaponIds.SkyriderSword, WeaponIds.SwordOfDescension, WeaponIds.TheFlute, WeaponIds.TravelersHandySword,
      ]]),
    ],
    new VideoSourceClass("Miron MinMax: Лучшие и Худшие Одноручные Мечи | Тир-лист (2025)").setVkUrl("https://vkvideo.ru/video-227044935_456239200"),
  ]),
} as Record<TierListWeapons["title"], TierListWeapons>;
