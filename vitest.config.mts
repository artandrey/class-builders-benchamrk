import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    testTimeout: 15000,
    hookTimeout: 25000,

    benchmark: {
      include: ['src/tests/**/*.bench.ts'],
    },
  },

  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        useDefineForClassFields: true,
      },
    },
  },
});
