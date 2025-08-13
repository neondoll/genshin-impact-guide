import artifactSets from "../artifact-sets";
import characters from "../characters";
import weapons from "../weapons";
import { ArtifactSetKeys } from "../enums/artifact-set";
import { ArtifactSlotKeys } from "../enums/artifact-slot";
import { CharacterKeys } from "../enums/character";
import { StatKeys } from "../enums/stat";
import { TalentKeys } from "../enums/talent";
import { WeaponKeys } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [
      {
        key: ArtifactSetKeys.ScrollOfTheHeroOfCinderCity,
        is_better: true,
        notes: [
          "Лучший набор для Ситлали, так как восстановит ей энергию и увеличит элементальный урон основного персонажа.",
          "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
        ],
      },
      {
        key: ArtifactSetKeys.TenacityOfTheMillelith,
        notes: [
          "Бонус 2 предметов не важен Ситлали, но бонус 4 предметов увеличит прочность щита и атаку других персонажей в отряде.",
        ],
      },
      {
        key: ArtifactSetKeys.NoblesseOblige,
        notes: [
          "Увеличивает урон от взрыва стихии Ситлали и увеличивает силу атаки другим членам отряда.",
          "Рекомендуется, если никто другой в отряде не носит данный комплект.",
        ],
      },
      {
        key: ArtifactSetKeys.Instructor,
        notes: [
          "Хоть данный комплект не бывает 5★, он повышает мастерство стихий как самой Ситлали, так и всем членам отряда.",
        ],
      },
      {
        key: ArtifactSetKeys.ArchaicPetra,
        notes: [`Если в отряде есть ${characters[CharacterKeys.Xilonen].name}`, "Носитель должен подбирать осколок"],
      },
    ],
    stats: {
      [ArtifactSlotKeys.Sands]: [
        { key: StatKeys.EnergyRecharge, notes: ["в 99% случаев"] },
        { key: StatKeys.ElementalMastery },
      ],
      [ArtifactSlotKeys.Goblet]: [{ key: StatKeys.ElementalMastery }],
      [ArtifactSlotKeys.Circlet]: [
        { key: StatKeys.ElementalMastery, notes: ["всегда"] },
        {
          key: StatKeys.CritRate,
          notes: [`можно рассмотреть, если в руках ${weapons[WeaponKeys.FavoniusCodex].name}`],
        },
      ],
      additional: [
        { key: StatKeys.EnergyRecharge, notes: ["приоритетно", "от 170%"] },
        { key: StatKeys.ElementalMastery, notes: ["от 800"] },
      ],
    },
  },
  character_key: CharacterKeys.Citlali,
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
    ["Оружие", weapons[WeaponKeys.ThrillingTalesOfDragonSlayers].name],
    ["Набор артефактов", artifactSets[ArtifactSetKeys.ScrollOfTheHeroOfCinderCity].name],
  ],
  required_level: 80,
  talent_leveling: [
    { key: TalentKeys.NormalAttack, priority: "Не качаем\n(1)" },
    { key: TalentKeys.ElementalSkill, priority: "В первую очередь\n(6-8)" },
    { key: TalentKeys.ElementalBurst, priority: "Во вторую очередь\n(6-8)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: Подробный и Актуальный | Гайд на Ситлали в 5.8",
      youtube_url: "https://youtu.be/GzR7Yx8UDSM?si=vX0FObdIigNnTZkg",
    },
  ],
  weapons: [
    { key: WeaponKeys.StarcallersWatch, is_better: true },
    { key: WeaponKeys.FavoniusCodex },
    { key: WeaponKeys.ThrillingTalesOfDragonSlayers },
    { key: WeaponKeys.SacrificialFragments },
    { key: WeaponKeys.PrototypeAmber },
    { key: WeaponKeys.WanderingEvenstar },
  ],
} as CharacterRecommendations;
