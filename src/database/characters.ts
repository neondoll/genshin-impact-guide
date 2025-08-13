import { CharacterKeys } from "./enums/character";
import { CharacterRoleKeys } from "./enums/character-role";
import { ElementKeys } from "./enums/element";
import { getCharacterRecommendations, getCharacterRole, getElement, getWeaponType } from ".";
import { publicImageSrc } from "@/lib/utils";
import { WeaponKeys } from "./enums/weapon";
import { WeaponTypeKeys } from "./enums/weapon-type";
import type { Character, CharacterArkhe } from "./types/character";

class _Character implements Character {
  private _arkhe: Character["arkhe"];
  private _role_keys: Character["role_keys"];
  private _signature_weapon_key: Character["signature_weapon_key"];
  readonly key: Character["key"];
  readonly name: Character["name"];
  readonly rarity: Character["rarity"];
  readonly weapon_type_key: Character["weapon_type_key"];
  readonly element_key: Character["element_key"];
  readonly image_src: Character["image_src"];

  static PATH = "characters";

  constructor(
    key: keyof typeof CharacterKeys,
    name: Character["name"],
    rarity: Character["rarity"],
    weaponTypeKey: keyof typeof WeaponTypeKeys,
    elementKey: keyof typeof ElementKeys,
    imageName: string,
  ) {
    this.key = CharacterKeys[key];
    this.name = name;
    this.rarity = rarity;
    this.weapon_type_key = WeaponTypeKeys[weaponTypeKey];
    this.element_key = ElementKeys[elementKey];
    this.image_src = publicImageSrc(`${_Character.PATH}/${imageName}`);
  }

  get arkhe() {
    return this._arkhe;
  }

  get element() {
    return getElement(this.element_key);
  }

  get recommendations() {
    return getCharacterRecommendations(this.key);
  }

  get role_keys() {
    return this._role_keys;
  }

  get roles() {
    return this._role_keys ? this._role_keys.map(getCharacterRole) : undefined;
  }

  get signature_weapon_key() {
    return this._signature_weapon_key;
  }

  get weapon_type() {
    return getWeaponType(this.weapon_type_key);
  }

  setArkhe(val: keyof typeof Arkhe) {
    this._arkhe = Arkhe[val];

    return this;
  }

  setRoleKeys(val: keyof typeof RoleKeys) {
    this._role_keys = RoleKeys[val].map(roleKey => CharacterRoleKeys[roleKey]);

    return this;
  }

  setSignatureWeaponKey(val: keyof typeof WeaponKeys) {
    this._signature_weapon_key = WeaponKeys[val];

    return this;
  }
}

const Arkhe = {
  "🟡": "Пневма",
  "🟣": "Усия",
  "🟣🟡": ["Усия", "Пневма"],
} as Record<string, CharacterArkhe | CharacterArkhe[]>;
const RoleKeys = {
  "👤👥🗡️🤝": ["👤", "👥", "🗡️", "🤝"],
  "👤🗡️": ["👤", "🗡️"],
  "👤🗡️🤝": ["👤", "🗡️", "🤝"],
  "👤🗡️🛡️": ["👤", "🗡️", "🛡️"],
  "👥🗡️": ["👥", "🗡️"],
  "👥🗡️🤝": ["👥", "🗡️", "🤝"],
  "👥🗡️🤝🛡️": ["👥", "🗡️", "🤝", "🛡️"],
  "👥🗡️🛡️": ["👥", "🗡️", "🛡️"],
  "👥🤝": ["👥", "🤝"],
  "👥🤝🛡️": ["👥", "🤝", "🛡️"],
  "👥🛡️": ["👥", "🛡️"],
} as const;

