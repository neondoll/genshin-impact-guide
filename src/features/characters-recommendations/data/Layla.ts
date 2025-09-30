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
import { StatIds } from "../../stats/enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.KukiShinobu)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.TenacityOfTheMillelith).setIsBetter().setNotes([
        "Лучший комплект, так как бонус к HP повысит прочность щита и урон Лайлы.",
        "Лайла будет повышать атаку остальных членов отряда, что отлично подходит ей как персонажу поддержки.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.NoblesseOblige).setNotes([
        "Увеличивает урон от взрыва стихии Лайлы и увеличивает силу атаки другим членам отряда.",
        "Рекомендуется, если никто другой в отряде не носит данный комплект.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.BlizzardStrayer).setNotes([
        "Рекомендуется, только если хочется получить больше урона от Лайлы.",
        "Рекомендуется иметь в отряде Гидро и других Крио персонажей для поддержания Заморозки.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setUsePercent(0.907),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setUsePercent(0.051),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setUsePercent(0.025),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setUsePercent(0.902),
        new CharacterArtifactStatRecommendationClass(StatIds.CryoDmgBonus).setUsePercent(0.058),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setUsePercent(0.015),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setUsePercent(0.860),
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setUsePercent(0.080),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setUsePercent(0.035),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setNotes(["Приоритетно", "от 25000"]),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setNotes(["от 120%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setNotes(["от 50%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setNotes(["от 120%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setNotes([
          "от 250 (только при игре через реакции)",
        ]),
      ],
    },
  ]))
  .setRequiredLevel(80)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([new CharacterWeaponRecommendationClass(WeaponIds.FavoniusSword).setIsBetter().setRefinement(5)]);
