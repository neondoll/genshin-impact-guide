import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isAnalyze = mode === "analyze";
  const isProduction = mode === "production";

  return {
    base: "/genshin-impact-guide/",
    build: {
      emptyOutDir: true,
      manifest: true,
      minify: isProduction ? "terser" : false,
      rollupOptions: {
        output: {
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          manualChunks: {
            "vendor-react": ["react", "react-dom"],
            "vendor-state": ["@reduxjs/toolkit", "react-redux"],
            "vendor-radix": [
              "@radix-ui/react-accordion",
              "@radix-ui/react-collapsible",
              "@radix-ui/react-dialog",
              "@radix-ui/react-dropdown-menu",
              "@radix-ui/react-separator",
              "@radix-ui/react-slot",
              "@radix-ui/react-tabs",
              "@radix-ui/react-tooltip",
            ],
          },
        },
      },
      sourcemap: isAnalyze,
      target: "es2022",
      terserOptions: isProduction ? { compress: { drop_console: true, drop_debugger: true } } : undefined,
    },
    plugins: [
      react(),
      tailwindcss(),
      isAnalyze && visualizer({ filename: "dist/bundle-analysis.html", open: true }),
    ].filter(Boolean),
    resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  };
});
