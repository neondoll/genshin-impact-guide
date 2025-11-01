import type {
  CharacterArtifactRecommendations as TypeArtifacts,
  CharacterArtifactSetRecommendation as TypeArtifactSet,
  CharacterArtifactSetRecommendationWithId as TypeArtifactSetWithId,
  CharacterArtifactSetRecommendationWithIds as TypeArtifactSetWithIds,
  CharacterArtifactStatRecommendation as TypeArtifactStat,
  CharacterRecommendations as Type,
  CharacterSquadCharacterRecommendation as TypeSquadCharacter,
  CharacterSquadElementRecommendation as TypeSquadElement,
  CharacterSquadOtherRecommendation as TypeSquadOther,
  CharacterSquadRecommendations as TypeSquads,
  CharacterTalentLevelingRecommendation as TypeTalentLeveling,
  CharacterWeaponRecommendation as TypeWeapon,
} from "@/types/character-recommendations";

abstract class CharacterArtifactSetRecommendation implements TypeArtifactSet {
  private _is_better: TypeArtifactSet["is_better"] = false;
  private _percent: TypeArtifactSet["percent"];
  private _description: TypeArtifactSet["description"];
  private _notes: TypeArtifactSet["notes"];

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

  setDescription(val: NonNullable<TypeArtifactSet["description"]>) {
    this._description = val;

    return this;
  }

  setIsBetter() {
    this._is_better = true;

    return this;
  }

  setNotes(val: NonNullable<TypeArtifactSet["notes"]>) {
    this._notes = val;

    return this;
  }

  setPercent(val: NonNullable<TypeArtifactSet["percent"]>) {
    this._percent = val;

    return this;
  }
}

export class CharacterArtifactRecommendations implements TypeArtifacts {
  readonly sets: TypeArtifacts["sets"];
  readonly stats: TypeArtifacts["stats"];

  constructor(sets: TypeArtifacts["sets"], stats: TypeArtifacts["stats"]) {
    this.sets = sets;
    this.stats = stats;
  }

  static init(
    params: ConstructorParameters<typeof CharacterArtifactRecommendations>
  ) {
    return new CharacterArtifactRecommendations(...params);
  }
}

export class CharacterArtifactSetRecommendationWithId
  extends CharacterArtifactSetRecommendation
  implements TypeArtifactSetWithId {
  readonly id: TypeArtifactSetWithId["id"];

  constructor(id: TypeArtifactSetWithId["id"]) {
    super();
    this.id = id;
  }
}

export class CharacterArtifactSetRecommendationWithIds
  extends CharacterArtifactSetRecommendation
  implements TypeArtifactSetWithIds {
  readonly ids: TypeArtifactSetWithIds["ids"];

  constructor(ids: TypeArtifactSetWithIds["ids"]) {
    super();
    this.ids = ids;
  }
}

export class CharacterArtifactStatRecommendation implements TypeArtifactStat {
  readonly id: TypeArtifactStat["id"];
  readonly percent: TypeArtifactStat["percent"];
  private _use_percent: TypeArtifactStat["use_percent"];
  private _description: TypeArtifactStat["description"];
  private _notes: TypeArtifactStat["notes"];

  constructor(id: TypeArtifactStat["id"]) {
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

  setDescription(val: NonNullable<TypeArtifactStat["description"]>) {
    this._description = val;

    return this;
  }

  setNotes(val: NonNullable<TypeArtifactStat["notes"]>) {
    this._notes = val;

    return this;
  }

  setUsePercent(val: NonNullable<TypeArtifactStat["use_percent"]>) {
    this._use_percent = val;

    return this;
  }
}

export class CharacterRecommendations implements Type {
  protected _artifacts: Type["artifacts"];
  readonly character_id: Type["character_id"];
  protected _first_constellation_or_signature_weapon: Type["first_constellation_or_signature_weapon"];
  protected _key_constellations: Type["key_constellations"];
  protected _reference_point: Type["reference_point"];
  protected _required_level: Type["required_level"];
  protected _rotation: Type["rotation"];
  protected _squads: Type["squads"];
  protected _talent_leveling: Type["talent_leveling"];
  protected _video_source_ids: Type["video_source_ids"];
  protected _weapons: Type["weapons"];

