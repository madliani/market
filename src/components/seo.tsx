import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

type Properties = {
    children?: React.ReactNode;
    description?: string;
    pathname?: string;
    title?: string;
};

export const SEO: React.FC<Properties> = ({
    children,
    description,
    pathname,
    title
}) => {
    const {
        description: defaultDescription,
        image,
        siteUrl,
        title: defaultTitle
    } = useSiteMetadata();

    const seo = {
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        title: title || defaultTitle,
        url: `${siteUrl}${pathname || ""}`
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta content="summary_large_image" name="twitter:card" />
            <meta content={seo.description} name="description" />
            <meta content={seo.description} name="og:description" />
            <meta content={seo.description} name="twitter:description" />
            <meta content={seo.image} name="image" />
            <meta content={seo.image} name="og:image" />
            <meta content={seo.image} name="twitter:image" />
            <meta content={seo.title} name="og:title" />
            <meta content={seo.title} name="twitter:title" />
            <meta content={seo.url} name="og:site_name" />
            <meta content={seo.url} name="twitter:url" />
            {children}
        </>
    );
};
