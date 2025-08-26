import type { ArtifactSetId } from "../artifact-sets/types";
import type { CharacterId } from "../characters/types";
import type { IVideoSource } from "@/database/video-sources/types";
import type { TElementKey } from "@/database/elements/types";
import type { TStatKey } from "@/database/stats/types";
import type { TTalentKey } from "@/database/talents/types";
import type { TWeaponKey } from "@/database/weapons/types";
import { ArtifactSlotIds } from "../artifact-slots/enums";

interface CharacterSquadCharacterRecommendation {
  type: "character";
  id: CharacterId;
}

interface CharacterSquadElementRecommendation {
  type: "element";
  id: TElementKey;
}

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
  id: TStatKey;
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
  squads?: {
    general_template: (CharacterSquadItemRecommendation | CharacterSquadItemRecommendation[])[];
    best_teammates: CharacterRecommendationSquadBestTeammates | Record<string, CharacterRecommendationSquadBestTeammates>;
  };
  talent_leveling?: CharacterTalentLevelingRecommendations | Record<string, CharacterTalentLevelingRecommendations>;
  video_sources?: IVideoSource[];
  weapons?: CharacterWeaponRecommendations | Record<string, CharacterWeaponRecommendations>;
}

export interface CharacterTalentLevelingRecommendation {
  id: TTalentKey;
  priority: string;
}

export interface CharacterWeaponRecommendation {
  id: TWeaponKey;
  refinement?: 1 | 5;
  is_better?: boolean;
  postfix?: string;
  percent?: number;
}

export type CharacterReferencePointRecommendations = [string, string][];
export type CharacterSquadItemRecommendation
  = CharacterSquadCharacterRecommendation
    | CharacterSquadElementRecommendation;
