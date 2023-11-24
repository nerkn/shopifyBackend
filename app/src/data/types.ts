// Define the Product type
type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
};
// Define the Order type
type Order = {
  id: string;
  customer: string;
  total: number;
  products: Product[];
};

// Define the Customer type
type Customer = {
  id: string;
  name: string;
  email: string;
};

// Define the Shop type
type Shop = {
  id: string;
  name: string;
  domain: string;
};

// Export the schema types
export type { Product, Order, Customer, Shop };
