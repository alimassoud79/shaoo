import React from "react";
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';

function Home() {


    const myStyle={
        backgroundImage: 
      "url('https://pngimg.com/uploads/plane/plane_PNG101234.png')",
        height:'57vh',
        marginTop:'180px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginLeft: '150px',
      };

  return (
    <div className= "Profile" >
  
  {/* style={{ color: '#3f51b5'}} */}

  <h1 style={{ color: '#3f51b5', textAlign: 'center', fontSize:'300%',fontStyle: 'italic', position: 'fixed', marginLeft: '900px'}}>
      <br/>

<br/>
Welcome to Shao AirLines

  </h1>
  <div style={myStyle}>
        
        </div>
    
</div>
  )
}
export default Home;