import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.5/+esm";

console.log("register2 working");

document.getElementById("msform").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("function called");

  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const cpass = document.getElementById("cpass").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;

  console.log(email);
  console.log(pass);
  console.log(cpass);
  console.log(fname);
  console.log(lname);
  console.log(address);
  console.log(phone);

  if (pass !== cpass) {
    alert("Passoword didn't match");
    window.location.href = "#";
  }

  axios
    .post("http://localhost:3001/register", {
      email,
      pass,
      fname,
      lname,
      address,
      phone,
    })
    .then((result) => {
      console.log(result.data);
      if (result.data == "Already registered") {
        alert("User already Registered! Please Login to Proceed.");
      } else {
        alert("Registered successfully! Please Login to proceed.");
      }
      window.location.href = "../login/login.html";
    })
    .catch((err) => console.log(err));
});
