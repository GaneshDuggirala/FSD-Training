var express = require('express');
var router = express.Router();

var product = require('../models/product')
router.get('/product',(req,res)=>{
  product.find()
  .then((data)=>res.send(data))
  .catch((e)=>console.log(e))
})

router.post('/add',(req,res)=>{
  var newproduct = new product(req.body)
  newproduct.save()
  .then(()=>res.send("Product Added!!!"))
  .catch((e)=>console.log(e))
})

module.exports = router;
