import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import { TalentUidEnum } from "../enums/talent";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

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
        { uid: AttributeUidEnum.CritRate, percent: 0.669 },
        { uid: AttributeUidEnum.CritDmg, percent: 0.266 },
        { uid: AttributeUidEnum.AttackPercent, percent: 0.034 },
      ],
      additional: [
        { uid: AttributeUidEnum.CritRate, description: "Приоритетно" },
        { uid: AttributeUidEnum.CritDmg, description: "Приоритетно" },
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
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { uid: WeaponUidEnum.AquaSimulacra, refinement: 1, is_better: true },
    { uid: WeaponUidEnum.ElegyForTheEnd, refinement: 1, is_better: true },
    { uid: WeaponUidEnum.TheStringless },
  ],
} as CharacterRecommendations;
