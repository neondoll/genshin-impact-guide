import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

// import { getCharacters, getElements, getWeaponTypes } from "./database";
// import { getWeapons, getWeaponTypes } from "./database";
import { ThemeProvider } from "./components/theme-provider";
import ArtifactSet, { loader as artifactSetLoader } from "./routes/artifact-set";
import ArtifactSets, { loader as artifactSetsLoader } from "./routes/artifact-sets";
// import Characters, { type CharactersLoaderData } from "./routes/characters";
import ErrorPage from "./error-page";
import Index from "./routes/index";
import Paths from "./constants/paths";
import Root from "./routes/root";
// import Weapons, { type WeaponsLoaderData } from "./routes/weapons";
import "./index.css";

const router = createHashRouter([
  {
    path: Paths.Root.to,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: Paths.ArtifactSets.to, element: <ArtifactSets />, loader: artifactSetsLoader },
      { path: Paths.ArtifactSet.to(":artifactSetKey"), element: <ArtifactSet />, loader: artifactSetLoader },
      // {
      //   loader: (): CharactersLoaderData => ({
      //     characters: getCharacters(),
      //     elements: getElements(),
      //     weaponTypes: getWeaponTypes(),
      //   }),
      //   path: Paths.Characters.to,
      //   element: <Characters />,
      // },
      // {
      //   loader: ({ params }): CharacterLoaderData => ({
      //     character: getCharacter(params.characterKey as CharacterKey),
      //   }),
      //   path: Paths.Character.to(":characterKey"),
      //   element: <Character />,
      // },
      // {
      //   loader: ({ params }): ElementLoaderData => {
      //     const element = getElement(params.elementKey as ElementKey);
      //
      //     return {
      //       element,
      //       elementReactsWith: element.reacts_with.map(getElement),
      //       elementRegion: getRegion(element.region_key),
      //     };
      //   },
      //   path: Paths.Element.to(":elementKey"),
      //   element: <Element />,
      // },
      // {
      //   loader: (): WeaponsLoaderData => ({ weapons: getWeapons(), weaponTypes: getWeaponTypes() }),
      //   path: Paths.Weapons.to,
      //   element: <Weapons />,
      // },
      // {
      //   loader: ({ params }): WeaponLoaderData => {
      //     const weapon = getWeapon(params.weaponKey as WeaponKey);
      //
      //     return { weapon, weaponType: getWeaponType(weapon.type_key) };
      //   },
      //   path: Paths.Weapon.to(":weaponKey"),
      //   element: <Weapon />,
      // },
      // {
      //   loader: (): WeaponsTierListLoaderData => ({ tierListsWeapons: getTierListsWeapons() }),
      //   path: Paths.WeaponsTierList.to,
      //   element: <WeaponsTierList />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
