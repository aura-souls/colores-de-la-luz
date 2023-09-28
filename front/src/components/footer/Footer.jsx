import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Instagram, WhatsApp } from "@mui/icons-material";
import { Box } from "@mui/material";
import Hidden from "@mui/material/Hidden";


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#AB47BC",
        color: "#fff",
        p: 1,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8}>
            <Hidden mdUp>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="body2" color="inherit">
                  {"Copyright ©2023 "}
                </Typography>
              </div>
            </Hidden>
            <Hidden smDown>
              <Typography variant="body2" color="inherit">
                {"Copyright ©2023 "}
              </Typography>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* Redes Sociales a la derecha en la versión de escritorio */}
            <Hidden smDown>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link href="https://www.instagram.com" color="inherit" sx={{ pl: 1, pr: 1 }}>
                  <Instagram />
                </Link>
                <Link href="https://www.whatsapp.com" color="inherit">
                  <WhatsApp />
                </Link>
              </div>
            </Hidden>
            {/* Redes Sociales debajo en la versión móvil */}
            <Hidden mdUp>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link href="https://www.instagram.com" color="inherit" sx={{ pl: 1, pr: 1 }}>
                  <Instagram />
                </Link>
                <Link href="https://www.whatsapp.com" color="inherit">
                  <WhatsApp />
                </Link>
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
