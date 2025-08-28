import { Link, useLoaderData } from "react-router-dom";

import type { ResourceId, ResourceRecipeId } from "@/features/resources/types";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/container";
import { selectResourceById, selectResourceFoodsByRecipeId } from "@/features/resources/selectors";
import { selectResourceTypeById } from "@/features/resource-types/selectors";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import Paths from "@/constants/paths";
import { ResourceTypeIds } from "@/features/resource-types/enums.ts";

/* eslint-disable-next-line react-refresh/only-export-components */
export function loader({ params }: { params: Record<string, string | undefined> }) {
  const resource = selectResourceById(params.resourceId as ResourceId);
  const resourceRecipeDishes = resource.type_id === ResourceTypeIds.Recipe ? selectResourceFoodsByRecipeId(resource.id as ResourceRecipeId) : undefined;
  const resourceType = selectResourceTypeById(resource.type_id);

  return { resource, resourceRecipeDishes, resourceType };
}

export default function Resource() {
  const { resource, resourceRecipeDishes, resourceType } = useLoaderData<ReturnType<typeof loader>>();

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
            <BreadcrumbLink asChild>
              <Link children={Paths.Resources.title} to={Paths.Resources.to} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage children={Paths.Resource.title(resource)} />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-x-3">
        <img
          alt={resource.id}
          className="shrink-0 size-16 bg-linear-to-b from-[#323947] to-[#4a5366] rounded-md rounded-br-2xl"
          src={resource.image_src}
        />
        <div className="space-y-1">
          <h1 children={Paths.Resource.title(resource)} className="text-3xl" />
          <Badge children={resourceType.name} />
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle children="Характеристики" />
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow className="hover:bg-inherit">
                <TableHead children="Имя:" className="p-2 text-right" />
                <TableCell children={resource.name} className="p-2 text-pretty whitespace-normal" />
              </TableRow>
              <TableRow className="hover:bg-inherit">
                <TableHead children="Тип:" className="p-2 text-right" />
                <TableCell children={resourceType.name} className="p-2 text-pretty whitespace-normal" />
              </TableRow>
              <TableRow className="hover:bg-inherit">
                <TableHead children="Где найти:" className="p-2 text-right" />
                <TableCell className="p-2 text-pretty whitespace-normal">
                  {typeof resource.source === "string"
                    ? resource.source
                    : (
                        <ul className="ml-4 list-outside list-disc">
                          {resource.source.map((source, index) => (
                            <li children={source} key={index} />
                          ))}
                        </ul>
                      )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle children="Подробности" />
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              {"dish_effects" in resource && (
                <TableRow className="hover:bg-inherit">
                  <TableHead children="Эффекты приготовления блюд:" className="p-2 text-right" />
                  <TableCell
                    className="p-2 text-pretty whitespace-normal"
                    dangerouslySetInnerHTML={{ __html: resource.dish_effects }}
                  />
                </TableRow>
              )}
              {"proficiency" in resource && (
                <TableRow className="hover:bg-inherit">
                  <TableHead children="Умение:" className="p-2 text-right" />
                  <TableCell children={resource.proficiency} className="p-2 text-pretty whitespace-normal" />
                </TableRow>
              )}
              {resourceRecipeDishes && (
                <TableRow className="hover:bg-inherit">
                  <TableHead children="Блюда:" className="p-2 text-right" />
                  <TableCell className="p-2 text-pretty whitespace-normal">
                    <ul className="flex flex-wrap gap-2">
                      {resourceRecipeDishes.map(resourceRecipeDish => (
                        <li key={resourceRecipeDish.id}>
                          <Badge asChild className="flex-col p-0 w-16.5" variant="secondary">
                            <Link to={Paths.Resource.to(resourceRecipeDish.id)}>
                              <span className="shrink-0 size-16">
                                <img
                                  alt={resourceRecipeDish.id}
                                  className="size-full bg-linear-to-b from-[#323947] to-[#4a5366] rounded-md rounded-br-2xl rounded-bl-none"
                                  src={resourceRecipeDish.image_src}
                                />
                              </span>
                              <span
                                children={Paths.Resource.title(resourceRecipeDish)}
                                className="p-0.5 w-full text-center truncate"
                              />
                            </Link>
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              )}
              {"ingredients" in resource && (
                <TableRow className="hover:bg-inherit">
                  <TableHead children="Ингредиенты:" className="p-2 text-right" />
                  <TableCell className="p-2 text-pretty whitespace-normal">
                    <ul className="flex flex-wrap gap-2">
                      {resource.ingredients.map((ingredient) => {
                        const resourceIngredient = selectResourceById(ingredient.id);

                        return (
                          <li key={ingredient.id}>
                            <Badge asChild className="flex-col p-0 w-16.5" variant="secondary">
                              <Link to={Paths.Resource.to(resourceIngredient.id)}>
                                <span className="relative shrink-0 size-16">
                                  <img
                                    alt={resourceIngredient.id}
                                    className="size-full bg-linear-to-b from-[#323947] to-[#4a5366] rounded-md rounded-br-2xl rounded-bl-none"
                                    src={resourceIngredient.image_src}
                                  />
                                  <span
                                    children={ingredient.count}
                                    className="absolute top-0 right-0 p-1 text-[0.625rem] text-white bg-black/65 rounded-tr-md rounded-bl-md"
                                  />
                                </span>
                                <span
                                  children={Paths.Resource.title(resourceIngredient)}
                                  className="p-0.5 w-full text-center truncate"
                                />
                              </Link>
                            </Badge>
                          </li>
                        );
                      })}
                    </ul>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Container>
  );
}
