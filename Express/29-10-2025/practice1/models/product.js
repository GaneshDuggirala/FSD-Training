var mongoose = require('mongoose')

var productSchema = mongoose.Schema({
    productName:String,
    productPrice:String,
    productDescription:String,
    productImage:String,
    productCategory:String
})


module.exports = mongoose.model("products",productSchema)