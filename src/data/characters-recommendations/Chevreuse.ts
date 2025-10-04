import { artifactSetById } from "./_help.ts";
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
import { CharacterRecommendationsVideoSources } from "@/enums/character-recommendations";
import { StatIds } from "@/enums/stat";
import { TalentIds } from "@/enums/talent";
import { WeaponIds } from "@/enums/weapon";
import weapons from "../weapons";

export default new CharacterRecommendations(CharacterIds.Chevreuse)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.NoblesseOblige),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.SongOfDaysPast).setDescription("Не рекомендуется, слишком нестабильна и требует овер хил"),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.ScrollOfTheHeroOfCinderCity).setDescription(`Если ${artifactSetById(ArtifactSetIds.NoblesseOblige)} занята`),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.EmblemOfSeveredFate).setDescription(`Если ${artifactSetById(ArtifactSetIds.NoblesseOblige)} и ${artifactSetById(ArtifactSetIds.ScrollOfTheHeroOfCinderCity)} заняты`),
    ],
    {
      [ArtifactSlotIds.Sands]: [new CharacterArtifactStatRecommendation(StatIds.HpPercentage)],
      [ArtifactSlotIds.Goblet]: [new CharacterArtifactStatRecommendation(StatIds.HpPercentage)],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage),
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setDescription(`Если в руках ${weapons[WeaponIds.FavoniusLance].title}`),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge),
      ],
    },
  ]))
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(8)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.StaffOfHoma).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.DialoguesOfTheDesertSages).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusLance).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.RightfulReward).setRefinement(5),
  ]);
