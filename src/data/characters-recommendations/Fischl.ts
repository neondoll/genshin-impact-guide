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

export default new CharacterRecommendations(CharacterIds.Fischl)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.GoldenTroupe)],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setUsePercent(0.785),
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setUsePercent(0.125),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setUsePercent(0.062),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendation(StatIds.ElectroDmgBonus).setUsePercent(0.830),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setUsePercent(0.119),
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setUsePercent(0.018),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setUsePercent(0.669),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setUsePercent(0.266),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setUsePercent(0.034),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setDescription("Приоритетно"),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setDescription("Приоритетно"),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage),
      ],
    },
  ]))
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6)"]),
  ])
  .setVideoSourceIds([VideoSourceIds.AllAboutAllTalents, VideoSourceIds.TheBestWeaponsForEveryCharacter])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.AquaSimulacra).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.ElegyForTheEnd).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.TheStringless),
  ]);
