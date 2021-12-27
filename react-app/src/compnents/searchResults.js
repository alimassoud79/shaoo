import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import Button from '@material-ui/core/Button';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
function Handledelete(event){
  var s=String(event.currentTarget.id);
  console.log(s);
  const url='/flight/delete/' + s
  axios.post(url)
  window.location.reload(false);
}

function SearchResults({props}) {


  
  
     const [UserList,setUserList]= useState([props]);
    useEffect(()=> {
    axios.post('/flight/search')
    .then((res)=>{
      console.log(res.data);
      setUserList(res.data);
      return (
         
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
            </TableRow>
          </TableHead>
          <TableBody>
            {UserList.map(rows => (
              <Row row={rows} />)
            )}
          </TableBody>
        </Table>
      </Paper>
       )
    })   
   },[]);
      
         
         
         
     
 

}

export default SearchResults;
function Row(props){
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
    


  },[])
  return(<TableRow key={props.row._id}>
    <TableCell><input  type="text" name="Flight_number"  placeholder="Flight_number" value={Flight_number} onChange={event=>setfn(event.target.value)}  />
</TableCell>
    <TableCell><input   type="text" name="DepartureTime" placeholder="DepartureTime" value={DepartureTime} onChange={event=>setDT(event.target.value)} /></TableCell>
    <TableCell><input  type="text" name="To"  placeholder="To" value= {TO} onChange={event=>setto(event.target.value)} /></TableCell>
    <TableCell><input  type="text" name="From" value= {From} placeholder="From" onChange={event=>setFrom(event.target.value)}  />
  </TableCell>
    <TableCell><input   type="text" name="ArrivalTime" placeholder="ArrivalTime" value= {ArrivalTime} onChange={event=>setat(event.target.value)} />
  </TableCell>
  <TableCell> <input  type="text" name="First"  placeholder="First" value={First} onChange={event=>setF(event.target.value)}  />
</TableCell>

    <TableCell> <input   type="text" name="EconomySeats" placeholder="EconomySeats" value= {EconomySeats} onChange={event=>setE(event.target.value)} /></TableCell>
    <TableCell> <input   type="text" name="BusinessSeats" placeholder="BusinessSeats" value={BusinessSeats} onChange={event=>setB(event.target.value) }  /></TableCell>
    <TableCell><input  type="text" name="ArrivalTerminal"  placeholder="ArrivalTerminal" value={ArrivalTerminal} onChange={event=>setater(event.target.value)}  /></TableCell>
    <TableCell><input  type="text" name="DepartureTerminal"  placeholder="DepartureTerminal" value= {DepartureTerminal} onChange={event=>setDter(event.target.value)}  /></TableCell>
    <Button variant="contained" id={props.row._id} type="submit"value='delete' onClick={Handleupdate}> update </Button>
    <Button variant="contained" id={props.row._id} type="submit"value='delete' onClick={Handledelete} color="primary"> delete </Button>
    </TableRow>)

}