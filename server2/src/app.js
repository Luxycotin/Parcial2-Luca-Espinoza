const express = require("express");
const app = express();
const db = require("./db"); 

app.use(express.text());
app.use(express.json());


app.get("/products", (req, res) => {
  res.json(db);
});


app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const getproduct = db.find((producto) => producto.id === id);
  if (getproduct) {
    res.json(getproduct);
  }
});


app.post("/products", (req, res) => {
  const { nombre, quality, price } = req.body;
  const newProduct = {
    id: Math.random(),
    nombre: nombre,
    quality: quality,
    price: price
  };
  db.push(newProduct);
  res.status(201).json({ message: "Producto creado correctamente", newProduct });
});


app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, quality, price } = req.body;
  const productIndex = db.findIndex((producto) => producto.id === id);
  if (productIndex !== -1) {
    db[productIndex].nombre = nombre;
    db[productIndex].quality = quality;
    db[productIndex].price = price;
    res.json({ message: "Producto actualizado correctamente", updatedProduct: db[productIndex] });
  }
});


app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = db.findIndex((producto) => producto.id === id);
  if (productIndex !== -1) {
    const deletedProduct = db.splice(productIndex, 1);
    res.json({ message: "Producto eliminado correctamente", deletedProduct });
  }
});

app.listen(3000, () => console.log('El servidor está corriendo en el puerto 3000'));

