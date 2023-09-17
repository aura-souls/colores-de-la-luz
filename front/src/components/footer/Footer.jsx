import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#AB47BC",
        color: "#fff",
        p: 6,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8} sx={{ textAlign: "left" }}>
                <Typography variant="body2" color="inherit">
              {"Copyright © "}
              <Link color="inherit" href="https://coloresdelmundo.com">
                Colores del mundo
              </Link>{" "}
              {new Date().getFullYear()}
              {"."} <br></br>
              {"Política de privacidad"}

            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: "flex-end", textAlign: "right" }}>
            {/* Redes Sociales a la derecha */}
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.whatsapp.com"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.whatsapp.com" color="inherit">
              <WhatsApp />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}