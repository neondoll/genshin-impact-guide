import type { ArtifactSetUid } from "./artifact-sets";
import type { CharacterRoleUid } from "./character-roles";
import type { CharacterUidEnum } from "../enums/characters";
import type { ElementUid } from "./elements";
import type { QualityUid } from "./qualities";
import type { RegionUid } from "./regions";
import type { WeaponTypeUid } from "./weapon-types";
import type { WeaponUid } from "./weapons";
import type { WorldUid } from "./worlds";

type Character = {
  name: string;
  quality: QualityUid;
  weapon_type_uid: WeaponTypeUid;
  element_uid: ElementUid;
  roles_uid: CharacterRoleUid[];
  world_uid: WorldUid;
  region_uid?: RegionUid;
  signature_weapon_uid?: WeaponUid;
  signature_artifact_set_uid?: ArtifactSetUid;
  small_image_src: string;
};

export type Characters = Record<CharacterUid, Character>;
export type CharacterUid = typeof CharacterUidEnum[keyof typeof CharacterUidEnum];
