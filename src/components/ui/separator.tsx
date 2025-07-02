"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

type SeparatorProps = React.ComponentProps<typeof SeparatorPrimitive.Root>;

export function Separator({ className, decorative = true, orientation = "horizontal", ...props }: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      className={cn(
        "shrink-0 bg-border data-[orientation=horizontal]:w-full data-[orientation=horizontal]:h-px",
        "data-[orientation=vertical]:w-px data-[orientation=vertical]:h-full",
        className,
      )}
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      {...props}
    />
  );
}
