import React, { useState, useEffect } from "react";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import usenightModeOn from "./hooks/geceModuAc";
const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [geceModu, setGeceModu, acikM] = usenightModeOn();

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      <Navbar geceModu={geceModu} setGeceModu={acikM} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
