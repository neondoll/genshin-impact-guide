import { NavLink } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./ui/sidebar";
import MenuItems from "../constants/menu-items";

export const AppSidebarProvider = SidebarProvider;
export const AppSidebarTrigger = SidebarTrigger;

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Содержание</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="grid grid-cols-[auto_1fr]">
              {MenuItems.map(item => (
                <SidebarMenuItem className="grid grid-cols-subgrid col-span-full" key={item.title}>
                  <SidebarMenuButton asChild className="grid grid-cols-subgrid col-span-full h-9">
                    <NavLink
                      className="[.active]:font-medium [.active]:text-sidebar-accent-foreground [.active]:bg-sidebar-accent"
                      to={item.to}
                    >
                      <img
                        alt={item.title}
                        className="object-cover object-center shrink-0 size-5"
                        src={item.image_src}
                      />
                      <span children={item.title} />
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
