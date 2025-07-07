import type { ArtifactPieceUidEnum } from "../enums/artifact-pieces";
import type { ArtifactSetUid } from "./artifact-sets";
import type { AttributeUid } from "./attributes";
import type { CharacterUid } from "./characters";
import type { ElementUid } from "./elements";
import type { TalentUid } from "./talents";
import type { WeaponUid } from "./weapons";

type GuideCharacterArtifactAttributeRecommendations = {
  uid: AttributeUid;
  percent?: number;
  use_percent?: number;
  description?: string;
  notes?: string[];
};
type GuideCharacterArtifactRecommendations = {
  sets: GuideCharacterArtifactSetRecommendations[];
  attributes: Record<typeof ArtifactPieceUidEnum["SandsOfEon" | "GobletOfEonothem" | "CircletOfLogos"] | "additional", GuideCharacterArtifactAttributeRecommendations[]>;
};
type GuideCharacterArtifactSetRecommendations = {
  uid: ArtifactSetUid;
  is_better?: boolean;
  percent?: number;
  description?: string;
  notes?: string[];
};
type GuideCharacterAssemblyWeapon = { uid: WeaponUid; refinement?: 1 | 5; postfix?: string; percent?: number };

export type GuideCharacter = {
  artifact_recommendations?: GuideCharacterArtifactRecommendations;
  assembly_weapons?: GuideCharacterAssemblyWeapons | Record<string, GuideCharacterAssemblyWeapons>;
  character_uid: CharacterUid;
  first_constellation_or_signature_weapon?: string;
  key_constellations?: (1 | 2 | 3 | 4 | 5 | 6)[];
  reference_point?: GuideCharacterReferencePoint | Record<string, GuideCharacterReferencePoint>;
  required_level?: 80 | 90;
  rotation?: string | Record<string, string>;
  squads?: {
    general_template: (GuideCharacterSquadsItem | GuideCharacterSquadsItem[])[];
    best_teammates: GuideCharacterSquadsItem[];
  };
  talent_leveling_recommendations?: GuideCharacterTalentLevelingRecommendations | Record<string, GuideCharacterTalentLevelingRecommendations>;
  video_sources?: { title: string; vk_url?: string; youtube_url?: string }[];
};
export type GuideCharacterAssemblyWeapons = GuideCharacterAssemblyWeapon[];
export type GuideCharacterReferencePoint = [string, string][];
export type GuideCharacters = Record<CharacterUid, GuideCharacter>;
export type GuideCharacterSquadsItem = { type: "character"; uid: CharacterUid } | { type: "element"; uid: ElementUid };
export type GuideCharacterTalentLevelingRecommendations = { uid: TalentUid; priority: string }[];
