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
import { responsiveFontSizes} from "@material-ui/core";
import Button from '@material-ui/core/Button';

import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {useSelector} from "react-redux";
import {createStore} from 'redux';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Seatmap from 'react-seatmap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();






const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

   

function Handlereserve(event){
  const {auth} =useSelector((state)=>({...state}));

  var s=String(auth.user._id);
  console.log(s);
  axios.post('/user/reserve/' + s,{
    id:event.currentTarget.id
  })
  window.location.reload(false);
  
}

const Handlecreserve =(event)=>{
  const {auth} =useSelector((state)=>({...state}));

  var s=String(auth.user._id);
  console.log(s);
  axios.post('/user/cancelreserve/' + s,{
    id:event.currentTarget.id

  })
  window.location.reload(false);
  
}



function GShowflights() {
  const {auth} =useSelector((state)=>({...state}));

  const [userList,setUserList]= useState([]);

  function Handleupdate(event){
    const {auth} =useSelector((state)=>({...state}));

    var s=String(event.currentTarget.id);
   // console.log(s);
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
      BaggageAllowance : BaggageAllowance ,
      Type : Type,
      TicketPrice : TicketPrice,
   
       
  RArrivalTime : RArrivalTime,
  RDepartureTime : RDepartureTime,  
  RArrivalTerminal: RArrivalTerminal,
  RDepartureTerminal:RDepartureTerminal,
  
  
        }).then((res) => {
      // console.log(res)
    //  console.log(res.data)
 
   })
  
    
    
    
  
    }
  const Handleclick=(event)=>{

    event.preventDefault()
    axios.post('/flight/usersearch',{
     
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
     BaggageAllowance : BaggageAllowance ,
      Type : Type,
      TicketPrice : TicketPrice,
      AvailableFSeats: AvailableFSeats,
      AvailableESeats: AvailableESeats,
      AvailableBSeats: AvailableBSeats,

  
      RArrivalTime : RArrivalTime,
      RDepartureTime : RDepartureTime,  
      RArrivalTerminal: RArrivalTerminal,
      RDepartureTerminal:RDepartureTerminal,
      
      
      
       }).then((res) => {
        setUserList(res.data);
       

    // console.log(res)
    // console.log(res.data)

  })
  }
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
  const [AvailableFSeats, setfs] = useState();
  const [AvailableESeats, setes] = useState();
  const [AvailableBSeats, setbs] = useState();
  const [fList,setfList]= useState([]);
  const [bList,setbList]= useState([]);
  const [eList,seteList]= useState([]);

  const [RArrivalTime, setrat] = useState();
  const [RDepartureTime, setrDT] = useState();
  const [RArrivalTerminal, setrater] = useState();
  const [RDepartureTerminal, setrDter] = useState();
  return (
      
     <form onSubmit={Handleclick} >
    
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
        <TextField variant="standard" name="From"  label="From" onChange={event=>setFrom(event.target.value)}  />

        <TextField variant="standard" name="To"  label="To" onChange={event=>setto(event.target.value)} />
        <TextField variant="standard" name="ArrivalTime" label="Arrival Time" onChange={event=>setat(event.target.value)} />
        <TextField variant="standard" name="DepartureTime" label="Departure Time" onChange={event=>setDT(event.target.value)} />
        <TextField variant="standard" name="DepartureTerminal"  label="Departure Terminal" onChange={event=>setDter(event.target.value)}  />

    <TextField variant="standard" name="ArrivalTerminal"  label="Arrival Terminal" onChange={event=>setater(event.target.value)}  />


        <TextField style = {{}} variant="standard" name="First"  label="First Seats" onChange={event=>setF(event.target.value)}  />
  
   

      </div>
      <div>
         <TextField variant="standard" name="EconomySeats" label="Economy Seats" onChange={event=>setE(event.target.value)} />

    <TextField variant="standard" name="BusinessSeats" label="Business Seats" onChange={event=>setB(event.target.value)}  />
         
    
 
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
            <TableCell style={{width:'2%'}}>Flight Number</TableCell>
            <TableCell style={{width:'10%'}}>From</TableCell>
            <TableCell style={{width:'10%'}}>To</TableCell>
            <TableCell style={{width:'15%'}}>Departure Time</TableCell>
            <TableCell style={{width:'15%'}}>Arrival Time</TableCell>
            <TableCell style={{width:'15%'}}>Return Departure Time</TableCell>
            <TableCell style={{width:'15%'}}> Return Arrival Time</TableCell>
             <TableCell style={{width:'2%'}}>Type</TableCell>
            <TableCell>TicketPrice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map(rows => (
            <Row2 row={rows} />)
          )}
        </TableBody>
      </Table>
    </Paper>
     
        </div>
       </form>
       
    );
    }
    
    export default GShowflights;
 

    
