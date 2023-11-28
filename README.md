# Shopify Backend

GraphQL-based e-commerce backend server compatible with Shopify . While we've successfully created numerous e-commerce apps, we recognize the need for greater compatibility. To achieve this, we've dig into the architecture of major players like Amazon, eBay, Trendyol, WooCommerce, and, notably, Shopify. Our analysis indicates that Shopify's system offers a strategic edge, providing a level of consistency that sets it apart from other industry giants.

Our goals are

- to provide merchants a safe place to translate their infrascructure
- to be used as proxy between shopify and mobile/web sites
- standalone server for mobile/web sites
- accelerate graphql responses
- unlimited/unrated graphql queries
- run Liquid templates

## Getting Started

Repo is underdevelopment, it is **not ready**.

If you are not developer you should wait for release.

1.  Install `bun.js` from [https://bun.sh/](https://bun.sh/)

2.  Clone the repository

         git clone git@github.com:nerkn/shopifyBackend.git


3.  and run

    ```bash
    bun
    ```

4.  Open `http://localhost:3000/graphql` with your browser to see panel to test your queries.

At first install comes with prefilled data, so everything works out of box.

## Connecting to different database

Currrently shopifyBackend runs on sqlite on local file, connectors can be implemented to use mysql/mariadb/postgresql etc.

## Shopify GraphQl compability

| Table       | Completed |     |
| ----------- | --------- | --- |
| Products    | 53%       |     |
| Shop        | 54%       |     |
| Collections | 54%       |     |
| Orders      | 25%       |     |
| Upload      | 0%        |     |
| Admin panel | 11%       |     |
