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
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";
import weapons from "../../weapons/data";

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
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setDescription(`Если в руках ${weapons[WeaponIds.FavoniusLance].title}`),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge),
      ],
    },
  ]))
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Во вторую очередь\n(8)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.StaffOfHoma).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.DialoguesOfTheDesertSages).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.FavoniusLance).setRefinement(5),
    new CharacterWeaponRecommendationClass(WeaponIds.RightfulReward).setRefinement(5),
  ]);
