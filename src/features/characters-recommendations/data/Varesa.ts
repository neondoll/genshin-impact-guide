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
import { StatIds } from "../../stats/enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Varesa)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.LongNightsOath).setNotes([
        "Лучший набор для Варесы, поскольку значительно увеличивает её урон от атак в падении.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.ObsidianCodex).setNotes([
        "Комплект увеличивает урон Варесы и повышает шанс крит. попадания в сумме до 40%, позволяя сосредоточиться на крит. уроне в артефактах.",
        "Так как Вареса обладает Благословением Ночного духа, она полностью реализует условия комплекта.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage)],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.ElectroDmgBonus).setNotes(["Лучше с Цаплей всегда"]),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setNotes([
          "Лучше с Фуриной или в сете на планжи",
        ]),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setNotes(["от 1800"]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setNotes(["от 60%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setNotes(["от 180%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setNotes([
          "115% - 135% для Взрыва стихии",
        ]),
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setNotes([
          "от 150 (при игре через реакцию Вегетация)",
        ]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("Однозначно Сигна")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "По необходимости\n(8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Во вторую очередь\n(10)"]),
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.VividNotions).setPercent(1.28),
    new CharacterWeaponRecommendationClass(WeaponIds.LostPrayerToTheSacredWinds).setPercent(1.06),
    new CharacterWeaponRecommendationClass(WeaponIds.KagurasVerity).setPercent(1.05),
    new CharacterWeaponRecommendationClass(WeaponIds.TomeOfTheEternalFlow).setPercent(1.04),
    new CharacterWeaponRecommendationClass(WeaponIds.CashflowSupervision).setPercent(1.04),
    new CharacterWeaponRecommendationClass(WeaponIds.SurfsUp).setPercent(1.03),
    new CharacterWeaponRecommendationClass(WeaponIds.TheWidsith).setPercent(1.00).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.SacrificialJade).setPercent(0.92).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.FlowingPurity).setPercent(0.92).setRefinement(5),
  ]);
