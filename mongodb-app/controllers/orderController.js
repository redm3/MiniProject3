const Models = require("../models");

// Get all orders
const getAllOrders = (res) => {
    Models.Order.find({})
        .populate("userId") // populate user details
        .populate("products.productId") // populate product details
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            throw err;
        });
};

// Get orders by user ID
const getOrdersByUserID = (req, res) => {
    Models.Order.find({ userId: req.params.id })
        .populate("userId", "name email") // populate user details
        .populate("products.productId", "name price") // populate product details
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            throw err;
        });
};

// Create a new order
const createOrder = (req, res) => {
    const data = req.body;
    console.log(data)
    //creates a new order using JSON data POSTed in request body
    new Models.Order(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

// Delete an order by ID
const deleteOrder = (req, res) => {
    Models.User.findByIdAndRemove(req.params.id, req.body, {
        useFindAndModify: false
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    getAllOrders,
    getOrdersByUserID,
    createOrder,
    deleteOrder
}