import type { ArtifactSetUid } from "./artifact-sets";
import type { ArtifactTypeUidEnum } from "../enums/artifact-types";
import type { AttributeUid } from "./attributes";
import type { CharacterUid } from "./characters";
import type { TalentUid } from "./talents";
import type { WeaponUid } from "./weapons";

type GuideCharacterArtifactAttribute = { uid: AttributeUid; percent?: number; description?: string };
type GuideCharacterArtifactSet = { uid: ArtifactSetUid; percent?: number; description?: string };
type GuideCharacterWeapon = { uid: WeaponUid; refinement?: 1 | 5; postfix?: string; percent?: number };

export type GuideCharacter = {
  required_level?: 80 | 90;
  required_squad?: string;
  key_constellations?: (1 | 2 | 3 | 4 | 5 | 6)[];
  first_constellation_or_signature_weapon?: string;
  talents: Record<TalentUid, string>;
  weapons?: GuideCharacterWeapons | Record<string, GuideCharacterWeapons>;
  artifacts?: {
    sets: GuideCharacterArtifactSet[];
    attributes: Record<typeof ArtifactTypeUidEnum["SandsOfEon" | "GobletOfEonothem" | "CircletOfLogos"] | "additional", GuideCharacterArtifactAttribute[]>;
  };
  reference_point?: GuideCharacterReferencePoint | Record<string, GuideCharacterReferencePoint>;
};
export type GuideCharacterReferencePoint = [string, string][];
export type GuideCharacters = Record<CharacterUid, GuideCharacter>;
export type GuideCharacterWeapons = GuideCharacterWeapon[];
