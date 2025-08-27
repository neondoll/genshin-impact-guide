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
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";
import artifactSets from "../../artifact-sets/data";
import weapons from "@/database/weapons/data";

export default new CharacterRecommendationsClass(CharacterIds.Escoffier)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.GoldenTroupe).setIsBetter().setNotes([
        "Значительно увеличит урон элементального навыка Эскофье, особенно когда она не на поле.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.BlizzardStrayer).setNotes([
        "Комплект увеличит Крио урон и шанс крит. попадания Эскофье.",
        "Поскольку Эскофье играет в отрядах с Крио и Гидро персонажами, она выполняет условие комплекта.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setNotes([
          "Личный урон важнее, чем ульта по откату",
        ]),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setNotes([
          "В меньшинстве случаев, когда есть Фурина, лечение нужно и лечить больше некому",
        ]),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.CryoDmgBonus).setNotes(["В 99% случаев"]),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setNotes(["В 1% случаев"]),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setNotes(["Почти всегда"]),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setNotes(["Приоритетно"]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setNotes(["Приоритетно"]),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("С1 лучше")
  .setReferencePoint([
    ["Оружие", `${weapons[WeaponKeys.Deathmatch].name} R1 [${weapons[WeaponKeys.Deathmatch].rarity}⭐]`],
    ["Атака", "2 100"],
    ["Восст. энергии", "110% - 115%"],
    ["Крит. шанс", "80%"],
    ["Крит. урон", "175%"],
    ["Артефакты", artifactSets[ArtifactSetIds.GoldenTroupe].name],
  ])
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "Во вторую очередь\n(9)"]),
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponKeys.SymphonistOfScents).setPercent(1.2991),
    new CharacterWeaponRecommendationClass(WeaponKeys.StaffOfHoma).setPercent(1.2247),
    new CharacterWeaponRecommendationClass(WeaponKeys.LumidouceElegy).setPercent(1.1820),
    new CharacterWeaponRecommendationClass(WeaponKeys.Deathmatch).setPercent(1.1568).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.PrimordialJadeWingedSpear).setPercent(1.1435),
    new CharacterWeaponRecommendationClass(WeaponKeys.CrimsonMoonsSemblance).setPercent(1.1126),
    new CharacterWeaponRecommendationClass(WeaponKeys.StaffOfTheScarletSands).setPercent(1.0994),
    new CharacterWeaponRecommendationClass(WeaponKeys.Deathmatch).setPercent(1.0637).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.SkywardSpine).setPercent(1.0356),
    new CharacterWeaponRecommendationClass(WeaponKeys.ProspectorsDrill).setPercent(1.0309).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.LithicSpear).setPercent(1.0118).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.BlackcliffPole).setPercent(1.0000),
    new CharacterWeaponRecommendationClass(WeaponKeys.BalladOfTheFjords).setPercent(0.9927).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.BalladOfTheFjords).setPercent(0.9926).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.ProspectorsDrill).setPercent(0.9819).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.MissiveWindspear).setPercent(0.9801),
    new CharacterWeaponRecommendationClass(WeaponKeys.KitainCrossSpear).setPercent(0.8818).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.FavoniusLance).setPercent(0.8526).setRefinement(5),
  ]);
