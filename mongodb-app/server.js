const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");

const Controllers = require("./controllers"); //index.js
app.use(express.json());

let userRoutes = require("./routes/userRoutes")
app.use('/api/users', userRoutes)

let productRoutes = require("./routes/productRoutes")
app.use('/api/products', productRoutes)

let orderRoutes = require("./routes/orderRoutes")
app.use('/api/orders', orderRoutes)

// parse requests of content-type -application/json

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
Controllers.productController.getProducts();
Controllers.userController.getUsers();
});