import artifactSets from "../artifact-sets";
import weapons from "../weapons";
import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import { TalentUidEnum } from "../enums/talent";
import { WeaponUidEnum } from "../enums/weapon";
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
      [ArtifactPieceUidEnum.SandsOfEon]: [{ uid: AttributeUidEnum.HPPercentage }],
      [ArtifactPieceUidEnum.GobletOfEonothem]: [{ uid: AttributeUidEnum.HPPercentage }],
      [ArtifactPieceUidEnum.CircletOfLogos]: [
        { uid: AttributeUidEnum.HPPercentage },
        { uid: AttributeUidEnum.CRITRate, description: `Если в руках ${weapons[WeaponUidEnum.FavoniusLance].name}` },
      ],
      additional: [{ uid: AttributeUidEnum.HPPercentage }, { uid: AttributeUidEnum.EnergyRecharge }],
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
    { title: "Miron MinMax: Лучшее Оружие для Каждого Персонажа", youtube_url: "https://youtu.be/cjatyGw0EO0" },
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
  weapons: [
    { uid: WeaponUidEnum.StaffOfHoma, refinement: 1, is_better: true },
    { uid: WeaponUidEnum.DialoguesOfTheDesertSages, refinement: 5 },
    { uid: WeaponUidEnum.FavoniusLance, refinement: 5 },
    { uid: WeaponUidEnum.RightfulReward, refinement: 5 },
  ],
} as CharacterRecommendations;
