
const express = require("express");
const Flight = require('../models/Flight');
const FlightRoutes = express.Router();
var msg = " ";


var f = [];
var e = [];
var b = [];
var i = 0;


FlightRoutes.post('/update/:id', (req,res) => {

  var Fr = req.body.First;
  var ec = req.body.EconomySeats;
  var bz = req.body.BusinessSeats;
  
 f = [];
 e = [];
 b = [];
 var x;
 for( i = 0; i<Number.parseInt(Fr);i++)
 {
   x=i+1;
   f[i]="F"+x

 }
 for( i = 0; i<Number.parseInt(ec);i++)
 {
   x=i+1;

   e[i]="E"+x

 }
 for( i = 0; i<Number.parseInt(bz);i++)
 {
   x=i+1;

   b[i]="B"+x

 }
  
  console.log(f);
  console.log(e);
  console.log(b);

  console.log(req.body,"tt");
  Flight.findByIdAndUpdate(req.params.id,{AvailableFSeats:f, AvailableESeats:e,AvailableBSeats:b},{new : true}).catch(err => {
    console.log(err);
  
});
  Flight.findByIdAndUpdate(req.params.id,req.body,{new : true})
      .then(result => {
        console.log(result);
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
});
FlightRoutes.post('/delete/:id', (req,res) => {
  console.log(req.body,"tt");
  Flight.findByIdAndDelete(req.params.id,{new : true})
      .then(result => {
        console.log(result);
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
});
FlightRoutes.get('/Showflights', (req,res) => {
  
  Flight.find()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
});
FlightRoutes.get('/Addflight', (req,res) => {
  
        res.send();
});

FlightRoutes.post('/search', (req,res) => {

  
  Flight.find(req.body,function(err,docs){
    
  }
  ).where('First').gte(req.body.First).where('EconomySeats').gte(req.body.EconomySeats).where('BusinessSeats').gte(req.body.BusinessSeats).clone().then(result => {
    //console.log(result)
    return res.send(result);
  })
  .catch(err => {
    console.log(err);
  });

  


});

FlightRoutes.post("/Addflight", (req, res) => {
    
    var number = req.body.Flight_number;
    var dep = Date.parse(req.body.DepartureTime);
    var to = req.body.To;
    var from = req.body.From;
    var arr = Date.parse(req.body.ArrivalTime);
    var Fr = req.body.First;
    var ec = req.body.EconomySeats;
    var bz = req.body.BusinessSeats;
    var Arrt= req.body.ArrivalTerminal;
    var Dept= req.body.DepartureTerminal;
    var bag= req.body.BaggageAllowance;
    var type= req.body.Type;
    var price= req.body.TicketPrice;

    var rarr = Date.parse(req.body.RArrivalTime);
    var rdep = Date.parse(req.body.RDepartureTime);


var x;
    for( i = 0; i<Number.parseInt(Fr);i++)
    {
      x=i+1;
      f[i]="F"+x

    }
    for( i = 0; i<Number.parseInt(ec);i++)
    {
      x=i+1;

      e[i]="E"+x

    }
    for( i = 0; i<Number.parseInt(bz);i++)
    {
      x=i+1;

      b[i]="B"+x

    }


     if(from===to || arr<dep || rarr<rdep)
     {
       console.log("From=To Error")
     }
     else{
   const flight =new Flight({
     FlightNumber : number,
     DepartureTime : dep,
     To:to,
     From:from, 
     ArrivalTime:arr,
     First:Fr,
     EconomySeats: ec,
     BusinessSeats: bz,
     ArrivalTerminal:Arrt,
     DepartureTerminal:Dept,
    AvailableFSeats:f,
    AvailableESeats:e,
    AvailableBSeats:b,
    BaggageAllowance: bag,
    Type: type,
    TicketPrice: price,
  
  


     RTo:from,
     RFrom:to, 
     RArrivalTime:rarr,
     RDepartureTime : rdep,  
     RArrivalTerminal:Dept,
     RDepartureTerminal:Arrt,
  
  });
 
 flight.save().then(
   data=>{
    res.redirect("http:localhost:3000/flight/Showflights");
    console.log("Flight Added");
 }
 ).catch(err=>{
   console.log("Must fill all attributes");
 })
   
   
 }
});



FlightRoutes.post('/usersearch', (req,res) => {

  
  Flight.find(req.body,function(err,docs){
    
  }
  ).where('First').gte(req.body.First).where('EconomySeats').gte(req.body.EconomySeats).where('BusinessSeats').gte(req.body.BusinessSeats).clone().then(result => {
    //console.log(result)
    return res.send(result);
  })
  .catch(err => {
    console.log(err);
  });
  


});
FlightRoutes.post('/details', (req,res) => {

  // console.log(req.body.data)
  Flight.find(req.body,function(err,docs){
    
  }
  ).clone().then(result => {
    //console.log(result)
    return res.send(result);
  })
  .catch(err => {
    console.log(err);
  });
});

module.exports = FlightRoutes