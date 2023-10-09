import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TherapiesService } from "../../services/TherapiesService";
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from "react-router-dom";

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
  const api = TherapiesService();
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(''); 
  const [openAlert, setOpenAlert] = useState(false);

  const handleDelete = (id) => {
    api.deleteTherapy(id).then((res) => {
        setAlert(res.data.msg);
        setOpenAlert(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }).catch((error) => {
        setError("Error al eliminar la terapia:", error);
      });
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <>
      <tr>
        <td>{therapy.id}</td>
        <td>{therapy.name}</td>
        <td>
          {isURL(therapy.image) ? (
            <img src={therapy.image} alt={therapy.name} style={{ width: "5rem" }} />
          ) : (
            <img src={`http://127.0.0.1:8000/storage/${therapy.image}`} alt={therapy.name} style={{ width: "5rem" }} />
          )}
        </td>  
        <td>{therapy.description}</td>
        <td>
            <button>Editar</button>
            <button>Borrar</button>
        </td> 
      </tr> 
      
      {error && <div className="error-message">{error}</div>}
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