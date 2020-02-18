import React from "react";

import "./Value.css";

const Value = ({ label, value }) => (
  <div className="value">
    <h1>{value}</h1>
    <div>{label}</div>
  </div>
);

export default Value;
