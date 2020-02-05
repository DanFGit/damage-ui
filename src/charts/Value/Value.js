import React from "react";

import "./Value.css";

const Value = ({ label, value }) => (
  <div className="value">
    <h1>{label}</h1>
    <div>{value}</div>
  </div>
);

export default Value;
