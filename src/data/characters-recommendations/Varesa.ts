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
import { elementalReactionById } from "@/features/elemental-reactions/help";
import { ElementalReactionIds } from "@/enums/elemental-reaction";
import { StatIds } from "@/enums/stat";
import { TalentIds } from "@/enums/talent";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Varesa)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.LongNightsOath).setNotes([
        "Лучший набор для Варесы, поскольку значительно увеличивает её урон от атак в падении.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.ObsidianCodex).setNotes([
        "Комплект увеличивает урон Варесы и повышает шанс крит. попадания в сумме до 40%, позволяя сосредоточиться на крит. уроне в артефактах.",
        "Так как Вареса обладает Благословением Ночного духа, она полностью реализует условия комплекта.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [new CharacterArtifactStatRecommendation(StatIds.AtkPercentage)],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendation(StatIds.ElectroDmgBonus).setNotes(["Лучше с Цаплей всегда"]),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setNotes([
          "Лучше с Фуриной или в сете на планжи",
        ]),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setNotes(["от 1800"]),
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setNotes(["от 60%"]),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setNotes(["от 180%"]),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setNotes([
          "115% - 135% для Взрыва стихии",
        ]),
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setNotes([
          `от 150 (при игре через реакцию ${elementalReactionById(ElementalReactionIds.Hyperbloom)})`,
        ]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("Однозначно Сигна")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "По необходимости\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(10)"]),
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.VividNotions).setPercent(1.28),
    new CharacterWeaponRecommendation(WeaponIds.LostPrayerToTheSacredWinds).setPercent(1.06),
    new CharacterWeaponRecommendation(WeaponIds.KagurasVerity).setPercent(1.05),
    new CharacterWeaponRecommendation(WeaponIds.TomeOfTheEternalFlow).setPercent(1.04),
    new CharacterWeaponRecommendation(WeaponIds.CashflowSupervision).setPercent(1.04),
    new CharacterWeaponRecommendation(WeaponIds.SurfsUp).setPercent(1.03),
    new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setPercent(1.00).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialJade).setPercent(0.92).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FlowingPurity).setPercent(0.92).setRefinement(5),
  ]);
