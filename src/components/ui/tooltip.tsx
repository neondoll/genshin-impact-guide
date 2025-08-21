import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

export function Tooltip({ ...props }: ComponentProps<typeof Primitive.Root>) {
  return (
    <TooltipProvider>
      <Primitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

type TooltipContentProps = ComponentProps<typeof Primitive.Content>;

export function TooltipContent({ children, className, sideOffset = 0, ...props }: TooltipContentProps) {
  return (
    <Primitive.Portal>
      <Primitive.Content
        className={cn(
          "z-50 px-3 py-1.5 w-fit text-xs text-primary-foreground text-balance bg-primary rounded-md",
          "origin-(--radix-tooltip-content-transform-origin) animate-in fade-in-0 zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className,
        )}
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        {...props}
      >
        {children}
        <Primitive.Arrow
          className="z-50 size-2.5 bg-primary rounded-[2px] rotate-45 translate-y-[calc(-50%_-_2px)] fill-primary"
        />
      </Primitive.Content>
    </Primitive.Portal>
  );
}

export function TooltipProvider({ delayDuration = 0, ...props }: ComponentProps<typeof Primitive.Provider>) {
  return <Primitive.Provider data-slot="tooltip-provider" delayDuration={delayDuration} {...props} />;
}

export function TooltipTrigger({ ...props }: ComponentProps<typeof Primitive.Trigger>) {
  return <Primitive.Trigger data-slot="tooltip-trigger" {...props} />;
}
