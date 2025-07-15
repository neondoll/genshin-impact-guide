import { ArtifactPieceUidEnum } from "../enums/artifact-piece";
import type { ArtifactSetUid } from "./artifact-set";
import type { AttributeUid } from "./attribute";
import type { CharacterUid } from "./character";
import type { ElementUid } from "./element";
import type { TalentUid } from "./talent";
import type { WeaponUid } from "./weapon";

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
type CharacterWeaponRecommendation = {
  uid: WeaponUid;
  refinement?: 1 | 5;
  is_better?: boolean;
  postfix?: string;
  percent?: number;
};
type CharacterRecommendationSquadBestTeammates = CharacterSquadItemRecommendation[];

export type CharacterRecommendations = {
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
export type CharacterReferencePointRecommendations = [string, string][];
export type CharacterSquadItemRecommendation
  = CharacterSquadCharacterRecommendation
    | CharacterSquadElementRecommendation;
export type CharacterTalentLevelingRecommendations = CharacterTalentLevelingRecommendation[];
export type CharacterWeaponRecommendations = CharacterWeaponRecommendation[];
