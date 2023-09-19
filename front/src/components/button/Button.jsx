import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#512872",
    },

  },
});

function MeButton() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button variant="contained" color="primary" href="#">
          {" "}
          Button {" "}
        </Button>
        <br />
      </div>
    </ThemeProvider>
  );
}

export default MeButton;
