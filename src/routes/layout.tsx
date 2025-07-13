import { Link, Outlet, useLocation } from "react-router-dom";

import Paths from "@/constants/paths";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout() {
  const location = useLocation();

  return (
    <SidebarProvider>
      {location.pathname !== "/" && <AppSidebar />}
      <div className="flex-1">
        <header className="flex items-center h-12 border-b">
          <div className="container flex gap-1 items-center px-4 mx-auto lg:gap-2 lg:px-6">
            {location.pathname !== "/" && <SidebarTrigger />}
            <h2 className="text-base font-medium">
              <Link to={Paths.Root.to}>
                <span className="font-(family-name:--font-genshin-drip)">Genshin Impact</span>
                {" "}
                Гайд
              </Link>
            </h2>
            <div className="ml-auto">
              <ModeToggle />
            </div>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
