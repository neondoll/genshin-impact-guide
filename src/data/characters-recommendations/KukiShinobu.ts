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
import { elementalReactionById } from "@/features/elemental-reactions/help";
import { ElementalReactionIds } from "@/enums/elemental-reaction";
import { StatIds } from "@/enums/stat";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.KukiShinobu)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.TenacityOfTheMillelith).setNotes([
        "Набор увеличивает лечение Синобу благодаря бонусу HP и увеличивает силу атаки и прочность щита всего отряда, так как элементальный навык Синобу срабатывает каждые 1.5 секунды.",
        "Набор хорошо показывает себя в любом отряде",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.MaidenBeloved).setNotes([
        "Набор хорошо работает, если Синобу используется исключительно для лечения команды.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.FlowerOfParadiseLost).setNotes([
        "Набор хорошо работает только в команде с Дендро и Гидро персонажами. Бонус мастерства стихий увеличивает лечение Синобу и урон от реакций.",
        `Так как элементальный навык Синобу срабатывает каждый 1.5 секунды, он активирует реакцию ${elementalReactionById(ElementalReactionIds.Hyperbloom)} и увеличивает урон реакции.`,
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.GildedDreams).setNotes([
        "Бонус мастерства стихий увеличивает лечение Синобу и урон от реакций.",
        "Отлично подходит для отрядов, которые вызывают реакции с Дендро.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setUsePercent(0.894),
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setUsePercent(0.073),
        new CharacterArtifactStatRecommendation(StatIds.AtkPercentage).setUsePercent(0.016),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setUsePercent(0.810),
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setUsePercent(0.114),
        new CharacterArtifactStatRecommendation(StatIds.ElectroDmgBonus).setUsePercent(0.044),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setUsePercent(0.807),
        new CharacterArtifactStatRecommendation(StatIds.Heal).setUsePercent(0.071),
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setUsePercent(0.056),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setNotes(["Приоритетно", "от 700"]),
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setNotes(["от 30000"]),
      ],
    },
  ]))
  .setKeyConstellations([2])
  .setRequiredLevel("90/90")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Не качаем\n(1)"]),
  ])
  .setVideoSourceIds([
    VideoSourceIds.AllAboutAllTalents,
    VideoSourceIds.TheBestWeaponsForEveryCharacter,
    VideoSourceIds.WhoNeedsLevelingPart2,
  ])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.FreedomSworn).setIsBetter().setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.XiphosMoonlight),
  ]);
