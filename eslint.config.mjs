import pluginJs from '@eslint/js'
import pluginNext from 'eslint-plugin-next'
import pluginReact from 'eslint-plugin-react'
import pluginReactHook from 'eslint-plugin-react-hooks/recommended'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactHook,
  pluginNext,
]
