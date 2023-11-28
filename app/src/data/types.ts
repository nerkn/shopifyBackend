import { type } from "os";

// Define the Product type
type Product = {
  id: string;
  title: string;
  handle: string;
  price: number;
  description: string;
  requiresSellingPlan: boolean;
  descriptionHtml: string;
  availableForSale: boolean;
  createdAt: number;
  updatedAt: number;
  publishedAt: number;
  vendor: string;
  productType: string;
  featuredImage: string;
  isGiftCard: boolean;
  onlineStoreUrl: string;
  totalInventory: number;
  options?: ProductOption[];
  variants: ProductVariant[];
};
type ProductVariant = {
  id: string;
  title: string;
  barcode: string;
  price: number;
  sku: string;
  availableForSale: boolean;
  requiresShipping: boolean;
  currentlyNotInStock: boolean;
  quantityAvailable: number;
  taxable: boolean;
  weight: number;
  weightUnit: string;
  image?: string;
  inventoryQuantity: number;
  inventoryManagement: string;
  inventoryPolicy: string;
  compareAtPrice: number;
  unitPrice: MoneyV2;
  product: string;
  position: number;
  fulfillmentService: string;
  createdAt: number;
  updatedAt: number;
  presentmentPrices: string;
  sellingPlanAllocations: string;
};
type ProductOption = {
  id: string;
  name: string;
  values: string[];
};
type ProductPriceRange = {
  minVariantPrice: string;
  maxVariantPrice: string;
};
type Image = {
  id: string;
  src: string;
  altText: string;
  width: number;
  height: number;
};
type Collection = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  updatedAt: string;
  image: string;
  rules: string;
};
type Seo = {
  title: string;
  description: string;
};

// Define the Order type
type Order = {
  id: string;
  customer: string;
  total: number;
  products?: Product[];
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
type MoneyV2 = {
  amount: number;
  currencyCode: string;
};

// Export the schema types
export type {
  Product,
  Order,
  Customer,
  Shop,
  ProductVariant,
  ProductOption,
  ProductPriceRange,
  Image,
  Collection,
  Seo,
};
