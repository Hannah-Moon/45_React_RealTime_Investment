import React, { useState, useEffect } from "react";
import "./Carousel.css";
import axios from "axios";
import AliceCarousel, { Link } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { TrendingCoins } from "../../config/api.jsx";
import { CryptoState } from "../../CryptoContext";
// import { numberWithCommas } from "../CoinsTable";

// export function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const { data } = await axios.get(TrendingCoins(currency));
        console.log(data);
        setTrending(data);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    const profit = coin.price_change_percentage_24h_in_currency >= 0;

    return (
      <Link className="carousel-item" key={coin.id}>
        <a className="carousel-link" href={`/coins/${coin.id}`}>
          <img
            src={coin?.image}
            alt={coin.name}
            height="80"
            style={{ marginBottom: 10 }}
          />
          <span>
            {coin?.symbol}
            &nbsp;
            <span>
              {profit && "+"}
              {coin?.price_change_percentage_24h_in_currency?.toFixed(2)}%
            </span>
          </span>
          <span style={{ fontSize: 22, fontWeight: 500 }}>
            {symbol}
            {/* {numberWithCommas(coin?.current_price.toFixed(2))} */}
          </span>
        </a>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="carousel">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Carousel;
