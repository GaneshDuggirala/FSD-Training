function getCards() {
  var str;
  fetch("https://fakestoreapi.com/products/")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      str = "<div class='row gy-4'>";
      for (let k of data) {
        str += "<div class='col-md-3 col-sm-12'>";
        str += `<div class='card h-100'>`;
        str += `<div class='card-header'><img src='${k.image}' height='330px' class="card-img-top"/></div>`;
        str += `<div class='card-body'><p><b>Product Name : </b>${k.title}</p><p><b>Price : </b>₹${k.price} /-</p><p><b>Description : </b>${k.description}</p></div>`;
        str += `<div class="card-footer d-flex justify-content-between"><button class='btn btn-danger'><b>Add to Cart</b></button><button class='btn btn-dark'><b>Buy Now</b></button></div>`;
        str += "</div></div>";
      }
      //   str+='</div>'
      document.getElementById("mycards").innerHTML = str;
    });
}

getCards();
