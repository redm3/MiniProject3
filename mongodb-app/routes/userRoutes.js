let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
})

router.get('/:id', (req, res) => {
    Controllers.userController.getUserById(req, res)
})

router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res)
})
router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res)
})
  
  module.exports = router;


// http://127.0.0.1:8000/api/users/create
/*   {
    "id":"1",
    "email":"mwz@gmail.com",
    "username":"macmwz",
    "password":"1234",
    "name":{
        "firstname":"Marco",
        "lastname":"Wells"
        },
    "address":{
    "city":"Auckland",
    "street":"street ave",
    "number": "123",
    "zipcode":"1234",
    "geolocation":{
        "lat":"12.23.43",
        "long":"1.2.3.4"
        }
    },
    "phone":"09 123 4567"
} */