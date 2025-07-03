import { artifactPieces } from "./artifact-pieces";
import { artifactSets } from "./artifact-sets";
import { attributes } from "./attributes";
import { characterRoles } from "./character-roles";
import { characters } from "./characters";
import { elements } from "./elements";
import { guideCharacters } from "./guide-characters";
import { regions } from "./regions";
import { talents } from "./talents";
import { weaponTypes } from "./weapon-types";
import { weapons } from "./weapons";
import { worlds } from "./worlds";
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

export function getArtifactSet(uid: ArtifactSetUid) {
  return artifactSets[uid];
}

export function getArtifactSets() {
  return artifactSets;
}

export function getAttribute(uid: AttributeUid) {
  return attributes[uid];
}

export function getAttributes() {
  return attributes;
}

export function getCharacter(uid: CharacterUid) {
  return characters[uid];
}

export function getCharacterRole(uid: CharacterRoleUid) {
  return characterRoles[uid];
}

export function getCharacterRoles() {
  return characterRoles;
}

export function getCharacters() {
  return characters;
}

export function getElement(uid: ElementUid) {
  return elements[uid];
}

export function getElementCharacters(uid: ElementUid) {
  return Object.values(characters).filter(character => character.element_uid === uid);
}

export function getElements() {
  return elements;
}

export function getGuideCharacter(characterUid: CharacterUid) {
  return characterUid in guideCharacters ? guideCharacters[characterUid] : undefined;
}

export function getGuideCharacters() {
  return guideCharacters;
}

export function getRegion(uid: RegionUid) {
  return regions[uid];
}

export function getRegions() {
  return regions;
}

export function getTalent(uid: TalentUid) {
  return talents[uid];
}

export function getTalents() {
  return talents;
}

export function getWeapon(uid: WeaponUid) {
  return weapons[uid];
}

export function getWeapons() {
  return weapons;
}

export function getWeaponType(uid: WeaponTypeUid) {
  return weaponTypes[uid];
}

export function getWeaponTypes() {
  return weaponTypes;
}

export function getWorlds() {
  return worlds;
}
