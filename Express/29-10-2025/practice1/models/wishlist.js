var mongoose = require('mongoose')


var productSchema = mongoose.Schema({
    productName:String,
    productPrice:Number,
    productDescription:String,
    productImage:String,
    productCategory:String
})


module.exports = mongoose.model("wishlist",productSchema)