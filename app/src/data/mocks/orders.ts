import { Ulid } from "id128";

export const orders = [
  {
    id: Ulid.generate().toCanonical(),
    customer: "1001",
    total: 9.99,
    products: undefined,
  },
  {
    id: "100",
    customer: "Jane Smith",
    total: 8.99,
    products: undefined,
  },
  {
    id: "100",
    customer: "Bob Johnson",
    total: 7.99,
    products: undefined,
  },
  {
    id: "100",
    customer: "Sally Sue",
    total: 26.99,
    products: undefined,
  },
];
