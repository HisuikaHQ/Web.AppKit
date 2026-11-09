import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import * as path from "node:path";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    viteReact(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'UiKit',
      formats: ['es', 'umd'],
      fileName: (format) => `uikit.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled'
        }
      }
    }
  }
})