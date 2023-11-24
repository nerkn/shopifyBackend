export const schemaDefs = /**   GraphQL */ ` 
type Query {
    Product(id: ID!): Product
    Products(skip: Int, take:  Int): [Product]!
    Order(id: ID!): Order
    Orders: [Order]!
    Customer(id: ID!): Customer
    Customers: [Customer]!
    Shop(id: ID!): Shop
}
        type Product {
            id: ID!
            title: String!
            price: Float!
            description: String!
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
     
        type Shop {
            id: ID!
            name: String!
            domain: String!
            } 
    `;
