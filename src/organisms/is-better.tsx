import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import BestChoiceCommercialSymbolSvgrepoCom from "@/components/icons/best-choice-commercial-symbol-svgrepo-com";

export default function IsBetter({ value }: { value: boolean | string }) {
  return value && (
    <Tooltip>
      <TooltipTrigger asChild>
        <BestChoiceCommercialSymbolSvgrepoCom className="size-12 rounded-full fill-current" />
      </TooltipTrigger>
      <TooltipContent>
        <p>{typeof value === "string" ? value : "Является лучшим выбором"}</p>
      </TooltipContent>
    </Tooltip>
  );
}
