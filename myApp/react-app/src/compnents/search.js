import React,{useState,useEffect} from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TextField } from "@material-ui/core";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from "@mui/system";
import { TypeBackground } from "@material-ui/core/styles/createPalette";
import Button from '@material-ui/core/Button';

   import { InputLabel } from "@material-ui/core";

function Handledelete(event){
  var s=String(event.currentTarget.id);
  console.log(s);
  const url='http://localhost:8080/flight/delete/' + s
  axios.post(url)
  window.location.reload(false);
  
}



function Search() {


  function Handleupdate(event){
    var s=String(event.currentTarget.id);
    console.log(s);
    axios.post('http://localhost:8080/flight/update/' + s,{
     
      FlightNumber : Flight_number,
      DepartureTime : DepartureTime ,
      To : TO ,
      From : From ,
      ArrivalTime : ArrivalTime,
     
      First : First ,
    
      EconomySeats : EconomySeats,
      BusinessSeats : BusinessSeats ,
      ArrivalTerminal : ArrivalTerminal,
      DepartureTerminal : DepartureTerminal,
      BaggageAllowance : BaggageAllowance,
      Type : Type,
      TicketPrice : TicketPrice,
   
       
        }).then((res) => {
      console.log(res)
      console.log(res.data)
 
   })
  
    
    
    
  
    }
  const Handleclick=(event)=>{
    event.preventDefault()
    axios.post('http://localhost:8080/flight/search',{
     
     FlightNumber : Flight_number,
     DepartureTime : DepartureTime ,
     To : TO ,
     From : From ,
     ArrivalTime : ArrivalTime,
    
     First : First ,
   
     EconomySeats : EconomySeats,
     BusinessSeats : BusinessSeats ,
     ArrivalTerminal : ArrivalTerminal,
     DepartureTerminal : DepartureTerminal,
     BaggageAllowance : BaggageAllowance,
      Type : Type,
      TicketPrice : TicketPrice,

      
  RArrivalTime : RArrivalTime,
  RDepartureTime : RDepartureTime,  
  RArrivalTerminal: RArrivalTerminal,
  RDepartureTerminal:RDepartureTerminal,
  
  
      
       }).then((res) => {
        setUserList(res.data);
        //  setfn(res.data.FlightNumber);
        //  setDT(res.data.DepartureTime);
        //  setto(res.data.TO);
        //  setFrom(res.data.From);
        //  setat(res.data.ArrivalTime);
        //  setF(res.data.First);
        //  setE(res.data.EconomySeats);
        //  setB(res.data.BusinessSeats);
        //  setater(res.data.ArrivalTerminal);
        //  setDter(res.data.DepartureTerminal);

     console.log(res)
     console.log(res.data)

  })
  }
  const [userList,setUserList]= useState([]);
  const [Flight_number, setfn] = useState();
  const [DepartureTime, setDT] = useState();
  const [TO, setto] = useState();
  const [From, setFrom] = useState();
  const [ArrivalTime, setat] = useState();
  const [First, setF] = useState(0);
  const [EconomySeats, setE] = useState(0);
  const [BusinessSeats, setB] = useState(0);
  const [ArrivalTerminal, setater] = useState();
  const [DepartureTerminal, setDter] = useState();
  const [BaggageAllowance, setBag] = useState();
  const [Type, setType] = useState();
  const [TicketPrice, setPrice] = useState();
    

  
 const [RArrivalTime, setrat] = useState();
 const [RDepartureTime, setrDT] = useState();
 const [RArrivalTerminal, setrater] = useState();
 const [RDepartureTerminal, setrDter] = useState();
 

  return (
      
     <form onSubmit={Handleclick}
     //{ (event)=> {
    
  //      axios.post('http://localhost:8080/flight/search',{
   
  //  FlightNumber : Flight_number,
  //  DepartureTime : DepartureTime ,
  //  To : TO ,
  //  From : From ,
  //  ArrivalTime : ArrivalTime,
  
  //  First : First ,

  //  EconomySeats : EconomySeats,
  //  BusinessSeats : BusinessSeats ,
  //  ArrivalTerminal : ArrivalTerminal,
  //  DepartureTerminal : DepartureTerminal,
   

    
    

  //   }).then(res=>{console.log(res)} ).catch((err)=>
  //   console.log(err))}}
  >
    
    <div className="Search">
    <header className="search-header">
    
        
        
            <br/>
            
    <h3 style={{ color: '#3f51b5' }}>Search</h3>

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <div>
        <TextField style={{textAlign: 'center' }} variant="standard" name="Flight_number"  label="Flight Number" onChange={event=>setfn(event.target.value)} />
        </div>
        <div>

        <TextField variant="standard" name="DepartureTime" label="Departure Time" onChange={event=>setDT(event.target.value)} />
        <TextField variant="standard" name="To"  label="To" onChange={event=>setto(event.target.value)} />
        <TextField variant="standard" name="From"  label="From" onChange={event=>setFrom(event.target.value)}  />
        <TextField variant="standard" name="ArrivalTime" label="Arrival Time" onChange={event=>setat(event.target.value)} />

        <TextField style = {{}} variant="standard" name="First"  label="First Seats" onChange={event=>setF(event.target.value)}  />
  
    <TextField variant="standard" name="EconomySeats" label="Economy Seats" onChange={event=>setE(event.target.value)} />
    <TextField variant="standard" name="BusinessSeats" label="Business Seats" onChange={event=>setB(event.target.value)}  />
 
      </div>
      <div>
        
   
    <TextField variant="standard" name="ArrivalTerminal"  label="Arrival Terminal" onChange={event=>setater(event.target.value)}  />
<TextField variant="standard" name="DepartureTerminal"  label="Departure Terminal" onChange={event=>setDter(event.target.value)}  />

         
    
 
    <TextField variant="standard" name="BaggageAllowance"  label="Baggage Allowance" onChange={event=>setBag(event.target.value)}  />

    <TextField variant="standard" name="Type"  label="Type" onChange={event=>setType(event.target.value)}  />
    <TextField variant="standard" name="TicketPrice"  label="Ticket Price" onChange={event=>setPrice(event.target.value)}  />

  <TextField variant="standard"  name="DepartureTime" label="Return DepartureTime" onChange={event=>setrDT(event.target.value)} />
  <TextField variant="standard"   name="ArrivalTime" label="Return ArrivalTime"  onChange={event=>setrat(event.target.value)} />

      </div>

      <br/>

    </Box>

    <Button variant="contained"  type="submit" color="primary"  value='submit ' > Submit </Button>

            
            
                   </header>
                   <Paper>
      <Table>
        <TableHead >
          <TableRow>
          <TableCell style={{width: '1%'}}>Flight<br/>Number</TableCell>
            <TableCell style={{width: '14%',textAlign: 'center'}}>From<br/>To</TableCell>
            <TableCell style={{width: '26%'}}>Departure Time<br/>Arrival Time</TableCell>
            <TableCell style={{width: '26%'}}>Return DepartureTime<br/>Return ArrivalTime</TableCell>
            <TableCell style={{width: '1%'}}>First<br/>Seats</TableCell>
            <TableCell style={{width: '1%'}}>Economy<br/>Seats</TableCell>
            <TableCell style={{width: '1%'}}>Business<br/>Seats</TableCell>
            <TableCell style={{width: '14%'}}>DepartureTerminal<br/>ArrivalTerminal</TableCell>
            <TableCell style={{width: '5%'}}>Baggage<br/>Allowance</TableCell>
            <TableCell style={{width: '1%'}}>Type</TableCell>
            <TableCell style={{width: '8%'}}>Price</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map(rows => (
            <Row row={rows} />)
          )}
        </TableBody>
      </Table>
    </Paper>
     
        </div>
       </form>
       
    );
    }
    
    export default Search;
    
