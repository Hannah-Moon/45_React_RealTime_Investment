import React, { useState, useEffect } from "react";
import axios from "axios";
import { CryptoState } from "../CryptoContext";
import { CoinList } from "../config/api";

// ------------ [ MUI ]
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/system";
import { TextField, Typography, LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

// ------------ [ Table MUI ]
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const { currency } = CryptoState();
  const navigate = useNavigate();

  const fetchCoins = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(CoinList(currency));
      setCoins(data);
    } catch (err) {
      console.error("Error fetching coins:", err);
      setError("Failed to fetch coin data. Please try again later.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  // ------------ [ Copied and pased from MUI ]
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  // ------------ [ Search funciton ]
  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className="coinsTable">
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        ></TextField>

        <TableContainer component={Paper}>
          {loading ? (
            //------------ [Linear Progress for loading ]
            <LinearProgress style={{ backgroundColor: "lime" }} />
          ) : error ? (
            <Typography variant="h4" color="error">
              {error}
            </Typography>
          ) : (
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead style={{ backgroundColor: "lime" }}>
                <TableRow>
                  <StyledTableCell>Coin</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">24h Change</StyledTableCell>
                  <StyledTableCell align="right">Market Cap</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <StyledTableRow
                        onClick={() => navigate.push(`/coins/${row.id}`)}
                        className={row}
                        key={row.name}
                      >
                        <StyledTableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          {/* <div style{{display: "flex", flexDirection:"column"}}>
                        <span={{textTransform: "uppercase",frontSize: 22,}}
                        </div> */}
                          <div>
                            <span>{row.name}</span>
                            <span>{row.symbol.toUpperCase()}</span>
                          </div>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.current_price.toFixed(2)}
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          style={{ color: profit ? "green" : "red" }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.market_cap
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
