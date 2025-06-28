import { publicImageSrc } from "@/lib/utils";
import { type WeaponTypeUid, WeaponTypeUidEnum } from "./weapon-types";
import type { QualityUid } from "./qualities";

type Weapon = { name: string; type: WeaponTypeUid; quality: QualityUid; small_image_src: string };
type Weapons = Record<WeaponUid, Weapon>;

export type WeaponUid = typeof WeaponUidEnum[keyof typeof WeaponUidEnum];

export const WeaponUidEnum = {
  /* Пепельный рог               */ AshGravenDrinkingHorn: "ash_graven_drinking_horn",
  /* Лазурное сияние             */ Azurelight: "azurelight",
  /* Баллада фьордов             */ BalladOfTheFjords: "ballad_of_the_fjords",
  /* Черногорская пика           */ BlackcliffPole: "blackcliff_pole",
  /* Усмиритель бед              */ CalamityQueller: "calamity_queller",
  /* Казначейский надзор         */ CashflowSupervision: "cashflow_supervision",
  /* Очертания алой луны         */ CrimsonMoonsSemblance: "crimson_moons_semblance",
  /* Смертельный бой             */ Deathmatch: "deathmatch",
  /* Гроза драконов              */ DragonsBane: "dragons_bane",
  /* Сияющая жатва               */ EngulfingLightning: "engulfing_lightning",
  /* Вечное лунное сияние        */ EverlastingMoonglow: "everlasting_moonglow",
  /* Копьё Фавония               */ FavoniusLance: "favonius_lance",
  /* Меч Фавония                 */ FavoniusSword: "favonius_sword",
  /* Осквернённое желание        */ FesteringDesire: "festering_desire",
  /* Перевозчик Флёв Сандр       */ FleuveCendreFerryman: "fleuve_cendre_ferryman",
  /* Сверкание чистых вод        */ FlowingPurity: "flowing_purity",
  /* Предвестник зари            */ HarbingerOfDawn: "harbinger_of_dawn",
  /* Великолепие лазурного свода */ JadefallsSplendor: "jadefalls_splendor",
  /* Истина кагура               */ KagurasVerity: "kaguras_verity",
  /* Ключ Хадж-нисут             */ KeyOfKhajNisut: "key_of_khaj_nisut",
  /* Свет лиственного разреза    */ LightOfFoliarIncision: "light_of_foliar_incision",
  /* Каменное копье              */ LithicSpear: "lithic_spear",
  /* Молитва святым ветрам       */ LostPrayerToTheSacredWinds: "lost_prayer_to_the_sacred_winds",
  /* Элегия Люмидус              */ LumidouceElegy: "lumidouce_elegy",
  /* Копьё послания ветров       */ MissiveWindspear: "missive_windspear",
  /* Драгоценный омут            */ PrimordialJadeCutter: "primordial_jade_cutter",
  /* Нефритовый коршун           */ PrimordialJadeWingedSpear: "primordial_jade_winged_spear",
  /* Прототип: Янтарь            */ PrototypeAmber: "prototype_amber",
  /* Кольцо Яшче                 */ RingOfYaxche: "Ring of Yaxche",
  /* Жертвенный нефрит           */ SacrificialJade: "sacrificial_jade",
  /* Церемониальный меч          */ SacrificialSword: "sacrificial_sword",
  /* Деревянный клинок           */ SapwoodBlade: "sapwood_blade",
  /* Небесная ось                */ SkywardSpine: "skyward_spine",
  /* Блеск тихих вод             */ SplendorOfTranquilWaters: "splendor_of_tranquil_waters",
  /* Посох Хомы                  */ StaffOfHoma: "staff_of_homa",
  /* Посох алых песков           */ StaffOfTheScarletSands: "staff_of_the_scarlet_sands",
  /* Лови волну                  */ SurfsUp: "surfs_up",
  /* Тамаюратэй но оханаси       */ TamayurateiNoOhanashi: "tamayuratei_no_ohanashi",
  /* Верфь                       */ TheDockhandsAssistant: "the_dockhands_assistant",
  /* Бесструнный                 */ TheStringless: "the_stringless",
  /* Песнь странника             */ TheWidsith: "the_widsith",
  /* Обряд вечного течения       */ TomeOfTheEternalFlow: "tome_of_the_eternal_flow",
  /* Воспоминания Тулайтуллы     */ TulaytullahsRemembrance: "tulaytullahs_remembrance",
  /* Ураку мисугири              */ UrakuMisugiri: "uraku_misugiri",
  /* Переливающиеся чаяния       */ VividNotions: "vivid_notions",
  /* Покоритель вихря            */ VortexVanquisher: "vortex_vanquisher",
  /* Белая кисть                 */ WhiteTassel: "white_tassel",
  /* Волчий клык                 */ WolfFang: "wolf_fang",
  /* Лунное сияние ксифоса       */ XiphosMoonlight: "xiphos_moonlight",
} as const;

