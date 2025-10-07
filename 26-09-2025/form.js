function validate() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  let newpass = firstname.slice(0, 3) + "@123";
  if (
    password == null ||
    firstname == null ||
    password == undefined ||
    firstname == undefined ||
    password == "" ||
    firstname == ""
  ) {
    Swal.fire("Enter Details Properly!");
  } else {
    if (password == newpass) {
      Swal.fire({
        title: "Good job!",
        text: "Registration Successful",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  }
}
