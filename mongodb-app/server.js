const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
app.use(express.json());

let userRoutes = require("./routes/userRoutes")
app.use('/api/users', userRoutes)

let productRoutes = require("./routes/productRoutes")
app.use('/api/product', productRoutes)

let orderRoutes = require("./routes/orderRoutes")
app.use('/api/order', orderRoutes)



// parse requests of content-type -application/json

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});