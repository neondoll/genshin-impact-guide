import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export default function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("container px-4 py-4 mx-auto md:py-6 lg:px-6", className)} {...props} />;
}
