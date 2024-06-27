const express = require("express")
const app = express()
const db= require('./db')
app.use(express.text())
app.use(express.json())
//Creando la ruta
app.get("/", (req, res)=>{
    res.send('Esta andando?')
})
app.get("/animales",(req, res)=>{
    res.json(db)
})
app.get("/animales/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    const getanimal = db.find((nombre)=>nombre.id === id)
    res.json(getanimal)
})
app.listen(3000,()=>console.log('El servidor está corriendo en el server 3000') )

