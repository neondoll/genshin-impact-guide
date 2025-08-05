import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import {
  type ComponentProps, createContext, type CSSProperties, useCallback, useContext, useEffect, useMemo, useState,
} from "react";
import { useIsMobile } from "@/hooks/use-mobile";

import { Button } from "./button";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Separator } from "./separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./sheet";
import { Skeleton } from "./skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextProps | null>(null);
const sidebarMenuButtonVariants = cva(
  [
    "peer/menu-button flex overflow-hidden gap-2 items-center p-2 w-full text-sm text-left rounded-md outline-hidden",
    "ring-sidebar-ring transition-[width,height,padding] hover:text-sidebar-accent-foreground hover:bg-sidebar-accent",
    "focus-visible:ring-2 active:text-sidebar-accent-foreground active:bg-sidebar-accent disabled:opacity-50",
    "disabled:pointer-events-none group-has-data-[sidebar=menu-action]/menu-item:pr-8",
    "group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! aria-disabled:opacity-50",
    "aria-disabled:pointer-events-none data-[active=true]:font-medium",
    "data-[active=true]:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent",
    "data-[state=open]:hover:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent",
    "[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:size-4",
  ],
  {
    variants: {
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
      variant: {
        default: "hover:text-sidebar-accent-foreground hover:bg-sidebar-accent",
        outline: [
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:text-sidebar-accent-foreground",
          "hover:bg-sidebar-accent hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
        ],
      },
    },
    defaultVariants: { size: "default", variant: "default" },
  },
);

type SidebarProps = ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
};

export function Sidebar({ children, className, collapsible = "offcanvas", side = "left", variant = "sidebar", ...props }: SidebarProps) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        className={cn("flex flex-col w-(--sidebar-width) h-full text-sidebar-foreground bg-sidebar", className)}
        data-slot="sidebar"
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet onOpenChange={setOpenMobile} open={openMobile} {...props}>
        <SheetContent
          className="p-0 w-(--sidebar-width) text-sidebar-foreground bg-sidebar [&>button]:hidden"
          data-mobile="true"
          data-sidebar="sidebar"
          data-slot="sidebar"
          side={side}
          style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE } as CSSProperties}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col w-full h-full">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="group peer hidden text-sidebar-foreground md:block"
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-side={side}
      data-slot="sidebar"
      data-state={state}
      data-variant={variant}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
        )}
        data-slot="sidebar-gap"
      />
      <div
        className={cn(
          "hidden fixed inset-y-0 z-10 w-(--sidebar-width) h-svh transition-[left,right,width] duration-200",
          "ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : [
                "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r",
                "group-data-[side=right]:border-l",
              ],
          className,
        )}
        data-slot="sidebar-container"
        {...props}
      >
        <div
          className={cn(
            "flex flex-col w-full h-full bg-sidebar group-data-[variant=floating]:rounded-lg",
            "group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border",
            "group-data-[variant=floating]:shadow-sm",
          )}
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function SidebarContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex overflow-auto flex-col flex-1 gap-2 min-h-0 group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      data-sidebar="content"
      data-slot="sidebar-content"
      {...props}
    />
  );
}

export function SidebarFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-2 p-2", className)}
      data-sidebar="footer"
      data-slot="sidebar-footer"
      {...props}
    />
  );
}

export function SidebarGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("flex relative flex-col p-2 w-full min-w-0", className)}
      data-slot="sidebar-group"
      data-sidebar="group"
      {...props}
    />
  );
}

export function SidebarGroupContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("w-full text-sm", className)}
      data-sidebar="group-content"
      data-slot="sidebar-group-content"
      {...props}
    />
  );
}

type SidebarGroupActionProps = ComponentProps<"button"> & { asChild?: boolean };

export function SidebarGroupAction({ asChild = false, className, ...props }: SidebarGroupActionProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "aspect-square flex absolute top-3.5 right-3 justify-center items-center p-0 w-5 text-sidebar-foreground",
        "rounded-md outline-hidden ring-sidebar-ring transition-transform hover:text-sidebar-accent-foreground",
        "hover:bg-sidebar-accent focus-visible:ring-2 group-data-[collapsible=icon]:hidden after:absolute",
        "after:-inset-2 md:after:hidden [&>svg]:shrink-0 [&>svg]:size-4",
        className,
      )}
      data-sidebar="group-action"
      data-slot="sidebar-group-action"
      {...props}
    />
  );
}

