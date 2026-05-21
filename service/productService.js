const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    stock: 50,
  },
  {
    id: 2,
    name: "Phone",
    price: 599.99,
    category: "Electronics",
    stock: 100,
  },
  {
    id: 3,
    name: "Headphones",
    price: 79.99,
    category: "Electronics",
    stock: 200,
  },
];

const productService = {
  getProducts: async () => {
    try {
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  getProductById: async (id) => {
    try {
      const product = products.find(p => p.id === id);
      if (!product) {
        throw new Error(`Product with ID ${id} not found`);
      }
      return product;
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw error;
    }
  },

  queryProducts: async (query) => {
    try {
      let results = [...products];

      if (query.name) {
        results = results.filter(p =>
          p.name.toLowerCase().includes(query.name.toLowerCase())
        );
      }

      if (query.category) {
        results = results.filter(p =>
          p.category.toLowerCase() === query.category.toLowerCase()
        );
      }

      if (query.minPrice) {
        results = results.filter(p => p.price >= parseFloat(query.minPrice));
      }

      if (query.maxPrice) {
        results = results.filter(p => p.price <= parseFloat(query.maxPrice));
      }

      return results;
    } catch (error) {
      console.error('Error querying products:', error);
      throw error;
    }
  },

  createProduct: async (productData) => {
    try {
      const newProduct = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        name: productData.name,
        price: productData.price,
        category: productData.category,
        stock: productData.stock || 0,
      };
      products.push(newProduct);
      return newProduct;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  updateProduct: async (id, productData) => {
    try {
      const index = products.findIndex(p => p.id === id);
      if (index === -1) {
        throw new Error(`Product with ID ${id} not found`);
      }

      products[index] = { ...products[index], ...productData };
      return products[index];
    } catch (error) {
      console.error(`Error updating product with ID ${id}:`, error);
      throw error;
    }
  },

  deleteProduct: async (id) => {
    try {
      const index = products.findIndex(p => p.id === id);
      if (index === -1) {
        throw new Error(`Product with ID ${id} not found`);
      }

      const deletedProduct = products.splice(index, 1)[0];
      return deletedProduct;
    } catch (error) {
      console.error(`Error deleting product with ID ${id}:`, error);
      throw error;
    }
  },
};

module.exports = productService;