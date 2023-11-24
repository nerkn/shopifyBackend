import { Elysia } from "elysia";
import { server } from "./setup";
const app = new Elysia();

app.use(server);
//get("/", () => "Hello Elysia").
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
