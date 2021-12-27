const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./User');
const flight = require('./Flight');
const ReservedFlightSchema =  new Schema ({
  Flight: {
    type: Schema.Types.ObjectId, ref: "Flight"
    
  },
  User: {
    type: Schema.Types.ObjectId, ref: "User"
  },
  
  Reservedseats:{
    type: [],
  },
  Payed:{
    type: Boolean,
    default: false,

  },
  Amount:{
    type: Number,
  },

}, { timestamps: true });
// mongoose.models={}
const ReservedFlight = mongoose.model('ReservedFlight', ReservedFlightSchema);
module.exports = ReservedFlight;