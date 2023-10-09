import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Instagram, WhatsApp } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#AB47BC",
        color: "#fff",
        p: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs sm={8}>
            <Typography variant="body2" color="inherit" align="left">Copyright © 2023</Typography>
          </Grid>

          <Grid item xs={8} sm={4}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href="https://www.instagram.com" color="inherit" sx={{ pl: 1, pr: 1 }}>
                <Instagram />
              </Link>
              
              <Link href="https://www.whatsapp.com" color="inherit">
                <WhatsApp />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}