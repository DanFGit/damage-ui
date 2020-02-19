import React from "react";

import "./Key.css";

const Key = ({ label, color }) => (
  <div className="key">
    <div
      style={{
        backgroundColor: color,
        width: "10vw",
        height: "20px",
        margin: "10px"
      }}
    />
    <p>{label}</p>
  </div>
);

export default Key;
