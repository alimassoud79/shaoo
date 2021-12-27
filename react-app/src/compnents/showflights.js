import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { responsiveFontSizes, TextField } from "@material-ui/core";


function Handledelete(event){
  var s=String(event.currentTarget.id);
  console.log(s);
  const url='/flight/delete/' + s
  axios.post(url)
  window.location.reload(false);
}


function Showflights({}) {


  
    const [userList,setUserList]= useState([]);
    useEffect(()=> {
    axios.get('/flight/Showflights')
    .then((res)=>{
      console.log(res.data);
      setUserList(res.data);
    })   
   },[]);
     return (
         
      <Paper>
      <Table  >
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
     ) 
         
         
         
     
 

}

export default Showflights;
function Row(props){
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function Handleupdate(event){
    var s=String(event.currentTarget.id);
    console.log(s);
    axios.post('/flight/update/' + s,{
     
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

    
    <Button variant="contained" id={props.row._id} type="submit"value='delete' onClick={Handleupdate} color="primary"> update </Button>
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