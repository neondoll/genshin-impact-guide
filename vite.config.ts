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
      chunkSizeWarningLimit: 800,
      minify: isProduction ? "terser" : "esbuild",
      rollupOptions: {
        output: {
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          manualChunks: { vendor: ["react", "react-dom"], ui: ["lucide-react"] },
        },
      },
      terserOptions: isProduction ? { compress: { drop_console: true, drop_debugger: true } } : undefined,
    },
    plugins: [
      react(),
      tailwindcss(),
      isAnalyze && visualizer({ brotliSize: true, filename: "dist/bundle-analysis.html", gzipSize: true, open: true }),
    ].filter(Boolean),
    resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
    // Оптимизации для dev сервера
    server: { open: true, port: 3000 },
    preview: { port: 4173 },
  };
});