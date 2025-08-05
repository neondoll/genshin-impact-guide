import * as Primitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function SheetOverlay({ className, ...props }: ComponentProps<typeof Primitive.Overlay>) {
  return (
    <Primitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className,
      )}
      data-slot="sheet-overlay"
      {...props}
    />
  );
}

function SheetPortal({ ...props }: ComponentProps<typeof Primitive.Portal>) {
  return <Primitive.Portal data-slot="sheet-portal" {...props} />;
}

export function Sheet({ ...props }: ComponentProps<typeof Primitive.Root>) {
  return <Primitive.Root data-slot="sheet" {...props} />;
}

export function SheetClose({ ...props }: ComponentProps<typeof Primitive.Close>) {
  return <Primitive.Close data-slot="sheet-close" {...props} />;
}

type SheetContentProps = ComponentProps<typeof Primitive.Content> & { side?: "top" | "right" | "bottom" | "left" };

export function SheetContent({ children, className, side = "right", ...props }: SheetContentProps) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <Primitive.Content
        className={cn(
          "fixed flex z-50 flex-col gap-4 bg-background shadow-lg transition ease-in-out",
          "data-[state=closed]:duration-300 data-[state=closed]:animate-out data-[state=open]:duration-500",
          "data-[state=open]:animate-in",
          side === "right" && [
            "inset-y-0 right-0 w-3/4 h-full border-l sm:max-w-sm data-[state=closed]:slide-out-to-right",
            "data-[state=open]:slide-in-from-right",
          ],
          side === "left" && [
            "inset-y-0 left-0 w-3/4 h-full border-r sm:max-w-sm data-[state=closed]:slide-out-to-left",
            "data-[state=open]:slide-in-from-left",
          ],
          side === "top" && [
            "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          ],
          side === "bottom" && [
            "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom",
            "data-[state=open]:slide-in-from-bottom",
          ],
          className,
        )}
        data-slot="sheet-content"
        {...props}
      >
        {children}
        <Primitive.Close
          className={cn(
            "absolute top-4 right-4 rounded-xs ring-offset-background opacity-70 transition-opacity hover:opacity-100",
            "focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            "data-[state=open]:bg-secondary",
          )}
        >
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </Primitive.Close>
      </Primitive.Content>
    </SheetPortal>
  );
}

export function SheetDescription({ className, ...props }: ComponentProps<typeof Primitive.Description>) {
  return (
    <Primitive.Description
      className={cn("text-sm text-muted-foreground", className)}
      data-slot="sheet-description"
      {...props}
    />
  );
}

export function SheetFooter({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-2 mt-auto p-4", className)} data-slot="sheet-footer" {...props} />;
}

export function SheetHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-1.5 p-4", className)} data-slot="sheet-header" {...props} />;
}

export function SheetTitle({ className, ...props }: ComponentProps<typeof Primitive.Title>) {
  return (
    <Primitive.Title
      className={cn("font-semibold text-foreground", className)}
      data-slot="sheet-title"
      {...props}
    />
  );
}

export function SheetTrigger({ ...props }: ComponentProps<typeof Primitive.Trigger>) {
  return <Primitive.Trigger data-slot="sheet-trigger" {...props} />;
}
