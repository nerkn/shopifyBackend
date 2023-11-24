type ProductsArgs = {
  skip?: number;
  take?: number;
};
type Context = {
  db: any;
  defaultTake: number;
};

const resolvers = {
  Query: {
    Product: async (parent, args, context, info) => {
      const { db } = context;
      const { id } = args;
      let q = db.query("SELECT * FROM products WHERE id = ?", id);
      const product = await q.get();
      return product;
    },
    Products: async (parent, args: ProductsArgs, context, info) => {
      const { db, defaultTake } = context;
      const { skip, take } = args;
      let q = db.query("SELECT * FROM products LIMIT ?, ?");
      const products = await q.all(skip ?? 0, take ?? defaultTake);
      return products;
    },
    Order: async (parent, args, context, info) => {
      const { db } = context;
      const { id } = args;
      const order = await db.get("SELECT * FROM orders WHERE id = ?", id);
      return order;
    },
    Orders: async (parent, args, context, info) => {
      const { db } = context;
      const orders = await db.all("SELECT * FROM orders");
      return orders;
    },
    Customer: async (parent, args, context, info) => {
      const { db } = context;
      const { id } = args;
      const customer = await db.get("SELECT * FROM customers WHERE id = ?", id);
      return customer;
    },
    Customers: async (parent, args, context, info) => {
      const { db } = context;
      const customers = await db.all("SELECT * FROM customers");
      return customers;
    },
    Shop: async (parent, args, context, info) => {
      const { db } = context;
      const { id } = args;
      const shop = await db.get("SELECT * FROM shop WHERE id = ?", id);
      return shop;
    },
  },
};
export { ProductsArgs, Context, resolvers };
