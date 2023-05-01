import { graphql, useStaticQuery } from "gatsby";

type Query = {
    site: {
        siteMetadata: {
            description: string;
            image: string;
            siteUrl: string;
            title: string;
        };
    };
};

export const useSiteMetadata = () => {
    const data = useStaticQuery<Query>(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                }
            }
        }
    `);

    return data.site.siteMetadata;
};
