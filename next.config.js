/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/", // automatically handles all locales
        destination: "/lead/create_quote", // automatically passes the locale on
        permanent: true,
        basePath: false,
      },
    ];
  },
}

module.exports = nextConfig
