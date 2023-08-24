import express = require("express");
import cors from "cors";
import bodyparser = require("body-parser");
import { Application } from "express";

const app: Application = express();

app.use(cors());
app.use(bodyparser.json());

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");

app.use("./api/v1", authRouter);
app.use("./api/v1/user", userRouter);
export default app;
