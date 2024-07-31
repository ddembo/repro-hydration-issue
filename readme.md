# Minimal reproduction of hydration issue

https://github.com/emotion-js/emotion/issues/3222

## Setup

1. [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). Versions must match the [`package.json`](./package.json) field `engines` requirements.
2. Duplicate [`.env.example`](./.env.example) as `.env` and configure the environment variables.
3. In the project directory, run `npm install` (see [**_Install script_**](#install-script)).

For development, in a terminal in the project directory run `npm run dev` (see [**_Dev script_**](#dev-script)).

Your editor must support:

- [EditorConfig](https://editorconfig.org)
- [Prettier](https://prettier.io) (formatting on save is highly recommended)
- [ESLint](https://eslint.org)
- [TypeScript](https://typescriptlang.org)

## Scripts

These CLI scripts are used to install, build, serve, and quality check the project.

### Install script

To install dependencies:

```sh
npm install
```

### Dev script

To build the `.next` directory and serve the app, watching source files for changes to automatically rebuild and serve:

```sh
npm run dev
```

### Build script

To build the `.next` directory:

```sh
npm run build
```

### Serve script

Beforehand, run the build script (see [**_Build script_**](#build-script)).

To serve the app:

```sh
npm run serve
```

### Check script

To run all quality checks:

```sh
npm run check
```

### Prettier script

To check formatting with [Prettier](https://prettier.io):

```sh
npm run prettier
```

### ESLint script

To lint with [ESLint](https://eslint.org):

```sh
npm run eslint
```

### Type check script

To type check with [TypeScript](https://typescriptlang.org):

```sh
npm run type-check
```

### Find unused exports script

To find unused exports with [`find-unused-exports`](https://npm.im/find-unused-exports):

```sh
npm run find-unused-exports
```
