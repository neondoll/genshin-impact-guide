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

export default new CharacterRecommendations(CharacterIds.Xingqiu)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.EmblemOfSeveredFate).setIsBetter().setNotes([
        "Лучший комплект для Син Цю, так как повысит очень важное восстановление энергии и увеличит урон от взрыва стихии, который является основным талантом Син Цю.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.NoblesseOblige).setNotes([
        "Увеличивает как урон Син Цю от взрыва стихии, так и силу атаки всего отряда.",
        "Рекомендуется, только если никто другой в команде не носит данный комплект артефактов.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setUsePercent(0.525),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setUsePercent(0.410),
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setUsePercent(0.030),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendation(StatIds.HydroDmgBonus).setUsePercent(0.844),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setUsePercent(0.108),
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setUsePercent(0.025),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setUsePercent(0.650),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setUsePercent(0.258),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setUsePercent(0.055),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setNotes(["Приоритетно", "от 60%"]),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setNotes(["Приоритетно", "от 120%"]),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setNotes(["от 1400"]),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setNotes(["от 220%"]),
      ],
    },
  ]))
  .setRequiredLevel("80/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.SacrificialSword).setIsBetter("Лучшее оружие").setRefinement(5),
  ]);
