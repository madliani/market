import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            options: {
                background_color: "#663399",
                display: "minimal-ui",
                icon: `${__dirname}/src/images/icon.png`,
                name: "market",
                short_name: "market",
                start_url: "/"
            },
            resolve: "gatsby-plugin-manifest"
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            options: {
                name: "images",
                path: `${__dirname}/src/images`
            },
            resolve: "gatsby-source-filesystem"
        },
        "gatsby-transformer-json",
        {
            options: {
                name: "products",
                path: `${__dirname}/src/data`
            },
            resolve: "gatsby-source-filesystem"
        }
    ],
    siteMetadata: {
        author: "@madliani",
        description: "Web market.",
        siteUrl: "https://madliani.github.io/market",
        title: "Market"
    }
};

export default config;
