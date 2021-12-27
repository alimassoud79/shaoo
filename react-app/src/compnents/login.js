import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core";
import { Router} from 'react-router-dom';
import { Link } from '@material-ui/core';
import axios from "axios";
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Appuser from './userapp';
import {useDispatch} from 'react-redux'
import {useSelector} from "react-redux";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../Reducers';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingScreen from 'react-loading-screen';


toast.configure();
const store = createStore(rootReducer,composeWithDevTools());
const customId = "custom-id-yes";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Shao AirLines
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const toastId = React.useRef(null);

  const [Email, setem] = useState();
 const [Password, setpw] = useState();


 const dispatch = useDispatch();
 const {auth} =useSelector((state)=>({...state}));


 const handleSubmit = async function(event){
  event.preventDefault(event);
  
 try {
   
   let res=  await axios.post("/auth/login",JSON.stringify({email: Email, 
   Password: Password}),
   {headers:{"Content-Type":"application/json"}})

   
    
      


  window.localStorage.setItem('auth',JSON.stringify(res.data));
  dispatch({
      type:'LOGGED_IN_USER',
      payload: res.data,
  });

  window.location.href = '/user/home';
  toast('Successfully Logged In',
       {position: toast.POSITION.TOP_RIGHT})

 }
 
 catch(err){
    if(err.response.status===400)
    { 
      if(! toast.isActive(toastId.current)) {
        toastId.current = toast.error(err.response.data,{
          position: toast.POSITION.TOP_RIGHT, textAlign: 'center' , icon: "❗️"});
      }
    
    }           

 }

   };

  return (

    
    
    <ThemeProvider theme={theme}>
     

{/* <div className="SignIn">
            <button onClick={notify}>Click Me!</button>
            </div>
       */}
      <Container  component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box  component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                             onChange={event=>setem(event.target.value)}

              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
                 onChange={event=>setpw(event.target.value)}

              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Login
            </Button>
            <Grid container>
              <Grid item xs>
                
                <Link href="#" variant="body2" >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
  
}