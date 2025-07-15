import artifactSets from "../artifact-sets";
import weapons from "../weapons";
import { ArtifactPieceUidEnum } from "../enums/artifact-piece.ts";
import { ArtifactSetUidEnum } from "../enums/artifact-set.ts";
import { AttributeUidEnum } from "../enums/attribute.ts";
import { CharacterUidEnum } from "../enums/character.ts";
import { TalentUidEnum } from "../enums/talent.ts";
import { WeaponUidEnum } from "../enums/weapon.ts";
import type { CharacterRecommendations } from "../types/character-recommendations";

export default {
  artifacts: {
    sets: [
      { uid: ArtifactSetUidEnum.NoblesseOblige },
      {
        uid: ArtifactSetUidEnum.SongOfDaysPast,
        description: "Не рекомендуется, слишком нестабильна и требует овер хил",
      },
      {
        uid: ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity,
        description: `Если ${artifactSets[ArtifactSetUidEnum.NoblesseOblige].name} занята`,
      },
      {
        uid: ArtifactSetUidEnum.EmblemOfSeveredFate,
        description: `Если ${artifactSets[ArtifactSetUidEnum.NoblesseOblige].name} и ${artifactSets[ArtifactSetUidEnum.ScrollOfTheHeroOfCinderCity].name} заняты`,
      },
    ],
    attributes: {
      [ArtifactPieceUidEnum.SandsOfEon]: [{ uid: AttributeUidEnum.HealthPercent }],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [{ uid: AttributeUidEnum.HealthPercent }],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.HealthPercent },
        { uid: AttributeUidEnum.CritRate, description: `Если в руках ${weapons[WeaponUidEnum.FavoniusLance].name}` },
      ],
      additional: [{ uid: AttributeUidEnum.HealthPercent }, { uid: AttributeUidEnum.EnergyRecharge }],
    },
  },
  character_uid: CharacterUidEnum.Chevreuse,
  required_level: 90,
  talent_leveling: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "В первую очередь\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Во вторую очередь\n(8)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { uid: WeaponUidEnum.RightfulReward },
    { uid: WeaponUidEnum.DialoguesOfTheDesertSages },
    { uid: WeaponUidEnum.FavoniusLance },
  ],
} as CharacterRecommendations;
