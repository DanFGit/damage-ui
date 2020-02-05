import data from "../data.json";

import { TYPE_MONEY } from "./constants";

const toPie = (type = TYPE_MONEY) => {
  const locations = {};

  data.documents.forEach(document => {
    const location = document.fields.location.stringValue.replace("&amp;", "&");

    const value = type === TYPE_MONEY ? document.fields.amount.doubleValue : 1;

    if (locations[location]) locations[location] += value;
    else locations[location] = value;
  });

  const formatted = Object.keys(locations).map(key => ({
    id: key,
    label: key,
    value: Number(locations[key].toFixed(2))
  }));

  return formatted;
};

export default toPie;
