import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    exclude: ['**/node_modules/**', '**/dist/**', '**/.{idea,git,cache,output,temp}/**', '**/{vite,vitest,eslint}.config.*', '**/e2e-tests/**']
  },
})