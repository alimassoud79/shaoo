const express = require("express");

const User=  require('../models/User.js');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AuthRoutes = express.Router();
require("dotenv").config();
const cors = require('cors');

AuthRoutes.use(cors());


AuthRoutes.post("/login", async (req, res) => {  
  const { email, Password } = req.body;
  var x = true;
  try {
    // check if user with that email exist
    let user = await User.findOne({Email: email }).exec();
    // console.log("USER EXIST", user);
    if (!user){


    res.status(400).send("Email doesn't exist");
    
    }
    // compare Password
    console.log(user);
    console.log(email);
    console.log(Password);
    user.comparePassword(Password, (err, match) => {
      console.log("COMPARE PASSWORD IN LOGIN ERR", err);
      if (!match || err){

       
        return res.status(400).send("Wrong password");
      }
        // GENERATE A TOKEN THEN SEND AS RESPONSE TO CLIENT
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      
  res.json({
    user:{
      _id:user._id,
     userName:user.Name,
     email:user.Email,
    Role: user.isAdmin,}});
    });
  } catch (err) {
    console.log("LOGIN ERROR", err);
    res.status(400).send("Signin failed");
  }
  

});


AuthRoutes.post("/createuser",  (req, res) => {  
    const user = new User(req.body);

    
    user.save()
    .then(result=>{
     res.status(200).json({
       User:result
     });
    });
    });



    module.exports = AuthRoutes;