function Row(props){

  const {auth} =useSelector((state)=>({...state}));


  const [openR, setOpenR] = React.useState(false);

  const redirectlogin = async () => { //Reserve Seats pop up

    function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    } 

        toast('Redirecting to login to reserve');

  await sleep(5000);
 window.location.replace('/SignIn');
  };

  const handleClickOpenR = () => { //Reserve Seats pop up
    setOpenR(true);
  };

  const handleCloseR = (event) => {   /// reserveseatsconfirmmethod - working

    setOpenR(false);
    var s=String(event.currentTarget.id);


    var x=String(auth.user._id);
    console.log(x);
    axios.post('/user/reserve/' + x,{
      id:s,
    })
    window.location.replace('http://localhost:3000/user/Showresflights');
    



  axios.post('/user/reserveseats/' + x ,{
     
    ReservedSeats: allseats,
    id:s,
    
   
       
        }).then((res) => {
      //console.log(res)
     // console.log(res.data)
 
   })
  };



  const [openD, setOpenD] = React.useState(false);

  const [Detailslist,setDetailslist]= useState([]);
  const handleClickOpenD = (event) => {   //Show Details 
    setOpenD(true);
    var s = event.currentTarget.id;
    console.log(s)
    axios.post('/flight/details',{_id: event.currentTarget.id}).then((res) => {
        setDetailslist(res.data);
      })
    
  };

  const handleCloseD = () => {
    setOpenD(false);
  };




  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {   //Reserve Confirmation
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const [openC, setOpenC] = React.useState(false);

  const handleClickOpenC = () => { //Cancel Confirmation
    setOpenC(true);
  };

  const handleCloseC = () => {
    setOpenC(false);
  };



  function Handleupdate(event){
    const {auth} =useSelector((state)=>({...state}));

    var s=String(event.currentTarget.id);
    //console.log(s);
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
      //console.log(res)
      //console.log(res.data)
 
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

  const [AvailableFSeats, setfs] = useState();
  const [AvailableESeats, setes] = useState();
  const [AvailableBSeats, setbs] = useState();
  const [fList,setfList]= useState([]);
  const [bList,setbList]= useState([]);
  const [eList,seteList]= useState([]);
  const [checkf,setcf]= useState([]);
  const [checkb,setcb]= useState([]);
  const [checke,setce]= useState([]);
  const [allseats,setas]= useState([]);


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
    setfs(props.row.AvailableFSeats);
    setes(props.row.AvailableESeats);
    setbs(props.row.AvailableBSeats);
    setfList(props.row.AvailableFSeats);
    seteList(props.row.AvailableESeats);
    setbList(props.row.AvailableBSeats);


    setrDT(props.row.RDepartureTime);
    setrat(props.row.RArrivalTime);
    setrater(props.row.RArrivalTerminal);
    setrDter(props.row.RDepartureTerminal);


  },[])



  const [state, setState] = React.useState({
    AvailableFSeats: true,
    AvailableESeats: true,
    AvailableBSeats: true,
  });

  // []
  // for
  // push

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    if(event.target.name.split(",")[0]==="AvailableFSeats"&&event.target.checked===true){
      allseats.push(event.target.name.split(",")[1]);}
      if(event.target.name.split(",")[0]==="AvailableBSeats"&&event.target.checked===true){
        allseats.push(event.target.name.split(",")[1]);}
        if(event.target.name.split(",")[0]==="AvailableESeats"&&event.target.checked===true){
          allseats.push(event.target.name.split(",")[1]);}



      if(event.target.name.split(",")[0]==="AvailableFSeats"&&event.target.checked===false){
      allseats.splice(allseats.indexOf(event.target.name.split(",")[1]),1);}
        if(event.target.name.split(",")[0]==="AvailableBSeats"&&event.target.checked===false){
          allseats.splice(allseats.indexOf(event.target.name.split(",")[1]),1);}
          if(event.target.name.split(",")[0]==="AvailableESeats"&&event.target.checked===false){
            allseats.splice(allseats.indexOf(event.target.name.split(",")[1]),1);}
  };

            //console.log(checkf)
            //console.log(checke)
            //console.log(checkb)
            //console.log(allseats)
  const {AvailableFFSeats, AvailableEESeats, AvailableBBSeats} = state;




  return(<TableRow key={props.row._id}>
    <TableCell><TextField variant="standard"  name="Flight_number"  placeholder="F" value={Flight_number} onChange={event=>setfn(event.target.value)}  />
</TableCell>
    <TableCell><TextField variant="standard"  name="From" value= {From} placeholder="From" onChange={event=>setFrom(event.target.value)}  />
  
  <TextField variant="standard"  name="To"  placeholder="To" value= {TO} onChange={event=>setto(event.target.value)} /></TableCell>
  
  <TableCell><TextField variant="standard"   name="DepartureTime" placeholder="DepartureTime" value={DepartureTime} onChange={event=>setDT(event.target.value)} />

    <TextField variant="standard"   name="ArrivalTime" placeholder="ArrivalTime" value= {ArrivalTime} onChange={event=>setat(event.target.value)} />
  </TableCell>

   {/* roundtripp */}
   <TableCell><TextField variant="standard"   name="DepartureTime" placeholder="RDepartureTime" value={RDepartureTime} onChange={event=>setrDT(event.target.value)} />
 <TextField variant="standard"   name="ArrivalTime" placeholder="RArrivalTime" value= {RArrivalTime} onChange={event=>setrat(event.target.value)} /> </TableCell>
{/* roundtripp */}
  <TableCell> <TextField variant="standard"  name="First"  placeholder="First" value={First} onChange={event=>setF(event.target.value)}  />
</TableCell>

    <TableCell> <TextField variant="standard"   name="EconomySeats" placeholder="EconomySeats" value= {EconomySeats} onChange={event=>setE(event.target.value)} /></TableCell>
    <TableCell> <TextField variant="standard"   name="BusinessSeats" placeholder="BusinessSeats" value={BusinessSeats} onChange={event=>setB(event.target.value) }  /></TableCell>
    <TableCell><TextField variant="standard"  name="DepartureTerminal"  placeholder="DepartureTerminal" value= {DepartureTerminal} onChange={event=>setDter(event.target.value)}  />

   <TextField variant="standard"  name="ArrivalTerminal"  placeholder="ArrivalTerminal" value={ArrivalTerminal} onChange={event=>setater(event.target.value)}  /></TableCell>
    <TableCell><TextField variant="standard"  name="BaggageAllowance"  placeholder="BaggageAllowance" value= {BaggageAllowance} onChange={event=>setBag(event.target.value)}  /></TableCell>
   

   
   
    <TableCell><TextField variant="standard"  name="Type"  placeholder="Type" value= {Type} onChange={event=>setType(event.target.value)}  /></TableCell>
    <TableCell><TextField variant="standard"  name="TicketPrice"  placeholder="TicketPrice" value= {TicketPrice} onChange={event=>setPrice(event.target.value)}  /></TableCell>
    {/* <Button variant="contained" id={props.row._id} type="submit"value='reserve' onClick={handleClickOpen} color="primary"> reserve </Button> */}
  
    






<Dialog
        fullScreen
        open={openD}
        onClose={handleCloseD}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseD}
              aria-label="close"
            >

            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
