import React,{useState, useEffect} from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import airplane from './airplane.png'; 

import {useDispatch} from 'react-redux'
import {useSelector} from "react-redux";

function Profile() {
 const [Name, setn] = useState();
 const [Email, sete] = useState();
 const [Password, setp] = useState();
 const [Age, seta] = useState();
 const [BornIn, setb] = useState();
 const [LivesIn, setl] = useState();
 const [PhoneNumber, setpn] = useState();
 const [isAdmin, setia] = useState();
 const [ReservedFlights, setrf] = useState();
 const [ReservedSeats, setrs] = useState();


 const {auth} =useSelector((state)=>({...state}));
 var s = String(auth.user._id);
 

 const [userList,setUserList]= useState([]);
 useEffect(()=> {
 axios.get('/user/Profile/' + s)
 .then((res)=>{

  setn(res.data.Name);
  sete(res.data.Email);
  setp(res.data.Password);
  seta(res.data.Age);
  setb(res.data.BornIn);
  setl(res.data.LivesIn);
  setpn(res.data.PhoneNumber);





   console.log(res.data);
   setUserList(res.data);
 })   
},[]);
 

const myStyle={
  backgroundImage: 
"url('https://pngimg.com/uploads/plane/plane_PNG101234.png')",
  height:'50vh',
  marginTop:'-200px',
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  marginLeft: '600px',
};

  return (
    <form onSubmit={(event)=> axios.post('/user/update/' + s,{
   
  Name:Name,
  Email:Email ,
  Password:Password,
  Age:Age,
  BornIn:BornIn,
  LivesIn:LivesIn,
  PhoneNumber: PhoneNumber
  
  
    })}>






    <div className= "Profile" >
    <header className="Profile-header">
        
    <br/>

            
    <h3 style={{ color: '#3f51b5'}}>Account Settings</h3>




    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <div>
      <label style={{ fontSize: '120%' }}>
        
    Name:
    </label>

      <TextField style={{ fontSize: '108%' }}  variant="standard"  type="text" name="Name"  placeholder={Name} onChange={event=>setn(event.target.value)} />

      <label>
      <br/>   
    Email:
   
    </label>

    <TextField variant="standard"   type="text" name="Email" placeholder={Email} onChange={event=>sete(event.target.value)}  />
 
   

   
   
        </div>
        <div>
        <label>
    Password:
    <br/>
    </label>

 <TextField variant="standard"  type="text" name="Password"  placeholder={Password} onChange={event=>setp(event.target.value)} />

 <label>
     <br/>
    Age:
  
    </label>

        <TextField style={{ fontSize: '105%' }} variant="standard"  type="text" name="Age"  placeholder={Age} onChange={event=>seta(event.target.value)}  />
 
 <div>
 <label>
    Born In:
    <br/>
    </label>

    <TextField style={{ fontSize: '109%' }} variant="standard"   type="text" name="BornIn" placeholder={BornIn} onChange={event=>setb(event.target.value)} />
  
    <label>
         <br/>
 
    Lives In:
    </label>

    <TextField style={{ fontSize: '92%' }} variant="standard"  type="text" name="LivesIn"  placeholder={LivesIn} onChange={event=>setl(event.target.value)}  />
 
 </div>
      </div>
      <div>
        
      <label>
       <br/>
     
    Phone Number:
    
    </label>
    <TextField style={{ fontSize: '211%' }} variant="standard"   type="text" name="PhoneNumber" placeholder={PhoneNumber} onChange={event=>setpn(event.target.value)} />
 

    {/* <img src={airplane} alt="this is car image" /> */}


      </div>
      

      <br/>

    </Box>
    <Button style={{ fontSize: '105%' }} variant="contained"  type="submit" color="primary" >Save</Button>
    <div style={myStyle}>
      
      </div>
    
             

            
        </header>
        </div>
        </form>
    );
    }
    
    export default Profile;
    