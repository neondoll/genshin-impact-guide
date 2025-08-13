import weaponTypes from "./weapon-types";
import { _VideoSource } from "./video-source";
import { WeaponKeys } from "./enums/weapon";
import { WeaponTypeKeys } from "./enums/weapon-type";
import type { TierListWeapons, TierListWeaponsListItem } from "./types/tier-list-weapons";

class _TierListWeapons implements TierListWeapons {
  readonly list: TierListWeapons["list"];
  readonly video_source: TierListWeapons["video_source"];

  constructor(list: TierListWeapons["list"], video_source: TierListWeapons["video_source"]) {
    this.list = list;
    this.video_source = video_source;
  }
}

class _TierListWeaponsListItem implements TierListWeaponsListItem {
  readonly tier: TierListWeaponsListItem["tier"];
  readonly description: TierListWeaponsListItem["description"];
  readonly weapon_keys: TierListWeaponsListItem["weapon_keys"];

  constructor(
    tier: TierListWeaponsListItem["tier"],
    description: TierListWeaponsListItem["description"],
    weaponKeys: (keyof typeof WeaponKeys)[],
  ) {
    this.tier = tier;
    this.description = description;
    this.weapon_keys = weaponKeys.map(weaponKey => WeaponKeys[weaponKey]);
  }
}

const WeaponTypeNameByKey = (key: keyof typeof WeaponTypeKeys) => {
  return weaponTypes[WeaponTypeKeys[key]].name;
};

