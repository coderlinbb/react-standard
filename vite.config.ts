import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3456, //设置启动端口号
    proxy: {
      "/proxy-api": {
        target: "",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy-api/, ""),
      },
      "/mock-api": {
        target: "http://127.0.0.1:4523/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mock-api/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
    devSourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json", "css", "scss"],
  },
});
