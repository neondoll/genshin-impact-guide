import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import { TalentUidEnum } from "../enums/talent";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.EmblemOfSeveredFate }],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.EnergyRecharge, percent: 0.748 },
        { uid: AttributeUidEnum.ATKPercentage, percent: 0.171 },
        { uid: AttributeUidEnum.ElementalMastery, percent: 0.055 },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [
        { uid: AttributeUidEnum.PyroDMGBonus, percent: 0.841 },
        { uid: AttributeUidEnum.ATKPercentage, percent: 0.118 },
        { uid: AttributeUidEnum.HPPercentage, percent: 0.013 },
      ],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.CRITRate, percent: 0.642 },
        { uid: AttributeUidEnum.CRITDMG, percent: 0.291 },
        { uid: AttributeUidEnum.ATKPercentage, percent: 0.042 },
      ],
      additional: [
        { uid: AttributeUidEnum.CRITRate, description: "Приоритетно" },
        { uid: AttributeUidEnum.CRITDMG, description: "Приоритетно" },
        { uid: AttributeUidEnum.EnergyRecharge },
      ],
    },
  },
  character_uid: CharacterUidEnum.Xiangling,
  required_level: 90,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Во вторую очередь\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "В первую очередь\n(10)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { uid: WeaponUidEnum.EngulfingLightning, refinement: 1, is_better: true },
    { uid: WeaponUidEnum.StaffOfHoma, refinement: 1 },
    { uid: WeaponUidEnum.StaffOfTheScarletSands, refinement: 1 },
  ],
} as CharacterRecommendations;
