import React from "react";
import ReactDOM from "react-dom";

import Bar from "./charts/Bar/Bar";
import Calendar from "./charts/Calendar/Calendar";
import Pie from "./charts/Pie/Pie";
import Value from "./charts/Value/Value";
import { getTotal, getMax, getMin } from "./helpers/stats";

import "./styles.css";

const App = () => (
  <div className="App">
    <Value label="The George Pulse" value={`Total Spend: ${getTotal()}`} />
    <Calendar />
    <Value label="Biggest Round" value={`${getMax()}`} />
    <Pie />
    <Value label="Smallest Round" value={`${getMin()}`} />
    <Bar />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
