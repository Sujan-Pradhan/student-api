const express = require("express");
require("dotenv").config();
const db = require("./database/connection");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

const app = express();

//import
const gradeRoute = require("./routes/gradeRoute");
const studentRoute = require("./routes/studentRoute");

//middleware
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/public/uploads", express.static("public/uploads"));

//routes
app.use("/api", gradeRoute);
app.use("/api", studentRoute);

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