Flight Details            </Typography>
            <Button id = {props.row._id} type = "submit" autoFocus color="inherit" onClick={handleClickOpen}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>


          
          <ListItem button>


          <Box sx={{ display: 'flex' }}>
          
    
    <div className="Reserve Seats">
    <header className="search-header">


    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormLabel component="legend">First Class Seats</FormLabel>
    
    <FormGroup>

    <Paper>
      <Table>
        <TableHead >
          <TableRow>
            <TableCell>FlightNumber</TableCell>
            <TableCell>DepartureTime</TableCell>
            <TableCell>To</TableCell>
            <TableCell>From</TableCell>
            <TableCell>ArrivalTime</TableCell>
            <TableCell>First</TableCell>
            <TableCell>EconomySeats</TableCell>
            <TableCell>BusinessSeats</TableCell>
            <TableCell>ArrivalTerminal</TableCell>
            <TableCell>DepartureTerminal</TableCell>
            <TableCell>BaggageAllowance</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>TicketPrice</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {
        Detailslist.map(rows => (
            <Row row={rows} />))}
          
        </TableBody>
      </Table>
    </Paper>
          </FormGroup>
  </FormControl>





            



            
            
                   </header>
                  
     
        </div>

 
</Box>


          </ListItem>












          <Divider />
        </List>
      </Dialog>









    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Reserve flight"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are sure you want to reserve this flight?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button id ={props.row._id} onClick={handleClickOpen, handleCloseR} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>



      
    <Dialog
        open={openC}
        onClose={handleCloseC}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Cancel flight"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are sure you want to cancel reservation of this flight?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseC}>No</Button>
          <Button id ={props.row._id} onClick={Handlecreserve} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>



      <Button  variant="contained" id={props.row._id} type="submit"value='reserve' 
      onClick={redirectlogin} color="primary"> Reserve </Button>  

      {/* henareserve */}
      
    
      <Dialog
        fullScreen
        open={openR}
        onClose={handleCloseR}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseR}
              aria-label="close"
            >

            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Reserve Seats
            </Typography>
            <Button id = {props.row._id} type = "submit" autoFocus color="inherit" onClick={handleClickOpen}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>


          
          <ListItem button>


          <Box sx={{ display: 'flex' }}>
          <form onSubmit={(event)=> axios.post('/flight/Addflight',{
   
  ReservedSeats:allseats,
  
  
    }).then(window.open("http://localhost:3000/flight/Showflights"))}>
    
    <div className="Reserve Seats">
    <header className="search-header">


    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormLabel component="legend">First Class Seats</FormLabel>
    
    <FormGroup>

          {fList.map(AvailableFSeats => (
            <FormControlLabel
            control={
              <Checkbox checked={AvailableFFSeats} onChange={handleChange} name={"AvailableFSeats," + AvailableFSeats} />
              
            }
            label={AvailableFSeats}
          />)
          )}
          </FormGroup>
  </FormControl>


  <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormLabel component="legend">Economic Class Seats</FormLabel>
    
    <FormGroup>

          {eList.map(AvailableESeats => (
            <FormControlLabel
            control={
              <Checkbox checked={AvailableEESeats} onChange={handleChange} name={"AvailableESeats," + AvailableESeats} />
            }
            label={AvailableESeats}
          />)
          )}
          </FormGroup>
  </FormControl>


  <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormLabel component="legend">Business Class Seats</FormLabel>
    
    <FormGroup>

          {bList.map(AvailableBSeats => (
            <FormControlLabel
            control={
              <Checkbox checked={AvailableBBSeats} onChange={handleChange} name={"AvailableBSeats," + AvailableBSeats} />
            }
            label={AvailableBSeats}
          />)
          )}
          </FormGroup>
  </FormControl>




            



            
            
                   </header>
                  
     
        </div>
       </form>

 
