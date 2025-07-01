import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import ArtifactSet, { type ArtifactSetLoaderData } from "@/routes/artifact-set";
import Character, { type CharacterLoaderData } from "@/routes/character";
import Element, { type ElementLoaderData } from "@/routes/element";
import ErrorPage from "@/error-page";
import Home, { type HomeLoaderData } from "@/routes/home";
import Paths from "@/paths";
import Root from "@/routes/root";
import {
  getArtifactPieces, getArtifactSet, getArtifactSetCharacters, getArtifactSets, getCharacter, getCharacterRole,
  getCharacters, getElement, getElements, getGuideCharacter, getRegion, getRegions, getWeapons, getWeaponType,
  getWeaponTypes,
} from "@/database";
import { ThemeProvider } from "@/components/theme-provider";
import type { ArtifactSetUid } from "@/database/types/artifact-sets";
import type { CharacterUid } from "@/database/types/characters";
import type { ElementUid } from "@/database/types/elements";
import "./index.css";

const homeLoader = (): HomeLoaderData => {
  const artifactSets = getArtifactSets();
  const characters = getCharacters();
  const elements = getElements();
  const regions = getRegions();
  const weapons = getWeapons();
  const weaponTypes = getWeaponTypes();

  return { artifactSets, characters, elements, regions, weapons, weaponTypes };
};

const router = createHashRouter([
  {
    path: Paths.Root,
    children: [
      { loader: homeLoader, index: true, element: <Home /> },
      {
        loader: ({ params }): ArtifactSetLoaderData => {
          const artifactPieces = getArtifactPieces();
          const artifactSet = getArtifactSet(params.artifactSetUid as ArtifactSetUid);
          const artifactSetCharacters = getArtifactSetCharacters(params.artifactSetUid as ArtifactSetUid);

          return { artifactPieces, artifactSet, artifactSetCharacters };
        },
        path: Paths.ArtifactSet(":artifactSetUid"),
        element: <ArtifactSet />,
      },
      {
        loader: ({ params }): CharacterLoaderData => {
          const character = getCharacter(params.characterUid as CharacterUid);
          const characterElement = getElement(character.element_uid);
          const characterGuide = getGuideCharacter(params.characterUid as CharacterUid);
          const characterRoles = character.roles_uid.map(characterRoleUid => getCharacterRole(characterRoleUid));
          const characterWeaponType = getWeaponType(character.weapon_type_uid);

          return { character, characterElement, characterGuide, characterRoles, characterWeaponType };
        },
        path: Paths.Character(":characterUid"),
        element: <Character />,
      },
      {
        loader: ({ params }): ElementLoaderData => {
          const element = getElement(params.elementUid as ElementUid);
          const elementReactsWith = element.reacts_with.map(elementUid => getElement(elementUid));
          const elementRegion = getRegion(element.region_uid);

          return { element, elementReactsWith, elementRegion };
        },
        path: Paths.Element(":elementUid"),
        element: <Element />,
      },
      { loader: homeLoader, path: "/:tabValue", element: <Home /> },
    ],
    element: <Root />,
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
