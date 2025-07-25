import Paths from "./paths";
import { publicImageSrc } from "@/lib/utils";

export default [
  { ...Paths.Characters, image_src: publicImageSrc("characters-logo-85x84.png") },
  { ...Paths.Weapons, image_src: publicImageSrc("weapons-logo-85x84.png") },
  { ...Paths.ArtifactSets, image_src: publicImageSrc("artifacts-logo-85x84.png") },
] as const;
