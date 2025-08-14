import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import ArtifactSet, { type ArtifactSetLoaderData } from "@/routes/artifact-set";
import ArtifactSets, { type ArtifactSetsLoaderData } from "@/routes/artifact-sets";
import Character, { type CharacterLoaderData } from "@/routes/character";
import Characters, { type CharactersLoaderData } from "@/routes/characters";
import Element, { type ElementLoaderData } from "@/routes/element";
import ErrorPage from "@/error-page";
import Layout from "@/routes/layout";
import Paths from "@/constants/paths";
import Root from "@/routes/root";
import Weapon, { type WeaponLoaderData } from "@/routes/weapon";
import Weapons, { type WeaponsLoaderData } from "@/routes/weapons";
import WeaponsTierList, { type WeaponsTierListLoaderData } from "@/routes/weapons-tier-list";
import {
  getArtifactSet, getArtifactSets, getCharacter, getCharacters, getElement, getElements, getRegion,
  getTierListsWeapons, getWeapon, getWeapons, getWeaponType, getWeaponTypes,
} from "@/database";
import { ThemeProvider } from "@/components/theme-provider";
import type { ArtifactSetKey } from "@/database/types/artifact-set";
import type { CharacterKey } from "@/database/types/character";
import type { ElementKey } from "@/database/types/element";
import type { WeaponKey } from "@/database/types/weapon";
import "./index.css";

const router = createHashRouter([
  {
    path: Paths.Root.to,
    children: [
      { index: true, element: <Root /> },
      {
        loader: (): ArtifactSetsLoaderData => ({ artifactSets: getArtifactSets() }),
        path: Paths.ArtifactSets.to,
        element: <ArtifactSets />,
      },
      {
        loader: ({ params }): ArtifactSetLoaderData => ({
          artifactSet: getArtifactSet(params.artifactSetKey as ArtifactSetKey),
        }),
        path: Paths.ArtifactSet.to(":artifactSetKey"),
        element: <ArtifactSet />,
      },
      {
        loader: (): CharactersLoaderData => ({
          characters: getCharacters(),
          elements: getElements(),
          weaponTypes: getWeaponTypes(),
        }),
        path: Paths.Characters.to,
        element: <Characters />,
      },
      {
        loader: ({ params }): CharacterLoaderData => ({
          character: getCharacter(params.characterKey as CharacterKey),
        }),
        path: Paths.Character.to(":characterKey"),
        element: <Character />,
      },
      {
        loader: ({ params }): ElementLoaderData => {
          const element = getElement(params.elementKey as ElementKey);

          return {
            element,
            elementReactsWith: element.reacts_with.map(getElement),
            elementRegion: getRegion(element.region_key),
          };
        },
        path: Paths.Element.to(":elementKey"),
        element: <Element />,
      },
      {
        loader: (): WeaponsLoaderData => ({ weapons: getWeapons(), weaponTypes: getWeaponTypes() }),
        path: Paths.Weapons.to,
        element: <Weapons />,
      },
      {
        loader: ({ params }): WeaponLoaderData => {
          const weapon = getWeapon(params.weaponKey as WeaponKey);

          return {
            weapon,
            weaponType: getWeaponType(weapon.type_key),
          };
        },
        path: Paths.Weapon.to(":weaponKey"),
        element: <Weapon />,
      },
      {
        loader: (): WeaponsTierListLoaderData => ({ tierListsWeapons: getTierListsWeapons() }),
        path: Paths.WeaponsTierList.to,
        element: <WeaponsTierList />,
      },
    ],
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
