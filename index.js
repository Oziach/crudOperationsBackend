const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/studentRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

app = express();
mongoose.set("strictQuery", true);

mongoose.connect("mongodb+srv://test:Dolphin1@cluster0.fvtz0xu.mongodb.net/schooldb");
var db = mongoose.connection;
db.on("open", ()=>console.log("Connected to database"));
db.on("error", ()=>console.log("Error occured"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/studentRoute", studentRoute);

app.listen(4000, ()=>console.log("Server started at 4000"));