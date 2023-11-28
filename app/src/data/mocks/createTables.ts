export const createTables = /**  sql **/ `
    CREATE TABLE IF NOT EXISTS customers (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        handle TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT NOT NULL,
        descriptionHtml TEXT NOT NULL,
        availableForSale BOOLEAN NOT NULL,
        createdAt Integer NOT NULL,
        updatedAt Integer NOT NULL,
        publishedAt Integer NOT NULL,
        vendor TEXT NOT NULL,
        productType TEXT NOT NULL,
        featuredImage TEXT NOT NULL,
        isGiftCard BOOLEAN NOT NULL,
        onlineStoreUrl TEXT NOT NULL,
        totalInventory INTEGER NOT NULL,
        requiresSellingPlan BOOLEAN NOT NULL
    );
    create table if not exists productVariants (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        barcode TEXT NOT NULL,
        price REAL NOT NULL,
        sku TEXT NOT NULL,
        availableForSale BOOLEAN NOT NULL,
        requiresShipping BOOLEAN NOT NULL,
        taxable BOOLEAN NOT NULL,
        weight REAL NOT NULL,
        weightUnit TEXT NOT NULL,
        image TEXT NOT NULL,
        inventoryQuantity INTEGER NOT NULL,
        inventoryManagement TEXT NOT NULL,
        inventoryPolicy TEXT NOT NULL,
        compareAtPrice REAL NOT NULL,
        product TEXT NOT NULL,
        position INTEGER NOT NULL,
        fulfillmentService TEXT NOT NULL,
        createdAt INTEGER NOT NULL,
        updatedAt INTEGER NOT NULL,
        presentmentPrices TEXT NOT NULL,
        sellingPlanAllocations TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS shop (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        domain TEXT NOT NULL
    );
    Create Table if not exists orders (
        id TEXT PRIMARY KEY,
        customer TEXT NOT NULL,
        total REAL NOT NULL,
        products TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS collection (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          description TEXT NOT NULL
      );
      Create Table if not exists XCross (
          id TEXT PRIMARY KEY,
          app TEXT NOT NULL,
          bin Text NOT NULL,
          t1 TEXT NOT NULL,
          t2 TEXT NOT NULL
      );
      Create Table if not exists Seo (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          description TEXT NOT NULL
      );
      Create Table if not exists Image (
          id TEXT PRIMARY KEY,
          url TEXT NOT NULL,
          width TEXT NOT NULL,
          height TEXT NOT NULL,
          altText TEXT NOT NULL
      )
      
    `;
