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

export default new CharacterRecommendations(CharacterIds.Bennett)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.NoblesseOblige).setIsBetter().setNotes([
        "Лучший комплект для Беннета в роли поддержки. Увеличивает собственный урон от взрыва стихий и даёт дополнительный бонус к атаке. Используется, когда никто другой не носит данный комплект артефактов.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.EmblemOfSeveredFate).setNotes([
        "Комплект не даёт никаких бонусов другим членам отряда, но увеличивает восстановление энергии Беннета и урон от его взрыва стихий. Комплект используется, если хочется, чтобы Беннет наносил дополнительный урон.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setUsePercent(0.703),
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setUsePercent(0.187),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setUsePercent(0.089),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setUsePercent(0.749),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setUsePercent(0.109),
        new CharacterArtifactStatRecommendation(StatIds.PyroDmgBonus).setUsePercent(0.105),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.Heal).setUsePercent(0.543),
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setUsePercent(0.224),
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setUsePercent(0.111),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setNotes(["Приоритетно", "от 25000"]),
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setNotes(["Приоритетно", "от 220%"]),
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setNotes([
          "от 50% (при использовании меча Фавония или если Беннет будет наносить дополнительный урон)",
        ]),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG).setNotes([
          "от 120% (если Беннет будет наносить дополнительный урон)",
        ]),
      ],
    },
  ]))
  .setKeyConstellations([6])
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь\n(10)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestAvailableWeaponsForEveryCharacter,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart1,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.AquilaFavonia).setIsBetter("Лучшее сигнатурное оружие").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.MistsplitterReforged).setIsBetter("Лучшее сигнатурное оружие").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.SkywardBlade).setIsBetter("Лучшее сигнатурное оружие").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.SapwoodBlade).setIsBetter("Лучшее доступное оружие (низкая зависимость от сигнатурного оружия)").setRefinement(5),
  ]);
