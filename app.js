
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');
const axios = require('axios').default;
var nodemailer = require('nodemailer');



const cors = require ("cors")
//hidedb
require("dotenv").config();
const uri = process.env.uri;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));





const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8080;
const User = require('./models/User');
const Flight = require('./models/Flight');
const Flightcontrol = require("./controller/Flightcontroller");
const usercontrol=require("./controller/Usercontroller");
const authcontrol=require("./controller/authcontroller");

app.use("/flight",Flightcontrol);
app.use("/user",usercontrol);
app.use("/auth",authcontrol);

app.use(express.json())

//heroku deployment

const path = require("path")

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "react-app", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "react-app", "build", "index.html"));
});


// app.use(express.static(path.resolve(process.cwd(), 'react-app/build')))
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(process.cwd(), 'react-app/build/index.html'))
// })

//heroku end

  
app.listen(port, () => {
  console.log("connected",port)
});

// "start": "node ./bin/www"
