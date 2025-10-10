import { CharacterIds } from "@/enums/character";
import { CharacterRecommendations } from "@/classes/character-recommendations";
import { VideoSourceIds } from "@/enums/video-source";

export default new CharacterRecommendations(CharacterIds.Aino).setVideoSourceIds([VideoSourceIds.GuideToAino]);
