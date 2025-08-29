import type {
  CharacterArtifactRecommendations,
  CharacterArtifactSetRecommendation,
  CharacterArtifactSetRecommendationWithId,
  CharacterArtifactSetRecommendationWithIds,
  CharacterArtifactStatRecommendation,
  CharacterRecommendations,
  CharacterSquadCharacterRecommendation,
  CharacterSquadElementRecommendation,
  CharacterSquadRecommendations,
  CharacterTalentLevelingRecommendation,
  CharacterWeaponRecommendation,
} from "./types";

class CharacterArtifactSetRecommendationClass implements CharacterArtifactSetRecommendation {
  private _is_better: CharacterArtifactSetRecommendation["is_better"] = false;
  private _percent: CharacterArtifactSetRecommendation["percent"];
  private _description: CharacterArtifactSetRecommendation["description"];
  private _notes: CharacterArtifactSetRecommendation["notes"];

  get description() {
    return this._description;
  }

  get is_better() {
    return this._is_better;
  }

  get notes() {
    return this._notes;
  }

  get percent() {
    return this._percent;
  }

  setDescription(val: NonNullable<CharacterArtifactSetRecommendation["description"]>) {
    this._description = val;

    return this;
  }

  setIsBetter() {
    this._is_better = true;

    return this;
  }

  setNotes(val: NonNullable<CharacterArtifactSetRecommendation["notes"]>) {
    this._notes = val;

    return this;
  }

  setPercent(val: NonNullable<CharacterArtifactSetRecommendation["percent"]>) {
    this._percent = val;

    return this;
  }
}

export class CharacterArtifactRecommendationsClass implements CharacterArtifactRecommendations {
  readonly sets: CharacterArtifactRecommendations["sets"];
  readonly stats: CharacterArtifactRecommendations["stats"];

  constructor(sets: CharacterArtifactRecommendations["sets"], stats: CharacterArtifactRecommendations["stats"]) {
    this.sets = sets;
    this.stats = stats;
  }

  static init(params: ConstructorParameters<typeof CharacterArtifactRecommendationsClass>) {
    return new CharacterArtifactRecommendationsClass(...params);
  }
}

export class CharacterArtifactSetRecommendationWithIdClass extends CharacterArtifactSetRecommendationClass implements CharacterArtifactSetRecommendationWithId {
  readonly id: CharacterArtifactSetRecommendationWithId["id"];

  constructor(id: CharacterArtifactSetRecommendationWithId["id"]) {
    super();
    this.id = id;
  }
}

export class CharacterArtifactSetRecommendationWithIdsClass extends CharacterArtifactSetRecommendationClass implements CharacterArtifactSetRecommendationWithIds {
  readonly ids: CharacterArtifactSetRecommendationWithIds["ids"];

  constructor(ids: CharacterArtifactSetRecommendationWithIds["ids"]) {
    super();
    this.ids = ids;
  }
}

export class CharacterArtifactStatRecommendationClass implements CharacterArtifactStatRecommendation {
  readonly id: CharacterArtifactStatRecommendation["id"];
  readonly percent: CharacterArtifactStatRecommendation["percent"];
  private _use_percent: CharacterArtifactStatRecommendation["use_percent"];
  private _description: CharacterArtifactStatRecommendation["description"];
  private _notes: CharacterArtifactStatRecommendation["notes"];

  constructor(id: CharacterArtifactStatRecommendation["id"]) {
    this.id = id;
  }

  get description() {
    return this._description;
  }

  get notes() {
    return this._notes;
  }

  get use_percent() {
    return this._use_percent;
  }

  setDescription(val: NonNullable<CharacterArtifactStatRecommendation["description"]>) {
    this._description = val;

    return this;
  }

  setNotes(val: NonNullable<CharacterArtifactStatRecommendation["notes"]>) {
    this._notes = val;

    return this;
  }

  setUsePercent(val: NonNullable<CharacterArtifactStatRecommendation["use_percent"]>) {
    this._use_percent = val;

    return this;
  }
}

export class CharacterRecommendationsClass implements CharacterRecommendations {
  private _artifacts: CharacterRecommendations["artifacts"];
  readonly character_id: CharacterRecommendations["character_id"];
  private _first_constellation_or_signature_weapon: CharacterRecommendations["first_constellation_or_signature_weapon"];
  private _key_constellations: CharacterRecommendations["key_constellations"];
  private _reference_point: CharacterRecommendations["reference_point"];
  private _required_level: CharacterRecommendations["required_level"];
  private _rotation: CharacterRecommendations["rotation"];
  private _squads: CharacterRecommendations["squads"];
  private _talent_leveling: CharacterRecommendations["talent_leveling"];
  private _video_sources: CharacterRecommendations["video_sources"];
  private _weapons: CharacterRecommendations["weapons"];

  constructor(characterId: CharacterRecommendations["character_id"]) {
    this.character_id = characterId;
  }

  get artifacts() {
    return this._artifacts;
  }

  get first_constellation_or_signature_weapon() {
    return this._first_constellation_or_signature_weapon;
  }

