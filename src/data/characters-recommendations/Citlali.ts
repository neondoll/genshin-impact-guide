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
import artifactSets from "../artifact-sets";
import characters from "../characters";
import weapons from "../weapons";

export default new CharacterRecommendations(CharacterIds.Citlali)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.ScrollOfTheHeroOfCinderCity).setIsBetter().setNotes([
        "Лучший набор для Ситлали, так как восстановит ей энергию и увеличит элементальный урон основного персонажа.",
        "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.TenacityOfTheMillelith).setNotes([
        "Бонус 2 предметов не важен Ситлали, но бонус 4 предметов увеличит прочность щита и атаку других персонажей в отряде.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.NoblesseOblige).setNotes([
        "Увеличивает урон от взрыва стихии Ситлали и увеличивает силу атаки другим членам отряда.",
        "Рекомендуется, если никто другой в отряде не носит данный комплект.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.Instructor).setNotes([
        "Хоть данный комплект не бывает 5★, он повышает мастерство стихий как самой Ситлали, так и всем членам отряда.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.ArchaicPetra).setNotes([
        `Если в отряде есть ${characters[CharacterIds.Xilonen].name}`,
        "Носитель должен подбирать осколок",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setNotes(["в 99% случаев"]),
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery),
      ],
      [ArtifactSlotIds.Goblet]: [new CharacterArtifactStatRecommendation(StatIds.ElementalMastery)],
      [ArtifactSlotIds.Circlet]: [
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setNotes(["всегда"]),
        new CharacterArtifactStatRecommendation(StatIds.CritRate).setNotes([
          `можно рассмотреть, если в руках ${weapons[WeaponIds.FavoniusCodex].title}`,
        ]),
      ],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setNotes(["приоритетно", "от 170%"]),
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setNotes(["от 800"]),
      ],
    },
  ]))
  .setFirstConstellationOrSignatureWeapon("C1 < Сигна < C2")
  .setKeyConstellations([2])
  .setReferencePoint([
    ["Макс. HP", "22 169"],
    ["Сила атаки", "1 057"],
    ["Защита", "897"],
    ["Восст. энергии", "195.8%"],
    ["МС", "342"],
    ["Крит. шанс", "59.2%"],
    ["Крит. урон", "122.8%"],
    ["Оружие", weapons[WeaponIds.ThrillingTalesOfDragonSlayers].title],
    ["Набор артефактов", artifactSets[ArtifactSetIds.ScrollOfTheHeroOfCinderCity].name],
  ])
  .setRequiredLevel(80)
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "Не качаем\n(1)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "В первую очередь\n(6-8)"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "Во вторую очередь\n(6-8)"]),
  ])
  .setVideoSourceIds([VideoSourceIds.FirstConstellationOrSignatureWeapon, VideoSourceIds.GuideToCitlali])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.StarcallersWatch).setIsBetter("Лучшее оружие").setRefinement(1),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusCodex).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.ThrillingTalesOfDragonSlayers).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialFragments).setIsBetter("Лучшее доступное оружие").setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.PrototypeAmber).setRefinement(5),
    new CharacterWeaponRecommendation(WeaponIds.WanderingEvenstar).setRefinement(5),
  ]);
