import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(Product, calories, fat, carbs, protein) {
  return { Product, calories, fat, carbs, protein };
}

const rows = [
  createData('Abstract 3D', 45.99, 6.0, 32, 142),
  createData('Sharphens illustration', 45.99, 9.0, 37, 244),
  createData('Luminous Print',54.89, 16, 24, 69),
  createData('Vivid Vision', 73.99, 3, 67, 289),
  createData('Digital Dreams', 31.99, 16, 49, 100),
];

export default function BasicTable() {
  return (
    <div className="Table">
    <h3>Product Sell</h3>
    <TableContainer component={Paper} style={{boxShadow:'0px 1px 20px 0px #808080', borderRadius:'10px',padding:'5px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:'bold'}}>Product</TableCell>
            <TableCell style={{fontWeight:'bold'}}align="left">Price</TableCell>
        
            <TableCell style={{fontWeight:'bold'}}align="left">Stock&nbsp;</TableCell>
            <TableCell style={{fontWeight:'bold'}} align="left">Total Sales&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Product}
              </TableCell>
              <TableCell style={{fontWeight:'bold'}} align="left">{`$${row.calories }`}</TableCell>
             
              <TableCell align="left">{`${row.carbs}  in stock`}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}