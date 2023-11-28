import Database from "bun:sqlite";
import { Customer, Order, Product, ProductVariant, Shop } from "./types";
import { Ulid } from "id128";
/** product ids 10010 - 10013 */
import { products } from "./mocks/products";
/** productVariant ids  1 - 3 */
import { productVariants } from "./mocks/productVariants";
import { createTables } from "./mocks/createTables";
import { customers } from "./mocks/customers";
import { orders } from "./mocks/orders";

export const data: {
  customers: Customer[];
  products: Product[];
  shop: Shop;
  orders: Order[];
  productVariants: ProductVariant[];
} = {
  products: products,
  productVariants: productVariants,
  customers: customers,
  shop: {
    id: "101",
    name: "The Shoe Shop",
    domain: "theshoeshop.com",
  },
  orders: orders,
};

function createDatabase(db: Database) {
  createTables.split(";").forEach((query) => {
    console.log("creating");
    console.log("creating", query.trim());
    if (query.trim()) db.run(query);
  });

  data.customers.forEach((customer) => {
    console.log("inserting customer", customer);
    db.run(`INSERT INTO customers (id, name, email) VALUES (?, ?, ?)`, [
      customer.id,
      customer.name,
      customer.email,
    ]);
  });
  data.products.forEach((product) => {
    try {
      console.log("inserting product", product);
      db.run(
        `INSERT INTO products (id, title, handle, price, description, descriptionHtml, availableForSale, createdAt, updatedAt, publishedAt, vendor, productType, featuredImage, isGiftCard, onlineStoreUrl, totalInventory, requiresSellingPlan
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          product.id,
          product.title,
          product.handle,
          product.price,
          product.description,
          product.descriptionHtml,
          product.availableForSale,
          product.createdAt,
          product.updatedAt,
          product.publishedAt,
          product.vendor,
          product.productType,
          product.featuredImage,
          product.isGiftCard,
          product.onlineStoreUrl,
          product.totalInventory,
          product.requiresSellingPlan,
        ]
      );
    } catch (e) {
      console.log("error", e);
    }
  });
  data.productVariants.forEach((productVariant) => {
    db.run(
      `INSERT INTO productVariants (id, title, price, product,barcode,
        sku, availableForSale, requiresShipping, taxable, weight, weightUnit, image, inventoryQuantity, inventoryManagement, inventoryPolicy, compareAtPrice, position, fulfillmentService, createdAt, updatedAt, presentmentPrices, sellingPlanAllocations
         ) VALUES (?, ?, ?, ?, ?, ?,  ?, ?  , ?, ?,  ?, ?,  ?, ?,  ?, ?,  ?, ?,  ?, ?,  ?, ?)`,
      [
        productVariant.id,
        productVariant.title,
        productVariant.price,
        productVariant.product,
        productVariant.barcode,
        productVariant.sku,
        productVariant.availableForSale,
        productVariant.requiresShipping,
        productVariant.taxable,
        productVariant.weight,
        productVariant.weightUnit,
        productVariant.image || "",
        productVariant.inventoryQuantity,
        productVariant.inventoryManagement,
        productVariant.inventoryPolicy,
        productVariant.compareAtPrice,
        productVariant.position,
        productVariant.fulfillmentService,
        productVariant.createdAt,
        productVariant.updatedAt,
        productVariant.presentmentPrices,
        productVariant.sellingPlanAllocations,
      ]
    );
  });
  db.run(`INSERT INTO shop (id, name, domain) VALUES (?, ?, ?)`, [
    data.shop.id,
    data.shop.name,
    data.shop.domain,
  ]);
}
export function checkAndCreateDatabase(db: Database) {
  try {
    let query = db.query(`SELECT * FROM Image limit 1`);
    console.log("db exists");
    console.log("example gen ulid:", "100");
  } catch (e) {
    console.log("populating db");
    createDatabase(db);
  }
}
