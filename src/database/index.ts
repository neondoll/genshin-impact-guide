import artifactSets from "./artifact-sets";
import artifactSetsRecommendations from "./artifact-sets-recommendations";
import artifactSlots from "./artifact-slots";
import characterRecommendations from "./character-recommendations";
import characterRoles from "./character-roles";
import characters from "./characters";
import elements from "./elements";
import regions from "./regions";
import stats from "./stats";
import talents from "./talents";
import tierListsWeapons from "./tier-lists-weapons";
import weaponTypes from "./weapon-types";
import weapons from "./weapons";
import type { ArtifactSet, ArtifactSetKey } from "./types/artifact-set";
import type { ArtifactSlot } from "./types/artifact-slot";
import type { Character, CharacterKey } from "./types/character";
import type { CharacterRoleKey } from "./types/character-role";
import type { ElementKey } from "./types/element";
import type { RegionKey } from "./types/region";
import type { Stat, StatKey } from "./types/stat";
import type { TalentKey } from "./types/talent";
import type { Weapon, WeaponKey } from "./types/weapon";
import type { WeaponTypeKey } from "./types/weapon-type";

export function getArtifactSet(artifactSetKey: ArtifactSetKey) {
  return artifactSets[artifactSetKey];
}

export function getArtifactSetRecommendations(artifactSetKey: ArtifactSetKey) {
  return artifactSetKey in artifactSetsRecommendations ? artifactSetsRecommendations[artifactSetKey] : undefined;
}

export function getArtifactSets() {
  return Object.values(artifactSets).sort(sortArtifactSets);
}

export function getArtifactSlots() {
  return Object.values(artifactSlots).sort(sortArtifactSlots);
}

export function getCharacter(characterKey: CharacterKey) {
  return characters[characterKey];
}

export function getCharacterRecommendations(characterKey: CharacterKey) {
  return characterKey in characterRecommendations ? characterRecommendations[characterKey] : undefined;
}

export function getCharacterRole(characterRoleKey: CharacterRoleKey) {
  return characterRoles[characterRoleKey];
}

export function getCharacters() {
  return Object.values(characters).sort(sortCharacters);
}

export function getElement(elementKey: ElementKey) {
  return elements[elementKey];
}

export function getElements() {
  return elements;
}

export function getRegion(regionKey: RegionKey) {
  return regions[regionKey];
}

export function getStat(statKey: StatKey) {
  return stats[statKey];
}

export function getTalent(talentKey: TalentKey) {
  return talents[talentKey];
}

export function getTierListsWeapons() {
  return tierListsWeapons;
}

export function getWeapon(weaponKey: WeaponKey) {
  return weapons[weaponKey];
}

export function getWeapons() {
  return Object.values(weapons).sort(sortWeapons);
}

export function getWeaponType(weaponTypeKey: WeaponTypeKey) {
  return weaponTypes[weaponTypeKey];
}

export function getWeaponTypes() {
  return weaponTypes;
}

export function sortArtifactSets(a: ArtifactSet, b: ArtifactSet) {
  const aMaxRarity = Math.max(...a.rarities);
  const bMaxRarity = Math.max(...b.rarities);

  return aMaxRarity === bMaxRarity ? a.name.localeCompare(b.name) : bMaxRarity - aMaxRarity;
}

export function sortArtifactSlots(a: ArtifactSlot, b: ArtifactSlot) {
  return a.sort_by - b.sort_by;
}

export function sortCharacters(a: Character, b: Character) {
  return a.rarity === b.rarity ? a.name.localeCompare(b.name) : b.rarity - a.rarity;
}

export function sortStats(a: Stat, b: Stat) {
  const aName = a.abbreviation || a.name;
  const bName = b.abbreviation || b.name;

  return aName.localeCompare(bName);
}

export function sortWeapons(a: Weapon, b: Weapon) {
  return a.rarity === b.rarity ? a.name.localeCompare(b.name) : b.rarity - a.rarity;
}
