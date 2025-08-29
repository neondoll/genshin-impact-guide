import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { StrictMode } from "react";

import { store } from "./app/store";
import { ThemeProvider } from "./components/theme-provider";
import ArtifactSet, { loader as artifactSetLoader } from "./routes/artifact-set";
import ArtifactSets, { loader as artifactSetsLoader } from "./routes/artifact-sets";
import Character, { loader as characterLoader } from "./routes/character";
import Characters, { loader as charactersLoader } from "./routes/characters";
import ErrorPage from "./error-page";
import Index from "./routes/index";
import Paths from "./constants/paths";
import Resource, { loader as resourceLoader } from "./routes/resource";
import Resources, { loader as resourcesLoader } from "./routes/resources";
import Root from "./routes/root";
import Weapon, { loader as weaponLoader } from "./routes/weapon";
import Weapons, { loader as weaponsLoader } from "./routes/weapons";
import WeaponsTierList, { loader as weaponsTierListLoader } from "./routes/weapons-tier-list";
import "./index.css";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  const router = createHashRouter([
    {
      path: Paths.Root.to,
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Index /> },
        { path: Paths.ArtifactSets.to, element: <ArtifactSets />, loader: artifactSetsLoader },
        { path: Paths.ArtifactSet.to(":artifactSetId"), element: <ArtifactSet />, loader: artifactSetLoader },
        { path: Paths.Characters.to, element: <Characters />, loader: charactersLoader },
        { path: Paths.Character.to(":characterId"), element: <Character />, loader: characterLoader },
        { path: Paths.Resources.to, element: <Resources />, loader: resourcesLoader },
        { path: Paths.Resource.to(":resourceId"), element: <Resource />, loader: resourceLoader },
        { path: Paths.Weapons.to, element: <Weapons />, loader: weaponsLoader },
        { path: Paths.Weapon.to(":weaponId"), element: <Weapon />, loader: weaponLoader },
        { path: Paths.WeaponsTierList.to, element: <WeaponsTierList />, loader: weaponsTierListLoader },
      ],
    },
  ]);

  root.render(
    <StrictMode>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </StrictMode>,
  );
}
else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );
}
