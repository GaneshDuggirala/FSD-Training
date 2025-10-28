var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())

var list = [
     {
    id: 1,
    name: "HP Pavilion 14",
    brand: "HP",
    price: 59999,
    stock: 10,
    processor: "Intel Core i5 12th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    screen: "14 inch Full HD",
    rating: 4.3
  },
  {
    id: 2,
    name: "Dell Inspiron 15",
    brand: "Dell",
    price: 64999,
    stock: 8,
    processor: "Intel Core i5 13th Gen",
    ram: "16GB",
    storage: "1TB SSD",
    screen: "15.6 inch Full HD",
    rating: 4.4
  },
  {
    id: 3,
    name: "Lenovo IdeaPad Slim 5",
    brand: "Lenovo",
    price: 57999,
    stock: 12,
    processor: "AMD Ryzen 5 7530U",
    ram: "16GB",
    storage: "512GB SSD",
    screen: "14 inch WUXGA",
    rating: 4.5
  }
]

app.get('/product',(req,res)=>{
    res.send(list)
});

app.post('/add',(req,res)=>{
    var incp=req.body;
    list.push(incp)
    res.send("Product Added Successfully!!!")
})

app.put('/update',(req,res)=>{
    var com=req.body;
    var udt=req.body.id;
    var idx= list.findIndex((i)=> i.id == udt)
    list.splice(idx,1,com)
    res.send('Product Updated!!')
})


app.delete('/delete/:id',(req,res)=>{
    var pid=req.params.id;
    var idx= list.findIndex((i)=> i.id == pid)
    list.splice(idx,1)
    res.send('Product Deleted !!')
})

var port=4300;

app.listen(port,()=>{
    console.log(`Server is Running at http://localhost:${port}/`)
})