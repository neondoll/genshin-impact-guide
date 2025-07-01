import type { ArtifactPieceUidEnum } from "../enums/artifact-pieces";
import type { ArtifactSetUid } from "./artifact-sets";
import type { AttributeUid } from "./attributes";
import type { CharacterUid } from "./characters";
import type { ElementUid } from "./elements";
import type { TalentUid } from "./talents";
import type { WeaponUid } from "./weapons";

type GuideCharacterAssemblyArtifactAttribute = { uid: AttributeUid; percent?: number; description?: string };
type GuideCharacterAssemblyArtifacts = {
  sets: GuideCharacterAssemblyArtifactSet[];
  attributes: Record<typeof ArtifactPieceUidEnum["SandsOfEon" | "GobletOfEonothem" | "CircletOfLogos"] | "additional", GuideCharacterAssemblyArtifactAttribute[]>;
};
type GuideCharacterAssemblyArtifactSet = { uid: ArtifactSetUid; percent?: number; description?: string };
type GuideCharacterAssemblyWeapon = { uid: WeaponUid; refinement?: 1 | 5; postfix?: string; percent?: number };

export type GuideCharacter = {
  character_uid: CharacterUid;
  assembly_artifacts?: GuideCharacterAssemblyArtifacts;
  assembly_weapons?: GuideCharacterAssemblyWeapons | Record<string, GuideCharacterAssemblyWeapons>;
  first_constellation_or_signature_weapon?: string;
  key_constellations?: (1 | 2 | 3 | 4 | 5 | 6)[];
  priority_of_talent_leveling?: GuideCharacterPriorityOfTalentLeveling | Record<string, GuideCharacterPriorityOfTalentLeveling>;
  reference_point?: GuideCharacterReferencePoint | Record<string, GuideCharacterReferencePoint>;
  required_level?: 80 | 90;
  rotation?: string | Record<string, string>;
  squads?: {
    general_template: (GuideCharacterSquadsItem | GuideCharacterSquadsItem[])[];
    best_teammates: GuideCharacterSquadsItem[];
  };
  video_sources?: { title: string; vk_url?: string; youtube_url: string }[];
};
export type GuideCharacterPriorityOfTalentLeveling = { uid: TalentUid; priority: string }[];
export type GuideCharacterReferencePoint = [string, string][];
export type GuideCharacters = Record<CharacterUid, GuideCharacter>;
export type GuideCharacterSquadsItem = { type: "character"; uid: CharacterUid } | { type: "element"; uid: ElementUid };
export type GuideCharacterAssemblyWeapons = GuideCharacterAssemblyWeapon[];
