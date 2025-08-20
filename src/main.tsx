import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { StrictMode } from "react";

import { store } from "./app/store";
import { ThemeProvider } from "./components/theme-provider";
import ArtifactSet from "./routes/artifact-set";
import ArtifactSets from "./routes/artifact-sets";
import Character, { loader as characterLoader } from "./routes/character";
import Characters, { loader as charactersLoader } from "./routes/characters";
// import ErrorPage from "./error-page";
import Index from "./routes/index";
import Paths from "./constants/paths";
import Root from "./routes/root";
import Weapon, { loader as weaponLoader } from "./routes/weapon";
import Weapons, { loader as weaponsLoader } from "./routes/weapons";
import WeaponsTierList, { loader as weaponsTierListLoader } from "./routes/weapons-tier-list";
import "./index.css";

const router = createHashRouter([
  {
    path: Paths.Root.to,
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: Paths.ArtifactSets.to, element: <ArtifactSets /> },
      { path: Paths.ArtifactSet.to(":artifactSetKey"), element: <ArtifactSet /> },
      { path: Paths.Characters.to, element: <Characters />, loader: charactersLoader },
      { path: Paths.Character.to(":characterKey"), element: <Character />, loader: characterLoader },
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
      { path: Paths.Weapons.to, element: <Weapons />, loader: weaponsLoader },
      { path: Paths.Weapon.to(":weaponKey"), element: <Weapon />, loader: weaponLoader },
      { path: Paths.WeaponsTierList.to, element: <WeaponsTierList />, loader: weaponsTierListLoader },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
