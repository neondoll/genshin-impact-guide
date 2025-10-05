import type { TierListWeapons as Type } from "@/types/tier-list-weapons";
import { TierListWeapons as Class, TierListWeaponsListItem as ClassListItem } from "@/classes/tier-list-weapons";
import { TierListWeaponsTitles } from "@/enums/tier-list-weapons";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default {
  [TierListWeaponsTitles.Bow]: Class.init([
    TierListWeaponsTitles.Bow,
    [
      ClassListItem.init([
        "S", "Лучшие", [
          WeaponIds.AquaSimulacra, WeaponIds.ElegyForTheEnd, WeaponIds.FavoniusWarbow, WeaponIds.SkywardHarp,
        ],
      ]),
      ClassListItem.init([
        "A", "Отличные", [
          WeaponIds.AstralVulturesCrimsonPlumage, WeaponIds.HuntersPath, WeaponIds.PolarStar,
          WeaponIds.TheFirstGreatMagic, WeaponIds.ThunderingPulse,
        ],
      ]),
      ClassListItem.init([
        "B", "Хорошие", [
          WeaponIds.AlleyHunter, WeaponIds.AmosBow, WeaponIds.BlackcliffWarbow, WeaponIds.ChainBreaker,
          WeaponIds.FlowerWreathedFeathers, WeaponIds.RangeGauge, WeaponIds.SacrificialBow,
          WeaponIds.ScionOfTheBlazingSun, WeaponIds.Slingshot, WeaponIds.SongOfStillness, WeaponIds.TheStringless,
        ],
      ]),
      ClassListItem.init([
        "C", "Ситуативные", [
          WeaponIds.FadingTwilight, WeaponIds.Hamayumi, WeaponIds.IbisPiercer, WeaponIds.MouunsMoon,
          WeaponIds.PrototypeCrescent, WeaponIds.RecurveBow, WeaponIds.Rust, WeaponIds.SilvershowerHeartstrings,
          WeaponIds.TheViridescentHunt, WeaponIds.WindblumeOde,
        ],
      ]),
      ClassListItem.init([
        "D", "Плохие", [
          WeaponIds.Cloudforged, WeaponIds.CompoundBow, WeaponIds.EndOfTheLine, WeaponIds.KingsSquire,
          WeaponIds.Messenger, WeaponIds.MitternachtsWaltz, WeaponIds.Predator, WeaponIds.RavenBow, WeaponIds.RoyalBow,
          WeaponIds.SharpshootersOath,
        ],
      ]),
    ],
    VideoSourceIds.TheBestAndWorstBows,
  ]),
  [TierListWeaponsTitles.Catalyst]: Class.init([
    TierListWeaponsTitles.Catalyst,
    [
      ClassListItem.init([
        "S", "Лучшие", [
          WeaponIds.LostPrayerToTheSacredWinds, WeaponIds.StarcallersWatch, WeaponIds.SurfsUp,
          WeaponIds.TomeOfTheEternalFlow, WeaponIds.VividNotions,
        ],
      ]),
      ClassListItem.init([
        "A", "Хорошие", [
          WeaponIds.AThousandFloatingDreams, WeaponIds.CashflowSupervision, WeaponIds.CranesEchoingCall,
          WeaponIds.KagurasVerity, WeaponIds.TheWidsith, WeaponIds.ThrillingTalesOfDragonSlayers,
          WeaponIds.TulaytullahsRemembrance,
        ],
      ]),
      ClassListItem.init([
        "B", "Опциональные", [
          WeaponIds.FavoniusCodex, WeaponIds.FlowingPurity, WeaponIds.PrototypeAmber, WeaponIds.RingOfYaxche,
          WeaponIds.SacrificialFragments, WeaponIds.SacrificialJade, WeaponIds.SkywardAtlas, WeaponIds.WanderingEvenstar,
        ],
      ]),
      ClassListItem.init([
        "C", "Если нет вариантов лучше", [
          WeaponIds.AshGravenDrinkingHorn, WeaponIds.BlackcliffAgate, WeaponIds.EverlastingMoonglow,
          WeaponIds.HakushinRing, WeaponIds.JadefallsSplendor, WeaponIds.MemoryOfDust, WeaponIds.OathswornEye,
          WeaponIds.SolarPearl, WeaponIds.SunnyMorningSleepIn,
        ],
      ]),
      ClassListItem.init([
        "D", "На крайний случай", [
          WeaponIds.BalladOfTheBoundlessBlue, WeaponIds.DodocoTales, WeaponIds.MagicGuide, WeaponIds.MappaMare,
          WeaponIds.WineAndSong,
        ],
      ]),
      ClassListItem.init([
        "F", "Худшие", [
          WeaponIds.EmeraldOrb, WeaponIds.EyeOfPerception, WeaponIds.Frostbearer, WeaponIds.FruitOfFulfillment,
          WeaponIds.OtherworldlyStory, WeaponIds.RoyalGrimoire, WeaponIds.TwinNephrite, WeaponIds.WaveridingWhirl,
        ],
      ]),
    ],
    VideoSourceIds.TheBestAndWorstCatalysts,
  ]),
  [TierListWeaponsTitles.Claymore]: Class.init([
    TierListWeaponsTitles.Claymore,
    [
      ClassListItem.init([
        "S", "Лучшие", [
          WeaponIds.AThousandBlazingSuns, WeaponIds.BeaconOfTheReedSea, WeaponIds.SerpentSpine, WeaponIds.Verdict,
        ],
      ]),
      ClassListItem.init([
        "A", "Хорошие", [
          WeaponIds.Akuoumaru, WeaponIds.FangOfTheMountainKing, WeaponIds.FruitfulHook, WeaponIds.RedhornStonethresher,
          WeaponIds.WolfsGravestone,
        ],
      ]),
      ClassListItem.init([
        "B", "Середнячки", [
          WeaponIds.BlackcliffSlasher, WeaponIds.EarthShaker, WeaponIds.FavoniusGreatsword, WeaponIds.MailedFlower,
          WeaponIds.Rainslasher, WeaponIds.SkywardPride, WeaponIds.SongOfBrokenPines, WeaponIds.TheUnforged,
          WeaponIds.TidalShadow, WeaponIds.UltimateOverlordsMegaMagicSword,
        ],
      ]),
      ClassListItem.init([
        "C", "Ситуативное оружие", [
          WeaponIds.BloodtaintedGreatsword, WeaponIds.KatsuragikiriNagamasa, WeaponIds.LithicBlade,
          WeaponIds.MakhairaAquamarine, WeaponIds.PortablePowerSaw, WeaponIds.PrototypeArchaic, WeaponIds.Whiteblind,
        ],
      ]),
      ClassListItem.init([
        "D", "Не рекомендуется к прокачке", [
          WeaponIds.DebateClub, WeaponIds.FerrousShadow, WeaponIds.ForestRegalia, WeaponIds.LuxuriousSeaLord,
          WeaponIds.RoyalGreatsword, WeaponIds.SacrificialGreatsword, WeaponIds.SkyriderGreatsword,
          WeaponIds.SnowTombedStarsilver, WeaponIds.TalkingStick, WeaponIds.TheBell, WeaponIds.WhiteIronGreatsword,
        ],
      ]),
    ],
    VideoSourceIds.TheBestAndWorstClaymores,
  ]),
  [TierListWeaponsTitles.Crafted]: Class.init([
    TierListWeaponsTitles.Crafted,
    [
      ClassListItem.init([
        "Могут быть полезны", undefined, [
          WeaponIds.EarthShaker, WeaponIds.FinaleOfTheDeep, WeaponIds.FlowingPurity, WeaponIds.FluteOfEzpitzal,
          WeaponIds.FootprintOfTheRainbow, WeaponIds.IronSting, WeaponIds.KitainCrossSpear, WeaponIds.MappaMare,
          WeaponIds.PrototypeAmber, WeaponIds.RightfulReward, WeaponIds.RingOfYaxche, WeaponIds.SapwoodBlade,
          WeaponIds.SongOfStillness, WeaponIds.TidalShadow, WeaponIds.Whiteblind,
        ],
      ]),
      ClassListItem.init([
        "Трата ресурсов", undefined, [
          WeaponIds.AmenomaKageuchi, WeaponIds.ChainBreaker, WeaponIds.CompoundBow, WeaponIds.CrescentPike,
          WeaponIds.DragonspineSpear, WeaponIds.ForestRegalia, WeaponIds.Frostbearer, WeaponIds.FruitOfFulfillment,
          WeaponIds.HakushinRing, WeaponIds.Hamayumi, WeaponIds.KatsuragikiriNagamasa, WeaponIds.KingsSquire,
          WeaponIds.Moonpiercer, WeaponIds.PrototypeArchaic, WeaponIds.PrototypeCrescent, WeaponIds.PrototypeRancour,
          WeaponIds.PrototypeStarglitter, WeaponIds.SnowTombedStarsilver,
        ],
      ]),
    ],
    VideoSourceIds.AnalysisOfAllCraftedWeapons,
  ]),
  [TierListWeaponsTitles.Polearm]: Class.init([
    TierListWeaponsTitles.Polearm,
    [
      ClassListItem.init([
        "S", "Лучшие", [
          WeaponIds.FavoniusLance, WeaponIds.StaffOfHoma, WeaponIds.StaffOfTheScarletSands,
        ],
      ]),
      ClassListItem.init([
        "A", "Отличные", [
          WeaponIds.CrimsonMoonsSemblance, WeaponIds.EngulfingLightning, WeaponIds.LumidouceElegy,
          WeaponIds.PrimordialJadeWingedSpear,
        ],
      ]),
      ClassListItem.init([
        "B", "Хорошие", [
          WeaponIds.BalladOfTheFjords, WeaponIds.BlackcliffPole, WeaponIds.CalamityQueller, WeaponIds.Deathmatch,
          WeaponIds.DragonsBane, WeaponIds.SkywardSpine, WeaponIds.TamayurateiNoOhanashi, WeaponIds.TheCatch,
          WeaponIds.VortexVanquisher, WeaponIds.WavebreakersFin,
        ],
      ]),
      ClassListItem.init([
        "C", "Ситуативные", [
          WeaponIds.BlackTassel, WeaponIds.DialoguesOfTheDesertSages, WeaponIds.FootprintOfTheRainbow,
          WeaponIds.LithicSpear, WeaponIds.KitainCrossSpear, WeaponIds.MissiveWindspear, WeaponIds.MountainBracingBolt,
          WeaponIds.ProspectorsDrill, WeaponIds.RightfulReward, WeaponIds.RoyalSpear, WeaponIds.WhiteTassel,
        ],
      ]),
      ClassListItem.init([
        "D", "Плохие", [
          WeaponIds.CrescentPike, WeaponIds.DragonspineSpear, WeaponIds.Halberd, WeaponIds.Moonpiercer,
          WeaponIds.PrototypeStarglitter,
        ],
      ]),
    ],
    VideoSourceIds.TheBestAndWorstPolearms,
  ]),
  [TierListWeaponsTitles.Sword]: Class.init([
    TierListWeaponsTitles.Sword,
    [
      ClassListItem.init([
        "S", "Лучшее оружие", [
          WeaponIds.Absolution, WeaponIds.FavoniusSword, WeaponIds.MistsplitterReforged, WeaponIds.PeakPatrolSong,
        ],
      ]),
      ClassListItem.init([
        "A", "Хорошее оружие", [
          WeaponIds.FreedomSworn, WeaponIds.HaranGeppakuFutsu, WeaponIds.LightOfFoliarIncision,
          WeaponIds.PrimordialJadeCutter, WeaponIds.SacrificialSword, WeaponIds.SplendorOfTranquilWaters,
          WeaponIds.UrakuMisugiri, WeaponIds.XiphosMoonlight,
        ],
      ]),
      ClassListItem.init([
        "B", "Опциональное оружие", [
          WeaponIds.FesteringDesire, WeaponIds.FleuveCendreFerryman, WeaponIds.IronSting, WeaponIds.KeyOfKhajNisut,
          WeaponIds.SkywardBlade, WeaponIds.TheBlackSword, WeaponIds.ToukabouShigure, WeaponIds.WolfFang,
        ],
      ]),
      ClassListItem.init([
        "C", "Если нет альтернатив", [
          WeaponIds.BlackcliffLongsword, WeaponIds.CalamityOfEshu, WeaponIds.FinaleOfTheDeep, WeaponIds.HarbingerOfDawn,
          WeaponIds.SapwoodBlade, WeaponIds.SturdyBone, WeaponIds.SummitShaper, WeaponIds.TheAlleyFlash,
          WeaponIds.TheDockhandsAssistant,
        ],
      ]),
      ClassListItem.init([
        "D", "На крайний случай", [
          WeaponIds.AmenomaKageuchi, WeaponIds.AquilaFavonia, WeaponIds.CinnabarSpindle, WeaponIds.FluteOfEzpitzal,
          WeaponIds.KagotsurubeIsshin, WeaponIds.LionsRoar, WeaponIds.RoyalLongsword, WeaponIds.SwordOfNarzissenkreuz,
        ],
      ]),
      ClassListItem.init([
        "F", "Худшее оружие", [
          WeaponIds.CoolSteel, WeaponIds.DarkIronSword, WeaponIds.FilletBlade, WeaponIds.PrototypeRancour,
          WeaponIds.SkyriderSword, WeaponIds.SwordOfDescension, WeaponIds.TheFlute, WeaponIds.TravelersHandySword,
        ],
      ]),
    ],
    VideoSourceIds.TheBestAndWorstSwords,
  ]),
} as Record<Type["title"], Type>;
