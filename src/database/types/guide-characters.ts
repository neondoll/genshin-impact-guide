import type { ArtifactSetUid } from "./artifact-sets";
import type { ArtifactTypeUidEnum } from "../enums/artifact-types";
import type { AttributeUid } from "./attributes";
import type { CharacterUid } from "./characters";
import type { TalentUid } from "./talents";
import type { WeaponUid } from "./weapons";

type GuideCharacterSuitableArtifactAttribute = { uid: AttributeUid; percent?: number; description?: string };
type GuideCharacterSuitableArtifacts = {
  sets: GuideCharacterSuitableArtifactSet[];
  attributes: Record<typeof ArtifactTypeUidEnum["SandsOfEon" | "GobletOfEonothem" | "CircletOfLogos"] | "additional", GuideCharacterSuitableArtifactAttribute[]>;
};
type GuideCharacterSuitableArtifactSet = { uid: ArtifactSetUid; percent?: number; description?: string };
type GuideCharacterSuitableWeapon = { uid: WeaponUid; refinement?: 1 | 5; postfix?: string; percent?: number };

export type GuideCharacter = {
  required_level?: 80 | 90;
  required_squad?: string;
  key_constellations?: (1 | 2 | 3 | 4 | 5 | 6)[];
  first_constellation_or_signature_weapon?: string;
  upgrading_talents: Record<TalentUid, string>;
  suitable_weapons?: GuideCharacterSuitableWeapons | Record<string, GuideCharacterSuitableWeapons>;
  suitable_artifacts?: GuideCharacterSuitableArtifacts;
  reference_point?: GuideCharacterReferencePoint | Record<string, GuideCharacterReferencePoint>;
  video_sources?: { title: string; vk_url: string; youtube_url: string }[];
};
export type GuideCharacterReferencePoint = [string, string][];
export type GuideCharacters = Record<CharacterUid, GuideCharacter>;
export type GuideCharacterSuitableWeapons = GuideCharacterSuitableWeapon[];
