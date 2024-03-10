import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@safe-globalThis/safe-ethers-adapters',"@thirdweb-dev/react" , '@safe-globalThis/safe-core-sdk','@safe-globalThis/safe-ethers-lib']
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
