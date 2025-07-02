import * as React from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

type BreadcrumbEllipsisProps = React.ComponentProps<"span">;
type BreadcrumbItemProps = React.ComponentProps<"li">;
type BreadcrumbLinkProps = React.ComponentProps<"a"> & { asChild?: boolean };
type BreadcrumbListProps = React.ComponentProps<"ol">;
type BreadcrumbPageProps = React.ComponentProps<"span">;
type BreadcrumbProps = React.ComponentProps<"nav">;
type BreadcrumbSeparatorProps = React.ComponentProps<"li">;

export function Breadcrumb({ ...props }: BreadcrumbProps) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

export function BreadcrumbEllipsis({ className, ...props }: BreadcrumbEllipsisProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("flex justify-center items-center size-9", className)}
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return <li className={cn("inline-flex gap-1.5 items-center", className)} data-slot="breadcrumb-item" {...props} />;
}

export function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp className={cn("transition-colors hover:text-foreground", className)} data-slot="breadcrumb-link" {...props} />
  );
}

export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return (
    <ol
      className={cn(
        "flex flex-wrap gap-1.5 items-center text-sm text-muted-foreground break-words sm:gap-2.5",
        className,
      )}
      data-slot="breadcrumb-list"
      {...props}
    />
  );
}

export function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      aria-current="page"
      aria-disabled="true"
      className={cn("font-normal text-foreground", className)}
      data-slot="breadcrumb-page"
      role="link"
      {...props}
    />
  );
}

export function BreadcrumbSeparator({ children, className, ...props }: BreadcrumbSeparatorProps) {
  return (
    <li
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      data-slot="breadcrumb-separator"
      role="presentation"
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}
