import React, { useMemo } from "react";
import { ResponsiveCalendar } from "@nivo/calendar";

import { formatPrice } from "../../helpers/stats";
import toCalendar from "../../helpers/toCalendar";

const Tooltip = ({ date, value }) => {
  const dateString = useMemo(() => {
    return date.toLocaleDateString(undefined, {
      weekday: "short",
      year: "2-digit",
      month: "short",
      day: "numeric"
    });
  }, [date]);

  return (
    <div className="tooltip">
      <div>
        <strong>{dateString}</strong>
      </div>
      <div>{formatPrice(value)}</div>
    </div>
  );
};

const Calendar = () => (
  <div className="calendar">
    <ResponsiveCalendar
      data={toCalendar()}
      from="2019-01-01"
      to="2020-12-31"
      emptyColor="#eeeeee"
      colors={["#ffdada", "#f2a2a2", "#e75e5e", "#db1414"]}
      margin={{ top: 40, right: 40, bottom: 0, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      tooltip={Tooltip}
    />
  </div>
);

// {
//   day:   string,
//   date:  {Date},
//   value: number,
//   color: string,
//   x:     number,
//   y:     number,
//   size:  number
// }

export default Calendar;
