import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "off", // Change to "off" if not needed
      "prefer-const": "off", // Optional: Change to "off" if you don't want this rule
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
