import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
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
import { elementalReactionById } from "../../elemental-reactions/help";
import { ElementalReactionIds } from "../../elemental-reactions/enums";
import { StatIds } from "../../stats/enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Arlecchino)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.FragmentOfHarmonicWhimsy).setIsBetter().setNotes([
        "Лучший вариант для Арлекино, так как повышает важную силу атаки и наносимый урон.",
        "Арлекино сама способна накладывать Долг жизни, поэтому условие 4 предметов выполняется.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.GladiatorsFinale).setNotes([
        "Арлекино использует древковое оружие и наносит урон преимущественно обычными атаками, поэтому ей подходит бонус 4 предметов.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage),
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.PyroDmgBonus).setNotes(["Лучше"]),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setNotes(["Приоритетно", "от 65%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setNotes(["Приоритетно", "от 150%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setNotes(["от 2000"]),
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setNotes(["от 150 (если Арлекино активирует реакции)"]),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setNotes(["Специально не собирать"]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("С1 и Сигна")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "По необходимости\n(6 | 8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6 | 8)"]),
  ])
  .setVideoSources([CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter])
  .setWeapons({
    "Гиперкери | Прожарка | отр. Шеврёз": [
      new CharacterWeaponRecommendationClass(WeaponIds.CrimsonMoonsSemblance).setIsBetter().setPercent(1.316),
      new CharacterWeaponRecommendationClass(WeaponIds.PrimordialJadeWingedSpear).setPercent(1.124),
      new CharacterWeaponRecommendationClass(WeaponIds.StaffOfTheScarletSands).setPercent(1.112),
      new CharacterWeaponRecommendationClass(WeaponIds.LumidouceElegy).setPercent(1.103),
      new CharacterWeaponRecommendationClass(WeaponIds.Deathmatch).setPercent(1.087).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.StaffOfHoma).setPercent(1.085),
      new CharacterWeaponRecommendationClass(WeaponIds.CalamityQueller).setPercent(1.063),
      new CharacterWeaponRecommendationClass(WeaponIds.Deathmatch).setPercent(1.032).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.WhiteTassel).setPercent(1.000),
      new CharacterWeaponRecommendationClass(WeaponIds.BalladOfTheFjords).setPercent(0.968),
      new CharacterWeaponRecommendationClass(WeaponIds.SkywardSpine).setPercent(0.948),
      new CharacterWeaponRecommendationClass(WeaponIds.BlackcliffPole).setPercent(0.899),
      new CharacterWeaponRecommendationClass(WeaponIds.MissiveWindspear).setPercent(0.875),
    ],
    [`${elementalReactionById(ElementalReactionIds.Vaporize)} | ${elementalReactionById(ElementalReactionIds.Melt)}`]: [
      new CharacterWeaponRecommendationClass(WeaponIds.CrimsonMoonsSemblance).setIsBetter().setPercent(1.309),
      new CharacterWeaponRecommendationClass(WeaponIds.StaffOfTheScarletSands).setPercent(1.156),
      new CharacterWeaponRecommendationClass(WeaponIds.PrimordialJadeWingedSpear).setPercent(1.114),
      new CharacterWeaponRecommendationClass(WeaponIds.Deathmatch).setPercent(1.105).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.LumidouceElegy).setPercent(1.103),
      new CharacterWeaponRecommendationClass(WeaponIds.BalladOfTheFjords).setPercent(1.098).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.StaffOfHoma).setPercent(1.086),
      new CharacterWeaponRecommendationClass(WeaponIds.CalamityQueller).setPercent(1.062),
      new CharacterWeaponRecommendationClass(WeaponIds.VortexVanquisher).setPercent(1.044),
      new CharacterWeaponRecommendationClass(WeaponIds.LithicSpear).setPercent(1.043).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.Deathmatch).setPercent(1.043).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.BalladOfTheFjords).setPercent(1.023).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.WhiteTassel).setPercent(1.000),
      new CharacterWeaponRecommendationClass(WeaponIds.MissiveWindspear).setPercent(0.990),
      new CharacterWeaponRecommendationClass(WeaponIds.DragonsBane).setPercent(0.965),
      new CharacterWeaponRecommendationClass(WeaponIds.LithicSpear).setPercent(0.965).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.SkywardSpine).setPercent(0.943),
      new CharacterWeaponRecommendationClass(WeaponIds.BlackcliffPole).setPercent(0.938),
    ],
  });
