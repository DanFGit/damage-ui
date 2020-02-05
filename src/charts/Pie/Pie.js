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
      margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
      colors={({ id }) => getColor(id)}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      radialLabelsSkipAngle={5}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={15}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor={{ from: "color" }}
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
