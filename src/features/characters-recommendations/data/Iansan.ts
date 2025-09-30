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
import { StatIds } from "../../stats/enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Iansan)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.ScrollOfTheHeroOfCinderCity).setIsBetter().setNotes([
        "Лучший набор для Иансан, так как восстановит ей энергию и увеличит элементальный урон основного персонажа.",
        "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.NoblesseOblige).setNotes([
        "Увеличит урон взрыва стихии Иансан и силу атаки отряду.",
        "Рекомендуется использовать, если другие члены отряда не носят данный комплект.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage),
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge),
      ],
      [ArtifactSlotIds.Goblet]: [new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage)],
      [ArtifactSlotIds.Circlet]: [new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage)],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setNotes(["Приоритетно", "от 160%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setNotes([
          "от 2000",
          "2556 для 10 Ур. Взрыва стихии",
          "3000 для 13 Ур. Взрыва стихии",
        ]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
      ],
    },
  ]))
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Не качаем\n(1 - 6)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "Не качаем\n(1 - 6)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.SkywardSpine),
    new CharacterWeaponRecommendationClass(WeaponIds.TamayurateiNoOhanashi),
    new CharacterWeaponRecommendationClass(WeaponIds.FavoniusLance),
  ]);
