import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/genshin-impact-guide/",
  build: { target: "esnext" },
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
