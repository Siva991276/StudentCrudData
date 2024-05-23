const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const StudentRouter = require("./Router/StudentRouter");

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyparser.json());
const port = 3211;

mongoose
  .connect(
    "mongodb+srv://badasiva22:Siva991276@cluster0.iis7lrd.mongodb.net/NareshITPro?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  return res.send("Good Morning All");
});

app.use("/Student", StudentRouter);
app.listen(port, () => {
  console.log(`Server Running at port ${port}`);
});
