import * as Primitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Accordion({ ...props }: ComponentProps<typeof Primitive.Root>) {
  return <Primitive.Root data-slot="accordion" {...props} />;
}

export function AccordionContent({ className, children, ...props }: ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Content
      className={cn("overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down")}
      data-slot="accordion-content"
      {...props}
    >
      <div children={children} className={cn("pt-0 pb-4", className)} />
    </Primitive.Content>
  );
}

export function AccordionItem({ className, ...props }: ComponentProps<typeof Primitive.Item>) {
  return <Primitive.Item className={cn("border-b last:border-b-0", className)} data-slot="accordion-item" {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: ComponentProps<typeof Primitive.Trigger>) {
  return (
    <Primitive.Header className="flex">
      <Primitive.Trigger
        className={cn(
          "flex flex-1 gap-4 justify-between items-start py-4 text-sm font-medium text-left rounded-md",
          "outline-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "hover:underline disabled:opacity-50 disabled:pointer-events-none [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        data-slot="accordion-trigger"
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            "shrink-0 size-4 text-muted-foreground transition-transform duration-200 translate-y-0.5",
            "pointer-events-none",
          )}
        />
      </Primitive.Trigger>
    </Primitive.Header>
  );
}
