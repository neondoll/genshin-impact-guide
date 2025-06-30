import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root>;
type TooltipTriggerProps = React.ComponentProps<typeof TooltipPrimitive.Trigger>;
type TooltipContentProps = React.ComponentProps<typeof TooltipPrimitive.Content>;
type TooltipProviderProps = React.ComponentProps<typeof TooltipPrimitive.Provider>;

export function Tooltip({ ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

export function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

export function TooltipContent({ children, className, sideOffset = 0, ...props }: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className={cn(
          "z-50 px-3 py-1.5 w-fit text-xs text-primary-foreground text-balance bg-primary rounded-md",
          "origin-(--radix-tooltip-content-transform-origin) animate-in fade-in-0 zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className,
        )}
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow
          className="z-50 size-2.5 bg-primary rounded-[2px] rotate-45 translate-y-[calc(-50%_-_2px)] fill-primary"
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export function TooltipProvider({ children, delayDuration = 0, ...props }: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      children={children}
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}
