import React from "react";

import "./Key.css";

const Key = ({ label, color }) => (
  <div className="key">
    <div
      style={{
        "background-color": color,
        width: "2vw",
        height: "2vh",
        margin: "1vw"
      }}
    />
    <h5>{label}</h5>
  </div>
);

export default Key;
