import { CharacterUidEnum } from "../enums/character";
import type { ArtifactSetUid } from "./artifact-set";
import type { CharacterRoleUid } from "./character-role";
import type { ElementUid } from "./element";
import type { QualityUid } from "./quality";
import type { WeaponTypeUid } from "./weapon-type";
import type { WeaponUid } from "./weapon";

export type Character = {
  uid: CharacterUid;
  name: string;
  image_src: string;
  quality: QualityUid;
  weapon_type_uid: WeaponTypeUid;
  element_uid: ElementUid;
  roles_uid?: CharacterRoleUid[];
  signature_weapon_uid?: WeaponUid;
  signature_artifact_set_uid?: ArtifactSetUid;
};
export type CharacterUid = typeof CharacterUidEnum[keyof typeof CharacterUidEnum];
