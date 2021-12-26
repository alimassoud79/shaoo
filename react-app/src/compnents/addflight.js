import React,{useState} from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';

import { Box } from "@mui/system";



function Addflight() {
 const [Flight_number, setfn] = useState();
 const [DepartureTime, setDT] = useState();
 const [TO, setto] = useState();
 const [From, setFrom] = useState();
 const [ArrivalTime, setat] = useState();
 const [First, setF] = useState();
 const [EconomySeats, setE] = useState();
 const [BusinessSeats, setB] = useState();
 const [ArrivalTerminal, setater] = useState();
 const [DepartureTerminal, setDter] = useState();
 const [BaggageAllowance, setBag] = useState()
 const [Type, setType] = useState();
 const [TicketPrice, setPrice] = useState();



 const [RArrivalTime, setrat] = useState();
 const [RDepartureTime, setrDT] = useState();
 const [RArrivalTerminal, setrater] = useState();
 const [RDepartureTerminal, setrDter] = useState();
 

 
 


  return (
    <form onSubmit={(event)=> axios.post('http://localhost:8080/flight/Addflight',{
   
   Flight_number:Flight_number,
DepartureTime:DepartureTime ,
  To:TO ,
  From:From ,
  ArrivalTime:ArrivalTime,
  First:First ,
  EconomySeats: EconomySeats,
  BusinessSeats:BusinessSeats ,
  ArrivalTerminal: ArrivalTerminal,
  DepartureTerminal:DepartureTerminal,
  BaggageAllowance : BaggageAllowance,
  Type : Type,
  TicketPrice : TicketPrice,



  RArrivalTime : RArrivalTime,
  RDepartureTime : RDepartureTime,  
  RArrivalTerminal: RArrivalTerminal,
  RDepartureTerminal:RDepartureTerminal,
  
  
    }).then(window.open("http://localhost:3000/flight/Showflights"))}>
    <div className="Addflight">
    <header className="Addflight-header">
    
        
        
            <br/>
            
    <h3 style={{color: '#3f51b5'}}>Add your flight details</h3>
    <br/>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField style={{textAlign: 'center' }} variant="standard" name="Flight_number"  label="Flight Number" onChange={event=>setfn(event.target.value)} />
      </div>
      <div>
        

        <TextField variant="standard" name="From"  label="From" onChange={event=>setFrom(event.target.value)}  />
        <TextField variant="standard" name="To"  label="To" onChange={event=>setto(event.target.value)} />
        <TextField variant="standard" name="DepartureTerminal"  label="Departure Terminal" onChange={event=>setDter(event.target.value)}  />
        <TextField variant="standard" name="ArrivalTerminal"  label="Arrival Terminal" onChange={event=>setater(event.target.value)}  />

        
      </div>
      <div>
        <TextField variant="standard" name="DepartureTime" label="Departure Time" onChange={event=>setDT(event.target.value)} />
        <TextField variant="standard" name="ArrivalTime" label="Arrival Time" onChange={event=>setat(event.target.value)} />

              
      <TextField variant="standard" name="DepartureTime" label="Return Departure Time" onChange={event=>setrDT(event.target.value)} />
      <TextField variant="standard" name="ArrivalTime" label="Return Arrival Time" onChange={event=>setrat(event.target.value)} />
</div>
 
      
      <div>
        
  
    <TextField variant="standard" name="First"  label="First Seats" onChange={event=>setF(event.target.value)}  />
  
    <TextField variant="standard" name="EconomySeats" label="Economy Seats" onChange={event=>setE(event.target.value)} />
    <TextField variant="standard" name="BusinessSeats" label="Business Seats" onChange={event=>setB(event.target.value)}  />
    
    <TextField variant="standard" name="BaggageAllowance"  label="Baggage Allowance" onChange={event=>setBag(event.target.value)}  />

      </div>
      <div>

 
    <TextField variant="standard" name="TicketPrice"  label="Ticket Price" onChange={event=>setPrice(event.target.value)}  />
    <TextField style = {{width:'3%'}} variant="standard" name="Type"  label="N/RT" onChange={event=>setType(event.target.value)}  />

      </div>


      <div>
   


      </div>

      <br/>

    </Box>


      <Button style={{textAlign: 'center' }} variant="contained"  type="submit" color="primary" > Add flight </Button>

             


            
                   </header>
        </div>
        </form>
    );
    }
    
    export default Addflight;
    