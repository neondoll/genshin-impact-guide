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

export default new CharacterRecommendations(CharacterIds.Xiangling)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.EmblemOfSeveredFate)],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setUsePercent(0.748),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setUsePercent(0.171),
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setUsePercent(0.055),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendation(StatIds.PyroDmgBonus).setUsePercent(0.841),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setUsePercent(0.118),
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setUsePercent(0.013),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setUsePercent(0.642),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setUsePercent(0.291),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setUsePercent(0.042),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setDescription("Приоритетно"),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setDescription("Приоритетно"),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge),
      ],
    },
  ]))
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSourceIds([VideoSourceIds.AllAboutAllTalents, VideoSourceIds.BestWeaponsForEveryCharacter])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.EngulfingLightning).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.StaffOfHoma).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.StaffOfTheScarletSands).setRefinement(1),
  ]);
