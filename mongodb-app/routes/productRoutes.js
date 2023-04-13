let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    Controllers.productController.getProducts(res);
})

router.get('/:id', (req, res) => {
    Controllers.productController.getProduct(req, res);
})


router.post('/create', (req, res) => {
    Controllers.productController.createProduct(req.body, res)
})

router.put('/update/:id', (req, res) => {
    Controllers.productController.updateProduct(req, res);
})
router.delete('/:id', (req, res) => {
    Controllers.productController.deleteProduct(req, res)
})
  
  module.exports = router;

//TEST
//GET

// http://127.0.0.1:8000/api/product  retrive all
// http://127.0.0.1:8000/api/product/1 retrive 1 product id

//post

// http://127.0.0.1:8000/api/product/create
/* 
{
    "id": 100,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your...",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "category": "men's clothing",
    "__v": 0
}
 */