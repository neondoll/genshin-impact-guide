import type { ElementId } from "@/types/element";
import { Badge } from "@/components/ui/badge";
import { selectElementById } from "./selectors";

export default function ElementCharacterBadge({ elementId }: { elementId: ElementId }) {
  const element = selectElementById(elementId);

  return (
    <Badge
      className="flex flex-col gap-2.5 justify-start p-2 w-full text-center text-pretty whitespace-normal sm:flex-row sm:text-left"
      variant="secondary"
    >
      <img alt={element.name} className="shrink-0 size-12 rounded-md rounded-br-2xl" src={element.icon_src} />
      <span children={`${element.name} герой`} />
    </Badge>
  );
}
