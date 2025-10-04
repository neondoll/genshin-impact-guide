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
// import { CharacterRecommendationsVideoSources } from "@/enums/character-recommendations";
import { elementalReactionById } from "@/features/elemental-reactions/help";
import { ElementalReactionIds } from "@/enums/elemental-reaction";
import { StatIds } from "@/enums/stat";
import { TalentIds } from "@/enums/talent";
// import { VideoSource } from "@/classes/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Nahida)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.DeepwoodMemories).setIsBetter(),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.GoldenTroupe),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.GildedDreams),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.Instructor),
    ],
    {
      [ArtifactSlotIds.Sands]: [new CharacterArtifactStatRecommendation(StatIds.ElementalMastery)],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery),
        new CharacterArtifactStatRecommendation(StatIds.DendroDmgBonus),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG),
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG),
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("С1 < Сигна < С2")
  .setKeyConstellations([2])
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "По необходимости\n(6-8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6-8)"]),
  ])
  .setVideoSources([
    // CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    // CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    // new VideoSource("Miron MinMax: Актуальный и Подробный | Гайд на Нахиду в 5.1").setVkUrl("https://vkvideo.ru/video-227044935_456239163"),
    // CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons({
    [elementalReactionById(ElementalReactionIds.Hyperbloom)]: [
      new CharacterWeaponRecommendation(WeaponIds.AThousandFloatingDreams).setIsBetter().setPercent(1.0000).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.WanderingEvenstar).setPercent(0.9841).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setPercent(0.9705).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.WanderingEvenstar).setPercent(0.9702).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SurfsUp).setPercent(0.9679).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.KagurasVerity).setPercent(0.9668).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.TomeOfTheEternalFlow).setPercent(0.9664).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SacrificialJade).setPercent(0.9654).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setPercent(0.9646).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SolarPearl).setPercent(0.9628).setRefinement(1),
    ],
    [elementalReactionById(ElementalReactionIds.Quicken)]: [
      new CharacterWeaponRecommendation(WeaponIds.AThousandFloatingDreams).setIsBetter().setPercent(1.0000).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.WanderingEvenstar).setPercent(0.9789).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.WanderingEvenstar).setPercent(0.9718).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.MagicGuide).setPercent(0.9552).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setPercent(0.9522).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.SacrificialJade).setPercent(0.9518).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.KagurasVerity).setPercent(0.9502).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.SacrificialFragments).setPercent(0.9489).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.MappaMare).setPercent(0.9484).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.SurfsUp).setPercent(0.9471).setRefinement(1),
    ],
  });
