const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rFlight = require('./Reserve');


const flightSchema =  new Schema ({
  FlightNumber: {
    type: String,
    required: true,
    unique : true,
  },
  DepartureTime: {
    type: Date,
    required: true
  },

  To: {
    type: String,
    required: true
  },
  From: {
    type: String,
    required: true
  },



  RTo: {
    type: String,
    required: true
  },
  RFrom: {
    type: String,
    required: true
  },
  RArrivalTime: {
    type: Date,
    required: true
  },
  RDepartureTime: {
    type: Date,
    required: true
  },
  RArrivalTerminal: {
    type: String,
    required: true
  },
  RDepartureTerminal: {
    type: String,
    required: true
  },




  ArrivalTime: {
    type: Date,
    required: true
  },
  
  First: {
    type: Number,
    required: true,
  },
 
  EconomySeats: {
    type: Number,
    required: true,
  },
  BusinessSeats: {
    type: Number,
    required: true
  },
  ArrivalTerminal: {
    type: String,
    required: true
  },
  DepartureTerminal: {
    type: String,
    required: true
  },
  AvailableFSeats:{
    type: [],
    required: true
  },
  AvailableESeats:{
    type: [],
    required: true
  },
  AvailableBSeats:{
    type: [],
    required: true
  },
  BaggageAllowance:{
    type: String,
    required: true
  },
  Type:{
    type: String,
    required: true
  },
  TicketPrice:{
    type: Number,
    required: true
  },
  
}, { timestamps: true });
//  mongoose.models={}
const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;