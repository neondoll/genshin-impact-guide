import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterIds } from "@/enums/character";
import { CharacterRecommendationsVideoSources } from "@/enums/character-recommendations";
import { StatIds } from "@/enums/stat";
import { TalentIds } from "@/enums/talent";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Neuvillette)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.MarechausseeHunter).setNotes([
        "Лучший комплект для Нёвиллета, так как увеличивает урон заряженной атаки и повышает шанс крит. попадания в сумме на 36%.",
        "Так как Нёвиллет при заряженной атаке теряет HP, он выполняет условие 4 предметов.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [new CharacterArtifactStatRecommendation(StatIds.HpPercentage)],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setNotes(["Если в команде Фурина"]),
        new CharacterArtifactStatRecommendation(StatIds.HydroDmgBonus),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setNotes(["Чаще всего"]),
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setNotes(["Иногда, особенно с Сигной"]),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setNotes(["от 30000"]),
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setNotes([
          "от 65% в обычной ситуации",
          "от 35% при использовании полного комплекта Охотник Сумеречного двора и стремимся к 64%",
        ]),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setNotes(["от 160%"]),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setNotes([
          "Специально не охотиться",
          "от 120%",
        ]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("Сигна > C1, Сигна > C2. Лучше Сигна и С1")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(6 | 8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "По необходимости\n(6 | 8)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.TomeOfTheEternalFlow).setIsBetter().setPercent(1.000),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialJade).setPercent(0.998).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.SurfsUp).setPercent(0.917),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialJade).setPercent(0.914).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.AshGravenDrinkingHorn).setPercent(0.874).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.LostPrayerToTheSacredWinds).setPercent(0.847),
    new CharacterWeaponRecommendation(WeaponIds.CashflowSupervision).setPercent(0.831),
    new CharacterWeaponRecommendation(WeaponIds.AshGravenDrinkingHorn).setPercent(0.808).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.KagurasVerity).setPercent(0.807),
    new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setPercent(0.805).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.JadefallsSplendor).setPercent(0.796),
    new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setPercent(0.791).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.EverlastingMoonglow).setPercent(0.765),
    new CharacterWeaponRecommendation(WeaponIds.TulaytullahsRemembrance).setPercent(0.752),
    new CharacterWeaponRecommendation(WeaponIds.PrototypeAmber).setPercent(0.745),
    new CharacterWeaponRecommendation(WeaponIds.RingOfYaxche).setPercent(0.745),
  ]);
