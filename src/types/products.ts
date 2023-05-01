export type Product = {
    department: string;
    description: string;
    id: string;
    image: string;
    name: string;
    price: string;
};

export type ProductsResponse<T = Product> = {
    allProductsJson: { nodes: T[] };
};
