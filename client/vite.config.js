import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    "/bms/v1": {
      target: "http://localhost:8000",
      changeOrgin: true,
      secure: false,
    },
  },
});
