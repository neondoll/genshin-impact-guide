import type { ArtifactSetLoaderData } from "@/routes/artifact-set";

export type ArtifactSetRecommendationsProps = {
  recommendations: NonNullable<ArtifactSetLoaderData["artifactSetRecommendations"]>;
};
export type CharacterRecommendationsProps = {
  recommendations: ArtifactSetRecommendationsProps["recommendations"]["characters"];
};
