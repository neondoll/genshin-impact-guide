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
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "По необходимости\n(6 | 8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "Во вторую очередь\n(6 | 8)"]),
  ])
  .setVideoSources([CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter])
  .setWeapons({
    "Гиперкери | Прожарка | отр. Шеврёз": [
      new CharacterWeaponRecommendationClass(WeaponKeys.CrimsonMoonsSemblance).setIsBetter().setPercent(1.316),
      new CharacterWeaponRecommendationClass(WeaponKeys.PrimordialJadeWingedSpear).setPercent(1.124),
      new CharacterWeaponRecommendationClass(WeaponKeys.StaffOfTheScarletSands).setPercent(1.112),
      new CharacterWeaponRecommendationClass(WeaponKeys.LumidouceElegy).setPercent(1.103),
      new CharacterWeaponRecommendationClass(WeaponKeys.Deathmatch).setPercent(1.087).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.StaffOfHoma).setPercent(1.085),
      new CharacterWeaponRecommendationClass(WeaponKeys.CalamityQueller).setPercent(1.063),
      new CharacterWeaponRecommendationClass(WeaponKeys.Deathmatch).setPercent(1.032).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.WhiteTassel).setPercent(1.000),
      new CharacterWeaponRecommendationClass(WeaponKeys.BalladOfTheFjords).setPercent(0.968),
      new CharacterWeaponRecommendationClass(WeaponKeys.SkywardSpine).setPercent(0.948),
      new CharacterWeaponRecommendationClass(WeaponKeys.BlackcliffPole).setPercent(0.899),
      new CharacterWeaponRecommendationClass(WeaponKeys.MissiveWindspear).setPercent(0.875),
    ],
    "Пар | Таяние": [
      new CharacterWeaponRecommendationClass(WeaponKeys.CrimsonMoonsSemblance).setIsBetter().setPercent(1.309),
      new CharacterWeaponRecommendationClass(WeaponKeys.StaffOfTheScarletSands).setPercent(1.156),
      new CharacterWeaponRecommendationClass(WeaponKeys.PrimordialJadeWingedSpear).setPercent(1.114),
      new CharacterWeaponRecommendationClass(WeaponKeys.Deathmatch).setPercent(1.105).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.LumidouceElegy).setPercent(1.103),
      new CharacterWeaponRecommendationClass(WeaponKeys.BalladOfTheFjords).setPercent(1.098).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.StaffOfHoma).setPercent(1.086),
      new CharacterWeaponRecommendationClass(WeaponKeys.CalamityQueller).setPercent(1.062),
      new CharacterWeaponRecommendationClass(WeaponKeys.VortexVanquisher).setPercent(1.044),
      new CharacterWeaponRecommendationClass(WeaponKeys.LithicSpear).setPercent(1.043).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponKeys.Deathmatch).setPercent(1.043).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.BalladOfTheFjords).setPercent(1.023).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.WhiteTassel).setPercent(1.000),
      new CharacterWeaponRecommendationClass(WeaponKeys.MissiveWindspear).setPercent(0.990),
      new CharacterWeaponRecommendationClass(WeaponKeys.DragonsBane).setPercent(0.965),
      new CharacterWeaponRecommendationClass(WeaponKeys.LithicSpear).setPercent(0.965).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponKeys.SkywardSpine).setPercent(0.943),
      new CharacterWeaponRecommendationClass(WeaponKeys.BlackcliffPole).setPercent(0.938),
    ],
  });
