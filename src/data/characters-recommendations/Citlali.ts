import { ARTIFACT_SETS } from "@/constants/artifact-sets";
import { ARTIFACT_SLOTS } from "@/constants/artifact-slots";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterIds } from "@/enums/character";
import { STATS } from "@/constants/stats";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";
import artifactSets from "../artifact-sets";
import characters from "../characters";
import weapons from "../weapons";

export default new CharacterRecommendations(CharacterIds.Citlali)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.SCROLL_OF_THE_HERO_OF_CINDER_CITY).setIsBetter().setNotes([
        "Лучший набор для Ситлали, так как восстановит ей энергию и увеличит элементальный урон основного персонажа.",
        "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.TENACITY_OF_THE_MILLELITH).setNotes([
        "Бонус 2 предметов не важен Ситлали, но бонус 4 предметов увеличит прочность щита и атаку других персонажей в отряде.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.NOBLESSE_OBLIGE).setNotes([
        "Увеличивает урон от взрыва стихии Ситлали и увеличивает силу атаки другим членам отряда.",
        "Рекомендуется, если никто другой в отряде не носит данный комплект.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.INSTRUCTOR).setNotes([
        "Хоть данный комплект не бывает 5★, он повышает мастерство стихий как самой Ситлали, так и всем членам отряда.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.ARCHAIC_PETRA).setNotes([
        `Если в отряде есть ${characters[CharacterIds.Xilonen].name}`,
        "Носитель должен подбирать осколок",
      ]),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setNotes(["в 99% случаев"]),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY),
      ],
      [ARTIFACT_SLOTS.GOBLET]: [new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY)],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setNotes(["всегда"]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setNotes([
          `можно рассмотреть, если в руках ${weapons[WeaponIds.FavoniusCodex].title}`,
        ]),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setNotes(["Приоритетно", "от 170%"]),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setNotes(["от 800"]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("C1 < Сигна < C2")
  .setKeyConstellations([2])
  .setReferencePoint([
    ["Макс. HP", "22 169"],
    ["Сила атаки", "1 057"],
    ["Защита", "897"],
    ["Восст. энергии", "195.8%"],
    ["МС", "342"],
    ["Крит. шанс", "59.2%"],
    ["Крит. урон", "122.8%"],
    ["Оружие", weapons[WeaponIds.ThrillingTalesOfDragonSlayers].title],
    ["Набор артефактов", artifactSets[ARTIFACT_SETS.SCROLL_OF_THE_HERO_OF_CINDER_CITY].name],
  ])
  .setRequiredLevel("80/80")
  .setRotation("E > Q > можно сделать 1 удар, чтобы точно наложить Крио статус")
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(6-8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6-8)"]),
  ])
  .setVideoSourceIds([VideoSourceIds.FirstConstellationOrSignatureWeapon, VideoSourceIds.GuideToCitlali])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.StarcallersWatch).setIsBetter("Лучшее оружие").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusCodex).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.ThrillingTalesOfDragonSlayers).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialFragments).setIsBetter("Лучшее доступное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.PrototypeAmber).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.WanderingEvenstar).setRefinement(5),
  ]);
