import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f3deff",
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
});

function AdminTable({ therapy }) {
  return (
    <>
      <StyledTableRow>
        <StyledTableCell component="th" scope="row" align="center">{therapy.id}</StyledTableCell>

        <StyledTableCell align="center">{therapy.name}</StyledTableCell>

        <StyledTableCell align="center">
          {isURL(therapy.image) ? (
            <img src={therapy.image} alt={therapy.name} style={{ width: "5rem" }} />
          ) : (
            <img src={`http://127.0.0.1:8000/storage/${therapy.image}`} alt={therapy.name} style={{ width: "5rem" }} />
          )}
        </StyledTableCell>

        <StyledTableCell align="center">{therapy.description}</StyledTableCell>

        <StyledTableCell align="center">
          <div>
            <Button variant="contained" startIcon={<ModeEditIcon />} style={{ fontSize: 12, width: "7rem", marginBottom: "0.5rem", background: "#4A148C" }}>Editar</Button>
          </div>

          <div>
            <Button variant="contained" startIcon={<DeleteIcon />} style={{ fontSize: 12, width: "7rem", background: "#4A148C" }}>Borrar</Button>
          </div>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
}

function isURL(str) {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}

export default AdminTable;