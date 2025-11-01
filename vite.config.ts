import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    base: "/genshin-impact-guide/",
    plugins: [
      react(),
      tailwindcss(),
      visualizer({
        filename: "dist/stats.html",
        open: mode === 'analyze',
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@store": path.resolve(__dirname, "./src/store"),
      }
    },
    build: {
      target: "esnext",
      minify: isProduction ? 'esbuild' : false,
      sourcemap: !isProduction,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('@radix-ui')) return 'radix-ui';
            if (id.includes('@reduxjs/toolkit') || id.includes('react-redux')) return 'state-management';
            if (id.includes('class-variance-authority') || id.includes('clsx') || id.includes('tailwind-merge')) return 'ui-utils';
            if (id.includes('react-router-dom')) return 'routing';
            if (id.includes('lucide-react')) return 'icons';
          },
          chunkFileNames: `js/[name]${isProduction ? '-[hash]' : ''}.js`,
          entryFileNames: `js/[name]${isProduction ? '-[hash]' : ''}.js`,
          assetFileNames: `assets/[name]${isProduction ? '-[hash]' : ''}.[ext]`
        },
      },
      chunkSizeWarningLimit: 800,
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'lucide-react',
      ],
    },
  };
});