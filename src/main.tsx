import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { StrictMode, Suspense } from "react";

import { LoadingFallback } from "./components/ui/loading-fallback";
import { router } from "./configs/router.config";
import { store } from "./app/store";
import { ThemeProvider } from "./components/theme-provider";

console.log("🚀 React app starting...");

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element (#root) not found in HTML");
}

createRoot(container).render(
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
