
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cloudflare({
      viteEnvironment: { name: "worker" },
    }),
  ],
  environments: {
    worker: {
      build: {
        sourcemap: true,
      },
    },
  },
  test: {
    environment: "jsdom",
  },
});
