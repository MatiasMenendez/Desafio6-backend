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
  const data = await fs.promises.readFile(this.path, "utf-8");
  const products = JSON.parse(data);
  const foundProduct = products.find(item => item.idProduct === id);
      if(foundProduct === true){
    return foundProduct;
   } else {
    console.log(foundProduct)
}}
 catch(err){
  console.log(err)
 }
}



//getProductById (id) {
  //const data = fs.readFileSync('Products.JSON');
  //this.products = JSON.parse(data);
  //const foundProduct = this.products.find(item => item.idProduct === id)
   //if(foundProduct){
    //console.log(foundProduct)
   //} else {
    //console.log("Not found")
   //}
  //}



}


module.exports = ProductManager;