  get key_constellations() {
    return this._key_constellations;
  }

  get reference_point() {
    return this._reference_point;
  }

  get required_level() {
    return this._required_level;
  }

  get rotation() {
    return this._rotation;
  }

  get squads() {
    return this._squads;
  }

  get talent_leveling() {
    return this._talent_leveling;
  }

  get video_sources() {
    return this._video_sources;
  }

  get weapons() {
    return this._weapons;
  }

  setArtifacts(val: NonNullable<CharacterRecommendations["artifacts"]>) {
    this._artifacts = val;

    return this;
  }

  setFirstConstellationOrSignatureWeapon(val: NonNullable<CharacterRecommendations["first_constellation_or_signature_weapon"]>) {
    this._first_constellation_or_signature_weapon = val;

    return this;
  }

  setKeyConstellations(val: NonNullable<CharacterRecommendations["key_constellations"]>) {
    this._key_constellations = val;

    return this;
  }

  setReferencePoint(val: NonNullable<CharacterRecommendations["reference_point"]>) {
    this._reference_point = val;

    return this;
  }

  setRequiredLevel(val: NonNullable<CharacterRecommendations["required_level"]>) {
    this._required_level = val;

    return this;
  }

  setRotation(val: NonNullable<CharacterRecommendations["rotation"]>) {
    this._rotation = val;

    return this;
  }

  setSquads(val: NonNullable<CharacterRecommendations["squads"]>) {
    this._squads = val;

    return this;
  }

  setTalentLeveling(val: NonNullable<CharacterRecommendations["talent_leveling"]>) {
    this._talent_leveling = val;

    return this;
  }

  setVideoSources(val: NonNullable<CharacterRecommendations["video_sources"]>) {
    this._video_sources = val;

    return this;
  }

  setWeapons(val: NonNullable<CharacterRecommendations["weapons"]>) {
    this._weapons = val;

    return this;
  }
}

export class CharacterSquadCharacterRecommendationClass implements CharacterSquadCharacterRecommendation {
  readonly type: CharacterSquadCharacterRecommendation["type"] = "character";
  readonly id: CharacterSquadCharacterRecommendation["id"];

  constructor(id: CharacterSquadCharacterRecommendation["id"]) {
    this.id = id;
  }
}

export class CharacterSquadElementRecommendationClass implements CharacterSquadElementRecommendation {
  readonly type: CharacterSquadElementRecommendation["type"] = "element";
  readonly id: CharacterSquadElementRecommendation["id"];

  constructor(id: CharacterSquadElementRecommendation["id"]) {
    this.id = id;
  }
}

export class CharacterSquadRecommendationsClass implements CharacterSquadRecommendations {
  readonly general_template: CharacterSquadRecommendations["general_template"];
  readonly best_teammates: CharacterSquadRecommendations["best_teammates"];

  constructor(
    generalTemplate: CharacterSquadRecommendations["general_template"],
    bestTeammates: CharacterSquadRecommendations["best_teammates"],
  ) {
    this.general_template = generalTemplate;
    this.best_teammates = bestTeammates;
  }

  static init(params: ConstructorParameters<typeof CharacterSquadRecommendationsClass>) {
    return new CharacterSquadRecommendationsClass(...params);
  }
}

export class CharacterTalentLevelingRecommendationClass implements CharacterTalentLevelingRecommendation {
  readonly id: CharacterTalentLevelingRecommendation["id"];
  readonly priority: CharacterTalentLevelingRecommendation["priority"];

  constructor(
    id: CharacterTalentLevelingRecommendation["id"],
    priority: CharacterTalentLevelingRecommendation["priority"],
  ) {
    this.id = id;
    this.priority = priority;
  }

  static init(params: ConstructorParameters<typeof CharacterTalentLevelingRecommendationClass>) {
    return new CharacterTalentLevelingRecommendationClass(...params);
  }
}

export class CharacterWeaponRecommendationClass implements CharacterWeaponRecommendation {
  readonly id: CharacterWeaponRecommendation["id"];
  private _refinement: CharacterWeaponRecommendation["refinement"];
  private _is_better: CharacterWeaponRecommendation["is_better"] = false;
  private _postfix: CharacterWeaponRecommendation["postfix"];
  private _percent: CharacterWeaponRecommendation["percent"];

  constructor(id: CharacterWeaponRecommendation["id"]) {
    this.id = id;
  }

  get is_better() {
    return this._is_better;
  }

  get percent() {
    return this._percent;
  }

  get postfix() {
    return this._postfix;
  }

  get refinement() {
    return this._refinement;
  }

  setIsBetter() {
    this._is_better = true;

    return this;
  }

  setPercent(val: NonNullable<CharacterWeaponRecommendation["percent"]>) {
    this._percent = val;

    return this;
  }

  setPostfix(val: NonNullable<CharacterWeaponRecommendation["postfix"]>) {
    this._postfix = val;

    return this;
  }

  setRefinement(val: NonNullable<CharacterWeaponRecommendation["refinement"]>) {
    this._refinement = val;

    return this;
  }
}
