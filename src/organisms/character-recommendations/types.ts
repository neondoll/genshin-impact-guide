import type { Character } from "@/types/character";
import type { CharacterRecommendations } from "@/types/character-recommendations";

export type ArtifactRecommendationsProps = {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["artifacts"]>;
};
export type ArtifactSetRecommendationsProps = {
  recommendations: ArtifactRecommendationsProps["recommendations"]["sets"];
};
export type ArtifactStatRecommendationsProps = {
  recommendations: ArtifactRecommendationsProps["recommendations"]["stats"];
};
export type CharacterRecommendationsProps = {
  character: Character;
  recommendations: CharacterRecommendations;
};
export type ReferencePointRecommendationsProps = {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["reference_point"]>;
};
export type RotationRecommendationsProps = {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["rotation"]>;
};
export type SquadRecommendationsProps = {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["squads"]>;
};
export type TalentLevelingRecommendationsProps = {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["talent_leveling"]>;
};
export type WeaponRecommendationsProps = {
  character: CharacterRecommendationsProps["character"];
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["weapons"]>;
};
