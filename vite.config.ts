import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import * as path from "node:path";
import pkg from "./package.json" with { type: "json" };

const externals = [
  ...Object.keys(pkg.peerDependencies ?? {}),
  ...Object.keys(pkg.dependencies ?? {}),
];

export default defineConfig({
  plugins: [
    viteReact(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, "src/index.ts"),
      name: "UiKit",
      formats: ["es", "umd"],
      fileName: (format) => `uikit.${format}.js`,
      cssFileName: "uikit",
    },
    rollupOptions: {
      external: (id) => externals.some((dep) => id === dep || id.startsWith(`${dep}/`)),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "ReactJSXRuntime",
          "styled-components": "styled",
          clsx: "clsx",
        },
      },
    },
  },
});
