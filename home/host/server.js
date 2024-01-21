const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Parse JSON and URL-encoded data
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/StaySeek", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const formSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  dob: String,
  phno: String,
  mail: String,
  sname: String,
  ppr: Number,
  atw: String,
  stayType: String,
  amount: String,
  water: String,
  landmark: String,
  lati: String,
  longi: String,
  city: String,
  pincode: String,
});

const formData = mongoose.model("Hostel_regForm", formSchema);

app.post("/hostelRegister", (req, res) => {
  console.log("/hostelRegister working");
  console.log(req.body);
  const {
    fname,
    lname,
    dob,
    phno,
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
    pincode,
  } = req.body;

  formData
    .create(req.body)
    .then((Hostel_regForm) => res.json(Hostel_regForm))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.post("/findStay", async (req, res) => {
  const city = req.body.city;
  console.log(city);

  try {
    // Query MongoDB for data with the provided city
    const data = await formData.find({ city: city });

    // Send the data back to the client as JSON
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3001, () => {
  console.log("Server listening on http://127.0.0.1:3001");
});
