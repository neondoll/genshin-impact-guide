import type { ArtifactPieceUidEnum } from "../enums/artifact-pieces";
import type { ArtifactSetUid } from "./artifact-sets";
import type { AttributeUid } from "./attributes";
import type { CharacterUid } from "./characters";
import type { ElementUid } from "./elements";
import type { TalentUid } from "./talents";
import type { WeaponUid } from "./weapons";

type CharacterArtifactAttributeRecommendation = {
  uid: AttributeUid;
  percent?: number;
  use_percent?: number;
  description?: string;
  notes?: string[];
};
type CharacterArtifactAttributeRecommendations = Record<typeof ArtifactPieceUidEnum["SandsOfEon" | "GobletOfEonothem" | "CircletOfLogos"] | "additional", CharacterArtifactAttributeRecommendation[]>;
type CharacterArtifactRecommendations = {
  sets: CharacterArtifactSetRecommendations;
  attributes: CharacterArtifactAttributeRecommendations;
};
type CharacterArtifactSetRecommendation = {
  uid: ArtifactSetUid;
  is_better?: boolean;
  percent?: number;
  description?: string;
  notes?: string[];
};
type CharacterArtifactSetRecommendations = CharacterArtifactSetRecommendation[];
type CharacterSquadElementRecommendation = { type: "element"; uid: ElementUid };
type CharacterSquadCharacterRecommendation = { type: "character"; uid: CharacterUid };
type CharacterTalentLevelingRecommendation = { uid: TalentUid; priority: string };
type CharacterWeaponRecommendation = { uid: WeaponUid; refinement?: 1 | 5; postfix?: string; percent?: number };
type CharacterRecommendationSquadBestTeammates = CharacterSquadItemRecommendation[];

export type CharacterRecommendation = {
  artifacts?: CharacterArtifactRecommendations;
  character_uid: CharacterUid;
  first_constellation_or_signature_weapon?: string;
  key_constellations?: (1 | 2 | 3 | 4 | 5 | 6)[];
  reference_point?: CharacterReferencePointRecommendations | Record<string, CharacterReferencePointRecommendations>;
  required_level?: 80 | 90;
  rotation?: string | Record<string, string>;
  squads?: {
    general_template: (CharacterSquadItemRecommendation | CharacterSquadItemRecommendation[])[];
    best_teammates: CharacterRecommendationSquadBestTeammates | Record<string, CharacterRecommendationSquadBestTeammates>;
  };
  talent_leveling?: CharacterTalentLevelingRecommendations | Record<string, CharacterTalentLevelingRecommendations>;
  video_sources?: { title: string; vk_url?: string; youtube_url?: string }[];
  weapons?: CharacterWeaponRecommendations | Record<string, CharacterWeaponRecommendations>;
};
export type CharacterRecommendations = Record<CharacterUid, CharacterRecommendation>;
export type CharacterReferencePointRecommendations = [string, string][];
export type CharacterSquadItemRecommendation
  = CharacterSquadCharacterRecommendation | CharacterSquadElementRecommendation;
export type CharacterTalentLevelingRecommendations = CharacterTalentLevelingRecommendation[];
export type CharacterWeaponRecommendations = CharacterWeaponRecommendation[];
