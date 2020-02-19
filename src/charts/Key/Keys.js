import React from "react";
import Key from "./Key";
import { getColor, getPubs } from "../../helpers/stats";

const Keys = () => {
  return (
    <div>
      {getPubs().map((pub, index) => (
        <Key key={index} label={pub} color={getColor(pub)} value={pub} />
      ))}
    </div>
  );
};

export default Keys;
