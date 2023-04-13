const mongoose = require('mongoose')
const schema = mongoose.Schema
const Product = require('./product')
const User = require('./user')

const orderSchema = new schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true
    },
    date:{
        type:Date,
        required:true
    },
   products:[
        {
            productId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product',
                required:true
            },
            quantity:{
                type:Number,
                required:true
            }
        }
   ]
})

module.exports = mongoose.model('Order', orderSchema)