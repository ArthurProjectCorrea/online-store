import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite"; 
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ["src/components"], 
      extensions: ["vue"], 
      deep: true, 
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: process.env.NODE_ENV === "production" ? "/nome-do-repositorio/" : "/",
});
