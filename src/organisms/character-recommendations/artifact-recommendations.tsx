import ArtifactSetRecommendations from "./artifact-set-recommendations";
import ArtifactStatRecommendations from "./artifact-stat-recommendations";
import type { ArtifactRecommendationsProps } from "./types";

export default function ArtifactRecommendations({ character, recommendations }: ArtifactRecommendationsProps) {
  return (
    <div className="flex flex-col gap-4">
      <ArtifactSetRecommendations character={character} recommendations={recommendations.sets} />
      <ArtifactStatRecommendations recommendations={recommendations.stats} />
    </div>
  );
}
