import type {
  ArtifactSetCharacterRecommendation as TypeCharacter,
  ArtifactSetRecommendations as Type,
} from "@/types/artifact-set-recommendations";

export class ArtifactSetCharacterRecommendation implements TypeCharacter {
  readonly id: TypeCharacter["id"];
  private _is_better: TypeCharacter["is_better"] = false;
  private _notes: TypeCharacter["notes"];

  constructor(id: TypeCharacter["id"]) {
    this.id = id;
  }

  get is_better() {
    return this._is_better;
  }

  get notes() {
    return this._notes;
  }

  setIsBetter() {
    this._is_better = true;

    return this;
  }

  setNotes(val: NonNullable<TypeCharacter["notes"]>) {
    this._notes = val;

    return this;
  }
}

export class ArtifactSetRecommendations implements Type {
  readonly artifact_set_id: Type["artifact_set_id"];
  protected _characters: Type["characters"];
  protected _preferred_stats: Type["preferred_stats"];
  protected _video_source_ids: Type["video_source_ids"];

  constructor(artifactSetId: Type["artifact_set_id"]) {
    this.artifact_set_id = artifactSetId;
  }

  get characters() {
    return this._characters;
  }

  get preferred_stats() {
    return this._preferred_stats;
  }

  get video_source_ids() {
    return this._video_source_ids;
  }

  setCharacters(val: NonNullable<Type["characters"]>) {
    this._characters = val;

    return this;
  }

  setPreferredStats(val: NonNullable<Type["preferred_stats"]>) {
    this._preferred_stats = val;

    return this;
  }

  setVideoSourceIds(val: NonNullable<Type["video_source_ids"]>) {
    this._video_source_ids = val;

    return this;
  }

  static init(params: ConstructorParameters<typeof ArtifactSetRecommendations>) {
    return new ArtifactSetRecommendations(...params);
  }
}
