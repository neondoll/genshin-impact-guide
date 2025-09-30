import type { ElementId } from "@/features/elements/types";
import { Badge } from "@/components/ui/badge";
import { selectElementById } from "@/features/elements/selectors";

export default function ElementBadge({ elementId }: { elementId: ElementId }) {
  const element = selectElementById(elementId);

  return (
    <Badge className="rounded-full">
      <img alt={elementId} className="shrink-0 size-5" src={element.icon_src} />
      <span children={element.name} />
    </Badge>
  );
}
