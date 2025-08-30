import { Link, useLoaderData } from "react-router-dom";

import type {
  Resource as ResourceType,
  ResourceFood,
  ResourceRecipe,
  ResourceRecipeIngredient,
} from "@/features/resources/types";
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
import { Container } from "@/components/container";
import { ResourceTypeIds } from "@/features/resource-types/enums";
import { selectCharacterById } from "@/features/characters/selectors";
import { selectFoodTypeById } from "@/features/food-types/selectors";
import {
  selectResourceById,
  selectResourceFoodsByIds,
  selectResourceFoodsByRecipeId,
  selectResourceRecipeById,
} from "@/features/resources/selectors";
import { selectResourceTypeById } from "@/features/resource-types/selectors";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import CharacterBadge from "@/organisms/character-badge";
import Paths from "@/constants/paths";
import { cn } from "@/lib/utils.ts";
import { backgroundClassByRarity } from "@/lib/rarity.ts";
import ResourceBadge from "@/organisms/resource-badge.tsx";

function RecipeIngredients({ items }: { items: ResourceRecipeIngredient[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => {
        const ingredient = selectResourceById(item.id);

        return (
          <li key={item.id}>
            <ResourceRecipeIngredientBadge
              resourceCount={item.count}
              resourceId={ingredient.id}
              resourceImageSrc={ingredient.image_src}
              resourceName={ingredient.name}
            />
          </li>
        );
      })}
    </ul>
  );
}

