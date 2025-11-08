import { ARTIFACT_SETS } from "@/constants/artifact-sets";
import { ARTIFACT_SLOTS } from "@/constants/artifact-slots";
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
import { ELEMENTS } from "@/constants/elements";
import { STATS } from "@/constants/stats";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";
import elements from "../elements";
import talents from "../talents";

export default new CharacterRecommendations(CharacterIds.Lauma)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.GILDED_DREAMS),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.DEEPWOOD_MEMORIES),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.SILKEN_MOONS_SERENADE),
      new CharacterArtifactSetRecommendationWithIds([ARTIFACT_SETS.GILDED_DREAMS, ARTIFACT_SETS.WANDERERS_TROUPE]),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE),
      ],
      [ARTIFACT_SLOTS.GOBLET]: [
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY),
      ],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setNotes(["Лучше"]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setNotes(["~ 1100"]),
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setNotes(["~ 160%-200%"]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("C1 < Сигна < C2")
  .setKeyConstellations([2])
  .setSquads({
    [elementalReactionById(ElementalReactionIds.Bloom)]: CharacterSquadRecommendations.init([
      [
        new CharacterSquadElementRecommendation(ELEMENTS.HYDRO),
        new CharacterSquadCharacterRecommendation(CharacterIds.Nilou),
        new CharacterSquadCharacterRecommendation(CharacterIds.Lauma),
        new CharacterSquadElementRecommendation(ELEMENTS.DENDRO),
      ],
      {
        [`${elements[ELEMENTS.HYDRO].name} герой`]: [
          new CharacterSquadCharacterRecommendation(CharacterIds.Barbara),
          new CharacterSquadCharacterRecommendation(CharacterIds.SangonomiyaKokomi),
          new CharacterSquadCharacterRecommendation(CharacterIds.Xingqiu),
        ],
        [`${elements[ELEMENTS.DENDRO].name} герой`]: [
          new CharacterSquadCharacterRecommendation(CharacterIds.Baizhu),
          new CharacterSquadCharacterRecommendation(CharacterIds.Nahida),
          new CharacterSquadCharacterRecommendation(CharacterIds.Yaoyao),
        ],
      },
    ]),
    [elementalReactionById(ElementalReactionIds.Burgeon)]: CharacterSquadRecommendations.init([
      [
        new CharacterSquadCharacterRecommendation(CharacterIds.Lauma),
        new CharacterSquadElementRecommendation(ELEMENTS.HYDRO),
        new CharacterSquadElementRecommendation(ELEMENTS.PYRO),
        [
          new CharacterSquadElementRecommendation(ELEMENTS.DENDRO),
          new CharacterSquadElementRecommendation(ELEMENTS.HYDRO),
          new CharacterSquadElementRecommendation(ELEMENTS.PYRO),
        ],
      ],
      [],
    ]),
    [elementalReactionById(ElementalReactionIds.Hyperbloom)]: CharacterSquadRecommendations.init([
      [
        new CharacterSquadCharacterRecommendation(CharacterIds.Lauma),
        new CharacterSquadElementRecommendation(ELEMENTS.HYDRO),
        new CharacterSquadElementRecommendation(ELEMENTS.ELECTRO),
        [
          new CharacterSquadElementRecommendation(ELEMENTS.DENDRO),
          new CharacterSquadElementRecommendation(ELEMENTS.HYDRO),
          new CharacterSquadElementRecommendation(ELEMENTS.ELECTRO),
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
  .setVideoSourceIds([VideoSourceIds.GuideToLauma_AnimeCool, VideoSourceIds.GuideToLauma_MironMinMax])
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
