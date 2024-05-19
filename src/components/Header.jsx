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
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CryptoState } from "../CryptoContext"; // Ensure CryptoContext provides currency and setCurrency

function Header() {
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
      <AppBar color="transparent" position="static">
        {/* Make components inside of the container responsive */}
        <Container>
          <Toolbar>
            <Typography
              onClick={() => {
                console.log("Clicked");
                navigate("/HomePage");
              }}
              className="title"
              variant="h5"
              style={{
                fontWeight: "bold",
                marginBottom: 5,
                fontFamily: "Montserrat",
              }}
            >
              Realtime Investment
            </Typography>

            <InputLabel id="demo-simple-select-label"></InputLabel>

            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="selectCurrency"
              style={{ width: 100, height: 50, marginRight: 15 }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"KRW"}>KRW</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
              <MenuItem value={"JPY"}>JPY</MenuItem>
              <MenuItem value={"GBP"}>GBP</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
