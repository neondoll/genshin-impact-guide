import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import { CharacterIds } from "@/enums/character";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { STATS } from "@/constants/stats";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Aino)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.SILKEN_MOONS_SERENADE).setIsBetter().setNotes([
        "Набор увеличит скорость <span class='text-info'>восст. энергии</span> Айно и повысит <span class='text-info'>мастерство стихий</span> всего отряда.",
        "Рекомендуется для отрядов с Лунным знамением - Высшее сияния, где персонаж, наносящий основной урон, вызывает Лунные реакции.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.NOBLESSE_OBLIGE).setNotes([
        "Увеличивает урон от <span class='text-info'>взрыва стихии</span> Айно и увеличивает <span class='text-info'>силу атаки</span> другим членам отряда.",
        "Рекомендуется, если никто другой в отряде не носит данный комплект.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.INSTRUCTOR).setNotes([
        "Хоть данный комплект не бывает 5★, он повышает <span class='text-info'>мастерство стихий</span> как самой Айно, так и всем членам отряда.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ARTIFACT_SETS.GILDED_DREAMS).setNotes([
        "Увеличивает <span class='text-info'>мастерство стихий</span> и <span class='text-info'>силу атаки</span>, от которых зависит урон Айно.",
      ]),
    ],
    {
      [ARTIFACT_SLOTS.SANDS]: [
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY),
      ],
      [ARTIFACT_SLOTS.GOBLET]: [new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY)],
      [ARTIFACT_SLOTS.CIRCLET]: [new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY)],
      additional: [
        new CharacterArtifactStatRecommendation(STATS.ENERGY_RECHARGE).setNotes(["от 160%", "~200%"]),
        new CharacterArtifactStatRecommendation(STATS.ELEMENTAL_MASTERY).setNotes(["от 500"]),
      ],
    },
  ]))
  .setTalentLeveling([
    CharacterTalentLevelingRecommendation.init([TalentIds.NormalAttack, "При необходимости"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalSkill, "Во вторую очередь"]),
    CharacterTalentLevelingRecommendation.init([TalentIds.ElementalBurst, "В первую очередь"]),
  ])
  .setVideoSourceIds([VideoSourceIds.GuideToAino])
  .setWeapons([
    new CharacterWeaponRecommendation(WeaponIds.FlameForgedInsight).setNotes([
      "Поскольку Айно может активировать все необходимые реакции, она реализует условие пассивной способности и получает бонус <span class='text-info'>мастерства стихии</span> и <span class='text-info'>энергии</span>.",
      "В артефактах стоит сосредоточиться на <span class='text-info'>шансе крит. попадания</span>, <span class='text-info'>крит. уроне</span> и <span class='text-info'>восст. энергии</span>.",
    ]),
    new CharacterWeaponRecommendation(WeaponIds.MasterKey).setNotes([
      "Оружие значительно повышает <span class='text-info'>мастерство стихий</span>, особенно в командах с ещё одним персонажем Нод-Края.",
      "Дополнительная характеристика позволяет использовать <span class='text-info'>взрыв стихии</span> чаще.",
      "В артефактах стоит сосредоточиться на <span class='text-info'>шансе крит. попадания</span>, <span class='text-info'>крит. уроне</span> и <span class='text-info'>мастерстве стихий</span>.",
      "Легко получить.",
    ]),
    new CharacterWeaponRecommendation(WeaponIds.MakhairaAquamarine).setNotes([
      "Урон Айно зависит и от <span class='text-info'>мастерства стихий</span>, и от <span class='text-info'>силы атаки</span>, поэтому ей подойдут характеристики.",
      "Кроме того, оружие повысит <span class='text-info'>силу атаки</span> и другим членам отряда.",
      "В артефактах стоит сосредоточиться на <span class='text-info'>шансе крит. попадания</span>, <span class='text-info'>крит. уроне</span> и <span class='text-info'>восст. энергии</span>.",
    ]),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusGreatsword).setNotes([
      "Увеличивает <span class='text-info'>восст. энергии</span>, необходимое для частого использования <span class='text-info'>взрыва стихии</span>.",
      "Позволяет создавать <span class='text-info'>элементальные частицы</span> как для себя, так и для отряда, но требует от 50% шанса <span class='text-info'>крит. попадания</span>.",
      "В артефактах стоит сосредоточиться на <span class='text-info'>шансе крит. попадания</span>, <span class='text-info'>крит. уроне</span> и <span class='text-info'>мастерстве стихий</span>.",
    ]),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialGreatsword).setNotes([
      "Позволяет повторно использовать <span class='text-info'>элементальный навык</span> и чаще активировать <span class='text-info'>взрыв стихии</span>.",
      "В артефактах стоит сосредоточиться на <span class='text-info'>шансе крит. попадания</span>, <span class='text-info'>крит. уроне</span> и <span class='text-info'>мастерстве стихий</span>.",
    ]),
  ]);
