import * as React from "react";

import { cn } from "@/lib/utils";

type SkeletonProps = React.ComponentProps<"div">;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn("bg-accent rounded-md animate-pulse", className)} data-slot="skeleton" {...props} />;
}
