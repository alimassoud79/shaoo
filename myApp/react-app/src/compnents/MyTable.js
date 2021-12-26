

import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


export default function MyTable({u}) {
  console.log(u)
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>FlightNumber</TableCell>
            <TableCell>DepartureTime</TableCell>
            <TableCell>To</TableCell>
            <TableCell>From</TableCell>
            <TableCell>ArrivalTime</TableCell>
            <TableCell>EconomySeats</TableCell>
            <TableCell>BusinessSeats</TableCell>
            <TableCell>ArrivalTerminal</TableCell>
            <TableCell>DepartureTerminal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {u.map(row => (
            <TableRow key={row._id}>
            <TableCell>{row.FlightNumber}</TableCell>
            <TableCell>{row.DepartureTime}</TableCell>
            <TableCell>{row.To}</TableCell>
            <TableCell>{row.From}</TableCell>
            <TableCell>{row.ArrivalTime}</TableCell>
            <TableCell>{row.EconomySeats}</TableCell>
            <TableCell>{row.BusinessSeats}</TableCell>
            <TableCell>{row.ArrivalTerminal}</TableCell>
            <TableCell>{row.DepartureTerminal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}



