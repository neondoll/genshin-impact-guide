import type { Stat as Type } from "@/types/stat";
import { Stat as Class } from "@/classes/stat";
import { STATS } from "@/constants/stats";

export default {
  [STATS.ANEMO_DMG_BONUS]: Class.init([STATS.ANEMO_DMG_BONUS, "Бонус Анемо урона"]),
  [STATS.ATK]: Class.init([STATS.ATK, "Сила атаки"]),
  [STATS.ATK_PERCENTAGE]: Class.init([STATS.ATK_PERCENTAGE, "Процент от силы атаки", "Сила атаки %"]),
  [STATS.CRIT_DMG]: Class.init([STATS.CRIT_DMG, "Крит. урон"]),
  [STATS.CRIT_RATE]: Class.init([STATS.CRIT_RATE, "Шанс крит. попадания"]),
  [STATS.CRYO_DMG_BONUS]: Class.init([STATS.CRYO_DMG_BONUS, "Бонус Крио урона"]),
  [STATS.DEF]: Class.init([STATS.DEF, "Защита"]),
  [STATS.DEF_PERCENTAGE]: Class.init([STATS.DEF_PERCENTAGE, "Процент от защиты", "Защита %"]),
  [STATS.DENDRO_DMG_BONUS]: Class.init([STATS.DENDRO_DMG_BONUS, "Бонус Дендро урона"]),
  [STATS.ELECTRO_DMG_BONUS]: Class.init([STATS.ELECTRO_DMG_BONUS, "Бонус Электро урона"]),
  [STATS.ELEMENTAL_MASTERY]: Class.init([STATS.ELEMENTAL_MASTERY, "Мастерство стихий"]),
  [STATS.ENERGY_RECHARGE]: Class.init([STATS.ENERGY_RECHARGE, "Восст. энергии"]),
  [STATS.GEO_DMG_BONUS]: Class.init([STATS.GEO_DMG_BONUS, "Бонус Гео урона"]),
  [STATS.HEALING_BONUS]: Class.init([STATS.HEALING_BONUS, "Бонус лечения"]),
  [STATS.HP]: Class.init([STATS.HP, "HP"]),
  [STATS.HP_PERCENTAGE]: Class.init([STATS.HP_PERCENTAGE, "Процент от HP", "HP %"]),
  [STATS.HYDRO_DMG_BONUS]: Class.init([STATS.HYDRO_DMG_BONUS, "Бонус Гидро урона"]),
  [STATS.PHYSICAL_DMG_BONUS]: Class.init([STATS.PHYSICAL_DMG_BONUS, "Бонус физ. урона"]),
  [STATS.PYRO_DMG_BONUS]: Class.init([STATS.PYRO_DMG_BONUS, "Бонус Пиро урона"]),
} as Record<Type["id"], Type>;
