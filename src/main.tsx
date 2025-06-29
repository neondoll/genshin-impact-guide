import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import ArtifactSet, { type ArtifactSetLoaderData } from "@/routes/artifact-set";
import Character, { type CharacterLoaderData } from "@/routes/character";
import ErrorPage from "@/error-page";
import Home, { type HomeLoaderData } from "@/routes/home";
import Paths from "@/paths";
import Root from "@/routes/root";
import {
  getArtifactSet, getArtifactSetCharactersUid, getArtifactSets, getArtifactTypes, getCharacter, getCharacterRole,
  getCharacters, getElement, getElements, getGuideCharacter, getRegions, getWeapons, getWeaponType, getWeaponTypes,
} from "@/database";
import { ThemeProvider } from "@/components/theme-provider";
import type { ArtifactSetUid } from "@/database/types/artifact-sets";
import type { CharacterUid } from "@/database/types/characters";
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
          const artifactSet = getArtifactSet(params.artifactSetUid as ArtifactSetUid);
          const artifactSetCharactersUid = getArtifactSetCharactersUid(params.artifactSetUid as ArtifactSetUid);
          const artifactTypes = getArtifactTypes();

          return { artifactSet, artifactSetCharactersUid, artifactTypes };
        },
        path: Paths.ArtifactSet(":artifactSetUid"),
        element: <ArtifactSet />,
      },
      {
        loader: ({ params }): CharacterLoaderData => {
          const character = getCharacter(params.characterUid as CharacterUid);
          const characterElement = getElement(character.element_uid);
          const characterRoles = character.roles_uid.map(characterRoleUid => getCharacterRole(characterRoleUid));
          const characterWeaponType = getWeaponType(character.weapon_type_uid);
          const guideCharacter = getGuideCharacter(params.characterUid as CharacterUid);

          return { character, characterElement, characterRoles, characterWeaponType, guideCharacter };
        },
        path: Paths.Character(":characterUid"),
        element: <Character />,
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
