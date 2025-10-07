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

export default new CharacterRecommendations(CharacterIds.Layla)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.TenacityOfTheMillelith).setIsBetter().setNotes([
        "Лучший комплект, так как бонус к HP повысит прочность щита и урон Лайлы.",
        "Лайла будет повышать атаку остальных членов отряда, что отлично подходит ей как персонажу поддержки.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.NoblesseOblige).setNotes([
        "Увеличивает урон от взрыва стихии Лайлы и увеличивает силу атаки другим членам отряда.",
        "Рекомендуется, если никто другой в отряде не носит данный комплект.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.BlizzardStrayer).setNotes([
        "Рекомендуется, только если хочется получить больше урона от Лайлы.",
        "Рекомендуется иметь в отряде Гидро и других Крио персонажей для поддержания Заморозки.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setUsePercent(0.907),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setUsePercent(0.051),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setUsePercent(0.025),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setUsePercent(0.902),
        new CharacterArtifactStatRecommendation(StatIds.CryoDmgBonus).setUsePercent(0.058),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setUsePercent(0.015),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setUsePercent(0.860),
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setUsePercent(0.080),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setUsePercent(0.035),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setNotes(["Приоритетно", "от 25000"]),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setNotes(["от 120%"]),
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setNotes(["от 50%"]),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setNotes(["от 120%"]),
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setNotes([
          "от 250 (только при игре через реакции)",
        ]),
      ],
    },
  ]))
  .setRequiredLevel("80/80")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart2,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.FavoniusSword).setIsBetter("Лучшее оружие").setRefinement(5),
  ]);
