import express = require("express");

import mongoose = require("mongoose");
import dotenv = require("dotenv");
import { Application } from "express";

dotenv.config({ path: "./local.env" });

import app from "./app";

// const DATABASE: string = process.env.MONGODB_URI.replace(
//   "<password>",
//   process.env.MONGODB_PASSWORD,
// );

mongoose
  .connect(
    "mongodb+srv://harry4279:harry4279123@new-projects.1czyoux.mongodb.net/soundmix",
    {
      dbName: "soundmix",
    },
  )
  .then(() => console.log("Database Connection is Successful"))
  .catch((err) => console.error(err));

app.listen(process.env.PORT, () => {
  console.log("app is running on 3001");
});
