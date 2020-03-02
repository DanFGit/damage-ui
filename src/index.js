import React from "react";
import ReactDOM from "react-dom";

import Bar from "./charts/Bar/Bar";
import Calendar from "./charts/Calendar/Calendar";
import Change from "./charts/Change/Change";
import Pie from "./charts/Pie/Pie";
import Value from "./charts/Value/Value";
import Keys from "./charts/Key/Keys";
import { getTotal, getMax, getMin } from "./helpers/stats";

import "./styles.css";

const App = () => (
  <div className="App">
    <Value value="The George Pulse" />
    <Calendar />
    <Value label="Total Spend" value={` ${getTotal()}`} />
    <Pie />
    <Value label="Biggest Round" value={`${getMax()}`} />
    <Bar />
    <Value label="Smallest Round" value={`${getMin()}`} />
    <Keys />
    <Change />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
