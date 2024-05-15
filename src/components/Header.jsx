import React from "react";
import {
  AppBar,
  MenuItem,
  Toolbar,
  Typography,
  Select,
  InputLabel,
} from "@mui/material";
import { Container } from "@mui/system";
import "./Header.css";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CryptoState } from "../CryptoContext";

function Header() {
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();

  // console.log(currency);
  // const [currency, setCurrency] = useState(""); // Define currency state
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => {
                console.log("Clicked");
                navigate("/HomePage");
              }}
              className="title"
              style={{
                fontWeight: "bold",
                fontFamily: "Montserrat",
              }}
            >
              Realtime Investment
            </Typography>

            <InputLabel id="demo-simple-select-label">Currency</InputLabel>

            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              // label="Currency"
              onChange={(e) => setCurrency(e.target.value)}
              className="selector"
              style={{ width: 100, height: 50, marginRight: 15 }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"KRW"}>KRW</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
