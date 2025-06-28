import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import Character, { type CharacterLoaderData } from "@/routes/character";
import ErrorPage from "@/error-page";
import Home, { type HomeLoaderData } from "@/routes/home";
import Paths from "@/paths";
import Root from "@/routes/root";
import { getArtifactSets } from "@/database/artifact-sets";
import { getCharacterRole } from "@/database/character-roles";
import { getElement, getElements } from "@/database/elements";
import { getGuideCharacter } from "@/database/guide-characters";
import { getRegions } from "@/database/regions";
import { getWeapons } from "@/database/weapons";
import { getWeaponType, getWeaponTypes } from "@/database/weapon-types";
import { ThemeProvider } from "@/components/theme-provider";
import { type CharacterUid, getCharacter, getCharacters } from "@/database/characters";
import "./index.css";

const router = createHashRouter([
  {
    path: Paths.Root,
    children: [
      {
        loader: (): HomeLoaderData => {
          const artifactSets = getArtifactSets();
          const characters = getCharacters();
          const elements = getElements();
          const regions = getRegions();
          const weapons = getWeapons();
          const weaponTypes = getWeaponTypes();

          return { artifactSets, characters, elements, regions, weapons, weaponTypes };
        },
        index: true,
        element: <Home />,
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
