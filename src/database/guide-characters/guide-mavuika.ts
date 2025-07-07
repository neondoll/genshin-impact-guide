import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import type { GuideCharacter } from "../types/guide-characters";

// type GameVariantUid = typeof GameVariantEnum[keyof typeof GameVariantEnum];

// const GameVariantEnum = {
//   DamagerOnField: "damager_on_field",
//   DamagerOrBufferFromPocket: "damager_or_buffer_from_pocket",
// } as const;

// const gameVariants: Record<GameVariantUid, string> = {
//   [GameVariantEnum.DamagerOnField]: "Дамагер на поле",
//   [GameVariantEnum.DamagerOrBufferFromPocket]: "Дамагер/Баффер из кармана",
// };

export default {
  character_uid: CharacterUidEnum.Mavuika,
  talent_leveling_recommendations: [
    { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Максимальный приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Максимальный приоритет\n(10)" },
  ],
} as GuideCharacter;
