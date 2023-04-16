const fs = require ('fs');

class ProductManager {
  static id = 0;
    constructor() {
        this.products = [];
        this.path = "Products.JSON"
    }



async getAll(){
  try{
      const data = await fs.promises.readFile(this.path, "utf-8")
      const products = JSON.parse(data);
      return products;
  } 
  catch(err) {
      console.log(err)
  }
}


async getProductById(id) {
  try{
  let products = await this.getAll()
  products = products.filter(item => item.idProduct == id)
  if (products.length) {
      return products[0]
  } else { 
      console.log("product not founded")
  }
}
catch (err) {
  console.log (err)
}}
}

module.exports = ProductManager;