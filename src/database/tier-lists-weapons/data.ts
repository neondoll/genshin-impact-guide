import type { ITierListWeapons } from "./types";
import { CTierListWeapons, CTierListWeaponsListItem } from "./classes";
import { CVideoSource } from "../video-sources/classes";
import { WeaponTypeKeys } from "../weapon-types/enums";
import weaponTypes from "../weapon-types/data";

const WeaponTypeNameByKey = (key: keyof typeof WeaponTypeKeys) => {
  return weaponTypes[WeaponTypeKeys[key]].name;
};

export default {
  "Крафтовое оружие": new CTierListWeapons(
    [
      new CTierListWeaponsListItem("Могут быть полезны", undefined, [
        "EarthShaker", "FinaleOfTheDeep", "FlowingPurity", "FluteOfEzpitzal", "FootprintOfTheRainbow", "IronSting",
        "KitainCrossSpear", "MappaMare", "PrototypeAmber", "RightfulReward", "RingOfYaxche", "SapwoodBlade",
        "SongOfStillness", "TidalShadow", "Whiteblind",
      ]),
      new CTierListWeaponsListItem("Трата ресурсов", undefined, [
        "AmenomaKageuchi", "ChainBreaker", "CompoundBow", "CrescentPike", "DragonspineSpear", "ForestRegalia",
        "Frostbearer", "FruitOfFulfillment", "HakushinRing", "Hamayumi", "KatsuragikiriNagamasa", "KingsSquire",
        "Moonpiercer", "PrototypeArchaic", "PrototypeCrescent", "PrototypeRancour", "PrototypeStarglitter",
        "SnowTombedStarsilver",
      ]),
    ],
    new CVideoSource("Анимекул: Анализ ВСЕГО Крафтового Оружия | Тир-лист полезности [Genshin Impact]").setYoutubeUrl("https://youtu.be/CU-BxsNF-qw"),
  ),
  [WeaponTypeNameByKey("💥")]: new CTierListWeapons(
    [
      new CTierListWeaponsListItem("S", "Лучшие", [
        "LostPrayerToTheSacredWinds", "StarcallersWatch", "SurfsUp", "TomeOfTheEternalFlow", "VividNotions",
      ]),
      new CTierListWeaponsListItem("A", "Хорошие", [
        "AThousandFloatingDreams", "CashflowSupervision", "CranesEchoingCall", "KagurasVerity", "TheWidsith",
        "ThrillingTalesOfDragonSlayers", "TulaytullahsRemembrance",
      ]),
      new CTierListWeaponsListItem("B", "Опциональные", [
        "FavoniusCodex", "FlowingPurity", "PrototypeAmber", "RingOfYaxche", "SacrificialFragments", "SacrificialJade",
        "SkywardAtlas", "WanderingEvenstar",
      ]),
      new CTierListWeaponsListItem("C", "Если нет вариантов лучше", [
        "AshGravenDrinkingHorn", "BlackcliffAgate", "EverlastingMoonglow", "HakushinRing", "JadefallsSplendor",
        "MemoryOfDust", "OathswornEye", "SolarPearl", "SunnyMorningSleepIn",
      ]),
      new CTierListWeaponsListItem("D", "На крайний случай", [
        "BalladOfTheBoundlessBlue", "DodocoTales", "MagicGkeye", "MappaMare", "WineAndSong",
      ]),
      new CTierListWeaponsListItem("F", "Худшие", [
        "EmeraldOrb", "EyeOfPerception", "Frostbearer", "FruitOfFulfillment", "OtherworldlyStory", "RoyalGrimoire",
        "TwinNephrite", "WaveridingWhirl",
      ]),
    ],
    new CVideoSource("Miron MinMax: Лучшие и Худшие Катализаторы | Тир-лист | 2025").setVkUrl("https://vkvideo.ru/video-227044935_456239231"),
  ),
  [WeaponTypeNameByKey("🏹")]: new CTierListWeapons(
    [
      new CTierListWeaponsListItem("S", "Лучшие", ["AquaSimulacra", "ElegyForTheEnd", "FavoniusWarbow", "SkywardHarp"]),
      new CTierListWeaponsListItem("A", "Отличные", [
        "AstralVulturesCrimsonPlumage", "HuntersPath", "PolarStar", "TheFirstGreatMagic", "ThunderingPulse",
      ]),
      new CTierListWeaponsListItem("B", "Хорошие", [
        "AlleyHunter", "AmosBow", "BlackcliffWarbow", "ChainBreaker", "FlowerWreathedFeathers", "RangeGauge",
        "SacrificialBow", "ScionOfTheBlazingSun", "Slingshot", "SongOfStillness", "TheStringless",
      ]),
      new CTierListWeaponsListItem("C", "Ситуативные", [
        "FadingTwilight", "Hamayumi", "IbisPiercer", "MouunsMoon", "PrototypeCrescent", "RecurveBow", "Rust",
        "SilvershowerHeartstrings", "TheViridescentHunt", "WindblumeOde",
      ]),
      new CTierListWeaponsListItem("D", "Плохие", [
        "Cloudforged", "CompoundBow", "EndOfTheLine", "KingsSquire", "Messenger", "MitternachtsWaltz", "Predator",
        "RavenBow", "RoyalBow", "SharpshootersOath",
      ]),
    ],
    new CVideoSource("Miron MinMax: Лучшие и Худшие Луки | Тир-лист (2025)").setVkUrl("https://vkvideo.ru/video-227044935_456239218"),
  ),
  [WeaponTypeNameByKey("🔱")]: new CTierListWeapons(
    [
      new CTierListWeaponsListItem("S", "Лучшие", ["FavoniusLance", "StaffOfHoma", "StaffOfTheScarletSands"]),
      new CTierListWeaponsListItem("A", "Отличные", [
        "CrimsonMoonsSemblance", "EngulfingLightning", "LumidouceElegy", "PrimordialJadeWingedSpear",
      ]),
      new CTierListWeaponsListItem("B", "Хорошие", [
        "BalladOfTheFjords", "BlackcliffPole", "CalamityQueller", "Deathmatch", "DragonsBane", "SkywardSpine",
        "TamayurateiNoOhanashi", "TheCatch", "VortexVanquisher", "WavebreakersFin",
      ]),
      new CTierListWeaponsListItem("C", "Ситуативные", [
        "BlackTassel", "DialoguesOfTheDesertSages", "FootprintOfTheRainbow", "LithicSpear", "KitainCrossSpear",
        "MissiveWindspear", "MountainBracingBolt", "ProspectorsDrill", "RightfulReward", "RoyalSpear", "WhiteTassel",
      ]),
      new CTierListWeaponsListItem("D", "Плохие", [
        "CrescentPike", "DragonspineSpear", "Halberd", "Moonpiercer", "PrototypeStarglitter",
      ]),
    ],
    new CVideoSource("Miron MinMax: Лучшие и Худшие Копья | Тирлист Древкового Оружия | 2025").setVkUrl("https://vkvideo.ru/video-227044935_456239209"),
  ),
  [WeaponTypeNameByKey("🗡️")]: new CTierListWeapons(
    [
      new CTierListWeaponsListItem("S", "Лучшие", [
        "AThousandBlazingSuns", "BeaconOfTheReedSea", "SerpentSpine", "Verdict",
      ]),
      new CTierListWeaponsListItem("A", "Хорошие", [
        "Akuoumaru", "FangOfTheMountainKing", "FruitfulHook", "RedhornStonethresher", "WolfsGravestone",
      ]),
      new CTierListWeaponsListItem("B", "Середнячки", [
        "BlackcliffSlasher", "EarthShaker", "FavoniusGreatsword", "MailedFlower", "Rainslasher", "SkywardPride",
        "SongOfBrokenPines", "TheUnforged", "TidalShadow", "UltimateOverlordsMegaMagicSword",
      ]),
      new CTierListWeaponsListItem("C", "Ситуативное оружие", [
        "BloodtaintedGreatsword", "KatsuragikiriNagamasa", "LithicBlade", "MakhairaAquamarine", "PortablePowerSaw",
        "PrototypeArchaic", "Whiteblind",
      ]),
      new CTierListWeaponsListItem("D", "Не рекомендуется к прокачке", [
        "DebateClub", "FerrousShadow", "ForestRegalia", "LuxuriousSeaLord", "RoyalGreatsword", "SacrificialGreatsword",
        "SkyriderGreatsword", "SnowTombedStarsilver", "TalkingStick", "TheBell", "WhiteIronGreatsword",
      ]),
    ],
    new CVideoSource("Miron MinMax: Лучшие и Худшие Двуручные Мечи | Тир-лист (2025)").setVkUrl("https://vkvideo.ru/video-227044935_456239205"),
  ),
  [WeaponTypeNameByKey("⚔️")]: new CTierListWeapons(
    [
      new CTierListWeaponsListItem("S", "Лучшее оружие", [
        "Absolution", "FavoniusSword", "MistsplitterReforged", "PeakPatrolSong",
      ]),
      new CTierListWeaponsListItem("A", "Хорошее оружие", [
        "FreedomSworn", "HaranGeppakuFutsu", "LightOfFoliarIncision", "PrimordialJadeCutter", "SacrificialSword",
        "SplendorOfTranquilWaters", "UrakuMisugiri", "XiphosMoonlight",
      ]),
      new CTierListWeaponsListItem("B", "Опциональное оружие", [
        "FesteringDesire", "FleuveCendreFerryman", "IronSting", "KeyOfKhajNisut", "SkywardBlade", "TheBlackSword",
        "ToukabouShigure", "WolfFang",
      ]),
      new CTierListWeaponsListItem("C", "Если нет альтернатив", [
        "BlackcliffLongsword", "CalamityOfEshu", "FinaleOfTheDeep", "HarbingerOfDawn", "SapwoodBlade", "SturdyBone",
        "SummitShaper", "TheAlleyFlash", "TheDockhandsAssistant",
      ]),
      new CTierListWeaponsListItem("D", "На крайний случай", [
        "AmenomaKageuchi", "AquilaFavonia", "CinnabarSpindle", "FluteOfEzpitzal", "KagotsurubeIsshin", "LionsRoar",
        "RoyalLongsword", "SwordOfNarzissenkreuz",
      ]),
      new CTierListWeaponsListItem("F", "Худшее оружие", [
        "CoolSteel", "DarkIronSword", "FilletBlade", "PrototypeRancour", "SkyriderSword", "SwordOfDescension",
        "TheFlute", "TravelersHandySword",
      ]),
    ],
    new CVideoSource("Miron MinMax: Лучшие и Худшие Одноручные Мечи | Тир-лист (2025)").setVkUrl("https://vkvideo.ru/video-227044935_456239200"),
  ),
} as Record<string, ITierListWeapons>;
