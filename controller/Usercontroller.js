const express = require("express");
const { Mongoose } = require("mongoose");
const { collection, db } = require("../models/Flight");
const Flight = require('../models/Flight');
const User = require("../models/User");
const RF = require("../models/Reserve");
const UserRoutes = express.Router();
require('dotenv').config()
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
// const authController= require('./authcontroller.js');
const cors = require('cors');
const stripe = require("stripe")("sk_test_51KABeOLJRcHi1IfiKryTGkirJXZY3NaRjS7ZI7nkDGu9m0AogGtkgACmKzAyVgM3Cfarb7zUzzPdpkifs7atdRqO00Q3B3kwqg");
var crypto = require("crypto");
//const { console } = require("console");
// function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }
UserRoutes.use(express.json());
UserRoutes.use(cors());

UserRoutes.post("/checkout/:id", async (req,res) => {
//console.log("Request:", req.body);
console.log(req.body.id)

RF.findOne({User:req.params.id, Flight:req.body.id}).then
( async result=>{ 
  
  let error;
  let status;
  
  if(result!=null && result.Payed){
    status = "payed";
  }
 

else{try {
  const {product, token}=req.body;
  const customer = await
  stripe.customers.create({
    email: token.email,
    source: token.id,
  });
  var uuid = crypto.randomBytes(20).toString('hex');
  const idempotency_key = uuid;
  
  const charge = await stripe.charges.create({
    amount: product.price * 100,
    currency: "usd",
    customer: customer.id,
    receipt_email: token.email,
    description: 'Purchased the ' + product.name,
    shipping: {
      name: token.card.name,
      address: {
        line1: token.card.address_line1,
        line2: token.card.address_line2,
        city: token.card.address_city,
        country: token.card.address_country,
        postal_code: token.card.address_zip,


      }
    }
  },
  {
    idempotency_key
  }
  );

  RF.findOneAndUpdate({User:req.params.id,Flight:req.body.id},{ $set:{Amount:(product.price) , Payed : (true)}},{new : true}).then(res=>{console.log(res)})
  console.log("Charge:", {charge});
  status = "success";
  User.findById(req.params.id)
     
  .then(result => {
    
   var transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: 'aclproject23@gmail.com',
       pass: '#acl123456'
     }
   });
   console.log(result.Email)
   var mailOptions = {
     from: 'aclproject23@gmail.com',
     to: result.Email,
     subject: 'Sending Email using Node.js',
     text: 'Dear, '+result.Name+'. You successfully paid for your flight.'
   };
   
   transporter.sendMail(mailOptions, function(error, info){
     if (error) {
       console.log(error);
     } else {
       console.log('Email sent: ' + info.response);
     }
   });
    //console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
} catch (error) {
  console.error("Error:", error);
  status = "failure";
  
}
}
res.json({error, status});})
});




   UserRoutes.post('/reserve/:id', async (req,res) => {
    
  var f = false;



  RF.find({User:req.params.id, Flight:req.body.id}, async function (err, docs) {



  //console.log(f);
  
  console.log(req.body.id);
  if(docs[0]!=null){
  if( await docs[0].Flight == req.body.id)
  {
    console.log("Already Reserved");

  }

 else
  {
    const rf = new RF({
      Flight: req.body.id,
      User: req.params.id,
      
    });
    rf.save();
    
       User.findById(req.params.id)
     
       .then(result => {
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'aclproject23@gmail.com',
            pass: '#acl123456'
          }
        });
        console.log(result.Email)
        var mailOptions = {
          from: 'aclproject23@gmail.com',
to: result.Email,
          subject: 'Sending Email using Node.js',
          text: 'Dear, '+result.Name+'. Your flight reservation is confirmed.'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
         //console.log(result);
         res.send(result);
             })
             .catch(err => {
               console.log(err);
             });
    
     }




  
  }
  else
  {

    const rf = new RF({
      Flight: req.body.id,
      User: req.params.id,
      
    });
    rf.save();
    console.log(rf)
       User.findById(req.params.id)
     
       .then(result => {
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'aclproject23@gmail.com',
            pass: '#acl123456'
          }
        });
        console.log(result.Email)
        var mailOptions = {
          from: 'aclproject23@gmail.com',
          to: result.Email,
          subject: 'Sending Email using Node.js',
          text: 'Dear, '+result.Name+'. Your flight reservation is confirmed.'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
         //console.log(result);
         res.send(result);
             })
             .catch(err => {
               console.log(err);
             });
    
     }




  
  

}
  
  
  
  
  
  
  );

        
    });

 

  UserRoutes.post('/cancelreserve/:id', async (req,res) => {
    console.log(req.params.id);
    console.log(req.body.id);
await RF.findOne({User: req.params.id , Flight :req.body.id}).then( res=>{
  console.log(res);
  console.log(res.Reservedseats);

  for (let i = 0; i < res.Reservedseats.length; i++) {
    
    console.log(res.Reservedseats[i].charAt(0))
    var x = res.Reservedseats[i].charAt(0);
    
    if(x == "F" ){
      
      
      Flight.findByIdAndUpdate(req.body.id,{ $push: {AvailableFSeats : res.Reservedseats[i]}},{new : true}).catch(err => {
        console.log(err);
      
    
    
  })
    }
    if(x === "E" ){
      
      
      Flight.findByIdAndUpdate(req.body.id,{ $push: {AvailableESeats : res.Reservedseats[i]}},{new : true}).catch(err => {
        console.log(err);
      
    
    
  })
    
    
  
  }
  if(x === "B" ){
      
      
    Flight.findByIdAndUpdate(req.body.id,{ $push: {AvailableBSeats : res.Reservedseats[i]}},{new : true}).catch(err => {
      console.log(err);
    
  
  
})
  
    
  }}

  Flight.findById(req.body.id).then(res=>{
    Flight.findByIdAndUpdate(req.body.id,{First: res.AvailableFSeats.length, EconomySeats:res.AvailableESeats.length,BusinessSeats:res.AvailableBSeats },{new : true})

  })
//   ),{ EconomySeats : result.AvailableESeats.length},{new : true}).catch(err => {
//     console.log(err);
  
// })



}).then(RF.findOne({User: req.params.id , Flight :req.body.id}).then( res=>{
  
  
  console.log(res._id)
  RF.deleteOne({_id:res._id}, function (err, docs) {
  if (err){
      console.log(err)
  }
  else{
      console.log("Deleted : ", docs);
  }
});}))

    User.findById(req.params.id )
  
          .then(result => {
            var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'aclproject23@gmail.com',
                pass: '#acl123456'
              }
            });
            console.log(result.Email)
            var mailOptions = {
              from: 'aclproject23@gmail.com',
    to: result.Email
   ,               subject: 'Sending Email using Node.js',
              text: 'Dear, '+result.Name+'. Your flight reservation is cancelled.'
            };

            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
            
           // console.log(result);
            res.send(result);
          })
          .catch(err => {
            console.log(err);
          });
    });
    


    UserRoutes.get('/Profile/:id', (req,res) => {

      User.findById(req.params.id).then(result => {
                res.send(result);
      })
      .catch(err => {
        console.log(err);
      });

    
    });


    UserRoutes.post('/update/:id', (req,res) => {
      
      User.findByIdAndUpdate(req.params.id, req.body, {new : true}).then(result => {
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'aclproject23@gmail.com',
            pass: '#acl123456'
          }
        }

        );
        console.log(result.Email)
        var mailOptions = {
          from: 'aclproject23@gmail.com',
          to: result.Email,
          subject: 'Sending Email using Node.js',
          text: 'Dear, '+result.Name+'. Your profile is updated.'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });

    
    });

    
    UserRoutes.get('/Showresflights/:id', async (req, res) => {
console.log(req.params.id)
      try {
        const rfs = (await RF.find({User:req.params.id}).populate("Flight").lean().exec(function(err, post) {
          res.json(post)
        }));
    
        // const flights = await Flight.find({
        //   _id: rfs
        // }).lean().exec(); 

            // res.json(flights);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });




    function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    } 
    UserRoutes.post('/reserveseats/:id',  async (req,res) => {
      await sleep(10000);

    //   User.findByIdAndUpdate(req.params.id,{ReservedSeats:req.body.ReservedSeats},{new : true}).catch(err => {
    //     console.log(err);
      
    // });
    //console.log(req.body.ReservedSeats)
    
if (req.body.ReservedSeats!=null) {
  

     RF.findOne({User: req.params.id,Flight:req.body.id}).exec().then(
      result=> {RF.findByIdAndUpdate(result._id,{ Reservedseats : req.body.ReservedSeats},{new : true}).catch(err=>{console.log(err)});
      // console.log(result);
      // console.log(result);
      
      // console.log(result._id)
    }
    )
Flight.findById(req.body.id).then(result => {
  for (let i = 0; i <= req.body.ReservedSeats.length; i++) {
    
    if(result.AvailableFSeats.indexOf(req.body.ReservedSeats[i])!==-1){
      
      result.AvailableFSeats.splice(result.AvailableFSeats.indexOf(req.body.ReservedSeats[i]),1)
      Flight.findByIdAndUpdate(req.body.id,{ AvailableFSeats : result.AvailableFSeats},{new : true}).catch(err => {
        console.log(err);
      
    });;
    Flight.findByIdAndUpdate(req.body.id,{ First : result.AvailableFSeats.length},{new : true}).catch(err => {
      console.log(err);
    
  })
    }
    if(result.AvailableESeats.indexOf(req.body.ReservedSeats[i])!==-1){
      result.AvailableESeats.splice(result.AvailableESeats.indexOf(req.body.ReservedSeats[i]),1)
      Flight.findByIdAndUpdate(req.params.id,{ AvailableESeats : result.AvailableESeats},{new : true}).catch(err => {
        console.log(err);
      
    });
    Flight.findByIdAndUpdate(req.body.id,{ EconomySeats : result.AvailableESeats.length},{new : true}).catch(err => {
      console.log(err);
    
  })
  
  }
    if(result.AvailableBSeats.indexOf(req.body.ReservedSeats[i])!==-1){
      
      result.AvailableBSeats.splice(result.AvailableBSeats.indexOf(req.body.ReservedSeats[i]),1)
      Flight.findByIdAndUpdate(req.body.id,{ AvailableBSeats : result.AvailableBSeats},{new : true}).catch(err => {
        console.log(err);
      
    });
  
    Flight.findByIdAndUpdate(req.body.id,{ BusinessSeats : result.AvailableBSeats.length},{new : true}).catch(err => {
      console.log(err);
    
  })
  
  }
    
  }
})
.catch(err => {
  console.log(err);
});
}
    
    });






    
    // UserRoutes.get('/token', (req,res) => {
      
    //   var token = jwt.sign({username:"aly"}, 'supersecret',{expiresIn: 420});
    //   res.send(token)
    //   console.log("token: "+token);

    
    // });


    
// UserRoutes.post("/register", (req, res) => {
    
//  var Name = req.body.Name;
//  var Email = req.body.Email ;
//  var Password = req.body.Password;
//  var Age = Number.parseInt(req.body.Age);
//  var BornIn = req.body.BornIn;
//  var LivesIn = req.body.LivesIn;
//  var PhoneNumber =  req.body.PhoneNumber;
//  var MartialStatus = req.body.MartialStatus;
   
//  const nuser =new User({
//    Name:Name,
//    Email:Email ,
//    Password:Password,
//    Age:Age,
//    BornIn:BornIn,
//    LivesIn:LivesIn,
//    MartialStatus:MartialStatus,
//    PhoneNumber: PhoneNumber,
//    isAdmin: false
//    });

//    nuser.save().then(
//     data=>{
//     console.log(Name+"'s Account Added");
//   }
//   ).catch(err=>{

//     if(User.exists({Email:Email})){
//        console.log("Email Already Exists"); 
//        return res.status(409).json({
//       message: 'Mail exists'});
//     }
//   })
// });





// let refreshTokens = []

// UserRoutes.post('/token', (req, res) => {
//   const refreshToken = req.body.token
//   if (refreshToken == null) return res.sendStatus(401)
//   if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
//   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403)
//     const accessToken = generateAccessToken({ name: user.name })
//     res.json({ accessToken: accessToken })
//   })
// })

// UserRoutes.delete('/logout', (req, res) => {
//   refreshTokens = refreshTokens.filter(token => token !== req.body.token)
//   res.sendStatus(204)
// })

// function generateAccessToken(user) {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
// }



// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]
//   if (token == null) return res.sendStatus(401)

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     console.log(err)
//     if (err) return res.sendStatus(403)
//     req.user = user
//     next()
//   })
// }


// const dec = require('jwt-decode');





  
// UserRoutes.post("/login", (req, res) => {
//   var decoded = dec(req.headers)
//   console.log(decoded);
//   var Email = req.body.Email ;
//   var Password = req.body.Password;

//   if(User.exists({Email:Email},{Password:Password}))
//   {
//     //authentication

    
//   const Email = req.body.Email;
//   const em = { Email: Email };

//   const accessToken = generateAccessToken(em)
//   const refreshToken = jwt.sign(em, process.env.REFRESH_TOKEN_SECRET)
//   refreshTokens.push(refreshToken)
//   res.json({ accessToken: accessToken, refreshToken: refreshToken })
//   }  






//  });
 




module.exports = UserRoutes;