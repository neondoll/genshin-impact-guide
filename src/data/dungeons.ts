import type { Dungeon as Type } from "@/types/dungeon";
import { ARTIFACT_SETS } from "@/features/artifact-sets";
import { Dungeon as Class } from "@/classes/dungeon";
import { DungeonIds } from "@/enums/dungeon";

export default {
  [DungeonIds.CityOfGold]: Class.init([
    DungeonIds.CityOfGold,
    "Город золота",
    [ARTIFACT_SETS.DESERT_PAVILION_CHRONICLE, ARTIFACT_SETS.FLOWER_OF_PARADISE_LOST],
  ]), /* Крайне не выгодный */
  [DungeonIds.ClearPoolAndMountainCavern]: Class.init([
    DungeonIds.ClearPoolAndMountainCavern,
    "Чистая вода и горная пещера",
    [ARTIFACT_SETS.BLOODSTAINED_CHIVALRY, ARTIFACT_SETS.NOBLESSE_OBLIGE],
  ]), /* Крайне не выгодный */
  [DungeonIds.DenouementOfSin]: Class.init([
    DungeonIds.DenouementOfSin,
    "Конец греха",
    [ARTIFACT_SETS.GOLDEN_TROUPE, ARTIFACT_SETS.MARECHAUSSEE_HUNTER],
  ]), /* Крайне выгодный */
  [DungeonIds.DomainOfGuyun]: Class.init([
    DungeonIds.DomainOfGuyun,
    "Владения Гуюнь",
    [ARTIFACT_SETS.ARCHAIC_PETRA, ARTIFACT_SETS.RETRACING_BOLIDE],
  ]), /* Крайне не выгодный */
  [DungeonIds.FadedTheater]: Class.init([
    DungeonIds.FadedTheater,
    "Обветшалый театр",
    [ARTIFACT_SETS.FRAGMENT_OF_HARMONIC_WHIMSY],
  ]),
  [DungeonIds.FrostladenMachinery]: Class.init([
    DungeonIds.FrostladenMachinery,
    "Покрытая инеем машинерия",
    [ARTIFACT_SETS.NIGHT_OF_THE_SKYS_UNVEILING, ARTIFACT_SETS.SILKEN_MOONS_SERENADE],
  ]),
  [DungeonIds.HiddenPalaceOfZhouFormula]: Class.init([
    DungeonIds.HiddenPalaceOfZhouFormula,
    "Скрытый дворец Уван",
    [ARTIFACT_SETS.CRIMSON_WITCH_OF_FLAMES, ARTIFACT_SETS.LAVAWALKER],
  ]), /* Может быть полезен */
  [DungeonIds.MidsummerCourtyard]: Class.init([
    DungeonIds.MidsummerCourtyard,
    "Июльские сады",
    [ARTIFACT_SETS.THUNDERING_FURY, ARTIFACT_SETS.THUNDERSOOTHER],
  ]), /* Крайне не выгодный */
  [DungeonIds.MoltenIronFortress]: Class.init([
    DungeonIds.MoltenIronFortress,
    "Расплавленная крепость",
    [ARTIFACT_SETS.NYMPHS_DREAM, ARTIFACT_SETS.VOURUKASHAS_GLOW],
  ]), /* Крайне не выгодный */
  [DungeonIds.MomijiDyedCourt]: Class.init([
    DungeonIds.MomijiDyedCourt,
    "Кленовый зал",
    [ARTIFACT_SETS.EMBLEM_OF_SEVERED_FATE, ARTIFACT_SETS.SHIMENAWAS_REMINISCENCE],
  ]), /* Крайне выгодный */
  [DungeonIds.PeakOfVindagnyr]: Class.init([
    DungeonIds.PeakOfVindagnyr,
    "Пик Виндагнира",
    [ARTIFACT_SETS.BLIZZARD_STRAYER, ARTIFACT_SETS.HEART_OF_DEPTH],
  ]), /* Выгодный */
  [DungeonIds.RidgeWatch]: Class.init([
    DungeonIds.RidgeWatch,
    "Горный дозор",
    [ARTIFACT_SETS.PALE_FLAME, ARTIFACT_SETS.TENACITY_OF_THE_MILLELITH],
  ]), /* Крайне не выгодный */
  [DungeonIds.SanctumOfRainbowSpirits]: Class.init([
    DungeonIds.SanctumOfRainbowSpirits,
    "Святилище мириадов духов",
    [ARTIFACT_SETS.OBSIDIAN_CODEX, ARTIFACT_SETS.SCROLL_OF_THE_HERO_OF_CINDER_CITY],
  ]),
  [DungeonIds.SlumberingCourt]: Class.init([
    DungeonIds.SlumberingCourt,
    "Дремлющий сад",
    [ARTIFACT_SETS.HUSK_OF_OPULENT_DREAMS, ARTIFACT_SETS.OCEAN_HUED_CLAM],
  ]), /* Крайне не выгодный */
  [DungeonIds.SpireOfSolitaryEnlightenment]: Class.init([
    DungeonIds.SpireOfSolitaryEnlightenment,
    "Шпиль одинокого просветления",
    [ARTIFACT_SETS.DEEPWOOD_MEMORIES, ARTIFACT_SETS.GILDED_DREAMS],
  ]), /* Крайне выгодный */
  [DungeonIds.TheLostValley]: Class.init([
    DungeonIds.TheLostValley,
    "Затерянная долина",
    [ARTIFACT_SETS.ECHOES_OF_AN_OFFERING, ARTIFACT_SETS.VERMILLION_HEREAFTER],
  ]), /* Крайне не выгодный */
  [DungeonIds.ValleyOfRemembrance]: Class.init([
    DungeonIds.ValleyOfRemembrance,
    "Долина воспоминаний",
    [ARTIFACT_SETS.MAIDEN_BELOVED, ARTIFACT_SETS.VIRIDESCENT_VENERER],
  ]), /* Может быть полезен */
  [DungeonIds.WaterfallWen]: Class.init([
    DungeonIds.WaterfallWen,
    "Город гроз",
    [ARTIFACT_SETS.NIGHTTIME_WHISPERS_IN_THE_ECHOING_WOODS, ARTIFACT_SETS.SONG_OF_DAYS_PAST],
  ]), /* Крайне не выгодный */
} as Record<Type["id"], Type>;
