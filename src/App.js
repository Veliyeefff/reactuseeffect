import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';

function App() {
  const [dataa,setdata] = useState([])
  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products")
      .then(res =>{
        setdata(res.data)
      })
  },[])

  console.log(dataa)


  return (
    <div className="App">

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align = "center">Price</TableCell>
            <TableCell align = "center">Name</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {dataa.map((dataa,index) => (
            <TableRow
              key = {index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >
                {dataa.id}
              </TableCell>
              <TableCell align = "center">
                {dataa.unitPrice}
              </TableCell>
              <TableCell align="center">
                {dataa.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}

export default App;
