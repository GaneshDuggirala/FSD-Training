var http = require("http");
var laptops = [
  // 🎓 Student Laptops
  { id: 1, name: "Lenovo IdeaPad Slim 3", price: 42000, category: "Student" },
  { id: 2, name: "HP 15s Ryzen 5", price: 48000, category: "Student" },
  { id: 3, name: "Dell Inspiron 14", price: 46000, category: "Student" },

  // 🕹️ Gaming Laptops
  { id: 4, name: "ASUS TUF Gaming F15", price: 78000, category: "Gaming" },
  { id: 5, name: "HP Pavilion Gaming", price: 75000, category: "Gaming" },
  { id: 6, name: "Acer Nitro 5", price: 82000, category: "Gaming" },
  { id: 7, name: "ASUS ROG Strix G16", price: 125000, category: "Gaming" },
];

const server = http.createServer((req, res) => {
  if (req.method == "GET" && req.url == "/getproduct") {
    res.end(JSON.stringify(laptops));
  } else if (req.method == "POST" && req.url == "/postproduct") {
    let obj = "";
    req.on("data", (chunk) => {
      obj += chunk;
      console.log(obj);
    });
    req.on("end", () => {
      laptops.push(JSON.parse(obj));
      res.end("Product Added");
    });
  } else if (req.method == "PUT" && req.url == "/updateproduct") {
    let obj = "";
    req.on("data", (chunk) => {
      obj += chunk;
    });

    req.on("end", () => {
      obj = JSON.parse(obj);
      let ind = laptops.findIndex((i) => i.id == obj.id);
      laptops.splice(ind, 1, obj);
      res.end("Updated Successfully!");
    });
  } else if (req.method == "DELETE" && req.url.startsWith("/deleteproduct/")) {
    let url = req.url.split("/")[2];
    let ind = laptops.findIndex((i) => i.id == url);
    laptops.splice(ind, 1);
    res.end("Product Deleted");
  } else if (req.method == "GET" && req.url.startsWith("/greaterproduct/")) {
    let amount = req.url.split("/")[2];
    let dummy = laptops.filter((i)=> i.price > amount)
    if(samcat.length>0){
      res.end(JSON.stringify(samcat));
    }
    else{
      res.end('Products Not Found')
    }
  }
  else if (req.method == "GET" && req.url.startsWith("/productcategory/")) {
    let category = req.url.split("/")[2];
    console.log(category)
    let samcat = laptops.filter((i)=> i.category == category)
    if(samcat.length>0){
      res.end(JSON.stringify(samcat));
    }
    else{
      res.end('Category Not Found')
    }
  }
});

var port = 4300;

server.listen(port, () => {
  console.log(`Server Running Successfully at : http://localhost:${port}`);
});
