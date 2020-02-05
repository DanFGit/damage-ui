import data from "../data.json";

import { TYPE_MONEY } from "./constants";

/**
 * Converts the data to calendar format.
 * @param {String} type determines how to calculate the total - either amount of money spent or number of purchases
 * @returns {Array} the format expected by nivo
 */
const toCalendar = (type = TYPE_MONEY) => {
  const days = {};

  data.documents.forEach(document => {
    const date = new Date(document.fields.datetime.timestampValue);
    const formattedDate = date.toISOString().split("T")[0];

    const value = type === TYPE_MONEY ? document.fields.amount.doubleValue : 1;

    if (days[formattedDate]) days[formattedDate] += value;
    else days[formattedDate] = value;
  });

  const formatted = Object.keys(days).map(key => ({
    day: key,
    value: Number(days[key].toFixed(2))
  }));

  return formatted;
};

export default toCalendar;
