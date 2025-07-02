import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import * as React from "react";

type CollapsibleContentProps = React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>;
type CollapsibleProps = React.ComponentProps<typeof CollapsiblePrimitive.Root>;
type CollapsibleTriggerProps = React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>;

export function Collapsible({ ...props }: CollapsibleProps) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

export function CollapsibleContent({ ...props }: CollapsibleContentProps) {
  return <CollapsiblePrimitive.CollapsibleContent data-slot="collapsible-content" {...props} />;
}

export function CollapsibleTrigger({ ...props }: CollapsibleTriggerProps) {
  return <CollapsiblePrimitive.CollapsibleTrigger data-slot="collapsible-trigger" {...props} />;
}