  constructor(characterId: Type["character_id"]) {
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

  get video_source_ids() {
    return this._video_source_ids;
  }

  get weapons() {
    return this._weapons;
  }

  setArtifacts(val: NonNullable<Type["artifacts"]>) {
    this._artifacts = val;

    return this;
  }

  setFirstConstellationOrSignatureWeapon(
    val: NonNullable<Type["first_constellation_or_signature_weapon"]>
  ) {
    this._first_constellation_or_signature_weapon = val;

    return this;
  }

  setKeyConstellations(val: NonNullable<Type["key_constellations"]>) {
    this._key_constellations = val;

    return this;
  }

  setReferencePoint(val: NonNullable<Type["reference_point"]>) {
    this._reference_point = val;

    return this;
  }

  setRequiredLevel(val: NonNullable<Type["required_level"]>) {
    this._required_level = val;

    return this;
  }

  setRotation(val: NonNullable<Type["rotation"]>) {
    this._rotation = val;

    return this;
  }

  setSquads(val: NonNullable<Type["squads"]>) {
    this._squads = val;

    return this;
  }

  setTalentLeveling(val: NonNullable<Type["talent_leveling"]>) {
    this._talent_leveling = val;

    return this;
  }

  setVideoSourceIds(val: NonNullable<Type["video_source_ids"]>) {
    this._video_source_ids = val;

    return this;
  }

  setWeapons(val: NonNullable<Type["weapons"]>) {
    this._weapons = val;

    return this;
  }
}

export class CharacterSquadCharacterRecommendation
implements TypeSquadCharacter {
  readonly type: TypeSquadCharacter["type"] = "character";
  readonly id: TypeSquadCharacter["id"];

  constructor(id: TypeSquadCharacter["id"]) {
    this.id = id;
  }
}

export class CharacterSquadElementRecommendation
implements TypeSquadElement {
  readonly type: TypeSquadElement["type"] = "element";
  readonly id: TypeSquadElement["id"];

  constructor(id: TypeSquadElement["id"]) {
    this.id = id;
  }
}

export class CharacterSquadOtherRecommendation
implements TypeSquadOther {
  readonly type: TypeSquadOther["type"] = "other";
  readonly title: TypeSquadOther["title"];

  constructor(title: TypeSquadOther["title"]) {
    this.title = title;
  }
}

export class CharacterSquadRecommendations implements TypeSquads {
  readonly general_template: TypeSquads["general_template"];
  readonly best_teammates: TypeSquads["best_teammates"];

  constructor(
    generalTemplate: TypeSquads["general_template"],
    bestTeammates: TypeSquads["best_teammates"]
  ) {
    this.general_template = generalTemplate;
    this.best_teammates = bestTeammates;
  }

  static init(
    params: ConstructorParameters<typeof CharacterSquadRecommendations>
  ) {
    return new CharacterSquadRecommendations(...params);
  }
}

export class CharacterTalentLevelingRecommendation
implements TypeTalentLeveling {
  readonly id: TypeTalentLeveling["id"];
  readonly priority: TypeTalentLeveling["priority"];
  readonly reference_level: TypeTalentLeveling["reference_level"];

  constructor(
    id: TypeTalentLeveling["id"],
    priority: TypeTalentLeveling["priority"],
    referenceLevel: TypeTalentLeveling["reference_level"] = undefined
  ) {
    this.id = id;
    this.priority = priority;
    this.reference_level = referenceLevel;
  }

  static init(
    params: ConstructorParameters<typeof CharacterTalentLevelingRecommendation>
  ) {
    return new CharacterTalentLevelingRecommendation(...params);
  }
}

export class CharacterWeaponRecommendation implements TypeWeapon {
  readonly id: TypeWeapon["id"];
  private _refinement: TypeWeapon["refinement"];
  private _is_better: TypeWeapon["is_better"] = false;
  private _postfix: TypeWeapon["postfix"];
  private _percent: TypeWeapon["percent"];
  private _notes: TypeWeapon["notes"];

  constructor(id: TypeWeapon["id"]) {
    this.id = id;
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

  get postfix() {
    return this._postfix;
  }

  get refinement() {
    return this._refinement;
  }

  setIsBetter(val: NonNullable<TypeWeapon["is_better"]> = true) {
    this._is_better = val;

    return this;
  }

  setNotes(val: NonNullable<TypeWeapon["notes"]>) {
    this._notes = val;

    return this;
  }

  setPercent(val: NonNullable<TypeWeapon["percent"]>) {
    this._percent = val;

    return this;
  }

  setPostfix(val: NonNullable<TypeWeapon["postfix"]>) {
    this._postfix = val;

    return this;
  }

  setRefinement(val: NonNullable<TypeWeapon["refinement"]>) {
    this._refinement = val;

    return this;
  }

  static copy(weapon: TypeWeapon) {
    const model = new CharacterWeaponRecommendation(weapon.id);

    if (weapon.is_better) {
      model.setIsBetter(weapon.is_better);
    }

    if (weapon.notes) {
      model.setNotes(weapon.notes);
    }

    if (weapon.percent) {
      model.setPercent(weapon.percent);
    }

    if (weapon.postfix) {
      model.setPostfix(weapon.postfix);
    }

    if (weapon.refinement) {
      model.setRefinement(weapon.refinement);
    }

    return model;
  }
}
