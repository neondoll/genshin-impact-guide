import guideAmber from "./guide-amber";
import guideArlecchino from "./guide-arlecchino";
import guideBarbara from "./guide-barbara";
import guideBeidou from "./guide-beidou";
import guideBennett from "./guide-bennett";
import guideCandace from "./guide-candace";
import guideCharlotte from "./guide-charlotte";
import guideChevreuse from "./guide-chevreuse";
import guideChongyun from "./guide-chongyun";
import guideCyno from "./guide-cyno";
import guideDehya from "./guide-dehya";
import guideDiluc from "./guide-diluc";
import guideDiona from "./guide-diona";
import guideDori from "./guide-dori";
import guideEscoffier from "./guide-escoffier";
import guideEula from "./guide-eula";
import guideFaruzan from "./guide-faruzan";
import guideFischl from "./guide-fischl";
import guideFreminet from "./guide-freminet";
import guideFurina from "./guide-furina";
import guideGanyu from "./guide-ganyu";
import guideHuTao from "./guide-hu_tao";
import guideIansan from "./guide-iansan";
import guideJean from "./guide-jean";
import guideKaedeharaKazuha from "./guide-kaedehara_kazuha";
import guideKaeya from "./guide-kaeya";
import guideKamisatoAyaka from "./guide-kamisato_ayaka";
import guideKamisatoAyato from "./guide-kamisato_ayato";
import guideKeqing from "./guide-keqing";
import guideKlee from "./guide-klee";
import guideKujouSara from "./guide-kujou_sara";
import guideKukiShinobu from "./guide-kuki_shinobu";
import guideLayla from "./guide-layla";
import guideLisa from "./guide-lisa";
import guideLynette from "./guide-lynette";
import guideLyney from "./guide-lyney";
import guideMavuika from "./guide-mavuika";
import guideMika from "./guide-mika";
import guideMona from "./guide-mona";
import guideNeuvillette from "./guide-neuvillette";
import guideNilou from "./guide-nilou";
import guideQiqi from "./guide-qiqi";
import guideRaidenShogun from "./guide-raiden_shogun";
import guideRazor from "./guide-razor";
import guideRosaria from "./guide-rosaria";
import guideSangonomiyaKokomi from "./guide-sangonomiya_kokomi";
import guideSayu from "./guide-sayu";
import guideShenhe from "./guide-shenhe";
import guideShikanoinHeizou from "./guide-shikanoin_heizou";
import guideSkirk from "./guide-skirk";
import guideSucrose from "./guide-sucrose";
import guideTartaglia from "./guide-tartaglia";
import guideThoma from "./guide-thoma";
import guideVaresa from "./guide-varesa";
import guideVenti from "./guide-venti";
import guideWanderer from "./guide-wanderer";
import guideWriothesley from "./guide-wriothesley";
import guideXiangling from "./guide-xiangling";
import guideXiao from "./guide-xiao";
import guideXilonen from "./guide-xilonen";
import guideXingqiu from "./guide-xingqiu";
import guideXinyan from "./guide-xinyan";
import guideYaeMiko from "./guide-yae_miko";
import guideYanfei from "./guide-yanfei";
import guideYelan from "./guide-yelan";
import guideYoimiya from "./guide-yoimiya";
import { CharacterUidEnum } from "../enums/characters";
import type { GuideCharacters } from "../types/guide-characters";

// talent_leveling_recommendations
// 1 ур. - Не качаем
// 6 ур. - Можно прокачать
// 8 ур. - Золотая середина
// 10 ур. - Главный приоритет

