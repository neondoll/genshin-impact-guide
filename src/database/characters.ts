import { ArtifactSetUidEnum } from "./enums/artifact-set";
import { CharacterRoleUidEnum } from "./enums/character-role";
import { CharacterUidEnum } from "./enums/character";
import { ElementUidEnum } from "./enums/element";
import { publicImageSrc } from "@/lib/utils";
import { WeaponTypeUidEnum } from "./enums/weapon-type";
import { WeaponUidEnum } from "./enums/weapon";
import type { Character, CharacterUid } from "./types/character";

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`characters/${src}`);

export default {
  [CharacterUidEnum.Albedo]: {
    uid: CharacterUidEnum.Albedo,
    name: "Альбедо",
    image_src: imageSrc("albedo-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Geo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Alhaitham]: {
    uid: CharacterUidEnum.Alhaitham,
    name: "Аль-Хайтам",
    image_src: imageSrc("alhaitham-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Dendro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Amber]: {
    uid: CharacterUidEnum.Amber,
    name: "Эмбер",
    image_src: imageSrc("amber-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.AratakiItto]: {
    uid: CharacterUidEnum.AratakiItto,
    name: "Итто",
    image_src: imageSrc("arataki_itto-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Geo,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Arlecchino]: {
    uid: CharacterUidEnum.Arlecchino,
    name: "Арлекино",
    image_src: imageSrc("arlecchino-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
    signature_weapon_uid: WeaponUidEnum.CrimsonMoonsSemblance,
    signature_artifact_set_uid: ArtifactSetUidEnum.FragmentOfHarmonicWhimsy,
  },
  [CharacterUidEnum.Baizhu]: {
    uid: CharacterUidEnum.Baizhu,
    name: "Бай Чжу",
    image_src: imageSrc("baizhu-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Dendro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Barbara]: {
    uid: CharacterUidEnum.Barbara,
    name: "Барбара",
    image_src: imageSrc("barbara-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Hydro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Beidou]: {
    uid: CharacterUidEnum.Beidou,
    name: "Бэй Доу",
    image_src: imageSrc("beidou-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Bennett]: {
    uid: CharacterUidEnum.Bennett,
    name: "Беннет",
    image_src: imageSrc("bennett-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Candace]: {
    uid: CharacterUidEnum.Candace,
    name: "Кандакия",
    image_src: imageSrc("candace-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Hydro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.Charlotte]: {
    uid: CharacterUidEnum.Charlotte,
    name: "Шарлотта",
    image_src: imageSrc("charlotte-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Chevreuse]: {
    uid: CharacterUidEnum.Chevreuse,
    name: "Шеврёз",
    image_src: imageSrc("chevreuse-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Chongyun]: {
    uid: CharacterUidEnum.Chongyun,
    name: "Чун Юнь",
    image_src: imageSrc("chongyun-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.Citlali]: {
    uid: CharacterUidEnum.Citlali,
    name: "Ситлали",
    image_src: imageSrc("citlali-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Collei]: {
    uid: CharacterUidEnum.Collei,
    name: "Коллеи",
    image_src: imageSrc("collei-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Dendro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Cyno]: {
    uid: CharacterUidEnum.Cyno,
    name: "Сайно",
    image_src: imageSrc("cyno-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Dahlia]: {
    uid: CharacterUidEnum.Dahlia,
    name: "Далия",
    image_src: imageSrc("dahlia-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Hydro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.Dehya]: {
    uid: CharacterUidEnum.Dehya,
    name: "Дэхья",
    image_src: imageSrc("dehya-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Diluc]: {
    uid: CharacterUidEnum.Diluc,
    name: "Дилюк",
    image_src: imageSrc("diluc-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Diona]: {
    uid: CharacterUidEnum.Diona,
    name: "Диона",
    image_src: imageSrc("diona-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Dori]: {
    uid: CharacterUidEnum.Dori,
    name: "Дори",
    image_src: imageSrc("dori-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Escoffier]: {
    uid: CharacterUidEnum.Escoffier,
    name: "Эскофье",
    image_src: imageSrc("escoffier-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS, CharacterRoleUidEnum.Support, CharacterRoleUidEnum.Survivability],
    signature_weapon_uid: WeaponUidEnum.SymphonistOfScents,
  },
  [CharacterUidEnum.Eula]: {
    uid: CharacterUidEnum.Eula,
    name: "Эола",
    image_src: imageSrc("eula-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Faruzan]: {
    uid: CharacterUidEnum.Faruzan,
    name: "Фарузан",
    image_src: imageSrc("faruzan-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Anemo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.Fischl]: {
    uid: CharacterUidEnum.Fischl,
    name: "Фишль",
    image_src: imageSrc("fischl-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Freminet]: {
    uid: CharacterUidEnum.Freminet,
    name: "Фремине",
    image_src: imageSrc("freminet-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Furina]: {
    uid: CharacterUidEnum.Furina,
    name: "Фурина",
    image_src: imageSrc("furina-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Hydro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS, CharacterRoleUidEnum.Support, CharacterRoleUidEnum.Survivability],
    signature_weapon_uid: WeaponUidEnum.SplendorOfTranquilWaters,
  },
  [CharacterUidEnum.Ganyu]: {
    uid: CharacterUidEnum.Ganyu,
    name: "Гань Юй",
    image_src: imageSrc("ganyu-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Gorou]: {
    uid: CharacterUidEnum.Gorou,
    name: "Горо",
    image_src: imageSrc("gorou-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Geo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.HuTao]: {
    uid: CharacterUidEnum.HuTao,
    name: "Ху Тао",
    image_src: imageSrc("hu_tao-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Iansan]: {
    uid: CharacterUidEnum.Iansan,
    name: "Иансан",
    image_src: imageSrc("iansan-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Jean]: {
    uid: CharacterUidEnum.Jean,
    name: "Джинн",
    image_src: imageSrc("jean-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Anemo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.KaedeharaKazuha]: {
    uid: CharacterUidEnum.KaedeharaKazuha,
    name: "Кадзуха",
    image_src: imageSrc("kaedehara_kazuha-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Anemo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.Kaeya]: {
    uid: CharacterUidEnum.Kaeya,
    name: "Кэйа",
    image_src: imageSrc("kaeya-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.KamisatoAyaka]: {
    uid: CharacterUidEnum.KamisatoAyaka,
    name: "Аяка",
    image_src: imageSrc("kamisato_ayaka-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.KamisatoAyato]: {
    uid: CharacterUidEnum.KamisatoAyato,
    name: "Аято",
    image_src: imageSrc("kamisato_ayato-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Hydro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Kaveh]: {
    uid: CharacterUidEnum.Kaveh,
    name: "Кавех",
    image_src: imageSrc("kaveh-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Dendro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Keqing]: {
    uid: CharacterUidEnum.Keqing,
    name: "Кэ Цин",
    image_src: imageSrc("keqing-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Kirara]: {
    uid: CharacterUidEnum.Kirara,
    name: "Кирара",
    image_src: imageSrc("kirara-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Dendro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Klee]: {
    uid: CharacterUidEnum.Klee,
    name: "Кли",
    image_src: imageSrc("klee-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.KujouSara]: {
    uid: CharacterUidEnum.KujouSara,
    name: "Сара",
    image_src: imageSrc("kujou_sara-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.KukiShinobu]: {
    uid: CharacterUidEnum.KukiShinobu,
    name: "Синобу",
    image_src: imageSrc("kuki_shinobu-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Layla]: {
    uid: CharacterUidEnum.Layla,
    name: "Лайла",
    image_src: imageSrc("layla-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Lisa]: {
    uid: CharacterUidEnum.Lisa,
    name: "Лиза",
    image_src: imageSrc("lisa-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Lynette]: {
    uid: CharacterUidEnum.Lynette,
    name: "Линетт",
    image_src: imageSrc("lynette-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Anemo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Lyney]: {
    uid: CharacterUidEnum.Lyney,
    name: "Лини",
    image_src: imageSrc("lyney-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Mavuika]: {
    uid: CharacterUidEnum.Mavuika,
    name: "Мавуика",
    image_src: imageSrc("mavuika-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS, CharacterRoleUidEnum.Support],
    signature_weapon_uid: WeaponUidEnum.AThousandBlazingSuns,
  },
  [CharacterUidEnum.Mika]: {
    uid: CharacterUidEnum.Mika,
    name: "Мика",
    image_src: imageSrc("mika-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Mona]: {
    uid: CharacterUidEnum.Mona,
    name: "Мона",
    image_src: imageSrc("mona-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Hydro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.Nahida]: {
    uid: CharacterUidEnum.Nahida,
    name: "Нахида",
    image_src: imageSrc("nahida-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Dendro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.Navia]: {
    uid: CharacterUidEnum.Navia,
    name: "Навия",
    image_src: imageSrc("navia-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Geo,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Neuvillette]: {
    uid: CharacterUidEnum.Neuvillette,
    name: "Нёвиллет",
    image_src: imageSrc("neuvillette-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Hydro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
    signature_weapon_uid: WeaponUidEnum.TomeOfTheEternalFlow,
  },
  [CharacterUidEnum.Nilou]: {
    uid: CharacterUidEnum.Nilou,
    name: "Нилу",
    image_src: imageSrc("nilou-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Hydro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.Ningguang]: {
    uid: CharacterUidEnum.Ningguang,
    name: "Нин Гуан",
    image_src: imageSrc("ningguang-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Geo,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Noelle]: {
    uid: CharacterUidEnum.Noelle,
    name: "Ноэлль",
    image_src: imageSrc("noelle-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Geo,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Ororon]: {
    uid: CharacterUidEnum.Ororon,
    name: "Оророн",
    image_src: imageSrc("ororon-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Qiqi]: {
    uid: CharacterUidEnum.Qiqi,
    name: "Ци Ци",
    image_src: imageSrc("qiqi-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.RaidenShogun]: {
    uid: CharacterUidEnum.RaidenShogun,
    name: "Райдэн",
    image_src: imageSrc("raiden_shogun-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.Razor]: {
    uid: CharacterUidEnum.Razor,
    name: "Рэйзор",
    image_src: imageSrc("razor-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Rosaria]: {
    uid: CharacterUidEnum.Rosaria,
    name: "Розария",
    image_src: imageSrc("rosaria-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.SangonomiyaKokomi]: {
    uid: CharacterUidEnum.SangonomiyaKokomi,
    name: "Кокоми",
    image_src: imageSrc("sangonomiya_kokomi-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Hydro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Sayu]: {
    uid: CharacterUidEnum.Sayu,
    name: "Саю",
    image_src: imageSrc("sayu-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Anemo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Shenhe]: {
    uid: CharacterUidEnum.Shenhe,
    name: "Шэнь Хэ",
    image_src: imageSrc("shenhe-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.ShikanoinHeizou]: {
    uid: CharacterUidEnum.ShikanoinHeizou,
    name: "Хэйдзо",
    image_src: imageSrc("shikanoin_heizou-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Anemo,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Skirk]: {
    uid: CharacterUidEnum.Skirk,
    name: "Скирк",
    image_src: imageSrc("skirk-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
    signature_weapon_uid: WeaponUidEnum.Azurelight,
    signature_artifact_set_uid: ArtifactSetUidEnum.FinaleOfTheDeepGalleries,
  },
  [CharacterUidEnum.Sucrose]: {
    uid: CharacterUidEnum.Sucrose,
    name: "Сахароза",
    image_src: imageSrc("sucrose-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Anemo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.Tartaglia]: {
    uid: CharacterUidEnum.Tartaglia,
    name: "Тарталья",
    image_src: imageSrc("tartaglia-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Hydro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Thoma]: {
    uid: CharacterUidEnum.Thoma,
    name: "Тома",
    image_src: imageSrc("thoma-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Tighnari]: {
    uid: CharacterUidEnum.Tighnari,
    name: "Тигнари",
    image_src: imageSrc("tighnari-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Dendro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Varesa]: {
    uid: CharacterUidEnum.Varesa,
    name: "Вареса",
    image_src: imageSrc("varesa-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
    signature_weapon_uid: WeaponUidEnum.VividNotions,
  },
  [CharacterUidEnum.Venti]: {
    uid: CharacterUidEnum.Venti,
    name: "Венти",
    image_src: imageSrc("venti-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Anemo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.Wanderer]: {
    uid: CharacterUidEnum.Wanderer,
    name: "Странник",
    image_src: imageSrc("wanderer-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Anemo,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Wriothesley]: {
    uid: CharacterUidEnum.Wriothesley,
    name: "Ризли",
    image_src: imageSrc("wriothesley-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Cryo,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Xiangling]: {
    uid: CharacterUidEnum.Xiangling,
    name: "Сян Лин",
    image_src: imageSrc("xiangling-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Xiao]: {
    uid: CharacterUidEnum.Xiao,
    name: "Сяо",
    image_src: imageSrc("xiao-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Anemo,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Xilonen]: {
    uid: CharacterUidEnum.Xilonen,
    name: "Шилонен",
    image_src: imageSrc("xilonen-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Geo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support, CharacterRoleUidEnum.Survivability],
    signature_weapon_uid: WeaponUidEnum.PeakPatrolSong,
  },
  [CharacterUidEnum.Xingqiu]: {
    uid: CharacterUidEnum.Xingqiu,
    name: "Син Цю",
    image_src: imageSrc("xingqiu-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Sword,
    element_uid: ElementUidEnum.Hydro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Xinyan]: {
    uid: CharacterUidEnum.Xinyan,
    name: "Синь Янь",
    image_src: imageSrc("xinyan-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Claymore,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.YaeMiko]: {
    uid: CharacterUidEnum.YaeMiko,
    name: "Яэ Мико",
    image_src: imageSrc("yae_miko-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Electro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Yanfei]: {
    uid: CharacterUidEnum.Yanfei,
    name: "Янь Фэй",
    image_src: imageSrc("yanfei-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Catalyst,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Yaoyao]: {
    uid: CharacterUidEnum.Yaoyao,
    name: "Яо Яо",
    image_src: imageSrc("yaoyao-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Dendro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Survivability],
  },
  [CharacterUidEnum.Yelan]: {
    uid: CharacterUidEnum.Yelan,
    name: "Е Лань",
    image_src: imageSrc("yelan-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Hydro,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.Yoimiya]: {
    uid: CharacterUidEnum.Yoimiya,
    name: "Ёимия",
    image_src: imageSrc("yoimiya-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Bow,
    element_uid: ElementUidEnum.Pyro,
    roles_uid: [CharacterRoleUidEnum.OnField, CharacterRoleUidEnum.DPS],
  },
  [CharacterUidEnum.YunJin]: {
    uid: CharacterUidEnum.YunJin,
    name: "Юнь Цзинь",
    image_src: imageSrc("yun_jin-256x256.webp"),
    quality: 4,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Geo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support],
  },
  [CharacterUidEnum.Zhongli]: {
    uid: CharacterUidEnum.Zhongli,
    name: "Чжун Ли",
    image_src: imageSrc("zhongli-256x256.webp"),
    quality: 5,
    weapon_type_uid: WeaponTypeUidEnum.Polearm,
    element_uid: ElementUidEnum.Geo,
    roles_uid: [CharacterRoleUidEnum.OffField, CharacterRoleUidEnum.Support, CharacterRoleUidEnum.Survivability],
  },
} as Record<CharacterUid, Character>;