export default {
  [CharacterKeys.Albedo]: new _Character("Albedo", "Альбедо", 5, "⚔️", "🏔️", "albedo-256x256.webp").setRoleKeys("👥🗡️"),
  [CharacterKeys.Alhaitham]: new _Character("Alhaitham", "Аль-Хайтам", 5, "⚔️", "🌿", "alhaitham-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("LightOfFoliarIncision"),
  [CharacterKeys.Amber]: new _Character("Amber", "Эмбер", 4, "🏹", "🔥", "amber-256x256.webp").setRoleKeys("👥🗡️"),
  [CharacterKeys.AratakiItto]: new _Character("AratakiItto", "Итто", 5, "🗡️", "🏔️", "arataki_itto-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("RedhornStonethresher"),
  [CharacterKeys.Arlecchino]: new _Character("Arlecchino", "Арлекино", 5, "🔱", "🔥", "arlecchino-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("CrimsonMoonsSemblance"),
  [CharacterKeys.Baizhu]: new _Character("Baizhu", "Бай Чжу", 5, "💥", "🌿", "baizhu-256x256.webp").setRoleKeys("👥🤝🛡️").setSignatureWeaponKey("JadefallsSplendor"),
  [CharacterKeys.Barbara]: new _Character("Barbara", "Барбара", 4, "💥", "💧", "barbara-256x256.webp").setRoleKeys("👥🛡️"),
  [CharacterKeys.Beidou]: new _Character("Beidou", "Бэй Доу", 4, "🗡️", "⚡️", "beidou-256x256.webp").setRoleKeys("👥🗡️🛡️"),
  [CharacterKeys.Bennett]: new _Character("Bennett", "Беннет", 4, "⚔️", "🔥", "bennett-256x256.webp").setRoleKeys("👥🤝🛡️"),
  [CharacterKeys.Candace]: new _Character("Candace", "Кандакия", 4, "🔱", "💧", "candace-256x256.webp").setRoleKeys("👥🤝"),
  [CharacterKeys.Charlotte]: new _Character("Charlotte", "Шарлотта", 4, "💥", "❄️", "charlotte-256x256.webp").setArkhe("🟡").setRoleKeys("👥🛡️"),
  [CharacterKeys.Chevreuse]: new _Character("Chevreuse", "Шеврёз", 4, "🔱", "🔥", "chevreuse-256x256.webp").setArkhe("🟣").setRoleKeys("👥🤝🛡️"),
  [CharacterKeys.Chiori]: new _Character("Chiori", "Тиори", 5, "⚔️", "🏔️", "chiori-256x256.webp").setRoleKeys("👥🗡️").setSignatureWeaponKey("UrakuMisugiri"),
  [CharacterKeys.Chongyun]: new _Character("Chongyun", "Чун Юнь", 4, "🗡️", "❄️", "chongyun-256x256.webp").setRoleKeys("👥🗡️🤝"),
  [CharacterKeys.Citlali]: new _Character("Citlali", "Ситлали", 5, "💥", "❄️", "citlali-256x256.webp").setRoleKeys("👥🤝🛡️").setSignatureWeaponKey("StarcallersWatch"),
  [CharacterKeys.Clorinde]: new _Character("Clorinde", "Клоринда", 5, "⚔️", "⚡️", "clorinde-256x256.webp").setArkhe("🟣").setRoleKeys("👤🗡️").setSignatureWeaponKey("Absolution"),
  [CharacterKeys.Collei]: new _Character("Collei", "Коллеи", 4, "🏹", "🌿", "collei-256x256.webp").setRoleKeys("👥🗡️"),
  [CharacterKeys.Cyno]: new _Character("Cyno", "Сайно", 5, "🔱", "⚡️", "cyno-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("StaffOfTheScarletSands"),
  [CharacterKeys.Dahlia]: new _Character("Dahlia", "Далия", 4, "⚔️", "💧", "dahlia-256x256.webp").setRoleKeys("👥🤝"),
  [CharacterKeys.Dehya]: new _Character("Dehya", "Дэхья", 5, "🗡️", "🔥", "dehya-256x256.webp").setRoleKeys("👥🗡️🛡️").setSignatureWeaponKey("BeaconOfTheReedSea"),
  [CharacterKeys.Diluc]: new _Character("Diluc", "Дилюк", 5, "🗡️", "🔥", "diluc-256x256.webp").setRoleKeys("👤🗡️"),
  [CharacterKeys.Diona]: new _Character("Diona", "Диона", 4, "🏹", "❄️", "diona-256x256.webp").setRoleKeys("👥🛡️"),
  [CharacterKeys.Dori]: new _Character("Dori", "Дори", 4, "🗡️", "⚡️", "dori-256x256.webp").setRoleKeys("👥🛡️"),
  [CharacterKeys.Emilie]: new _Character("Emilie", "Эмилия", 5, "🔱", "🌿", "emilie-256x256.webp").setArkhe("🟡").setRoleKeys("👥🗡️").setSignatureWeaponKey("LumidouceElegy"),
  [CharacterKeys.Escoffier]: new _Character("Escoffier", "Эскофье", 5, "🔱", "❄️", "escoffier-256x256.webp").setArkhe("🟣").setRoleKeys("👥🗡️🤝🛡️").setSignatureWeaponKey("SymphonistOfScents"),
  [CharacterKeys.Eula]: new _Character("Eula", "Эола", 5, "🗡️", "❄️", "eula-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("SongOfBrokenPines"),
  [CharacterKeys.Faruzan]: new _Character("Faruzan", "Фарузан", 4, "🏹", "🌪️", "faruzan-256x256.webp").setRoleKeys("👥🤝"),
  [CharacterKeys.Fischl]: new _Character("Fischl", "Фишль", 4, "🏹", "⚡️", "fischl-256x256.webp").setRoleKeys("👥🗡️"),
  [CharacterKeys.Freminet]: new _Character("Freminet", "Фремине", 4, "🗡️", "❄️", "freminet-256x256.webp").setArkhe("🟡").setRoleKeys("👤🗡️"),
  [CharacterKeys.Furina]: new _Character("Furina", "Фурина", 5, "⚔️", "💧", "furina-256x256.webp").setArkhe("🟣🟡").setRoleKeys("👥🗡️🤝🛡️").setSignatureWeaponKey("SplendorOfTranquilWaters"),
  [CharacterKeys.Gaming]: new _Character("Gaming", "Ка Мин", 4, "🗡️", "🔥", "gaming-256x256.webp").setRoleKeys("👤🗡️"),
  [CharacterKeys.Ganyu]: new _Character("Ganyu", "Гань Юй", 5, "🏹", "❄️", "ganyu-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("AmosBow"),
  [CharacterKeys.Gorou]: new _Character("Gorou", "Горо", 4, "🏹", "🏔️", "gorou-256x256.webp").setRoleKeys("👥🤝"),
  [CharacterKeys.HuTao]: new _Character("HuTao", "Ху Тао", 5, "🔱", "🔥", "hu_tao-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("StaffOfHoma"),
  [CharacterKeys.Iansan]: new _Character("Iansan", "Иансан", 4, "🔱", "⚡️", "iansan-256x256.webp").setRoleKeys("👥🤝🛡️"),
  [CharacterKeys.Ineffa]: new _Character("Ineffa", "Инеффа", 5, "🔱", "⚡️", "ineffa-256x256.webp").setRoleKeys("👥🗡️🤝🛡️"),
  [CharacterKeys.Jean]: new _Character("Jean", "Джинн", 5, "⚔️", "🌪️", "jean-256x256.webp").setRoleKeys("👥🛡️"),
  [CharacterKeys.Kachina]: new _Character("Kachina", "Качина", 4, "🔱", "🏔️", "kachina-256x256.webp").setRoleKeys("👥🗡️"),
  [CharacterKeys.KaedeharaKazuha]: new _Character("KaedeharaKazuha", "Кадзуха", 5, "⚔️", "🌪️", "kaedehara_kazuha-256x256.webp").setRoleKeys("👥🤝").setSignatureWeaponKey("FreedomSworn"),
  [CharacterKeys.Kaeya]: new _Character("Kaeya", "Кэйа", 3, "⚔️", "❄️", "kaeya-256x256.webp").setRoleKeys("👥🗡️"),
  [CharacterKeys.KamisatoAyaka]: new _Character("KamisatoAyaka", "Аяка", 5, "⚔️", "❄️", "kamisato_ayaka-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("MistsplitterReforged"),
  [CharacterKeys.KamisatoAyato]: new _Character("KamisatoAyato", "Аято", 5, "⚔️", "💧", "kamisato_ayato-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("HaranGeppakuFutsu"),
  [CharacterKeys.Kaveh]: new _Character("Kaveh", "Кавех", 4, "🗡️", "🌿", "kaveh-256x256.webp").setRoleKeys("👤🗡️"),
  [CharacterKeys.Keqing]: new _Character("Keqing", "Кэ Цин", 5, "⚔️", "⚡️", "keqing-256x256.webp").setRoleKeys("👤🗡️"),
  [CharacterKeys.Kinich]: new _Character("Kinich", "Кинич", 5, "🗡️", "🌿", "kinich-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("FangOfTheMountainKing"),
  [CharacterKeys.Kirara]: new _Character("Kirara", "Кирара", 4, "⚔️", "🌿", "kirara-256x256.webp").setRoleKeys("👥🛡️"),
  [CharacterKeys.Klee]: new _Character("Klee", "Кли", 5, "💥", "🔥", "klee-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("LostPrayerToTheSacredWinds"),
  [CharacterKeys.KujouSara]: new _Character("KujouSara", "Сара", 4, "🏹", "⚡️", "kujou_sara-256x256.webp").setRoleKeys("👥🤝"),
  [CharacterKeys.KukiShinobu]: new _Character("KukiShinobu", "Синобу", 4, "⚔️", "⚡️", "kuki_shinobu-256x256.webp").setRoleKeys("👥🛡️"),
  [CharacterKeys.Layla]: new _Character("Layla", "Лайла", 4, "⚔️", "❄️", "layla-256x256.webp").setRoleKeys("👥🛡️"),
  [CharacterKeys.Lisa]: new _Character("Lisa", "Лиза", 4, "💥", "⚡️", "lisa-256x256.webp").setRoleKeys("👥🗡️"),
  [CharacterKeys.Lynette]: new _Character("Lynette", "Линетт", 4, "⚔️", "🌪️", "lynette-256x256.webp").setArkhe("🟣").setRoleKeys("👥🗡️"),
  [CharacterKeys.Lyney]: new _Character("Lyney", "Лини", 5, "🏹", "🔥", "lyney-256x256.webp").setArkhe("🟡").setRoleKeys("👤🗡️").setSignatureWeaponKey("TheFirstGreatMagic"),
  [CharacterKeys.Mavuika]: new _Character("Mavuika", "Мавуика", 5, "🗡️", "🔥", "mavuika-256x256.webp").setRoleKeys("👤👥🗡️🤝").setSignatureWeaponKey("AThousandBlazingSuns"),
  [CharacterKeys.Mika]: new _Character("Mika", "Мика", 4, "🔱", "❄️", "mika-256x256.webp").setRoleKeys("👥🤝🛡️"),
  [CharacterKeys.Mona]: new _Character("Mona", "Мона", 5, "💥", "💧", "mona-256x256.webp").setRoleKeys("👥🤝"),
  [CharacterKeys.Mualani]: new _Character("Mualani", "Муалани", 5, "💥", "💧", "mualani-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("SurfsUp"),
  [CharacterKeys.Nahida]: new _Character("Nahida", "Нахида", 5, "💥", "🌿", "nahida-256x256.webp").setRoleKeys("👥🗡️🤝").setSignatureWeaponKey("AThousandFloatingDreams"),
  [CharacterKeys.Navia]: new _Character("Navia", "Навия", 5, "🗡️", "🏔️", "navia-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("Verdict"),
  [CharacterKeys.Neuvillette]: new _Character("Neuvillette", "Нёвиллет", 5, "💥", "💧", "neuvillette-256x256.webp").setArkhe("🟡").setRoleKeys("👤🗡️").setSignatureWeaponKey("TomeOfTheEternalFlow"),
  [CharacterKeys.Nilou]: new _Character("Nilou", "Нилу", 5, "⚔️", "💧", "nilou-256x256.webp").setRoleKeys("👥🗡️🤝").setSignatureWeaponKey("KeyOfKhajNisut"),
  [CharacterKeys.Ningguang]: new _Character("Ningguang", "Нин Гуан", 4, "💥", "🏔️", "ningguang-256x256.webp").setRoleKeys("👤🗡️"),
  [CharacterKeys.Noelle]: new _Character("Noelle", "Ноэлль", 4, "🗡️", "🏔️", "noelle-256x256.webp").setRoleKeys("👤🗡️🛡️"),
  [CharacterKeys.Ororon]: new _Character("Ororon", "Оророн", 4, "🏹", "⚡️", "ororon-256x256.webp").setRoleKeys("👥🗡️"),
  [CharacterKeys.Qiqi]: new _Character("Qiqi", "Ци Ци", 5, "⚔️", "❄️", "qiqi-256x256.webp").setRoleKeys("👥🛡️"),
  [CharacterKeys.RaidenShogun]: new _Character("RaidenShogun", "Райдэн", 5, "🔱", "⚡️", "raiden_shogun-256x256.webp").setRoleKeys("👤🗡️🤝").setSignatureWeaponKey("EngulfingLightning"),
  [CharacterKeys.Razor]: new _Character("Razor", "Рэйзор", 4, "🗡️", "⚡️", "razor-256x256.webp").setRoleKeys("👤🗡️"),
  [CharacterKeys.Rosaria]: new _Character("Rosaria", "Розария", 4, "🔱", "❄️", "rosaria-256x256.webp").setRoleKeys("👥🗡️"),
  [CharacterKeys.SangonomiyaKokomi]: new _Character("SangonomiyaKokomi", "Кокоми", 5, "💥", "💧", "sangonomiya_kokomi-256x256.webp").setRoleKeys("👥🤝🛡️").setSignatureWeaponKey("EverlastingMoonglow"),
  [CharacterKeys.Sayu]: new _Character("Sayu", "Саю", 4, "🗡️", "🌪️", "sayu-256x256.webp").setRoleKeys("👥🛡️"),
  [CharacterKeys.Sethos]: new _Character("Sethos", "Сетос", 4, "🏹", "⚡️", "sethos-256x256.webp").setRoleKeys("👤🗡️"),
  [CharacterKeys.Shenhe]: new _Character("Shenhe", "Шэнь Хэ", 5, "🔱", "❄️", "shenhe-256x256.webp").setRoleKeys("👥🤝").setSignatureWeaponKey("CalamityQueller"),
  [CharacterKeys.ShikanoinHeizou]: new _Character("ShikanoinHeizou", "Хэйдзо", 4, "💥", "🌪️", "shikanoin_heizou-256x256.webp").setRoleKeys("👤🗡️"),
  [CharacterKeys.Sigewinne]: new _Character("Sigewinne", "Сиджвин", 5, "🏹", "💧", "sigewinne-256x256.webp").setArkhe("🟣").setRoleKeys("👥🤝🛡️").setSignatureWeaponKey("SilvershowerHeartstrings"),
  [CharacterKeys.Skirk]: new _Character("Skirk", "Скирк", 5, "⚔️", "❄️", "skirk-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("Azurelight"),
  [CharacterKeys.Sucrose]: new _Character("Sucrose", "Сахароза", 4, "💥", "🌪️", "sucrose-256x256.webp").setRoleKeys("👥🤝"),
  [CharacterKeys.Tartaglia]: new _Character("Tartaglia", "Тарталья", 5, "🏹", "💧", "tartaglia-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("PolarStar"),
  [CharacterKeys.Thoma]: new _Character("Thoma", "Тома", 4, "🔱", "🔥", "thoma-256x256.webp").setRoleKeys("👥🛡️"),
  [CharacterKeys.Tighnari]: new _Character("Tighnari", "Тигнари", 5, "🏹", "🌿", "tighnari-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("HuntersPath"),
  [CharacterKeys["Traveler🌪️"]]: new _Character("Traveler🌪️", "Путешественник (Анемо)", 5, "⚔️", "🌪️", "traveler-256x256.gif"),
  [CharacterKeys["Traveler🌿"]]: new _Character("Traveler🌿", "Путешественник (Дендро)", 5, "⚔️", "🌿", "traveler-256x256.gif"),
  [CharacterKeys["Traveler⚡️"]]: new _Character("Traveler⚡️", "Путешественник (Электро)", 5, "⚔️", "⚡️", "traveler-256x256.gif"),
  [CharacterKeys["Traveler🏔️"]]: new _Character("Traveler🏔️", "Путешественник (Гео)", 5, "⚔️", "🏔️", "traveler-256x256.gif"),
  [CharacterKeys["Traveler💧"]]: new _Character("Traveler💧", "Путешественник (Гидро)", 5, "⚔️", "💧", "traveler-256x256.gif").setArkhe("🟡"),
  [CharacterKeys["Traveler🔥"]]: new _Character("Traveler🔥", "Путешественник (Пиро)", 5, "⚔️", "🔥", "traveler-256x256.gif"),
  [CharacterKeys.Varesa]: new _Character("Varesa", "Вареса", 5, "💥", "⚡️", "varesa-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("VividNotions"),
  [CharacterKeys.Venti]: new _Character("Venti", "Венти", 5, "🏹", "🌪️", "venti-256x256.webp").setRoleKeys("👥🗡️🤝").setSignatureWeaponKey("ElegyForTheEnd"),
  [CharacterKeys.Wanderer]: new _Character("Wanderer", "Странник", 5, "💥", "🌪️", "wanderer-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("TulaytullahsRemembrance"),
  [CharacterKeys.Wriothesley]: new _Character("Wriothesley", "Ризли", 5, "💥", "❄️", "wriothesley-256x256.webp").setArkhe("🟣").setRoleKeys("👤🗡️").setSignatureWeaponKey("CashflowSupervision"),
  [CharacterKeys.Xiangling]: new _Character("Xiangling", "Сян Лин", 4, "🔱", "🔥", "xiangling-256x256.webp").setRoleKeys("👥🗡️"),
  [CharacterKeys.Xianyun]: new _Character("Xianyun", "Сянь Юнь", 5, "💥", "🌪️", "xianyun-256x256.webp").setRoleKeys("👥🤝🛡️").setSignatureWeaponKey("CranesEchoingCall"),
  [CharacterKeys.Xiao]: new _Character("Xiao", "Сяо", 5, "🔱", "🌪️", "xiao-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("PrimordialJadeWingedSpear"),
  [CharacterKeys.Xilonen]: new _Character("Xilonen", "Шилонен", 5, "⚔️", "🏔️", "xilonen-256x256.webp").setRoleKeys("👥🤝🛡️").setSignatureWeaponKey("PeakPatrolSong"),
  [CharacterKeys.Xingqiu]: new _Character("Xingqiu", "Син Цю", 4, "⚔️", "💧", "xingqiu-256x256.webp").setRoleKeys("👥🗡️🛡️"),
  [CharacterKeys.Xinyan]: new _Character("Xinyan", "Синь Янь", 4, "🗡️", "🔥", "xinyan-256x256.webp").setRoleKeys("👥🛡️"),
  [CharacterKeys.YaeMiko]: new _Character("YaeMiko", "Яэ Мико", 5, "💥", "⚡️", "yae_miko-256x256.webp").setRoleKeys("👥🗡️").setSignatureWeaponKey("KagurasVerity"),
  [CharacterKeys.Yanfei]: new _Character("Yanfei", "Янь Фэй", 4, "💥", "🔥", "yanfei-256x256.webp").setRoleKeys("👤🗡️"),
  [CharacterKeys.Yaoyao]: new _Character("Yaoyao", "Яо Яо", 4, "🔱", "🌿", "yaoyao-256x256.webp").setRoleKeys("👥🛡️"),
  [CharacterKeys.Yelan]: new _Character("Yelan", "Е Лань", 5, "🏹", "💧", "yelan-256x256.webp").setRoleKeys("👥🗡️").setSignatureWeaponKey("AquaSimulacra"),
  [CharacterKeys.Yoimiya]: new _Character("Yoimiya", "Ёимия", 5, "🏹", "🔥", "yoimiya-256x256.webp").setRoleKeys("👤🗡️").setSignatureWeaponKey("ThunderingPulse"),
  [CharacterKeys.YunJin]: new _Character("YunJin", "Юнь Цзинь", 4, "🔱", "🏔️", "yun_jin-256x256.webp").setRoleKeys("👥🤝"),
  [CharacterKeys.Zhongli]: new _Character("Zhongli", "Чжун Ли", 5, "🔱", "🏔️", "zhongli-256x256.webp").setRoleKeys("👥🤝🛡️").setSignatureWeaponKey("VortexVanquisher"),
} as Record<Character["key"], Character>;
