import { graphql, useStaticQuery } from "gatsby";

type QueryResponse = {
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
    const data = useStaticQuery<QueryResponse>(graphql`
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
