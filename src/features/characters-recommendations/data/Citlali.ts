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
import { VideoSourceClass } from "../../video-sources/classes";
import { WeaponIds } from "../../weapons/enums";
import artifactSets from "../../../data/artifact-sets";
import characters from "../../characters/data";
import weapons from "../../weapons/data";

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
          `можно рассмотреть, если в руках ${weapons[WeaponIds.FavoniusCodex].title}`,
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
    ["Оружие", weapons[WeaponIds.ThrillingTalesOfDragonSlayers].title],
    ["Набор артефактов", artifactSets[ArtifactSetIds.ScrollOfTheHeroOfCinderCity].name],
  ])
  .setRequiredLevel(80)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "В первую очередь\n(6-8)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6-8)"]),
  ])
  .setVideoSources([
    new VideoSourceClass("Miron MinMax: Подробный и Актуальный | Гайд на Ситлали в 5.8").setYoutubeUrl("https://youtu.be/GzR7Yx8UDSM?si=vX0FObdIigNnTZkg"),
  ])
  .setWeapons([
    new CharacterWeaponRecommendationClass(WeaponIds.StarcallersWatch).setIsBetter(),
    new CharacterWeaponRecommendationClass(WeaponIds.FavoniusCodex),
    new CharacterWeaponRecommendationClass(WeaponIds.ThrillingTalesOfDragonSlayers),
    new CharacterWeaponRecommendationClass(WeaponIds.SacrificialFragments),
    new CharacterWeaponRecommendationClass(WeaponIds.PrototypeAmber),
    new CharacterWeaponRecommendationClass(WeaponIds.WanderingEvenstar),
  ]);
