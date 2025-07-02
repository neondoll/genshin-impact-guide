import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content>;
type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item>;
type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root>;
type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger>;

export function Accordion({ ...props }: AccordionProps) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

export function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      )}
      data-slot="accordion-content"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b last:border-b-0", className)}
      data-slot="accordion-item"
      {...props}
    />
  );
}

export function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 gap-4 justify-between items-start py-4 text-sm font-medium text-left rounded-md outline-none",
          "transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 hover:underline",
          "disabled:opacity-50 disabled:pointer-events-none [&[data-state=open]>svg]:rotate-180",
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
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}
