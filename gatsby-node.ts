import { GatsbyNode } from "gatsby";
import { resolve } from "path";

type Product = {
    department: string;
    description: string;
    id: string;
    image: string;
    name: string;
    price: string;
};

type ProductsResponse = {
    allProductsJson: { nodes: Product[] };
};

export const createPages: GatsbyNode["createPages"] = async ({
    actions,
    graphql
}) => {
    const { createPage } = actions;
    const productTemplate = resolve("src/templates/product.tsx");
    const queryResults = await graphql<ProductsResponse>(`
        query ProductsPagesQuery {
            allProductsJson {
                nodes {
                    department
                    description
                    id
                    image
                    name
                    price
                }
            }
        }
    `);

    queryResults.data?.allProductsJson.nodes.forEach((node) => {
        createPage({
            component: productTemplate,
            context: {
                product: node
            },
            defer: true,
            path: `/products/${node.id}`
        });
    });
};
