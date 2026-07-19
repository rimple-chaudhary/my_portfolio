import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split heavy, independently-cacheable vendors into their own chunks
        // so a change in app code doesn't bust the whole bundle.
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          prism: ["prismjs"],
          "icon-cloud": ["react-icon-cloud"],
        },
      },
    },
  },
});
