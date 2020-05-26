import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";

import models from "./models";
import sequelize from "./utils/database";

import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";
import roomRoutes from "./routes/room";
import messageRoutes from "./routes/message";

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, autorization"
  );
  next();
});

app.get("/", (req, res, next) =>
  res.json({ info: "Node.js, Express, and Postgres API" })
);

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/room", roomRoutes);
app.use("/message", messageRoutes);

Object.values(models).forEach(model => {
  model.init(sequelize);
  model.initRelationsAndHooks();
});

sequelize
  .sync()
  .then(result => {
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });
