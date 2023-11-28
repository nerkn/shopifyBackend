import { ProductVariant } from "../types";

export const productVariants: ProductVariant[] = [
  {
    id: "1",
    title: "Variant 1",
    barcode: "123456789",
    price: 9.99,
    availableForSale: true,
    currentlyNotInStock: false,
    image: "https://example.com/image.jpg",
    product: "10010",
    quantityAvailable: 10,
    requiresShipping: true,
    unitPrice: { amount: 9.99, currencyCode: "USD" },
    sku: "SKU123",
    taxable: true,
    weight: 0.5,
    weightUnit: "kg",
    inventoryQuantity: 0,
    inventoryManagement: "shopify",
    inventoryPolicy: "deny",
    compareAtPrice: 0,
    position: 1,
    fulfillmentService: "shopify",
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    presentmentPrices: "",
    sellingPlanAllocations: "",

    // Add values for the remaining properties of ProductVariant here
  },
  {
    id: "2",
    title: "Variant 2",
    barcode: "123456789",
    price: 8.99,
    availableForSale: true,
    currentlyNotInStock: false,
    image: undefined,
    product: "10011",
    quantityAvailable: 10,
    requiresShipping: true,
    unitPrice: { amount: 8.99, currencyCode: "USD" },
    sku: "SKU123",
    taxable: true,
    weight: 0.5,
    weightUnit: "kg",
    inventoryQuantity: 0,
    inventoryManagement: "shopify",
    inventoryPolicy: "deny",
    compareAtPrice: 0,
    position: 2,
    fulfillmentService: "shopify",
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    presentmentPrices: "",
    sellingPlanAllocations: "",
  },
  {
    id: "3",
    title: "Variant 3",
    barcode: "123456789",
    price: 7.99,
    availableForSale: true,
    currentlyNotInStock: false,
    image: undefined,
    product: "10012",
    quantityAvailable: 10,
    requiresShipping: true,
    unitPrice: { amount: 7.99, currencyCode: "USD" },
    sku: "SKU123",
    taxable: true,
    weight: 0.5,
    weightUnit: "kg",
    inventoryQuantity: 0,
    inventoryManagement: "shopify",
    inventoryPolicy: "deny",
    compareAtPrice: 0,
    position: 3,
    fulfillmentService: "shopify",
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    presentmentPrices: "",
    sellingPlanAllocations: "",
  },

  // Add more sample product variants here
];