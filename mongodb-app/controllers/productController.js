const axios = require('axios');
let Models = require("../models"); //matches index.js

const getProducts = (res) => {
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
            // save the retrieved Product data to your database
            Models.Product.insertMany(response.data)
                .then(() => {
                    // retrieve the saved Product data from your database
                    Models.Product.find({})
                        .then(data => res.send({ result: 200, data: data }))
                        .catch(err => {
                            console.log(err);
                            res.send({ result: 500, error: err.message })
                        });
                })
                .catch(err => {
                    console.log(err);
                    res.send({ result: 500, error: err.message })
                });
        })
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        });
};

const getProduct = (req, res) => {
    /* axios.get('https://fakestoreapi.com/products/' + req.params.id) */
    Models.User.findOne({ id: req.params.id })
    .then(function (response) {
        res.send({ result: 200, data: response.data })
    }).catch(err => {
        res.send({ result: 500, data: err.message })
    })
}


const createProduct = (data, res) => {
    //creates a new Product using JSON data POSTed in request body
    console.log(data)
    new Models.Product(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const updateProduct = (req, res) => {
    //updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    /* Models.User.findOne({ id: req.params.id }) */
    Models.User.findOneAndUpdate({ id: req.params.id }, req.body )
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
const deleteProduct = (req, res) => {
    //deletes the Product matching the ID from the param
    Models.Product.findByIdAndRemove(req.params.id, req.body, {
        useFindAndModify: false
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    getProduct, getProducts, createProduct, updateProduct, deleteProduct
}