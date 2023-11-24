# Shopify Backend

## Getting Started

Clone the repository and run

```bash
bun
```

Open `http://localhost:3000/graphql` with your browser to see panel to test your queries.

At first install comes with prefilled data, so everything works aout of box.

## Connecting to own database

Currrently shopifyBackend runs on sqlite on local file, connectors can be implemented to use mysql/mariadb/postgresql etc.

```bash
bun run dev
```

## Shopify compability

| Table       | Completed |     |
| ----------- | --------- | --- |
| Products    | 23%       |     |
| Shop        | 54%       |     |
| Collections | 54%       |     |
