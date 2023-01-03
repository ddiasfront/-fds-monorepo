import { resolve, dirname } from "path";
import { defineConfig } from "vite";
const __dirname = dirname("./");
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "freedom-ds-config",
      fileName: "freedom-ds-config",
    },
  },
});
