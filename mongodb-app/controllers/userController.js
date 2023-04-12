const axios = require('axios');
let Models = require("../models"); //matches index.js

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
    axios.get('https://fakestoreapi.com/users/'+req.params.id)
    .then(function (response) {
        res.send({ result: 200, data: response.data })
    }).catch(err => {
        res.send({ result: 500, data: err.message })
    })
}

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
    Models.User.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
const deleteUser = (req, res) => {
    //deletes the user matching the ID from the param
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
    getUsers, getUserById, createUser, updateUser, deleteUser
}