import { ArtifactPieceUidEnum } from "../enums/artifact-pieces";
import { ArtifactSetUidEnum } from "../enums/artifact-sets";
import { AttributeUidEnum } from "../enums/attributes";
import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import { WeaponUidEnum } from "../enums/weapons";
import type { CharacterRecommendation } from "../types/character-recommendations";

export default {
  character_uid: CharacterUidEnum.Xiangling,
  artifact_recommendations: {
    sets: [{ uid: ArtifactSetUidEnum.EmblemOfSeveredFate }],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.EnergyRecharge, percent: 0.748 },
        { uid: AttributeUidEnum.AttackPercent, percent: 0.171 },
        { uid: AttributeUidEnum.ElementalMastery, percent: 0.055 },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.PyroDamageBonus, percent: 0.841 },
        { uid: AttributeUidEnum.AttackPercent, percent: 0.118 },
        { uid: AttributeUidEnum.HealthPercent, percent: 0.013 },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CriticalRate, percent: 0.642 },
        { uid: AttributeUidEnum.CriticalDamage, percent: 0.291 },
        { uid: AttributeUidEnum.AttackPercent, percent: 0.042 },
      ],
      additional: [
        { uid: AttributeUidEnum.CriticalRate, description: "Приоритетно" },
        { uid: AttributeUidEnum.CriticalDamage, description: "Приоритетно" },
        { uid: AttributeUidEnum.EnergyRecharge },
      ],
    },
  },
  assembly_weapons: [{ uid: WeaponUidEnum.EngulfingLightning }],
  required_level: 90,
  talent_leveling_recommendations: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Золотая середина\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Главный приоритет\n(10)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
} as CharacterRecommendation;
