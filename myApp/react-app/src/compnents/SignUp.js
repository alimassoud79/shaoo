import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import { LockOutlinedIcon } from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from "axios";
import SignIn from './login';
import { ReactDOM } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

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

export default function SignUp() {

 const [Name, setfn] = useState();
 const [Email, setem] = useState();
 const [Password, setpw] = useState();
 const [Age, setage] = useState();
 const [BornIn, setbn] = useState();
 const [LivesIn, setln] = useState();
 const [PhoneNumber, setpn] = useState();
 const [MartialStatus, setms] = useState();

 const [errorMessage, setErrorMessage] = useState('');
 const toastId = React.useRef(null);

  const handleSubmit = (event) => axios.post('http://localhost:8080/auth/createuser',{
   
   Name:Name,
   Email:Email ,
   Password:Password,
   Age:Age,
   BornIn:BornIn,
   LivesIn:LivesIn,
   MartialStatus: MartialStatus,
   PhoneNumber: PhoneNumber,
   
   
     }).then(
       
      window.history.pushState("", "", "http://localhost:3000/SignIn"),
      window.location.reload(),
)
  .catch((err)=> {
    

      if (err.response) {

        if(! toast.isActive(toastId.current)) {
          toastId.current = toast.error(err.response.data,{
            position: toast.POSITION.TOP_RIGHT, textAlign: 'center' , icon: "❗️"});
        }      }

        
  })

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                onChange={event=>setfn(event.target.value)}
                  autoComplete="given-name"
                  name="FullName"
                  required
                  fullWidth
                  id="FullName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 onChange={event=>setem(event.target.value)}
                 required
                 fullWidth
                 id="email"
                 label="Email Address"
                 name="email"
                 autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={event=>setpw(event.target.value)}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={event=>setage(event.target.value)}
                  required
                  fullWidth
                  name="Age"
                  label="Age"
                  type="Age"
                  id="Age"
                  autoComplete="Age"
                />
              </Grid>
              <Grid item xs={12}sm={6}>
                <TextField
                onChange={event=>setbn(event.target.value)}
                  required
                  fullWidth
                  name="BornIn"
                  label="BornIn"
                  type="BornIn"
                  id="BornIn"
                  autoComplete="BornIn"
                />
              </Grid>
              <Grid item xs={12}sm={6}>
                <TextField
                onChange={event=>setln(event.target.value)}
                  required
                  fullWidth
                  name="LivesIn"
                  label="LivesIn"
                  type="LivesIn"
                  id="LivesIn"
                  autoComplete="LivesIn"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={event=>setms(event.target.value)}
                  required
                  fullWidth
                  name="MartialStatus"
                  label="Martial Status"
                  type="MartialStatus"
                  id="MartialStatus"
                  autoComplete="MartialStatus"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={event=>setpn(event.target.value)}
                  required
                  fullWidth
                  name="PhoneNumber"
                  label="PhoneNumber"
                  type="PhoneNumber"
                  id="PhoneNumber"
                  autoComplete="PhoneNumber"
                />
              </Grid>
             
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <p style={{ color: 'red', textAlign: 'center', fontSize:'100%'}}  className="error"> {errorMessage} </p>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
        }









        // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // // eslint-disable-next-line no-console
        // console.log({
        //   email: data.get('email'),
        //   password: data.get('password'),
        // });