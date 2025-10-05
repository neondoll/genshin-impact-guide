import { Link, useLoaderData } from "react-router-dom";

import type { ElementalReactionId } from "@/types/elemental-reaction";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Container } from "@/components/container";
import { selectElementalReactionById } from "@/features/elemental-reactions/selectors";
import ElementalReactionImg from "@/features/elemental-reactions/elemental-reaction-img";
import Paths from "@/constants/paths";

/* eslint-disable-next-line react-refresh/only-export-components */
export function loader({ params }: { params: Record<string, string | undefined> }) {
  const elementalReaction = selectElementalReactionById(params.elementalReactionId as ElementalReactionId);

  return { elementalReaction };
}

export default function ElementalReaction() {
  const { elementalReaction } = useLoaderData<ReturnType<typeof loader>>();

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
          <BreadcrumbItem children="Элементальные реакции" />
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage children={Paths.ElementalReaction.title(elementalReaction)} />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-x-3">
        <ElementalReactionImg
          className="shrink-0 p-2 h-20 bg-linear-to-b from-[#323947] to-[#4a5366] rounded-md rounded-br-2xl"
          item={elementalReaction}
        />
        <div className="space-y-1">
          <div className="flex gap-x-1 items-center">
            <h1 children={Paths.ElementalReaction.title(elementalReaction)} className="text-3xl" />
          </div>
        </div>
      </div>
    </Container>
  );
}
