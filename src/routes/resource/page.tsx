import { Link, useLoaderData } from "react-router-dom";

import type { Resource, ResourceRecipeIngredient } from "@/types/resource";
import type { ResourceLoaderReturn } from "./loader";
import { backgroundClassByRarity } from "@/lib/rarity";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import CharacterBadge from "@/organisms/badges/character-badge";
import Paths from "@/constants/paths";
import ResourceBadge from "@/organisms/badges/resource-badge";

export default function ResourcePage() {
  const {
    foodType,
    propertyBaseDishes,
    propertyCharacter,
    propertyDishes,
    propertyIngredients,
    propertyRecipe,
    propertyRelatedDishes,
    propertyRelatedItems,
    propertySpecialDish,
    resource,
    resourceType,
  } = useLoaderData<ResourceLoaderReturn>();
  const showProperties = Boolean(propertyBaseDishes) || Boolean(propertyCharacter) || Boolean(propertyDishes)
    || Boolean(propertyIngredients) || Boolean(propertyRecipe) || Boolean(propertyRelatedDishes)
    || Boolean(propertyRelatedItems) || Boolean(propertySpecialDish)
    || (resource && ("dish_effects" in resource || "proficiency" in resource));

  return resource && (
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
          className={cn(
            "shrink-0 size-16 rounded-md rounded-br-2xl",
            ("rarity" in resource && resource.rarity) ? backgroundClassByRarity(resource.rarity) : "bg-linear-to-b from-[#323947] to-[#4a5366]",
          )}
          src={resource.image_src}
        />
        <div className="space-y-1">
          <h1 children={Paths.Resource.title(resource)} className="text-3xl" />
          <div className="flex flex-wrap gap-x-1 gap-y-2">
            {resourceType && <Badge children={resourceType.name} />}
            {foodType && <Badge children={foodType.name} />}
          </div>
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
              {(foodType || resourceType) && (
                <TableRow className="hover:bg-inherit">
                  <TableHead children="Тип:" className="p-2 text-right" />
                  <TableCell className="p-2 text-pretty whitespace-normal">
                    {resourceType && <p children={resourceType.name} />}
                    {foodType && <p children={foodType.name} />}
                  </TableCell>
                </TableRow>
              )}
              {"utility" in resource && (
                <TableRow className="hover:bg-inherit">
                  <TableHead children="Назначение:" className="p-2 text-right" />
                  <TableCell
                    className="p-2 text-pretty whitespace-normal"
                    dangerouslySetInnerHTML={{ __html: resource.utility }}
                  />
                </TableRow>
              )}
              {resource.source && (
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
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {showProperties && (
        <Card>
          <CardHeader>
            <CardTitle children="Подробности" />
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                {propertyRecipe && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Рецепт:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <ResourceBadge
                        resourceId={propertyRecipe.id}
                        resourceImgSrc={propertyRecipe.image_src}
                        resourceName={propertyRecipe.name}
                        resourceRarity={propertyRecipe.rarity}
                      />
                    </TableCell>
                  </TableRow>
                )}
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
                {propertyIngredients && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Ингредиенты:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <ul className="flex flex-wrap gap-2">
                        {propertyIngredients.map((ingredient) => {
                          return ingredient.item && (
                            <li key={ingredient.id}>
                              <ResourceRecipeIngredientBadge
                                resourceCount={ingredient.count}
                                resourceId={ingredient.item.id}
                                resourceImageSrc={ingredient.item.image_src}
                                resourceName={ingredient.item.name}
                                resourceRarity={ingredient.item.rarity}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </TableCell>
                  </TableRow>
                )}
                {propertyDishes && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Блюда:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <ul className="flex flex-wrap gap-2">
                        {propertyDishes.map((propertyDish) => (
                          <li key={propertyDish.id}>
                            <ResourceBadge
                              resourceId={propertyDish.id}
                              resourceImgSrc={propertyDish.image_src}
                              resourceName={propertyDish.name}
                              resourceRarity={propertyDish.rarity}
                            />
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                )}
                {propertyBaseDishes && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Основные блюда:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <ul className="flex flex-wrap gap-2">
                        {propertyBaseDishes.map((propertyBaseDish) => (
                          <li key={propertyBaseDish.id}>
                            <ResourceBadge
                              resourceId={propertyBaseDish.id}
                              resourceImgSrc={propertyBaseDish.image_src}
                              resourceName={propertyBaseDish.name}
                              resourceRarity={propertyBaseDish.rarity}
                            />
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                )}
                {propertyRelatedDishes && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Связанные блюда:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <ul className="flex flex-wrap gap-2">
                        {propertyRelatedDishes.map((propertyRelatedDish) => (
                          <li key={propertyRelatedDish.id}>
                            <ResourceBadge
                              resourceId={propertyRelatedDish.id}
                              resourceImgSrc={propertyRelatedDish.image_src}
                              resourceName={propertyRelatedDish.name}
                              resourceRarity={propertyRelatedDish.rarity}
                            />
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                )}
                {propertySpecialDish && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Особое блюдо:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <ResourceBadge
                        resourceId={propertySpecialDish.id}
                        resourceImgSrc={propertySpecialDish.image_src}
                        resourceName={propertySpecialDish.name}
                        resourceRarity={propertySpecialDish.rarity}
                      />
                    </TableCell>
                  </TableRow>
                )}
                {propertyCharacter && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Персонаж:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <CharacterBadge
                        characterId={propertyCharacter.id}
                        characterImageSrc={propertyCharacter.image_src}
                        characterRarity={propertyCharacter.rarity}
                        characterTitle={propertyCharacter.title}
                      />
                    </TableCell>
                  </TableRow>
                )}
                {propertyRelatedItems && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Связанные предметы:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <ul className="flex flex-wrap gap-2">
                        {propertyRelatedItems.map((propertyRelatedItem) => (
                          <li key={propertyRelatedItem.id}>
                            <ResourceBadge
                              resourceId={propertyRelatedItem.id}
                              resourceImgSrc={propertyRelatedItem.image_src}
                              resourceName={propertyRelatedItem.name}
                              resourceRarity={propertyRelatedItem.rarity}
                            />
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}

function ResourceRecipeIngredientBadge({ resourceCount, resourceId, resourceImageSrc, resourceName, resourceRarity }: {
  resourceCount?: ResourceRecipeIngredient["count"];
  resourceId: Resource["id"];
  resourceImageSrc: Resource["image_src"];
  resourceName: Resource["name"];
  resourceRarity?: Resource["rarity"];
}) {
  return (
    <Badge asChild className="flex-col p-0 w-16.5" variant="secondary">
      <Link to={Paths.Resource.to(resourceId)}>
        <span className="relative shrink-0 size-16">
          <img
            alt={resourceId}
            className={cn(
              "size-full rounded-md rounded-br-2xl rounded-bl-none",
              resourceRarity ? backgroundClassByRarity(resourceRarity) : "bg-linear-to-b from-[#323947] to-[#4a5366]",
            )}
            src={resourceImageSrc}
          />
          {(resourceCount && resourceCount > 1) && (
            <span
              children={resourceCount}
              className="absolute top-0 right-0 p-1 text-[0.625rem] text-white bg-black/65 rounded-tr-md rounded-bl-md"
            />
          )}
        </span>
        <span children={resourceName} className="p-0.5 w-full text-center truncate" />
      </Link>
    </Badge>
  );
}
