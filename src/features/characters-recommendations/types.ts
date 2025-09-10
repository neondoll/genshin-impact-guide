import type { ArtifactSetId } from "../artifact-sets/types";
import type { CharacterId } from "../characters/types";
import type { ElementId } from "../elements/types";
import type { StatId } from "../stats/types";
import type { TalentId } from "../talents/types";
import type { VideoSource } from "../video-sources/types";
import type { WeaponId } from "../weapons/types";
import { ArtifactSlotIds } from "../artifact-slots/enums";

type CharacterArtifactSetRecommendations = (CharacterArtifactSetRecommendationWithId | CharacterArtifactSetRecommendationWithIds)[];
type CharacterArtifactStatRecommendations = Record<typeof ArtifactSlotIds["Sands" | "Goblet" | "Circlet"] | "additional", CharacterArtifactStatRecommendation[]>;
type CharacterRecommendationSquadBestTeammates = CharacterSquadItemRecommendation[];
type CharacterTalentLevelingRecommendations = CharacterTalentLevelingRecommendation[];
type CharacterWeaponRecommendations = CharacterWeaponRecommendation[];

export interface CharacterArtifactRecommendations {
  sets: CharacterArtifactSetRecommendations;
  stats: CharacterArtifactStatRecommendations;
}

export interface CharacterArtifactSetRecommendation {
  is_better?: boolean;
  percent?: number;
  description?: string;
  notes?: string[];
}

export interface CharacterArtifactSetRecommendationWithId extends CharacterArtifactSetRecommendation {
  id: ArtifactSetId;
}

export interface CharacterArtifactSetRecommendationWithIds extends CharacterArtifactSetRecommendation {
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
  reference_point?: CharacterReferencePointRecommendations | Record<string, CharacterReferencePointRecommendations>;
  required_level?: 80 | 90;
  rotation?: string | Record<string, string>;
  squads?: CharacterSquadRecommendations | Record<string, CharacterSquadRecommendations>;
  talent_leveling?: CharacterTalentLevelingRecommendations | Record<string, CharacterTalentLevelingRecommendations>;
  video_sources?: VideoSource[];
  weapons?: CharacterWeaponRecommendations | Record<string, CharacterWeaponRecommendations>;
}

export interface CharacterSquadCharacterRecommendation {
  type: "character";
  id: CharacterId;
}

export interface CharacterSquadElementRecommendation {
  type: "element";
  id: ElementId;
}

export interface CharacterSquadRecommendations {
  general_template: (CharacterSquadItemRecommendation | CharacterSquadItemRecommendation[])[];
  best_teammates: CharacterRecommendationSquadBestTeammates | Record<string, CharacterRecommendationSquadBestTeammates>;
}

export interface CharacterTalentLevelingRecommendation {
  id: TalentId;
  priority: string;
}

export interface CharacterWeaponRecommendation {
  id: WeaponId;
  refinement?: 1 | 5;
  is_better?: boolean;
  postfix?: string;
  percent?: number;
}

export type CharacterReferencePointRecommendations = [string, string][];
export type CharacterSquadItemRecommendation
  = CharacterSquadCharacterRecommendation | CharacterSquadElementRecommendation;
