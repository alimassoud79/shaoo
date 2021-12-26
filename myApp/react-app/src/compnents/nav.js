
import React from "react";
import {
  Button,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

function Hlogout(){
  
  localStorage.clear();
  window.location.href = '/SignIn';
  toast('Successfully Logged Out')
}
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(0), // used to be 10
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "17px",
    marginLeft: theme.spacing(8),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography to="/user/home" variant="h3" className={classes.logo}>
          AirLines
        </Typography>
          <div className={classes.navlinks}>
            <Link style={{ marginLeft: '-950px'}} to="/user/home" className={classes.link}>
              Home
            </Link>
            <Link to="/flight/Addflight" className={classes.link}>
              Add Flight
            </Link>
            <Link to="/flight/Showflights" className={classes.link}>
              Show Flights
            </Link>
          
            <Link to="/flight/search" className={classes.link}>
              Search
            </Link>
          
            <Link style={{ marginLeft: '300px'}} to="/user/Profile" className={classes.link}>
              Profile
            </Link>
            <Button style={{ fontSize: "15px", marginTop:'-6px'}} type="submit" className={classes.link} onClick={Hlogout} >
             Logout
            </Button>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;