type SidebarGroupLabelProps = ComponentProps<"div"> & { asChild?: boolean };

export function SidebarGroupLabel({ asChild = false, className, ...props }: SidebarGroupLabelProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(
        "flex shrink-0 items-center px-2 h-8 text-xs font-medium text-sidebar-foreground/70 rounded-md outline-hidden",
        "ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 [&>svg]:shrink-0 [&>svg]:size-4",
        className,
      )}
      data-sidebar="group-label"
      data-slot="sidebar-group-label"
      {...props}
    />
  );
}

export function SidebarHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-2 p-2", className)}
      data-sidebar="header"
      data-slot="sidebar-header"
      {...props}
    />
  );
}

export function SidebarInput({ className, ...props }: ComponentProps<typeof Input>) {
  return (
    <Input
      className={cn("w-full h-8 bg-background shadow-none", className)}
      data-sidebar="input"
      data-slot="sidebar-input"
      {...props}
    />
  );
}

export function SidebarInset({ className, ...props }: ComponentProps<"main">) {
  return (
    <main
      className={cn(
        "flex relative flex-col flex-1 w-full bg-background md:peer-data-[variant=inset]:m-2",
        "md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl",
        "md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className,
      )}
      data-slot="sidebar-inset"
      {...props}
    />
  );
}

export function SidebarMenu({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      className={cn("flex flex-col gap-1 w-full min-w-0", className)}
      data-sidebar="menu"
      data-slot="sidebar-menu"
      {...props}
    />
  );
}

type SidebarMenuActionProps = ComponentProps<"button"> & { asChild?: boolean; showOnHover?: boolean };

export function SidebarMenuAction({ asChild = false, className, showOnHover = false, ...props }: SidebarMenuActionProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "aspect-square flex absolute top-1.5 right-1 justify-center items-center p-0 w-5 text-sidebar-foreground",
        "rounded-md outline-hidden ring-sidebar-ring transition-transform hover:text-sidebar-accent-foreground",
        "hover:bg-sidebar-accent focus-visible:ring-2 group-data-[collapsible=icon]:hidden",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 after:absolute after:-inset-2",
        "md:after:hidden [&>svg]:shrink-0 [&>svg]:size-4",
        showOnHover && [
          "group-hover/menu-item:opacity-100 group-focus-within/menu-item:opacity-100",
          "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
          "data-[state=open]:opacity-100",
        ],
        className,
      )}
      data-sidebar="menu-action"
      data-slot="sidebar-menu-action"
      {...props}
    />
  );
}

export function SidebarMenuBadge({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex absolute right-1 justify-center items-center px-1 min-w-5 h-5 text-xs font-medium tabular-nums",
        "text-sidebar-foreground rounded-md pointer-events-none select-none group-data-[collapsible=icon]:hidden",
        "peer-hover/menu-button:text-sidebar-accent-foreground",
        "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5",
        "peer-data-[size=sm]/menu-button:top-1",
        className,
      )}
      data-sidebar="menu-badge"
      data-slot="sidebar-menu-badge"
      {...props}
    />
  );
}

type SidebarMenuButtonProps = ComponentProps<"button"> & VariantProps<typeof sidebarMenuButtonVariants> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | ComponentProps<typeof TooltipContent>;
};

export function SidebarMenuButton({ asChild = false, className, isActive = false, size = "default", tooltip, variant = "default", ...props }: SidebarMenuButtonProps) {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      data-active={isActive}
      data-sidebar="menu-button"
      data-size={size}
      data-slot="sidebar-menu-button"
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = { children: tooltip };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent align="center" hidden={state !== "collapsed" || isMobile} side="right" {...tooltip} />
    </Tooltip>
  );
}

export function SidebarMenuItem({ className, ...props }: ComponentProps<"li">) {
  return (
    <li
      className={cn("group/menu-item relative", className)}
      data-sidebar="menu-item"
      data-slot="sidebar-menu-item"
      {...props}
    />
  );
}

