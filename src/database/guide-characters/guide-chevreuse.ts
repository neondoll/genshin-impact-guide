import { ArtifactPieceUidEnum } from "../enums/artifact-pieces";
import { artifactSets } from "../artifact-sets";
import { ArtifactSetUidEnum } from "../enums/artifact-sets";
import { AttributeUidEnum } from "../enums/attributes";
import { CharacterUidEnum } from "../enums/characters";
import { TalentUidEnum } from "../enums/talents";
import { weapons } from "../weapons";
import { WeaponUidEnum } from "../enums/weapons";
import type { GuideCharacter } from "../types/guide-characters";

export default {
  character_uid: CharacterUidEnum.Chevreuse,
  artifact_recommendations: {
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
        {
          uid: AttributeUidEnum.CriticalRate,
          description: `Если в руках ${weapons[WeaponUidEnum.FavoniusLance].name}`,
        },
      ],
      additional: [{ uid: AttributeUidEnum.HealthPercent }, { uid: AttributeUidEnum.EnergyRecharge }],
    },
  },
  assembly_weapons: [
    { uid: WeaponUidEnum.RightfulReward },
    { uid: WeaponUidEnum.DialoguesOfTheDesertSages },
    { uid: WeaponUidEnum.FavoniusLance },
  ],
  required_level: 90,
  talent_leveling_recommendations: [
    { uid: TalentUidEnum.NormalAttack, priority: "Не качаем\n(1)" },
    { uid: TalentUidEnum.ElementalSkill, priority: "Золотая середина\n(8)" },
    { uid: TalentUidEnum.ElementalBurst, priority: "Золотая середина\n(8)" },
  ],
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ таланты ft.@AnimeCool_Genshin",
      vk_url: "https://vkvideo.ru/video-227044935_456239080",
    },
  ],
} as GuideCharacter;
