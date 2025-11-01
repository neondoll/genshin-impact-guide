import type { CharacterRecommendations } from "@/types/character-recommendations";

export interface ArtifactRecommendationsProps {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["artifacts"]>;
}
export interface ArtifactSetRecommendationsProps {
  recommendations: ArtifactRecommendationsProps["recommendations"]["sets"];
}
export interface ArtifactStatRecommendationsProps {
  recommendations: ArtifactRecommendationsProps["recommendations"]["stats"];
}
export interface CharacterRecommendationsProps { recommendations: CharacterRecommendations }
export interface ReferencePointRecommendationsProps {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["reference_point"]>;
}
export interface RotationRecommendationsProps {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["rotation"]>;
}
export interface SquadRecommendationsProps {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["squads"]>;
}
export interface TalentLevelingRecommendationsProps {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["talent_leveling"]>;
}
export interface WeaponRecommendationsProps {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["weapons"]>;
}
