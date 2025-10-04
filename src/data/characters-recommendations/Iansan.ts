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
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Iansan)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.ScrollOfTheHeroOfCinderCity).setIsBetter().setNotes([
        "Лучший набор для Иансан, так как восстановит ей энергию и увеличит элементальный урон основного персонажа.",
        "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.NoblesseOblige).setNotes([
        "Увеличит урон взрыва стихии Иансан и силу атаки отряду.",
        "Рекомендуется использовать, если другие члены отряда не носят данный комплект.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge),
      ],
      [ArtifactSlotIds.Goblet]: [new CharacterArtifactStatRecommendation(StatIds.AtkPercentage)],
      [ArtifactSlotIds.Circlet]: [new CharacterArtifactStatRecommendation(StatIds.AtkPercentage)],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setNotes(["Приоритетно", "от 160%"]),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setNotes([
          "от 2000",
          "2556 для 10 Ур. Взрыва стихии",
          "3000 для 13 Ур. Взрыва стихии",
        ]),
        new CharacterArtifactStatRecommendation(StatIds.CritRate),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG),
      ],
    },
  ]))
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1 - 6)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Не качаем\n(1 - 6)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.SkywardSpine),
    new CharacterWeaponRecommendation(WeaponIds.TamayurateiNoOhanashi),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusLance),
  ]);