</Box>


          </ListItem>












          <Divider />
        </List>
      </Dialog>






    
    
    </TableRow>
    

    
    )

}
function Row2(props){

  const {auth} =useSelector((state)=>({...state}));


  const [openR, setOpenR] = React.useState(false);

  const handleClickOpenR = () => { //Reserve Seats pop up
    setOpenR(true);
  };

  const handleCloseR = (event) => {   //reserve seats confirm yes method
    setOpenR(false);
    var s=String(event.currentTarget.id);

    var x=String(auth.user._id);
 console.log(x);
    axios.post('/user/reserve/' + x,{
      id:s,
    })
    window.location.replace('http://localhost:3000/user/Showresflights');
    



  axios.post('/user/reserveseats/' + x ,{
     
    ReservedSeats: allseats,

   id:s,
       
        }).then((res) => {
      //console.log(res)
     // console.log(res.data)
 
   })
  };



  const [openD, setOpenD] = React.useState(false);

  const [Detailslist,setDetailslist]= useState([]);
  const handleClickOpenD = (event) => {   //Show Details 
    setOpenD(true);
    var s = event.currentTarget.id;
    console.log(s)
    axios.post('/flight/details',{_id: event.currentTarget.id}).then((res) => {
        setDetailslist(res.data);
      })
    
  };

  const handleCloseD = () => {
    setOpenD(false);
  };




  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {   //Reserve Confirmation
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const [openC, setOpenC] = React.useState(false);

  const handleClickOpenC = () => { //Cancel Confirmation
    setOpenC(true);
  };

  const handleCloseC = () => {
    setOpenC(false);
  };



  function Handleupdate(event){
    const {auth} =useSelector((state)=>({...state}));

    var s=String(event.currentTarget.id);
    //console.log(s);
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
      //console.log(res)
      //console.log(res.data)
 
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
  
  const [AvailableFSeats, setfs] = useState();
  const [AvailableESeats, setes] = useState();
  const [AvailableBSeats, setbs] = useState();
  const [fList,setfList]= useState([]);
  const [bList,setbList]= useState([]);
  const [eList,seteList]= useState([]);
  const [checkf,setcf]= useState([]);
  const [checkb,setcb]= useState([]);
  const [checke,setce]= useState([]);
  const [allseats,setas]= useState([]);




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
    setfs(props.row.AvailableFSeats);
    setes(props.row.AvailableESeats);
    setbs(props.row.AvailableBSeats);
    setfList(props.row.AvailableFSeats);
    seteList(props.row.AvailableESeats);
    setbList(props.row.AvailableBSeats);


    setrDT(props.row.RDepartureTime);
    setrat(props.row.RArrivalTime);
    setrater(props.row.RArrivalTerminal);
    setrDter(props.row.RDepartureTerminal);


  },[])


  const [state, setState] = React.useState({
    AvailableFSeats: true,
    AvailableESeats: true,
    AvailableBSeats: true,
  });

  // []
  // for
  // push

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    if(event.target.name.split(",")[0]==="AvailableFSeats"&&event.target.checked===true){
      allseats.push(event.target.name.split(",")[1]);}
      if(event.target.name.split(",")[0]==="AvailableBSeats"&&event.target.checked===true){
        allseats.push(event.target.name.split(",")[1]);}
        if(event.target.name.split(",")[0]==="AvailableESeats"&&event.target.checked===true){
          allseats.push(event.target.name.split(",")[1]);}



      if(event.target.name.split(",")[0]==="AvailableFSeats"&&event.target.checked===false){
      allseats.splice(allseats.indexOf(event.target.name.split(",")[1]),1);}
        if(event.target.name.split(",")[0]==="AvailableBSeats"&&event.target.checked===false){
          allseats.splice(allseats.indexOf(event.target.name.split(",")[1]),1);}
          if(event.target.name.split(",")[0]==="AvailableESeats"&&event.target.checked===false){
            allseats.splice(allseats.indexOf(event.target.name.split(",")[1]),1);}
  };

            //console.log(checkf)
            //console.log(checke)
            //console.log(checkb)
            //console.log(allseats)
  const {AvailableFFSeats, AvailableEESeats, AvailableBBSeats} = state;




  return(<TableRow key={props.row._id}>   {/* de el sha8ala */}
  
    <TableCell><TextField variant="standard" name="Flight_number"  placeholder="F" value={Flight_number} onChange={event=>setfn(event.target.value)}  />
</TableCell>
    <TableCell><TextField variant="standard" name="From" value= {From} placeholder="From" onChange={event=>setFrom(event.target.value)}  />
  </TableCell>
  <TableCell><TextField variant="standard" name="To"  placeholder="To" value= {TO} onChange={event=>setto(event.target.value)} /></TableCell>

  <TableCell><TextField variant="standard"  name="DepartureTime" placeholder="DepartureTime" value={DepartureTime} onChange={event=>setDT(event.target.value)} /></TableCell>

    <TableCell><TextField variant="standard"  name="ArrivalTime" placeholder="ArrivalTime" value= {ArrivalTime} onChange={event=>setat(event.target.value)} />
  </TableCell>
  
  {/* roundtripp */}
  <TableCell><TextField variant="standard"  name="DepartureTime" placeholder="RDepartureTime" value={RDepartureTime} onChange={event=>setrDT(event.target.value)} /></TableCell>
  <TableCell><TextField variant="standard"  name="ArrivalTime" placeholder="RArrivalTime" value= {RArrivalTime} onChange={event=>setrat(event.target.value)} /> </TableCell>
{/* roundtripp */}
  
  
   <TableCell><TextField variant="standard"  type="text" name="Type"  placeholder="Type" value= {Type} onChange={event=>setType(event.target.value)}  /></TableCell>
    <TableCell><TextField variant="standard"  type="text" name="TicketPrice"  placeholder="TicketPrice" value= {TicketPrice} onChange={event=>setPrice(event.target.value)}  /></TableCell>
    {/* <Button variant="contained" id={props.row._id} type="submit"value='reserve' onClick={handleClickOpen} color="primary"> reserve </Button> */}
  
    







<Dialog
        fullScreen
        open={openD}
        onClose={handleCloseD}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseD}
              aria-label="close"
              fontsize = "10px"
            >
              x
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
Flight Details            </Typography>
            
          </Toolbar>
        </AppBar>
        <List>


          
          <ListItem button>


          <Box sx={{ display: 'flex' }}>
          
    
    <div className="Reserve Seats">
    <header className="search-header">


    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormLabel component="legend"></FormLabel>
    
    <FormGroup>
                               {/* de ely gwa showflights */}
    <Paper>
      <Table>
        <TableHead >
          <TableRow>
          <TableCell style={{width: '1%'}}>Flight Number</TableCell>
            <TableCell style={{width: '12%',textAlign: 'center'}}>From<br/>To</TableCell>
            <TableCell style={{width: '26%'}}>Departure Time<br/>Arrival Time</TableCell>
            <TableCell style={{width: '26%'}}>Return Departure Time<br/>Return Arrival Time</TableCell>
            <TableCell style={{width: '1%'}}>First<br/>Seats</TableCell>
            <TableCell style={{width: '1%'}}>Economy<br/>Seats</TableCell>
            <TableCell style={{width: '1%'}}>Business<br/>Seats</TableCell>
            <TableCell style={{width: '16%'}}>Departure Terminal<br/>Arrival Terminal</TableCell>
            <TableCell style={{width: '5%'}}>Baggage<br/>Allowance</TableCell>
            <TableCell style={{width: '1%'}}>Type</TableCell>
            <TableCell style={{width: '8%'}}>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
        Detailslist.map(rows => (
            <Row row={rows} />))}
          
        </TableBody>
      </Table>
    </Paper>
          </FormGroup>
  </FormControl>





            



            
            
                   </header>
                  
     
        </div>

 
