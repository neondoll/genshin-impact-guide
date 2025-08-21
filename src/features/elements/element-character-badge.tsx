import type { TElementKey } from "@/database/elements/types";
import { Badge } from "@/components/ui/badge";
import { selectElementById } from "./elementsSelectors";

export default function ElementCharacterBadge({ elementKey }: { elementKey: TElementKey }) {
  const element = selectElementById(elementKey);

  return (
    <Badge
      className="flex flex-col gap-2.5 justify-start p-2 w-full text-center text-pretty whitespace-normal sm:flex-row sm:text-left"
      variant="secondary"
    >
      <img alt={element.name} className="shrink-0 size-12 rounded-md rounded-br-2xl" src={element.image_src} />
      <span children={`${element.name} герой`} />
    </Badge>
  );
}
