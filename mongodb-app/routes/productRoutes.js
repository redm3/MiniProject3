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

router.put('/:id', (req, res) => {
    Controllers.productController.updateProduct(req, res)
})
router.delete('/:id', (req, res) => {
    Controllers.productController.deleteProduct(req, res)
})
  
  module.exports = router;

//getProduct, getProducts, createProduct, updateProduct, deleteProduct
// http://127.0.0.1:8000/api/product  retrive all
// http://127.0.0.1:8000/api/product/1 retrive 1 product id
