import { type TalentUid, TalentUidEnum } from "./talents";
import { type WeaponUid, WeaponUidEnum } from "./weapons";
import type { CharacterUid } from "./characters";

type GuideCharacter = {
  talents?: Record<TalentUid, string>;
  weapons?: Record<string, { uid: WeaponUid; refinement?: 1 | 5; percent?: number }[]>;
};
type GuideCharacters = Record<CharacterUid, GuideCharacter>;

const guideArlecchino = {
  talents: {
    [TalentUidEnum.NormalAttack]: "Высокий приоритет (10)",
    [TalentUidEnum.ElementalSkill]: "Ситуативно (6 / 8)",
    [TalentUidEnum.ElementalBurst]: "Ситуативно (6 / 8)",
  },
  weapons: {
    "Гиперкери | Прожарка | отр. Шеврёз": [
      { uid: WeaponUidEnum.CrimsonMoonsSemblance, percent: 1.316 },
      { uid: WeaponUidEnum.PrimordialJadeWingedSpear, percent: 1.124 },
      { uid: WeaponUidEnum.StaffOfTheScarletSands, percent: 1.112 },
      { uid: WeaponUidEnum.LumidouceElegy, percent: 1.103 },
      { uid: WeaponUidEnum.Deathmatch, refinement: 5, percent: 1.087 },
      { uid: WeaponUidEnum.StaffOfHoma, percent: 1.085 },
      { uid: WeaponUidEnum.CalamityQueller, percent: 1.063 },
      { uid: WeaponUidEnum.Deathmatch, refinement: 1, percent: 1.032 },
      { uid: WeaponUidEnum.WhiteTassel, percent: 1 },
      { uid: WeaponUidEnum.BalladOfTheFjords, percent: 0.968 },
      { uid: WeaponUidEnum.SkywardSpine, percent: 0.948 },
      { uid: WeaponUidEnum.BlackcliffPole, percent: 0.899 },
      { uid: WeaponUidEnum.MissiveWindspear, percent: 0.875 },
    ],
    "Пар | Таяние": [
      { uid: WeaponUidEnum.CrimsonMoonsSemblance, percent: 1.309 },
      { uid: WeaponUidEnum.StaffOfTheScarletSands, percent: 1.156 },
    ],
  },
} as GuideCharacter;

const guideCharacters = {
  arlecchino: guideArlecchino,
  skirk: {
    talents: {
      [TalentUidEnum.NormalAttack]: "Игнорируем (1)",
      [TalentUidEnum.ElementalSkill]: "Максимальный приоритет (10)",
      [TalentUidEnum.ElementalBurst]: "Максимальный приоритет (10)",
    },
  },
} as GuideCharacters;

export async function getGuideCharacter(characterUid: CharacterUid) {
  console.log("getGuideCharacter", characterUid);

  return characterUid in guideCharacters ? guideCharacters[characterUid] : undefined;
}
