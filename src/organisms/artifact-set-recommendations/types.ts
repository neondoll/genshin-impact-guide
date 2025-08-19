import type { IArtifactSetRecommendations } from "@/database/artifact-sets-recommendations/types";

export interface ArtifactSetRecommendationsProps {
  recommendations: IArtifactSetRecommendations;
}

export interface CharacterRecommendationsProps {
  recommendations: NonNullable<ArtifactSetRecommendationsProps["recommendations"]["characters"]>;
}

export interface PreferredStatsRecommendationsProps {
  recommendations: NonNullable<ArtifactSetRecommendationsProps["recommendations"]["preferred_stats"]>;
}