function Row(props){
  function Handleupdate(event){
    var s=String(event.currentTarget.id);
    console.log(s);
    axios.post('http://localhost:8080/flight/update/' + s,{
     
      FlightNumber : Flight_number,
      DepartureTime : DepartureTime ,
      To : TO ,
      From : From ,
      ArrivalTime : ArrivalTime,
     
      First : First ,
    
      EconomySeats : EconomySeats,
      BusinessSeats : BusinessSeats ,
      ArrivalTerminal : ArrivalTerminal,
      DepartureTerminal : DepartureTerminal,
      BaggageAllowance : BaggageAllowance,
      Type : Type,
      TicketPrice : TicketPrice,

   

      

  RArrivalTime : RArrivalTime,
  RDepartureTime : RDepartureTime,  
  RArrivalTerminal: RArrivalTerminal,
  RDepartureTerminal:RDepartureTerminal,
  


       
        }).then((res) => {
      console.log(res)
      console.log(res.data)
 
   })
  
    
    window.location.reload(false);
    
  
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };
    



  const [Flight_number, setfn] = useState();
  const [DepartureTime, setDT] = useState();
  const [TO, setto] = useState();
  const [From, setFrom] = useState();
  const [ArrivalTime, setat] = useState();
  const [First, setF] = useState(0);
  const [EconomySeats, setE] = useState(0);
  const [BusinessSeats, setB] = useState(0);
  const [ArrivalTerminal, setater] = useState();
  const [DepartureTerminal, setDter] = useState();
  const [BaggageAllowance, setBag] = useState();
  const [Type, setType] = useState();
  const [TicketPrice, setPrice] = useState();

  
 const [RArrivalTime, setrat] = useState();
 const [RDepartureTime, setrDT] = useState();
 const [RArrivalTerminal, setrater] = useState();
 const [RDepartureTerminal, setrDter] = useState();
 


   useEffect(() => {setfn(props.row.FlightNumber);
    setDT(props.row.DepartureTime);
    setto(props.row.To);
    setFrom(props.row.From);
    setat(props.row.ArrivalTime);
    setF(props.row.First);
    setE(props.row.EconomySeats);
    setB(props.row.BusinessSeats);
    setater(props.row.ArrivalTerminal);
    setDter(props.row.DepartureTerminal);
    setBag(props.row.BaggageAllowance);
    setType(props.row.Type);
    setPrice(props.row.TicketPrice);


    setrDT(props.row.RDepartureTime);
    setrat(props.row.RArrivalTime);
    setrater(props.row.RArrivalTerminal);
    setrDter(props.row.RDepartureTerminal);


  },[])
  return(<TableRow key={props.row._id}>
    <TableCell><TextField variant="standard"  type="text" name="Flight_number"  placeholder="Flight_number" value={Flight_number} onChange={event=>setfn(event.target.value)}  />
</TableCell>
    <TableCell><TextField variant="standard"  type="text" name="From" value= {From} placeholder="From" onChange={event=>setFrom(event.target.value)}  />
    <TextField variant="standard"  type="text" name="To"  placeholder="To" value= {TO} onChange={event=>setto(event.target.value)} /></TableCell>
  <TableCell><TextField variant="standard"   type="text" name="DepartureTime" placeholder="DepartureTime" value={DepartureTime} onChange={event=>setDT(event.target.value)} />
    <TextField variant="standard"   type="text" name="ArrivalTime" placeholder="ArrivalTime" value= {ArrivalTime} onChange={event=>setat(event.target.value)} />
  </TableCell>
   {/* roundtripp */}
   <TableCell><TextField variant="standard"   type="text" name="DepartureTime" placeholder="RDepartureTime" value={RDepartureTime} onChange={event=>setrDT(event.target.value)} />
  <TextField variant="standard"   type="text" name="ArrivalTime" placeholder="RArrivalTime" value= {RArrivalTime} onChange={event=>setrat(event.target.value)} /> </TableCell>
{/* roundtripp */}
  <TableCell> <TextField variant="standard"  type="text" name="First"  placeholder="First" value={First} onChange={event=>setF(event.target.value)}  />
</TableCell>

    <TableCell> <TextField variant="standard"   type="text" name="EconomySeats" placeholder="EconomySeats" value= {EconomySeats} onChange={event=>setE(event.target.value)} /></TableCell>
    <TableCell> <TextField variant="standard"   type="text" name="BusinessSeats" placeholder="BusinessSeats" value={BusinessSeats} onChange={event=>setB(event.target.value) }  /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="DepartureTerminal"  placeholder="DepartureTerminal" value= {DepartureTerminal} onChange={event=>setDter(event.target.value)}  />
    <TextField variant="standard"  type="text" name="ArrivalTerminal"  placeholder="ArrivalTerminal" value={ArrivalTerminal} onChange={event=>setater(event.target.value)}  /></TableCell>    
    <TableCell><TextField variant="standard"  type="text" name="BaggageAllowance"  placeholder="BaggageAllowance" value= {BaggageAllowance} onChange={event=>setBag(event.target.value)}  /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="Type"  placeholder="Type" value= {Type} onChange={event=>setType(event.target.value)}  /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="TicketPrice"  placeholder="TicketPrice" value= {TicketPrice} onChange={event=>setPrice(event.target.value)}  /></TableCell>


    
    <Button variant="contained" id={props.row._id} type="submit"value='delete' onClick={Handleupdate}> update </Button>
    <Button variant="contained" id={props.row._id} type="submit"value='delete' onClick={handleClickOpen} color="secondary"> delete </Button>  
    


    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete flight"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button id ={props.row._id} onClick={Handledelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>


      


    
    
    </TableRow>)

}