import { Link, Outlet, useLocation, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";

import { AppSidebar, AppSidebarProvider, AppSidebarTrigger } from "../components/app-sidebar";
import { cn } from "../lib/utils";
import { ModeToggle } from "../components/mode-toggle";
import Paths from "../constants/paths";

export default function Root() {
  const location = useLocation();
  const navigation = useNavigation();
  const [isRoot, setIsRoot] = useState(false);

  useEffect(() => {
    setIsRoot(location.pathname === Paths.Root.to);
  }, [location]);

  return (
    <AppSidebarProvider>
      {!isRoot && <AppSidebar />}
      <div className="flex-1">
        <header className="flex items-center h-12 border-b">
          <div className="container flex gap-1 items-center px-4 mx-auto lg:gap-2 lg:px-6">
            {!isRoot && <AppSidebarTrigger />}
            <h2 className="text-base font-medium">
              <Link to={Paths.Root.to}>
                <span className="font-(family-name:--font-genshin-drip)">Genshin Impact</span>
                {" Гайд"}
              </Link>
            </h2>
            <div className="ml-auto">
              <ModeToggle />
            </div>
          </div>
        </header>
        <main className={cn(navigation.state === "loading" && "opacity-25 transition-opacity pointer-events-none select-none")}>
          <Outlet />
        </main>
      </div>
    </AppSidebarProvider>
  );
}
