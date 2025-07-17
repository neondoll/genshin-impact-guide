import type {
  CharacterReferencePointRecommendations,
  CharacterSquadItemRecommendation,
  CharacterTalentLevelingRecommendations,
  CharacterWeaponRecommendations,
} from "@/database/types/character-recommendations";
import type { CharacterLoaderData } from "@/routes/character";

export type ArtifactAttributeRecommendationsProps = {
  recommendations: ArtifactRecommendationsProps["recommendations"]["attributes"];
};
export type ArtifactRecommendationsProps = {
  character: CharacterRecommendationsProps["character"];
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["artifacts"]>;
};
export type ArtifactSetRecommendationsProps = {
  character: ArtifactRecommendationsProps["character"];
  recommendations: ArtifactRecommendationsProps["recommendations"]["sets"];
};
export type CharacterRecommendationsProps = {
  character: CharacterLoaderData["character"];
  recommendations: NonNullable<CharacterLoaderData["characterRecommendations"]>;
};
export type ReferencePointRecommendationsProps = {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["reference_point"]>;
};
export type ReferencePointRecommendationsTableProps = {
  recommendations: CharacterReferencePointRecommendations;
};
export type RotationRecommendationsProps = {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["rotation"]>;
};
export type SquadRecommendationsProps = {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["squads"]>;
};
export type SquadRecommendationsItemProps = CharacterSquadItemRecommendation;
export type TalentLevelingRecommendationsProps = {
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["talent_leveling"]>;
};
export type TalentLevelingRecommendationsTableProps = {
  recommendations: CharacterTalentLevelingRecommendations;
};
export type WeaponRecommendationsProps = {
  character: CharacterRecommendationsProps["character"];
  recommendations: NonNullable<CharacterRecommendationsProps["recommendations"]["weapons"]>;
};
export type WeaponRecommendationsTableProps = {
  character: WeaponRecommendationsProps["character"];
  recommendations: CharacterWeaponRecommendations;
};
