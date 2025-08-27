import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import { CVideoSource } from "@/database/video-sources/classes";
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
import { TalentKeys } from "@/database/talents/enums";
import { WeaponKeys } from "@/database/weapons/enums";
import artifactSets from "../../artifact-sets/data";
import characters from "../../characters/data";
import weapons from "@/database/weapons/data";

export default new CharacterRecommendationsClass(CharacterIds.Citlali)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.ScrollOfTheHeroOfCinderCity).setIsBetter().setNotes([
        "Лучший набор для Ситлали, так как восстановит ей энергию и увеличит элементальный урон основного персонажа.",
        "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.TenacityOfTheMillelith).setNotes([
        "Бонус 2 предметов не важен Ситлали, но бонус 4 предметов увеличит прочность щита и атаку других персонажей в отряде.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.NoblesseOblige).setNotes([
        "Увеличивает урон от взрыва стихии Ситлали и увеличивает силу атаки другим членам отряда.",
        "Рекомендуется, если никто другой в отряде не носит данный комплект.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.Instructor).setNotes([
        "Хоть данный комплект не бывает 5★, он повышает мастерство стихий как самой Ситлали, так и всем членам отряда.",
      ]),
      new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.ArchaicPetra).setNotes([
        `Если в отряде есть ${characters[CharacterIds.Xilonen].name}`,
        "Носитель должен подбирать осколок",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setNotes(["в 99% случаев"]),
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery),
      ],
      [ArtifactSlotIds.Goblet]: [new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery)],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setNotes(["всегда"]),
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate).setNotes([
          `можно рассмотреть, если в руках ${weapons[WeaponKeys.FavoniusCodex].name}`,
        ]),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setNotes(["приоритетно", "от 170%"]),
        new CharacterArtifactStatRecommendationClass(StatIds.ElementalMastery).setNotes(["от 800"]),
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
    ["Оружие", weapons[WeaponKeys.ThrillingTalesOfDragonSlayers].name],
    ["Набор артефактов", artifactSets[ArtifactSetIds.ScrollOfTheHeroOfCinderCity].name],
  ])
  .setRequiredLevel(80)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalSkill, "В первую очередь\n(6-8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentKeys.ElementalBurst, "Во вторую очередь\n(6-8)"]),
  ])
  .setVideoSources([
    new CVideoSource("Miron MinMax: Подробный и Актуальный | Гайд на Ситлали в 5.8").setYoutubeUrl("https://youtu.be/GzR7Yx8UDSM?si=vX0FObdIigNnTZkg"),
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponKeys.StarcallersWatch).setIsBetter(),
    new CharacterWeaponRecommendationClass(WeaponKeys.FavoniusCodex),
    new CharacterWeaponRecommendationClass(WeaponKeys.ThrillingTalesOfDragonSlayers),
    new CharacterWeaponRecommendationClass(WeaponKeys.SacrificialFragments),
    new CharacterWeaponRecommendationClass(WeaponKeys.PrototypeAmber),
    new CharacterWeaponRecommendationClass(WeaponKeys.WanderingEvenstar),
  ]);
