import type { ArtifactSetCharacterRecommendation, ArtifactSetRecommendations } from "./types";

export class ArtifactSetCharacterRecommendationClass implements ArtifactSetCharacterRecommendation {
  readonly id: ArtifactSetCharacterRecommendation["id"];
  private _is_better: ArtifactSetCharacterRecommendation["is_better"] = false;
  private _notes: ArtifactSetCharacterRecommendation["notes"];

  constructor(id: ArtifactSetCharacterRecommendation["id"]) {
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

  setNotes(val: NonNullable<ArtifactSetCharacterRecommendation["notes"]>) {
    this._notes = val;

    return this;
  }
}

export class ArtifactSetRecommendationsClass implements ArtifactSetRecommendations {
  readonly artifact_set_id: ArtifactSetRecommendations["artifact_set_id"];
  readonly characters: ArtifactSetRecommendations["characters"];
  private _preferred_stats: ArtifactSetRecommendations["preferred_stats"];
  private _video_sources: ArtifactSetRecommendations["video_sources"];

  constructor(
    artifactSetId: ArtifactSetRecommendations["artifact_set_id"],
    characters: ArtifactSetRecommendations["characters"],
  ) {
    this.artifact_set_id = artifactSetId;
    this.characters = characters;
  }

  get preferred_stats() {
    return this._preferred_stats;
  }

  get video_sources() {
    return this._video_sources;
  }

  setPreferredStats(val: NonNullable<ArtifactSetRecommendations["preferred_stats"]>) {
    this._preferred_stats = val;

    return this;
  }

  setVideoSources(val: NonNullable<ArtifactSetRecommendations["video_sources"]>) {
    this._video_sources = val;

    return this;
  }

  static init(params: ConstructorParameters<typeof ArtifactSetRecommendationsClass>) {
    return new ArtifactSetRecommendationsClass(...params);
  }
}
