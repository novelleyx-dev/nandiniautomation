/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    '/api/export-source': [
      'src/**/*',
      'package.json',
      'tsconfig.json',
      'next.config.mjs',
      'postcss.config.mjs',
      'eslint.config.mjs'
    ],
  },
};

export default nextConfig;
