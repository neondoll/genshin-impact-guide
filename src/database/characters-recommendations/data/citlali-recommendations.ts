import type { ICharacterRecommendations } from "../types";
import { ArtifactSetIds } from "@/features/artifact-sets/enums";
import { ArtifactSlotKeys } from "../../artifact-slots/enums";
import { CharacterKeys } from "../../characters/enums";
import { StatKeys } from "../../stats/enums";
import { TalentKeys } from "../../talents/enums";
import { WeaponKeys } from "../../weapons/enums";
import artifactSets from "@/features/artifact-sets/data";
import characters from "../../characters/data";
import weapons from "../../weapons/data";

export default {
  artifacts: {
    sets: [
      {
        key: ArtifactSetIds.ScrollOfTheHeroOfCinderCity,
        is_better: true,
        notes: [
          "Лучший набор для Ситлали, так как восстановит ей энергию и увеличит элементальный урон основного персонажа.",
          "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
        ],
      },
      {
        key: ArtifactSetIds.TenacityOfTheMillelith,
        notes: [
          "Бонус 2 предметов не важен Ситлали, но бонус 4 предметов увеличит прочность щита и атаку других персонажей в отряде.",
        ],
      },
      {
        key: ArtifactSetIds.NoblesseOblige,
        notes: [
          "Увеличивает урон от взрыва стихии Ситлали и увеличивает силу атаки другим членам отряда.",
          "Рекомендуется, если никто другой в отряде не носит данный комплект.",
        ],
      },
      {
        key: ArtifactSetIds.Instructor,
        notes: [
          "Хоть данный комплект не бывает 5★, он повышает мастерство стихий как самой Ситлали, так и всем членам отряда.",
        ],
      },
      {
        key: ArtifactSetIds.ArchaicPetra,
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
    ["Набор артефактов", artifactSets[ArtifactSetIds.ScrollOfTheHeroOfCinderCity].name],
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
} as ICharacterRecommendations;
