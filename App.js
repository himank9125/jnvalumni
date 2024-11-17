const express = require("express");
const mongoose = require("mongoose");
const studentRouts = require("./Routs/student");
const dotenv = require("dotenv");
const ENV = process.env.NODE_ENV || "beta";
dotenv.config({ path: `.env.${ENV}` });
const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/alumni", studentRouts.router);

app.listen(process.env.PORT, () => {
  console.log(
    `*****************Server created at ${process.env.PORT} ****************`
  );
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("<<<<<<<<<<<<<Database connected>>>>>>>>>>>>>>>>>>");
  })
  .catch((err) => {
    console.log("Issue with DB connection");
  });
