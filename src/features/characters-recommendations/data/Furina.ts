import { ArtifactSetIds } from "../../artifact-sets/enums";
import { ArtifactSlotIds } from "../../artifact-slots/enums";
import {
  CharacterArtifactRecommendationsClass,
  CharacterArtifactSetRecommendationWithIdClass,
  CharacterArtifactStatRecommendationClass,
  CharacterRecommendationsClass,
  CharacterTalentLevelingRecommendationClass,
  CharacterWeaponRecommendationClass,
} from "../classes";
import { CharacterIds } from "../../characters/enums";
import { CharacterRecommendationsVideoSources } from "../enums";
import { StatIds } from "../../stats/enums";
import { TalentIds } from "../../talents/enums";
import { WeaponIds } from "../../weapons/enums";

export default new CharacterRecommendationsClass(CharacterIds.Furina)
  .setArtifacts(CharacterArtifactRecommendationsClass.init([
    [new CharacterArtifactSetRecommendationWithIdClass(ArtifactSetIds.GoldenTroupe)],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge),
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage),
      ],
      [ArtifactSlotIds.Goblet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.HydroDmgBonus),
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage).setNotes([
          "Лучше в подавляющем числе ситуаций",
        ]),
      ],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendationClass(StatIds.EnergyRecharge).setNotes([
          "В отрядах без доп. подкачки - 200% - 220% ВЭ",
          "В отрядах с доп. подкачкой - 160% - 180% ВЭ",
          "В отрядах с Е Лань или Син Цю - 130% - 140% ВЭ",
          "В отрядах с 3 Гидро и более - 100% ВЭ",
        ]),
        new CharacterArtifactStatRecommendationClass(StatIds.HpPercentage),
        new CharacterArtifactStatRecommendationClass(StatIds.CritRate),
        new CharacterArtifactStatRecommendationClass(StatIds.CritDMG),
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
    CharacterTalentLevelingRecommendationClass.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalSkill, "В первую очередь\n(10)"]),
    CharacterTalentLevelingRecommendationClass.init([TalentIds.ElementalBurst, "Во вторую очередь\n(10)"]),
  ])
  .setVideoSources([
    CharacterRecommendationsVideoSources.BestWeaponsForEveryCharacter,
    CharacterRecommendationsVideoSources.AllAboutAllTalents,
  ])
  .setWeapons({
    "Без реакций - 120% ВЭ+": [
      new CharacterWeaponRecommendationClass(WeaponIds.SplendorOfTranquilWaters).setIsBetter().setPercent(1.3648),
      new CharacterWeaponRecommendationClass(WeaponIds.UrakuMisugiri).setPercent(1.3306).setPostfix("(с гео)"),
      new CharacterWeaponRecommendationClass(WeaponIds.UrakuMisugiri).setPercent(1.2265).setPostfix("(без гео)"),
      new CharacterWeaponRecommendationClass(WeaponIds.PrimordialJadeCutter).setPercent(1.2139),
      new CharacterWeaponRecommendationClass(WeaponIds.HarbingerOfDawn).setPercent(1.1795).setPostfix("(работает)").setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.LightOfFoliarIncision).setPercent(1.1536),
      new CharacterWeaponRecommendationClass(WeaponIds.KeyOfKhajNisut).setPercent(1.1298),
      new CharacterWeaponRecommendationClass(WeaponIds.WolfFang).setPercent(1.1268).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.FesteringDesire).setPercent(1.0924),
      new CharacterWeaponRecommendationClass(WeaponIds.WolfFang).setPercent(1.0648).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.FleuveCendreFerryman).setPercent(1.0000).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.HarbingerOfDawn).setPercent(0.9745).setPostfix("(не работает)").setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.TheDockhandsAssistant).setPercent(0.9637).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.FavoniusSword).setPercent(0.8936).setRefinement(5),
    ],
    "Без реакций - 170% ВЭ+": [
      new CharacterWeaponRecommendationClass(WeaponIds.SplendorOfTranquilWaters).setIsBetter().setPercent(1.1296),
      new CharacterWeaponRecommendationClass(WeaponIds.UrakuMisugiri).setPercent(1.0842).setPostfix("(с гео)"),
      new CharacterWeaponRecommendationClass(WeaponIds.FleuveCendreFerryman).setPercent(1.0000).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.UrakuMisugiri).setPercent(0.9999).setPostfix("(без гео)"),
      new CharacterWeaponRecommendationClass(WeaponIds.PrimordialJadeCutter).setPercent(0.9964),
      new CharacterWeaponRecommendationClass(WeaponIds.FesteringDesire).setPercent(0.9878),
      new CharacterWeaponRecommendationClass(WeaponIds.HarbingerOfDawn).setPercent(0.9627).setPostfix("(работает)").setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.KeyOfKhajNisut).setPercent(0.9578),
      new CharacterWeaponRecommendationClass(WeaponIds.LightOfFoliarIncision).setPercent(0.9402),
      new CharacterWeaponRecommendationClass(WeaponIds.WolfFang).setPercent(0.9153).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.FavoniusSword).setPercent(0.8936).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.WolfFang).setPercent(0.8648).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.TheDockhandsAssistant).setPercent(0.8080).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.HarbingerOfDawn).setPercent(0.7894).setPostfix("(не работает)").setRefinement(5),
    ],
    "Без реакций - 220% ВЭ+": [
      new CharacterWeaponRecommendationClass(WeaponIds.SplendorOfTranquilWaters).setIsBetter().setPercent(1.0893),
      new CharacterWeaponRecommendationClass(WeaponIds.UrakuMisugiri).setPercent(1.0421).setPostfix("(с гео)"),
      new CharacterWeaponRecommendationClass(WeaponIds.FleuveCendreFerryman).setPercent(1.0000).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.UrakuMisugiri).setPercent(0.9604).setPostfix("(без гео)"),
      new CharacterWeaponRecommendationClass(WeaponIds.PrimordialJadeCutter).setPercent(0.9597),
      new CharacterWeaponRecommendationClass(WeaponIds.FesteringDesire).setPercent(0.9498),
      new CharacterWeaponRecommendationClass(WeaponIds.KeyOfKhajNisut).setPercent(0.9254),
      new CharacterWeaponRecommendationClass(WeaponIds.HarbingerOfDawn).setPercent(0.9232).setPostfix("(работает)").setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.LightOfFoliarIncision).setPercent(0.9048),
      new CharacterWeaponRecommendationClass(WeaponIds.WolfFang).setPercent(0.8798).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.FavoniusSword).setPercent(0.8725).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.WolfFang).setPercent(0.8314).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.TheDockhandsAssistant).setPercent(0.7762).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.HarbingerOfDawn).setPercent(0.7608).setPostfix("(не работает)").setRefinement(5),
    ],
    "Фурина вейпит - 180% ВЭ+": [
      new CharacterWeaponRecommendationClass(WeaponIds.SplendorOfTranquilWaters).setIsBetter().setPercent(1.2547),
      new CharacterWeaponRecommendationClass(WeaponIds.UrakuMisugiri).setPercent(1.1969).setPostfix("(с гео)"),
      new CharacterWeaponRecommendationClass(WeaponIds.KeyOfKhajNisut).setPercent(1.1464),
      new CharacterWeaponRecommendationClass(WeaponIds.PrimordialJadeCutter).setPercent(1.1087),
      new CharacterWeaponRecommendationClass(WeaponIds.UrakuMisugiri).setPercent(1.1043).setPostfix("(без гео)"),
      new CharacterWeaponRecommendationClass(WeaponIds.FesteringDesire).setPercent(1.0906),
      new CharacterWeaponRecommendationClass(WeaponIds.HarbingerOfDawn).setPercent(1.0652).setPostfix("(работает)").setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.LightOfFoliarIncision).setPercent(1.0406),
      new CharacterWeaponRecommendationClass(WeaponIds.WolfFang).setPercent(1.0101).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.FleuveCendreFerryman).setPercent(1.0000).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.FavoniusSword).setPercent(0.9592).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.WolfFang).setPercent(0.9552).setRefinement(1),
      new CharacterWeaponRecommendationClass(WeaponIds.TheDockhandsAssistant).setPercent(0.9425).setRefinement(5),
      new CharacterWeaponRecommendationClass(WeaponIds.HarbingerOfDawn).setPercent(0.8743).setPostfix("(не работает)").setRefinement(5),
    ],
  });
