import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    vueJsx({
      // 启用 Composition API 语法糖
      optimize: true,
      // 启用 JSX 转换
      include: /\.[jt]sx$/,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyComponentLibrary",
      fileName: "my-component-library",
    },
    minify: true,
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
      },
    },
  },
  optimizeDeps: {
    include: ["vue"],
  },
  base: '/', // 修改这行，使用根路径
});
