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
        // React is the only vendor code left and it changes far less often
        // than the app, so it gets its own long-lived cache entry.
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
  },
});
