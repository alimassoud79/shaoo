
import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

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

function NavbarR() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography to="/home" variant="h3" className={classes.logo}>
          AirLines
        </Typography>
          <div className={classes.navlinks}>
            <Link  to="/home" className={classes.link}>
              Home
            </Link>
            <Link to="/guestshowflights" className={classes.link}>
              Show Flights
            </Link>     
            <Link style={{ marginRight: '390px'}} to="/help" className={classes.link}>
              Help?
            </Link>
            <Link style={{ marginRight: '200px', fontSize: '18px'}} to="/SignIn" className={classes.link}>
              Login
            </Link>
            <Link style={{ marginLeft: '-180px', fontSize: '18px'}} to="/SignUp" className={classes.link}>
              Register
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default NavbarR;