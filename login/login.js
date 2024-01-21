import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.5/+esm";

console.log("login js working");

document
  .getElementById("LoginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("login function called");

    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    console.log(email);
    console.log(pass);

    axios
      .post("http://localhost:3001/login", {
        email,
        pass,
      })
      .then((result) => {
        console.log(result.data);
        if (result.data === "Success") {
          alert("Login successfull");
          window.location.href = "../home/home.html";
        } else if (result.data === "Wrong password") {
          alert("Please check password!");
        } else {
          alert("No traces of registration found!");
          window.location.href = "../register/register.html";
        }
      });
  });
