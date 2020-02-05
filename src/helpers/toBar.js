import data from "../data.json";

import { TYPE_MONEY } from "./constants";

/**
 * Converts the data to bar format.
 * @param {String} type determines how to calculate the total - either amount of money spent or number of purchases
 * @returns {Array} the format expected by nivo
 */
const toBar = (type = TYPE_MONEY) => {
  const hours = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
    21: {},
    22: {},
    23: {}
  };

  data.documents.forEach(document => {
    const location = document.fields.location.stringValue.replace("&amp;", "&");
    const date = new Date(document.fields.datetime.timestampValue);
    const hour = date.getHours();

    const value = type === TYPE_MONEY ? document.fields.amount.doubleValue : 1;

    if (hours[hour][location]) hours[hour][location] += value;
    else hours[hour][location] = value;
  });

  const formatted = Object.keys(hours).map(hour => {
    const obj = {
      hour
    };

    Object.keys(hours[hour]).forEach(location => {
      obj[location] = Number(hours[hour][location].toFixed(2));
    });

    return obj;
  });

  return formatted;
};

export default toBar;
