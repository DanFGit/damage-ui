import React from "react";
import { ResponsivePie } from "@nivo/pie";

import { formatPrice, getColor } from "../../helpers/stats";
import toPie from "../../helpers/toPie";

const Tooltip = ({ label, value }) => (
  <div className="tooltip">
    <div>
      <strong>{label}</strong>
    </div>
    {formatPrice(value)}
  </div>
);

const Pie = () => (
  <div className="pie">
    <ResponsivePie
      data={toPie()}
      startAngle={-90}
      endAngle={90}
      innerRadius={0.35}
      colors={({ id }) => getColor(id)}
      borderWidth={1}
      padAngle={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      enableRadialLabels={false}
      slicesLabelsSkipAngle={20}
      slicesLabelsTextColor="#fff"
      sliceLabel={e => formatPrice(e.value)}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      tooltip={Tooltip}
    />
  </div>
);

export default Pie;
