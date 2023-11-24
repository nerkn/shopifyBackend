import { yoga } from "@elysiajs/graphql-yoga";
import { resolvers } from "./data/resolvers";
import { schemaDefs } from "./data/schema";
import { Database } from "bun:sqlite";
import { checkAndCreateDatabase } from "./data/mock";

const db = new Database("./data.db");
checkAndCreateDatabase(db);

const server = yoga({
  typeDefs: schemaDefs,
  resolvers,
  context: {
    db,
    defaultTake: 20,
  },
});
export { db, server };
