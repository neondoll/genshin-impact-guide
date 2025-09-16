import { publicImageSrc } from "../lib/utils";
import Paths from "./paths";

export default [
  { ...Paths.Characters, image_src: publicImageSrc("characters.webp") },
  { ...Paths.Weapons, image_src: publicImageSrc("weapons.webp") },
  { ...Paths.ArtifactSets, image_src: publicImageSrc("artifacts.webp") },
  { ...Paths.Resources, image_src: publicImageSrc("resources.webp") },
] as const;
