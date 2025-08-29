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
import artifactSets from "../../artifact-sets/data";
import weapons from "../../weapons/data";

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
    ["Оружие", `${weapons[WeaponIds.Deathmatch].name} R1 [${weapons[WeaponIds.Deathmatch].rarity}⭐]`],
    ["Атака", "2 100"],
    ["Восст. энергии", "110% - 115%"],
    ["Крит. шанс", "80%"],
    ["Крит. урон", "175%"],
    ["Артефакты", artifactSets[ArtifactSetIds.GoldenTroupe].name],
  ])
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Во вторую очередь\n(9)"]),
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.SymphonistOfScents).setPercent(1.2991),
    new CharacterWeaponRecommendationClass(WeaponIds.StaffOfHoma).setPercent(1.2247),
    new CharacterWeaponRecommendationClass(WeaponIds.LumidouceElegy).setPercent(1.1820),
    new CharacterWeaponRecommendationClass(WeaponIds.Deathmatch).setPercent(1.1568).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.PrimordialJadeWingedSpear).setPercent(1.1435),
    new CharacterWeaponRecommendationClass(WeaponIds.CrimsonMoonsSemblance).setPercent(1.1126),
    new CharacterWeaponRecommendationClass(WeaponIds.StaffOfTheScarletSands).setPercent(1.0994),
    new CharacterWeaponRecommendationClass(WeaponIds.Deathmatch).setPercent(1.0637).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.SkywardSpine).setPercent(1.0356),
    new CharacterWeaponRecommendationClass(WeaponIds.ProspectorsDrill).setPercent(1.0309).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.LithicSpear).setPercent(1.0118).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.BlackcliffPole).setPercent(1.0000),
    new CharacterWeaponRecommendationClass(WeaponIds.BalladOfTheFjords).setPercent(0.9927).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.BalladOfTheFjords).setPercent(0.9926).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.ProspectorsDrill).setPercent(0.9819).setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.MissiveWindspear).setPercent(0.9801),
    new CharacterWeaponRecommendationClass(WeaponIds.KitainCrossSpear).setPercent(0.8818).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.FavoniusLance).setPercent(0.8526).setRefinement(5),
  ]);
