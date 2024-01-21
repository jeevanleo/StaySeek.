const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Parse JSON and URL-encoded data

const formSchema = new mongoose.Schema({
  email: String,
  pass: String,
  fname: String,
  lname: String,
  address: String,
  phone: String,
});

const formData = mongoose.model("SS_regForm", formSchema);

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/StaySeek");

app.post("/register", (req, res) => {
  console.log("/register working");
  console.log(req);
  const { email, pass, fname, lname, address, phone } = req.body;
  console.log(email);
  console.log(pass);
  formData.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("Already registered");
    } else {
      formData
        .create(req.body)
        .then((SS_regForm) => res.json(SS_regForm))
        .catch((err) => res.json(err));
    }
  });
});

app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  console.log(req.body);
  console.log(email);
  console.log(pass);
  formData.findOne({ email: email }).then((user) => {
    console.log(user);
    if (user) {
      if (user.pass === pass) {
        res.json("Success");
      } else {
        res.json("Wrong password");
      }
    } else {
      res.json("No records Found!");
    }
  });
});

app.listen(3001, () => {
  console.log("Server listening on http://127.0.0.1:3001");
});
