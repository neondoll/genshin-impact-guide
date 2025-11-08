import { createHashRouter } from "react-router-dom";

import Error from "@/routes/error";
import Index from "@/routes/index";
import Paths from "@/constants/paths";
import Root from "@/routes/root";
import { lazy } from "react";

const artifactSetLoader = () => import("@/routes/artifact-set/loader").then((module) => module.default);
const artifactSetsLoader = () => import("@/routes/artifact-sets/loader").then((module) => module.default);
const characterLoader = () => import("@/routes/character/loader").then((module) => module.default);
const charactersLoader = () => import("@/routes/characters/loader").then((module) => module.default);
const elementalReactionLoader = () => import("@/routes/elemental-reaction/loader").then((module) => module.default);
const resourceLoader = () => import("@/routes/resource/loader").then((module) => module.default);
const resourcesLoader = () => import("@/routes/resources/loader").then((module) => module.default);
const weaponLoader = () => import("@/routes/weapon/loader").then((module) => module.default);
const weaponsLoader = () => import("@/routes/weapons/loader").then((module) => module.default);
const weaponsTierListLoader = () => import("@/routes/weapons-tier-list/loader").then((module) => module.default);

const ArtifactSetPage = lazy(() => import("@/routes/artifact-set/page"));
const ArtifactSetsPage = lazy(() => import("@/routes/artifact-sets/page"));
const CharacterPage = lazy(() => import("@/routes/character/page"));
const CharactersPage = lazy(() => import("@/routes/characters/page"));
const ElementalReactionPage = lazy(() => import("@/routes/elemental-reaction/page"));
const ResourcePage = lazy(() => import("@/routes/resource/page"));
const ResourcesPage = lazy(() => import("@/routes/resources/page"));
const WeaponPage = lazy(() => import("@/routes/weapon/page"));
const WeaponsPage = lazy(() => import("@/routes/weapons/page"));
const WeaponsTierListPage = lazy(() => import("@/routes/weapons-tier-list/page"));

export const router = createHashRouter([
  {
    path: Paths.Root.to,
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Index /> },
      {
        path: Paths.ArtifactSets.to,
        element: <ArtifactSetsPage />,
        loader: () => artifactSetsLoader(),
      },
      {
        path: Paths.ArtifactSet.to(":artifactSetId"),
        element: <ArtifactSetPage />,
        loader: ({ params }) => artifactSetLoader().then((loader) => loader({ params })),
      },
      { path: Paths.Characters.to, element: <CharactersPage />, loader: () => charactersLoader() },
      {
        path: Paths.Character.to(":characterId"),
        element: <CharacterPage />,
        loader: ({ params }) => characterLoader().then((loader) => loader({ params })),
      },
      {
        path: Paths.ElementalReaction.to(":elementalReactionId"),
        element: <ElementalReactionPage />,
        loader: ({ params }) => elementalReactionLoader().then((loader) => loader({ params })),
      },
      { path: Paths.Resources.to, element: <ResourcesPage />, loader: () => resourcesLoader() },
      {
        path: Paths.Resource.to(":resourceId"),
        element: <ResourcePage />,
        loader: ({ params }) => resourceLoader().then((loader) => loader({ params })),
      },
      { path: Paths.Weapons.to, element: <WeaponsPage />, loader: () => weaponsLoader() },
      {
        path: Paths.Weapon.to(":weaponId"),
        element: <WeaponPage />,
        loader: ({ params }) => weaponLoader().then((loader) => loader({ params })),
      },
      { path: Paths.WeaponsTierList.to, element: <WeaponsTierListPage />, loader: () => weaponsTierListLoader() },
    ],
  },
]);
