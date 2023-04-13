let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

// Get all orders
router.get('/', (req, res) => {
    Controllers.orderController.getAllOrders(res);
})

// Get orders by user ID
router.get('/:id', (req, res) => {
    Controllers.orderController.getOrdersByUserID(req, res);
})

// Create a new order
router.post('/create', (req, res) => {
    Controllers.orderController.createOrder(req, res)
})

router.post('/delete/:id', (req, res) => {
    Controllers.orderController.deleteOrder(req, res)
})


module.exports = router;


//http://127.0.0.1:8000/api/order/create
//https://app.diagrams.net/#G1cxeDopfEtp6SM68lZ8GBB-2jd17jDzdJ
/* 
{
  "id": 1,
  "userId": "64362039ff6373d8692cc6f7",
  "date": "2023-04-12T12:34:56.789Z",
  "products": [
    {
      "productId": "6436368c7598f7217c528255",
      "quantity": 2
    },
    {
      "productId": "6436368c7598f7217c528256",
      "quantity": 1
    }
  ]
}

 */
