var express = require("express");
var router = express.Router();

var product = require("../models/product");
var wishlist = require("../models/wishlist");

router.get("/product", (req, res) => {
  product
    .find()
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
});

router.post("/add", (req, res) => {
  var newproduct = new product(req.body);
  newproduct
    .save()
    .then(() => res.send("Product Added!!!"))
    .catch((e) => console.log(e));
});

router.delete("/delete/:pid", (req, res) => {
  var pid = req.params.pid;
  product
    .deleteOne({ _id: pid })
    .then(() => res.send("Product Deleted!!!..."))
    .catch((e) => console.log(e));
});

router.put("/update/:pid", (req, res) => {
  var pid = req.params.pid;
  product
    .findOneAndReplace({ _id: pid }, req.body)
    .then(() => res.send("Product Updated!!!..."))
    .catch((e) => console.log(e));
});

router.patch("/updateone/:pid", (req, res) => {
  var pid = req.params.pid;
  product
    .findOneAndUpdate({ _id: pid }, { ...req.body })
    .then(() => res.send("Product item Updated!!!..."))
    .catch((e) => console.log(e));
});

router.post("/insertmany", (req, res) => {
  product
    .insertMany(req.body)
    .then(() => res.send("Products Added Successfully!!!..."))
    .catch((e) => console.log(e));
});

router.get("/filterless", (req, res) => {
  var price = req.query.price;
  console.log(price);
  product
    .find({ productPrice: { $lte: price } })
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
});

router.get("/filtergreat", (req, res) => {
  var price = req.query.price;
  console.log(price);
  product
    .find({ productPrice: { $gte  : price } })
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
});

router.get("/sortproducts", (req, res) => {
  var { orderby, order } = req.query;
  product
    .find()
    .sort({ [orderby]: order == "asc" ? 1 : -1 })
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
});

router.get("/paging", (req, res) => {
  var { page, limit } = req.query;
  var skipby = (page - 1) * limit;
  product
    .find()
    .skip(skipby)
    .limit(limit)
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
});

router.post("/addwishlist", (req, res) => {
  var addproduct = new wishlist(req.body);
  addproduct
    .save()
    .then(() => res.send("Product Added to Wishlist!"))
    .catch((e) => console.log(e));
});

router.get("/getwishlist", (req, res) => {
  wishlist
    .find()
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
});

router.delete("/deletewishlist/:pid", (req, res) => {
  var pid = req.params.pid;
  wishlist
    .deleteOne({_id:pid})
    .then(() => res.send("Product Removed from Wishlist!"))
    .catch((e) => console.log(e));
});


// router.put("/updatewishlist:pid", (req, res) => {
//   var pid = req.params.pid;
//   wishlist
//     .findOneAndReplace({_id:pid},req.body)
//     .then(() => res.send("Wishlist Updated"))
//     .catch((e) => console.log(e));
// });

router.get("/productdetails/:pid",(req,res)=>{
  var pid = req.params.pid;
  product.findOne({_id : pid})
  .then((data)=>res.send(data))
  .catch(()=>res.send("Item Not Found!!"))
})

module.exports = router;
