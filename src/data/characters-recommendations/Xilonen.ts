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
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Xilonen)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.ScrollOfTheHeroOfCinderCity)],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendation(StatIds.DefPercentage),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge),
      ],
      [ArtifactSlotIds.Goblet]: [new CharacterArtifactStatRecommendation(StatIds.DefPercentage)],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.DefPercentage),
        new CharacterArtifactStatRecommendation(StatIds.CritRate),
        new CharacterArtifactStatRecommendation(StatIds.Heal),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.DefPercentage),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setDescription("~160% ВЭ для стабильной ульты"),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("Сигна > С1, но С2 > Сигна")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(8)"]),
  ])
  .setVideoSourceIds([VideoSourceIds.TheBestWeaponsForEveryCharacter])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.FavoniusSword).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.PeakPatrolSong).setIsBetter("Лучшее сигнатурное оружие").setRefinement(1),
  ]);
