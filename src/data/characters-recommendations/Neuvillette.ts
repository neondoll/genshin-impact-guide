import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Neuvillette)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.MARECHAUSSEE_HUNTER).setNotes([
        "Лучший комплект для Нёвиллета, так как увеличивает урон заряженной атаки и повышает шанс крит. попадания в сумме на 36%.",
        "Так как Нёвиллет при заряженной атаке теряет HP, он выполняет условие 4 предметов.",
      ]),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE)],
      [ARTIFACT_SLOTS.GOBLET]: [
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setNotes(["Если в команде Фурина"]),
        new CharacterArtifactStatRecommendation(STATS.HYDRO_DMG_BONUS),
      ],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setNotes(["Чаще всего"]),
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setNotes(["Иногда, особенно с Сигной"]),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.HP_PERCENTAGE).setNotes(["от 30000"]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setNotes([
          "от 65% в обычной ситуации",
          "от 35% при использовании полного комплекта Охотник Сумеречного двора и стремимся к 64%",
        ]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setNotes(["от 160%"]),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setNotes([
          "Специально не охотиться",
          "от 120%",
        ]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("Сигна < C1. Лучше Сигна и С1")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(6 | 8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "По необходимости\n(6 | 8)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.FirstConstellationOrSignatureWeapon,
    VideoSourceIds.GuideToNeuvillette,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.TomeOfTheEternalFlow).setIsBetter("Лучшее оружие (средняя зависимость)").setPercent(1.000),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialJade).setPercent(0.998).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.SurfsUp).setPercent(0.917),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialJade).setPercent(0.914).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.AshGravenDrinkingHorn).setPercent(0.874).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.LostPrayerToTheSacredWinds).setPercent(0.847),
    new CharacterWeaponRecommendation(WeaponIds.CashflowSupervision).setPercent(0.831),
    new CharacterWeaponRecommendation(WeaponIds.AshGravenDrinkingHorn).setPercent(0.808).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.KagurasVerity).setPercent(0.807),
    new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setIsBetter("Лучшее доступное оружие").setPercent(0.805).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.JadefallsSplendor).setPercent(0.796),
    new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setPercent(0.791).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.EverlastingMoonglow).setPercent(0.765),
    new CharacterWeaponRecommendation(WeaponIds.TulaytullahsRemembrance).setPercent(0.752),
    new CharacterWeaponRecommendation(WeaponIds.PrototypeAmber).setPercent(0.745),
    new CharacterWeaponRecommendation(WeaponIds.RingOfYaxche).setPercent(0.745),
  ]);
