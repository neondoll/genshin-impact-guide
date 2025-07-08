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
import Weapons, { type WeaponsLoaderData } from "@/routes/weapons";
import {
  getArtifactPieces, getArtifactSet, getArtifactSets, getCharacter, getCharacterRecommendations, getCharacterRole,
  getCharacters, getElement, getRegion, getWeapons, getWeaponType,
} from "@/database";
import { ThemeProvider } from "@/components/theme-provider";
import type { ArtifactSetUid } from "@/database/types/artifact-sets";
import type { CharacterUid } from "@/database/types/characters";
import type { ElementUid } from "@/database/types/elements";
import "./index.css";

const router = createHashRouter([
  {
    path: Paths.Root,
    children: [
      { index: true, element: <Root /> },
      {
        loader: (): ArtifactSetsLoaderData => ({ artifactSets: getArtifactSets() }),
        path: Paths.ArtifactSets,
        element: <ArtifactSets />,
      },
      {
        loader: ({ params }): ArtifactSetLoaderData => ({
          artifactPieces: getArtifactPieces(),
          artifactSet: getArtifactSet(params.artifactSetUid as ArtifactSetUid),
        }),
        path: Paths.ArtifactSet(":artifactSetUid"),
        element: <ArtifactSet />,
      },
      {
        loader: (): CharactersLoaderData => ({ characters: getCharacters() }),
        path: Paths.Characters,
        element: <Characters />,
      },
      {
        loader: ({ params }): CharacterLoaderData => {
          const character = getCharacter(params.characterUid as CharacterUid);

          return {
            character,
            characterElement: getElement(character.element_uid),
            characterRecommendations: getCharacterRecommendations(params.characterUid as CharacterUid),
            characterRoles: character.roles_uid.map(characterRoleUid => getCharacterRole(characterRoleUid)),
            characterWeaponType: getWeaponType(character.weapon_type_uid),
          };
        },
        path: Paths.Character(":characterUid"),
        element: <Character />,
      },
      {
        loader: ({ params }): ElementLoaderData => {
          const element = getElement(params.elementUid as ElementUid);

          return {
            element,
            elementReactsWith: element.reacts_with.map(elementUid => getElement(elementUid)),
            elementRegion: getRegion(element.region_uid),
          };
        },
        path: Paths.Element(":elementUid"),
        element: <Element />,
      },
      {
        loader: (): WeaponsLoaderData => ({ weapons: getWeapons() }),
        path: Paths.Weapons,
        element: <Weapons />,
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
