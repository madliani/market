import path from "path";

export const createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const queryResults = await graphql(`
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
    const productTemplate = path.resolve("src/templates/product.tsx");

    queryResults.data.allProductsJson.nodes.forEach((node) => {
        createPage({
            path: `/products/${node.id}`,
            component: productTemplate,
            context: {
                product: node
            }
        });
    });
};
