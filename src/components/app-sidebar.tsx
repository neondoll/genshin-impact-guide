import { Link } from "react-router-dom";

import Paths from "@/paths";
import { publicImageSrc } from "@/lib/utils";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

// Menu items.
const items = [
  { title: "Главная", to: Paths.Root, image_src: undefined },
  { title: "Персонажи", to: Paths.Characters, image_src: publicImageSrc("characters-logo-85x84.png") },
  { title: "Оружие", to: Paths.Weapons, image_src: publicImageSrc("weapons-logo-85x84.png") },
  { title: "Артефакты", to: Paths.ArtifactSets, image_src: publicImageSrc("artifacts-logo-85x84.png") },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Содержание</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.to}>
                      {item.image_src !== undefined && (
                        <img alt={item.title} className="w-auto h-5" src={item.image_src} />
                      )}
                      <span>{item.title}</span>
                    </Link>
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
