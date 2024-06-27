const express = require("express")
const app = express()
const db= require('./db')
app.use(express.text())
app.use(express.json())
//Creando la ruta
app.get("/products/", (req, res)=>{
    res.send('Está andando?')
})
app.get("/products",(req, res)=>{
    res.json(db)
})
app.get("/products/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    const getproduct = db.find((nombre)=>nombre.id === id)
    res.json(getproduct)
})
app.post("/productos",(req,res)=>{
    const {nombre, quality, price}= req.body
    const crearproducto = db.push({id:Math.random,nombre:nombre,quality:quality,price:price})
    res.json({message:"se agregaron nuevos productos"})
})
app.put("/products/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const {nombre}=req.body
    const getproduct = db.find((nombre)=>nombre.id === id)
    getproduct.nombre = nombre
    getproduct.quality = quality
    getproduct.price = price
    res.send('Se cambiaron los productos')
})
app.delete("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const getproduct = db.find((products) => products.id === id);
    const productindex = db.indexOf(getproduct);
    const deleteproduct = db.splice(productindex, 1);
    res.json({ message: "Usuario eliminado", deleteproduct });
});
app.listen(3000,()=>console.log('El servidor está corriendo en el server 3000') )
