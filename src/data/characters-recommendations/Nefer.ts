import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import {
  CharacterArtifactRecommendations, CharacterArtifactSetRecommendationWithId, CharacterArtifactStatRecommendation,
  CharacterRecommendations, CharacterSquadCharacterRecommendation, CharacterSquadElementRecommendation,
  CharacterSquadOtherRecommendation, CharacterSquadRecommendations, CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { ELEMENTS } from "@/constants/elements";
import { STATS } from "@/constants/stats";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Nefer)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.NIGHT_OF_THE_SKYS_UNVEILING).setIsBetter(),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.MARECHAUSSEE_HUNTER),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.GILDED_DREAMS),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.FLOWER_OF_PARADISE_LOST),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY)],
      [ARTIFACT_SLOTS.GOBLET]: [new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY)],
      [ARTIFACT_SLOTS.CIRCLET]: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.CRIT_RATE).setNotes(["Приоритетно"]),
        new CharacterArtifactStatRecommendation(STATS.CRIT_DMG).setNotes(["Приоритетно"]),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY),
      ],
    },
  ]))
  .setKeyConstellations([2])
  .setRequiredLevel("80/90")
  .setRotation([
    "Таланты отряда:<br><span class='text-dendro'>Создаем бутоны</span><br><span class='text-[75%]'>Убеждаемся, что есть <span class='text-dendro'>Заряды росы</span> и <span class='text-dendro'>бутоны</span> на поле</span>",
    "Навык:<br><span class='text-dendro'>Вход в стойку</span><br><span class='text-[75%]'><span class='text-dendro'>Бутоны</span> стали <span class='text-dendro'>Ядрами лжи</span></span>",
    "3x Заряженная атака:<br><span class='text-dendro'>Урон проекциями</span><br><span class='text-[75%]'><span class='text-dendro'>Ядра лжи</span> поглощаются и увеличивают урон</span>",
    "Навык:<br><span class='text-dendro'>Вход в стойку</span>",
    "3x Заряженная атака:<br><span class='text-dendro'>Урон проекциями</span>",
    "Взрыв стихии<br><span class='text-[75%]'>Применяется, если:<br>1. Нужно добить врага<br>2. Откаты навыков персонажей в отряде слишком длинные<br><br>В иных ситуациях игнорируется почти всегда, но, при желании, можно глянуть анимацию</span>",
  ])
  .setSquads(CharacterSquadRecommendations.init([
    [
      new CharacterSquadCharacterRecommendation(CharacterIds.Nefer),
      new CharacterSquadElementRecommendation(ELEMENTS.DENDRO),
      new CharacterSquadElementRecommendation(ELEMENTS.HYDRO),
      new CharacterSquadOtherRecommendation("Саппорт"),
    ],
    [
      new CharacterSquadCharacterRecommendation(CharacterIds.Aino),
      new CharacterSquadCharacterRecommendation(CharacterIds.Fischl),
      new CharacterSquadCharacterRecommendation(CharacterIds.KukiShinobu),
      new CharacterSquadCharacterRecommendation(CharacterIds.Lauma),
    ],
  ]))
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем", 1]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь", 10]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь", "1-8"]),
  ])
  .setVideoSourceIds([VideoSourceIds.GuideToNefer_AnimeCool, VideoSourceIds.GuideToNefer_MironMinMax])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.ReliquaryOfTruth).setIsBetter("Лучшее оружие").setPercent(1.2412),
    new CharacterWeaponRecommendation(WeaponIds.NightweaversLookingGlass).setPercent(1.0948),
    new CharacterWeaponRecommendation(WeaponIds.DawningFrost).setPercent(1.0884).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.TomeOfTheEternalFlow).setPercent(1.0351),
    new CharacterWeaponRecommendation(WeaponIds.StarcallersWatch).setPercent(1.0119),
    new CharacterWeaponRecommendation(WeaponIds.SunnyMorningSleepIn).setPercent(1.0047),
    new CharacterWeaponRecommendation(WeaponIds.BlackmarrowLantern).setIsBetter("Лучшее доступное оружие").setPercent(1.0000).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.DawningFrost).setPercent(0.9962).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.AThousandFloatingDreams).setPercent(0.9848),
    new CharacterWeaponRecommendation(WeaponIds.BlackmarrowLantern).setPercent(0.9679).setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.TheWidsith).setPercent(0.9611).setRefinement(5),
  ]);
