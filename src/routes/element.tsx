import { Link, useLoaderData } from "react-router-dom";

import Container from "@/components/container";
import Paths from "@/paths";
import { Card, CardTitle } from "@/components/ui/card";
import { getElement, getRegion } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge.tsx";

export type ElementLoaderData = {
  element: Awaited<ReturnType<typeof getElement>>;
  elementReactsWith: Awaited<ReturnType<typeof getElement>>[];
  elementRegion: Awaited<ReturnType<typeof getRegion>>;
};

export default function Element() {
  const { element, elementReactsWith, elementRegion } = useLoaderData<ElementLoaderData>();

  return (
    <Container className="flex flex-col gap-2 md:gap-4">
      <Card className="items-center px-6 sm:flex-row">
        <div className="flex shrink-0 gap-6 items-center self-start sm:flex-col">
          <img alt={element.name} className="shrink-0 size-16 rounded-xl" src={element.image_src} />
          <CardTitle>{element.name}</CardTitle>
        </div>
        <Table className="flex-1">
          <TableBody>
            <TableRow className="hover:bg-inherit">
              <TableHead className="p-2 text-right">Регион</TableHead>
              <TableCell className="p-2">{elementRegion.name}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableHead className="p-2 text-right">Реагирует с</TableHead>
              <TableCell className="p-2">
                <div className="flex flex-wrap gap-2">
                  {elementReactsWith.map(element => (
                    <Badge asChild className="rounded-full" key={element.uid} variant="secondary">
                      <Link to={Paths.Element(element.uid)}>
                        <img alt={element.name} className="shrink-0 size-5" src={element.image_src} />
                        <span>{element.name}</span>
                      </Link>
                    </Badge>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </Container>
  );
}
