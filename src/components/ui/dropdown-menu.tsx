import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type DropdownMenuProps = React.ComponentProps<typeof DropdownMenuPrimitive.Root>;
type DropdownMenuPortalProps = React.ComponentProps<typeof DropdownMenuPrimitive.Portal>;
type DropdownMenuTriggerProps = React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>;
type DropdownMenuContentProps = React.ComponentProps<typeof DropdownMenuPrimitive.Content>;
type DropdownMenuGroupProps = React.ComponentProps<typeof DropdownMenuPrimitive.Group>;
type DropdownMenuLabelProps = React.ComponentProps<typeof DropdownMenuPrimitive.Label> & { inset?: boolean };
type DropdownMenuItemProps = React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
};
type DropdownMenuCheckboxItemProps = React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>;
type DropdownMenuRadioGroupProps = React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>;
type DropdownMenuRadioItemProps = React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>;
type DropdownMenuSeparatorProps = React.ComponentProps<typeof DropdownMenuPrimitive.Separator>;
type DropdownMenuShortcutProps = React.ComponentProps<"span">;
type DropdownMenuSubProps = React.ComponentProps<typeof DropdownMenuPrimitive.Sub>;
type DropdownMenuSubTriggerProps = React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean };
type DropdownMenuSubContentProps = React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>;

export function DropdownMenu({ ...props }: DropdownMenuProps) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

export function DropdownMenuPortal({ ...props }: DropdownMenuPortalProps) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

export function DropdownMenuTrigger({ ...props }: DropdownMenuTriggerProps) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

export function DropdownMenuContent({ className, sideOffset = 4, ...props }: DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
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
    </DropdownMenuPrimitive.Portal>
  );
}

export function DropdownMenuGroup({ ...props }: DropdownMenuGroupProps) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

export function DropdownMenuLabel({ className, inset, ...props }: DropdownMenuLabelProps) {
  return (
    <DropdownMenuPrimitive.Label
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className,
      )}
      data-inset={inset}
      data-slot="dropdown-menu-label"
      {...props}
    />
  );
}

export function DropdownMenuItem({ className, inset, variant = "default", ...props }: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
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

export function DropdownMenuCheckboxItem({ className, children, checked, ...props }: DropdownMenuCheckboxItemProps) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
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
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

export function DropdownMenuRadioGroup({ ...props }: DropdownMenuRadioGroupProps) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

export function DropdownMenuRadioItem({ className, children, ...props }: DropdownMenuRadioItemProps) {
  return (
    <DropdownMenuPrimitive.RadioItem
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
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

export function DropdownMenuSeparator({ className, ...props }: DropdownMenuSeparatorProps) {
  return (
    <DropdownMenuPrimitive.Separator
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      data-slot="dropdown-menu-separator"
      {...props}
    />
  );
}

export function DropdownMenuShortcut({ className, ...props }: DropdownMenuShortcutProps) {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className,
      )}
      data-slot="dropdown-menu-shortcut"
      {...props}
    />
  );
}

export function DropdownMenuSub({ ...props }: DropdownMenuSubProps) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

export function DropdownMenuSubTrigger({ className, inset, children, ...props }: DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
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
    </DropdownMenuPrimitive.SubTrigger>
  );
}

export function DropdownMenuSubContent({ className, ...props }: DropdownMenuSubContentProps) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className,
      )}
      {...props}
    />
  );
}
