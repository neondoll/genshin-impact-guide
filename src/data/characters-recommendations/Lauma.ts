import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactSetRecommendationWithIds,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterSquadCharacterRecommendation,
  CharacterSquadElementRecommendation,
  CharacterSquadRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterIds } from "@/enums/character";
import { elementalReactionById } from "@/features/elemental-reactions/help";
import { ElementalReactionIds } from "@/enums/elemental-reaction";
import { ElementIds } from "@/enums/element";
import { StatIds } from "@/enums/stat";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";
import elements from "../elements";
import talents from "../talents";
import videoSources from "../video-sources";

export default new CharacterRecommendations(CharacterIds.Lauma)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.GildedDreams),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.DeepwoodMemories),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.SilkenMoonsSerenade),
      new CharacterArtifactSetRecommendationWithIds([ArtifactSetIds.GildedDreams, ArtifactSetIds.WanderersTroupe]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setNotes(["Лучше"]),
        new CharacterArtifactStatRecommendation(StatIds.CritRate),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setNotes(["~ 1100"]),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setNotes(["~ 160%-200%"]),
        new CharacterArtifactStatRecommendation(StatIds.CritRate),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("C1 < Сигна < C2")
  .setKeyConstellations([2])
  .setSquads({
    [elementalReactionById(ElementalReactionIds.Bloom)]: CharacterSquadRecommendations.init([
      [
        new CharacterSquadElementRecommendation(ElementIds.Hydro),
        new CharacterSquadCharacterRecommendation(CharacterIds.Nilou),
        new CharacterSquadCharacterRecommendation(CharacterIds.Lauma),
        new CharacterSquadElementRecommendation(ElementIds.Dendro),
      ],
      {
        [`${elements[ElementIds.Hydro].name} герой`]: [
          new CharacterSquadCharacterRecommendation(CharacterIds.Barbara),
          new CharacterSquadCharacterRecommendation(CharacterIds.SangonomiyaKokomi),
          new CharacterSquadCharacterRecommendation(CharacterIds.Xingqiu),
        ],
        [`${elements[ElementIds.Dendro].name} герой`]: [
          new CharacterSquadCharacterRecommendation(CharacterIds.Baizhu),
          new CharacterSquadCharacterRecommendation(CharacterIds.Nahida),
          new CharacterSquadCharacterRecommendation(CharacterIds.Yaoyao),
        ],
      },
    ]),
    [elementalReactionById(ElementalReactionIds.Burgeon)]: CharacterSquadRecommendations.init([
      [
        new CharacterSquadCharacterRecommendation(CharacterIds.Lauma),
        new CharacterSquadElementRecommendation(ElementIds.Hydro),
        new CharacterSquadElementRecommendation(ElementIds.Pyro),
        [
          new CharacterSquadElementRecommendation(ElementIds.Dendro),
          new CharacterSquadElementRecommendation(ElementIds.Hydro),
          new CharacterSquadElementRecommendation(ElementIds.Pyro),
        ],
      ],
      [],
    ]),
    [elementalReactionById(ElementalReactionIds.Hyperbloom)]: CharacterSquadRecommendations.init([
      [
        new CharacterSquadCharacterRecommendation(CharacterIds.Lauma),
        new CharacterSquadElementRecommendation(ElementIds.Hydro),
        new CharacterSquadElementRecommendation(ElementIds.Electro),
        [
          new CharacterSquadElementRecommendation(ElementIds.Dendro),
          new CharacterSquadElementRecommendation(ElementIds.Hydro),
          new CharacterSquadElementRecommendation(ElementIds.Electro),
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
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(10)"]),
  ])
  .setVideoSources([videoSources[VideoSourceIds.GuideToLauma]])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.NightweaversLookingGlass).setIsBetter(),
    new CharacterWeaponRecommendation(WeaponIds.AThousandFloatingDreams),
    new CharacterWeaponRecommendation(WeaponIds.SunnyMorningSleepIn),
    new CharacterWeaponRecommendation(WeaponIds.StarcallersWatch),
    new CharacterWeaponRecommendation(WeaponIds.EtherlightSpindlelute).setIsBetter(),
    new CharacterWeaponRecommendation(WeaponIds.BlackmarrowLantern),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialFragments),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusCodex),
    new CharacterWeaponRecommendation(WeaponIds.ThrillingTalesOfDragonSlayers),
  ]);
