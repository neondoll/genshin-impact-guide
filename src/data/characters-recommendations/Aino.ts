import { ArtifactSetIds } from "@/enums/artifact-set";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { CharacterIds } from "@/enums/character";
import {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "@/classes/character-recommendations";
import { StatIds } from "@/enums/stat";
import { TalentIds } from "@/enums/talent";
import { VideoSourceIds } from "@/enums/video-source";
import { WeaponIds } from "@/enums/weapon";

export default new CharacterRecommendations(CharacterIds.Aino)
  .setArtifacts(CharacterArtifactRecommendations.init([
    [
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.SilkenMoonsSerenade).setIsBetter().setNotes([
        "Набор увеличит скорость <span class='text-[rgb(255,215,128)]'>восст. энергии</span> Айно и повысит <span class='text-[rgb(255,215,128)]'>мастерство стихий</span> всего отряда.",
        "Рекомендуется для отрядов с Лунным знамением - Высшее сияния, где персонаж, наносящий основной урон, вызывает Лунные реакции.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.NoblesseOblige).setNotes([
        "Увеличивает урон от <span class='text-[rgb(255,215,128)]'>взрыва стихии</span> Айно и увеличивает <span class='text-[rgb(255,215,128)]'>силу атаки</span> другим членам отряда.",
        "Рекомендуется, если никто другой в отряде не носит данный комплект.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.Instructor).setNotes([
        "Хоть данный комплект не бывает 5★, он повышает <span class='text-[rgb(255,215,128)]'>мастерство стихий</span> как самой Айно, так и всем членам отряда.",
      ]),
      new CharacterArtifactSetRecommendationWithId(ArtifactSetIds.GildedDreams).setNotes([
        "Увеличивает <span class='text-[rgb(255,215,128)]'>мастерство стихий</span> и <span class='text-[rgb(255,215,128)]'>силу атаки</span>, от которых зависит урон Айно.",
      ]),
    ],
    {
      [ArtifactSlotIds.Sands]: [
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge),
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery),
      ],
      [ArtifactSlotIds.Goblet]: [new CharacterArtifactStatRecommendation(StatIds.ElementalMastery)],
      [ArtifactSlotIds.Circlet]: [new CharacterArtifactStatRecommendation(StatIds.ElementalMastery)],
      additional: [
        new CharacterArtifactStatRecommendation(StatIds.EnergyRecharge).setNotes(["от 160%", "~200%"]),
        new CharacterArtifactStatRecommendation(StatIds.ElementalMastery).setNotes(["от 500"]),
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
      "Поскольку Айно может активировать все необходимые реакции, она реализует условие пассивной способности и получает бонус <span class='text-[rgb(255,215,128)]'>мастерства стихии</span> и <span class='text-[rgb(255,215,128)]'>энергии</span>.",
      "В артефактах стоит сосредоточиться на <span class='text-[rgb(255,215,128)]'>шансе крит. попадания</span>, <span class='text-[rgb(255,215,128)]'>крит. уроне</span> и <span class='text-[rgb(255,215,128)]'>восст. энергии</span>.",
    ]),
    new CharacterWeaponRecommendation(WeaponIds.MasterKey).setNotes([
      "Оружие значительно повышает <span class='text-[rgb(255,215,128)]'>мастерство стихий</span>, особенно в командах с ещё одним персонажем Нод-Края.",
      "Дополнительная характеристика позволяет использовать <span class='text-[rgb(255,215,128)]'>взрыв стихии</span> чаще.",
      "В артефактах стоит сосредоточиться на <span class='text-[rgb(255,215,128)]'>шансе крит. попадания</span>, <span class='text-[rgb(255,215,128)]'>крит. уроне</span> и <span class='text-[rgb(255,215,128)]'>мастерстве стихий</span>.",
      "Легко получить.",
    ]),
    new CharacterWeaponRecommendation(WeaponIds.MakhairaAquamarine).setNotes([
      "Урон Айно зависит и от <span class='text-[rgb(255,215,128)]'>мастерства стихий</span>, и от <span class='text-[rgb(255,215,128)]'>силы атаки</span>, поэтому ей подойдут характеристики.",
      "Кроме того, оружие повысит <span class='text-[rgb(255,215,128)]'>силу атаки</span> и другим членам отряда.",
      "В артефактах стоит сосредоточиться на <span class='text-[rgb(255,215,128)]'>шансе крит. попадания</span>, <span class='text-[rgb(255,215,128)]'>крит. уроне</span> и <span class='text-[rgb(255,215,128)]'>восст. энергии</span>.",
    ]),
    new CharacterWeaponRecommendation(WeaponIds.FavoniusGreatsword).setNotes([
      "Увеличивает <span class='text-[rgb(255,215,128)]'>восст. энергии</span>, необходимое для частого использования <span class='text-[rgb(255,215,128)]'>взрыва стихии</span>.",
      "Позволяет создавать <span class='text-[rgb(255,215,128)]'>элементальные частицы</span> как для себя, так и для отряда, но требует от 50% шанса <span class='text-[rgb(255,215,128)]'>крит. попадания</span>.",
      "В артефактах стоит сосредоточиться на <span class='text-[rgb(255,215,128)]'>шансе крит. попадания</span>, <span class='text-[rgb(255,215,128)]'>крит. уроне</span> и <span class='text-[rgb(255,215,128)]'>мастерстве стихий</span>.",
    ]),
    new CharacterWeaponRecommendation(WeaponIds.SacrificialGreatsword).setNotes([
      "Позволяет повторно использовать <span class='text-[rgb(255,215,128)]'>элементальный навык</span> и чаще активировать <span class='text-[rgb(255,215,128)]'>взрыв стихии</span>.",
      "В артефактах стоит сосредоточиться на <span class='text-[rgb(255,215,128)]'>шансе крит. попадания</span>, <span class='text-[rgb(255,215,128)]'>крит. уроне</span> и <span class='text-[rgb(255,215,128)]'>мастерстве стихий</span>.",
    ]),
  ]);
