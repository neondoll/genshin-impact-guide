import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-accordion";

import { ChevronDownIcon } from "../icons";
import { cn } from "@/lib/utils";

// Re-export типы для удобства
export type AccordionProps = ComponentProps<typeof Primitive.Root>;
export type AccordionContentProps = ComponentProps<typeof Primitive.Content>;
export type AccordionItemProps = ComponentProps<typeof Primitive.Item>;
export type AccordionTriggerProps = ComponentProps<typeof Primitive.Trigger>;

export function Accordion(props: AccordionProps) {
  return <Primitive.Root data-slot="accordion" {...props} />;
}

export function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  return (
    <Primitive.Content
      className={cn(
        "overflow-hidden text-sm",
        "data-[state=closed]:animate-accordion-up",
        "data-[state=open]:animate-accordion-down",
      )}
      data-slot="accordion-content"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>
        {children}
      </div>
    </Primitive.Content>
  );
}

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <Primitive.Item
      className={cn(
        "border-b border-border last:border-b-0",
        className
      )}
      data-slot="accordion-item"
      {...props}
    />
  );
}

export function AccordionTrigger({ className, children, ...props }: ComponentProps<typeof Primitive.Trigger>) {
  return (
    <Primitive.Header className="flex">
      <Primitive.Trigger
        className={cn(
          // Layout
          "flex flex-1 gap-4 justify-between items-start py-4",
          // Typography
          "text-sm font-medium text-left",
          // Appearance
          "rounded-md outline-none",
          // Interactions
          "transition-all hover:underline",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "disabled:opacity-50 disabled:pointer-events-none",
          // Animation
          "[&[data-state=open]>svg]:rotate-180",
          className
        )}
        data-slot="accordion-trigger"
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            "shrink-0 size-4 text-muted-foreground",
            "transition-transform duration-200 translate-y-0.5",
            "pointer-events-none"
          )}
        />
      </Primitive.Trigger>
    </Primitive.Header>
  );
}
