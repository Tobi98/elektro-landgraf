/* eslint-disable */

/** @type {import('next').NextConfig} */
/** @type {import('next-sitemap').IConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        localeDetection: false,
        locales: ["de"],
        defaultLocale: "de",
    },
    redirects: [
        {
            source: "/global/*",
            destination: "/",
            permanent: true,
        },
    ],
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        var path = require("path");
        config.resolve.alias["@src"] = path.resolve(__dirname, "src/");

        return config;
    },
    env: {
        REACT_APP_COOKIEBOTID: process.env.REACT_APP_COOKIEBOTID,
        REACT_APP_STORYBLOK: process.env.REACT_APP_STORYBLOK,
    },
};

module.exports = nextConfig;
