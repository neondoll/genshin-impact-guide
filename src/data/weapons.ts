import type { Weapon as Type } from "@/types/weapon";
import { ElementalReactionIds } from "@/enums/elemental-reaction";
import { elementalReactionLink } from "@/features/elemental-reactions/help";
import { numberFormatPercent } from "@/lib/utils";
import { StatIds } from "@/enums/stat";
import { Weapon as Class, WeaponPassiveAbility as ClassPassiveAbility } from "@/classes/weapon";
import { WeaponIds } from "@/enums/weapon";
import { WeaponTypeIds } from "@/enums/weapon-type";

const WeaponSource = {
  BattlePass: "Выбираемая награда при достижении 30 уровня боевого пропуска (Жемчужный гимн)",
  Chests: "Сундуки",
  EventWishExclusive: "Эксклюзивное оружие Молитвы события",
  Forged: "Кузница",
  PaimonsBargains: "Обмен Звёздного блеска в магазине Паймон",
  Wish: "Молитвы",
} as const;

export default {
  [WeaponIds.AThousandBlazingSuns]: Class.init([
    WeaponIds.AThousandBlazingSuns,
    "Тысяча ослепительных солнц",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Claymore,
    { min_value: 49, max_value: 741 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.024, 1), max_value: numberFormatPercent(0.110, 1) },
    ClassPassiveAbility.init([
      "Закат распаляет рассвет",
      "При использовании элементального навыка или взрыва стихии наделяет Палящим сиянием: повышает крит. урон на "
      + "<span class='text-version'>20%</span>/<span class='text-version'>25%</span>/"
      + "<span class='text-version'>30%</span>/<span class='text-version'>35%</span>/"
      + "<span class='text-version'>40%</span> и силу атаки на <span class='text-version'>28%</span>/"
      + "<span class='text-version'>35%</span>/<span class='text-version'>42%</span>/"
      + "<span class='text-version'>49%</span>/<span class='text-version'>56%</span> на 6 сек. Эффект может возникнуть "
      + "1 раз в 10 сек.<br>Нанесение элементального урона обычной или заряженной атакой во время действия Палящего "
      + "сияния продлевает длительность данного эффекта на 2 сек. Продление его действия может сработать 1 раз в 1 "
      + "сек., а максимум продления составляет 6 сек.<br>Кроме того, эффекты Палящего сияния усиливаются на 75%, если "
      + "экипированный персонаж находится в состоянии Благословения Ночного духа, а его длительность не отсчитывается, "
      + "когда экипированный персонаж вне поля боя.",
    ]),
  ]),
  [WeaponIds.AThousandFloatingDreams]: Class.init([
    WeaponIds.AThousandFloatingDreams,
    "Сновидения тысячи ночей",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 44, max_value: 542 },
    StatIds.ElementalMastery,
    { min_value: 58, max_value: 265 },
    ClassPassiveAbility.init([
      "Песнь тысячи рассветов",
      "Другие члены отряда предоставляют экипированному этим оружием персонажу усиления в зависимости от того, "
      + "совпадают их элементы, или нет. Если элементы совпадают, мастерство стихий повышается на "
      + "<span class='text-version'>32</span>/<span class='text-version'>40</span>/"
      + "<span class='text-version'>48</span>/<span class='text-version'>56</span>/"
      + "<span class='text-version'>64</span> ед. Если не совпадают, экипированный этим оружием персонаж получает "
      + "<span class='text-version'>10%</span>/<span class='text-version'>14%</span>/"
      + "<span class='text-version'>18%</span>/<span class='text-version'>22%</span>/"
      + "<span class='text-version'>26%</span> бонус урона своего элемента. Данные эффекты складываются до 3 раз. "
      + "Вдобавок мастерство стихий всех персонажей отряда поблизости (кроме экипированного этим оружием персонажа) "
      + "увеличивается на <span class='text-version'>40</span>/<span class='text-version'>42</span>/"
      + "<span class='text-version'>44</span>/<span class='text-version'>46</span>/"
      + "<span class='text-version'>48</span> единиц. Если этим оружием обладают и другие члены отряда, эффект "
      + "суммируется.",
    ]),
  ]),
  [WeaponIds.Absolution]: Class.init([
    WeaponIds.Absolution,
    "Отпущение грехов",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 48, max_value: 674 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.096, 1), max_value: numberFormatPercent(0.441, 1) },
    ClassPassiveAbility.init([
      "Пакт смерти",
      "Крит. урон увеличивается на <span class='text-version'>20%</span>/<span class='text-version'>25%</span>/"
      + "<span class='text-version'>30%</span>/<span class='text-version'>35%</span>/"
      + "<span class='text-version'>40%</span>. Когда Долг жизни возрастает, наносимый экипированным персонажем урон "
      + "увеличивается на <span class='text-version'>16%</span>/<span class='text-version'>20%</span>/"
      + "<span class='text-version'>24%</span>/<span class='text-version'>28%</span>/"
      + "<span class='text-version'>32%</span> на 6 сек. Этот эффект может складываться до 3 раз.",
    ]),
  ]),
  [WeaponIds.Akuoumaru]: Class.init([
    WeaponIds.Akuoumaru,
    "Акуомару",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Claymore,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.AlleyHunter]: Class.init([
    WeaponIds.AlleyHunter,
    "Охотник во тьме",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Bow,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.AmenomaKageuchi]: Class.init([
    WeaponIds.AmenomaKageuchi,
    "Амэнома Кагэути",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Sword,
    { min_value: 41, max_value: 454 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
  ]),
  [WeaponIds.AmosBow]: Class.init([
    WeaponIds.AmosBow,
    "Лук Амоса",
    5,
    WeaponSource.Wish,
    WeaponTypeIds.Bow,
    { min_value: 46, max_value: 608 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.108, 1), max_value: numberFormatPercent(0.496, 1) },
  ]),
  [WeaponIds.AquaSimulacra]: Class.init([
    WeaponIds.AquaSimulacra,
    "Аква симулякрум",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Bow,
    { min_value: 44, max_value: 542 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.192, 1), max_value: numberFormatPercent(0.882, 1) },
  ]),
  [WeaponIds.AquilaFavonia]: Class.init([
    WeaponIds.AquilaFavonia,
    "Меч Сокола",
    5,
    WeaponSource.Wish,
    WeaponTypeIds.Sword,
    { min_value: 48, max_value: 674 },
    StatIds.PhysicalDmgBonus,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.AshGravenDrinkingHorn]: Class.init([
    WeaponIds.AshGravenDrinkingHorn,
    "Пепельный рог",
    4,
    "Событие версии 5.0 «Следы мастерства»",
    WeaponTypeIds.Catalyst,
    { min_value: 42, max_value: 510 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.AstralVulturesCrimsonPlumage]: Class.init([
    WeaponIds.AstralVulturesCrimsonPlumage,
    "Алое перо звёздного грифа",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Bow,
    { min_value: 46, max_value: 608 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.144, 1), max_value: numberFormatPercent(0.662, 1) },
  ]),
  [WeaponIds.Azurelight]: Class.init([
    WeaponIds.Azurelight,
    "Лазурное сияние",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 48, max_value: 674 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.048, 1), max_value: numberFormatPercent(0.221, 1) },
  ]),
  [WeaponIds.BalladOfTheBoundlessBlue]: Class.init([
    WeaponIds.BalladOfTheBoundlessBlue,
    "Песнь необъятной лазури",
    4,
    "Событие версии 4.1 «Поэзия вод»",
    WeaponTypeIds.Catalyst,
    { min_value: 44, max_value: 565 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.067, 1), max_value: numberFormatPercent(0.306, 1) },
  ]),
  [WeaponIds.BalladOfTheFjords]: Class.init([
    WeaponIds.BalladOfTheFjords,
    "Баллада фьордов",
    4,
    WeaponSource.BattlePass,
    WeaponTypeIds.Polearm,
    { min_value: 42, max_value: 510 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
    ClassPassiveAbility.init([
      "История тундры",
      "Если в отряде не менее 3 персонажей разных элементов, <span class='text-info'>мастерство стихий</span> "
      + "увеличивается на <span class='text-version'>120</span>/<span class='text-version'>150</span>/"
      + "<span class='text-version'>180</span>/<span class='text-version'>210</span>/"
      + "<span class='text-version'>240</span> ед.",
    ]),
  ]),
  [WeaponIds.BeaconOfTheReedSea]: Class.init([
    WeaponIds.BeaconOfTheReedSea,
    "Маяк тростникового моря",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Claymore,
    { min_value: 46, max_value: 608 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.072, 1), max_value: numberFormatPercent(0.331, 1) },
  ]),
  [WeaponIds.BlackTassel]: Class.init([
    WeaponIds.BlackTassel,
    "Чёрная кисть",
    3,
    WeaponSource.Wish,
    WeaponTypeIds.Polearm,
    { min_value: 38, max_value: 354 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.102, 1), max_value: numberFormatPercent(0.469, 1) },
  ]),
  [WeaponIds.BlackcliffAgate]: Class.init([
    WeaponIds.BlackcliffAgate,
    "Черногорский агат",
    4,
    WeaponSource.PaimonsBargains,
    WeaponTypeIds.Catalyst,
    { min_value: 42, max_value: 510 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
  ]),
  [WeaponIds.BlackcliffLongsword]: Class.init([
    WeaponIds.BlackcliffLongsword,
    "Черногорский длинный меч",
    4,
    WeaponSource.PaimonsBargains,
    WeaponTypeIds.Sword,
    { min_value: 44, max_value: 565 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.080, 1), max_value: numberFormatPercent(0.368, 1) },
  ]),
  [WeaponIds.BlackcliffPole]: Class.init([
    WeaponIds.BlackcliffPole,
    "Черногорская пика",
    4,
    WeaponSource.PaimonsBargains,
    WeaponTypeIds.Polearm,
    { min_value: 42, max_value: 510 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
    ClassPassiveAbility.init([
      "Преследование побеждённых",
      "Побеждённые противники увеличивают <span class='text-primary'>силу атаки</span> на "
      + "<span class='text-primary'>12%</span>/<span class='text-primary'>15%</span>/"
      + "<span class='text-primary'>18%</span>/<span class='text-primary'>21%</span>/"
      + "<span class='text-primary'>24%</span>. Длится 30 сек. Эффект может складываться до 3 раз. Длительность "
      + "добавочных эффектов друг от друга не зависит.",
    ]),
  ]),
  [WeaponIds.BlackcliffSlasher]: Class.init([
    WeaponIds.BlackcliffSlasher,
    "Черногорская бритва",
    4,
    WeaponSource.PaimonsBargains,
    WeaponTypeIds.Claymore,
    { min_value: 42, max_value: 510 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
  ]),
  [WeaponIds.BlackcliffWarbow]: Class.init([
    WeaponIds.BlackcliffWarbow,
    "Черногорский боевой лук",
    4,
    WeaponSource.PaimonsBargains,
    WeaponTypeIds.Bow,
    { min_value: 44, max_value: 565 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.080, 1), max_value: numberFormatPercent(0.368, 1) },
  ]),
  [WeaponIds.BlackmarrowLantern]: Class.init([
    WeaponIds.BlackmarrowLantern,
    "Фонарь чёрной сердцевины",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Catalyst,
    { min_value: 41, max_value: 454 },
    StatIds.ElementalMastery,
    { min_value: 48, max_value: 221 },
  ]),
  [WeaponIds.BloodsoakedRuins]: Class.init([
    WeaponIds.BloodsoakedRuins,
    "Окровавленные руины",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 48, max_value: 674 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.048, 1), max_value: numberFormatPercent(0.221, 1) },
    ClassPassiveAbility.init([
      "Дань скорби",
      "После применения взрыва стихии повышает урон реакции Лунный заряд экипированного персонажа, наносимый врагу, на "
      + "<span class='text-version'>36%</span>/<span class='text-version'>48%</span>/"
      + "<span class='text-version'>60%</span>/<span class='text-version'>72%</span>/"
      + "<span class='text-version'>84%</span> на 3,5 сек. Кроме того, после активации реакции Лунный заряд "
      + "экипированным персонажем активируется эффект Реквием руин: крит. урон повышается на "
      + "<span class='text-version'>28%</span>/<span class='text-version'>35%</span>/"
      + "<span class='text-version'>42%</span>/<span class='text-version'>49%</span>/"
      + "<span class='text-version'>56%</span> на 6 сек., а также экипированный персонаж восстанавливает "
      + "<span class='text-version'>12</span>/<span class='text-version'>13</span>/"
      + "<span class='text-version'>14</span>/<span class='text-version'>15</span>/"
      + "<span class='text-version'>16</span> ед. энергии. Восстанавливать энергию таким способом можно раз в 14 сек.",
    ]),
  ]),
  [WeaponIds.BloodtaintedGreatsword]: Class.init([
    WeaponIds.BloodtaintedGreatsword,
    "Меч драконьей крови",
    3,
    WeaponSource.Wish,
    WeaponTypeIds.Claymore,
    { min_value: 38, max_value: 354 },
    StatIds.ElementalMastery,
    { min_value: 41, max_value: 187 },
  ]),
  [WeaponIds.CalamityOfEshu]: Class.init([
    WeaponIds.CalamityOfEshu,
    "Бедствие Эшу",
    4,
    "Событие версии 5.2 «Свитки поиска духов Иктоми»",
    WeaponTypeIds.Sword,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.CalamityQueller]: Class.init([
    WeaponIds.CalamityQueller,
    "Усмиритель бед",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 49, max_value: 741 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.036, 1), max_value: numberFormatPercent(0.165, 1) },
    ClassPassiveAbility.init([
      "Завет погибели",
      "Даёт <span class='text-version'>12%</span>/<span class='text-version'>15%</span>/"
      + "<span class='text-version'>18%</span>/<span class='text-version'>21%</span>/"
      + "<span class='text-version'>24%</span> <span class='text-info'>бонус урона всеми элементами</span>. Запуск "
      + "<span class='text-info'>элементального навыка</span> накладывает Совершенствование на 20 сек., в результате "
      + "чего <span class='text-info'>сила атаки</span> увеличивается на <span class='text-version'>3,2%</span>/"
      + "<span class='text-version'>4%</span>/<span class='text-version'>4,8%</span>/"
      + "<span class='text-version'>5,6%</span>/<span class='text-version'>6,4%</span> в секунду. Может складываться "
      + "до 6 раз. Когда персонаж, экипированный этим оружием, не на поле боя, "
      + "<span class='text-info'>бонус атаки</span> от Совершенствования удваивается.",
    ]),
  ]),
  [WeaponIds.CashflowSupervision]: Class.init([
    WeaponIds.CashflowSupervision,
    "Казначейский надзор",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 48, max_value: 674 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.048, 1), max_value: numberFormatPercent(0.221, 1) },
  ]),
  [WeaponIds.ChainBreaker]: Class.init([
    WeaponIds.ChainBreaker,
    "Разбивающий цепи",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Bow,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.CinnabarSpindle]: Class.init([
    WeaponIds.CinnabarSpindle,
    "Киноварное веретено",
    4,
    "Событие версии 2.3 «Белая пыль и снежная тень»",
    WeaponTypeIds.Sword,
    { min_value: 41, max_value: 454 },
    StatIds.DefPercentage,
    { min_value: numberFormatPercent(0.150, 1), max_value: numberFormatPercent(0.690, 1) },
    ClassPassiveAbility.init([
      "Добродетель",
      "Урон <span class='text-info'>элементального навыка</span> повышается на <span class='text-version'>40%</span>/"
      + "<span class='text-version'>50%</span>/<span class='text-version'>60%</span>/"
      + "<span class='text-version'>70%</span>/<span class='text-version'>80%</span> от "
      + "<span class='text-info'>защиты</span>. Эффект возникает раз в 1,5 сек. и исчезает через 0,1 сек. после "
      + "нанесения урона врагу <span class='text-info'>элементальным навыком</span>.",
    ]),
  ]),
  [WeaponIds.Cloudforged]: Class.init([
    WeaponIds.Cloudforged,
    "Выкованный из облаков",
    4,
    "Событие версии 4.7 «Моделирование взаимного повышения безопасности»",
    WeaponTypeIds.Bow,
    { min_value: 42, max_value: 510 },
    StatIds.ElementalMastery,
    { min_value: 36, max_value: 165 },
  ]),
  [WeaponIds.CompoundBow]: Class.init([
    WeaponIds.CompoundBow,
    "Составной лук",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Bow,
    { min_value: 41, max_value: 454 },
    StatIds.PhysicalDmgBonus,
    { min_value: numberFormatPercent(0.150, 1), max_value: numberFormatPercent(0.690, 1) },
  ]),
  [WeaponIds.CoolSteel]: Class.init([
    WeaponIds.CoolSteel,
    "Холодное лезвие",
    3,
    [WeaponSource.Chests, WeaponSource.Wish],
    WeaponTypeIds.Sword,
    { min_value: 39, max_value: 401 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.077, 1), max_value: numberFormatPercent(0.352, 1) },
  ]),
  [WeaponIds.CranesEchoingCall]: Class.init([
    WeaponIds.CranesEchoingCall,
    "Звонкий клич журавля",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 49, max_value: 741 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.036, 1), max_value: numberFormatPercent(0.165, 1) },
  ]),
  [WeaponIds.CrescentPike]: Class.init([
    WeaponIds.CrescentPike,
    "Пика полумесяца",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Polearm,
    { min_value: 44, max_value: 565 },
    StatIds.PhysicalDmgBonus,
    { min_value: numberFormatPercent(0.075, 1), max_value: numberFormatPercent(0.345, 1) },
  ]),
  [WeaponIds.CrimsonMoonsSemblance]: Class.init([
    WeaponIds.CrimsonMoonsSemblance,
    "Очертания алой луны",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 48, max_value: 674 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.048, 1), max_value: numberFormatPercent(0.221, 1) },
    ClassPassiveAbility.init([
      "Тень пепельного солнца",
      "Попадание <span class='text-info'>заряженной атакой</span> по врагу наделяет "
      + "<span class='text-info'>Долгом жизни</span>, равным 25% от макс. <span class='text-info'>HP</span>. Этот "
      + "эффект может возникнуть раз в 14 сек. Кроме того, пока экипированный персонаж наделён "
      + "<span class='text-info'>Долгом жизни</span>, наносимый им урон повышается на "
      + "<span class='text-version'>12%</span>/<span class='text-version'>16%</span>/"
      + "<span class='text-version'>20%</span>/<span class='text-version'>24%</span>/"
      + "<span class='text-version'>28%</span>. Если значение <span class='text-info'>Долга жизни</span> равно или "
      + "превышает 30% от макс. <span class='text-info'>HP</span>, наносимый урон дополнительно повышается на "
      + "<span class='text-version'>24%</span>/<span class='text-version'>32%</span>/"
      + "<span class='text-version'>40%</span>/<span class='text-version'>48%</span>/"
      + "<span class='text-version'>56%</span>.",
    ]),
  ]),
  [WeaponIds.DarkIronSword]: Class.init([
    WeaponIds.DarkIronSword,
    "Тёмный железный меч",
    3,
    ["Поговорить с Острым Чэнем в гавани Ли Юэ", "Обычный сундук в зале Ваншань"],
    WeaponTypeIds.Sword,
    { min_value: 39, max_value: 401 },
    StatIds.ElementalMastery,
    { min_value: 31, max_value: 141 },
  ]),
  [WeaponIds.DawningFrost]: Class.init([
    WeaponIds.DawningFrost,
    "Рассветный иней",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 42, max_value: 510 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
    ClassPassiveAbility.init([
      "Сны глубокой ночи",
      "На 10 сек. после попадания заряженной атаки по противнику мастерство стихий повышается на "
      + "<span class='text-version'>72</span>/<span class='text-version'>90</span>/"
      + "<span class='text-version'>108</span>/<span class='text-version'>126</span>/"
      + "<span class='text-version'>144</span> ед. На 10 сек. после попадания элементального навыка по противнику "
      + "мастерство стихий повышается на <span class='text-version'>48</span>/<span class='text-version'>60</span>/"
      + "<span class='text-version'>72</span>/<span class='text-version'>84</span>/"
      + "<span class='text-version'>96</span> ед.",
    ]),
  ]),
  [WeaponIds.Deathmatch]: Class.init([
    WeaponIds.Deathmatch,
    "Смертельный бой",
    4,
    WeaponSource.BattlePass,
    WeaponTypeIds.Polearm,
    { min_value: 41, max_value: 454 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.080, 1), max_value: numberFormatPercent(0.368, 1) },
    ClassPassiveAbility.init([
      "Гладиатор",
      "Если рядом 2 врага и более, <span class='text-info'>сила атаки</span> и <span class='text-info'>защита</span> "
      + "увеличиваются на <span class='text-version'>16%</span>/<span class='text-version'>20%</span>/"
      + "<span class='text-version'>24%</span>/<span class='text-version'>28%</span>/"
      + "<span class='text-version'>32%</span>; если рядом менее 2 врагов, <span class='text-info'>сила атаки</span> "
      + "увеличивается на <span class='text-version'>24%</span>/<span class='text-version'>30%</span>/"
      + "<span class='text-version'>36%</span>/<span class='text-version'>42%</span>/"
      + "<span class='text-version'>48%</span>.",
    ]),
  ]),
  [WeaponIds.DebateClub]: Class.init([
    WeaponIds.DebateClub,
    "Дубина переговоров",
    3,
    WeaponSource.Wish,
    WeaponTypeIds.Claymore,
    { min_value: 39, max_value: 401 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.077, 1), max_value: numberFormatPercent(0.352, 1) },
  ]),
  [WeaponIds.DialoguesOfTheDesertSages]: Class.init([
    WeaponIds.DialoguesOfTheDesertSages,
    "Диалог пустынных мудрецов",
    4,
    "Событие версии 4.5 «Алхимический прорыв»",
    WeaponTypeIds.Polearm,
    { min_value: 42, max_value: 510 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.DodocoTales]: Class.init([
    WeaponIds.DodocoTales,
    "Истории Додоко",
    4,
    "Событие версии 1.6 «Лето! Остров? Приключение!»",
    WeaponTypeIds.Catalyst,
    { min_value: 41, max_value: 454 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
  ]),
  [WeaponIds.DragonsBane]: Class.init([
    WeaponIds.DragonsBane,
    "Гроза драконов",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Polearm,
    { min_value: 41, max_value: 454 },
    StatIds.ElementalMastery,
    { min_value: 48, max_value: 221 },
    ClassPassiveAbility.init([
      "Погибель пламени и воды",
      "Увеличивает на <span class='text-primary'>20%</span>/<span class='text-primary'>24%</span>/"
      + "<span class='text-primary'>28%</span>/<span class='text-primary'>32%</span>/"
      + "<span class='text-primary'>36%</span> урон против врагов, находящихся под действием "
      + "<span class='text-primary'>Гидро</span> или <span class='text-primary'>Пиро</span> элементов.",
    ]),
  ]),
  [WeaponIds.DragonspineSpear]: Class.init([
    WeaponIds.DragonspineSpear,
    "Копьё Драконьего хребта",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Polearm,
    { min_value: 41, max_value: 454 },
    StatIds.PhysicalDmgBonus,
    { min_value: numberFormatPercent(0.150, 1), max_value: numberFormatPercent(0.690, 1) },
  ]),
  [WeaponIds.EarthShaker]: Class.init([
    WeaponIds.EarthShaker,
    "Сотрясающий землю",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Claymore,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.ElegyForTheEnd]: Class.init([
    WeaponIds.ElegyForTheEnd,
    "Элегия погибели",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Bow,
    { min_value: 46, max_value: 608 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
    ClassPassiveAbility.init([
      "Песнь разлуки",
      "Часть Тысячелетней симфонии, что блуждает среди ветров. Увеличивает "
      + "<span class='text-info'>мастерство стихий</span> на <span class='text-version'>60</span>/"
      + "<span class='text-version'>75</span>/<span class='text-version'>90</span>/"
      + "<span class='text-version'>105</span>/<span class='text-version'>120</span> ед. При попадании "
      + "<span class='text-info'>элементальным навыком</span> или <span class='text-info'>взрывом стихии</span> по "
      + "противнику персонаж получает один Талисман воспоминаний. Он может возникнуть раз в 0,2 сек., даже когда "
      + "персонаж в отряде, но не активен. Четыре собранных Талисмана воспоминаний пропадают, на 12 сек. наделяя "
      + "ближайших членов отряда эффектом «Тысячелетняя симфония: Прощальный гимн». Их "
      + "<span class='text-info'>мастерство стихии</span> повышается на <span class='text-version'>100</span>/"
      + "<span class='text-version'>125</span>/<span class='text-version'>150</span>/"
      + "<span class='text-version'>175</span>/<span class='text-version'>200</span> ед., а "
      + "<span class='text-info'>сила атаки</span> - на <span class='text-version'>20%</span>/"
      + "<span class='text-version'>25%</span>/<span class='text-version'>30%</span>/"
      + "<span class='text-version'>35%</span>/<span class='text-version'>40%</span>. В течение 20 сек. после "
      + "активации эффекта Талисманы воспоминаний появляться не будут. Тысячелетняя симфония с эффектами, влияющими на "
      + "те же навыки, не складывается.",
    ]),
  ]),
  [WeaponIds.EmeraldOrb]: Class.init([
    WeaponIds.EmeraldOrb,
    "Изумрудный шар",
    3,
    WeaponSource.Wish,
    WeaponTypeIds.Catalyst,
    { min_value: 40, max_value: 448 },
    StatIds.ElementalMastery,
    { min_value: 20, max_value: 94 },
  ]),
  [WeaponIds.EndOfTheLine]: Class.init([
    WeaponIds.EndOfTheLine,
    "Иссушитель",
    4,
    "Ассоциация рыболовов Сумеру",
    WeaponTypeIds.Bow,
    { min_value: 42, max_value: 510 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.100, 1), max_value: numberFormatPercent(0.459, 1) },
  ]),
  [WeaponIds.EngulfingLightning]: Class.init([
    WeaponIds.EngulfingLightning,
    "Сияющая жатва",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 46, max_value: 608 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
  ]),
  [WeaponIds.EtherlightSpindlelute]: Class.init([
    WeaponIds.EtherlightSpindlelute,
    "Лютня ткача света",
    4,
    "Событие версии Луна I «Дзынь-Клац битва»",
    WeaponTypeIds.Catalyst,
    { min_value: 42, max_value: 510 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.100, 1), max_value: numberFormatPercent(0.459, 1) },
    ClassPassiveAbility.init([
      "Последний певец",
      "После использования элементального навыка мастерство стихий экипированного персонажа повышается на "
      + "<span class='text-version'>100</span>/<span class='text-version'>125</span>/"
      + "<span class='text-version'>150</span>/<span class='text-version'>175</span>/"
      + "<span class='text-version'>200</span> ед. на 20 сек.",
    ]),
  ]),
  [WeaponIds.EverlastingMoonglow]: Class.init([
    WeaponIds.EverlastingMoonglow,
    "Вечное лунное сияние",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 46, max_value: 608 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.108, 1), max_value: numberFormatPercent(0.496, 1) },
  ]),
  [WeaponIds.EyeOfPerception]: Class.init([
    WeaponIds.EyeOfPerception,
    "Око сознания",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Catalyst,
    { min_value: 41, max_value: 454 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
  ]),
  [WeaponIds.FadingTwilight]: Class.init([
    WeaponIds.FadingTwilight,
    "Гаснущие сумерки",
    4,
    "Событие версии 2.7 «Опасная тропа»",
    WeaponTypeIds.Bow,
    { min_value: 44, max_value: 565 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.067, 1), max_value: numberFormatPercent(0.306, 1) },
  ]),
  [WeaponIds.FangOfTheMountainKing]: Class.init([
    WeaponIds.FangOfTheMountainKing,
    "Клык Горного короля",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Claymore,
    { min_value: 49, max_value: 741 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.024, 1), max_value: numberFormatPercent(0.110, 1) },
  ]),
  [WeaponIds.FavoniusCodex]: Class.init([
    WeaponIds.FavoniusCodex,
    "Кодекс Фавония",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Catalyst,
    { min_value: 42, max_value: 510 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.100, 1), max_value: numberFormatPercent(0.459, 1) },
  ]),
  [WeaponIds.FavoniusGreatsword]: Class.init([
    WeaponIds.FavoniusGreatsword,
    "Двуручный меч Фавония",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Claymore,
    { min_value: 41, max_value: 454 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.133, 1), max_value: numberFormatPercent(0.613, 1) },
    ClassPassiveAbility.init([
      "Дружественный бриз",
      "Критические атаки имеют <span class='text-version'>60%</span>/<span class='text-version'>70%</span>/"
      + "<span class='text-version'>80%</span>/<span class='text-version'>90%</span>/"
      + "<span class='text-version'>100%</span> шанс создать <span class='text-info'>элементальные частицы</span>, "
      + "которые восстанавливают 6 ед. энергии. Возникает раз в <span class='text-version'>12</span>/"
      + "<span class='text-version'>10,5</span>/<span class='text-version'>9</span>/"
      + "<span class='text-version'>7,5</span>/<span class='text-version'>6</span> сек.",
    ]),
  ]),
  [WeaponIds.FavoniusLance]: Class.init([
    WeaponIds.FavoniusLance,
    "Копьё Фавония",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Polearm,
    { min_value: 44, max_value: 565 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.067, 1), max_value: numberFormatPercent(0.306, 1) },
    ClassPassiveAbility.init([
      "Дружественный бриз",
      "Критические атаки имеют <span class='text-primary'>60%</span>/<span class='text-primary'>70%</span>/"
      + "<span class='text-primary'>80%</span>/<span class='text-primary'>90%</span>/"
      + "<span class='text-primary'>100%</span> шанс создать элементальные частицы, которые восстанавливают 6 ед. "
      + "энергии. Возникает раз в <span class='text-primary'>12</span>/<span class='text-primary'>10,5</span>/"
      + "<span class='text-primary'>9</span>/<span class='text-primary'>7,5</span>/<span class='text-primary'>6</span> "
      + "сек.",
    ]),
  ]),
  [WeaponIds.FavoniusSword]: Class.init([
    WeaponIds.FavoniusSword,
    "Меч Фавония",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Sword,
    { min_value: 41, max_value: 454 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.133, 1), max_value: numberFormatPercent(0.613, 1) },
  ]),
  [WeaponIds.FavoniusWarbow]: Class.init([
    WeaponIds.FavoniusWarbow,
    "Боевой лук Фавония",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Bow,
    { min_value: 41, max_value: 454 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.133, 1), max_value: numberFormatPercent(0.613, 1) },
    ClassPassiveAbility.init([
      "Дружественный бриз",
      "Критические атаки имеют <span class='text-version'>60%</span>/<span class='text-version'>70%</span>/"
      + "<span class='text-version'>80%</span>/<span class='text-version'>90%</span>/"
      + "<span class='text-version'>100%</span> шанс создать <span class='text-info'>элементальные частицы</span>, "
      + "которые восстанавливают 6 ед. энергии. Возникает раз в <span class='text-version'>12</span>/"
      + "<span class='text-version'>10,5</span>/<span class='text-version'>9</span>/"
      + "<span class='text-version'>7,5</span>/<span class='text-version'>6</span> сек.",
    ]),
  ]),
  [WeaponIds.FerrousShadow]: Class.init([
    WeaponIds.FerrousShadow,
    "Металлическая тень",
    3,
    WeaponSource.Wish,
    WeaponTypeIds.Claymore,
    { min_value: 39, max_value: 401 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.077, 1), max_value: numberFormatPercent(0.352, 1) },
  ]),
  [WeaponIds.FesteringDesire]: Class.init([
    WeaponIds.FesteringDesire,
    "Осквернённое желание",
    4,
    "Событие версии 1.2 «Принц мела и дракон»",
    WeaponTypeIds.Sword,
    { min_value: 42, max_value: 510 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.100, 1), max_value: numberFormatPercent(0.459, 1) },
  ]),
  [WeaponIds.FilletBlade]: Class.init([
    WeaponIds.FilletBlade,
    "Филейный нож",
    3,
    WeaponSource.Chests,
    WeaponTypeIds.Sword,
    { min_value: 39, max_value: 401 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.077, 1), max_value: numberFormatPercent(0.352, 1) },
  ]),
  [WeaponIds.FinaleOfTheDeep]: Class.init([
    WeaponIds.FinaleOfTheDeep,
    "Грандиозный финал глубин",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Sword,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.FlameForgedInsight]: Class.init([
    WeaponIds.FlameForgedInsight,
    "Выкованное пламенем озарение",
    4,
    "Событие версии 5.8 «Лето! Жара? Курорт!»",
    WeaponTypeIds.Claymore,
    { min_value: 42, max_value: 510 },
    StatIds.ElementalMastery,
    { min_value: 36, max_value: 165 },
    ClassPassiveAbility.init([
      "Разум в расцвете",
      "Активация реакций " + elementalReactionLink(ElementalReactionIds.ElectroCharged, "Заряжен") + ", "
      + elementalReactionLink(ElementalReactionIds.LunarCharged, "Лунный заряд") + ", "
      + elementalReactionLink(ElementalReactionIds.Bloom, "Бутонизация") + " или "
      + elementalReactionLink(ElementalReactionIds.LunarBloom, "Лунная бутонизация") + " восстанавливает "
      + "<span class='text-version'>12</span>/<span class='text-version'>15</span>/"
      + "<span class='text-version'>18</span>/<span class='text-version'>21</span>/"
      + "<span class='text-version'>24</span> ед. <span class='text-info'>энергии</span> и на 15 сек. повышает "
      + "<span class='text-info'>мастерство стихий</span> на <span class='text-version'>60</span>/"
      + "<span class='text-version'>75</span>/<span class='text-version'>90</span>/"
      + "<span class='text-version'>105</span>/<span class='text-version'>120</span> ед. Эффект может возникнуть один "
      + "раз в 15 сек. и срабатывает, даже когда экипированный персонаж не на поле боя.",
    ]),
  ]),
  [WeaponIds.FleuveCendreFerryman]: Class.init([
    WeaponIds.FleuveCendreFerryman,
    "Перевозчик Флёв Сандр",
    4,
    "Обмен в Ассоциации рыболовов Фонтейна",
    WeaponTypeIds.Sword,
    { min_value: 42, max_value: 510 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.100, 1), max_value: numberFormatPercent(0.459, 1) },
  ]),
  [WeaponIds.FlowerWreathedFeathers]: Class.init([
    WeaponIds.FlowerWreathedFeathers,
    "Украшенные цветами перья",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Bow,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.FlowingPurity]: Class.init([
    WeaponIds.FlowingPurity,
    "Сверкание чистых вод",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Catalyst,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.FluteOfEzpitzal]: Class.init([
    WeaponIds.FluteOfEzpitzal,
    "Флейта Эспицаль",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Sword,
    { min_value: 41, max_value: 454 },
    StatIds.DefPercentage,
    { min_value: numberFormatPercent(0.150, 1), max_value: numberFormatPercent(0.690, 1) },
  ]),
  [WeaponIds.FootprintOfTheRainbow]: Class.init([
    WeaponIds.FootprintOfTheRainbow,
    "След радуги",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Polearm,
    { min_value: 42, max_value: 510 },
    StatIds.DefPercentage,
    { min_value: numberFormatPercent(0.113, 1), max_value: numberFormatPercent(0.517, 1) },
  ]),
  [WeaponIds.ForestRegalia]: Class.init([
    WeaponIds.ForestRegalia,
    "Регалия леса",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Claymore,
    { min_value: 44, max_value: 565 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.067, 1), max_value: numberFormatPercent(0.306, 1) },
  ]),
  [WeaponIds.FracturedHalo]: Class.init([
    WeaponIds.FracturedHalo,
    "Расколотый ореол",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 46, max_value: 608 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.144, 1), max_value: numberFormatPercent(0.662, 1) },
    ClassPassiveAbility.init([
      "Очищающий венец",
      "После активации <span class='text-primary'>элементального навыка</span> или "
      + "<span class='text-primary'>взрыва стихии сила атаки</span> увеличивается на "
      + "<span class='text-primary'>24%</span>/<span class='text-primary'>30%</span>/"
      + "<span class='text-primary'>36%</span>/<span class='text-primary'>42%</span>/"
      + "<span class='text-primary'>48%</span> на 20 сек. Если экипированный персонаж в это время создаёт "
      + "<span class='text-primary'>щит</span>, то на 20 сек. он получает эффект Электризующего эдикта: урон реакции "
      + "<span class='text-primary'>Лунный заряд</span> всех членов отряда поблизости увеличивается на "
      + "<span class='text-primary'>40%</span>/<span class='text-primary'>50%</span>/"
      + "<span class='text-primary'>60%</span>/<span class='text-primary'>70%</span>/"
      + "<span class='text-primary'>80%</span>.",
    ]),
  ]),
  [WeaponIds.FreedomSworn]: Class.init([
    WeaponIds.FreedomSworn,
    "Клятва свободы",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 46, max_value: 608 },
    StatIds.ElementalMastery,
    { min_value: 43, max_value: 198 },
  ]),
  [WeaponIds.Frostbearer]: Class.init([
    WeaponIds.Frostbearer,
    "Плод вечной мерзлоты",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Catalyst,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.FruitOfFulfillment]: Class.init([
    WeaponIds.FruitOfFulfillment,
    "Плод восполнения",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Catalyst,
    { min_value: 42, max_value: 510 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.100, 1), max_value: numberFormatPercent(0.459, 1) },
  ]),
  [WeaponIds.FruitfulHook]: Class.init([
    WeaponIds.FruitfulHook,
    "Плодотворный крюк",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Claymore,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.HakushinRing]: Class.init([
    WeaponIds.HakushinRing,
    "Кольцо Хакусин",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Catalyst,
    { min_value: 44, max_value: 565 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.067, 1), max_value: numberFormatPercent(0.306, 1) },
  ]),
  [WeaponIds.Halberd]: Class.init([
    WeaponIds.Halberd,
    "Алебарда Миллелита",
    3,
    "Сундуки Ли Юэ",
    WeaponTypeIds.Polearm,
    { min_value: 40, max_value: 448 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.051, 1), max_value: numberFormatPercent(0.235, 1) },
  ]),
  [WeaponIds.Hamayumi]: Class.init([
    WeaponIds.Hamayumi,
    "Хамаюми",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Bow,
    { min_value: 41, max_value: 454 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
  ]),
  [WeaponIds.HaranGeppakuFutsu]: Class.init([
    WeaponIds.HaranGeppakuFutsu,
    "Харан гэппаку фуцу",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 46, max_value: 608 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.072, 1), max_value: numberFormatPercent(0.331, 1) },
  ]),
  [WeaponIds.HarbingerOfDawn]: Class.init([
    WeaponIds.HarbingerOfDawn,
    "Предвестник зари",
    3,
    WeaponSource.Wish,
    WeaponTypeIds.Sword,
    { min_value: 39, max_value: 401 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.102, 1), max_value: numberFormatPercent(0.469, 1) },
    ClassPassiveAbility.init([
      "Энергичный",
      "Увеличивает <span class='text-info'>шанс крит. попадания</span> на <span class='text-version'>14%</span>/"
      + "<span class='text-version'>17,5%</span>/<span class='text-version'>21%</span>/"
      + "<span class='text-version'>24,5%</span>/<span class='text-version'>28%</span> при "
      + "<span class='text-info'>HP</span> выше 90%.",
    ]),
  ]),
  [WeaponIds.HuntersPath]: Class.init([
    WeaponIds.HuntersPath,
    "Охотничья тропа",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Bow,
    { min_value: 44, max_value: 542 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.096, 1), max_value: numberFormatPercent(0.441, 1) },
  ]),
  [WeaponIds.IbisPiercer]: Class.init([
    WeaponIds.IbisPiercer,
    "Клюв ибиса",
    4,
    "Событие версии 3.7 «Дуэль! К вершинам карточного мастерства!»",
    WeaponTypeIds.Bow,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.IronSting]: Class.init([
    WeaponIds.IronSting,
    "Стальное жало",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Sword,
    { min_value: 42, max_value: 510 },
    StatIds.ElementalMastery,
    { min_value: 36, max_value: 165 },
    ClassPassiveAbility.init([
      "Заряженное жало",
      "Нанесённый <span class='text-info'>элементальный урон</span> увеличивает весь наносимый "
      + "<span class='text-info'>урон</span> на <span class='text-version'>6%</span>/"
      + "<span class='text-version'>7,5%</span>/<span class='text-version'>9%</span>/"
      + "<span class='text-version'>10,5%</span>/<span class='text-version'>12%</span> на 6 сек. Может складываться до "
      + "2 раз. Может возникнуть раз в 1 сек.",
    ]),
  ]),
  [WeaponIds.JadefallsSplendor]: Class.init([
    WeaponIds.JadefallsSplendor,
    "Великолепие лазурного свода",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 46, max_value: 608 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.108, 1), max_value: numberFormatPercent(0.496, 1) },
  ]),
  [WeaponIds.KagotsurubeIsshin]: Class.init([
    WeaponIds.KagotsurubeIsshin,
    "Кагоцурубэ Иссин",
    4,
    "Задание легенд Кадзухи «Рыжий клён. Глава I. Странная безлюдная дорога»",
    WeaponTypeIds.Sword,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.KagurasVerity]: Class.init([
    WeaponIds.KagurasVerity,
    "Истина кагура",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 46, max_value: 608 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.144, 1), max_value: numberFormatPercent(0.662, 1) },
  ]),
  [WeaponIds.KatsuragikiriNagamasa]: Class.init([
    WeaponIds.KatsuragikiriNagamasa,
    "Кацурагикири Нагамаса",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Claymore,
    { min_value: 42, max_value: 510 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.100, 1), max_value: numberFormatPercent(0.459, 1) },
  ]),
  [WeaponIds.KeyOfKhajNisut]: Class.init([
    WeaponIds.KeyOfKhajNisut,
    "Ключ Хадж-нисут",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 44, max_value: 542 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.144, 1), max_value: numberFormatPercent(0.662, 1) },
  ]),
  [WeaponIds.KingsSquire]: Class.init([
    WeaponIds.KingsSquire,
    "Приближённый короля",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Bow,
    { min_value: 41, max_value: 454 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
  ]),
  [WeaponIds.KitainCrossSpear]: Class.init([
    WeaponIds.KitainCrossSpear,
    "Крест-копьё Китаин",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Polearm,
    { min_value: 44, max_value: 565 },
    StatIds.ElementalMastery,
    { min_value: 24, max_value: 110 },
    ClassPassiveAbility.init([
      "Мастерство самурая",
      "Увеличивает урон <span class='text-primary'>элементального навыка</span> на "
      + "<span class='text-primary'>6%</span>/<span class='text-primary'>7,5%</span>/"
      + "<span class='text-primary'>9%</span>/<span class='text-primary'>10,5%</span>/"
      + "<span class='text-primary'>12%</span>. Когда <span class='text-primary'>элементальный навык</span> поражает "
      + "противника, персонаж теряет 3 единицы энергии, но восстанавливает <span class='text-primary'>3</span>/"
      + "<span class='text-primary'>3,5</span>/<span class='text-primary'>4</span>/"
      + "<span class='text-primary'>4,5</span>/<span class='text-primary'>5</span> единицы энергии каждые 2 сек. в "
      + "течение следующих 6 сек. Эффект может возникнуть один раз в 10 сек. Эффект может сработать, даже когда "
      + "персонаж не находится на поле.",
    ]),
  ]),
  [WeaponIds.LightOfFoliarIncision]: Class.init([
    WeaponIds.LightOfFoliarIncision,
    "Свет лиственного разреза",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 44, max_value: 542 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.192, 1), max_value: numberFormatPercent(0.882, 1) },
    ClassPassiveAbility.init([
      "Остриё белой луны",
      "<span class='text-info'>Шанс крит. попадания</span> увеличивается на <span class='text-version'>4%</span>/"
      + "<span class='text-version'>5%</span>/<span class='text-version'>6%</span>/"
      + "<span class='text-version'>7%</span>/<span class='text-version'>8%</span>. Когда "
      + "<span class='text-info'>обычная атака</span> наносит <span class='text-info'>элементальный урон</span>, она "
      + "даёт эффект Лиственного выреза: <span class='text-info'>урон обычных атак</span> и "
      + "<span class='text-info'>элементальных навыков</span> повышается на <span class='text-version'>120%</span>/"
      + "<span class='text-version'>150%</span>/<span class='text-version'>180%</span>/"
      + "<span class='text-version'>210%</span>/<span class='text-version'>240%</span> от "
      + "<span class='text-info'>мастерства стихий</span>. После 28 активаций или через 12 сек. эффект исчезнет. "
      + "Лиственный вырез можно получить не чаще одного раза в 12 сек.",
    ]),
  ]),
  [WeaponIds.LionsRoar]: Class.init([
    WeaponIds.LionsRoar,
    "Драконий рык",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Sword,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.LithicBlade]: Class.init([
    WeaponIds.LithicBlade,
    "Каменный меч",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Claymore,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.LithicSpear]: Class.init([
    WeaponIds.LithicSpear,
    "Каменное копьё",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.LostPrayerToTheSacredWinds]: Class.init([
    WeaponIds.LostPrayerToTheSacredWinds,
    "Молитва святым ветрам",
    5,
    WeaponSource.Wish,
    WeaponTypeIds.Catalyst,
    { min_value: 46, max_value: 608 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.072, 1), max_value: numberFormatPercent(0.331, 1) },
  ]),
  [WeaponIds.LumidouceElegy]: Class.init([
    WeaponIds.LumidouceElegy,
    "Элегия Люмидус",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 46, max_value: 608 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.072, 1), max_value: numberFormatPercent(0.331, 1) },
    ClassPassiveAbility.init([
      "Увертюра яркого рассвета",
      "Увеличивает <span class='text-primary'>силу атаки</span> на <span class='text-primary'>15%</span>/"
      + "<span class='text-primary'>19%</span>/<span class='text-primary'>23%</span>/"
      + "<span class='text-primary'>27%</span>/<span class='text-primary'>31%</span>. Когда экипированный персонаж "
      + "активирует на враге <span class='text-primary'>Горение</span> или наносит противникам со статусом "
      + "<span class='text-primary'>Горение</span> <span class='text-primary'>Дендро урон</span>, наносимый урон "
      + "увеличивается на <span class='text-primary'>18%</span>/<span class='text-primary'>23%</span>/"
      + "<span class='text-primary'>28%</span>/<span class='text-primary'>33%</span>/"
      + "<span class='text-primary'>38%</span>. Этот эффект длится 8 сек. и складывается до 2 раз. После получения 2 "
      + "уровней или обновления длительности с 2 уровнями восстанавливает <span class='text-primary'>12</span>/"
      + "<span class='text-primary'>13</span>/<span class='text-primary'>14</span>/"
      + "<span class='text-primary'>15</span>/<span class='text-primary'>16</span> ед. энергии. Восстанавливать "
      + "энергию таким образом можно 1 раз в 12 сек. Эти 2 эффекта срабатывают, даже когда персонаж не на поле боя.",
    ]),
  ]),
  [WeaponIds.LuxuriousSeaLord]: Class.init([
    WeaponIds.LuxuriousSeaLord,
    "Благодатный владыка вод",
    4,
    "Событие версии 2.1 «Лунное утешение»",
    WeaponTypeIds.Claymore,
    { min_value: 41, max_value: 454 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
  ]),
  [WeaponIds.MagicGuide]: Class.init([
    WeaponIds.MagicGuide,
    "Руководство по магии",
    3,
    WeaponSource.Wish,
    WeaponTypeIds.Catalyst,
    { min_value: 38, max_value: 354 },
    StatIds.ElementalMastery,
    { min_value: 41, max_value: 187 },
  ]),
  [WeaponIds.MailedFlower]: Class.init([
    WeaponIds.MailedFlower,
    "Цветок в латах",
    4,
    "Событие версии 3.5 «Дыхание анемонии»",
    WeaponTypeIds.Claymore,
    { min_value: 44, max_value: 565 },
    StatIds.ElementalMastery,
    { min_value: 24, max_value: 110 },
  ]),
  [WeaponIds.MakhairaAquamarine]: Class.init([
    WeaponIds.MakhairaAquamarine,
    "Аквамарин Махайры",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Claymore,
    { min_value: 42, max_value: 510 },
    StatIds.ElementalMastery,
    { min_value: 36, max_value: 165 },
    ClassPassiveAbility.init([
      "Чертоги в пустыне",
      "Каждые 10 сек. срабатывает следующий эффект: <span class='text-info'>сила атаки</span> экипированного этим "
      + "оружием персонажа увеличивается на <span class='text-version'>24%</span>/"
      + "<span class='text-version'>30%</span>/<span class='text-version'>36%</span>/"
      + "<span class='text-version'>42%</span>/<span class='text-version'>48%</span> от "
      + "<span class='text-info'>мастерства стихий</span> на 12 сек. Члены отряда поблизости получают 30% этого "
      + "эффекта. Если этим оружием обладают и другие члены отряда, эффект суммируется. Этот эффект срабатывает, даже "
      + "если экипированный персонаж не на поле боя.",
    ]),
  ]),
  [WeaponIds.MappaMare]: Class.init([
    WeaponIds.MappaMare,
    "Морской атлас",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Catalyst,
    { min_value: 44, max_value: 565 },
    StatIds.ElementalMastery,
    { min_value: 24, max_value: 110 },
  ]),
  [WeaponIds.MasterKey]: Class.init([
    WeaponIds.MasterKey,
    "Мастер-ключ",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Claymore,
    { min_value: 41, max_value: 454 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.133, 1), max_value: numberFormatPercent(0.613, 1) },
    ClassPassiveAbility.init([
      "Мгновенное решение",
      "На 12 сек. после активации элементальной реакции <span class='text-info'>мастерство стихий</span> повышается на "
      + "<span class='text-version'>60</span>/<span class='text-version'>75</span>/"
      + "<span class='text-version'>90</span>/<span class='text-version'>105</span>/"
      + "<span class='text-version'>120</span> ед. Лунное знамение - Высшее сияние: "
      + "<span class='text-info'>мастерство стихий</span> от данного эффекта дополнительно повышается на "
      + "<span class='text-version'>60</span>/<span class='text-version'>75</span>/"
      + "<span class='text-version'>90</span>/<span class='text-version'>105</span>/"
      + "<span class='text-version'>120</span> ед. Этот эффект срабатывает, даже когда экипированный персонаж не на "
      + "поле боя.",
    ]),
  ]),
  [WeaponIds.MemoryOfDust]: Class.init([
    WeaponIds.MemoryOfDust,
    "Память о пыли",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 46, max_value: 608 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.108, 1), max_value: numberFormatPercent(0.496, 1) },
  ]),
  [WeaponIds.Messenger]: Class.init([
    WeaponIds.Messenger,
    "Посыльный",
    3,
    WeaponSource.Chests,
    WeaponTypeIds.Bow,
    { min_value: 40, max_value: 448 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.068, 1), max_value: numberFormatPercent(0.312, 1) },
  ]),
  [WeaponIds.MissiveWindspear]: Class.init([
    WeaponIds.MissiveWindspear,
    "Копьё послания ветров",
    4,
    "Событие версии 3.1 «О балладах и кубках»",
    WeaponTypeIds.Polearm,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
    ClassPassiveAbility.init([
      "Недошедший ветер",
      "В течение 10 сек. после активации <span class='text-primary'>элементальной реакции</span> "
      + "<span class='text-primary'>сила атаки</span> повысится на <span class='text-primary'>12%</span>/"
      + "<span class='text-primary'>15%</span>/<span class='text-primary'>18%</span>/"
      + "<span class='text-primary'>21%</span>/<span class='text-primary'>24%</span>, "
      + "<span class='text-primary'>мастерство стихий</span> – на <span class='text-primary'>48</span>/"
      + "<span class='text-primary'>60</span>/<span class='text-primary'>72</span>/"
      + "<span class='text-primary'>84</span>/<span class='text-primary'>96</span> ед.",
    ]),
  ]),
  [WeaponIds.MistsplitterReforged]: Class.init([
    WeaponIds.MistsplitterReforged,
    "Рассекающий туман",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 48, max_value: 674 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.096, 1), max_value: numberFormatPercent(0.441, 1) },
  ]),
  [WeaponIds.MitternachtsWaltz]: Class.init([
    WeaponIds.MitternachtsWaltz,
    "Вальс Нирваны Ночи",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Bow,
    { min_value: 42, max_value: 510 },
    StatIds.PhysicalDmgBonus,
    { min_value: numberFormatPercent(0.113, 1), max_value: numberFormatPercent(0.517, 1) },
  ]),
  [WeaponIds.Moonpiercer]: Class.init([
    WeaponIds.Moonpiercer,
    "Пронзающий луну",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Polearm,
    { min_value: 44, max_value: 565 },
    StatIds.ElementalMastery,
    { min_value: 24, max_value: 110 },
  ]),
  [WeaponIds.MoonweaversDawn]: Class.init([
    WeaponIds.MoonweaversDawn,
    "Рассвет прядильщицы луны",
    4,
    "Задание мира «Полька под луной»",
    WeaponTypeIds.Sword,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.MountainBracingBolt]: Class.init([
    WeaponIds.MountainBracingBolt,
    "Крепящий горы шип",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 44, max_value: 565 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.067, 1), max_value: numberFormatPercent(0.306, 1) },
  ]),
  [WeaponIds.MouunsMoon]: Class.init([
    WeaponIds.MouunsMoon,
    "Луна Моун",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Bow,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.NightweaversLookingGlass]: Class.init([
    WeaponIds.NightweaversLookingGlass,
    "Зеркало прядильщицы ночи",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 44, max_value: 542 },
    StatIds.ElementalMastery,
    { min_value: 58, max_value: 265 },
  ]),
  [WeaponIds.OathswornEye]: Class.init([
    WeaponIds.OathswornEye,
    "Око клятвы",
    4,
    "Событие версии 2.5 «Подношение врат трёх миров»",
    WeaponTypeIds.Catalyst,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.OtherworldlyStory]: Class.init([
    WeaponIds.OtherworldlyStory,
    "Потусторонняя история",
    3,
    WeaponSource.Chests,
    WeaponTypeIds.Catalyst,
    { min_value: 39, max_value: 401 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.085, 1), max_value: numberFormatPercent(0.390, 1) },
  ]),
  [WeaponIds.PeakPatrolSong]: Class.init([
    WeaponIds.PeakPatrolSong,
    "Песнь патруля пиков",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 44, max_value: 542 },
    StatIds.DefPercentage,
    { min_value: numberFormatPercent(0.180, 1), max_value: numberFormatPercent(0.827, 1) },
  ]),
  [WeaponIds.PolarStar]: Class.init([
    WeaponIds.PolarStar,
    "Полярная звезда",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Bow,
    { min_value: 46, max_value: 608 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.072, 1), max_value: numberFormatPercent(0.331, 1) },
  ]),
  [WeaponIds.PortablePowerSaw]: Class.init([
    WeaponIds.PortablePowerSaw,
    "Переносная мотопила",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Claymore,
    { min_value: 41, max_value: 454 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
  ]),
  [WeaponIds.Predator]: Class.init([
    WeaponIds.Predator,
    "Хищник",
    4,
    "Внутриигровая почта \"PlayStation Network\"",
    WeaponTypeIds.Bow,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.PrimordialJadeCutter]: Class.init([
    WeaponIds.PrimordialJadeCutter,
    "Драгоценный омут",
    5,
    WeaponSource.Wish,
    WeaponTypeIds.Sword,
    { min_value: 44, max_value: 542 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.096, 1), max_value: numberFormatPercent(0.441, 1) },
    ClassPassiveAbility.init([
      "Добродетель защитника",
      "Увеличивает <span class='text-info'>HP</span> на <span class='text-version'>20%</span>/"
      + "<span class='text-version'>25%</span>/<span class='text-version'>30%</span>/"
      + "<span class='text-version'>35%</span>/<span class='text-version'>40%</span>. Также даёт "
      + "<span class='text-info'>бонус атаки</span>, равный <span class='text-version'>1,2%</span>/"
      + "<span class='text-version'>1,5%</span>/<span class='text-version'>1,8%</span>/"
      + "<span class='text-version'>2,1%</span>/<span class='text-version'>2,4%</span> от макс. "
      + "<span class='text-info'>HP</span> экипированного этим оружием персонажа.",
    ]),
  ]),
  [WeaponIds.PrimordialJadeWingedSpear]: Class.init([
    WeaponIds.PrimordialJadeWingedSpear,
    "Нефритовый коршун",
    5,
    WeaponSource.Wish,
    WeaponTypeIds.Polearm,
    { min_value: 48, max_value: 674 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.048, 1), max_value: numberFormatPercent(0.221, 1) },
    ClassPassiveAbility.init([
      "Птица справедливости",
      "При попадании увеличивает <span class='text-info'>силу атаки</span> на <span class='text-version'>3,2%</span>/"
      + "<span class='text-version'>3,9%</span>/<span class='text-version'>4,6%</span>/"
      + "<span class='text-version'>5,3%</span>/<span class='text-version'>6%</span> в течение 6 сек. Эффект может "
      + "складываться до 7 раз и возникает не чаще чем раз в 0,3 сек. На 7 уровне складывания увеличивает урон на "
      + "<span class='text-version'>12%</span>/<span class='text-version'>15%</span>/"
      + "<span class='text-version'>18%</span>/<span class='text-version'>21%</span>/"
      + "<span class='text-version'>24%</span>.",
    ]),
  ]),
  [WeaponIds.ProspectorsDrill]: Class.init([
    WeaponIds.ProspectorsDrill,
    "Бур рудоискателя",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.ProspectorsShovel]: Class.init([
    WeaponIds.ProspectorsShovel,
    "Лопата старателя",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Polearm,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.PrototypeAmber]: Class.init([
    WeaponIds.PrototypeAmber,
    "Прототип: Янтарь",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Catalyst,
    { min_value: 42, max_value: 510 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.PrototypeArchaic]: Class.init([
    WeaponIds.PrototypeArchaic,
    "Прототип: Архаичный",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Claymore,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.PrototypeCrescent]: Class.init([
    WeaponIds.PrototypeCrescent,
    "Прототип: Полумесяц",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Bow,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.PrototypeRancour]: Class.init([
    WeaponIds.PrototypeRancour,
    "Прототип: Злоба",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Sword,
    { min_value: 44, max_value: 565 },
    StatIds.PhysicalDmgBonus,
    { min_value: numberFormatPercent(0.075, 1), max_value: numberFormatPercent(0.345, 1) },
  ]),
  [WeaponIds.PrototypeStarglitter]: Class.init([
    WeaponIds.PrototypeStarglitter,
    "Прототип: Звёздный блеск",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Polearm,
    { min_value: 42, max_value: 510 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.100, 1), max_value: numberFormatPercent(0.459, 1) },
  ]),
  [WeaponIds.Rainslasher]: Class.init([
    WeaponIds.Rainslasher,
    "Дождерез",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Claymore,
    { min_value: 42, max_value: 510 },
    StatIds.ElementalMastery,
    { min_value: 36, max_value: 165 },
  ]),
  [WeaponIds.RangeGauge]: Class.init([
    WeaponIds.RangeGauge,
    "Дальномер",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Bow,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.RavenBow]: Class.init([
    WeaponIds.RavenBow,
    "Лук ворона",
    3,
    WeaponSource.Wish,
    WeaponTypeIds.Bow,
    { min_value: 40, max_value: 448 },
    StatIds.ElementalMastery,
    { min_value: 20, max_value: 94 },
  ]),
  [WeaponIds.RecurveBow]: Class.init([
    WeaponIds.RecurveBow,
    "Изогнутый лук",
    3,
    WeaponSource.Chests,
    WeaponTypeIds.Bow,
    { min_value: 38, max_value: 354 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.102, 1), max_value: numberFormatPercent(0.469, 1) },
  ]),
  [WeaponIds.RedhornStonethresher]: Class.init([
    WeaponIds.RedhornStonethresher,
    "Краснорогий камнеруб",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Claymore,
    { min_value: 44, max_value: 542 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.192, 1), max_value: numberFormatPercent(0.882, 1) },
    ClassPassiveAbility.init([
      "Гокадайо Отогибанаси",
      "<span class='text-info'>Защита</span> повышается на <span class='text-version'>28%</span>/"
      + "<span class='text-version'>35%</span>/<span class='text-version'>42%</span>/"
      + "<span class='text-version'>49%</span>/<span class='text-version'>56%</span>, "
      + "<span class='text-info'>урон обычных</span> и <span class='text-info'>заряженных атак</span> повышается на "
      + "<span class='text-version'>40%</span>/<span class='text-version'>50%</span>/"
      + "<span class='text-version'>60%</span>/<span class='text-version'>70%</span>/"
      + "<span class='text-version'>80%</span> <span class='text-info'>защиты</span>.",
    ]),
  ]),
  [WeaponIds.ReliquaryOfTruth]: Class.init([
    WeaponIds.ReliquaryOfTruth,
    "Шкатулка истин",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 44, max_value: 542 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.192, 1), max_value: numberFormatPercent(0.882, 1) },
    ClassPassiveAbility.init([
      "Подлинный смысл лжи",
      "Шанс крит. попадания повышается на <span class='text-version'>8%</span>/<span class='text-version'>10%</span>/"
      + "<span class='text-version'>12%</span>/<span class='text-version'>14%</span>/"
      + "<span class='text-version'>16%</span>. При активации элементального навыка экипированный персонаж получает "
      + "эффект Секрет лжи: мастерство стихий повышается на <span class='text-version'>80</span>/"
      + "<span class='text-version'>100</span>/<span class='text-version'>120</span>/"
      + "<span class='text-version'>140</span>/<span class='text-version'>160</span> ед. на 12 сек. Когда "
      + "экипированный персонаж наносит врагу урон Лунной бутонизации, он получает эффект Луна истины: крит. урон "
      + "повышается на <span class='text-version'>24%</span>/<span class='text-version'>30%</span>/"
      + "<span class='text-version'>36%</span>/<span class='text-version'>42%</span>/"
      + "<span class='text-version'>48%</span> на 4 сек. Когда Секрет лжи и Луна истины действуют одновременно, "
      + "результат обоих эффектов повышается на 50%.",
    ]),
  ]),
  [WeaponIds.RightfulReward]: Class.init([
    WeaponIds.RightfulReward,
    "Справедливая награда",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Polearm,
    { min_value: 44, max_value: 565 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.RingOfYaxche]: Class.init([
    WeaponIds.RingOfYaxche,
    "Кольцо Яшче",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Catalyst,
    { min_value: 42, max_value: 510 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.RoyalBow]: Class.init([
    WeaponIds.RoyalBow,
    "Королевский лук",
    4,
    WeaponSource.PaimonsBargains,
    WeaponTypeIds.Bow,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.RoyalGreatsword]: Class.init([
    WeaponIds.RoyalGreatsword,
    "Королевский двуручный меч",
    4,
    WeaponSource.PaimonsBargains,
    WeaponTypeIds.Claymore,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.RoyalGrimoire]: Class.init([
    WeaponIds.RoyalGrimoire,
    "Королевский гримуар",
    4,
    WeaponSource.PaimonsBargains,
    WeaponTypeIds.Catalyst,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.RoyalLongsword]: Class.init([
    WeaponIds.RoyalLongsword,
    "Меч аристократов",
    4,
    WeaponSource.PaimonsBargains,
    WeaponTypeIds.Sword,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.RoyalSpear]: Class.init([
    WeaponIds.RoyalSpear,
    "Королевское копьё",
    4,
    WeaponSource.PaimonsBargains,
    WeaponTypeIds.Polearm,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.Rust]: Class.init([
    WeaponIds.Rust,
    "Ржавый лук",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Bow,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.SacrificersStaff]: Class.init([
    WeaponIds.SacrificersStaff,
    "Посох жертвующей",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 45, max_value: 620 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.020, 1), max_value: numberFormatPercent(0.092, 1) },
    ClassPassiveAbility.init([
      "Незапятнанное желание",
      "На 6 сек. после попадания элементального навыка по противнику сила атаки повышается на "
      + "<span class='text-version'>8%</span>/<span class='text-version'>10%</span>/"
      + "<span class='text-version'>12%</span>/<span class='text-version'>14%</span>/"
      + "<span class='text-version'>16%</span>, а восстановление энергии - на <span class='text-version'>6%</span>/"
      + "<span class='text-version'>7,5%</span>/<span class='text-version'>9%</span>/"
      + "<span class='text-version'>10,5%</span>/<span class='text-version'>12%</span>. Этот эффект складывается до 3 "
      + "раз и срабатывает, даже когда экипированный персонаж не на поле боя.",
    ]),
  ]),
  [WeaponIds.SacrificialBow]: Class.init([
    WeaponIds.SacrificialBow,
    "Церемониальный лук",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Bow,
    { min_value: 44, max_value: 565 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.067, 1), max_value: numberFormatPercent(0.306, 1) },
  ]),
  [WeaponIds.SacrificialFragments]: Class.init([
    WeaponIds.SacrificialFragments,
    "Церемониальные мемуары",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Catalyst,
    { min_value: 41, max_value: 454 },
    StatIds.ElementalMastery,
    { min_value: 48, max_value: 221 },
  ]),
  [WeaponIds.SacrificialGreatsword]: Class.init([
    WeaponIds.SacrificialGreatsword,
    "Церемониальный двуручный меч",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Claymore,
    { min_value: 44, max_value: 565 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.067, 1), max_value: numberFormatPercent(0.306, 1) },
    ClassPassiveAbility.init([
      "Безмятежный",
      "Когда <span class='text-info'>элементальный навык</span> наносит урон, есть "
      + "<span class='text-version'>40%</span>/<span class='text-version'>50%</span>/"
      + "<span class='text-version'>60%</span>/<span class='text-version'>70%</span>/"
      + "<span class='text-version'>80%</span> вероятность, что его откат моментально восстановится. Может возникнуть "
      + "раз в <span class='text-version'>30</span>/<span class='text-version'>26</span>/"
      + "<span class='text-version'>22</span>/<span class='text-version'>19</span>/"
      + "<span class='text-version'>16</span> сек.",
    ]),
  ]),
  [WeaponIds.SacrificialJade]: Class.init([
    WeaponIds.SacrificialJade,
    "Жертвенный нефрит",
    4,
    WeaponSource.BattlePass,
    WeaponTypeIds.Catalyst,
    { min_value: 41, max_value: 454 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.080, 1), max_value: numberFormatPercent(0.368, 1) },
  ]),
  [WeaponIds.SacrificialSword]: Class.init([
    WeaponIds.SacrificialSword,
    "Церемониальный меч",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Sword,
    { min_value: 41, max_value: 454 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.133, 1), max_value: numberFormatPercent(0.613, 1) },
  ]),
  [WeaponIds.SapwoodBlade]: Class.init([
    WeaponIds.SapwoodBlade,
    "Деревянный клинок",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Sword,
    { min_value: 44, max_value: 565 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.067, 1), max_value: numberFormatPercent(0.306, 1) },
  ]),
  [WeaponIds.ScionOfTheBlazingSun]: Class.init([
    WeaponIds.ScionOfTheBlazingSun,
    "Наследник слепящего солнца",
    4,
    WeaponSource.BattlePass,
    WeaponTypeIds.Bow,
    { min_value: 44, max_value: 565 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.040, 1), max_value: numberFormatPercent(0.184, 1) },
  ]),
  [WeaponIds.SequenceOfSolitude]: Class.init([
    WeaponIds.SequenceOfSolitude,
    "Каденция одиночества",
    4,
    "Событие версии 5.6 «Кружащийся вальс»",
    WeaponTypeIds.Bow,
    { min_value: 42, max_value: 510 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.SerenitysCall]: Class.init([
    WeaponIds.SerenitysCall,
    "Зов безмятежности",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Sword,
    { min_value: 41, max_value: 454 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.133, 1), max_value: numberFormatPercent(0.613, 1) },
  ]),
  [WeaponIds.SerpentSpine]: Class.init([
    WeaponIds.SerpentSpine,
    "Меч драконьей кости",
    4,
    WeaponSource.BattlePass,
    WeaponTypeIds.Claymore,
    { min_value: 42, max_value: 510 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.SharpshootersOath]: Class.init([
    WeaponIds.SharpshootersOath,
    "Клятва стрелка",
    3,
    WeaponSource.Wish,
    WeaponTypeIds.Bow,
    { min_value: 39, max_value: 401 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.102, 1), max_value: numberFormatPercent(0.469, 1) },
  ]),
  [WeaponIds.SilvershowerHeartstrings]: Class.init([
    WeaponIds.SilvershowerHeartstrings,
    "Сердечные струны дождя",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Bow,
    { min_value: 44, max_value: 542 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.144, 1), max_value: numberFormatPercent(0.662, 1) },
  ]),
  [WeaponIds.SkyriderGreatsword]: Class.init([
    WeaponIds.SkyriderGreatsword,
    "Большой меч небесного всадника",
    3,
    WeaponSource.Chests,
    WeaponTypeIds.Claymore,
    { min_value: 39, max_value: 401 },
    StatIds.PhysicalDmgBonus,
    { min_value: numberFormatPercent(0.096, 1), max_value: numberFormatPercent(0.439, 1) },
  ]),
  [WeaponIds.SkyriderSword]: Class.init([
    WeaponIds.SkyriderSword,
    "Меч небесного всадника",
    3,
    WeaponSource.Wish,
    WeaponTypeIds.Sword,
    { min_value: 38, max_value: 354 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.113, 1), max_value: numberFormatPercent(0.521, 1) },
  ]),
  [WeaponIds.SkywardAtlas]: Class.init([
    WeaponIds.SkywardAtlas,
    "Небесный атлас",
    5,
    WeaponSource.Wish,
    WeaponTypeIds.Catalyst,
    { min_value: 48, max_value: 674 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.072, 1), max_value: numberFormatPercent(0.331, 1) },
  ]),
  [WeaponIds.SkywardBlade]: Class.init([
    WeaponIds.SkywardBlade,
    "Небесный меч",
    5,
    WeaponSource.Wish,
    WeaponTypeIds.Sword,
    { min_value: 46, max_value: 608 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
  ]),
  [WeaponIds.SkywardHarp]: Class.init([
    WeaponIds.SkywardHarp,
    "Небесное крыло",
    5,
    WeaponSource.Wish,
    WeaponTypeIds.Bow,
    { min_value: 48, max_value: 674 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.048, 1), max_value: numberFormatPercent(0.221, 1) },
  ]),
  [WeaponIds.SkywardPride]: Class.init([
    WeaponIds.SkywardPride,
    "Небесное величие",
    5,
    WeaponSource.Wish,
    WeaponTypeIds.Claymore,
    { min_value: 48, max_value: 674 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.080, 1), max_value: numberFormatPercent(0.368, 1) },
  ]),
  [WeaponIds.SkywardSpine]: Class.init([
    WeaponIds.SkywardSpine,
    "Небесная ось",
    5,
    WeaponSource.Wish,
    WeaponTypeIds.Polearm,
    { min_value: 48, max_value: 674 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.080, 1), max_value: numberFormatPercent(0.368, 1) },
  ]),
  [WeaponIds.Slingshot]: Class.init([
    WeaponIds.Slingshot,
    "Рогатка",
    3,
    WeaponSource.Wish,
    WeaponTypeIds.Bow,
    { min_value: 38, max_value: 354 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.068, 1), max_value: numberFormatPercent(0.312, 1) },
  ]),
  [WeaponIds.SnareHook]: Class.init([
    WeaponIds.SnareHook,
    "Крюк силка",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Bow,
    { min_value: 41, max_value: 454 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.133, 1), max_value: numberFormatPercent(0.613, 1) },
  ]),
  [WeaponIds.SnowTombedStarsilver]: Class.init([
    WeaponIds.SnowTombedStarsilver,
    "Заснеженное звёздное серебро",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Claymore,
    { min_value: 44, max_value: 565 },
    StatIds.PhysicalDmgBonus,
    { min_value: numberFormatPercent(0.075, 1), max_value: numberFormatPercent(0.345, 1) },
  ]),
  [WeaponIds.SolarPearl]: Class.init([
    WeaponIds.SolarPearl,
    "Солнечная жемчужина",
    4,
    WeaponSource.BattlePass,
    WeaponTypeIds.Catalyst,
    { min_value: 42, max_value: 510 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.SongOfBrokenPines]: Class.init([
    WeaponIds.SongOfBrokenPines,
    "Песнь разбитых сосен",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Claymore,
    { min_value: 49, max_value: 741 },
    StatIds.PhysicalDmgBonus,
    { min_value: numberFormatPercent(0.045, 1), max_value: numberFormatPercent(0.207, 1) },
  ]),
  [WeaponIds.SongOfStillness]: Class.init([
    WeaponIds.SongOfStillness,
    "Мелодия покоя",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Bow,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.SplendorOfTranquilWaters]: Class.init([
    WeaponIds.SplendorOfTranquilWaters,
    "Блеск тихих вод",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 44, max_value: 542 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.192, 1), max_value: numberFormatPercent(0.882, 1) },
  ]),
  [WeaponIds.StaffOfHoma]: Class.init([
    WeaponIds.StaffOfHoma,
    "Посох Хомы",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 46, max_value: 608 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.144, 1), max_value: numberFormatPercent(0.662, 1) },
    ClassPassiveAbility.init([
      "Безрассудная бабочка",
      "Увеличивает <span class='text-info'>HP</span> на <span class='text-version'>20%</span>/"
      + "<span class='text-version'>25%</span>/<span class='text-version'>30%</span>/"
      + "<span class='text-version'>35%</span>/<span class='text-version'>40%</span>. Также даёт "
      + "<span class='text-info'>бонус атаки</span>, равный <span class='text-version'>0,8%</span>/"
      + "<span class='text-version'>1%</span>/<span class='text-version'>1,2%</span>/"
      + "<span class='text-version'>1,4%</span>/<span class='text-version'>1,6%</span> от макс. "
      + "<span class='text-info'>HP</span> экипированного этим оружием персонажа. Когда "
      + "<span class='text-info'>HP</span> экипированного этим оружием персонажа опускается ниже 50%, его "
      + "<span class='text-info'>сила атаки</span> дополнительно увеличивается на <span class='text-version'>1%</span>/"
      + "<span class='text-version'>1,2%</span>/<span class='text-version'>1,4%</span>/"
      + "<span class='text-version'>1,6%</span>/<span class='text-version'>1,8%</span> от его макс. "
      + "<span class='text-info'>HP</span>.",
    ]),
  ]),
  [WeaponIds.StaffOfTheScarletSands]: Class.init([
    WeaponIds.StaffOfTheScarletSands,
    "Посох алых песков",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 44, max_value: 542 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.096, 1), max_value: numberFormatPercent(0.441, 1) },
    ClassPassiveAbility.init([
      "Марево на горизонте",
      "Увеличивает <span class='text-info'>бонус атаки</span> экипированного этим оружием персонажа на "
      + "<span class='text-version'>52%</span>/<span class='text-version'>65%</span>/"
      + "<span class='text-version'>78%</span>/<span class='text-version'>91%</span>/"
      + "<span class='text-version'>104%</span> от его <span class='text-info'>мастерства стихий</span>. Попадание по "
      + "врагу <span class='text-info'>элементальным навыком</span> на 10 сек. наделяет Сном алых песков: "
      + "<span class='text-info'>бонус атаки</span> экипированного этим оружием персонажа увеличивается на "
      + "<span class='text-version'>28%</span>/<span class='text-version'>35%</span>/"
      + "<span class='text-version'>42%</span>/<span class='text-version'>49%</span>/"
      + "<span class='text-version'>56%</span> от <span class='text-info'>мастерства стихий</span>. Эффект "
      + "складывается до 3 раз.",
    ]),
  ]),
  [WeaponIds.StarcallersWatch]: Class.init([
    WeaponIds.StarcallersWatch,
    "Бдение взывающего к звёздам",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 44, max_value: 542 },
    StatIds.ElementalMastery,
    { min_value: 58, max_value: 265 },
  ]),
  [WeaponIds.SturdyBone]: Class.init([
    WeaponIds.SturdyBone,
    "Крепкая кость",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 44, max_value: 565 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.SummitShaper]: Class.init([
    WeaponIds.SummitShaper,
    "Кромсатель пиков",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 46, max_value: 608 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.108, 1), max_value: numberFormatPercent(0.496, 1) },
  ]),
  [WeaponIds.SunnyMorningSleepIn]: Class.init([
    WeaponIds.SunnyMorningSleepIn,
    "Сон солнечным утром",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 44, max_value: 542 },
    StatIds.ElementalMastery,
    { min_value: 58, max_value: 265 },
  ]),
  [WeaponIds.SurfsUp]: Class.init([
    WeaponIds.SurfsUp,
    "Лови волну",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 44, max_value: 542 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.192, 1), max_value: numberFormatPercent(0.882, 1) },
  ]),
  [WeaponIds.SwordOfDescension]: Class.init([
    WeaponIds.SwordOfDescension,
    "Меч нисхождения",
    4,
    "Внутриигровая почта \"PlayStation Network\"",
    WeaponTypeIds.Sword,
    { min_value: 39, max_value: 440 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.077, 1), max_value: numberFormatPercent(0.352, 1) },
  ]),
  [WeaponIds.SwordOfNarzissenkreuz]: Class.init([
    WeaponIds.SwordOfNarzissenkreuz,
    "Меч Нарциссенкрейца",
    4,
    "Серия заданий мира «По следам Нарцисса»",
    WeaponTypeIds.Sword,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.SymphonistOfScents]: Class.init([
    WeaponIds.SymphonistOfScents,
    "Симфонист ароматов",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 46, max_value: 608 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.144, 1), max_value: numberFormatPercent(0.662, 1) },
    ClassPassiveAbility.init([
      "Симфония вкусов",
      "<span class='text-primary'>Сила атаки</span> повышается на <span class='text-primary'>12%</span>/"
      + "<span class='text-primary'>15%</span>/<span class='text-primary'>18%</span>/"
      + "<span class='text-primary'>21%</span>/<span class='text-primary'>24%</span>. Когда экипированный персонаж "
      + "неактивен, <span class='text-primary'>сила атаки</span> дополнительно повышается на "
      + "<span class='text-primary'>12%</span>/<span class='text-primary'>15%</span>/"
      + "<span class='text-primary'>18%</span>/<span class='text-primary'>21%</span>/"
      + "<span class='text-primary'>24%</span>. После осуществления <span class='text-primary'>лечения</span> "
      + "экипированный и получивший <span class='text-primary'>лечение</span> персонажи приобретают эффект Сладких "
      + "эхо: их <span class='text-primary'>сила атаки</span> повышается на <span class='text-primary'>32%</span>/"
      + "<span class='text-primary'>40%</span>/<span class='text-primary'>48%</span>/"
      + "<span class='text-primary'>56%</span>/<span class='text-primary'>64%</span> на 3 сек. Этот эффект "
      + "срабатывает, даже когда экипированный персонаж не на поле боя.",
    ]),
  ]),
  [WeaponIds.TalkingStick]: Class.init([
    WeaponIds.TalkingStick,
    "Говорящая палица",
    4,
    WeaponSource.BattlePass,
    WeaponTypeIds.Claymore,
    { min_value: 44, max_value: 565 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.040, 1), max_value: numberFormatPercent(0.184, 1) },
  ]),
  [WeaponIds.TamayurateiNoOhanashi]: Class.init([
    WeaponIds.TamayurateiNoOhanashi,
    "Тамаюратэй но оханаси",
    4,
    "Событие версии 5.4 «Чудесные истории фестиваля Микавы»",
    WeaponTypeIds.Polearm,
    { min_value: 44, max_value: 565 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.067, 1), max_value: numberFormatPercent(0.306, 1) },
    ClassPassiveAbility.init([
      "Мчащийся фонарь проныры",
      "При активации <span class='text-primary'>элементального навыка</span> на 10 сек. увеличивает "
      + "<span class='text-primary'>силу атаки</span> на <span class='text-primary'>20%</span>/"
      + "<span class='text-primary'>25%</span>/<span class='text-primary'>30%</span>/"
      + "<span class='text-primary'>35%</span>/<span class='text-primary'>40%</span> и "
      + "<span class='text-primary'>скорость передвижения</span> на 10%.",
    ]),
  ]),
  [WeaponIds.TheAlleyFlash]: Class.init([
    WeaponIds.TheAlleyFlash,
    "Вспышка во тьме",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 45, max_value: 620 },
    StatIds.ElementalMastery,
    { min_value: 12, max_value: 55 },
  ]),
  [WeaponIds.TheBell]: Class.init([
    WeaponIds.TheBell,
    "Меч-колокол",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Claymore,
    { min_value: 42, max_value: 510 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.TheBlackSword]: Class.init([
    WeaponIds.TheBlackSword,
    "Чёрный меч",
    4,
    WeaponSource.BattlePass,
    WeaponTypeIds.Sword,
    { min_value: 42, max_value: 510 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.TheCatch]: Class.init([
    WeaponIds.TheCatch,
    "«Улов»",
    4,
    "Ассоциация рыболовов Инадзумы",
    WeaponTypeIds.Polearm,
    { min_value: 42, max_value: 510 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.100, 1), max_value: numberFormatPercent(0.459, 1) },
  ]),
  [WeaponIds.TheDockhandsAssistant]: Class.init([
    WeaponIds.TheDockhandsAssistant,
    "Верфь",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 42, max_value: 510 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.TheFirstGreatMagic]: Class.init([
    WeaponIds.TheFirstGreatMagic,
    "Первый великий фокус",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Bow,
    { min_value: 46, max_value: 608 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.144, 1), max_value: numberFormatPercent(0.662, 1) },
  ]),
  [WeaponIds.TheFlute]: Class.init([
    WeaponIds.TheFlute,
    "Меч-флейта",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Sword,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.TheStringless]: Class.init([
    WeaponIds.TheStringless,
    "Бесструнный",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Bow,
    { min_value: 42, max_value: 510 },
    StatIds.ElementalMastery,
    { min_value: 36, max_value: 165 },
  ]),
  [WeaponIds.TheUnforged]: Class.init([
    WeaponIds.TheUnforged,
    "Некованый",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Claymore,
    { min_value: 46, max_value: 608 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.108, 1), max_value: numberFormatPercent(0.496, 1) },
  ]),
  [WeaponIds.TheViridescentHunt]: Class.init([
    WeaponIds.TheViridescentHunt,
    "Зелёный лук",
    4,
    WeaponSource.BattlePass,
    WeaponTypeIds.Bow,
    { min_value: 42, max_value: 510 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.TheWidsith]: Class.init([
    WeaponIds.TheWidsith,
    "Песнь странника",
    4,
    WeaponSource.Wish,
    WeaponTypeIds.Catalyst,
    { min_value: 42, max_value: 510 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.120, 1), max_value: numberFormatPercent(0.551, 1) },
  ]),
  [WeaponIds.ThrillingTalesOfDragonSlayers]: Class.init([
    WeaponIds.ThrillingTalesOfDragonSlayers,
    "Эпос о драконоборцах",
    3,
    WeaponSource.Wish,
    WeaponTypeIds.Catalyst,
    { min_value: 39, max_value: 401 },
    StatIds.HpPercentage,
    { min_value: numberFormatPercent(0.077, 1), max_value: numberFormatPercent(0.352, 1) },
  ]),
  [WeaponIds.ThunderingPulse]: Class.init([
    WeaponIds.ThunderingPulse,
    "Громовой пульс",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Bow,
    { min_value: 46, max_value: 608 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.144, 1), max_value: numberFormatPercent(0.662, 1) },
  ]),
  [WeaponIds.TidalShadow]: Class.init([
    WeaponIds.TidalShadow,
    "Тень волны",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Claymore,
    { min_value: 42, max_value: 510 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.090, 1), max_value: numberFormatPercent(0.413, 1) },
  ]),
  [WeaponIds.TomeOfTheEternalFlow]: Class.init([
    WeaponIds.TomeOfTheEternalFlow,
    "Обряд вечного течения",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 44, max_value: 542 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.192, 1), max_value: numberFormatPercent(0.882, 1) },
  ]),
  [WeaponIds.ToukabouShigure]: Class.init([
    WeaponIds.ToukabouShigure,
    "Токабо сигурэ",
    4,
    "Событие версии 3.3 «Акицу Кимодамэси»",
    WeaponTypeIds.Sword,
    { min_value: 42, max_value: 510 },
    StatIds.ElementalMastery,
    { min_value: 36, max_value: 165 },
  ]),
  [WeaponIds.TravelersHandySword]: Class.init([
    WeaponIds.TravelersHandySword,
    "Меч путешественника",
    3,
    WeaponSource.Chests,
    WeaponTypeIds.Sword,
    { min_value: 40, max_value: 448 },
    StatIds.DefPercentage,
    { min_value: numberFormatPercent(0.064, 1), max_value: numberFormatPercent(0.293, 1) },
  ]),
  [WeaponIds.TulaytullahsRemembrance]: Class.init([
    WeaponIds.TulaytullahsRemembrance,
    "Воспоминания Тулайтуллы",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 48, max_value: 674 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.096, 1), max_value: numberFormatPercent(0.441, 1) },
  ]),
  [WeaponIds.TwinNephrite]: Class.init([
    WeaponIds.TwinNephrite,
    "Парный нефрит",
    3,
    WeaponSource.Chests,
    WeaponTypeIds.Catalyst,
    { min_value: 40, max_value: 448 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.034, 1), max_value: numberFormatPercent(0.156, 1) },
  ]),
  [WeaponIds.UltimateOverlordsMegaMagicSword]: Class.init([
    WeaponIds.UltimateOverlordsMegaMagicSword,
    "«Магический супермеч высшего владыки»",
    4,
    "Событие версии 4.3 «Розы и мушкеты»",
    WeaponTypeIds.Claymore,
    { min_value: 44, max_value: 565 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.067, 1), max_value: numberFormatPercent(0.306, 1) },
  ]),
  [WeaponIds.UrakuMisugiri]: Class.init([
    WeaponIds.UrakuMisugiri,
    "Ураку мисугири",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 44, max_value: 542 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.192, 1), max_value: numberFormatPercent(0.882, 1) },
    ClassPassiveAbility.init([
      "Парчовый цветок и меч святилища",
      "Урон <span class='text-info'>обычной атаки</span> увеличивается на <span class='text-version'>16%</span>/"
      + "<span class='text-version'>20%</span>/<span class='text-version'>24%</span>/"
      + "<span class='text-version'>28%</span>/<span class='text-version'>32%</span>, "
      + "<span class='text-info'>элементального навыка</span> - на <span class='text-version'>24%</span>/"
      + "<span class='text-version'>30%</span>/<span class='text-version'>36%</span>/"
      + "<span class='text-version'>42%</span>/<span class='text-version'>48%</span>. После того как активный персонаж "
      + "поблизости наносит <span class='text-geo'>Гео урон</span>, эти эффекты дополнительно увеличиваются на 100% на "
      + "15 сек. Кроме того, <span class='text-info'>защита</span> экипированного персонажа повышается на "
      + "<span class='text-version'>20%</span>/<span class='text-version'>25%</span>/"
      + "<span class='text-version'>30%</span>/<span class='text-version'>35%</span>/"
      + "<span class='text-version'>40%</span>.",
    ]),
  ]),
  [WeaponIds.Verdict]: Class.init([
    WeaponIds.Verdict,
    "Вердикт",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Claymore,
    { min_value: 48, max_value: 674 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.048, 1), max_value: numberFormatPercent(0.221, 1) },
  ]),
  [WeaponIds.VividNotions]: Class.init([
    WeaponIds.VividNotions,
    "Переливающиеся чаяния",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 48, max_value: 674 },
    StatIds.CritDMG,
    { min_value: numberFormatPercent(0.096, 1), max_value: numberFormatPercent(0.441, 1) },
  ]),
  [WeaponIds.VortexVanquisher]: Class.init([
    WeaponIds.VortexVanquisher,
    "Покоритель вихря",
    5,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 46, max_value: 608 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.108, 1), max_value: numberFormatPercent(0.496, 1) },
  ]),
  [WeaponIds.WanderingEvenstar]: Class.init([
    WeaponIds.WanderingEvenstar,
    "Скитающаяся звезда",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 42, max_value: 510 },
    StatIds.ElementalMastery,
    { min_value: 36, max_value: 165 },
  ]),
  [WeaponIds.WavebreakersFin]: Class.init([
    WeaponIds.WavebreakersFin,
    "Режущий волны плавник",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Polearm,
    { min_value: 45, max_value: 620 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.030, 1), max_value: numberFormatPercent(0.138, 1) },
    ClassPassiveAbility.init([
      "Укротитель волн Ватацуми",
      "<span class='text-primary'>Урон взрыва стихии</span> экипированного этим оружием персонажа увеличивается на "
      + "<span class='text-primary'>0,12%</span>/<span class='text-primary'>0,15%</span>/"
      + "<span class='text-primary'>0,18%</span>/<span class='text-primary'>0,21%</span>/"
      + "<span class='text-primary'>0,24%</span> за каждую единицу суммы макс. энергии каждого члена отряда. Бонус "
      + "урона не может превышать <span class='text-primary'>40%</span>/<span class='text-primary'>50%</span>/"
      + "<span class='text-primary'>60%</span>/<span class='text-primary'>70%</span>/"
      + "<span class='text-primary'>80%</span>.",
    ]),
  ]),
  [WeaponIds.WaveridingWhirl]: Class.init([
    WeaponIds.WaveridingWhirl,
    "Вихрь на волнах",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 41, max_value: 454 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.133, 1), max_value: numberFormatPercent(0.613, 1) },
  ]),
  [WeaponIds.WhiteIronGreatsword]: Class.init([
    WeaponIds.WhiteIronGreatsword,
    "Меч из белого железа",
    3,
    WeaponSource.Chests,
    WeaponTypeIds.Claymore,
    { min_value: 39, max_value: 401 },
    StatIds.DefPercentage,
    { min_value: numberFormatPercent(0.096, 1), max_value: numberFormatPercent(0.439, 1) },
  ]),
  [WeaponIds.WhiteTassel]: Class.init([
    WeaponIds.WhiteTassel,
    "Белая кисть",
    3,
    "Сундуки Ли Юэ",
    WeaponTypeIds.Polearm,
    { min_value: 39, max_value: 401 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.051, 1), max_value: numberFormatPercent(0.234, 1) },
    ClassPassiveAbility.init([
      "Зоркий",
      "Увеличивает урон <span class='text-info'>обычной атаки</span> на <span class='text-version'>24%</span>/"
      + "<span class='text-version'>30%</span>/<span class='text-version'>36%</span>/"
      + "<span class='text-version'>42%</span>/<span class='text-version'>48%</span>.",
    ]),
  ]),
  [WeaponIds.Whiteblind]: Class.init([
    WeaponIds.Whiteblind,
    "Белая тень",
    4,
    WeaponSource.Forged,
    WeaponTypeIds.Claymore,
    { min_value: 42, max_value: 510 },
    StatIds.DefPercentage,
    { min_value: numberFormatPercent(0.113, 1), max_value: numberFormatPercent(0.517, 1) },
    ClassPassiveAbility.init([
      "Заряженное лезвие",
      "При попадании <span class='text-info'>обычной</span> или <span class='text-info'>заряженной атакой</span> "
      + "<span class='text-info'>сила атаки</span> и <span class='text-info'>защита</span> увеличиваются на "
      + "<span class='text-version'>6%</span>/<span class='text-version'>7,5%</span>/"
      + "<span class='text-version'>9%</span>/<span class='text-version'>10,5%</span>/"
      + "<span class='text-version'>12%</span> в течение 6 сек. Эффект может складываться до 4 раз. Может возникнуть "
      + "не чаще 1 раза за 0,5 сек.",
    ]),
  ]),
  [WeaponIds.WindblumeOde]: Class.init([
    WeaponIds.WindblumeOde,
    "Ода анемонии",
    4,
    "Событие версии 1.4 «Приглашение ветряных цветов»",
    WeaponTypeIds.Bow,
    { min_value: 42, max_value: 510 },
    StatIds.ElementalMastery,
    { min_value: 36, max_value: 165 },
  ]),
  [WeaponIds.WineAndSong]: Class.init([
    WeaponIds.WineAndSong,
    "Вино и песни",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Catalyst,
    { min_value: 44, max_value: 565 },
    StatIds.EnergyRecharge,
    { min_value: numberFormatPercent(0.067, 1), max_value: numberFormatPercent(0.306, 1) },
  ]),
  [WeaponIds.WolfFang]: Class.init([
    WeaponIds.WolfFang,
    "Волчий клык",
    4,
    WeaponSource.BattlePass,
    WeaponTypeIds.Sword,
    { min_value: 42, max_value: 510 },
    StatIds.CritRate,
    { min_value: numberFormatPercent(0.060, 1), max_value: numberFormatPercent(0.276, 1) },
  ]),
  [WeaponIds.WolfsGravestone]: Class.init([
    WeaponIds.WolfsGravestone,
    "Волчья погибель",
    5,
    WeaponSource.Wish,
    WeaponTypeIds.Claymore,
    { min_value: 46, max_value: 608 },
    StatIds.AtkPercentage,
    { min_value: numberFormatPercent(0.108, 1), max_value: numberFormatPercent(0.496, 1) },
  ]),
  [WeaponIds.XiphosMoonlight]: Class.init([
    WeaponIds.XiphosMoonlight,
    "Лунное сияние ксифоса",
    4,
    WeaponSource.EventWishExclusive,
    WeaponTypeIds.Sword,
    { min_value: 42, max_value: 510 },
    StatIds.ElementalMastery,
    { min_value: 36, max_value: 165 },
  ]),
} as Record<Type["id"], Type>;
