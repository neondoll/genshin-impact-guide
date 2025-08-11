import { CharacterKeys } from "../enums/character";
import type { ArtifactSetKey } from "./artifact-set";
import type { CharacterRoleKey } from "./character-role";
import type { ElementKey } from "./element";
import type { Rarity } from "./rarity";
import type { WeaponKey } from "./weapon";
import type { WeaponTypeKey } from "./weapon-type";

type CharacterArkhe = "Усия" | "Пневма";

export type Character = {
  key: CharacterKey;
  /* Имя      */ name: string;
  /* Редкость */ rarity: Rarity;
  /* Оружие   */ weapon_type_key: WeaponTypeKey;
  /* Элемент  */ element_key: ElementKey;
  /* Архэ     */ arkhe?: CharacterArkhe | CharacterArkhe[];
  /* Роли     */ roles_key?: CharacterRoleKey[];
  signature_artifact_set_key?: ArtifactSetKey;
  signature_weapon_key?: WeaponKey;
  image_src: string;
};
export type CharacterKey = typeof CharacterKeys[keyof typeof CharacterKeys];
