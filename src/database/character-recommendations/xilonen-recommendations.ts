import { ArtifactPieceUidEnum } from "../enums/artifact-pieces";
import { ArtifactSetUidEnum } from "../enums/artifact-sets";
import { AttributeUidEnum } from "../enums/attributes";
import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import { WeaponUidEnum } from "../enums/weapons";
import type { CharacterRecommendation } from "../types/character-recommendations";

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
        { uid: AttributeUidEnum.CriticalRate },
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
    { uid: TalentUidEnum.NormalAttack, priority: "Игнорируем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Главный приоритет\n(10)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Ситуативно\n(8)" },
  ],
  weapons: [{ uid: WeaponUidEnum.PeakPatrolSong }, { uid: WeaponUidEnum.FavoniusSword }],
} as CharacterRecommendation;
