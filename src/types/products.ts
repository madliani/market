export type Product = {
  department: string;
  description: string;
  id: string;
  image: string;
  name: string;
  price: string;
};

export type ProductsResponse = { allProductsJson: { nodes: Product[] } };
