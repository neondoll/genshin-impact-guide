import type { Characters } from "../types/character.ts";

const imageSrc = (name: string) => `/images/characters/${name}`;

export default {
  dahlia: {
    name: "Далия",
    world_key: "teyvat",
    region_key: "mondstadt",
    small_image_src: imageSrc("dahlia-small-106x106.png"),
  },
  skirk: { name: "Скирк", world_key: "another", small_image_src: imageSrc("skirk-small-106x106.png") },
} as Characters;
