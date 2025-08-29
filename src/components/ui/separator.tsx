import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

type SeparatorProps = ComponentProps<typeof Primitive.Root>;

export function Separator({ className, decorative = true, orientation = "horizontal", ...props }: SeparatorProps) {
  return (
    <Primitive.Root
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
