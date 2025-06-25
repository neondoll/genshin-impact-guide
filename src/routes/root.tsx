import { Link, Outlet } from "react-router-dom";

import Paths from "@/paths";
import { ModeToggle } from "@/components/mode-toggle";

export default function Root() {
  return (
    <>
      <header className="flex items-center h-12 border-b">
        <div className="container flex gap-1 items-center px-4 mx-auto lg:gap-2 lg:px-6">
          <h2 className="text-base font-medium">
            <Link to={Paths.Root}>
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
    </>
  );
}
