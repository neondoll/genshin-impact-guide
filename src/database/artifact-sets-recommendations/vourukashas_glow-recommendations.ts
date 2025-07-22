import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import { artifactSetByUid, AttributesCrit, AttributesElementDamageBonus } from "./help";
import { ArtifactSetUidEnum } from "../enums/artifact-set";
import { AttributeUidEnum } from "../enums/attribute";
import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetRecommendations } from "../types/artifact-set-recommendations";

export default {
  artifact_set_uid: ArtifactSetUidEnum.VourukashasGlow,
  characters: [
    {
      uid: CharacterUidEnum.Dehya,
      is_better: true,
      notes: `Сияние Вурукаши - один из лучших комплектов для позиции основного урона и поддержки. Бонус 4 предметов увеличит урон Дэхьи, так как она получает урон, даже если не находится на поле.\nМожет использовать как полный комплект, так и 2 предмета, сочетая их с ${artifactSetByUid(ArtifactSetUidEnum.CrimsonWitchOfFlames)}, ${artifactSetByUid(ArtifactSetUidEnum.WanderersTroupe)}, ${artifactSetByUid(ArtifactSetUidEnum.GildedDreams)}, ${artifactSetByUid(ArtifactSetUidEnum.FlowerOfParadiseLost)} или ${artifactSetByUid(ArtifactSetUidEnum.TenacityOfTheMillelith)} в зависимости от позиции. В данных случаях ${artifactSetByUid(ArtifactSetUidEnum.VourukashasGlow)} может быть заменён ${artifactSetByUid(ArtifactSetUidEnum.TenacityOfTheMillelith)}, если не используются оба комплекта.`,
    },
  ],
  preferred_attributes: {
    [ArtifactPieceUidEnum.SandsOfEon]: [
      AttributeUidEnum.AttackPercent, AttributeUidEnum.ElementalMastery, AttributeUidEnum.HealthPercent,
    ],
    [ArtifactPieceUidEnum.GobletOfEonothem]: [...AttributesElementDamageBonus, AttributeUidEnum.AttackPercent],
    [ArtifactPieceUidEnum.CircletOfLogos]: AttributesCrit,
    additional: [
      ...AttributesCrit, AttributeUidEnum.AttackPercent, AttributeUidEnum.ElementalMastery,
      AttributeUidEnum.EnergyRecharge, AttributeUidEnum.HealthPercent,
    ],
  },
  video_sources: [
    {
      title: "Miron MinMax: ВСЁ про ВСЕ сеты АРТЕФАКТОВ! ft. @AnimeCool_Genshin",
      youtube_url: "https://youtu.be/kCu0ux0hUCg",
    },
  ],
} as ArtifactSetRecommendations;
