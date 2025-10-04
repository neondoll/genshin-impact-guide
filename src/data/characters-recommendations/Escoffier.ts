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
import { StatIds } from "@/enums/stat";
import { TalentIds } from "@/enums/talent";
import { WeaponIds } from "@/enums/weapon";
import artifactSets from "../artifact-sets";
import weapons from "../weapons";

export default new CharacterRecommendations(CharacterIds.Escoffier)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.GoldenTroupe).setIsBetter().setNotes([
        "Значительно увеличит урон элементального навыка Эскофье, особенно когда она не на поле.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.BlizzardStrayer).setNotes([
        "Комплект увеличит Крио урон и шанс крит. попадания Эскофье.",
        "Поскольку Эскофье играет в отрядах с Крио и Гидро персонажами, она выполняет условие комплекта.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setNotes([
          "Личный урон важнее, чем ульта по откату",
        ]),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setNotes([
          "В меньшинстве случаев, когда есть Фурина, лечение нужно и лечить больше некому",
        ]),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendation(StatIds.CryoDmgBonus).setNotes(["В 99% случаев"]),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setNotes(["В 1% случаев"]),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setNotes(["Почти всегда"]),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setNotes(["Приоритетно"]),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setNotes(["Приоритетно"]),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("С1 лучше")
  .setReferencePoint([
    ["Оружие", `${weapons[WeaponIds.Deathmatch].title} R1 [${weapons[WeaponIds.Deathmatch].rarity}⭐]`],
    ["Атака", "2 100"],
    ["Восст. энергии", "110% - 115%"],
    ["Крит. шанс", "80%"],
    ["Крит. урон", "175%"],
    ["Артефакты", artifactSets[ArtifactSetIds.GoldenTroupe].name],
  ])
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(9)"]),
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.SymphonistOfScents).setPercent(1.2991),
    new CharacterWeaponRecommendation(WeaponIds.StaffOfHoma).setPercent(1.2247),
    new CharacterWeaponRecommendation(WeaponIds.LumidouceElegy).setPercent(1.1820),
    new CharacterWeaponRecommendation(WeaponIds.Deathmatch).setPercent(1.1568).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeWingedSpear).setPercent(1.1435),
    new CharacterWeaponRecommendation(WeaponIds.CrimsonMoonsSemblance).setPercent(1.1126),
    new CharacterWeaponRecommendation(WeaponIds.StaffOfTheScarletSands).setPercent(1.0994),
    new CharacterWeaponRecommendation(WeaponIds.Deathmatch).setPercent(1.0637).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.SkywardSpine).setPercent(1.0356),
    new CharacterWeaponRecommendation(WeaponIds.ProspectorsDrill).setPercent(1.0309).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.LithicSpear).setPercent(1.0118).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.BlackcliffPole).setPercent(1.0000),
    new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords).setPercent(0.9927).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.BalladOfTheFjords).setPercent(0.9926).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.ProspectorsDrill).setPercent(0.9819).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.MissiveWindspear).setPercent(0.9801),
    new CharacterWeaponRecommendation(WeaponIds.KitainCrossSpear).setPercent(0.8818).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusLance).setPercent(0.8526).setRefinement(5),
  ]);
