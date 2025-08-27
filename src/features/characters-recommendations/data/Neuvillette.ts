import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import {
  CharacterArtifactRecommendationsClass,
  CharacterArtifactSetRecommendationWithIdClass,
  CharacterArtifactStatRecommendationClass,
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterIds } from "../../characters/enums";
import { CharacterRecommendationsVideoSources } from "../enums";
import { StatIds } from "../../stats/enums";
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Neuvillette)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.MarechausseeHunter).setNotes([
        "Лучший комплект для Нёвиллета, так как увеличивает урон заряженной атаки и повышает шанс крит. попадания в сумме на 36%.",
        "Так как Нёвиллет при заряженной атаке теряет HP, он выполняет условие 4 предметов.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage)],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setNotes(["Если в команде Фурина"]),
        new CharacterArtifactStatRecommendationClass(StatIds.HydroDmgBonus),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setNotes(["Чаще всего"]),
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setNotes(["Иногда, особенно с Сигной"]),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setNotes(["от 30000"]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setNotes([
          "от 65% в обычной ситуации",
          "от 35% при использовании полного комплекта Охотник Сумеречного двора и стремимся к 64%",
        ]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setNotes(["от 160%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setNotes([
          "Специально не охотиться",
          "от 120%",
        ]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("Сигна > C1, Сигна > C2. Лучше Сигна и С1")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "Во вторую очередь\n(6 | 8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "По необходимости\n(6 | 8)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponKeys.TomeOfTheEternalFlow).setIsBetter().setPercent(1.000),
    new CharacterWeaponRecommendationClass(WeaponKeys.SacrificialJade).setPercent(0.998).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.SurfsUp).setPercent(0.917),
    new CharacterWeaponRecommendationClass(WeaponKeys.SacrificialJade).setPercent(0.914).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.AshGravenDrinkingHorn).setPercent(0.874).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.LostPrayerToTheSacredWinds).setPercent(0.847),
    new CharacterWeaponRecommendationClass(WeaponKeys.CashflowSupervision).setPercent(0.831),
    new CharacterWeaponRecommendationClass(WeaponKeys.AshGravenDrinkingHorn).setPercent(0.808).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.KagurasVerity).setPercent(0.807),
    new CharacterWeaponRecommendationClass(WeaponKeys.TheWidsith).setPercent(0.805).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.JadefallsSplendor).setPercent(0.796),
    new CharacterWeaponRecommendationClass(WeaponKeys.TheWidsith).setPercent(0.791).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.EverlastingMoonglow).setPercent(0.765),
    new CharacterWeaponRecommendationClass(WeaponKeys.TulaytullahsRemembrance).setPercent(0.752),
    new CharacterWeaponRecommendationClass(WeaponKeys.PrototypeAmber).setPercent(0.745),
    new CharacterWeaponRecommendationClass(WeaponKeys.RingOfYaxche).setPercent(0.745),
  ]);
