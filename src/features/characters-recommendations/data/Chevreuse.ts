import { artifactSetById } from "./_help";
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
import weapons from "@/database/weapons/data";

export default new CharacterRecommendationsClass(CharacterIds.Chevreuse)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.NoblesseOblige),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.SongOfDaysPast).setDescription("Не рекомендуется, слишком нестабильна и требует овер хил"),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.ScrollOfTheHeroOfCinderCity).setDescription(`Если ${artifactSetById(ArtifactSetIds.NoblesseOblige)} занята`),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.EmblemOfSeveredFate).setDescription(`Если ${artifactSetById(ArtifactSetIds.NoblesseOblige)} и ${artifactSetById(ArtifactSetIds.ScrollOfTheHeroOfCinderCity)} заняты`),
    ],
    {
      [ArtifactSlotIds.Sands]: [new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage)],
      [ArtifactSlotIds.Goblet]: [new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage)],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage),
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setDescription(`Если в руках ${weapons[WeaponKeys.FavoniusLance].name}`),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge),
      ],
    },
  ]))
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "Во вторую очередь\n(8)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponKeys.StaffOfHoma).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.DialoguesOfTheDesertSages).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.FavoniusLance).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponKeys.RightfulReward).setRefinement(5),
  ]);
