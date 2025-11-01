import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { lazy, StrictMode, Suspense } from "react";

import { store } from "./app/store";
import { ThemeProvider } from "./components/theme-provider";
import ErrorPage from "./error-page";
import Index from "./routes/index";
import Paths from "./constants/paths";
import Root from "./routes/root";
import "./index.css";
import { LoadingFallback } from "@/components/ui/loading-fallback.tsx";

// Ленивая загрузка тяжелых компонентов
const ArtifactSet = lazy(() => import("./routes/artifact-set"));
const ArtifactSets = lazy(() => import("./routes/artifact-sets"));
const Character = lazy(() => import("./routes/character"));
const Characters = lazy(() => import("./routes/characters"));
const ElementalReaction = lazy(() => import("./routes/elemental-reaction"));
const Resource = lazy(() => import("./routes/resource"));
const Resources = lazy(() => import("./routes/resources"));
const Weapon = lazy(() => import("./routes/weapon"));
const Weapons = lazy(() => import("./routes/weapons"));
const WeaponsTierList = lazy(() => import("./routes/weapons-tier-list"));

// Ленивая загрузка loader'ов
const artifactSetLoader = () => import("./routes/artifact-set").then((module) => module.loader);
const artifactSetsLoader = () => import("./routes/artifact-sets").then((module) => module.loader);
const characterLoader = () => import("./routes/character").then((module) => module.loader);
const charactersLoader = () => import("./routes/characters").then((module) => module.loader);
const elementalReactionLoader = () => import("./routes/elemental-reaction").then((module) => module.loader);
const resourceLoader = () => import("./routes/resource").then((module) => module.loader);
const resourcesLoader = () => import("./routes/resources").then((module) => module.loader);
const weaponLoader = () => import("./routes/weapon").then((module) => module.loader);
const weaponsLoader = () => import("./routes/weapons").then((module) => module.loader);
const weaponsTierListLoader = () => import("./routes/weapons-tier-list").then((module) => module.loader);

const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Root element with ID 'root' was not found in the document. "
    + "Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );
}

const root = createRoot(container);

const router = createHashRouter([
  {
    path: Paths.Root.to,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: Paths.ArtifactSets.to, element: <ArtifactSets />, loader: () => artifactSetsLoader() },
      { path: Paths.ArtifactSet.to(":artifactSetId"), element: <ArtifactSet />, loader: ({ params }) => artifactSetLoader().then((loader) => loader({ params })) },
      { path: Paths.Characters.to, element: <Characters />, loader: () => charactersLoader() },
      { path: Paths.Character.to(":characterId"), element: <Character />, loader: ({ params }) => characterLoader().then((loader) => loader({ params })) },
      {
        path: Paths.ElementalReaction.to(":elementalReactionId"),
        element: <ElementalReaction />,
        loader: ({ params }) => elementalReactionLoader().then((loader) => loader({ params }))
      },
      { path: Paths.Resources.to, element: <Resources />, loader: () => resourcesLoader() },
      { path: Paths.Resource.to(":resourceId"), element: <Resource />, loader: ({ params }) => resourceLoader().then((loader) => loader({ params })) },
      { path: Paths.Weapons.to, element: <Weapons />, loader: () => weaponsLoader() },
      { path: Paths.Weapon.to(":weaponId"), element: <Weapon />, loader: ({ params }) => weaponLoader().then((loader) => loader({ params })) },
      { path: Paths.WeaponsTierList.to, element: <WeaponsTierList />, loader: () => weaponsTierListLoader() },
    ],
  },
]);

root.render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Provider store={store}>
        <Suspense fallback={<LoadingFallback />}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
