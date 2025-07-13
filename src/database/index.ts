import artifactPieces from "./artifact-pieces";
import artifactSets from "./artifact-sets";
import attributes from "./attributes";
import characterRecommendations from "./character-recommendations";
import characterRoles from "./character-roles";
import characters from "./characters";
import elements from "./elements";
import regions from "./regions";
import talents from "./talents";
import tierListWeaponTypes from "./tier-list-weapon-types";
import weaponTypes from "./weapon-types";
import weapons from "./weapons";
import type { ArtifactSetUid } from "./types/artifact-set";
import type { AttributeUid } from "./types/attribute";
import type { CharacterRoleUid } from "./types/character-role";
import type { CharacterUid } from "./types/character";
import type { ElementUid } from "./types/element";
import type { RegionUid } from "./types/region";
import type { TalentUid } from "./types/talent";
import type { WeaponTypeUid } from "./types/weapon-type";
import type { WeaponUid } from "./types/weapon";

export function getArtifactPieces() {
  return Object.values(artifactPieces).sort((a, b) => a.sort_by - b.sort_by);
}

export function getArtifactSet(artifactSetUid: ArtifactSetUid) {
  return artifactSets[artifactSetUid];
}

export function getArtifactSets() {
  return Object.values(artifactSets).sort((a, b) => a.name.localeCompare(b.name));
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
  return Object.values(characters).sort((a, b) => a.name.localeCompare(b.name));
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

export function getTierListWeaponTypes() {
  return tierListWeaponTypes;
}

export function getWeapon(weaponUid: WeaponUid) {
  return weapons[weaponUid];
}

export function getWeapons() {
  return Object.values(weapons).sort((a, b) => a.name.localeCompare(b.name));
}

export function getWeaponType(weaponTypeUid: WeaponTypeUid) {
  return weaponTypes[weaponTypeUid];
}
