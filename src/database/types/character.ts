import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetUid } from "./artifact-set";
import type { CharacterRoleUid } from "./character-role";
import type { ElementUid } from "./element";
import type { QualityUid } from "./quality";
import type { WeaponTypeUid } from "./weapon-type";
import type { WeaponUid } from "./weapon";

type CharacterArkhe = "Усия" | "Пневма";

export type Character = {
  uid: CharacterUid;
  /* Имя      */ name: string;
  /* Качество */ quality: QualityUid;
  /* Оружие   */ weapon_type_uid: WeaponTypeUid;
  /* Элемент  */ element_uid: ElementUid;
  /* Архэ     */ arkhe?: CharacterArkhe | CharacterArkhe[];
  /* Роли     */ roles_uid?: CharacterRoleUid[];
  signature_artifact_set_uid?: ArtifactSetUid;
  signature_weapon_uid?: WeaponUid;
  image_src: string;
};
export type CharacterUid = typeof CharacterUidEnum[keyof typeof CharacterUidEnum];
