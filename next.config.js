/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@libsql', '@libsql/client/sqitelite3']
  },

  output: 'standalone',
  transpilePackages: [
    '@package/core',
  ],

  experimental: {
  },
  serverComponentsExternalPackages: [
    'libsql',
    '@drizzle-orm',
    'drizzle-orm',
    '@libsql', '@libsql/client', '@libsql/client/sqlite3'],
  webpack(config) {
    config.externals.push({
      bufferutil: 'bufferutil',
      'utf-8-validate': 'utf-8-validate',
      encoding: 'encoding',
    })
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }

    return config
  },
}

module.exports = nextConfig
