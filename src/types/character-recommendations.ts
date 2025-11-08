import type { ARTIFACT_SLOTS } from "@/features/artifact-slots";
import type { ArtifactSetId } from "./artifact-set";
import type { CharacterId } from "./character";
import type { ElementId } from "./element";
import type { StatId } from "./stat";
import type { TalentId } from "./talent";
import type { VideoSourceId } from "./video-source";
import type { WeaponId } from "./weapon";

type CharacterArtifactStatRecommendations = Record<typeof ARTIFACT_SLOTS["SANDS" | "GOBLET" | "CIRCLET"] | "additional", CharacterArtifactStatRecommendation[]>;

type CharacterRecommendationSquadBestTeammates
  = CharacterSquadItemRecommendation[];

type CharacterTalentLevelingRecommendations
  = CharacterTalentLevelingRecommendation[];

type CharacterWeaponRecommendations
  = CharacterWeaponRecommendation[];

export interface CharacterArtifactRecommendations {
  sets:
    | CharacterArtifactSetRecommendations
    | Record<string, CharacterArtifactSetRecommendations>;
  stats: CharacterArtifactStatRecommendations;
}

export interface CharacterArtifactSetRecommendation {
  is_better?: boolean;
  percent?: number;
  description?: string;
  notes?: string[];
}

export interface CharacterArtifactSetRecommendationWithId
  extends CharacterArtifactSetRecommendation {
  id: ArtifactSetId;
}

export interface CharacterArtifactSetRecommendationWithIds
  extends CharacterArtifactSetRecommendation {
  ids: [ArtifactSetId, ArtifactSetId];
}

export interface CharacterArtifactStatRecommendation {
  id: StatId;
  percent?: number;
  use_percent?: number;
  description?: string;
  notes?: string[];
}

export interface CharacterRecommendations {
  artifacts?: CharacterArtifactRecommendations;
  character_id: CharacterId;
  first_constellation_or_signature_weapon?: string;
  key_constellations?: (1 | 2 | 3 | 4 | 5 | 6)[];
  reference_point?:
    | CharacterReferencePointRecommendations
    | Record<string, CharacterReferencePointRecommendations>;
  required_level?: string | number;
  rotation?:
    | string
    | string[]
    | Record<string, string | string[]>;
  squads?:
    | CharacterSquadRecommendations
    | Record<string, CharacterSquadRecommendations>;
  talent_leveling?:
    | CharacterTalentLevelingRecommendations
    | Record<string, CharacterTalentLevelingRecommendations>;
  video_source_ids?: VideoSourceId[];
  weapons?:
    | CharacterWeaponRecommendations
    | Record<string, CharacterWeaponRecommendations>;
}

export interface CharacterSquadCharacterRecommendation {
  type: "character";
  id: CharacterId;
}

export interface CharacterSquadElementRecommendation {
  type: "element";
  id: ElementId;
}

export interface CharacterSquadOtherRecommendation {
  type: "other";
  title: string;
}

export interface CharacterSquadRecommendations {
  general_template: (
    | CharacterSquadItemRecommendation
    | CharacterSquadItemRecommendation[]
  )[];
  best_teammates:
    | CharacterRecommendationSquadBestTeammates
    | Record<string, CharacterRecommendationSquadBestTeammates>;
}

export interface CharacterTalentLevelingRecommendation {
  id: TalentId;
  priority: string;
  reference_level?: string | number;
}

export interface CharacterWeaponRecommendation {
  id: WeaponId;
  refinement?: 1 | 5;
  is_better?: boolean | string;
  postfix?: string;
  percent?: number;
  notes?: string[];
}

export type CharacterArtifactSetRecommendations = (
  | CharacterArtifactSetRecommendationWithId
  | CharacterArtifactSetRecommendationWithIds
)[];

export type CharacterReferencePointRecommendations = [string, string][];

export type CharacterSquadItemRecommendation
  = | CharacterSquadCharacterRecommendation
    | CharacterSquadElementRecommendation
    | CharacterSquadOtherRecommendation;
