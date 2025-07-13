import { Link, useLoaderData } from "react-router-dom";

import Container from "@/components/container";
import Paths from "@/constants/paths";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getWeapons } from "@/database";

export type WeaponsLoaderData = {
  weapons: Awaited<ReturnType<typeof getWeapons>>;
};

export default function Weapons() {
  const { weapons } = useLoaderData<WeaponsLoaderData>();

  return (
    <Container className="flex flex-col gap-2 md:gap-4">
      <Breadcrumb>
        <BreadcrumbList className="gap-1 text-xs sm:gap-2">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link children={Paths.Root.title} to={Paths.Root.to} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage children={Paths.Weapons.title} />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">{Paths.Weapons.title}</h1>
        <Button asChild>
          <Link children={Paths.WeaponsTierList.title} to={Paths.WeaponsTierList.to} />
        </Button>
      </div>
      <ul className="flex flex-wrap gap-2 justify-center items-stretch md:gap-4">
        {weapons.map(weapon => (
          <li
            className={cn(
              "flex relative flex-col gap-4 px-5.5 py-4 w-36 min-h-45 text-card-foreground bg-card rounded-xl border shadow-sm",
              "transition-all has-hover:scale-104 has-focus-visible:ring-3 has-focus-visible:ring-ring/50",
            )}
            key={weapon.uid}
          >
            <span
              className={cn(
                "inline-flex shrink-0 justify-center items-center w-24.5 rounded-lg rounded-br-3xl",
                weapon.quality === 3 && "bg-[linear-gradient(180deg,#567496,#5392b8)]",
                weapon.quality === 4 && "bg-[linear-gradient(180deg,#5e5789,#9c75b7)]",
                weapon.quality === 5 && "bg-[linear-gradient(180deg,#945c2c,#b27330)]",
              )}
            >
              <img
                alt={weapon.name}
                className="object-cover size-full rounded-lg rounded-br-3xl"
                draggable={false}
                src={weapon.image_src}
              />
            </span>
            <Link
              className={cn(
                "inline-flex flex-1 justify-center items-center text-sm text-center outline-none before:absolute",
                "before:inset-0",
              )}
              to="#"
            >
              {weapon.name}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
