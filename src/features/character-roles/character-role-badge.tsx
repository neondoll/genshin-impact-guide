import type { CharacterRole } from "./types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function CharacterRoleBadge({ item }: { item: CharacterRole }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge className="rounded-full">
          <img alt={item.id} className="shrink-0 size-5" src={item.icon_src} />
          <span children={item.name} />
        </Badge>
      </TooltipTrigger>
      <TooltipContent
        className={cn(
          "max-w-[calc(var(--container-width)-(var(--container-padding-x)*2))] text-pretty",
          "[--container-width:var(--radix-popper-available-width)] [--container-padding-x:calc(var(--spacing)*4)]",
          "sm:[--container-width:var(--breakpoint-sm)] md:[--container-width:var(--breakpoint-md)]",
          "lg:[--container-width:var(--breakpoint-lg)] lg:[--container-padding-x:calc(var(--spacing)*6)]",
          "xl:[--container-width:var(--breakpoint-xl)] 2xl:[--container-width:var(--breakpoint-2xl)]",
        )}
      >
        <p dangerouslySetInnerHTML={{ __html: item.description }} />
      </TooltipContent>
    </Tooltip>
  );
}