const imageSrc: typeof publicImageSrc = src => publicImageSrc(`weapons/${src}`);

const weapons = {
  [WeaponUidEnum.BalladOfTheFjords]: {
    name: "Баллада фьордов",
    type: WeaponTypeUidEnum.Polearm,
    quality: 4,
    small_image_src: imageSrc("ballad_of_the_fjords-small-256x256.png"),
  },
  [WeaponUidEnum.WhiteTassel]: {
    name: "Белая кисть",
    type: WeaponTypeUidEnum.Polearm,
    quality: 3,
    small_image_src: imageSrc("white_tassel-small-256x256.png"),
  },
  [WeaponUidEnum.TheStringless]: {
    name: "Бесструнный",
    type: WeaponTypeUidEnum.Bow,
    quality: 4,
    small_image_src: imageSrc("the_stringless-small-256x256.png"),
  },
  [WeaponUidEnum.SplendorOfTranquilWaters]: {
    name: "Блеск тихих вод",
    type: WeaponTypeUidEnum.Sword,
    quality: 5,
    small_image_src: imageSrc("splendor_of_tranquil_waters-256x256.png"),
  },
  [WeaponUidEnum.JadefallsSplendor]: {
    name: "Великолепие лазурного свода",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 5,
    small_image_src: imageSrc("jadefalls_splendor-256x256.png"),
  },
  [WeaponUidEnum.TheDockhandsAssistant]: {
    name: "Верфь",
    type: WeaponTypeUidEnum.Sword,
    quality: 4,
    small_image_src: imageSrc("the_dockhands_assistant-256x256.png"),
  },
  [WeaponUidEnum.EverlastingMoonglow]: {
    name: "Вечное лунное сияние",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 5,
    small_image_src: imageSrc("everlasting_moonglow-256x256.png"),
  },
  [WeaponUidEnum.WolfFang]: {
    name: "Волчий клык",
    type: WeaponTypeUidEnum.Sword,
    quality: 4,
    small_image_src: imageSrc("wolf_fang-256x256.png"),
  },
  [WeaponUidEnum.TulaytullahsRemembrance]: {
    name: "Воспоминания Тулайтуллы",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 5,
    small_image_src: imageSrc("tulaytullahs_remembrance-256x256.png"),
  },
  [WeaponUidEnum.DragonsBane]: {
    name: "Гроза драконов",
    type: WeaponTypeUidEnum.Polearm,
    quality: 4,
    small_image_src: imageSrc("dragons_bane-small-256x256.png"),
  },
  [WeaponUidEnum.SapwoodBlade]: {
    name: "Деревянный клинок",
    type: WeaponTypeUidEnum.Sword,
    quality: 4,
    small_image_src: imageSrc("sapwood_blade-small-256x256.png"),
  },
  [WeaponUidEnum.PrimordialJadeCutter]: {
    name: "Драгоценный омут",
    type: WeaponTypeUidEnum.Sword,
    quality: 5,
    small_image_src: imageSrc("primordial_jade_cutter-256x256.png"),
  },
  [WeaponUidEnum.SacrificialJade]: {
    name: "Жертвенный нефрит",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 4,
    small_image_src: imageSrc("sacrificial_jade-256x256.png"),
  },
  [WeaponUidEnum.KagurasVerity]: {
    name: "Истина кагура",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 5,
    small_image_src: imageSrc("kaguras_verity-256x256.png"),
  },
  [WeaponUidEnum.CashflowSupervision]: {
    name: "Казначейский надзор",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 5,
    small_image_src: imageSrc("cashflow_supervision-256x256.png"),
  },
  [WeaponUidEnum.LithicSpear]: {
    name: "Каменное копье",
    type: WeaponTypeUidEnum.Polearm,
    quality: 4,
    small_image_src: imageSrc("lithic_spear-small-256x256.png"),
  },
  [WeaponUidEnum.KeyOfKhajNisut]: {
    name: "Ключ Хадж-нисут",
    type: WeaponTypeUidEnum.Sword,
    quality: 5,
    small_image_src: imageSrc("key_of_khaj_nisut-256x256.png"),
  },
  [WeaponUidEnum.RingOfYaxche]: {
    name: "Кольцо Яшче",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 4,
    small_image_src: imageSrc("ring_of_yaxche-256x256.png"),
  },
  [WeaponUidEnum.MissiveWindspear]: {
    name: "Копьё послания ветров",
    type: WeaponTypeUidEnum.Polearm,
    quality: 4,
    small_image_src: imageSrc("missive_windspear-small-256x256.png"),
  },
  [WeaponUidEnum.FavoniusLance]: {
    name: "Копьё Фавония",
    type: WeaponTypeUidEnum.Polearm,
    quality: 4,
    small_image_src: imageSrc("favonius_lance-256x256.png"),
  },
  [WeaponUidEnum.Azurelight]: {
    name: "Лазурное сияние",
    type: WeaponTypeUidEnum.Sword,
    quality: 5,
    small_image_src: imageSrc("azurelight-small-256x256.png"),
  },
  [WeaponUidEnum.SurfsUp]: {
    name: "Лови волну",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 5,
    small_image_src: imageSrc("surfs_up-256x256.png"),
  },
  [WeaponUidEnum.XiphosMoonlight]: {
    name: "Лунное сияние ксифоса",
    type: WeaponTypeUidEnum.Sword,
    quality: 4,
    small_image_src: imageSrc("xiphos_moonlight-small-256x256.png"),
  },
  [WeaponUidEnum.FavoniusSword]: {
    name: "Меч Фавония",
    type: WeaponTypeUidEnum.Sword,
    quality: 4,
    small_image_src: imageSrc("favonius_sword-small-256x256.png"),
  },
  [WeaponUidEnum.LostPrayerToTheSacredWinds]: {
    name: "Молитва святым ветрам",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 5,
    small_image_src: imageSrc("lost_prayer_to_the_sacred_winds-256x256.png"),
  },
  [WeaponUidEnum.SkywardSpine]: {
    name: "Небесная ось",
    type: WeaponTypeUidEnum.Polearm,
    quality: 5,
    small_image_src: imageSrc("skyward_spine-small-256x256.png"),
  },
  [WeaponUidEnum.PrimordialJadeWingedSpear]: {
    name: "Нефритовый коршун",
    type: WeaponTypeUidEnum.Polearm,
    quality: 5,
    small_image_src: imageSrc("primordial_jade_winged_spear-small-256x256.png"),
  },
  [WeaponUidEnum.TomeOfTheEternalFlow]: {
    name: "Обряд вечного течения",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 5,
    small_image_src: imageSrc("tome_of_the_eternal_flow-256x256.png"),
  },
  [WeaponUidEnum.FesteringDesire]: {
    name: "Осквернённое желание",
    type: WeaponTypeUidEnum.Sword,
    quality: 4,
    small_image_src: imageSrc("festering_desire-256x256.png"),
  },
  [WeaponUidEnum.CrimsonMoonsSemblance]: {
    name: "Очертания алой луны",
    type: WeaponTypeUidEnum.Polearm,
    quality: 5,
    small_image_src: imageSrc("crimson_moons_semblance-small-256x256.png"),
  },
  [WeaponUidEnum.AshGravenDrinkingHorn]: {
    name: "Пепельный рог",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 4,
    small_image_src: imageSrc("ash_graven_drinking_horn-256x256.png"),
  },
  [WeaponUidEnum.FleuveCendreFerryman]: {
    name: "Перевозчик Флёв Сандр",
    type: WeaponTypeUidEnum.Sword,
    quality: 4,
    small_image_src: imageSrc("fleuve_cendre_ferryman-256x256.png"),
  },
  [WeaponUidEnum.VividNotions]: {
    name: "Переливающиеся чаяния",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 5,
    small_image_src: imageSrc("vivid_notions-256x256.png"),
  },
  [WeaponUidEnum.TheWidsith]: {
    name: "Песнь странника",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 4,
    small_image_src: imageSrc("the_widsith-256x256.png"),
  },
  [WeaponUidEnum.VortexVanquisher]: {
    name: "Покоритель вихря",
    type: WeaponTypeUidEnum.Polearm,
    quality: 5,
    small_image_src: imageSrc("vortex_vanquisher-small-256x256.png"),
  },
  [WeaponUidEnum.StaffOfTheScarletSands]: {
    name: "Посох алых песков",
    type: WeaponTypeUidEnum.Polearm,
    quality: 5,
    small_image_src: imageSrc("staff_of_the_scarlet_sands-small-256x256.png"),
  },
  [WeaponUidEnum.StaffOfHoma]: {
    name: "Посох Хомы",
    type: WeaponTypeUidEnum.Polearm,
    quality: 5,
    small_image_src: imageSrc("staff_of_homa-small-256x256.png"),
  },
  [WeaponUidEnum.HarbingerOfDawn]: {
    name: "Предвестник зари",
    type: WeaponTypeUidEnum.Sword,
    quality: 3,
    small_image_src: imageSrc("harbinger_of_dawn-256x256.png"),
  },
  [WeaponUidEnum.PrototypeAmber]: {
    name: "Прототип: Янтарь",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 4,
    small_image_src: imageSrc("prototype_amber-256x256.png"),
  },
  [WeaponUidEnum.FlowingPurity]: {
    name: "Сверкание чистых вод",
    type: WeaponTypeUidEnum.Catalyst,
    quality: 4,
    small_image_src: imageSrc("flowing_purity-256x256.png"),
  },
  [WeaponUidEnum.LightOfFoliarIncision]: {
    name: "Свет лиственного разреза",
    type: WeaponTypeUidEnum.Sword,
    quality: 5,
    small_image_src: imageSrc("light_of_foliar_incision-256x256.png"),
  },
  [WeaponUidEnum.EngulfingLightning]: {
    name: "Сияющая жатва",
    type: WeaponTypeUidEnum.Polearm,
    quality: 5,
    small_image_src: imageSrc("engulfing_lightning-small-256x256.png"),
  },
  [WeaponUidEnum.Deathmatch]: {
    name: "Смертельный бой",
    type: WeaponTypeUidEnum.Polearm,
    quality: 4,
    small_image_src: imageSrc("deathmatch-small-256x256.png"),
  },
  [WeaponUidEnum.TamayurateiNoOhanashi]: {
    name: "Тамаюратэй но оханаси",
    type: WeaponTypeUidEnum.Polearm,
    quality: 4,
    small_image_src: imageSrc("tamayuratei_no_ohanashi-256x256.png"),
  },
  [WeaponUidEnum.UrakuMisugiri]: {
    name: "Ураку мисугири",
    type: WeaponTypeUidEnum.Sword,
    quality: 5,
    small_image_src: imageSrc("uraku_misugiri-256x256.png"),
  },
  [WeaponUidEnum.CalamityQueller]: {
    name: "Усмиритель бед",
    type: WeaponTypeUidEnum.Polearm,
    quality: 5,
    small_image_src: imageSrc("calamity_queller-small-256x256.png"),
  },
  [WeaponUidEnum.SacrificialSword]: {
    name: "Церемониальный меч",
    type: WeaponTypeUidEnum.Sword,
    quality: 4,
    small_image_src: imageSrc("sacrificial_sword-small-256x256.png"),
  },
  [WeaponUidEnum.BlackcliffPole]: {
    name: "Черногорская пика",
    type: WeaponTypeUidEnum.Polearm,
    quality: 4,
    small_image_src: imageSrc("blackcliff_pole-small-256x256.png"),
  },
  [WeaponUidEnum.LumidouceElegy]: {
    name: "Элегия Люмидус",
    type: WeaponTypeUidEnum.Polearm,
    quality: 5,
    small_image_src: imageSrc("lumidouce_elegy-small-512x512.png"),
  },
} as Weapons;

export function getWeapon(uid: WeaponUid) {
  return weapons[uid];
}

export function getWeapons() {
  return weapons;
}
