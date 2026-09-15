import { cp } from "node:fs/promises";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [
    {
      name: "copy-presentation-assets",
      async closeBundle() {
        await cp("assets", "dist/assets", { recursive: true });
      },
    },
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, "index.html"),
        compatibility: path.resolve(
          import.meta.dirname,
          "ITEM_Presentation/index.html",
        ),
      },
    },
  },
  server: { host: true, port: 3000 },
});
