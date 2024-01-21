import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.5/+esm";
var date = document.getElementById("doba");
date.addEventListener("click", () => {
  date.type = "date";
});

console.log("index2.js working");

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");

  // Get form values
  const fname = document.getElementsByName("fname")[0].value;
  const dob = document.getElementsByName("dob")[0].value;
  const phno = document.getElementsByName("phno")[0].value;
  const lname = document.getElementsByName("lname")[0].value;
  const mail = document.getElementsByName("mail")[0].value;
  const sname = document.getElementsByName("sname")[0].value;
  const ppr = document.getElementsByName("ppr")[0].value;
  const atw = document.getElementById("Atw").value;
  const stayType = document.getElementById("stayType").value;
  const water = document.getElementById("water").value;
  const amount = document.getElementById("amount").value;
  const landmark = document.getElementsByName("landmark")[0].value;
  const lati = document.getElementsByName("Latitude")[0].value;
  const longi = document.getElementsByName("Longitute")[0].value;
  const city = document.getElementsByName("city")[0].value;
  const pcode = document.getElementsByName("pincode")[0].value;

  console.log(amount);

  // Validate form data if needed

  // Make API request
  axios
    .post("http://localhost:3002/hostelRegister", {
      fname,
      dob,
      phno,
      lname,
      mail,
      sname,
      ppr,
      atw,
      stayType,
      water,
      amount,
      landmark,
      lati,
      longi,
      city,
      pcode,
    })
    .then((result) => {
      console.log(result.data);
      // Handle the response as needed
    })
    .catch((err) => {
      console.error(err);
      // Handle errors
    });
});
