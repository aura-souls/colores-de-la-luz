import React, { useEffect, useState } from "react";
import { TherapiesService } from "../../services/TherapiesService";
import AdminTable from "./AdminTable";
import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));
  
function AdminDashboard() {
    const [therapies, setTherapies] = useState([]);

    useEffect(() => {
        const api = TherapiesService();

        api.getAll().then(res => {
        setTherapies(res.data);
        })
    }, []);

  return (
    <div style={{ margin: "2rem" }}>
        <Link to="/crear-una-nueva-terapia"><Button variant="contained" startIcon={<AddToPhotosIcon/>} style={{ fontSize: 12, background: "#4A148C", borderRadius: "0.5rem 0.5rem 0 0", marginLeft: "0.15rem" }}>Agregar</Button></Link>
    
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>    
                    <TableRow>
                        <StyledTableCell align="center">Id</StyledTableCell>
                        <StyledTableCell align="center">Nombre</StyledTableCell>
                        <StyledTableCell align="center">Imagen</StyledTableCell>
                        <StyledTableCell align="center">Descripción</StyledTableCell>
                        <StyledTableCell align="center">Editar/Borrar</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        therapies.map((therapy, index) => (
                            <AdminTable key={index} therapy={therapy}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default AdminDashboard