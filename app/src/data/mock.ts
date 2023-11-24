import Database from "bun:sqlite";
import { Customer, Product, Shop } from "./types";
import { Ulid } from "id128";

export const data: { customers: Customer[]; products: Product[]; shop: Shop } =
  {
    customers: [
      {
        id: Ulid.generate().toCanonical(),
        name: "John Doe",
        email: "john.doe@example.com",
      },
      {
        id: Ulid.generate().toCanonical(),
        name: "Jane Smith",
        email: "jane.smith@example.com",
      },
      {
        id: Ulid.generate().toCanonical(),
        name: "Bob Johnson",
        email: "Bob@john.com",
      },
      {
        id: Ulid.generate().toCanonical(),
        name: "Sally Sue",
        email: "sally@sue.com",
      },
    ],
    products: [
      {
        id: Ulid.generate().toCanonical(),
        title: "The Best Product",
        price: 9.99,
        description: "The best product in the world",
      },
      {
        id: Ulid.generate().toCanonical(),
        title: "Shoe",
        price: 8.99,
        description: "The shoe  product in the world",
      },
      {
        id: Ulid.generate().toCanonical(),
        title: "The Dress",
        price: 7.99,
        description: "The third dress product in the world",
      },
      {
        id: Ulid.generate().toCanonical(),
        title: "Eyeliner",
        price: 26.99,
        description: "For the best eyes in the world",
      },
    ],
    shop: {
      id: Ulid.generate().toCanonical(),
      name: "The Shoe Shop",
      domain: "theshoeshop.com",
    },
  };

const createTables = `
    CREATE TABLE IF NOT EXISTS customers (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS shop (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        domain TEXT NOT NULL
    );
    `;

function createDatabase(db: Database) {
  let tableCreation = db.query(createTables);
  tableCreation.run();
  data.customers.forEach((customer) => {
    console.log(customer.name);
    db.run(`INSERT INTO customers (id, name, email) VALUES (?, ?, ?)`, [
      customer.id,
      customer.name,
      customer.email,
    ]);
  });
  data.products.forEach((product) => {
    db.run(
      `INSERT INTO products (id, title, price, description) VALUES (?, ?, ?, ?)`,
      [product.id, product.title, product.price, product.description]
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
    let query = db.query(`SELECT * FROM customers limit 1`);
    console.log("db exists");
    console.log("example gen ulid:", Ulid.generate().toCanonical());
  } catch (e) {
    console.log(e);
    createDatabase(db);
  }
}
