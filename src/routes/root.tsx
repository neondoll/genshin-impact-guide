import { Link, Outlet, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Paths from "@/constants/paths";

export default function Root() {
  const navigation = useNavigation();
  const [isRoot, setIsRoot] = useState<boolean>(false);

  useEffect(() => {
    setIsRoot(navigation.location?.pathname === Paths.Root.to);
  }, [navigation.location]);

  return (
    <SidebarProvider>
      {!isRoot && <AppSidebar />}
      <div className="flex-1">
        <header className="flex items-center h-12 border-b">
          <div className="container flex gap-1 items-center px-4 mx-auto lg:gap-2 lg:px-6">
            {!isRoot && <SidebarTrigger />}
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
        <main
          className={cn(navigation.state === "loading" && "opacity-25 transition-opacity pointer-events-none select-none")}
        >
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
