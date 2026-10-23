import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default tseslint.config(
  {
    ignores: [
      "dist",
      ".skills",
      "tasks",
      "src/convex/_generated",
      "vly-toolbar-readonly.tsx",
      "src/__tests__/**",
      "src/components/dropzone.tsx",
      "src/components/ui/video.tsx",
      "src/components/ui/carousel.tsx",
      "src/components/ui/multi-select.tsx",
      "src/components/ui/sidebar.tsx",
      "src/contexts/AuthContext.tsx",
      "src/hooks/use-mobile.ts",
      "src/hooks/use-mobile.tsx",
      "src/hooks/use-supabase-upload.ts",
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
