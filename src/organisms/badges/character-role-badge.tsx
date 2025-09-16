import type { CharacterRoleId } from "@/features/character-roles/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { selectCharacterRoleById } from "@/features/character-roles/selectors";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function CharacterRoleBadge({ characterRoleId }: { characterRoleId: CharacterRoleId }) {
  const characterRole = selectCharacterRoleById(characterRoleId);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge className="rounded-full">
          <img alt={characterRoleId} className="shrink-0 size-5" src={characterRole.img_src} />
          <span children={characterRole.name} />
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
        <p dangerouslySetInnerHTML={{ __html: characterRole.description }} />
      </TooltipContent>
    </Tooltip>
  );
}