function ResourceRecipeIngredientBadge({ resourceCount, resourceId, resourceImageSrc, resourceName }: {
  resourceCount?: ResourceRecipeIngredient["count"];
  resourceId: ResourceType["id"];
  resourceImageSrc: ResourceType["image_src"];
  resourceName: ResourceType["name"];
}) {
  return (
    <Badge asChild className="flex-col p-0 w-16.5" variant="secondary">
      <Link to={Paths.Resource.to(resourceId)}>
        <span className="relative shrink-0 size-16">
          <img
            alt={resourceId}
            className="size-full bg-linear-to-b from-[#323947] to-[#4a5366] rounded-md rounded-br-2xl rounded-bl-none"
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

/* eslint-disable-next-line react-refresh/only-export-components */
export function loader({ params }: { params: Record<string, string | undefined> }) {
  const resource = selectResourceById(params.resourceId as ResourceType["id"]);
  const resourceType = selectResourceTypeById(resource.type_id);

  let foodBaseDishes = undefined;
  let foodCharacter = undefined;
  let foodRecipe = undefined;
  let foodRelatedDishes = undefined;
  let foodRelatedItems = undefined;
  let foodSpecialDish = undefined;
  let foodType = undefined;
  let recipeDishes = undefined;
  let recipeSpecialDish = undefined;

  switch (resource.type_id) {
    case ResourceTypeIds.Food: {
      const food = resource as ResourceFood;

      if (food.character_id) {
        foodCharacter = selectCharacterById(food.character_id);
      }

      if (food.recipe_id) {
        foodRecipe = selectResourceRecipeById(food.recipe_id);

        if (food.character_id) {
          foodBaseDishes = selectResourceFoodsByRecipeId(foodRecipe.id).filter(value => value.id !== food.id);
        }
        else {
          foodRelatedDishes = selectResourceFoodsByRecipeId(foodRecipe.id).filter(value => value.id !== food.id);

          const foodSpecialDishIndex = foodRelatedDishes.findIndex(dish => Boolean(dish.character_id));

          if (foodSpecialDishIndex !== -1) {
            foodSpecialDish = foodRelatedDishes.splice(foodSpecialDishIndex, 1)[0];
          }
        }
      }

      if (food.related_item_ids) {
        foodRelatedItems = selectResourceFoodsByIds(food.related_item_ids);
      }

      foodType = selectFoodTypeById(food.food_type_id);

      break;
    }
    case ResourceTypeIds.Recipe: {
      const recipe = resource as ResourceRecipe;

      recipeDishes = selectResourceFoodsByRecipeId(recipe.id);

      const recipeSpecialDishIndex = recipeDishes.findIndex(dish => Boolean(dish.character_id));

      if (recipeSpecialDishIndex !== -1) {
        recipeSpecialDish = recipeDishes.splice(recipeSpecialDishIndex, 1)[0];
      }

      break;
    }
  }

  return {
    foodBaseDishes,
    foodCharacter,
    foodRecipe,
    foodRelatedDishes,
    foodRelatedItems,
    foodSpecialDish,
    foodType,
    recipeDishes,
    recipeSpecialDish,
    resource,
    resourceType,
  };
}

export default function Resource() {
  const {
    foodBaseDishes,
    foodCharacter,
    foodRecipe,
    foodRelatedDishes,
    foodRelatedItems,
    foodSpecialDish,
    foodType,
    recipeDishes,
    recipeSpecialDish,
    resource,
    resourceType,
  } = useLoaderData<ReturnType<typeof loader>>();
  const showProperties = Boolean(foodBaseDishes) || Boolean(foodCharacter) || Boolean(foodRecipe)
    || Boolean(foodRelatedDishes) || Boolean(foodRelatedItems) || Boolean(foodSpecialDish) || Boolean(recipeDishes)
    || Boolean(recipeSpecialDish) || "ingredients" in resource || "dish_effects" in resource
    || "proficiency" in resource;

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
          className={cn(
            "shrink-0 size-16 rounded-md rounded-br-2xl",
            ("rarity" in resource && resource.rarity) ? backgroundClassByRarity(resource.rarity) : "bg-linear-to-b from-[#323947] to-[#4a5366]",
          )}
          src={resource.image_src}
        />
        <div className="space-y-1">
          <h1 children={Paths.Resource.title(resource)} className="text-3xl" />
          <div className="flex flex-wrap gap-x-1 gap-y-2">
            <Badge children={resourceType.name} />
            {foodType && (
              <Badge children={foodType.name} />
            )}
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
              <TableRow className="hover:bg-inherit">
                <TableHead children="Тип:" className="p-2 text-right" />
                <TableCell className="p-2 text-pretty whitespace-normal">
                  <p children={resourceType.name} />
                  {foodType && <p children={foodType.name} />}
                </TableCell>
              </TableRow>
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
                {foodRelatedItems && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Связанные предметы:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <ul className="flex flex-wrap gap-2">
                        {foodRelatedItems.map(foodRelatedItem => (
                          <li key={foodRelatedItem.id}>
                            <ResourceBadge
                              resourceId={foodRelatedItem.id}
                              resourceImgSrc={foodRelatedItem.image_src}
                              resourceName={foodRelatedItem.name}
                              resourceRarity={foodRelatedItem.rarity}
                            />
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                )}
                {foodRecipe && (
                  <>
                    <TableRow className="hover:bg-inherit">
                      <TableHead children="Рецепт:" className="p-2 text-right" />
                      <TableCell className="p-2 text-pretty whitespace-normal">
                        <ResourceBadge
                          resourceId={foodRecipe.id}
                          resourceImgSrc={foodRecipe.image_src}
                          resourceName={foodRecipe.name}
                          resourceRarity={foodRecipe.rarity}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-inherit">
                      <TableHead children="Ингредиенты:" className="p-2 text-right" />
                      <TableCell
                        children={<RecipeIngredients items={foodRecipe.ingredients} />}
                        className="p-2 text-pretty whitespace-normal"
                      />
                    </TableRow>
                  </>
                )}
                {foodBaseDishes && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Основные блюда:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <ul className="flex flex-wrap gap-2">
                        {foodBaseDishes.map(foodBaseDish => (
                          <li key={foodBaseDish.id}>
                            <ResourceBadge
                              resourceId={foodBaseDish.id}
                              resourceImgSrc={foodBaseDish.image_src}
                              resourceName={foodBaseDish.name}
                              resourceRarity={foodBaseDish.rarity}
                            />
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                )}
                {foodRelatedDishes && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Связанные блюда:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <ul className="flex flex-wrap gap-2">
                        {foodRelatedDishes.map(foodRelatedDish => (
                          <li key={foodRelatedDish.id}>
                            <ResourceBadge
                              resourceId={foodRelatedDish.id}
                              resourceImgSrc={foodRelatedDish.image_src}
                              resourceName={foodRelatedDish.name}
                              resourceRarity={foodRelatedDish.rarity}
                            />
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                )}
                {foodSpecialDish && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Особое блюдо:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <ResourceBadge
                        resourceId={foodSpecialDish.id}
                        resourceImgSrc={foodSpecialDish.image_src}
                        resourceName={foodSpecialDish.name}
                        resourceRarity={foodSpecialDish.rarity}
                      />
                    </TableCell>
                  </TableRow>
                )}
                {foodCharacter && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Персонаж:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <CharacterBadge
                        characterId={foodCharacter.id}
                        characterImgSrc={foodCharacter.image_src}
                        characterName={foodCharacter.name}
                        characterRarity={foodCharacter.rarity}
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
                {"ingredients" in resource && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Ингредиенты:" className="p-2 text-right" />
                    <TableCell
                      children={<RecipeIngredients items={resource.ingredients} />}
                      className="p-2 text-pretty whitespace-normal"
                    />
                  </TableRow>
                )}
                {recipeDishes && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Блюда:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <ul className="flex flex-wrap gap-2">
                        {recipeDishes.map(recipeDish => (
                          <li key={recipeDish.id}>
                            <ResourceBadge
                              resourceId={recipeDish.id}
                              resourceImgSrc={recipeDish.image_src}
                              resourceName={recipeDish.name}
                              resourceRarity={recipeDish.rarity}
                            />
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                )}
                {recipeSpecialDish && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead children="Особое блюдо:" className="p-2 text-right" />
                    <TableCell className="p-2 text-pretty whitespace-normal">
                      <ResourceBadge
                        resourceId={recipeSpecialDish.id}
                        resourceImgSrc={recipeSpecialDish.image_src}
                        resourceName={recipeSpecialDish.name}
                        resourceRarity={recipeSpecialDish.rarity}
                      />
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
