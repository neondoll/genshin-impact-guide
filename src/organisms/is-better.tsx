import { publicImageSrc } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function IsBetter({ value }: { value: boolean }) {
  return value && (
    <Tooltip>
      <TooltipTrigger asChild>
        <img
          alt="👍"
          className="object-contain object-center size-12 rounded-full"
          src={publicImageSrc("better-logo-128x128.png")}
        />
      </TooltipTrigger>
      <TooltipContent>
        <p>Является лучшим выбором</p>
      </TooltipContent>
    </Tooltip>
  );
}
