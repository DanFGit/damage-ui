import React from "react";
import { ResponsiveBar } from "@nivo/bar";

import { formatPrice, getLocations, getColor } from "../../helpers/stats";
import toBar from "../../helpers/toBar";

const Tooltip = ({ value, id, index, ...props }) => (
  <div className="tooltip">
    <div>
      <strong>{id}</strong>
    </div>
    {index > 12 ? index - 12 : index}
    {index >= 12 ? "pm" : "am"} - {formatPrice(Number(value))}
  </div>
);

const Bar = () => (
  <div className="bar">
    <ResponsiveBar
      data={toBar()}
      keys={getLocations()}
      indexBy="hour"
      margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
      axisBottom={{
        legend: "Hour",
        legendPosition: "middle",
        legendOffset: 32
      }}
      axisLeft={{
        legend: "Amount (£)",
        legendPosition: "middle",
        legendOffset: -40
      }}
      colors={({ id }) => getColor(id)}
      enableLabel={false}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      tooltip={Tooltip}
    />
  </div>
);

export default Bar;
