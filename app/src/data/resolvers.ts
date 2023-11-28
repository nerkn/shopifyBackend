import { Database } from "bun:sqlite";
import { Product, ProductVariant } from "./types";
import { GraphQLResolveInfo } from "graphql";
import {
  parseResolveInfo,
  simplifyParsedResolveInfoFragmentWithType,
} from "graphql-parse-resolve-info";
import { parse } from "url";
import { productVariants } from "./mocks/productVariants";

function preparedQueries(db: Database): Context["preparedQueries"] {
  return {
    getProductVariantByProductIds: db.query(
      "SELECT * FROM productVariants WHERE product IN (?)"
    ),
    getCustomers: db.query("SELECT * FROM customers LIMIT ?, ?"),
    getCustomer: db.query("SELECT * FROM customers WHERE id = $id "),
    getProducts: db.query("SELECT * FROM products LIMIT ?, ?"),
    getProduct: db.query("SELECT * FROM products WHERE id = ?"),
    getOrders: db.query("SELECT * FROM orders LIMIT ?, ?"),
    getOrder: db.query("SELECT * FROM orders WHERE id = ?"),
    getShop: db.query("SELECT * FROM shop WHERE id = ?"),
  };
}

type SkipTake = {
  skip?: number;
  take?: number;
};
type Context = {
  db: any;
  defaultTake: number;
  preparedQueries: {
    getCustomers: any;
    getCustomer: any;
    getProducts: any;
    getProductVariantByProductIds: any;
    getProduct: any;
    getOrders: any;
    getOrder: any;
    getShop: any;
  };
};
type ResolverArgs = {
  parent: any;
  args: { id: string } | any;
  ctx: Context;
  info: any;
};

const resolvers = {
  Query: {
    Product: async (_: any, args: { id: string }, ctx: Context) =>
      ctx.preparedQueries.getProduct.get({ id: args.id }),
    Products: async (
      parent: any,
      args: SkipTake,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => {
      let pinfo = parseResolveInfo(info);
      // console.log("parent", parent, "args", args, "pinfo", pinfo);
      let products = ctx.preparedQueries.getProducts
        .all([args.skip ?? 0, args.take ?? ctx.defaultTake])
        .map((product: Product) => {
          product.variants = [];
          product.options = [];
          return product;
        });
      let productIds: string[] = products.map((product: Product) => product.id);
      if (pinfo && pinfo.fieldsByTypeName.Product?.variants && productIds) {
        let getProductVariantByProductIds = ctx.db.query(
          "SELECT * FROM productVariants WHERE product IN (" +
            productIds.map((p) => "?") +
            ")"
        );
        let pv = getProductVariantByProductIds.all(productIds);
        console.log("pvs", pv, productIds.join(","));
        pv.forEach((productVariant: ProductVariant) => {
          console.log("productVariant", productVariant);
          let product = products.find(
            (product: Product) => product.id == productVariant.product
          );
          if (product) {
            product.variants.push(productVariant);
          }
        });
      }
      console.log("products", products);
      return products;
    },
    Order: async (_: any, args: { id: string }, ctx: Context) =>
      ctx.preparedQueries.getOrder.get({ id: args.id }),
    Orders: async (_: any, args: SkipTake, ctx: Context) =>
      ctx.preparedQueries.getOrders.all({
        skip: args.skip ?? 0,
        take: args.take ?? ctx.defaultTake,
      }),
    Customer: async (_: any, args: { id: string }, ctx: Context) => {
      console.log("customer args", args);
      let k = ctx.preparedQueries.getCustomer.get({ $id: args.id });
      console.log("customer k", k.toString());
      return k;
    },
    Customers: async (_: any, args: SkipTake, ctx: Context) =>
      ctx.preparedQueries.getCustomers.all([
        args.skip ?? 0,
        args.take ?? ctx.defaultTake,
      ]),
    Shop: async (_: any, args: { id: string }, ctx: Context) =>
      ctx.preparedQueries.getShop.get({ id: args.id }),
  },
};
export { Context, resolvers, preparedQueries };
