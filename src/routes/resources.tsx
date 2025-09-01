import { Link, useLoaderData } from "react-router-dom";

import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { selectResourcesAll } from "@/features/resources/selectors";
import Paths from "@/constants/paths";
import { backgroundClassByRarity } from "@/lib/rarity.ts";

/* eslint-disable-next-line react-refresh/only-export-components */
export function loader() {
  const resources = selectResourcesAll();

  return { resources };
}

export default function Resources() {
  const { resources } = useLoaderData<ReturnType<typeof loader>>();

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
            <BreadcrumbPage children={Paths.Resources.title} />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 children={Paths.Resources.title} className="text-2xl" />
      <ul className="grid grid-cols-[repeat(auto-fill,calc(var(--spacing)*95))] gap-2 justify-center items-stretch md:gap-4">
        {resources.map(resource => (
          <li
            className={cn(
              "flex relative gap-4 p-4 w-full text-card-foreground bg-card rounded-xl border shadow-sm",
              "transition-all has-hover:scale-104 has-focus-visible:ring-3 has-focus-visible:ring-ring/50",
            )}
            key={resource.id}
          >
            <span className="relative shrink-0 size-12">
              <img
                alt={resource.id}
                className={cn(
                  "object-cover size-full rounded-sm rounded-br-xl",
                  ("rarity" in resource && resource.rarity) ? backgroundClassByRarity(resource.rarity) : "bg-linear-to-b from-[#323947] to-[#4a5366]",
                )}
                draggable={false}
                src={resource.image_src}
              />
            </span>
            <Link
              children={Paths.Resource.title(resource)}
              className={cn(
                "inline-flex flex-1 justify-start items-center text-sm text-left outline-none before:absolute",
                "before:inset-0",
              )}
              to={Paths.Resource.to(resource.id)}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}
