import type { ComponentProps } from "react";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import * as Primitive from "@radix-ui/react-dropdown-menu";

import { cn } from "@/lib/utils";

export function DropdownMenu({ ...props }: ComponentProps<typeof Primitive.Root>) {
  return <Primitive.Root data-slot="dropdown-menu" {...props} />;
}

type DropdownMenuCheckboxItemProps = ComponentProps<typeof Primitive.CheckboxItem>;

export function DropdownMenuCheckboxItem({ className, children, checked, ...props }: DropdownMenuCheckboxItemProps) {
  return (
    <Primitive.CheckboxItem
      checked={checked}
      className={cn(
        "relative flex gap-2 items-center py-1.5 pr-2 pl-8 text-sm rounded-sm outline-hidden cursor-default",
        "select-none focus:text-accent-foreground focus:bg-accent data-[disabled]:opacity-50",
        "data-[disabled]:pointer-events-none [&_svg]:shrink-0 [&_svg]:pointer-events-none",
        "[&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-slot="dropdown-menu-checkbox-item"
      {...props}
    >
      <span className="absolute left-2 flex justify-center items-center size-3.5 pointer-events-none">
        <Primitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </Primitive.ItemIndicator>
      </span>
      {children}
    </Primitive.CheckboxItem>
  );
}

export function DropdownMenuContent({ className, sideOffset = 4, ...props }: ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Portal>
      <Primitive.Content
        className={cn(
          "overflow-x-hidden overflow-y-auto z-50 p-1 min-w-[8rem]",
          "max-h-(--radix-dropdown-menu-content-available-height) text-popover-foreground bg-popover rounded-md border",
          "shadow-md origin-(--radix-dropdown-menu-content-transform-origin) data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0",
          "data-[state=open]:zoom-in-95",
          className,
        )}
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        {...props}
      />
    </Primitive.Portal>
  );
}

export function DropdownMenuGroup({ ...props }: ComponentProps<typeof Primitive.Group>) {
  return <Primitive.Group data-slot="dropdown-menu-group" {...props} />;
}

type DropdownMenuItemProps = ComponentProps<typeof Primitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
};

export function DropdownMenuItem({ className, inset, variant = "default", ...props }: DropdownMenuItemProps) {
  return (
    <Primitive.Item
      className={cn(
        "relative flex gap-2 items-center px-2 py-1.5 text-sm rounded-sm outline-hidden cursor-default select-none",
        "focus:text-accent-foreground focus:bg-accent data-[disabled]:opacity-50 data-[disabled]:pointer-events-none",
        "data-[inset]:pl-8 data-[variant=destructive]:text-destructive",
        "data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:focus:bg-destructive/10",
        "data-[variant=destructive]:*:[svg]:!text-destructive [&_svg]:shrink-0 [&_svg]:pointer-events-none",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        "dark:data-[variant=destructive]:focus:bg-destructive/20 ",
        className,
      )}
      data-inset={inset}
      data-slot="dropdown-menu-item"
      data-variant={variant}
      {...props}
    />
  );
}

type DropdownMenuLabelProps = ComponentProps<typeof Primitive.Label> & { inset?: boolean };

export function DropdownMenuLabel({ className, inset, ...props }: DropdownMenuLabelProps) {
  return (
    <Primitive.Label
      className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
      data-inset={inset}
      data-slot="dropdown-menu-label"
      {...props}
    />
  );
}

export function DropdownMenuPortal({ ...props }: ComponentProps<typeof Primitive.Portal>) {
  return <Primitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

export function DropdownMenuRadioGroup({ ...props }: ComponentProps<typeof Primitive.RadioGroup>) {
  return <Primitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

export function DropdownMenuRadioItem({ className, children, ...props }: ComponentProps<typeof Primitive.RadioItem>) {
  return (
    <Primitive.RadioItem
      className={cn(
        "relative flex gap-2 items-center py-1.5 pr-2 pl-8 text-sm rounded-sm outline-hidden cursor-default",
        "select-none focus:text-accent-foreground focus:bg-accent data-[disabled]:opacity-50",
        "data-[disabled]:pointer-events-none [&_svg]:shrink-0 [&_svg]:pointer-events-none",
        "[&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-slot="dropdown-menu-radio-item"
      {...props}
    >
      <span className="absolute left-2 flex justify-center items-center size-3.5 pointer-events-none">
        <Primitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </Primitive.ItemIndicator>
      </span>
      {children}
    </Primitive.RadioItem>
  );
}

export function DropdownMenuSeparator({ className, ...props }: ComponentProps<typeof Primitive.Separator>) {
  return (
    <Primitive.Separator
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      data-slot="dropdown-menu-separator"
      {...props}
    />
  );
}

export function DropdownMenuShortcut({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      data-slot="dropdown-menu-shortcut"
      {...props}
    />
  );
}

export function DropdownMenuSub({ ...props }: ComponentProps<typeof Primitive.Sub>) {
  return <Primitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

export function DropdownMenuSubContent({ className, ...props }: ComponentProps<typeof Primitive.SubContent>) {
  return (
    <Primitive.SubContent
      className={cn(
        "overflow-hidden z-50 p-1 min-w-[8rem] text-popover-foreground bg-popover rounded-md border shadow-lg",
        "origin-(--radix-dropdown-menu-content-transform-origin) data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        "data-[state=open]:zoom-in-95",
        className,
      )}
      data-slot="dropdown-menu-sub-content"
      {...props}
    />
  );
}

type DropdownMenuSubTriggerProps = ComponentProps<typeof Primitive.SubTrigger> & { inset?: boolean };

export function DropdownMenuSubTrigger({ className, inset, children, ...props }: DropdownMenuSubTriggerProps) {
  return (
    <Primitive.SubTrigger
      className={cn(
        "flex items-center px-2 py-1.5 text-sm rounded-sm outline-hidden cursor-default select-none",
        "focus:text-accent-foreground focus:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground",
        "data-[state=open]:bg-accent",
        className,
      )}
      data-inset={inset}
      data-slot="dropdown-menu-sub-trigger"
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </Primitive.SubTrigger>
  );
}

export function DropdownMenuTrigger({ ...props }: ComponentProps<typeof Primitive.Trigger>) {
  return <Primitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}
