import type { NextConfig } from "next";
import path from "node:path";
import os from "node:os";

/**
 * En carpetas sincronizadas (p. ej. Documentos + iCloud), `.next/dev` suele corromperse:
 * fallan renombres `.tmp`, manifiestos ENOENT y "Persisting failed: Unable to write SST file".
 * En `next dev` escribimos el artefacto fuera de esa ruta; `next build` sigue usando `.next`.
 */
const devDistDir =
  process.env.NEXT_DEV_DIST_DIR ??
  path.join(os.tmpdir(), "edificaciones-especializadas-next-dev");

const npmEvent = process.env.npm_lifecycle_event ?? "";
const isNpmDev =
  npmEvent === "dev" ||
  npmEvent === "dev:webpack" ||
  npmEvent === "dev:turbo";

const isNextDevCLI = process.argv[2] === "dev";

const useExternalDevDist =
  process.env.NEXT_DISABLE_EXTERNAL_DEV_DIST !== "1" &&
  (isNpmDev || isNextDevCLI);

const nextConfig: NextConfig = {
  ...(useExternalDevDist ? { distDir: devDistDir } : {}),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  /**
   * Webpack en dev (`npm run dev:webpack`) también sufre si el disco “virtual” de iCloud
   * retrasa o borra archivos; además de `distDir` externo, desactivamos caché persistente.
   */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
