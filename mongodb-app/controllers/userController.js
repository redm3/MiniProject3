const axios = require('axios');
let Models = require("../models"); //matches index.js
const mongoose = require('mongoose')

const getUsers = (res) => {
    axios.get('https://fakestoreapi.com/users')
        .then(response => {
            // save the retrieved user data to your database
            Models.User.insertMany(response.data)
                .then(() => {
                    // retrieve the saved user data from your database
                    Models.User.find({})
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

const getUserById = (req, res) => {
    /* axios.get('https://fakestoreapi.com/users/'+req.params.id) */
    Models.User.findOne({ id: req.params.id })
        .then(data => {
            if (!data) {
                res.send({ result: 404, error: "User not found" })
            } else {
                res.send({ result: 200, data: data })
            }
        })
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        });
};

const createUser = (data, res) => {
    //creates a new user using JSON data POSTed in request body
    console.log(data)
    new Models.User(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const updateUser = (req, res) => {
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

const deleteUser = (req, res) => {
    //deletes the user matching the ID from the param
    console.log()
    Models.User.findOneAndDelete({ id: req.params.id }, req.body )
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    getUsers, getUserById, createUser, updateUser, deleteUser
}