export default {
  "Крафтовое оружие": new _TierListWeapons(
    [
      new _TierListWeaponsListItem("Могут быть полезны", undefined, [
        "EarthShaker", "FinaleOfTheDeep", "FlowingPurity", "FluteOfEzpitzal", "FootprintOfTheRainbow", "IronSting",
        "KitainCrossSpear", "MappaMare", "PrototypeAmber", "RightfulReward", "RingOfYaxche", "SapwoodBlade",
        "SongOfStillness", "TidalShadow", "Whiteblind",
      ]),
      new _TierListWeaponsListItem("Трата ресурсов", undefined, [
        "AmenomaKageuchi", "ChainBreaker", "CompoundBow", "CrescentPike", "DragonspineSpear", "ForestRegalia",
        "Frostbearer", "FruitOfFulfillment", "HakushinRing", "Hamayumi", "KatsuragikiriNagamasa", "KingsSquire",
        "Moonpiercer", "PrototypeArchaic", "PrototypeCrescent", "PrototypeRancour", "PrototypeStarglitter",
        "SnowTombedStarsilver",
      ]),
    ],
    new _VideoSource("Анимекул: Анализ ВСЕГО Крафтового Оружия | Тир-лист полезности [Genshin Impact]").setYoutubeUrl("https://youtu.be/CU-BxsNF-qw"),
  ),
  [WeaponTypeNameByKey("💥")]: new _TierListWeapons(
    [
      new _TierListWeaponsListItem("S", "Лучшие", [
        "LostPrayerToTheSacredWinds", "StarcallersWatch", "SurfsUp", "TomeOfTheEternalFlow", "VividNotions",
      ]),
      new _TierListWeaponsListItem("A", "Хорошие", [
        "AThousandFloatingDreams", "CashflowSupervision", "CranesEchoingCall", "KagurasVerity", "TheWidsith",
        "ThrillingTalesOfDragonSlayers", "TulaytullahsRemembrance",
      ]),
      new _TierListWeaponsListItem("B", "Опциональные", [
        "FavoniusCodex", "FlowingPurity", "PrototypeAmber", "RingOfYaxche", "SacrificialFragments", "SacrificialJade",
        "SkywardAtlas", "WanderingEvenstar",
      ]),
      new _TierListWeaponsListItem("C", "Если нет вариантов лучше", [
        "AshGravenDrinkingHorn", "BlackcliffAgate", "EverlastingMoonglow", "HakushinRing", "JadefallsSplendor",
        "MemoryOfDust", "OathswornEye", "SolarPearl", "SunnyMorningSleepIn",
      ]),
      new _TierListWeaponsListItem("D", "На крайний случай", [
        "BalladOfTheBoundlessBlue", "DodocoTales", "MagicGkeye", "MappaMare", "WineAndSong",
      ]),
      new _TierListWeaponsListItem("F", "Худшие", [
        "EmeraldOrb", "EyeOfPerception", "Frostbearer", "FruitOfFulfillment", "OtherworldlyStory", "RoyalGrimoire",
        "TwinNephrite", "WaveridingWhirl",
      ]),
    ],
    new _VideoSource("Miron MinMax: Лучшие и Худшие Катализаторы | Тир-лист | 2025").setVkUrl("https://vkvideo.ru/video-227044935_456239231"),
  ),
  [WeaponTypeNameByKey("🏹")]: new _TierListWeapons(
    [
      new _TierListWeaponsListItem("S", "Лучшие", ["AquaSimulacra", "ElegyForTheEnd", "FavoniusWarbow", "SkywardHarp"]),
      new _TierListWeaponsListItem("A", "Отличные", [
        "AstralVulturesCrimsonPlumage", "HuntersPath", "PolarStar", "TheFirstGreatMagic", "ThunderingPulse",
      ]),
      new _TierListWeaponsListItem("B", "Хорошие", [
        "AlleyHunter", "AmosBow", "BlackcliffWarbow", "ChainBreaker", "FlowerWreathedFeathers", "RangeGauge",
        "SacrificialBow", "ScionOfTheBlazingSun", "Slingshot", "SongOfStillness", "TheStringless",
      ]),
      new _TierListWeaponsListItem("C", "Ситуативные", [
        "FadingTwilight", "Hamayumi", "IbisPiercer", "MouunsMoon", "PrototypeCrescent", "RecurveBow", "Rust",
        "SilvershowerHeartstrings", "TheViridescentHunt", "WindblumeOde",
      ]),
      new _TierListWeaponsListItem("D", "Плохие", [
        "Cloudforged", "CompoundBow", "EndOfTheLine", "KingsSquire", "Messenger", "MitternachtsWaltz", "Predator",
        "RavenBow", "RoyalBow", "SharpshootersOath",
      ]),
    ],
    new _VideoSource("Miron MinMax: Лучшие и Худшие Луки | Тир-лист (2025)").setVkUrl("https://vkvideo.ru/video-227044935_456239218"),
  ),
  [WeaponTypeNameByKey("🔱")]: new _TierListWeapons(
    [
      new _TierListWeaponsListItem("S", "Лучшие", ["FavoniusLance", "StaffOfHoma", "StaffOfTheScarletSands"]),
      new _TierListWeaponsListItem("A", "Отличные", [
        "CrimsonMoonsSemblance", "EngulfingLightning", "LumidouceElegy", "PrimordialJadeWingedSpear",
      ]),
      new _TierListWeaponsListItem("B", "Хорошие", [
        "BalladOfTheFjords", "BlackcliffPole", "CalamityQueller", "Deathmatch", "DragonsBane", "SkywardSpine",
        "TamayurateiNoOhanashi", "TheCatch", "VortexVanquisher", "WavebreakersFin",
      ]),
      new _TierListWeaponsListItem("C", "Ситуативные", [
        "BlackTassel", "DialoguesOfTheDesertSages", "FootprintOfTheRainbow", "LithicSpear", "KitainCrossSpear",
        "MissiveWindspear", "MountainBracingBolt", "ProspectorsDrill", "RightfulReward", "RoyalSpear", "WhiteTassel",
      ]),
      new _TierListWeaponsListItem("D", "Плохие", [
        "CrescentPike", "DragonspineSpear", "Halberd", "Moonpiercer", "PrototypeStarglitter",
      ]),
    ],
    new _VideoSource("Miron MinMax: Лучшие и Худшие Копья | Тирлист Древкового Оружия | 2025").setVkUrl("https://vkvideo.ru/video-227044935_456239209"),
  ),
  [WeaponTypeNameByKey("🗡️")]: new _TierListWeapons(
    [
      new _TierListWeaponsListItem("S", "Лучшие", [
        "AThousandBlazingSuns", "BeaconOfTheReedSea", "SerpentSpine", "Verdict",
      ]),
      new _TierListWeaponsListItem("A", "Хорошие", [
        "Akuoumaru", "FangOfTheMountainKing", "FruitfulHook", "RedhornStonethresher", "WolfsGravestone",
      ]),
      new _TierListWeaponsListItem("B", "Середнячки", [
        "BlackcliffSlasher", "EarthShaker", "FavoniusGreatsword", "MailedFlower", "Rainslasher", "SkywardPride",
        "SongOfBrokenPines", "TheUnforged", "TidalShadow", "UltimateOverlordsMegaMagicSword",
      ]),
      new _TierListWeaponsListItem("C", "Ситуативное оружие", [
        "BloodtaintedGreatsword", "KatsuragikiriNagamasa", "LithicBlade", "MakhairaAquamarine", "PortablePowerSaw",
        "PrototypeArchaic", "Whiteblind",
      ]),
      new _TierListWeaponsListItem("D", "Не рекомендуется к прокачке", [
        "DebateClub", "FerrousShadow", "ForestRegalia", "LuxuriousSeaLord", "RoyalGreatsword", "SacrificialGreatsword",
        "SkyriderGreatsword", "SnowTombedStarsilver", "TalkingStick", "TheBell", "WhiteIronGreatsword",
      ]),
    ],
    new _VideoSource("Miron MinMax: Лучшие и Худшие Двуручные Мечи | Тир-лист (2025)").setVkUrl("https://vkvideo.ru/video-227044935_456239205"),
  ),
  [WeaponTypeNameByKey("⚔️")]: new _TierListWeapons(
    [
      new _TierListWeaponsListItem("S", "Лучшее оружие", [
        "Absolution", "FavoniusSword", "MistsplitterReforged", "PeakPatrolSong",
      ]),
      new _TierListWeaponsListItem("A", "Хорошее оружие", [
        "FreedomSworn", "HaranGeppakuFutsu", "LightOfFoliarIncision", "PrimordialJadeCutter", "SacrificialSword",
        "SplendorOfTranquilWaters", "UrakuMisugiri", "XiphosMoonlight",
      ]),
      new _TierListWeaponsListItem("B", "Опциональное оружие", [
        "FesteringDesire", "FleuveCendreFerryman", "IronSting", "KeyOfKhajNisut", "SkywardBlade", "TheBlackSword",
        "ToukabouShigure", "WolfFang",
      ]),
      new _TierListWeaponsListItem("C", "Если нет альтернатив", [
        "BlackcliffLongsword", "CalamityOfEshu", "FinaleOfTheDeep", "HarbingerOfDawn", "SapwoodBlade", "SturdyBone",
        "SummitShaper", "TheAlleyFlash", "TheDockhandsAssistant",
      ]),
      new _TierListWeaponsListItem("D", "На крайний случай", [
        "AmenomaKageuchi", "AquilaFavonia", "CinnabarSpindle", "FluteOfEzpitzal", "KagotsurubeIsshin", "LionsRoar",
        "RoyalLongsword", "SwordOfNarzissenkreuz",
      ]),
      new _TierListWeaponsListItem("F", "Худшее оружие", [
        "CoolSteel", "DarkIronSword", "FilletBlade", "PrototypeRancour", "SkyriderSword", "SwordOfDescension",
        "TheFlute", "TravelersHandySword",
      ]),
    ],
    new _VideoSource("Miron MinMax: Лучшие и Худшие Одноручные Мечи | Тир-лист (2025)").setVkUrl("https://vkvideo.ru/video-227044935_456239200"),
  ),
} as Record<string, TierListWeapons>;
