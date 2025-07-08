import ArtifactAttributeRecommendations from "./artifact-attribute-recommendations";
import ArtifactSetRecommendations from "./artifact-set-recommendations";
import type { ArtifactRecommendationsProps } from "./types";

export default function ArtifactRecommendations({ character, recommendations }: ArtifactRecommendationsProps) {
  return (
    <div className="flex flex-col gap-4">
      <ArtifactSetRecommendations character={character} recommendations={recommendations.sets} />
      <ArtifactAttributeRecommendations recommendations={recommendations.attributes} />
    </div>
  );
}
