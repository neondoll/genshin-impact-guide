import { Link, useLoaderData } from "react-router-dom";

import Container from "@/components/container";
import Paths from "@/constants/paths";
import { backgroundClassByRarity } from "@/lib/rarity";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { getArtifactSets } from "@/database";

export interface ArtifactSetsLoaderData {
  artifactSets: Awaited<ReturnType<typeof getArtifactSets>>;
}

export default function ArtifactSets() {
  const { artifactSets } = useLoaderData<ArtifactSetsLoaderData>();

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
            <BreadcrumbPage children={Paths.ArtifactSets.title} />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 children={Paths.ArtifactSets.title} className="text-2xl" />
      <ul className="flex flex-wrap gap-2 justify-center items-stretch md:gap-4">
        {artifactSets.map((artifactSet) => {
          return (
            <li
              className={cn(
                "flex relative flex-col gap-4 px-5.5 py-4 w-36 min-h-45 text-card-foreground bg-card rounded-xl",
                "border shadow-sm transition-all has-hover:scale-104 has-focus-visible:ring-3",
                "has-focus-visible:ring-ring/50",
              )}
              key={artifactSet.key}
            >
              <span
                className={cn(
                  "inline-flex shrink-0 justify-center items-center w-24.5 rounded-lg rounded-br-3xl",
                  backgroundClassByRarity(...artifactSet.rarities),
                )}
              >
                <img
                  alt={artifactSet.name}
                  className="object-cover size-full rounded-lg rounded-br-3xl"
                  draggable={false}
                  src={artifactSet.image_src}
                />
              </span>
              <Link
                children={Paths.ArtifactSet.title(artifactSet)}
                className={cn(
                  "inline-flex flex-1 justify-center items-center text-sm text-center outline-none",
                  "before:absolute before:inset-0",
                )}
                to={Paths.ArtifactSet.to(artifactSet.key)}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
