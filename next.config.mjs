import { fileURLToPath } from "node:url";
import createJiti from "jiti";
import createNextIntlPlugin from "next-intl/plugin";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/env");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
};

const withI18n = createNextIntlPlugin();

export default withI18n(nextConfig);
