import React from "react";
import { Box, Typography } from "@mui/material";


const MiH2 = (props) => {
    return (
     <Box>
      <Typography variant="h3" sx={{color: props.color, textAlign: props.align }}>
        {props.texto}
      </Typography>
      </Box> 
    );
  }
  
  export default MiH2;