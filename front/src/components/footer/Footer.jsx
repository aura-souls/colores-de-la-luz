import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Instagram, WhatsApp } from "@mui/icons-material";
import { Box } from "@mui/material";
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
            <Typography variant="body2" color="inherit" align="left">
              {"Copyright © 2023 "}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div style={{ display: "flex", justifyContent: "right" }}>
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