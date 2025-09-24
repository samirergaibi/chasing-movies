import { defineConfig, globalIgnores } from 'eslint/config'
import { tanstackConfig } from '@tanstack/eslint-config'

export default defineConfig([
  ...tanstackConfig,
  globalIgnores(['src/routeTree.gen.ts']),
])
