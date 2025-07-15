import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import { TalentUidEnum } from "../enums/talent";
import { WeaponUidEnum } from "../enums/weapon";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [{ uid: ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity }],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [
        { uid: AttributeUidEnum.DefensePercent },
        { uid: AttributeUidEnum.EnergyRecharge },
      ],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [{ uid: AttributeUidEnum.DefensePercent }],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.DefensePercent },
        { uid: AttributeUidEnum.CritRate },
        { uid: AttributeUidEnum.HealingBonus },
      ],
      additional: [
        { uid: AttributeUidEnum.DefensePercent },
        { uid: AttributeUidEnum.EnergyRecharge, description: "~160% ВЭ для стабильной ульты" },
      ],
    },
  },
  character_uid: CharacterUidEnum.Xilonen,
  first_constellation_or_signature_weapon: "Сигна > С1, но С2 > Сигна",
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "В первую очередь\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Во вторую очередь\n(8)" },
  ],
  video_sources: [
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
  ],
  weapons: [
    { uid: WeaponUidEnum.PeakPatrolSong, refinement: 1, is_better: true },
    { uid: WeaponUidEnum.FavoniusSword, refinement: 5 },
  ],
} as CharacterRecommendations;
