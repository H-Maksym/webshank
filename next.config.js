/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  //INFO for static pages
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    EMAIL_ADMIN: process.env.EMAIL_ADMIN,
    CLIENT_REQUEST_MAIL: process.env.CLIENT_REQUEST_MAIL,
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    // API_URL:
    //   process.env.NODE_ENV === 'production'
    //     ? 'https://api.example.com'
    //     : 'https://localhost:3000',
    // Add other production-specific configuration values here
  },
  //INFO export to static html file with unoptimized image's
  // env: {
  //   images: {
  //     unoptimized: process.env.NODE_ENV === 'production' ? false : true,
  //   },
  // },
  //INFO export to static html file
  // output: process.env.NODE_ENV === 'production' ? 'standalone' : 'export',
  //INFO for root url site
  // assetPrefix: 'http://localhost:3000/',
  // output: "export",
  //INFO config for image from remote server
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        port: "",
        // pathname: "/a/**",
      },
    ],
  },

  webpack(config, { dev, isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
};

module.exports = nextConfig;
