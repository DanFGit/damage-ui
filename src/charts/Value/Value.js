import React from "react";

import "./Value.css";

const Value = ({ label, value }) => (
  <div className="value">
    <div>{label}</div>
    <h1>{value}</h1>
  </div>
);

export default Value;
