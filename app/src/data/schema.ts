export const schemaDefs = /* GraphQL */ `
  type Query {
    Product(id: ID!): Product
    Products(skip: Int, take: Int): [Product]!
    Order(id: ID!): Order
    Orders: [Order]!
    Customer(id: ID!): Customer
    Customers: [Customer]!
    Shop(id: ID!): Shop
    Collection(id: ID!): Collection
    Collections: [Collection]!
  }
  type Product {
    id: ID!
    title: String!
    handle: String!
    price: Float!
    description: String!
    descriptionHtml: String!
    availableForSale: Boolean!
    createdAt: Int!
    updatedAt: Int!
    publishedAt: Int!
    vendor: String!
    productType: String!
    featuredImage: Image!
    isGiftCard: Boolean!
    onlineStoreUrl: String!
    options: [ProductOption]!
    collections: [Collection]!
    images: [Image]!
    variants: [ProductVariant]!
    seo: Seo!
    """
    ByHandle'
    sellingPlanGroups
    compareAtPriceRange
    metafield', 'metafields'
    media
    tags: [String]!
    variantBySelectedOptions
    Recommendations

    priceRange: ProductPriceRange!
    """
    totalInventory: Int!
    requiresSellingPlan: Boolean!
  }

  type Order {
    id: ID!
    customer: String!
    total: Float!
    products: [Product]!
  }

  type Customer {
    id: ID!
    name: String!
    email: String!
  }
  type ProductOption {
    id: ID!
    name: String!
    values: [String]!
  }
  type ProductVariant {
    id: ID!
    title: String!
    barcode: String!
    price: Float!
    availableForSale: Boolean!
    currentlyNotInStock: Boolean!
    image: Image!
    product: Product!
    quantityAvailable: Int!
    requiresShipping: Boolean!
    unitPrice: [MoneyV2]!
    sku: String!
    taxable: Boolean!
    weight: Float!
    weightUnit: String!
  }
  type MoneyV2 {
    amount: Int!
    currencyCode: String!
  }
  type Shop {
    id: ID!
    name: String!
    domain: String!
  }
  type Collection {
    id: ID!
    title: String!
    description: String!
    products: [Product]!
    seo: Seo!
    image: Image!
  }
  type Seo {
    title: String!
    description: String!
  }
  type Image {
    id: ID!
    url: String!
    width: Int!
    height: Int!
    altText: String!
  }
`;