export const guideCharacters = {
  [CharacterUidEnum.Amber]: guideAmber,
  [CharacterUidEnum.Arlecchino]: guideArlecchino,
  [CharacterUidEnum.Barbara]: guideBarbara,
  [CharacterUidEnum.Beidou]: guideBeidou,
  [CharacterUidEnum.Bennett]: guideBennett,
  [CharacterUidEnum.Candace]: guideCandace,
  [CharacterUidEnum.Charlotte]: guideCharlotte,
  [CharacterUidEnum.Chevreuse]: guideChevreuse,
  [CharacterUidEnum.Chongyun]: guideChongyun,
  [CharacterUidEnum.Cyno]: guideCyno,
  [CharacterUidEnum.Dehya]: guideDehya,
  [CharacterUidEnum.Diluc]: guideDiluc,
  [CharacterUidEnum.Diona]: guideDiona,
  [CharacterUidEnum.Dori]: guideDori,
  [CharacterUidEnum.Escoffier]: guideEscoffier,
  [CharacterUidEnum.Eula]: guideEula,
  [CharacterUidEnum.Faruzan]: guideFaruzan,
  [CharacterUidEnum.Fischl]: guideFischl,
  [CharacterUidEnum.Freminet]: guideFreminet,
  [CharacterUidEnum.Furina]: guideFurina,
  [CharacterUidEnum.Ganyu]: guideGanyu,
  [CharacterUidEnum.HuTao]: guideHuTao,
  [CharacterUidEnum.Iansan]: guideIansan,
  [CharacterUidEnum.Jean]: guideJean,
  [CharacterUidEnum.KaedeharaKazuha]: guideKaedeharaKazuha,
  [CharacterUidEnum.Kaeya]: guideKaeya,
  [CharacterUidEnum.KamisatoAyaka]: guideKamisatoAyaka,
  [CharacterUidEnum.KamisatoAyato]: guideKamisatoAyato,
  [CharacterUidEnum.Keqing]: guideKeqing,
  [CharacterUidEnum.Klee]: guideKlee,
  [CharacterUidEnum.KujouSara]: guideKujouSara,
  [CharacterUidEnum.KukiShinobu]: guideKukiShinobu,
  [CharacterUidEnum.Layla]: guideLayla,
  [CharacterUidEnum.Lisa]: guideLisa,
  [CharacterUidEnum.Lynette]: guideLynette,
  [CharacterUidEnum.Lyney]: guideLyney,
  [CharacterUidEnum.Mavuika]: guideMavuika,
  [CharacterUidEnum.Mika]: guideMika,
  [CharacterUidEnum.Mona]: guideMona,
  [CharacterUidEnum.Neuvillette]: guideNeuvillette,
  [CharacterUidEnum.Nilou]: guideNilou,
  [CharacterUidEnum.Qiqi]: guideQiqi,
  [CharacterUidEnum.RaidenShogun]: guideRaidenShogun,
  [CharacterUidEnum.Razor]: guideRazor,
  [CharacterUidEnum.Rosaria]: guideRosaria,
  [CharacterUidEnum.SangonomiyaKokomi]: guideSangonomiyaKokomi,
  [CharacterUidEnum.Sayu]: guideSayu,
  [CharacterUidEnum.Shenhe]: guideShenhe,
  [CharacterUidEnum.ShikanoinHeizou]: guideShikanoinHeizou,
  [CharacterUidEnum.Skirk]: guideSkirk,
  [CharacterUidEnum.Sucrose]: guideSucrose,
  [CharacterUidEnum.Tartaglia]: guideTartaglia,
  [CharacterUidEnum.Thoma]: guideThoma,
  [CharacterUidEnum.Varesa]: guideVaresa,
  [CharacterUidEnum.Venti]: guideVenti,
  [CharacterUidEnum.Wanderer]: guideWanderer,
  [CharacterUidEnum.Wriothesley]: guideWriothesley,
  [CharacterUidEnum.Xiangling]: guideXiangling,
  [CharacterUidEnum.Xiao]: guideXiao,
  [CharacterUidEnum.Xilonen]: guideXilonen,
  [CharacterUidEnum.Xingqiu]: guideXingqiu,
  [CharacterUidEnum.Xinyan]: guideXinyan,
  [CharacterUidEnum.YaeMiko]: guideYaeMiko,
  [CharacterUidEnum.Yanfei]: guideYanfei,
  [CharacterUidEnum.Yelan]: guideYelan,
  [CharacterUidEnum.Yoimiya]: guideYoimiya,
} as GuideCharacters;