</Box>


          </ListItem>












          <Divider />
        </List>
      </Dialog>









    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Reserve flight"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are sure you want to reserve this flight?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button id ={props.row._id} onClick={handleClickOpen, handleCloseR} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>



      
    <Dialog
        open={openC}
        onClose={handleCloseC}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Cancel flight"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are sure you want to cancel reservation of this flight?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseC}>No</Button>
          <Button id ={props.row._id} onClick={Handlecreserve} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>


      <Button variant="contained" id={props.row._id} type="submit"value='details' 
      onClick={handleClickOpenD} color="inherit"> Show Details </Button>

      <Dialog
        fullScreen
        open={openR}
        onClose={handleCloseR}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseR}
              aria-label="close"
            >

            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Reserve Seats
            </Typography>
            <Button id = {props.row._id} type = "submit" autoFocus color="inherit" onClick={handleClickOpen}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>


          
          <ListItem button>


          <Box sx={{ display: 'flex' }}>
          <form onSubmit={(event)=> axios.post('/flight/Addflight',{
   
  ReservedSeats:allseats,
  
  
    }).then(window.open("http://localhost:3000/flight/Showflights"))}>
    
    <div className="Reserve Seats">
    <header className="search-header">


    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormLabel component="legend">First Class Seats</FormLabel>
    
    <FormGroup>

          {fList.map(AvailableFSeats => (
            <FormControlLabel
            control={
              <Checkbox checked={AvailableFFSeats} onChange={handleChange} name={"AvailableFSeats," + AvailableFSeats} />
              
            }
            label={AvailableFSeats}
          />)
          )}
          </FormGroup>
  </FormControl>


  <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormLabel component="legend">Economic Class Seats</FormLabel>
    
    <FormGroup>

          {eList.map(AvailableESeats => (
            <FormControlLabel
            control={
              <Checkbox checked={AvailableEESeats} onChange={handleChange} name={"AvailableESeats," + AvailableESeats} />
            }
            label={AvailableESeats}
          />)
          )}
          </FormGroup>
  </FormControl>


  <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormLabel component="legend">Business Class Seats</FormLabel>
    
    <FormGroup>

          {bList.map(AvailableBSeats => (
            <FormControlLabel
            control={
              <Checkbox checked={AvailableBBSeats} onChange={handleChange} name={"AvailableBSeats," + AvailableBSeats} />
            }
            label={AvailableBSeats}
          />)
          )}
          </FormGroup>
  </FormControl>



            



            
            
                   </header>
                  
     
        </div>
       </form>

 
</Box>


          </ListItem>












          <Divider />
        </List>
      </Dialog>






    
    
    </TableRow>
    

    
    )

}
