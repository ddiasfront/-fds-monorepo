import { resolve, dirname } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const __dirname = dirname("./");

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "fds",
      fileName: "fds",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
});
