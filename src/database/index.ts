import artifactPieces from "./artifact-pieces";
import artifactSets from "./artifact-sets";
import artifactSetsRecommendations from "./artifact-sets-recommendations";
import attributes from "./attributes";
import characterRecommendations from "./character-recommendations";
import characterRoles from "./character-roles";
import characters from "./characters";
import elements from "./elements";
import regions from "./regions";
import talents from "./talents";
import tierListsWeapons from "./tier-lists-weapons";
import weaponTypes from "./weapon-types";
import weapons from "./weapons";
import type { ArtifactSet, ArtifactSetUid } from "./types/artifact-set";
import type { Attribute, AttributeUid } from "./types/attribute";
import type { Character, CharacterUid } from "./types/character";
import type { CharacterRoleUid } from "./types/character-role";
import type { ElementUid } from "./types/element";
import type { RegionUid } from "./types/region";
import type { TalentUid } from "./types/talent";
import type { Weapon, WeaponUid } from "./types/weapon";
import type { WeaponTypeUid } from "./types/weapon-type";

export function getArtifactPieces() {
  return Object.values(artifactPieces).sort((a, b) => a.sort_by - b.sort_by);
}

export function getArtifactSet(artifactSetUid: ArtifactSetUid) {
  return artifactSets[artifactSetUid];
}

export function getArtifactSetRecommendations(artifactSetUid: ArtifactSetUid) {
  return artifactSetUid in artifactSetsRecommendations ? artifactSetsRecommendations[artifactSetUid] : undefined;
}

export function getArtifactSets() {
  return Object.values(artifactSets).sort(sortArtifactSets);
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
  return Object.values(characters).sort(sortCharacters);
}

export function getElement(elementUid: ElementUid) {
  return elements[elementUid];
}

export function getElements() {
  return elements;
}

export function getRegion(regionUid: RegionUid) {
  return regions[regionUid];
}

export function getTalent(talentUid: TalentUid) {
  return talents[talentUid];
}

export function getTierListsWeapons() {
  return tierListsWeapons;
}

export function getWeapon(weaponUid: WeaponUid) {
  return weapons[weaponUid];
}

export function getWeapons() {
  return Object.values(weapons).sort(sortWeapons);
}

export function getWeaponType(weaponTypeUid: WeaponTypeUid) {
  return weaponTypes[weaponTypeUid];
}

export function getWeaponTypes() {
  return weaponTypes;
}

export function sortArtifactSets(a: ArtifactSet, b: ArtifactSet) {
  const aMaxQuality = Math.max(...a.qualities);
  const bMaxQuality = Math.max(...b.qualities);

  return aMaxQuality === bMaxQuality ? a.name.localeCompare(b.name) : bMaxQuality - aMaxQuality;
}

export function sortAttributes(a: Attribute, b: Attribute) {
  const aName = a.abbreviation || a.name;
  const bName = b.abbreviation || b.name;

  return aName.localeCompare(bName);
}

export function sortCharacters(a: Character, b: Character) {
  return a.quality === b.quality ? a.name.localeCompare(b.name) : b.quality - a.quality;
}

export function sortWeapons(a: Weapon, b: Weapon) {
  return a.quality === b.quality ? a.name.localeCompare(b.name) : b.quality - a.quality;
}
