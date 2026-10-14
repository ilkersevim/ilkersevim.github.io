import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// GitHub Pages org site: https://ilkersevim.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/',
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}', 'tests/**/*.test.{ts,tsx}'],
    css: true,
  },
})
