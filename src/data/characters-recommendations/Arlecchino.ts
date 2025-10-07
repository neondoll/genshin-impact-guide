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
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Arlecchino)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.FragmentOfHarmonicWhimsy).setIsBetter().setNotes([
        "Лучший вариант для Арлекино, так как повышает важную силу атаки и наносимый урон.",
        "Арлекино сама способна накладывать Долг жизни, поэтому условие 4 предметов выполняется.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.GladiatorsFinale).setNotes([
        "Арлекино использует древковое оружие и наносит урон преимущественно обычными атаками, поэтому ей подходит бонус 4 предметов.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage),
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendation(StatIds.PyroDmgBonus).setNotes(["Лучше"]),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.CritDMG),
        new CharacterArtifactStatRecommendation(StatIds.CritRate),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setNotes(["Приоритетно", "от 65%"]),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setNotes(["Приоритетно", "от 150%"]),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setNotes(["от 2000"]),
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setNotes(["от 150 (если Арлекино активирует реакции)"]),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setNotes(["Специально не собирать"]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("С1 и Сигна")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "По необходимости\n(6 | 8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6 | 8)"]),
  ])
  .setVideoSourceIds([VideoSourceIds.TheBestWeaponsForEveryCharacter])
  .setWeapons({
    "Гиперкери | Прожарка | отр. Шеврёз": [
      new CharacterWeaponRecommendation(WeaponIds.CrimsonMoonsSemblance).setIsBetter("Лучшее сигнатурное оружие").setPercent(1.316),
      new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeWingedSpear).setPercent(1.124),
      new CharacterWeaponRecommendation(WeaponIds.StaffOfTheScarletSands).setPercent(1.112),
      new CharacterWeaponRecommendation(WeaponIds.LumidouceElegy).setPercent(1.103),
      new CharacterWeaponRecommendation(WeaponIds.Deathmatch).setPercent(1.087).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.StaffOfHoma).setPercent(1.085),
      new CharacterWeaponRecommendation(WeaponIds.CalamityQueller).setPercent(1.063),
      new CharacterWeaponRecommendation(WeaponIds.Deathmatch).setPercent(1.032).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.WhiteTassel).setPercent(1.000),
      new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords).setPercent(0.968),
      new CharacterWeaponRecommendation(WeaponIds.SkywardSpine).setPercent(0.948),
      new CharacterWeaponRecommendation(WeaponIds.BlackcliffPole).setPercent(0.899),
      new CharacterWeaponRecommendation(WeaponIds.MissiveWindspear).setPercent(0.875),
    ],
    [`${elementalReactionById(ElementalReactionIds.Vaporize)} | ${elementalReactionById(ElementalReactionIds.Melt)}`]: [
      new CharacterWeaponRecommendation(WeaponIds.CrimsonMoonsSemblance).setIsBetter("Лучшее сигнатурное оружие").setPercent(1.309),
      new CharacterWeaponRecommendation(WeaponIds.StaffOfTheScarletSands).setPercent(1.156),
      new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeWingedSpear).setPercent(1.114),
      new CharacterWeaponRecommendation(WeaponIds.Deathmatch).setPercent(1.105).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.LumidouceElegy).setPercent(1.103),
      new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords).setPercent(1.098).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.StaffOfHoma).setPercent(1.086),
      new CharacterWeaponRecommendation(WeaponIds.CalamityQueller).setPercent(1.062),
      new CharacterWeaponRecommendation(WeaponIds.VortexVanquisher).setPercent(1.044),
      new CharacterWeaponRecommendation(WeaponIds.LithicSpear).setPercent(1.043).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.Deathmatch).setPercent(1.043).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords).setPercent(1.023).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.WhiteTassel).setPercent(1.000),
      new CharacterWeaponRecommendation(WeaponIds.MissiveWindspear).setPercent(0.990),
      new CharacterWeaponRecommendation(WeaponIds.DragonsBane).setPercent(0.965),
      new CharacterWeaponRecommendation(WeaponIds.LithicSpear).setPercent(0.965).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SkywardSpine).setPercent(0.943),
      new CharacterWeaponRecommendation(WeaponIds.BlackcliffPole).setPercent(0.938),
    ],
  });
