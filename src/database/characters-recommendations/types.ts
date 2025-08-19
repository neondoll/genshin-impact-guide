import type { IVideoSource } from "../video-sources/types";
import type { TArtifactSetKey } from "../artifact-sets/types";
import type { TCharacterKey } from "../characters/types";
import type { TElementKey } from "../elements/types";
import type { TStatKey } from "../stats/types";
import type { TTalentKey } from "../talents/types";
import type { TWeaponKey } from "../weapons/types";
import { ArtifactSlotKeys } from "../artifact-slots/enums";

interface ICharacterArtifactSetRecommendation {
  is_better?: boolean;
  percent?: number;
  description?: string;
  notes?: string[];
}

interface ICharacterArtifactRecommendations {
  sets: TCharacterArtifactSetRecommendations;
  stats: TCharacterArtifactStatRecommendations;
}

interface ICharacterArtifactSetRecommendationWithKey extends ICharacterArtifactSetRecommendation {
  key: TArtifactSetKey;
}

interface ICharacterArtifactSetRecommendationWithKeys extends ICharacterArtifactSetRecommendation {
  keys: [TArtifactSetKey, TArtifactSetKey];
}

interface ICharacterArtifactStatRecommendation {
  key: TStatKey;
  percent?: number;
  use_percent?: number;
  description?: string;
  notes?: string[];
}

interface ICharacterSquadCharacterRecommendation {
  type: "character";
  key: TCharacterKey;
}

interface ICharacterSquadElementRecommendation {
  type: "element";
  key: TElementKey;
}

type TCharacterArtifactSetRecommendation = ICharacterArtifactSetRecommendationWithKey | ICharacterArtifactSetRecommendationWithKeys;
type TCharacterArtifactSetRecommendations = TCharacterArtifactSetRecommendation[];
type TCharacterArtifactStatRecommendations = Record<typeof ArtifactSlotKeys["Sands" | "Goblet" | "Circlet"] | "additional", ICharacterArtifactStatRecommendation[]>;
type TCharacterRecommendationSquadBestTeammates = TCharacterSquadItemRecommendation[];
type TCharacterTalentLevelingRecommendations = ICharacterTalentLevelingRecommendation[];
type TCharacterWeaponRecommendations = ICharacterWeaponRecommendation[];

export interface ICharacterRecommendations {
  artifacts?: ICharacterArtifactRecommendations;
  character_key: TCharacterKey;
  first_constellation_or_signature_weapon?: string;
  key_constellations?: (1 | 2 | 3 | 4 | 5 | 6)[];
  reference_point?: TCharacterReferencePointRecommendations | Record<string, TCharacterReferencePointRecommendations>;
  required_level?: 80 | 90;
  rotation?: string | Record<string, string>;
  squads?: {
    general_template: (TCharacterSquadItemRecommendation | TCharacterSquadItemRecommendation[])[];
    best_teammates: TCharacterRecommendationSquadBestTeammates | Record<string, TCharacterRecommendationSquadBestTeammates>;
  };
  talent_leveling?: TCharacterTalentLevelingRecommendations | Record<string, TCharacterTalentLevelingRecommendations>;
  video_sources?: IVideoSource[];
  weapons?: TCharacterWeaponRecommendations | Record<string, TCharacterWeaponRecommendations>;
}

export interface ICharacterTalentLevelingRecommendation {
  key: TTalentKey;
  priority: string;
}

export interface ICharacterWeaponRecommendation {
  key: TWeaponKey;
  refinement?: 1 | 5;
  is_better?: boolean;
  postfix?: string;
  percent?: number;
}

export type TCharacterReferencePointRecommendations = [string, string][];
export type TCharacterSquadItemRecommendation = ICharacterSquadCharacterRecommendation | ICharacterSquadElementRecommendation;
