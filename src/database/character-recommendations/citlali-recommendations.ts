import artifactSets from "../artifact-sets";
import characters from "../characters";
import weapons from "../weapons";
import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import { TalentUidEnum } from "../enums/talent";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [
      {
        uid: ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity,
        is_better: true,
        notes: [
          "Лучший набор для Ситлали, так как восстановит ей энергию и увеличит элементальный урон основного персонажа.",
          "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
        ],
      },
      {
        uid: ArtifactSetUidEnum.TenacityOfTheMillelith,
        notes: [
          "Бонус 2 предметов не важен Ситлали, но бонус 4 предметов увеличит прочность щита и атаку других персонажей в отряде.",
        ],
      },
      {
        uid: ArtifactSetUidEnum.NoblesseOblige,
        notes: [
          "Увеличивает урон от взрыва стихии Ситлали и увеличивает силу атаки другим членам отряда.",
          "Рекомендуется, если никто другой в отряде не носит данный комплект.",
        ],
      },
      {
        uid: ArtifactSetUidEnum.Instructor,
        notes: [
          "Хоть данный комплект не бывает 5★, он повышает мастерство стихий как самой Ситлали, так и всем членам отряда.",
        ],
      },
      {
        uid: ArtifactSetUidEnum.ArchaicPetra,
        notes: [`Если в отряде есть ${characters[CharacterUidEnum.Xilonen].name}`, "Носитель должен подбирать осколок"],
      },
    ],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.EnergyRecharge, notes: ["в 99% случаев"] },
        { uid: AttributeUidEnum.ElementalMastery },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [{ uid: AttributeUidEnum.ElementalMastery }],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.ElementalMastery, notes: ["всегда"] },
        { uid: AttributeUidEnum.CritRate, notes: [`можно рассмотреть, если в руках ${weapons[WeaponUidEnum.FavoniusCodex].name}`] },
      ],
      additional: [
        { uid: AttributeUidEnum.EnergyRecharge, notes: ["приоритетно", "от 170%"] },
        { uid: AttributeUidEnum.ElementalMastery, notes: ["от 800"] },
      ],
    },
  },
  character_uid: CharacterUidEnum.Citlali,
  first_constellation_or_signature_weapon: "C1 < Сигна < C2",
  key_constellations: [2],
  reference_point: [
    ["Макс. HP", "22 169"],
    ["Сила атаки", "1 057"],
    ["Защита", "897"],
    ["Восст. энергии", "195.8%"],
    ["МС", "342"],
    ["Крит. шанс", "59.2%"],
    ["Крит. урон", "122.8%"],
    ["Оружие", weapons[WeaponUidEnum.ThrillingTalesOfDragonSlayers].name],
    ["Набор артефактов", artifactSets[ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity].name],
  ],
  required_level: 80,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "В первую очередь\n(6-8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Во вторую очередь\n(6-8)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: Подробный и Актуальный | Гайд на Ситлали в 5.8",
      youtube_url: "https://youtu.be/GzR7Yx8UDSM?si=vX0FObdIigNnTZkg",
    },
  ],
  weapons: [
    { uid: WeaponUidEnum.StarcallersWatch, is_better: true },
    { uid: WeaponUidEnum.FavoniusCodex },
    { uid: WeaponUidEnum.ThrillingTalesOfDragonSlayers },
    { uid: WeaponUidEnum.SacrificialFragments },
    { uid: WeaponUidEnum.PrototypeAmber },
    { uid: WeaponUidEnum.WanderingEvenstar },
  ],
} as CharacterRecommendations;
