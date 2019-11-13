const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();

mongoose.connect('mongodb+srv://hugo:8pEMNNTVZ7QPOG2t@cluster0-amkrt.mongodb.net/node-angular').then(() => {
  console.log('Connect to database!');
}).catch(() => {
  console.log('connection failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Any request targeting /images will be allowed to access it
app.use('/images', express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
