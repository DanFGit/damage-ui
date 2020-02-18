import React from "react";
import Key from "./Key";
import { getColor } from "../../helpers/stats";
import toPie from "../../helpers/toPie";

const Keys = () => {
  return (
    <div>
      {toPie().map(pub => (
        <Key
          key={pub.id}
          label={pub.label}
          color={getColor(pub.id)}
          value={pub.value}
        />
      ))}
    </div>
  );
};

export default Keys;
