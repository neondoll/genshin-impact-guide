import ArtifactSetRecommendations from "./artifact-set-recommendations";
import ArtifactStatRecommendations from "./artifact-stat-recommendations";
import type { ArtifactRecommendationsProps } from "./types";

export default function ArtifactRecommendations({ recommendations }: ArtifactRecommendationsProps) {
  return (
    <div className="flex flex-col gap-4">
      <ArtifactSetRecommendations recommendations={recommendations.sets} />
      <ArtifactStatRecommendations recommendations={recommendations.stats} />
    </div>
  );
}
