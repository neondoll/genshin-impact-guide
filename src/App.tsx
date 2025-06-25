import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Character, { loader as characterLoader } from "@/routes/character";
import ErrorPage from "./error-page";
import Home, { loader as homeLoader } from "@/routes/home";
import Paths from "./paths";
import Root from "./routes/root";
import { ThemeProvider } from "./components/theme-provider";
import "./App.css";

const router = createBrowserRouter([
  {
    path: Paths.Root,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      { path: Paths.Character(":characterUid"), element: <Character />, loader: characterLoader },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
