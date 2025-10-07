import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { CharacterIds } from "@/enums/character";
import { StatIds } from "@/enums/stat";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Furina)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.GoldenTroupe)],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge),
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendation(StatIds.HydroDmgBonus),
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage).setNotes([
          "Лучше в подавляющем числе ситуаций",
        ]),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.CritRate),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setNotes([
          "В отрядах без доп. подкачки - 200% - 220% ВЭ",
          "В отрядах с доп. подкачкой - 160% - 180% ВЭ",
          "В отрядах с Е Лань или Син Цю - 130% - 140% ВЭ",
          "В отрядах с 3 Гидро и более - 100% ВЭ",
        ]),
        new CharacterArtifactStatRecommendation(StatIds.HpPercentage),
        new CharacterArtifactStatRecommendation(StatIds.CritRate),
        new CharacterArtifactStatRecommendation(StatIds.CritDMG),
      ],
    },
  ]))
  .setReferencePoint([
    ["Макс. HP", "33 000"],
    ["Восст. энергии", "170%"],
    ["Крит. шанс", "60%"],
    ["Крит. урон", "140%"],
  ])
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(10)"]),
  ])
  .setVideoSourceIds([VideoSourceIds.AllAboutAllTalents, VideoSourceIds.TheBestWeaponsForEveryCharacter])
  .setWeapons({
    "Без реакций - 120% ВЭ+": [
      new CharacterWeaponRecommendation(WeaponIds.SplendorOfTranquilWaters).setIsBetter("Лучшее сигнатурное оружие").setPercent(1.3648),
      new CharacterWeaponRecommendation(WeaponIds.UrakuMisugiri).setPercent(1.3306).setPostfix("(с гео)"),
      new CharacterWeaponRecommendation(WeaponIds.UrakuMisugiri).setPercent(1.2265).setPostfix("(без гео)"),
      new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeCutter).setPercent(1.2139),
      new CharacterWeaponRecommendation(WeaponIds.HarbingerOfDawn).setPercent(1.1795).setPostfix("(работает)").setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.LightOfFoliarIncision).setPercent(1.1536),
      new CharacterWeaponRecommendation(WeaponIds.KeyOfKhajNisut).setPercent(1.1298),
      new CharacterWeaponRecommendation(WeaponIds.WolfFang).setPercent(1.1268).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.FesteringDesire).setPercent(1.0924),
      new CharacterWeaponRecommendation(WeaponIds.WolfFang).setPercent(1.0648).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.FleuveCendreFerryman).setPercent(1.0000).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.HarbingerOfDawn).setPercent(0.9745).setPostfix("(не работает)").setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.TheDockhandsAssistant).setPercent(0.9637).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.FavoniusSword).setPercent(0.8936).setRefinement(5),
    ],
    "Без реакций - 170% ВЭ+": [
      new CharacterWeaponRecommendation(WeaponIds.SplendorOfTranquilWaters).setIsBetter("Лучшее сигнатурное оружие").setPercent(1.1296),
      new CharacterWeaponRecommendation(WeaponIds.UrakuMisugiri).setPercent(1.0842).setPostfix("(с гео)"),
      new CharacterWeaponRecommendation(WeaponIds.FleuveCendreFerryman).setPercent(1.0000).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.UrakuMisugiri).setPercent(0.9999).setPostfix("(без гео)"),
      new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeCutter).setPercent(0.9964),
      new CharacterWeaponRecommendation(WeaponIds.FesteringDesire).setPercent(0.9878),
      new CharacterWeaponRecommendation(WeaponIds.HarbingerOfDawn).setPercent(0.9627).setPostfix("(работает)").setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.KeyOfKhajNisut).setPercent(0.9578),
      new CharacterWeaponRecommendation(WeaponIds.LightOfFoliarIncision).setPercent(0.9402),
      new CharacterWeaponRecommendation(WeaponIds.WolfFang).setPercent(0.9153).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.FavoniusSword).setPercent(0.8936).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.WolfFang).setPercent(0.8648).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.TheDockhandsAssistant).setPercent(0.8080).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.HarbingerOfDawn).setPercent(0.7894).setPostfix("(не работает)").setRefinement(5),
    ],
    "Без реакций - 220% ВЭ+": [
      new CharacterWeaponRecommendation(WeaponIds.SplendorOfTranquilWaters).setIsBetter("Лучшее сигнатурное оружие").setPercent(1.0893),
      new CharacterWeaponRecommendation(WeaponIds.UrakuMisugiri).setPercent(1.0421).setPostfix("(с гео)"),
      new CharacterWeaponRecommendation(WeaponIds.FleuveCendreFerryman).setPercent(1.0000).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.UrakuMisugiri).setPercent(0.9604).setPostfix("(без гео)"),
      new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeCutter).setPercent(0.9597),
      new CharacterWeaponRecommendation(WeaponIds.FesteringDesire).setPercent(0.9498),
      new CharacterWeaponRecommendation(WeaponIds.KeyOfKhajNisut).setPercent(0.9254),
      new CharacterWeaponRecommendation(WeaponIds.HarbingerOfDawn).setPercent(0.9232).setPostfix("(работает)").setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.LightOfFoliarIncision).setPercent(0.9048),
      new CharacterWeaponRecommendation(WeaponIds.WolfFang).setPercent(0.8798).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.FavoniusSword).setPercent(0.8725).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.WolfFang).setPercent(0.8314).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.TheDockhandsAssistant).setPercent(0.7762).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.HarbingerOfDawn).setPercent(0.7608).setPostfix("(не работает)").setRefinement(5),
    ],
    "Фурина вейпит - 180% ВЭ+": [
      new CharacterWeaponRecommendation(WeaponIds.SplendorOfTranquilWaters).setIsBetter("Лучшее сигнатурное оружие").setPercent(1.2547),
      new CharacterWeaponRecommendation(WeaponIds.UrakuMisugiri).setPercent(1.1969).setPostfix("(с гео)"),
      new CharacterWeaponRecommendation(WeaponIds.KeyOfKhajNisut).setPercent(1.1464),
      new CharacterWeaponRecommendation(WeaponIds.PrimordialJadeCutter).setPercent(1.1087),
      new CharacterWeaponRecommendation(WeaponIds.UrakuMisugiri).setPercent(1.1043).setPostfix("(без гео)"),
      new CharacterWeaponRecommendation(WeaponIds.FesteringDesire).setPercent(1.0906),
      new CharacterWeaponRecommendation(WeaponIds.HarbingerOfDawn).setPercent(1.0652).setPostfix("(работает)").setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.LightOfFoliarIncision).setPercent(1.0406),
      new CharacterWeaponRecommendation(WeaponIds.WolfFang).setPercent(1.0101).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.FleuveCendreFerryman).setPercent(1.0000).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.FavoniusSword).setPercent(0.9592).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.WolfFang).setPercent(0.9552).setRefinement(1),
      new CharacterWeaponRecommendation(WeaponIds.TheDockhandsAssistant).setPercent(0.9425).setRefinement(5),
      new CharacterWeaponRecommendation(WeaponIds.HarbingerOfDawn).setPercent(0.8743).setPostfix("(не работает)").setRefinement(5),
    ],
  });
