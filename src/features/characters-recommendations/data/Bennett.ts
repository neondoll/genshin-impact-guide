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

export default new CharacterRecommendationsClass(CharacterIds.Bennett)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.NoblesseOblige).setIsBetter().setNotes([
        "Лучший комплект для Беннета в роли поддержки. Увеличивает собственный урон от взрыва стихий и даёт дополнительный бонус к атаке. Используется, когда никто другой не носит данный комплект артефактов.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.EmblemOfSeveredFate).setNotes([
        "Комплект не даёт никаких бонусов другим членам отряда, но увеличивает восстановление энергии Беннета и урон от его взрыва стихий. Комплект используется, если хочется, чтобы Беннет наносил дополнительный урон.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setUsePercent(0.703),
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setUsePercent(0.187),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setUsePercent(0.089),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setUsePercent(0.749),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setUsePercent(0.109),
        new CharacterArtifactStatRecommendationClass(StatIds.PyroDmgBonus).setUsePercent(0.105),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.Heal).setUsePercent(0.543),
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setUsePercent(0.224),
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setUsePercent(0.111),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setNotes(["Приоритетно", "от 25000"]),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setNotes(["Приоритетно", "от 220%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setNotes([
          "от 50% (при использовании меча Фавония или если Беннет будет наносить дополнительный урон)",
        ]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG).setNotes([
          "от 120% (если Беннет будет наносить дополнительный урон)",
        ]),
      ],
    },
  ]))
  .setKeyConstellations([6])
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponKeys.MistsplitterReforged).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.AquilaFavonia).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.SkywardBlade).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponKeys.SapwoodBlade),
  ]);
