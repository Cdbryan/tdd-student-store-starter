const { storage } = require("../data/storage");

class Store {
  static listProducts() {
    return storage.get("products").value();
    
  }
  static getById(id) {
    const products = Store.listProducts(); ///get products from storage and loop over
    return products.find((item) => (item.id = id));
  }
}

module.exports = Store

