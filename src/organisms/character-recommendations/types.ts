import type { CharacterLoaderData } from "@/routes/character";
import type {
  CharacterReferencePointRecommendations,
  CharacterSquadItemRecommendation,
  CharacterTalentLevelingRecommendations,
  CharacterWeaponRecommendations,
} from "@/database/types/character-recommendations";

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
