import type { NextConfig } from "next";

/**
 * haij.dk is a static site: every page is rendered at build time and served
 * as plain files by nginx (see Dockerfile). No server, no runtime secrets,
 * nothing to keep alive. trailingSlash gives each route its own directory
 * with an index.html, which is what a plain file server expects.
 *
 * globalNotFound: the site has two root layouts (one per language), so the
 * 404 page nginx serves for unknown paths has to carry its own <html>; that
 * is what app/global-not-found.tsx is for.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  experimental: { globalNotFound: true },
};

export default nextConfig;
