import type { ComponentProps } from "react";

import type { Element } from "./types";

export default function ElementImg({ item, ...props }: Omit<ComponentProps<"img">, "alt" | "src"> & { item: Element }) {
  return (
    <img alt={item.id} src={item.image_src} {...props} />
  );
}
