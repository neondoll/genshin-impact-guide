import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import {
  CharacterArtifactRecommendationsClass,
  CharacterArtifactSetRecommendationWithIdClass,
  CharacterArtifactSetRecommendationWithIdsClass,
  CharacterArtifactStatRecommendationClass,
  CharacterRecommendationsClass,
  CharacterSquadCharacterRecommendationClass,
  CharacterSquadElementRecommendationClass,
  CharacterSquadRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterIds } from "../../characters/enums";
import { elementalReactionById } from "../../elemental-reactions/help";
import { ElementalReactionIds } from "../../elemental-reactions/enums";
import { ElementIds } from "../../elements/enums";
import { StatIds } from "../../stats/enums";
import { TalentIds } from "../../talents/enums";
import { VideoSourceClass } from "../../video-sources/classes";
import { WeaponIds } from "../../weapons/enums";
import elements from "../../elements/data";
import talents from "../../talents/data";

export default new CharacterRecommendationsClass(CharacterIds.Lauma)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.GildedDreams),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.DeepwoodMemories),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.SilkenMoonsSerenade),
      new CharacterArtifactSetRecommendationWithIdsClass([ArtifactSetIds.GildedDreams, ArtifactSetIds.WanderersTroupe]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setNotes(["Лучше"]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setNotes(["~ 1100"]),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setNotes(["~ 160%-200%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("C1 < Сигна < C2")
  .setKeyConstellations([2])
  .setSquads({
    [elementalReactionById(ElementalReactionIds.Bloom)]: CharacterSquadRecommendationsClass.init([
      [
        new CharacterSquadElementRecommendationClass(ElementIds.Hydro),
        new CharacterSquadCharacterRecommendationClass(CharacterIds.Nilou),
        new CharacterSquadCharacterRecommendationClass(CharacterIds.Lauma),
        new CharacterSquadElementRecommendationClass(ElementIds.Dendro),
      ],
      {
        [`${elements[ElementIds.Hydro].name} герой`]: [
          new CharacterSquadCharacterRecommendationClass(CharacterIds.Barbara),
          new CharacterSquadCharacterRecommendationClass(CharacterIds.SangonomiyaKokomi),
          new CharacterSquadCharacterRecommendationClass(CharacterIds.Xingqiu),
        ],
        [`${elements[ElementIds.Dendro].name} герой`]: [
          new CharacterSquadCharacterRecommendationClass(CharacterIds.Baizhu),
          new CharacterSquadCharacterRecommendationClass(CharacterIds.Nahida),
          new CharacterSquadCharacterRecommendationClass(CharacterIds.Yaoyao),
        ],
      },
    ]),
    [elementalReactionById(ElementalReactionIds.Burgeon)]: CharacterSquadRecommendationsClass.init([
      [
        new CharacterSquadCharacterRecommendationClass(CharacterIds.Lauma),
        new CharacterSquadElementRecommendationClass(ElementIds.Hydro),
        new CharacterSquadElementRecommendationClass(ElementIds.Pyro),
        [
          new CharacterSquadElementRecommendationClass(ElementIds.Dendro),
          new CharacterSquadElementRecommendationClass(ElementIds.Hydro),
          new CharacterSquadElementRecommendationClass(ElementIds.Pyro),
        ],
      ],
      [],
    ]),
    [elementalReactionById(ElementalReactionIds.Hyperbloom)]: CharacterSquadRecommendationsClass.init([
      [
        new CharacterSquadCharacterRecommendationClass(CharacterIds.Lauma),
        new CharacterSquadElementRecommendationClass(ElementIds.Hydro),
        new CharacterSquadElementRecommendationClass(ElementIds.Electro),
        [
          new CharacterSquadElementRecommendationClass(ElementIds.Dendro),
          new CharacterSquadElementRecommendationClass(ElementIds.Hydro),
          new CharacterSquadElementRecommendationClass(ElementIds.Electro),
        ],
      ],
      [],
    ]),
  })
  .setRotation({
    "В одну цель": `${talents[TalentIds.ElementalBurst].name} > к концу бонуса > ${talents[TalentIds.ElementalSkill].name}`,
    "В несколько целей": `${talents[TalentIds.ElementalSkill].name} (Долгое нажатие) > ${talents[TalentIds.ElementalBurst].name}`,
  })
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Во вторую очередь\n(10)"]),
  ])
  .setVideoSources([
    new VideoSourceClass("Miron MinMax: Паверкрип Нахиды? Гайд на Лауму в 6.0").setVkUrl("https://vkvideo.ru/video-227044935_456239254").setYoutubeUrl("https://youtu.be/BMpFDebyZck"),
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.NightweaversLookingGlass).setIsBetter(),
    new CharacterWeaponRecommendationClass(WeaponIds.AThousandFloatingDreams),
    new CharacterWeaponRecommendationClass(WeaponIds.SunnyMorningSleepIn),
    new CharacterWeaponRecommendationClass(WeaponIds.StarcallersWatch),
    new CharacterWeaponRecommendationClass(WeaponIds.EtherlightSpindlelute).setIsBetter(),
    new CharacterWeaponRecommendationClass(WeaponIds.BlackmarrowLantern),
    new CharacterWeaponRecommendationClass(WeaponIds.SacrificialFragments),
    new CharacterWeaponRecommendationClass(WeaponIds.FavoniusCodex),
    new CharacterWeaponRecommendationClass(WeaponIds.ThrillingTalesOfDragonSlayers),
  ]);
