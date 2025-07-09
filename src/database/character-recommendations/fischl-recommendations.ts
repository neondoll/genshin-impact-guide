import { ArtifactPieceUidEnum } from "../enums/artifact-pieces";
import { ArtifactSetUidEnum } from "../enums/artifact-sets";
import { AttributeUidEnum } from "../enums/attributes";
import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import { WeaponUidEnum } from "../enums/weapons";
import type { CharacterRecommendation } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.GoldenTroupe }],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.AttackPercent, percent: 0.785 },
        { uid: AttributeUidEnum.ElementalMastery, percent: 0.125 },
        { uid: AttributeUidEnum.EnergyRecharge, percent: 0.062 },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.ElectroDamageBonus, percent: 0.830 },
        { uid: AttributeUidEnum.AttackPercent, percent: 0.119 },
        { uid: AttributeUidEnum.ElementalMastery, percent: 0.018 },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalRate, percent: 0.669 },
        { uid: AttributeUidEnum.CriticalDamage, percent: 0.266 },
        { uid: AttributeUidEnum.AttackPercent, percent: 0.034 },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalRate, description: "Приоритетно" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Приоритетно" },
        { uid: AttributeUidEnum.AttackPercent },
      ],
    },
  },
  character_uid: CharacterUidEnum.Fischl,
  required_level: 90,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "В первую очередь\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Во вторую очередь\n(6)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [{ uid: WeaponUidEnum.TheStringless }],
} as CharacterRecommendation;
