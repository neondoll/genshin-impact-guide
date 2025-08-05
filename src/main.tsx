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
import WeaponsTierList, { type WeaponsTierListLoaderData } from "@/routes/weapons-tier-list";
import {
  getArtifactPieces, getArtifactSet, getArtifactSetRecommendations, getArtifactSets, getCharacter,
  getCharacterRecommendations, getCharacterRole, getCharacters, getElement, getElements, getRegion, getTierListsWeapons,
  getWeapons, getWeaponType, getWeaponTypes,
} from "@/database";
import { ThemeProvider } from "@/components/theme-provider";
import type { ArtifactSetUid } from "@/database/types/artifact-set";
import type { CharacterUid } from "@/database/types/character";
import type { ElementUid } from "@/database/types/element";
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
          artifactPieces: getArtifactPieces(),
          artifactSet: getArtifactSet(params.artifactSetUid as ArtifactSetUid),
          artifactSetRecommendations: getArtifactSetRecommendations(params.artifactSetUid as ArtifactSetUid),
        }),
        path: Paths.ArtifactSet.to(":artifactSetUid"),
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
        loader: ({ params }): CharacterLoaderData => {
          const character = getCharacter(params.characterUid as CharacterUid);

          return {
            character,
            characterElement: getElement(character.element_uid),
            characterRecommendations: getCharacterRecommendations(params.characterUid as CharacterUid),
            characterRoles: character.roles_uid ? character.roles_uid.map(characterRoleUid => getCharacterRole(characterRoleUid)) : undefined,
            characterWeaponType: getWeaponType(character.weapon_type_uid),
          };
        },
        path: Paths.Character.to(":characterUid"),
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
        path: Paths.Element.to(":elementUid"),
        element: <Element />,
      },
      { loader: (): WeaponsLoaderData => ({ weapons: getWeapons() }), path: Paths.Weapons.to, element: <Weapons /> },
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
