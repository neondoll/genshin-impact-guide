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
import { elementalReactionById } from "../../elemental-reactions/help";
import { ElementalReactionIds } from "../../elemental-reactions/enums";
import { StatIds } from "../../stats/enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.KukiShinobu)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.TenacityOfTheMillelith).setNotes([
        "Набор увеличивает лечение Синобу благодаря бонусу HP и увеличивает силу атаки и прочность щита всего отряда, так как элементальный навык Синобу срабатывает каждые 1.5 секунды.",
        "Набор хорошо показывает себя в любом отряде",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.MaidenBeloved).setNotes([
        "Набор хорошо работает, если Синобу используется исключительно для лечения команды.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.FlowerOfParadiseLost).setNotes([
        "Набор хорошо работает только в команде с Дендро и Гидро персонажами. Бонус мастерства стихий увеличивает лечение Синобу и урон от реакций.",
        `Так как элементальный навык Синобу срабатывает каждый 1.5 секунды, он активирует реакцию ${elementalReactionById(ElementalReactionIds.Hyperbloom)} и увеличивает урон реакции.`,
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.GildedDreams).setNotes([
        "Бонус мастерства стихий увеличивает лечение Синобу и урон от реакций.",
        "Отлично подходит для отрядов, которые вызывают реакции с Дендро.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setUsePercent(0.894),
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setUsePercent(0.073),
        new CharacterArtifactStatRecommendationClass(StatIds.AtkPercentage).setUsePercent(0.016),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setUsePercent(0.810),
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setUsePercent(0.114),
        new CharacterArtifactStatRecommendationClass(StatIds.ElectroDmgBonus).setUsePercent(0.044),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setUsePercent(0.807),
        new CharacterArtifactStatRecommendationClass(StatIds.Heal).setUsePercent(0.071),
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setUsePercent(0.056),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setNotes(["Приоритетно", "от 700"]),
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setNotes(["от 30000"]),
      ],
    },
  ]))
  .setKeyConstellations([2])
  .setRequiredLevel(90)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Не качаем\n(1)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.FreedomSworn).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendationClass(WeaponIds.XiphosMoonlight),
  ]);
