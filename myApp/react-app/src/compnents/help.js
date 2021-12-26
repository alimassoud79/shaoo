import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Shao AirLines
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
       
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
         




        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      
                    </Typography>
                    <Typography>
                    Is it safe to fly during this time of COVID-19?

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href='https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html' target="_blank" size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}

{cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      
                    </Typography>
                    <Typography>
                    What is Spirit doing to address concerns about COVID-19 coronavirus?

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href='https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html' target="_blank" size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      
                    </Typography>
                    <Typography>


                    How much does Spirit charge for bags?


                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href='https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html' target="_blank" size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      
                    </Typography>
                    <Typography>
                    What are the size and weight limits for bags?<br/>

                    This depends on the flight you reserved.

                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button  size="small">View</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      
                    </Typography>
                    <Typography>
                    How can I change or cancel my reservation? <br/>

                    You need to visit the "Show Reserved Flights" page and cancel your flight from there.

                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      
                    </Typography>
                    <Typography>

                    How can I check in and get my boarding pass?<br/>
                    You can either pay online after reserving your seat from the "Show Reserved Flights" page or pay in cash in the airport.

                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      
                    </Typography>
                    <Typography>

                   
                    Do I have to purchase a seat assignment?<br/>
                    Yes, for sure you have to.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  href='https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html' target="_blank" size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      
                    </Typography>
                    <Typography>
                    COVID-19 Frequently Asked Questions

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href='https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html' target="_blank" size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      
                    </Typography>
                    <Typography>
                    Reserving Flights Frequently Asked Questions

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href='https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html' target="_blank" size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
















































// import React from "react";
// import { Link } from "react-router-dom";

// import Button from '@material-ui/core/Button';
// import { Spoiler } from 'react-spoiler-tag'
// import 'react-spoiler-tag/dist/index.css'
 
// function Help() {

//     const SomeComponent = () => {
//         return <Spoiler text='Super secret spoiler!' />
//       }

//     const myStyle={
//         backgroundImage: 
//       "url('https://pngimg.com/uploads/plane/plane_PNG101234.png')",
//         height:'57vh',
//         marginTop:'180px',
//         fontSize:'50px',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         marginLeft: '150px',
//       };

//   return (
//     <div className= "Profile" >
  
//   {/* style={{ color: '#3f51b5'}} */}

// <br/>
//   <h3 style={{ color: '#3f51b5'}}>
// Most Common Questions
//       </h3>

//       <br/>  

//       <h6 href='' style={{ color: 'black'}}>
// 




// Is it safe to fly during this time of COVID-19?

//   </h6>


//   <br/>

//   <h6 href='' style={{ color: 'black'}}>
// What is Spirit doing to address concerns about COVID-19 coronavirus?
//   </h6>
//   <br/>

//   <h6 href='' style={{ color: 'black'}}>
// How much does Spirit charge for bags?
//   </h6>
//   <br/>

//   <h6 href='' style={{ color: 'black'}}>
// What are the size and weight limits for bags?
//   </h6>
//   <br/>

//   <h6 href='' style={{ color: 'black'}}>
// How can I change or cancel my reservation?
//   </h6>
//   <br/>

//   <h6 href='' style={{ color: 'black'}}>
// How can I check in and get my boarding pass?
//   </h6>
//   <br/>

//   <h6 href='' style={{ color: 'black'}}>
//   Do I have to purchase a seat assignment?
//   </h6>
//   <br/>

//   <h6 href='' style={{ color: 'black'}}>
//   COVID-19 Frequently Asked Questions
//   </h6>


//   <div style={myStyle}>
        
//         </div>
    
// </div>
//   )
// }
// export default Help;