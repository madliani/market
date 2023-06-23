import { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = function ({
    setHtmlAttributes
}) {
    setHtmlAttributes({ lang: "en" });
};
