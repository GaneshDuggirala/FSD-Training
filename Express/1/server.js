var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())


app.post('/add',(req,res)=>{
    let num = req.query;
    res.send(parseInt(num.a)+parseInt(num.b))
})

app.post('/sub',(req,res)=>{
    let num = req.query;
    res.send(parseInt(num.a)-parseInt(num.b))
})

app.post('/multiply',(req,res)=>{
    let num = req.query;
    res.send(parseInt(num.a)*parseInt(num.b))
})

app.post('/divison',(req,res)=>{
    let num = req.query;
    res.send(parseInt(num.a)/parseInt(num.b))
})

var port=4300;

app.listen(port,()=>{
    console.log(`Server is Running at http://localhost:${port}/`)
})