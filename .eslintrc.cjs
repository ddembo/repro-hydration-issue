// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  env: {
    es2022: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    project: "tsconfig.json",
  },
  plugins: ["@typescript-eslint", "simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-restricted-syntax": [
      "error",
      {
        selector: "ExportNamedDeclaration",
        message:
          "Only use a default export for optimal module design: https://jaydenseric.com/blog/optimal-javascript-module-design",
      },
    ],
  },
  overrides: [
    {
      // ESM TypeScript and JavaScript modules.
      files: [
        "*.mts",
        "*.mjs",

        // Normally these file extensions are for CJS, but the `package.json`
        // has a field `type` set to `"module"`.
        "*.ts",
        "*.tsx",
        ".js",
      ],
      globals: {
        // Undo the CJS globals populated via the ESLint config `env.node`.
        __dirname: "off",
        __filename: "off",
        exports: "off",
        module: "off",
        require: "off",
      },
    },
    {
      // ESM TypeScript modules.
      files: [
        "*.mts",

        // Normally these file extensions are for CJS, but the `package.json`
        // has a field `type` set to `"module"`.
        "*.ts",
        "*.tsx",
      ],
      rules: {
        // The `@typescript-eslint` plugin disables the `no-undef` rule in TS
        // modules, because TS is supposed to enforce what globals are defined.
        // In Node.js, ESM and CJS modules have different globals. The
        // `@types/node` package incorrectly defines all the CJS globals such as
        // `__dirname` in ESM modules, so TypeScript isn’t reliable. See:
        // https://github.com/microsoft/TypeScript/issues/36764
        "no-undef": "error",
      },
    },
    {
      // CJS JavaScript modules.
      files: ["*.cjs"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "no-restricted-syntax": [
          "error",
          {
            selector: "ImportDeclaration",
            message:
              "An import declaration can’t be used in a CJS module; use a `require` call.",
          },
          {
            selector: "ExportDefaultDeclaration",
            message:
              "An export declaration can’t be used in a CJS module; use `module.exports`.",
          },
          {
            selector: "ExportNamedDeclaration",
            message:
              "An export declaration can’t be used in a CJS module; use `module.exports`.",
          },
        ],
      },
    },
  ],
};
