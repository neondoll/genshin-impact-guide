import type { ArtifactSetRecommendations } from "@/types/artifact-set-recommendations";

export interface ArtifactSetRecommendationsProps {
  recommendations: ArtifactSetRecommendations;
}

export interface CharacterRecommendationsProps {
  recommendations: NonNullable<ArtifactSetRecommendationsProps["recommendations"]["characters"]>;
}

export interface PreferredStatsRecommendationsProps {
  recommendations: NonNullable<ArtifactSetRecommendationsProps["recommendations"]["preferred_stats"]>;
}
