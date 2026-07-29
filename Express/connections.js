//import express from "express";
//import cors from "cors";
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT= 3000;
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  //res.send("Welcome to Mern Stack");
  //res.json({ id:101,name:"Nithin",email:"nithinkumarbadduluri@gmail.com"})
 // console.log(req.header); 
 res.sendFile(path.join(__dirname,"public", "index.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname,"public", "Home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname,"public", "About.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname,"public", "Contact.html"));
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
