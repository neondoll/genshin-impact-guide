import type { Element } from "./types";
import ElementImg from "./element-img";

export default function ElementBadge({ item }: { item: Element }) {
  return (
    <div className="flex gap-1 items-center">
      <ElementImg className="shrink-0 size-5" item={item} />
      <span children={item.name} />
    </div>
  );
}
