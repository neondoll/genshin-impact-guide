import type { Element } from "@/types/element";
import { Badge } from "@/components/ui/badge";

export default function ElementCharacterBadge({ elementIconSrc, elementName }: {
  elementIconSrc: Element["iconSrc"];
  elementName: Element["name"];
}) {
  return (
    <Badge
      className="flex flex-col gap-2.5 justify-start p-2 w-full text-center text-pretty whitespace-normal sm:flex-row sm:text-left"
      variant="secondary"
    >
      <img alt={elementName} className="shrink-0 size-12 rounded-md rounded-br-2xl" src={elementIconSrc} />
      <span children={`${elementName} герой`} />
    </Badge>
  );
}
