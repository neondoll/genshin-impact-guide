import { ArtifactSlotKeys } from "../enums/artifact-slot";
import type { ArtifactSetKey } from "./artifact-set";
import type { CharacterKey } from "./character";
import type { ElementKey } from "./element";
import type { StatKey } from "./stat";
import type { TalentKey } from "./talent";
import type { VideoSource } from "./video-source";
import type { WeaponKey } from "./weapon";

type _CharacterArtifactSetRecommendation = {
  is_better?: boolean;
  percent?: number;
  description?: string;
  notes?: string[];
};

interface CharacterArtifactSetRecommendationWithkey extends _CharacterArtifactSetRecommendation {
  key: ArtifactSetKey;
}

interface CharacterArtifactSetRecommendationWithkeys extends _CharacterArtifactSetRecommendation {
  keys: [ArtifactSetKey, ArtifactSetKey];
}

type CharacterArtifactRecommendations = {
  sets: CharacterArtifactSetRecommendations;
  stats: CharacterArtifactStatRecommendations;
};
type CharacterArtifactSetRecommendations = CharacterArtifactSetRecommendation[];
type CharacterArtifactStatRecommendation = {
  key: StatKey;
  percent?: number;
  use_percent?: number;
  description?: string;
  notes?: string[];
};
type CharacterArtifactStatRecommendations = Record<typeof ArtifactSlotKeys["SandsOfEon" | "GobletOfEonothem" | "CircletOfLogos"] | "additional", CharacterArtifactStatRecommendation[]>;
type CharacterSquadElementRecommendation = { type: "element"; key: ElementKey };
type CharacterSquadCharacterRecommendation = { type: "character"; key: CharacterKey };
type CharacterTalentLevelingRecommendation = { key: TalentKey; priority: string };
type CharacterWeaponRecommendation = {
  key: WeaponKey;
  refinement?: 1 | 5;
  is_better?: boolean;
  postfix?: string;
  percent?: number;
};
type CharacterRecommendationSquadBestTeammates = CharacterSquadItemRecommendation[];

export type CharacterArtifactSetRecommendation
  = CharacterArtifactSetRecommendationWithkey | CharacterArtifactSetRecommendationWithkeys;
export type CharacterRecommendations = {
  artifacts?: CharacterArtifactRecommendations;
  character_key: CharacterKey;
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
  video_sources?: VideoSource[];
  weapons?: CharacterWeaponRecommendations | Record<string, CharacterWeaponRecommendations>;
};
export type CharacterReferencePointRecommendations = [string, string][];
export type CharacterSquadItemRecommendation
  = CharacterSquadCharacterRecommendation | CharacterSquadElementRecommendation;
export type CharacterTalentLevelingRecommendations = CharacterTalentLevelingRecommendation[];
export type CharacterWeaponRecommendations = CharacterWeaponRecommendation[];
