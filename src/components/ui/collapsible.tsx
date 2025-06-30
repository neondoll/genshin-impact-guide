import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import * as React from "react";

type CollapsibleProps = React.ComponentProps<typeof CollapsiblePrimitive.Root>;
type CollapsibleTriggerProps = React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>;
type CollapsibleContentProps = React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>;

export function Collapsible({ ...props }: CollapsibleProps) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

export function CollapsibleTrigger({ ...props }: CollapsibleTriggerProps) {
  return <CollapsiblePrimitive.CollapsibleTrigger data-slot="collapsible-trigger" {...props} />;
}

export function CollapsibleContent({ ...props }: CollapsibleContentProps) {
  return <CollapsiblePrimitive.CollapsibleContent data-slot="collapsible-content" {...props} />;
}
