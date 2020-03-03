import React from "react";

import TrendingIcon from "../../icons/Trending";
import { getWeekTotal, formatPrice } from "../../helpers/stats";

import "./Change.css";

const Change = () => {
  const lastWeek = getWeekTotal(1);
  const weekBefore = getWeekTotal(2);

  const difference = ((lastWeek - weekBefore) / weekBefore) * 100;

  return (
    <div className="change">
      <div>Last Week</div>
      <div className="change__value">
        <h1>{formatPrice(lastWeek)}</h1>
        <div className="change__trend">
          <TrendingIcon dir={difference} />
          <span>{Math.abs(difference.toFixed(0))}%</span>
        </div>
      </div>
    </div>
  );
};

export default Change;
