import artifactPieces from "./artifact-pieces";
import artifactSets from "./artifact-sets";
import attributes from "./attributes";
import characterRecommendations from "./character-recommendations";
import characterRoles from "./character-roles";
import characters from "./characters";
import elements from "./elements";
import regions from "./regions";
import talents from "./talents";
import weaponTypes from "./weapon-types";
import weapons from "./weapons";
import type { ArtifactSetUid } from "./types/artifact-sets";
import type { AttributeUid } from "./types/attributes";
import type { CharacterRoleUid } from "./types/character-roles";
import type { CharacterUid } from "./types/characters";
import type { ElementUid } from "./types/elements";
import type { RegionUid } from "./types/regions";
import type { TalentUid } from "./types/talents";
import type { WeaponTypeUid } from "./types/weapon-types";
import type { WeaponUid } from "./types/weapons";

export function getArtifactPieces() {
  return artifactPieces;
}

export function getArtifactSet(artifactSetUid: ArtifactSetUid) {
  return artifactSets[artifactSetUid];
}

export function getArtifactSets() {
  return artifactSets;
}

export function getAttribute(attributeUid: AttributeUid) {
  return attributes[attributeUid];
}

export function getCharacter(characterUid: CharacterUid) {
  return characters[characterUid];
}

export function getCharacterRecommendations(characterUid: CharacterUid) {
  return characterUid in characterRecommendations ? characterRecommendations[characterUid] : undefined;
}

export function getCharacterRole(characterRoleUid: CharacterRoleUid) {
  return characterRoles[characterRoleUid];
}

export function getCharacters() {
  return characters;
}

export function getElement(elementUid: ElementUid) {
  return elements[elementUid];
}

export function getRegion(regionUid: RegionUid) {
  return regions[regionUid];
}

export function getTalent(talentUid: TalentUid) {
  return talents[talentUid];
}

export function getWeapon(weaponUid: WeaponUid) {
  return weapons[weaponUid];
}

export function getWeapons() {
  return weapons;
}

export function getWeaponType(weaponTypeUid: WeaponTypeUid) {
  return weaponTypes[weaponTypeUid];
}
