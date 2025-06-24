import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>;
type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List>;
type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger>;
type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content>;

export function Tabs({ className, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root
      className={cn("flex flex-col gap-2", className)}
      data-slot="tabs"
      {...props}
    />
  );
}

export function TabsList({ className, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      className={cn(
        "inline-flex justify-center items-center p-[3px] w-fit h-9 text-muted-foreground bg-muted rounded-lg",
        className,
      )}
      data-slot="tabs-list"
      {...props}
    />
  );
}

export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex flex-1 gap-1.5 justify-center items-center px-2 py-1 h-[calc(100%-1px)] text-sm font-medium",
        "text-foreground whitespace-nowrap rounded-md border border-transparent transition-[color,box-shadow]",
        "focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-3",
        "focus-visible:ring-ring/50 disabled:opacity-50 disabled:pointer-events-none data-[state=active]:bg-background",
        "data-[state=active]:shadow-sm [&_svg]:shrink-0 [&_svg]:pointer-events-none",
        "[&_svg:not([class*='size-'])]:size-4 dark:text-muted-foreground dark:data-[state=active]:text-foreground",
        "dark:data-[state=active]:bg-input/30 dark:data-[state=active]:border-input",
        className,
      )}
      data-slot="tabs-trigger"
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      className={cn("flex-1 outline-none", className)}
      data-slot="tabs-content"
      {...props}
    />
  );
}
