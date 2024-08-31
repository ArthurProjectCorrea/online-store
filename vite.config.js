import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ["src/components"], // Pasta onde os componentes estão localizados
      extensions: ["vue"], // Extensões a serem consideradas como componentes
      deep: true, // Habilita a busca recursiva em subpastas
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: process.env.NODE_ENV === "production" ? "/nome-do-repositorio/" : "/",
});
