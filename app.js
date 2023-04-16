const express = require ('express')

const ProductManager = require ('./ProductManager')

const app = express()

const PORT = 8080

const server = app.listen(PORT, () =>{
    console.log(`Server running at port ${PORT}`)
})

server.on('error', (error) => console.log(`Error en el servidor ${error}`))

const pm = new ProductManager("Products.JSON")

app.get('/products', async (req, res) => {
    const newProducts = pm;
    if(!req.query.limit){
    res.json( await newProducts.getAll())
   } else{
    for(let i=1; i <= req.query.limit; i++){
        res.json( await newProducts.getProductById(i))
    }
   }
})



app.get('/product/:id', async (req, res) => {
    const newProducts = pm;
    let product = await newProducts.getProductById(req.params.id)
    res.json(product)
})