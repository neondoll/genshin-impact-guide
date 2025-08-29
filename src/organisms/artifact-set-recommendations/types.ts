import type { ArtifactSetRecommendations } from "@/features/artifact-sets-recommendations/types";

export interface ArtifactSetRecommendationsProps {
  recommendations: ArtifactSetRecommendations;
}

export interface CharacterRecommendationsProps {
  recommendations: NonNullable<ArtifactSetRecommendationsProps["recommendations"]["characters"]>;
}

export interface PreferredStatsRecommendationsProps {
  recommendations: NonNullable<ArtifactSetRecommendationsProps["recommendations"]["preferred_stats"]>;
}
