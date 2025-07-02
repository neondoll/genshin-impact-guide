import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input">;

export function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "flex px-3 py-1 w-full min-w-0 h-9 text-base bg-transparent rounded-md border border-input outline-none",
        "shadow-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-3",
        "focus-visible:ring-ring/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
        "placeholder:text-muted-foreground file:inline-flex file:h-7 file:text-sm file:font-medium",
        "file:text-foreground file:bg-transparent file:border-0 selection:text-primary-foreground selection:bg-primary",
        "md:text-sm aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30",
        "dark:aria-invalid:ring-destructive/40",
        className,
      )}
      data-slot="input"
      type={type}
      {...props}
    />
  );
}
