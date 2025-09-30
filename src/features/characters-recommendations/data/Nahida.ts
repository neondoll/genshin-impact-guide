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
import { VideoSourceClass } from "../../video-sources/classes";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Nahida)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.DeepwoodMemories).setIsBetter(),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.GoldenTroupe),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.GildedDreams),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.Instructor),
    ],
    {
      [ArtifactSlotIds.Sands]: [new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery)],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery),
        new CharacterArtifactStatRecommendationClass(StatIds.DendroDmgBonus),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("С1 < Сигна < С2")
  .setKeyConstellations([2])
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "По необходимости\n(6-8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6-8)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.FirstConstellationOrSignatureWeapon,
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    new VideoSourceClass("Miron MinMax: Актуальный и Подробный | Гайд на Нахиду в 5.1").setVkUrl("https://vkvideo.ru/video-227044935_456239163"),
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons({
    [elementalReactionById(ElementalReactionIds.Hyperbloom)]: [
      new CharacterWeaponRecommendationClass(WeaponIds.AThousandFloatingDreams).setIsBetter().setPercent(1.0000).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.WanderingEvenstar).setPercent(0.9841).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.TheWidsith).setPercent(0.9705).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.WanderingEvenstar).setPercent(0.9702).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.SurfsUp).setPercent(0.9679).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.KagurasVerity).setPercent(0.9668).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.TomeOfTheEternalFlow).setPercent(0.9664).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.SacrificialJade).setPercent(0.9654).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.TheWidsith).setPercent(0.9646).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.SolarPearl).setPercent(0.9628).setRefinement(1),
    ],
    [elementalReactionById(ElementalReactionIds.Quicken)]: [
      new CharacterWeaponRecommendationClass(WeaponIds.AThousandFloatingDreams).setIsBetter().setPercent(1.0000).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.WanderingEvenstar).setPercent(0.9789).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.WanderingEvenstar).setPercent(0.9718).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.MagicGuide).setPercent(0.9552).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.TheWidsith).setPercent(0.9522).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.SacrificialJade).setPercent(0.9518).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.KagurasVerity).setPercent(0.9502).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.SacrificialFragments).setPercent(0.9489).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.MappaMare).setPercent(0.9484).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.SurfsUp).setPercent(0.9471).setRefinement(1),
    ],
  });