type SidebarMenuSkeletonProps = ComponentProps<"div"> & { showIcon?: boolean };

export function SidebarMenuSkeleton({ className, showIcon = false, ...props }: SidebarMenuSkeletonProps) {
  // Random width between 50 to 90%.
  const width = useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      className={cn("flex gap-2 items-center px-2 h-8 rounded-md", className)}
      data-sidebar="menu-skeleton"
      data-slot="sidebar-menu-skeleton"
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="flex-1 max-w-(--skeleton-width) h-4"
        data-sidebar="menu-skeleton-text"
        style={{ "--skeleton-width": width } as CSSProperties}
      />
    </div>
  );
}

export function SidebarMenuSub({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      className={cn(
        "flex flex-col gap-1 px-2.5 py-0.5 mx-3.5 min-w-0 border-l border-sidebar-border translate-x-px",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      data-sidebar="menu-sub"
      data-slot="sidebar-menu-sub"
      {...props}
    />
  );
}

type SidebarMenuSubButtonProps = ComponentProps<"a"> & { asChild?: boolean; isActive?: boolean; size?: "sm" | "md" };

export function SidebarMenuSubButton({ asChild = false, className, isActive = false, size = "md", ...props }: SidebarMenuSubButtonProps) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={cn(
        "flex overflow-hidden gap-2 items-center px-2 min-w-0 h-7 text-sidebar-foreground rounded-md outline-hidden",
        "ring-sidebar-ring -translate-x-px hover:text-sidebar-accent-foreground hover:bg-sidebar-accent",
        "focus-visible:ring-2 active:text-sidebar-accent-foreground active:bg-sidebar-accent disabled:opacity-50",
        "disabled:pointer-events-none group-data-[collapsible=icon]:hidden aria-disabled:opacity-50",
        "aria-disabled:pointer-events-none data-[active=true]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent [&>svg]:shrink-0 [&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground",
        "[&>span:last-child]:truncate",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        className,
      )}
      data-active={isActive}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-slot="sidebar-menu-sub-button"
      {...props}
    />
  );
}

export function SidebarMenuSubItem({ className, ...props }: ComponentProps<"li">) {
  return (
    <li
      className={cn("group/menu-sub-item relative", className)}
      data-sidebar="menu-sub-item"
      data-slot="sidebar-menu-sub-item"
      {...props}
    />
  );
}

type SidebarProviderProps = ComponentProps<"div"> & {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
};

export function SidebarProvider({ children, className, defaultOpen = true, onOpenChange: setOpenProp, open: openProp, style, ...props }: SidebarProviderProps) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;

      if (setOpenProp) {
        setOpenProp(openState);
      }
      else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = useCallback(() => {
    return isMobile ? setOpenMobile(open => !open) : setOpen(open => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          className={cn("group/sidebar-wrapper flex w-full min-h-svh has-data-[variant=inset]:bg-sidebar", className)}
          data-slot="sidebar-wrapper"
          style={{
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          } as CSSProperties}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

export function SidebarRail({ className, ...props }: ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      aria-label="Toggle Sidebar"
      className={cn(
        "hidden absolute inset-y-0 z-20 w-4 transition-all ease-linear -translate-x-1/2",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar hover:after:bg-sidebar-border",
        "group-data-[side=left]:-right-4 group-data-[side=right]:left-0",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize after:absolute after:inset-y-0",
        "after:left-1/2 after:w-[2px] sm:flex [[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        "[[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        className,
      )}
      data-sidebar="rail"
      data-slot="sidebar-rail"
      onClick={toggleSidebar}
      tabIndex={-1}
      title="Toggle Sidebar"
      {...props}
    />
  );
}

export function SidebarSeparator({ className, ...props }: ComponentProps<typeof Separator>) {
  return (
    <Separator
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      data-sidebar="separator"
      data-slot="sidebar-separator"
      {...props}
    />
  );
}

export function SidebarTrigger({ className, onClick, ...props }: ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      className={cn("size-7", className)}
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      size="icon"
      variant="ghost"
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

/* eslint-disable-next-line react-refresh/only-export-components */
export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}
