import Paths from "./paths";
import { publicImageSrc } from "@/lib/utils";

export default [
  { title: "Персонажи", to: Paths.Characters, image_src: publicImageSrc("characters-logo-85x84.png") },
  { title: "Оружие", to: Paths.Weapons, image_src: publicImageSrc("weapons-logo-85x84.png") },
  { title: "Артефакты", to: Paths.ArtifactSets, image_src: publicImageSrc("artifacts-logo-85x84.png") },
] as const;
