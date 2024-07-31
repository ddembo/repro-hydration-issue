// @ts-check
// ignore unused exports default

import { existsSync } from "node:fs";
import { join, parse, resolve } from "node:path";

/** @type {import("next").NextConfig} */
export default {
  eslint: {
    // Disable ESLint checking during builds to improve build speed. ESLint is
    // already checked via editor extensions, the package script `eslint`, and
    // GitHub Actions CI.
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  typescript: {
    // TODO: Investigate why TypeScript via Next.js builds has ESM/CJS default
    // import interop errors when vanilla TypeScript via VS Code and the package
    // script `type-check` is ok.
    ignoreBuildErrors: true,
  },
  webpack: (webpackConfig, { webpack }) => {
    // TODO: Remove this config once this Next.js issue that `.tsx` files can’t
    // be imported using the `.js` file extension is fixed:
    // https://github.com/vercel/next.js/issues/41961
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    webpackConfig.plugins.push(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      new webpack.NormalModuleReplacementPlugin(/\.js$/, function (
        /** @type {{ context: string, request: string }} */
        resource
      ) {
        // Skip a non relative import (e.g. a bare import specifier).
        if (resource.request.startsWith(".")) {
          const path = resolve(resource.context, resource.request);

          if (
            // Skip the relative import if it reaches into `node_modules`.
            !path.includes("node_modules") &&
            !existsSync(path)
          ) {
            const { dir, name } = parse(path);
            const extensionlessPath = join(dir, name);

            for (const fallbackExtension of [".tsx", ".ts", ".js"]) {
              if (existsSync(extensionlessPath + fallbackExtension)) {
                resource.request = resource.request.replace(
                  /\.js$/,
                  fallbackExtension
                );
                break;
              }
            }
          }
        }
      })
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return webpackConfig;
  },
};
